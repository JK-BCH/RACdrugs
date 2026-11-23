/* RAC-Drugs 대시보드 — 정적 SPA (GitHub Pages). 데이터: data/decks.json, 전체 덱: cards/*.md
   저장: localStorage (간격 반복 상태, 테스트/모의고사 기록). 외부 의존: marked (CDN, 선택). */
(function () {
  'use strict';

  var DATA = null;          // decks.json
  var DECK_BY_ID = {};
  var CARDS_BY_DECK = {};
  var CARD_BY_ID = {};
  var APP = document.getElementById('app');
  var TOPINFO = document.getElementById('topbar-info');
  var TYPE_LABEL = { R: 'Recall', A: 'Application', An: 'Analysis' };
  var INTERVALS = [0, 1, 3, 7, 14, 30, 60, 120];   // Leitner 상자별 일수
  var examTimer = null;

  /* ---------- 저장소 ---------- */
  function store(key, val) {
    if (val === undefined) {
      try { return JSON.parse(localStorage.getItem(key) || 'null'); } catch (e) { return null; }
    }
    localStorage.setItem(key, JSON.stringify(val));
    return val;
  }
  function srs() { return store('rac.srs') || {}; }
  function saveSrs(s) { store('rac.srs', s); }
  function history() { return store('rac.history') || []; }
  function pushHistory(entry) { var h = history(); h.push(entry); if (h.length > 200) h = h.slice(-200); store('rac.history', h); }

  /* ---------- 유틸 ---------- */
  function esc(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }
  function mdLite(s) {
    // 카드 뒷면용 가벼운 마크다운: **굵게**, `코드`, 줄바꿈
    var h = esc(s);
    h = h.replace(/\*\*([^*]+)\*\*/g, '<b>$1</b>');
    h = h.replace(/`([^`]+)`/g, '<code>$1</code>');
    h = h.replace(/\n/g, '<br>');
    return h;
  }
  function mdFull(s) {
    if (window.marked && typeof window.marked.parse === 'function') {
      try { return window.marked.parse(s); } catch (e) { /* fall through */ }
    }
    return '<pre>' + esc(s) + '</pre>';
  }
  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; }
    return a;
  }
  function pad2(n) { return (n < 10 ? '0' : '') + n; }
  function todayStr(offsetDays) {
    var d = new Date(); if (offsetDays) d.setDate(d.getDate() + offsetDays);
    return d.getFullYear() + '-' + pad2(d.getMonth() + 1) + '-' + pad2(d.getDate());
  }
  function daysBetween(a, b) { // b - a (문자열 YYYY-MM-DD)
    var da = new Date(a + 'T00:00:00'), db = new Date(b + 'T00:00:00');
    return Math.round((db - da) / 86400000);
  }
  function addDays(dateStr, n) { var d = new Date(dateStr + 'T00:00:00'); d.setDate(d.getDate() + n); return d.getFullYear() + '-' + pad2(d.getMonth() + 1) + '-' + pad2(d.getDate()); }
  function fmtMMSS(sec) { var m = Math.floor(sec / 60), s = sec % 60; return m + ':' + pad2(s); }
  function truncate(s, n) { return s.length > n ? s.slice(0, n) + '…' : s; }
  function toast(msg) {
    var t = document.querySelector('.toast');
    if (!t) { t = document.createElement('div'); t.className = 'toast'; document.body.appendChild(t); }
    t.textContent = msg; t.classList.add('show');
    setTimeout(function () { t.classList.remove('show'); }, 1800);
  }
  function qs(sel, root) { return (root || document).querySelector(sel); }
  function qsa(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
  function deckLabel(id) { var d = DECK_BY_ID[id]; return d ? d.title : id; }
  function deckShort(id) { return id.replace('Review_', '복습 ').replace('P2_', 'P2 '); }
  function weekLabel(d) {
    if (d.phase === 2) return 'Phase 2 특화';
    return d.week ? d.week + '주차' : '';
  }

  /* ---------- 라우팅 ---------- */
  function parseHash() {
    var h = location.hash.replace(/^#/, '') || '/';
    var path = h, query = '';
    var qi = h.indexOf('?');
    if (qi >= 0) { path = h.slice(0, qi); query = h.slice(qi + 1); }
    var params = {};
    query.split('&').forEach(function (kv) {
      if (!kv) return; var p = kv.split('='); params[decodeURIComponent(p[0])] = decodeURIComponent(p[1] || '');
    });
    var segs = path.split('/').filter(Boolean);
    return { path: path, segs: segs, params: params };
  }
  function nav(hash) { location.hash = hash; }
  function setActiveNav(key) {
    qsa('.bottomnav a').forEach(function (a) { a.classList.toggle('active', a.getAttribute('data-nav') === key); });
  }
  function render() {
    if (examTimer) { clearInterval(examTimer); examTimer = null; }
    window.scrollTo(0, 0);
    var r = parseHash();
    var head = r.segs[0] || '';
    if (!head) { setActiveNav('home'); return viewHome(); }
    if (head === 'flash') { setActiveNav('flash'); return viewFlash(r.params); }
    if (head === 'summary') { setActiveNav('summary'); return r.segs[1] ? viewSummaryDeck(r.segs[1]) : viewSummaryList(r.params); }
    if (head === 'deck') { setActiveNav('summary'); return viewDeckFull(r.segs[1]); }
    if (head === 'quiz') { setActiveNav('quiz'); return viewQuiz(r.params); }
    if (head === 'exam') { setActiveNav('exam'); return viewExam(r.params); }
    if (head === 'history') { setActiveNav('home'); return viewHistory(); }
    APP.innerHTML = '<p>없는 페이지</p>';
  }

  /* ---------- 간격 반복 (Leitner) ---------- */
  function cardState(id) { return srs()[id] || { box: 0, due: null, seen: 0, ok: 0, ng: 0, last: null }; }
  function rate(id, grade) { // grade: 1 다시, 2 어려움, 3 알겠음, 4 쉬움
    var s = srs(); var st = s[id] || { box: 0, due: null, seen: 0, ok: 0, ng: 0, last: null };
    st.seen += 1; st.last = todayStr();
    if (grade === 1) { st.box = 0; st.ng += 1; st.due = todayStr(); }
    else if (grade === 2) { st.box = Math.max(1, st.box); st.ok += 1; st.due = todayStr(1); }
    else if (grade === 3) { st.box = Math.min(INTERVALS.length - 1, st.box + 1); st.ok += 1; st.due = todayStr(INTERVALS[st.box]); }
    else { st.box = Math.min(INTERVALS.length - 1, st.box + 2); st.ok += 1; st.due = todayStr(INTERVALS[st.box]); }
    s[id] = st; saveSrs(s);
    return st;
  }
  function markFromQuiz(id, correct) {
    var s = srs(); var st = s[id] || { box: 0, due: null, seen: 0, ok: 0, ng: 0, last: null };
    st.seen += 1; st.last = todayStr();
    if (correct) { st.ok += 1; if (!st.due || st.due < todayStr()) { st.box = Math.min(INTERVALS.length - 1, st.box + 1); st.due = todayStr(INTERVALS[st.box]); } }
    else { st.ng += 1; st.box = 0; st.due = todayStr(); }
    s[id] = st; saveSrs(s);
  }
  function dueCards() {
    var s = srs(), t = todayStr();
    return DATA.cards.filter(function (c) { var st = s[c.id]; return st && st.due && st.due <= t; });
  }
  function seenCount() { var s = srs(); return Object.keys(s).filter(function (k) { return CARD_BY_ID[k]; }).length; }
  function masteredCount() { var s = srs(); return Object.keys(s).filter(function (k) { return CARD_BY_ID[k] && s[k].box >= 3; }).length; }

  /* ---------- 일정 ---------- */
  function todayDeck() {
    var t = todayStr();
    var ex = DATA.exam;
    var exact = DATA.schedule.filter(function (s) { return s.date === t; });
    if (exact.length) return { deck: DECK_BY_ID[exact[0].deck], note: '오늘 덱' };
    if (t < ex.phase1_start) return { deck: DECK_BY_ID.Ch01, note: 'Phase 1 시작 전 — 12/01 Ch.1부터. 선행 학습용' };
    if (t <= ex.phase1_end) {
      var prev = DATA.schedule.filter(function (s) { return s.date < t; });
      var last = prev[prev.length - 1];
      return { deck: last ? DECK_BY_ID[last.deck] : DECK_BY_ID.Ch01, note: '달력상 빈 날 — 직전 덱' };
    }
    if (t <= ex.phase2_end) return { deck: null, note: 'Phase 2 — 특화 6덱 + 도메인 통합. 아래 P2 덱과 "간격 반복"을 돌려라.' };
    return { deck: null, note: 'Phase 3 — 매일 모의고사 30문항 + 틀린 영역 카드 복습.' };
  }
  function weekDecks(week) { return DATA.decks.filter(function (d) { return d.phase === 1 && d.week === week; }); }

  /* ---------- 홈 ---------- */
  function viewHome() {
    var ex = DATA.exam, t = todayStr();
    var dApply = daysBetween(t, ex.apply_deadline), dExam = daysBetween(t, ex.exam_start);
    var td = todayDeck();
    var due = dueCards().length;
    var hist = history();
    var lastExam = hist.filter(function (h) { return h.kind === 'exam'; }).slice(-1)[0];
    var lastQuiz = hist.filter(function (h) { return h.kind === 'quiz'; }).slice(-1)[0];
    var seen = seenCount(), mastered = masteredCount(), total = DATA.cards.length;
    TOPINFO.textContent = '시험 D-' + dExam;

    var html = '';
    html += '<div class="card"><div class="row"><div class="grow"><div class="small muted">' + t + '</div>' +
      '<h1 style="margin:2px 0 4px">오늘</h1><div class="muted small">' + esc(td.note) + '</div></div>' +
      '<div style="text-align:right"><div class="small muted">신청 마감 D-' + dApply + '</div><div class="small muted">시험 D-' + dExam + '</div></div></div>';
    if (td.deck) {
      var d = td.deck;
      html += '<div style="margin-top:10px"><b>' + esc(d.title) + '</b> <span class="pill">' + esc(weekLabel(d)) + '</span><span class="pill">' + d.n + '장</span></div>' +
        '<div class="btnrow three" style="margin-top:10px">' +
        '<a class="btn primary" href="#/flash?deck=' + d.id + '">카드 시작</a>' +
        '<a class="btn" href="#/summary/' + d.id + '">요약</a>' +
        '<a class="btn" href="#/quiz?deck=' + d.id + '">숏테스트</a></div>';
    } else {
      html += '<div class="btnrow two" style="margin-top:10px"><a class="btn primary" href="#/flash?mode=p2">P2 특화 카드</a><a class="btn" href="#/exam">모의고사</a></div>';
    }
    html += '</div>';

    html += '<div class="card"><div class="row"><h2 style="margin:0" class="grow">간격 반복</h2>' +
      (due ? '<a class="btn primary" href="#/flash?mode=due">복습 ' + due + '장</a>' : '<span class="pill ok">오늘 복습 없음</span>') + '</div>' +
      '<div class="stat-grid" style="margin-top:10px">' +
      '<div class="stat"><b>' + seen + '</b><span>본 카드</span></div>' +
      '<div class="stat"><b>' + mastered + '</b><span>안정(3상자+)</span></div>' +
      '<div class="stat"><b>' + total + '</b><span>전체</span></div></div>' +
      '<div class="progress"><span style="width:' + (100 * seen / total).toFixed(1) + '%"></span></div>' +
      '<div class="small muted">상자 간격: ' + INTERVALS.slice(1).join(' · ') + '일. "다시"는 당일 재출제.</div></div>';

    html += '<div class="card"><h2 style="margin:0 0 8px">성적</h2>';
    if (!lastExam && !lastQuiz) html += '<div class="muted small">아직 기록 없음. 숏테스트·모의고사를 풀면 도메인별 정답률이 여기 쌓인다.</div>';
    if (lastQuiz) html += '<div class="small">최근 숏테스트: <b>' + lastQuiz.score + '/' + lastQuiz.total + '</b> (' + esc(lastQuiz.label) + ', ' + lastQuiz.date + ')</div>';
    if (lastExam) html += '<div class="small">최근 모의고사: <b>' + lastExam.score + '/' + lastExam.total + '</b> (' + Math.round(100 * lastExam.score / lastExam.total) + '%, ' + lastExam.date + ')</div>';
    html += domainBars(aggregateDomains(hist)) + '<div style="margin-top:8px"><a class="btn" href="#/history">기록 전체</a></div></div>';

    html += '<div class="card"><h2 style="margin:0 0 8px">Phase 1 진도</h2><div class="list">';
    for (var w = 1; w <= 8; w++) {
      var ds = weekDecks(w);
      if (!ds.length) continue;
      var done = ds.filter(function (d) { return deckProgress(d.id).seen >= d.n; }).length;
      html += '<a class="item" href="#/summary?week=' + w + '"><b>' + w + '주차</b> <span class="sub">' + ds[0].date.slice(5) + ' ~ ' + ds[ds.length - 1].date.slice(5) + ' · ' + ds.length + '덱 · 완료 ' + done + '</span></a>';
    }
    html += '<a class="item" href="#/summary?week=p2"><b>Phase 2 특화</b> <span class="sub">6덱 (OTP · 361/351 · RMAT · Potency · Comparability · EU ATMP)</span></a>';
    html += '</div></div>';

    html += '<div class="small muted" style="text-align:center">기준일 ' + ex.cutoff + ' · 데이터 ' + esc(DATA.generated) + ' · <a href="cards/index.md">덱 목차(md)</a></div>';
    APP.innerHTML = html;
  }
  function deckProgress(deckId) {
    var s = srs(); var cs = CARDS_BY_DECK[deckId] || []; var seen = 0, ok = 0, ng = 0;
    cs.forEach(function (c) { var st = s[c.id]; if (st) { seen++; ok += st.ok; ng += st.ng; } });
    return { seen: seen, ok: ok, ng: ng, n: cs.length };
  }
  function aggregateDomains(hist) {
    var agg = {}; Object.keys(DATA.domains).forEach(function (k) { agg[k] = { ok: 0, n: 0 }; });
    hist.forEach(function (h) {
      if (!h.byDomain) return;
      Object.keys(h.byDomain).forEach(function (k) { if (agg[k]) { agg[k].ok += h.byDomain[k].ok; agg[k].n += h.byDomain[k].n; } });
    });
    return agg;
  }
  function domainBars(agg) {
    var html = '<div class="domain-bars">';
    Object.keys(DATA.domains).forEach(function (k) {
      var a = agg[k]; var pct = a.n ? Math.round(100 * a.ok / a.n) : null;
      html += '<div class="bar"><div class="lbl"><span>Domain ' + k + ' <span class="muted">' + esc(DATA.domains[k].name) + ' · ' + DATA.domains[k].weight + '%</span></span><span>' + (pct === null ? '—' : pct + '% (' + a.ok + '/' + a.n + ')') + '</span></div>' +
        '<div class="progress"><span class="' + (pct !== null && pct >= 70 ? 'ok' : '') + '" style="width:' + (pct || 0) + '%"></span></div></div>';
    });
    return html + '</div>';
  }

  /* ---------- 덱 선택 UI (공용) ---------- */
  function deckOptionsHtml(selected) {
    var html = '';
    var groups = [];
    for (var w = 1; w <= 8; w++) { var ds = weekDecks(w); if (ds.length) groups.push({ label: w + '주차', decks: ds }); }
    groups.push({ label: 'Phase 2 특화', decks: DATA.decks.filter(function (d) { return d.phase === 2; }) });
    groups.forEach(function (g) {
      html += '<optgroup label="' + g.label + '">';
      g.decks.forEach(function (d) { html += '<option value="' + d.id + '"' + (selected === d.id ? ' selected' : '') + '>' + esc(deckShort(d.id)) + ' — ' + esc(truncate(d.title, 46)) + '</option>'; });
      html += '</optgroup>';
    });
    return html;
  }
  function scopeOptionsHtml(selected) {
    var opts = [['today', '오늘 덱'], ['week', '이번 주(오늘까지)'], ['todate', '지금까지 나온 전부'], ['phase1', 'Phase 1 전체'], ['p2', 'Phase 2 특화'], ['all', '전체 1,215장']];
    return opts.map(function (o) { return '<option value="' + o[0] + '"' + (selected === o[0] ? ' selected' : '') + '>' + o[1] + '</option>'; }).join('');
  }
  function cardsForScope(scope, deckId) {
    var t = todayStr();
    if (scope === 'deck' && deckId) return CARDS_BY_DECK[deckId] || [];
    if (scope === 'today') { var td = todayDeck(); return td.deck ? CARDS_BY_DECK[td.deck.id] : DATA.cards.filter(function (c) { return DECK_BY_ID[c.deck].phase === 2; }); }
    if (scope === 'week') {
      var td2 = todayDeck(); var w = td2.deck ? td2.deck.week : null;
      return DATA.cards.filter(function (c) { var d = DECK_BY_ID[c.deck]; return w ? (d.week === w && d.date <= t) : d.phase === 2; });
    }
    if (scope === 'todate') return DATA.cards.filter(function (c) { var d = DECK_BY_ID[c.deck]; return d.date && d.date <= t; }).concat(t > DATA.exam.phase1_end ? DATA.cards.filter(function (c) { return DECK_BY_ID[c.deck].phase === 2; }) : []);
    if (scope === 'phase1') return DATA.cards.filter(function (c) { return DECK_BY_ID[c.deck].phase === 1; });
    if (scope === 'p2') return DATA.cards.filter(function (c) { return DECK_BY_ID[c.deck].phase === 2; });
    return DATA.cards;
  }
  function filterTypes(cards, types) { if (!types || !types.length) return cards; return cards.filter(function (c) { return types.indexOf(c.type) >= 0; }); }

  /* ---------- 플래시카드 ---------- */
  var flash = null; // 세션 상태
  function viewFlash(params) {
    if (params.mode === 'due' || params.mode === 'p2' || params.deck || params.scope) { startFlash(params); return; }
    var td = todayDeck();
    var html = '<h1>플래시카드</h1><div class="card">' +
      '<label class="small muted">덱</label><select id="f-deck">' + deckOptionsHtml(td.deck ? td.deck.id : 'P2_OTP') + '</select>' +
      '<div class="row" style="margin-top:10px"><label class="inline"><input type="checkbox" id="f-shuffle" checked> 섞기</label>' +
      '<label class="inline"><input type="checkbox" id="f-R" checked> R</label><label class="inline"><input type="checkbox" id="f-A" checked> A</label><label class="inline"><input type="checkbox" id="f-An" checked> An</label></div>' +
      '<div class="btnrow two" style="margin-top:12px"><button class="btn primary" id="f-start">덱 시작</button>' +
      '<a class="btn" href="#/flash?mode=due">오늘 복습 ' + dueCards().length + '장</a></div>' +
      '<div class="small muted" style="margin-top:8px">카드를 탭하면 뒤집힌다. 평가: 다시(당일 재출제) · 어려움(1일) · 알겠음(상자+1) · 쉬움(상자+2). 키보드: 스페이스 뒤집기, 1~4 평가.</div></div>';
    html += '<div class="card"><h2 style="margin:0 0 6px">범위로 시작</h2><select id="f-scope">' + scopeOptionsHtml('todate') + '</select>' +
      '<div class="btnrow two" style="margin-top:10px"><button class="btn" id="f-scope-start">범위 전체</button><button class="btn" id="f-scope-weak">범위 중 틀린 카드</button></div></div>';
    APP.innerHTML = html;
    qs('#f-start').onclick = function () {
      var types = ['R', 'A', 'An'].filter(function (k) { return qs('#f-' + k).checked; });
      nav('#/flash?deck=' + qs('#f-deck').value + '&types=' + types.join(',') + '&shuffle=' + (qs('#f-shuffle').checked ? 1 : 0));
    };
    qs('#f-scope-start').onclick = function () { nav('#/flash?scope=' + qs('#f-scope').value + '&shuffle=1'); };
    qs('#f-scope-weak').onclick = function () { nav('#/flash?scope=' + qs('#f-scope').value + '&weak=1&shuffle=1'); };
  }
  function startFlash(params) {
    var cards, label;
    if (params.mode === 'due') { cards = dueCards(); label = '오늘 복습'; }
    else if (params.mode === 'p2') { cards = cardsForScope('p2'); label = 'Phase 2 특화'; }
    else if (params.deck) { cards = CARDS_BY_DECK[params.deck] || []; label = deckShort(params.deck); }
    else { cards = cardsForScope(params.scope); label = '범위: ' + params.scope; }
    if (params.types) cards = filterTypes(cards, params.types.split(',').filter(Boolean));
    if (params.weak) { var s = srs(); cards = cards.filter(function (c) { var st = s[c.id]; return st && st.ng > 0 && st.box <= 1; }); label += ' (틀린 카드)'; }
    if (params.shuffle === '1' || params.mode === 'due') cards = shuffle(cards);
    if (!cards.length) { APP.innerHTML = '<h1>플래시카드</h1><div class="card">해당 카드가 없다. <a href="#/flash">돌아가기</a></div>'; return; }
    flash = { cards: cards, i: 0, flipped: false, label: label, again: [], done: 0, grades: { 1: 0, 2: 0, 3: 0, 4: 0 } };
    renderFlashCard();
  }
  function renderFlashCard() {
    var f = flash;
    if (f.i >= f.cards.length) {
      if (f.again.length) { f.cards = shuffle(f.again); f.again = []; f.i = 0; toast('"다시" 카드 재출제'); }
      else { return renderFlashDone(); }
    }
    var c = f.cards[f.i]; var d = DECK_BY_ID[c.deck]; var st = cardState(c.id);
    var html = '<div class="row"><div class="grow"><b>' + esc(f.label) + '</b> <span class="muted small">' + (f.i + 1) + '/' + f.cards.length + (f.again.length ? ' (+' + f.again.length + ' 다시)' : '') + '</span></div>' +
      '<a class="small" href="#/flash">종료</a></div>' +
      '<div class="progress"><span style="width:' + (100 * f.i / f.cards.length).toFixed(1) + '%"></span></div>' +
      '<div class="small muted" style="margin-bottom:6px"><span class="pill">' + esc(deckShort(c.deck)) + ' #' + c.n + '</span><span class="pill">' + TYPE_LABEL[c.type] + '</span><span class="pill">Domain ' + c.domain + '</span>' +
      (st.seen ? '<span class="pill ' + (st.box >= 3 ? 'ok' : (st.box === 0 && st.ng ? 'bad' : '')) + '">상자 ' + st.box + ' · ' + st.ok + '○ ' + st.ng + '×</span>' : '<span class="pill">새 카드</span>') + '</div>';
    html += '<div class="card flashcard' + (f.flipped ? ' flipped' : '') + '" id="fc">';
    if (!f.flipped) html += '<div class="side-label">FRONT</div><div class="front">' + esc(c.front) + '</div><div class="hint">탭해서 뒤집기</div>';
    else html += '<div class="side-label">BACK</div><div class="back">' + mdLite(c.back) + '</div><div class="hint muted small" style="margin-top:12px">Q: ' + esc(truncate(c.front, 120)) + '</div>';
    html += '</div>';
    if (f.flipped) html += '<div class="btnrow"><button class="btn bad" data-g="1">다시</button><button class="btn warn" data-g="2">어려움</button><button class="btn ok" data-g="3">알겠음</button><button class="btn primary" data-g="4">쉬움</button></div>';
    else html += '<div class="btnrow two"><button class="btn" id="fc-skip">건너뛰기</button><button class="btn primary" id="fc-flip">뒤집기</button></div>';
    html += '<div class="small muted" style="margin-top:10px"><a href="#/summary/' + d.id + '">이 덱 요약 보기</a></div>';
    APP.innerHTML = html;
    qs('#fc').onclick = flipFlash;
    if (qs('#fc-flip')) qs('#fc-flip').onclick = flipFlash;
    if (qs('#fc-skip')) qs('#fc-skip').onclick = function () { f.i++; f.flipped = false; renderFlashCard(); };
    qsa('[data-g]').forEach(function (b) { b.onclick = function () { gradeFlash(parseInt(b.getAttribute('data-g'), 10)); }; });
  }
  function flipFlash() { flash.flipped = !flash.flipped; renderFlashCard(); }
  function gradeFlash(g) {
    var f = flash; var c = f.cards[f.i];
    rate(c.id, g); f.grades[g]++; f.done++;
    if (g === 1) f.again.push(c);
    f.i++; f.flipped = false; renderFlashCard();
  }
  function renderFlashDone() {
    var f = flash;
    APP.innerHTML = '<h1>세션 끝</h1><div class="card"><b>' + esc(f.label) + '</b> — ' + f.done + '회 평가' +
      '<div class="stat-grid" style="margin-top:10px"><div class="stat"><b>' + f.grades[1] + '</b><span>다시</span></div><div class="stat"><b>' + f.grades[2] + '</b><span>어려움</span></div><div class="stat"><b>' + f.grades[3] + '</b><span>알겠음</span></div><div class="stat"><b>' + f.grades[4] + '</b><span>쉬움</span></div></div>' +
      '<div class="btnrow two" style="margin-top:12px"><a class="btn" href="#/flash">다른 덱</a><a class="btn primary" href="#/">홈</a></div></div>';
    flash = null;
  }
  document.addEventListener('keydown', function (e) {
    if (!flash || !qs('#fc')) return;
    if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); flipFlash(); }
    else if (flash.flipped && /^[1-4]$/.test(e.key)) gradeFlash(parseInt(e.key, 10));
  });

  /* ---------- 요약집 ---------- */
  function viewSummaryList(params) {
    var html = '<h1>요약집</h1><div class="card tight"><input type="search" id="s-q" placeholder="덱 제목·요약 검색 (예: 505(o)(4), PRAC, 351)"></div><div id="s-list"></div>';
    APP.innerHTML = html;
    var listEl = qs('#s-list');
    function draw(q) {
      q = (q || '').trim().toLowerCase();
      var groups = [];
      for (var w = 1; w <= 8; w++) { var ds = weekDecks(w); if (ds.length) groups.push({ key: String(w), label: w + '주차', decks: ds }); }
      groups.push({ key: 'p2', label: 'Phase 2 특화', decks: DATA.decks.filter(function (d) { return d.phase === 2; }) });
      var out = '';
      groups.forEach(function (g) {
        if (params.week && params.week !== g.key && !q) return;
        var ds = g.decks.filter(function (d) { return !q || (d.title + ' ' + d.summary + ' ' + d.id).toLowerCase().indexOf(q) >= 0; });
        if (!ds.length) return;
        out += '<div class="card"><h2 style="margin:0 0 6px">' + g.label + '</h2><div class="list">';
        ds.forEach(function (d) {
          var p = deckProgress(d.id);
          out += '<a class="item" href="#/summary/' + d.id + '"><b>' + esc(deckShort(d.id)) + '</b> ' + esc(d.title) + '<div class="sub">' + (d.date || 'Phase 2') + ' · ' + d.n + '장 · 본 카드 ' + p.seen + '</div></a>';
        });
        out += '</div></div>';
      });
      listEl.innerHTML = out || '<div class="card muted">검색 결과 없음</div>';
    }
    draw('');
    qs('#s-q').oninput = function (e) { draw(e.target.value); };
  }
  function viewSummaryDeck(id) {
    var d = DECK_BY_ID[id];
    if (!d) { APP.innerHTML = '<p>없는 덱</p>'; return; }
    var p = deckProgress(id);
    var html = '<div class="small muted"><a href="#/summary">요약집</a> › ' + esc(deckShort(id)) + '</div><h1>' + esc(d.title) + '</h1>' +
      '<div class="small muted" style="margin-bottom:8px">' + (d.date ? d.date + ' · ' : '') + esc(weekLabel(d)) + ' · ' + d.n + '장 · 본 카드 ' + p.seen + ' (○' + p.ok + ' ×' + p.ng + ')</div>' +
      '<div class="btnrow three"><a class="btn primary" href="#/flash?deck=' + id + '&shuffle=1&types=R,A,An">카드</a><a class="btn" href="#/quiz?deck=' + id + '">숏테스트</a><a class="btn" href="#/deck/' + id + '">전체 덱 읽기</a></div>';
    html += '<div class="card"><h2 style="margin:0 0 6px">' + (d.kind === 'review' ? '비교표' : '핵심 요약') + '</h2><div class="md">' + mdFull(d.summary || '_(없음)_') + '</div></div>';
    html += '<div class="card"><h2 style="margin:0 0 6px">검증 메모</h2><div class="md small">' + mdFull(d.memo || '_(없음)_') + '</div></div>';
    if (d.sources) html += '<div class="card"><h2 style="margin:0 0 6px">1차 출처</h2><div class="md small">' + mdFull(d.sources) + '</div></div>';
    html += '<div class="card"><h2 style="margin:0 0 6px">카드 목록</h2><div class="list">';
    (CARDS_BY_DECK[id] || []).forEach(function (c) {
      var st = cardState(c.id);
      html += '<a class="item" href="#/flash?deck=' + id + '&shuffle=0&types=R,A,An"><span class="pill">' + c.n + '</span><span class="pill">' + c.type + '</span><span class="pill">' + c.domain + '</span>' + (st.seen ? '<span class="pill ' + (st.ng && st.box === 0 ? 'bad' : (st.box >= 3 ? 'ok' : '')) + '">상자 ' + st.box + '</span>' : '') + ' ' + esc(truncate(c.front, 110)) + '</a>';
    });
    html += '</div></div>';
    APP.innerHTML = html;
  }
  function viewDeckFull(id) {
    var d = DECK_BY_ID[id];
    if (!d) { APP.innerHTML = '<p>없는 덱</p>'; return; }
    APP.innerHTML = '<div class="small muted"><a href="#/summary/' + id + '">요약</a> › 전체</div><div class="card md" id="deck-md">불러오는 중…</div>';
    fetch(d.md).then(function (r) { if (!r.ok) throw new Error(r.status); return r.text(); })
      .then(function (md) { qs('#deck-md').innerHTML = mdFull(md); })
      .catch(function (e) { qs('#deck-md').innerHTML = '<p class="muted">덱 파일을 읽지 못했다 (' + esc(e.message) + '). <a href="' + d.md + '">원본 열기</a></p>'; });
  }

  /* ---------- 문항 생성 (4지선다) ---------- */
  function makeQuestion(card, pool) {
    var same = pool.filter(function (c) { return c.id !== card.id && c.domain === card.domain && c.back !== card.back; });
    var sameDeck = same.filter(function (c) { return c.deck === card.deck; });
    var other = same.filter(function (c) { return c.deck !== card.deck; });
    var picks = shuffle(sameDeck).slice(0, 2);
    var rest = shuffle(other.concat(sameDeck.filter(function (c) { return picks.indexOf(c) < 0; })));
    while (picks.length < 3 && rest.length) picks.push(rest.shift());
    if (picks.length < 3) { // 같은 도메인 부족 시 전체에서
      var any = shuffle(DATA.cards.filter(function (c) { return c.id !== card.id && c.back !== card.back && picks.indexOf(c) < 0; }));
      while (picks.length < 3 && any.length) picks.push(any.shift());
    }
    var options = shuffle([{ text: card.back, correct: true }].concat(picks.map(function (c) { return { text: c.back, correct: false }; })));
    return { card: card, options: options, answer: null, flagged: false };
  }
  function buildQuestions(cards, pool, n, typeMix) {
    var chosen;
    if (typeMix) {
      var byType = { R: shuffle(cards.filter(function (c) { return c.type === 'R'; })), A: shuffle(cards.filter(function (c) { return c.type === 'A'; })), An: shuffle(cards.filter(function (c) { return c.type === 'An'; })) };
      var want = { R: Math.round(n * 0.35), A: Math.round(n * 0.5), An: 0 }; want.An = n - want.R - want.A;
      chosen = [];
      ['R', 'A', 'An'].forEach(function (k) { chosen = chosen.concat(byType[k].slice(0, want[k])); });
      if (chosen.length < n) { var left = shuffle(cards.filter(function (c) { return chosen.indexOf(c) < 0; })); chosen = chosen.concat(left.slice(0, n - chosen.length)); }
      chosen = shuffle(chosen);
    } else chosen = shuffle(cards).slice(0, n);
    return chosen.map(function (c) { return makeQuestion(c, pool); });
  }
  function optionHtml(o, idx, state) { // state: '', 'selected', 'correct', 'wrong'
    var letter = 'ABCD'[idx];
    var long = o.text.length > 230;
    return '<button class="option ' + state + '" data-i="' + idx + '"><span class="letter">' + letter + '</span>' +
      (long ? '<span class="trunc">' + mdLite(truncate(o.text, 230)) + '<span class="expand-link" data-expand="1">더 보기</span></span><span class="full">' + mdLite(o.text) + '</span>' : mdLite(o.text)) + '</button>';
  }
  function bindExpand(root) {
    qsa('[data-expand]', root).forEach(function (el) {
      el.onclick = function (e) { e.stopPropagation(); el.closest('.option').classList.add('expanded'); };
    });
  }
  function scoreByDomain(questions) {
    var by = {}; Object.keys(DATA.domains).forEach(function (k) { by[k] = { ok: 0, n: 0 }; });
    var byType = { R: { ok: 0, n: 0 }, A: { ok: 0, n: 0 }, An: { ok: 0, n: 0 } };
    var score = 0;
    questions.forEach(function (q) {
      var ok = q.answer !== null && q.options[q.answer].correct;
      by[q.card.domain].n++; byType[q.card.type].n++;
      if (ok) { score++; by[q.card.domain].ok++; byType[q.card.type].ok++; }
    });
    return { score: score, byDomain: by, byType: byType };
  }

  /* ---------- 숏테스트 ---------- */
  var quiz = null;
  function viewQuiz(params) {
    if (params.start === '1') { startQuiz(params); return; }
    var td = todayDeck();
    var html = '<h1>숏테스트</h1><div class="card">' +
      '<label class="small muted">범위</label><select id="q-scope"><option value="deck">덱 하나</option>' + scopeOptionsHtml('') + '</select>' +
      '<div id="q-deck-wrap" style="margin-top:8px"><select id="q-deck">' + deckOptionsHtml(params.deck || (td.deck ? td.deck.id : 'P2_OTP')) + '</select></div>' +
      '<div class="row" style="margin-top:10px"><label class="inline">문항 <select id="q-n" style="width:auto"><option>10</option><option>15</option><option>20</option></select></label>' +
      '<label class="inline"><input type="checkbox" id="q-R" checked> R</label><label class="inline"><input type="checkbox" id="q-A" checked> A</label><label class="inline"><input type="checkbox" id="q-An" checked> An</label></div>' +
      '<button class="btn primary block" id="q-start" style="margin-top:12px">시작</button>' +
      '<div class="small muted" style="margin-top:8px">문항 = 카드 앞면, 보기 = 정답 뒷면 + 같은 도메인 카드 뒷면 3개. 고르면 바로 정오답과 해설(뒷면)이 보인다. 틀린 카드는 간격 반복에서 상자 0으로 내려간다.</div></div>';
    APP.innerHTML = html;
    var sc = qs('#q-scope');
    sc.onchange = function () { qs('#q-deck-wrap').style.display = sc.value === 'deck' ? '' : 'none'; };
    qs('#q-start').onclick = function () {
      var types = ['R', 'A', 'An'].filter(function (k) { return qs('#q-' + k).checked; });
      nav('#/quiz?start=1&scope=' + sc.value + '&deck=' + qs('#q-deck').value + '&n=' + qs('#q-n').value + '&types=' + types.join(','));
    };
  }
  function startQuiz(params) {
    var scope = params.scope || 'deck';
    var cards = filterTypes(cardsForScope(scope, params.deck), (params.types || '').split(',').filter(Boolean));
    var n = Math.min(parseInt(params.n || '10', 10), cards.length);
    if (!cards.length) { APP.innerHTML = '<h1>숏테스트</h1><div class="card">카드가 없다. <a href="#/quiz">돌아가기</a></div>'; return; }
    var pool = scope === 'deck' ? DATA.cards.filter(function (c) { return DECK_BY_ID[c.deck].phase === DECK_BY_ID[params.deck].phase; }) : cards.length >= 40 ? cards : DATA.cards;
    quiz = { qs: buildQuestions(cards, pool, n, false), i: 0, label: scope === 'deck' ? deckShort(params.deck) : '범위: ' + scope, answered: false };
    renderQuizQ();
  }
  function renderQuizQ() {
    var z = quiz;
    if (z.i >= z.qs.length) return renderQuizDone();
    var q = z.qs[z.i]; var c = q.card;
    var html = '<div class="row"><div class="grow"><b>' + esc(z.label) + '</b> <span class="muted small">' + (z.i + 1) + '/' + z.qs.length + '</span></div><a class="small" href="#/quiz">종료</a></div>' +
      '<div class="progress"><span style="width:' + (100 * z.i / z.qs.length).toFixed(1) + '%"></span></div>' +
      '<div class="small muted"><span class="pill">' + esc(deckShort(c.deck)) + '</span><span class="pill">' + TYPE_LABEL[c.type] + '</span><span class="pill">Domain ' + c.domain + '</span></div>' +
      '<div class="card"><b>' + esc(c.front) + '</b></div><div id="q-opts">';
    q.options.forEach(function (o, idx) {
      var st = '';
      if (q.answer !== null) st = o.correct ? 'correct' : (q.answer === idx ? 'wrong' : '');
      html += optionHtml(o, idx, st);
    });
    html += '</div>';
    if (q.answer !== null) html += '<div class="card" style="margin-top:8px">' + (q.options[q.answer].correct ? '<span class="pill ok">정답</span>' : '<span class="pill bad">오답</span>') + '<div class="md" style="margin-top:6px">' + mdLite(c.back) + '</div></div><button class="btn primary block" id="q-next">' + (z.i + 1 < z.qs.length ? '다음' : '결과') + '</button>';
    APP.innerHTML = html;
    bindExpand(APP);
    qsa('#q-opts .option').forEach(function (b) {
      b.onclick = function () {
        if (q.answer !== null) return;
        q.answer = parseInt(b.getAttribute('data-i'), 10);
        markFromQuiz(c.id, q.options[q.answer].correct);
        renderQuizQ();
      };
      if (q.answer !== null) b.disabled = true;
    });
    if (qs('#q-next')) qs('#q-next').onclick = function () { z.i++; renderQuizQ(); };
  }
  function renderQuizDone() {
    var z = quiz; var r = scoreByDomain(z.qs);
    pushHistory({ kind: 'quiz', date: todayStr(), label: z.label, score: r.score, total: z.qs.length, byDomain: r.byDomain, byType: r.byType });
    var html = '<h1>결과 ' + r.score + '/' + z.qs.length + '</h1><div class="card">' + domainBars(r.byDomain) + '</div>';
    var wrong = z.qs.filter(function (q) { return q.answer === null || !q.options[q.answer].correct; });
    if (wrong.length) {
      html += '<div class="card"><h2 style="margin:0 0 6px">틀린 문항 ' + wrong.length + '</h2>';
      wrong.forEach(function (q) { html += '<div style="margin:10px 0;padding-top:8px;border-top:1px solid var(--line)"><span class="pill">' + esc(deckShort(q.card.deck)) + ' #' + q.card.n + '</span><div><b>' + esc(q.card.front) + '</b></div><div class="small md" style="margin-top:4px">' + mdLite(q.card.back) + '</div></div>'; });
      html += '</div>';
    }
    html += '<div class="btnrow two"><a class="btn" href="#/quiz">다시</a><a class="btn primary" href="#/">홈</a></div>';
    APP.innerHTML = html; quiz = null;
  }

  /* ---------- 모의고사 ---------- */
  var exam = null;
  function viewExam(params) {
    if (params.start === '1') { startExam(params); return; }
    var html = '<h1>모의고사</h1><div class="card">' +
      '<label class="small muted">문항 수 · 시간(1.25분/문항)</label><select id="e-n"><option value="120">120문항 · 150분 (실전)</option><option value="60">60문항 · 75분</option><option value="30" selected>30문항 · 38분 (Phase 3 일일)</option></select>' +
      '<label class="small muted" style="display:block;margin-top:8px">출제 범위</label><select id="e-scope"><option value="todate">지금까지 나온 덱</option><option value="phase1">Phase 1 전체</option><option value="all" selected>전체(Phase 1 + 2)</option><option value="p2">Phase 2 특화만</option></select>' +
      '<label class="inline" style="margin-top:10px"><input type="checkbox" id="e-weight" checked> 도메인 가중 27/27/13/22/11 · 유형 35/50/15</label>' +
      '<button class="btn primary block" id="e-start" style="margin-top:12px">시작</button>' +
      '<div class="small muted" style="margin-top:8px">제출 전까지 정오답을 보여주지 않는다. 번호판에서 이동·깃발 표시 가능. 시간이 끝나면 자동 제출. 결과는 도메인·유형별로 저장된다.</div></div>';
    html += '<div class="card"><h2 style="margin:0 0 6px">최근 기록</h2>' + historyTable('exam', 5) + '</div>';
    APP.innerHTML = html;
    qs('#e-start').onclick = function () { nav('#/exam?start=1&n=' + qs('#e-n').value + '&scope=' + qs('#e-scope').value + '&weight=' + (qs('#e-weight').checked ? 1 : 0)); };
  }
  function startExam(params) {
    var n = parseInt(params.n || '30', 10);
    var cards = cardsForScope(params.scope || 'all');
    if (cards.length < 8) { APP.innerHTML = '<h1>모의고사</h1><div class="card">범위에 카드가 너무 적다. <a href="#/exam">돌아가기</a></div>'; return; }
    n = Math.min(n, cards.length);
    var chosen = [];
    if (params.weight === '1') {
      var keys = Object.keys(DATA.domains); var alloc = {}; var sum = 0;
      keys.forEach(function (k) { alloc[k] = Math.floor(n * DATA.domains[k].weight / 100); sum += alloc[k]; });
      var order = keys.slice().sort(function (a, b) { return (n * DATA.domains[b].weight / 100 % 1) - (n * DATA.domains[a].weight / 100 % 1); });
      for (var i = 0; sum < n; i++) { alloc[order[i % order.length]]++; sum++; }
      keys.forEach(function (k) {
        var dc = cards.filter(function (c) { return c.domain === k; });
        var pick = buildQuestions(dc, cards, Math.min(alloc[k], dc.length), true).map(function (q) { return q.card; });
        chosen = chosen.concat(pick);
      });
      if (chosen.length < n) { var left = shuffle(cards.filter(function (c) { return chosen.indexOf(c) < 0; })); chosen = chosen.concat(left.slice(0, n - chosen.length)); }
      chosen = shuffle(chosen);
    } else chosen = shuffle(cards).slice(0, n);
    exam = { qs: chosen.map(function (c) { return makeQuestion(c, cards); }), i: 0, secs: Math.round(n * 75), started: Date.now(), label: (params.scope || 'all') + ' · ' + n + '문항', submitted: false };
    renderExamQ();
    examTimer = setInterval(function () {
      if (!exam || exam.submitted) return;
      exam.secs--; var t = qs('#e-timer');
      if (t) { t.textContent = fmtMMSS(Math.max(0, exam.secs)); t.classList.toggle('low', exam.secs < 300); }
      if (exam.secs <= 0) { toast('시간 종료 — 자동 제출'); submitExam(); }
    }, 1000);
  }
  function renderExamQ() {
    var x = exam; var q = x.qs[x.i]; var c = q.card;
    var answered = x.qs.filter(function (q2) { return q2.answer !== null; }).length;
    var html = '<div class="row"><div class="grow"><b>모의고사</b> <span class="muted small">' + (x.i + 1) + '/' + x.qs.length + ' · 답 ' + answered + '</span></div><span class="timer" id="e-timer">' + fmtMMSS(x.secs) + '</span></div>';
    html += '<div class="qgrid">';
    x.qs.forEach(function (q2, idx) { html += '<button data-go="' + idx + '" class="' + (idx === x.i ? 'current ' : '') + (q2.flagged ? 'flagged' : (q2.answer !== null ? 'answered' : '')) + '">' + (idx + 1) + '</button>'; });
    html += '</div>';
    html += '<div class="small muted"><span class="pill">' + TYPE_LABEL[c.type] + '</span><span class="pill">Domain ' + c.domain + '</span></div>' +
      '<div class="card"><b>' + esc(c.front) + '</b></div><div id="e-opts">';
    q.options.forEach(function (o, idx) { html += optionHtml(o, idx, q.answer === idx ? 'selected' : ''); });
    html += '</div><div class="btnrow three"><button class="btn" id="e-prev"' + (x.i === 0 ? ' disabled' : '') + '>이전</button><button class="btn warn" id="e-flag">' + (q.flagged ? '깃발 해제' : '깃발') + '</button><button class="btn" id="e-next"' + (x.i === x.qs.length - 1 ? ' disabled' : '') + '>다음</button></div>' +
      '<button class="btn primary block" id="e-submit" style="margin-top:12px">제출 (' + answered + '/' + x.qs.length + ')</button><div style="margin-top:6px"><a class="small muted" href="#/exam" id="e-quit">그만두기</a></div>';
    APP.innerHTML = html;
    bindExpand(APP);
    qsa('#e-opts .option').forEach(function (b) { b.onclick = function () { q.answer = parseInt(b.getAttribute('data-i'), 10); renderExamQ(); }; });
    qsa('[data-go]').forEach(function (b) { b.onclick = function () { x.i = parseInt(b.getAttribute('data-go'), 10); renderExamQ(); }; });
    qs('#e-prev').onclick = function () { if (x.i > 0) { x.i--; renderExamQ(); } };
    qs('#e-next').onclick = function () { if (x.i < x.qs.length - 1) { x.i++; renderExamQ(); } };
    qs('#e-flag').onclick = function () { q.flagged = !q.flagged; renderExamQ(); };
    qs('#e-submit').onclick = function () {
      var un = x.qs.length - answered;
      if (un > 0 && !confirm('미답 ' + un + '문항이 있다. 제출할까?')) return;
      submitExam();
    };
    qs('#e-quit').onclick = function (e) { if (!confirm('기록 없이 그만둘까?')) e.preventDefault(); else { exam = null; } };
  }
  function submitExam() {
    var x = exam; if (!x || x.submitted) return;
    x.submitted = true; if (examTimer) { clearInterval(examTimer); examTimer = null; }
    var r = scoreByDomain(x.qs);
    x.qs.forEach(function (q) { markFromQuiz(q.card.id, q.answer !== null && q.options[q.answer].correct); });
    var used = Math.round((Date.now() - x.started) / 60000);
    pushHistory({ kind: 'exam', date: todayStr(), label: x.label, score: r.score, total: x.qs.length, byDomain: r.byDomain, byType: r.byType, minutes: used });
    var pct = Math.round(100 * r.score / x.qs.length);
    var html = '<h1>모의고사 결과 ' + r.score + '/' + x.qs.length + ' (' + pct + '%)</h1>' +
      '<div class="card"><div class="small muted">' + esc(x.label) + ' · ' + used + '분 사용</div>' + domainBars(r.byDomain) +
      '<div class="small" style="margin-top:8px">유형: ' + ['R', 'A', 'An'].map(function (k) { var t = r.byType[k]; return TYPE_LABEL[k] + ' ' + (t.n ? Math.round(100 * t.ok / t.n) + '% (' + t.ok + '/' + t.n + ')' : '—'); }).join(' · ') + '</div></div>';
    html += '<div class="card"><h2 style="margin:0 0 6px">문항 검토</h2><div class="qgrid">';
    x.qs.forEach(function (q, idx) { var ok = q.answer !== null && q.options[q.answer].correct; html += '<button data-rev="' + idx + '" class="' + (ok ? 'right' : 'wrongq') + '">' + (idx + 1) + '</button>'; });
    html += '</div><div id="e-review" class="muted small">번호를 누르면 문항·정답·내 답이 보인다.</div></div>';
    html += '<div class="btnrow two"><a class="btn" href="#/exam">다시</a><a class="btn primary" href="#/">홈</a></div>';
    APP.innerHTML = html;
    qsa('[data-rev]').forEach(function (b) {
      b.onclick = function () {
        var q = x.qs[parseInt(b.getAttribute('data-rev'), 10)];
        var out = '<div><span class="pill">' + esc(deckShort(q.card.deck)) + ' #' + q.card.n + '</span><span class="pill">Domain ' + q.card.domain + '</span></div><div style="margin:6px 0"><b>' + esc(q.card.front) + '</b></div>';
        q.options.forEach(function (o, idx) { out += optionHtml(o, idx, o.correct ? 'correct' : (q.answer === idx ? 'wrong' : '')); });
        qs('#e-review').innerHTML = out; qs('#e-review').className = '';
        bindExpand(qs('#e-review'));
        qsa('#e-review .option').forEach(function (ob) { ob.onclick = function () { ob.classList.add('expanded'); }; });
      };
    });
    exam = null;
  }

  /* ---------- 기록 ---------- */
  function historyTable(kind, limit) {
    var rows = history().filter(function (h) { return !kind || h.kind === kind; }).slice(-(limit || 50)).reverse();
    if (!rows.length) return '<div class="muted small">기록 없음</div>';
    var html = '<table class="small" style="width:100%;border-collapse:collapse">';
    rows.forEach(function (h) {
      html += '<tr style="border-bottom:1px solid var(--line)"><td style="padding:5px 0">' + h.date + '</td><td>' + (h.kind === 'exam' ? '모의' : '숏') + '</td><td>' + esc(h.label) + '</td><td style="text-align:right"><b>' + h.score + '/' + h.total + '</b> ' + Math.round(100 * h.score / h.total) + '%</td></tr>';
    });
    return html + '</table>';
  }
  function viewHistory() {
    var hist = history();
    var html = '<h1>기록</h1><div class="card"><h2 style="margin:0 0 6px">도메인 누적 정답률</h2>' + domainBars(aggregateDomains(hist)) + '</div>' +
      '<div class="card"><h2 style="margin:0 0 6px">테스트·모의고사</h2>' + historyTable(null, 100) + '</div>' +
      '<div class="card"><h2 style="margin:0 0 6px">데이터</h2><div class="btnrow two"><button class="btn" id="h-export">백업(JSON 복사)</button><button class="btn bad" id="h-reset">전부 초기화</button></div>' +
      '<div class="small muted" style="margin-top:6px">저장은 이 브라우저의 localStorage. 폰을 바꾸면 백업 JSON을 아래 칸에 붙여 복원.</div><input type="text" id="h-import" placeholder="백업 JSON 붙여넣고 Enter" style="margin-top:8px"></div>';
    APP.innerHTML = html;
    qs('#h-export').onclick = function () {
      var payload = JSON.stringify({ srs: srs(), history: history() });
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(payload).then(function () { toast('복사됨'); }, function () { prompt('복사:', payload); });
      else prompt('복사:', payload);
    };
    qs('#h-reset').onclick = function () { if (confirm('간격 반복 상태와 기록을 전부 지울까?')) { localStorage.removeItem('rac.srs'); localStorage.removeItem('rac.history'); toast('초기화'); render(); } };
    qs('#h-import').onkeydown = function (e) {
      if (e.key !== 'Enter') return;
      try { var p = JSON.parse(e.target.value); if (p.srs) saveSrs(p.srs); if (p.history) store('rac.history', p.history); toast('복원됨'); render(); }
      catch (err) { toast('JSON 형식 오류'); }
    };
  }

  /* ---------- 시작 ---------- */
  fetch('data/decks.json').then(function (r) { if (!r.ok) throw new Error('decks.json ' + r.status); return r.json(); })
    .then(function (data) {
      DATA = data;
      data.decks.forEach(function (d) { DECK_BY_ID[d.id] = d; CARDS_BY_DECK[d.id] = []; });
      data.cards.forEach(function (c) { CARD_BY_ID[c.id] = c; CARDS_BY_DECK[c.deck].push(c); });
      window.addEventListener('hashchange', render);
      render();
    })
    .catch(function (e) { APP.innerHTML = '<div class="card">데이터를 불러오지 못했다: ' + esc(e.message) + '<br><span class="small muted">tools/build_data.py로 data/decks.json을 만들고 커밋했는지 확인.</span></div>'; });
})();
