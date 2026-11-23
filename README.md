# RACdrugs — RAC-Drugs 시험 준비 대시보드 (개인 학습용)

RAPS **RAC-Drugs**(Regulatory Affairs Certification, Drugs) Spring 2027 윈도우 대비용으로 직접 만든 플래시카드 덱과 학습 대시보드. **개인 학습 자료**이며 RAPS와 무관한 비공식 자료다.

**웹 대시보드: https://jk-bch.github.io/RACdrugs/** (GitHub Pages, 빌드 없음 — 폰 홈 화면에 추가해서 쓴다)

- 규정·가이드라인 **기준일: 2026-09-01**(Spring 2027 윈도우 규칙). 그 이후 사건은 덱 안에 "기준일 이후 → 시험 비적용"으로 표시했다.
- 카드 본문은 FDA·EMA/EC·ICH·WHO **1차 자료**로 직접 썼다. RAPS 교재 문장을 옮기지 않았고, RAPS 발행물(Candidate Guide·Study Checklist)은 레포에 포함하지 않는다.
- 각 덱 머리의 **검증 메모**(✔ 작성 당시 웹 확인 / ○ 안정된 사실 / ? 미확인)가 사실의 출처다. 오류가 있을 수 있다 — 수치·날짜는 원 출처로 재확인할 것.
- 출제 근거 비중 US 30 / EU 30 / 글로벌(ICH·WHO) 40에 맞춰 카드를 배분했다.

## 대시보드 기능

| 화면 | 내용 |
|---|---|
| 홈 | 오늘 덱(schedule 자동), 신청 마감·시험 D-day, 간격 반복 due 카드 수, 본 카드/안정 카드 진도, 최근 성적과 도메인별 정답률, 주차별 진도 |
| 카드 | 덱·범위 선택 → 앞면(영어) 탭하면 뒷면(한국어). 평가 4단계(다시/어려움/알겠음/쉬움) → Leitner 상자(1·3·7·14·30·60·120일). "오늘 복습"은 due 카드만 |
| 요약 | 덱별 핵심 요약·검증 메모·1차 출처·카드 목록, 검색, 전체 덱(md) 읽기 |
| 테스트 | 숏테스트 10~20문항 4지선다(정답 뒷면 + 같은 도메인 뒷면 3개), 즉시 정오답·해설, 틀린 카드는 상자 0으로 |
| 모의 | 모의고사 30/60/120문항(1.25분/문항, 120문항 = 150분), 도메인 가중 27/27/13/22/11 · 유형 35/50/15, 번호판·깃발·타이머·자동 제출, 도메인·유형별 채점과 문항 검토 |
| 기록 | 누적 도메인 정답률, 테스트·모의고사 이력, 백업/복원(JSON), 초기화 |

학습 상태는 **브라우저 localStorage**에만 저장된다(서버 없음). 폰을 바꾸면 기록 화면의 백업 JSON으로 옮긴다.

## 구성

| 경로 | 내용 |
|---|---|
| `index.html`, `assets/` | 대시보드(정적 SPA, 외부 의존은 마크다운 렌더용 marked CDN뿐) |
| `data/decks.json` | 대시보드 데이터 — `tools/build_data.py`가 `anki/*.txt` + `cards/*.md`에서 생성 |
| `cards/` | 덱 59개(md) — Phase 1 챕터별 46 + 복습 7 + Phase 2 특화 6. `cards/index.md`가 목차 |
| `anki/` | 같은 이름의 Anki 임포트 파일(`front;back;tags`, 헤더 없음). 통합본 `RAC_all.txt`(1,215장) |
| `schedule.md` | 날짜→장 매핑(2026-12-01 ~ 2027-01-22), Phase 2·3 규칙 |
| `syllabus.md` | 36장 1차 자료 reading list(US / EU / ICH 3열, 기준일 전후표) |
| `refs/exam_facts.md` | 공식 시험 사실 요약(형태·도메인 비중·기준일·일정·수수료) |
| `progress.md` | 덱 인벤토리·구축 로그·남은 미확인(?) 항목 |
| `mkdocs.yml`, `requirements.txt` | (선택) MkDocs Material 정적 사이트 — Cloudflare Pages 등에 올릴 때만 사용 |

## 덱을 고친 뒤

```
.venv/Scripts/python.exe tools/build_data.py   # data/decks.json 재생성
git add -A && git commit -m "..." && git push
```

Pages는 push 후 1~2분 안에 반영된다. `tools/build_data.py`는 `anki/*.txt`가 3필드가 아니거나 태그가 깨지면 멈춘다.

## Anki

`anki/RAC_all.txt`를 임포트(구분자 `;`, 필드 3개: Front / Back / Tags, HTML 허용 끔). 태그는 `RAC <덱> Domain<I–V> <Recall|Application|Analysis>`.

## 라이선스·면책

- 텍스트: [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). 상업적 이용 금지.
- "RAC", "RAPS"는 Regulatory Affairs Professionals Society의 상표다. 이 레포는 RAPS의 승인·제휴·검토를 받지 않았다.
- 학습 보조 자료일 뿐 규제 자문이 아니다.
