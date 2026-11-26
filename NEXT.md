# NEXT.md — 다음 세션 인계 (2026-11-23 작성)

이 파일은 세션을 옮길 때 "어디까지 했고 다음에 무엇을 하나"를 적는 곳이다. 새 세션은
`CLAUDE.md`(튜터 규칙) → 이 파일 → `progress.md`(상세 기록) 순으로 읽는다.
끝낸 항목은 지우지 말고 `[x]`로 바꾸고 날짜를 적는다.

## 1. 지금 상태 (2026-11-23 기준)

- 덱 59개 / 카드 1,215장 사전 생성 완료 (Phase 1 Ch.1~36 + 복습 W1~7, Phase 2 특화 6). `cards/*.md`, `anki/*.txt`.
- 교과서 39장 전권 완료 (`textbook/`; Ch00_primer, Ch01~Ch36(이틀 분량은 한 파일), P2 6장). pending 0.
- 대시보드 https://jk-bch.github.io/RACdrugs/ (GitHub Pages, main 루트). 교과서 → 요약 → 카드(간격 반복) → 숏테스트 → 모의고사 → 기록.
- 약어 사전 팝업 올림 (커밋 4118967): `data/glossary.json` 783항목, 교과서·요약·전체 덱 본문의 약어를 누르면 영문 풀네임·한국어. `#/gloss?q=` 검색 페이지.
- 결정(2026-11-23): 다른 AI의 비평(카드 뒷면 보기 = recognition 훈련, 영문 선지 훈련 부재, Domain III/IV 실무 판단 약함)은 **Phase 3에서만** 반영. 카드 1,215장·교과서는 손대지 않는다.
- Phase 1 시작 2026-12-01. 신청 마감 2027-02-18, 시험 2027-03-22~04-23, 규정 기준일 2026-09-01.

## 2. 다음 작업 (우선순위 순)

### A. 바로 할 수 있는 것
- [ ] **약어 팝업 폰 확인**: 사용자가 폰에서 눌러보고 패널 위치·글자 크기 피드백 → `assets/style.css`의 `.glpop*`만 조정. 팝업 열림은 headless 덤프로 못 봤고(클릭 이벤트) 코드·렌더만 확인한 상태.
- [ ] **사전 보강**: 교과서 읽다가 사전에 없는 약어가 나오면 `data/glossary.json` 끝에 한 줄 추가. 형식 `["약어","영문 풀네임","한국어"]`, 뜻이 둘 이상이면 `["약어",[["맥락","풀네임","한국어"], …]]`. JSON 유효성만 확인하면 끝(빌드 불필요). 숫자·연도는 덱 메모에 없으면 빼거나 "(확인 필요)".
- [ ] **12/01부터 데일리 운영**: "오늘 카드" = `schedule.md`에서 날짜→덱 찾아 `cards/<id>.md` 출력 + 간격 반복 5장 즉석. 새 생성 아님(이미 다 만들어 둠).

### B. 12월 전 선택 작업 — `?` 항목 1차 출처 확인
덱 검증 메모와 교과서에 "(확인 필요)"로 남은 것. 확인되면 덱 메모·교과서 해당 절·사전 항목을 같이 고치고 `tools/build_data.py` 재실행.
- [ ] EU-US MRA 인체용 의약품 발효일: Ch32 덱 2019-07-11 vs Ch02 덱 2019-07-12 (덱 간 불일치, 교과서는 "확인 필요"로 둠).
- [ ] Ph. Eur. 5.26 장 번호(ATMP 관련 일반장).
- [ ] Form 2253 eCTD 제출 의무화 연도.
- [ ] SoHO 규정 2024/1938 적용일(2027-08-07로 기억하나 미확인; 사전엔 "(확인 필요)").
- [ ] GLP Quality System 최종규칙 공표 여부(NPRM 2025-01-16) · DAP guidance 최종화 · PFDD 3·4 최종 여부 · QRD v11 · Ames 양성 후속 draft · OMB 2024 인종·민족 범주 FDA 반영.
- 규칙: 기준일 2026-09-01 이후 이벤트는 "기준일 이후·시험 비적용"으로만 표시.

### C. Phase 3 (모의시험 기간, 2027-02~) — 케이스 문제은행
방침 변경(2026-11-24): 도메인별이 아니라 **챕터별** `exams/bank_ChNN.md`로 만든다(덱 파일명과 동일 단위). 각 문항에 Domain 태그가 있으니 도메인별 가중 추출은 파서에서 한다.
- [x] 2026-11-24 `bank_Ch01.md`(64) · `bank_Ch02.md`(60) · `bank_Ch03-04.md`(68) = 192문항(덱 카드 20장당 ~60~68, 같은 사실의 변형 문항 허용) — 교과서·덱 검증 메모의 ✔/○ 사실만 사용. `?` 항목(MRA 일자, GLP QS 최종규칙)은 정답 키로 쓰지 않음.
- [x] 2026-11-26 `bank_Ch05-06.md` 64문항 — **새 설계 규칙 적용**: 정답 글자 A~D 각 16개, 정답 선지가 길이로 드러나지 않게(정답=최장 21%, 길이비 0.99), 오답에만 절대어(always/only/every) 몰지 않기. 점검 도구 `tools/bank_stats.py`(찍기 단서 지표), `tools/bank_numcheck.py`(교과서·덱에 없는 숫자 후보).
- [x] 2026-11-26 **Ch01~Ch03-04 192문항 재작업 완료**: 선지 문장 보정(정답 축약·오답에 그럴듯한 오답 근거·절대어 제거) 후 `tools/bank_shuffle.py`로 정답 글자 균등 재배치(해설 글머리 자동 변환, 정답 문장·오답 해설 대응 전수 검증 0 오류). 결과: 정답 글자 각 파일 균등, 정답=최장 9~13%, 정답=최단 10~30%, 길이비 0.94~1.01. 교과서 밖 숫자(Ch01 Q11·Q27, Ch03-04 Q02) 제거.
- 새 장 작성 절차: 쓰기 → `bank_stats.py`(목표: 정답=최장·최단 각 ≤30%, 길이비 ≤1.10) → `bank_numcheck.py` → `bank_shuffle.py exams/bank_ChNN.md` → `build_data.py`.
- [x] 2026-11-26 `bank_Ch07-08.md`(64) · `bank_Ch09-10.md`(64) — 합계 384문항(Ch01~Ch10).
- [x] 2026-11-26 `bank_Ch11`~`bank_Ch16` 6장(각 64) — 합계 768문항(Ch01~Ch16). Ch14 CTR Art 61(5)(a) 예외 사전 수정.
- [ ] **다음: Ch17 → Ch18 → …** (덱 일정 순; Ch07-08 덱 날짜 12/05). 작성 규칙·절차는 **`exams/AUTHORING.md`**. 장마다 먼저 `tools/_textbook_audit_2026-11-26.json`의 그 장 지적을 1차 출처로 정리한 뒤 쓴다.
  - 사전 정리 완료(2026-11-26): Ch05-06·Ch07-08 M3(R2) 절 번호(급성 §4·국소 내성 §8·유전독성 §9), Ch07-08 M7 Option 4 기준(AI 미만; 30%는 Option 1·3), Ch09-10 EFD 예외(150명·3개월은 전 지역 공통), Ch11 EU 면제 표현, Ch12 Art 111b. → **Ch07-08~Ch12는 바로 작성 가능.**
  - Ch13 이후는 감사 중간·낮음 지적이 남아 있다(예: Ch14 CTR 재라벨 예외, Ch18 LTFU 기간, Ch20 pre-submission 날짜 계산, Ch25 기준일 표시, Ch27 ISE 조항, Ch34 REMS 120일 등) → 그 장 차례에 먼저 확인.
- [x] 2026-11-25 **대시보드 연결 완료**: `build_data.py`에 `parse_bank()` 추가 → `data/decks.json`의 `bank` 배열(id·deck·n·type·domain·stem·options·answer·expl). 모의고사(`#/exam`)는 **문제은행 전용**(2026-11-26 변경 — 카드 뒷면은 한국어라 영어 시험 선지로 부적합). 숏테스트는 문제은행 있으면 문제은행, 없으면 카드 복습형. 문제은행 문항은 선지 순서를 저자 A~D 그대로 두고(해설이 글자를 참조), 제출 후 "문항 검토"에서 해설 표시, 간격 반복(SRS)에는 반영 안 함. 파서 규칙: `### Qnn [R|A|An][Domain X] — 제목`, `A.`~`D.` 한 줄씩(이어지는 줄은 앞 선지에 붙음), `**정답:** X`, `**해설**` 뒤 불릿, 구분선 `---`. 형식이 어긋나면 build_data.py가 파일명·Q번호로 멈춘다. 라이브 반영은 커밋·푸시 후 Pages 빌드 확인 필요.
(이전 계획) `exams/bank_DomainX.md` (Domain I~V 파일 하나씩). 형식: **영문 시나리오** + **영문 선지 4개**(근접 오답 설계: prior approval vs annual reportable, shall vs should, CBE-30 vs PAS, 7일 vs 15일) + **한국어 해설**(왜 정답·왜 오답 하나씩). 우선 채울 약점: Domain III/IV 실무 판단 — 사찰 대응(483/WL 응답 기한), 법적 집행(FCA/AKS/CIA), 당국 회의 유형·기한, 승인 후 변경 분류, 안전성 보고 기한(7/15일, SUSAR, PADER/PSUR 주기). 유형 비율 35/50/15는 내 설계값이지 RAPS 수치 아님. 대시보드 모의고사에 문제은행을 읽히려면 `tools/build_data.py`에 bank 파서 + `assets/app.js` 모의고사 소스 선택이 필요(아직 없음).

### D. 하지 않을 것 (결정됨)
- 카드 1,215장 재설계·교과서 구조 변경 — Phase 3 결정으로 보류.
- RAPS 교재 본문 재현, 근거 없는 숫자, 모델 식별자를 저장소 산출물에 넣는 것.

## 3. 작업 규칙·함정 (이번 세션에서 확인된 것)

- **Bash heredoc 한도 약 9KB** — 넘으면 `unexpected EOF while looking for matching` 오류. 긴 파일은 `.a/.b/.c` 조각으로 쓰고 `cat`으로 합친 뒤 `wc -c`·`tail -1`로 확인. 교과서 장·사전 모두 이 방식으로 썼다.
- Python은 `D:/RAC/...` 경로(`/d/RAC`는 Python에서 안 열림). 콘솔 cp949라 '—' 출력 시 `sys.stdout`을 utf-8로 감싼다.
- JS 문법 확인: `D:/RAC/.venv/Scripts/python.exe -c "import esprima; esprima.parseScript(open('D:/RAC/assets/app.js',encoding='utf-8').read())"`. node는 없다.
- 로컬 렌더 확인: `python -m http.server 8765` 띄우고 headless Edge
  `"/c/Program Files (x86)/Microsoft/Edge/Application/msedge.exe" --headless=new --disable-gpu --virtual-time-budget=12000 --dump-dom "http://127.0.0.1:8765/#/text/Ch12" | tr -d '\n'`
  → `<abbr class="gl"` 개수·`<pre>` fallback 여부 확인. 끝나면 8765 리스너 종료.
- 라이브 확인: `gh api repos/JK-BCH/RACdrugs/pages/builds/latest --jq '.status + " " + .commit'`이 `built <sha>`가 될 때까지 10초 폴링 → `curl` + 같은 Edge 명령을 라이브 URL로.
- 덱·교과서를 고치면 `tools/build_data.py` 재실행 → `data/decks.json` 갱신 → 커밋. "missing memo: ['Ch01']"은 정상 출력. Ch00_primer에 카드 연결 절이 없는 것도 의도.
- 커밋 메시지는 한국어 요약 + 끝에 `Co-Authored-By: Claude Fable 5.1 <noreply@anthropic.com>`. `refs/*.pdf`, `refs/_*.txt`는 커밋 금지(.gitignore).
- 말투: 한국어 반말 + 규제 용어는 영어 원어. 내가 만든 비유·영어 차용어 금지. 사실은 덱 검증 메모(✔/○/?)에서만, 미확인 숫자는 "(확인 필요)".

## 4. 파일 지도

| 경로 | 역할 |
|---|---|
| `CLAUDE.md` | 튜터 프로토콜(오늘 카드 규칙, 학습자 프로필, 시험 정보) |
| `schedule.md` | 날짜 → 덱 |
| `cards/<id>.md`, `anki/<id>.txt` | 덱 59개(검증 메모·핵심 요약·카드 20장·분포·출처·Anki) |
| `textbook/*.md` | 교과서 39장(학습 목표 → 본문 US→EU→ICH → 숫자표 → 흔한 혼동 → 네 분야 → 카드 연결 → 1차 출처) |
| `data/decks.json` | `tools/build_data.py` 산출(덱·카드·교과서 목록·일정) |
| `data/glossary.json` | 약어 사전 783항목 |
| `index.html`, `assets/app.js`, `assets/style.css` | 대시보드 SPA(해시 라우트 `/ text flash summary deck quiz exam history gloss`) |
| `exams/` | Phase 3 문제은행 자리(비어 있음) |
| `refs/` | 시험 공식 문서(`exam_facts.md`가 단일 출처; PDF는 로컬 전용) |
| `progress.md` | 작업 일지(1차~4차 2026-11-23) |
