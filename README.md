# RACdrugs — RAC-Drugs 시험 준비 플래시카드 (개인 학습용)

RAPS **RAC-Drugs**(Regulatory Affairs Certification, Drugs) Spring 2027 윈도우 대비용으로 직접 만든 플래시카드 덱. **개인 학습 자료**이며 RAPS와 무관한 비공식 자료다.

- 규정·가이드라인 **기준일: 2026-09-01**(Spring 2027 윈도우 규칙). 그 이후 사건은 덱 안에 "기준일 이후 → 시험 비적용"으로 표시했다.
- 카드 본문은 FDA·EMA/EC·ICH·WHO **1차 자료**로 직접 썼다. RAPS 교재 문장을 옮기지 않았고, RAPS 발행물(Candidate Guide·Study Checklist)은 레포에 포함하지 않는다.
- 각 덱 머리의 **검증 메모**(✔ 작성 당시 웹 확인 / ○ 안정된 사실 / ? 미확인)가 사실의 출처다. 오류가 있을 수 있다 — 수치·날짜는 원 출처로 재확인할 것.
- 출제 근거 비중 US 30 / EU 30 / 글로벌(ICH·WHO) 40에 맞춰 카드를 배분했다.

## 구성

| 경로 | 내용 |
|---|---|
| `cards/` | 덱 59개(md) — Phase 1 챕터별 46 + 복습 7 + Phase 2 특화 6. `cards/index.md`가 목차 |
| `anki/` | 같은 이름의 Anki 임포트 파일(`front;back;tags`, 헤더 없음). 통합본 `RAC_all.txt`(1,215장) |
| `schedule.md` | 날짜→장 매핑(2026-12-01 ~ 2027-01-22), Phase 2·3 규칙 |
| `syllabus.md` | 36장 1차 자료 reading list(US / EU / ICH 3열, 기준일 전후표) |
| `refs/exam_facts.md` | 공식 시험 사실 요약(형태·도메인 비중·기준일·일정·수수료) |
| `progress.md` | 덱 인벤토리·구축 로그·남은 미확인(?) 항목 |
| `mkdocs.yml` | 웹 열람용 정적 사이트 설정(MkDocs Material) |

## 웹 열람

MkDocs Material로 빌드한다. 로컬:

```
pip install -r requirements.txt
mkdocs serve
```

Cloudflare Pages: 빌드 명령 `pip install -r requirements.txt && mkdocs build`, 출력 폴더 `site`, 환경변수 `PYTHON_VERSION=3.11`.

## Anki

`anki/RAC_all.txt`를 임포트(구분자 `;`, 필드 3개: Front / Back / Tags, HTML 허용 끔). 태그는 `RAC <덱> Domain<I–V> <Recall|Application|Analysis>`.

## 라이선스·면책

- 텍스트: [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). 상업적 이용 금지.
- "RAC", "RAPS"는 Regulatory Affairs Professionals Society의 상표다. 이 레포는 RAPS의 승인·제휴·검토를 받지 않았다.
- 학습 보조 자료일 뿐 규제 자문이 아니다.
