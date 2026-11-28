# Ch.0 기초 — 규제의 지형: 법·기관·용어를 먼저 잡는다

> 36장을 읽기 전에 한 번, 중간에 길을 잃을 때마다 다시 읽는 장이다. 여기엔 새 숫자가 거의 없다 — 구조만 잡는다. 숫자·기한은 각 장 교과서와 덱 검증 메모가 출처다.
>
> **검증 메모(2026-11-23):** 이 장은 법 체계·기관 구조 설명(○ 안정 사실). 날짜가 붙은 항목은 해당 덱 메모(✔)에서 가져왔다.

## 0. 이 시험이 무엇을 묻나

RAC-Drugs는 "규정을 암기했나"가 아니라 **"이 상황에서 어느 당국의 어느 규칙이 걸리고, 다음에 무엇을 언제까지 내야 하나"** 를 묻는다. 그래서 공부 순서는 ① 법이 어떻게 생겼는지(이 장) → ② 개발 단계마다 어떤 제출물과 시계가 붙는지(Ch.1) → ③ 각 주제의 세부(Ch.2~36)다.

- 120문항 / 2시간 30분, 유형은 recall(사실) · application(상황 적용) · analysis(짧은 사례 판단).
- 출제 근거 비중 **미국 FDA 30% / EU(EC·EMA·회원국 당국) 30% / 글로벌(ICH·WHO) 40%** — 미국만 알면 30점짜리 시험이다.
- 도메인: I Regulatory Intelligence & Research 27% · II Submissions 27% · III Collaboration 13% · IV Strategy 22% · V Project Management 11%.
- **기준일 2026-09-01**: 그날 효력이 있던 규정·가이드라인이 정답이다. "채택됐지만 시행 전"(예: ICH Step 4만 지난 가이드라인, EU 제약 패키지 2026-09-28 채택)은 정답이 아니다. 각 장에서 이 구분을 계속 표시한다.

## 1. 미국 — 법은 하나, 규정은 Title 21, 해석은 guidance

미국 규제는 **세 층**이다. 이 층을 구분하지 못하면 "구속력이 있나"를 묻는 문제를 전부 틀린다.

| 층 | 무엇 | 누가 만드나 | 구속력 |
|---|---|---|---|
| **법률(statute)** | **FD&C Act**(Federal Food, Drug, and Cosmetic Act, 1938 + 수정법), **PHS Act**(Public Health Service Act) | 의회 | 있음 |
| **규정(regulation)** | **21 CFR**(Code of Federal Regulations Title 21) — 법이 위임한 세부 규칙, Federal Register에 공고(NPRM → 최종규칙) | FDA(행정부) | 있음 |
| **guidance** | FDA의 "current thinking" — 권고, 대안 허용 | FDA | **없음**(21 CFR 10.115 Good Guidance Practices) — 그러나 심사 기준이라 사실상 따른다 |

### 1.1 두 개의 법, 두 개의 허가

- **FD&C Act**: 의약품(drug)·기기·식품·화장품. 조문 번호가 시험 언어다 — **505**(신약 승인: 505(b)(1) 완전 NDA, 505(b)(2) 일부 타인 데이터 의존, 505(j) ANDA 제네릭), **501**(adulterated), **502**(misbranded), **503**, **505(o)**(승인 후 안전성 권한 — PMR·라벨 변경), **505-1**(REMS), **506**(가속 경로: 506(a) Breakthrough, (b) Fast Track, (c) Accelerated Approval, (g) RMAT), **506C**(공급 중단 통지), **704**(사찰), **801/802**(수입·수출).
- **PHS Act**: 생물의약품(biologic). **351(a)** BLA(완전 허가), **351(k)** 바이오시밀러, **351(d)** 회수 명령, **361**(전염병 방지 — HCT/P 361 제품의 근거). 세포·유전자·EV 제품은 거의 전부 **351 BLA**다.
- 두 법은 겹친다: 생물의약품도 FD&C Act의 drug 정의에 들어가서 adulterated/misbranded 규정이 같이 적용된다.

### 1.2 21 CFR 지도 — 번호를 보면 주제가 보이게

| Part | 주제 | 어디서 만나나 |
|---|---|---|
| 50 / 56 | 피험자 동의 / IRB | 임상 |
| 58 | GLP(비임상 안전성 시험 운영) | Ch.3 |
| 210 / 211 | CGMP(완제 의약품) | Ch.32 |
| 312 | IND(임상시험 신청) — 312.21 단계, 312.23 내용, 312.32 안전성 보고, 312.40 30일 | Ch.1·임상 |
| 314 | NDA·ANDA — 314.50 내용, 314.70 변경, 314.80/.81 보고 | 제출·수명주기 |
| 316 | Orphan drug | 가속·희귀 |
| 600–680 | 생물의약품 일반 표준(610 역가·무균 등)·BLA(601) | 세포치료 |
| 1271 | HCT/P(세포·조직) — 361 기준, 공여자, cGTP | P2 |
| 4 | 조합 제품(cGMP·안전성 보고) | Ch.28 |
| 7 | 리콜 | Ch.33 |
| 202 / 201 | 광고 / 라벨 | Ch.35 |
| 803 / 806 / 820 | 기기 보고·교정·QMSR | 조합 제품 |

### 1.3 FDA 조직 — 누가 내 제품을 보나

- **CDER**(Center for Drug Evaluation and Research): 소분자, 대부분의 치료용 단백질(단클론항체 등).
- **CBER**(Center for Biologics Evaluation and Research): 백신·혈액·**세포·유전자·조직 제품** — 그 안의 **OTP**(Office of Therapeutic Products, 2023)가 CGT 전담. 네 제품의 집.
- **CDRH**: 기기. 조합 제품은 **PMOA(주 작용 방식)** 로 주관 센터를 정하고(21 CFR Part 3, **RFD** 60일), 다른 센터가 자문한다.
- **OII**(Office of Inspections and Investigations, 2024 — 구 ORA): 사찰·수입·리콜 현장.
- **OPDP**(CDER)/**APLB**(CBER): 판촉 감시.

### 1.4 미국 용어 10개

**IND**(사람 투여 전 신청, 30일 후 effective) · **NDA/BLA**(시판 허가 신청) · **PDUFA**(사용자 수수료법 — 심사 시계의 근거) · **adulterated**(품질·GMP 결함, 501) · **misbranded**(라벨·광고 결함, 502) · **CBE/PAS/AR**(변경 보고 카테고리) · **REMS**(위험 완화 전략) · **PMR/PMC**(승인 후 의무/약속) · **Form 483 / Warning Letter**(사찰 관찰 / 공식 경고) · **Orange Book / Purple Book**(승인 의약품·독점 목록 / 생물의약품 목록).

## 2. EU — 규정과 지침, 그리고 중앙·국가 절차

EU는 **입법 도구의 종류**가 곧 효력의 차이다.

| 도구 | 효력 | 예 |
|---|---|---|
| **Regulation(규정)** | 모든 회원국에 **직접 적용**(국내법 전환 불필요) | **Reg 726/2004**(중앙 절차·EMA), **Reg 536/2014 CTR**(임상시험), **Reg 1394/2007**(ATMP), **Reg 1234/2008**(variations), **Reg 141/2000**(orphan), **Reg 1901/2006**(소아), **Reg 2021/2282**(HTA) |
| **Directive(지침)** | 회원국이 **국내법으로 이행** — 나라마다 집행 차이 | **Dir 2001/83/EC**(인체용 의약품 코드 — MA 요건·PV·광고·GMP 원칙·조직), Dir 2004/23(조직·세포), Dir 89/105(가격 투명성) |
| **Decision / Delegated·Implementing acts** | 특정 대상·세부 | EC 승인 결정, IR 520/2012(PV 세부) |
| **Guideline(EMA/CHMP·EC)** | 비구속(단 Ph. Eur.·EudraLex 일부는 Annex I 참조로 구속) | EMA 과학 가이드라인, **EudraLex Vol 4(GMP)**, GVP 모듈 |

### 2.1 기관

- **European Commission(EC)**: 법 제안·**승인 결정**(MA는 EC가 발급). 보건 총국 **DG SANTE**.
- **EMA**(European Medicines Agency): **평가**하는 기관, 결정 기관이 아님. 과학 위원회: **CHMP**(인체용 의약품 — 의견 채택), **PRAC**(약물감시), **CAT**(ATMP), **PDCO**(소아), **COMP**(희귀), **HMPC**(생약). 사무국이 절차를 돌린다.
- **National Competent Authorities(NCA)**: 회원국 당국(독일 BfArM·PEI, 프랑스 ANSM, 네덜란드 CBG 등) — 국가 절차·GMP 사찰·임상시험 평가 실무·PV 국가 업무.
- **CMDh**: 국가 절차(DCP/MRP) 조정 그룹.
- **HMA**: 당국장 네트워크.

### 2.2 허가 절차 네 가지

| 절차 | 범위 | 누가 평가 | 언제 의무 |
|---|---|---|---|
| **Centralised(CP)** | EU 전체 단일 MA(EC 결정) | EMA/CHMP(rapporteur·co-rapporteur) → EC | **생물공학 제품·ATMP·orphan·특정 치료 영역**(Reg 726/2004 Annex) 의무, 그 외 선택 |
| **Decentralised(DCP)** | 복수 회원국 동시 | RMS(참조국) 평가, CMS 검토 | 중앙 비대상 신제품 |
| **Mutual Recognition(MRP)** | 이미 한 나라 MA → 다른 나라 인정 | RMS 평가 보고서 | 기존 국가 MA 확장 |
| **National(NP)** | 한 회원국 | NCA | 단일국 |

세포·유전자·EV 제품은 **중앙 절차 의무**(생물공학 공정·ATMP)다.

### 2.3 EU 용어 10개

**MA/MAH**(허가/허가권자) · **SmPC**(Summary of Product Characteristics — 미국 USPI에 해당) · **PL**(환자용 설명서) · **QP**(Qualified Person — 배치 출하에 개인 책임) · **QPPV**(약물감시 책임자) · **Annex I of Dir 2001/83**(dossier 과학 요건) · **variation Type IA/IB/II**(변경 분류) · **PSUR/RMP/PASS**(주기 보고/위험관리/승인 후 안전성 연구) · **EudraVigilance / EudraGMDP / CTIS**(DB·시스템) · **Ph. Eur.**(유럽약전, EDQM).

## 3. ICH·WHO·PIC/S — "글로벌 40%"의 정체

- **ICH**(International Council for Harmonisation): 규제당국 + 산업이 **기술 가이드라인**을 조화시킨다. **Q**(품질) · **S**(안전성, 비임상) · **E**(유효성, 임상) · **M**(다분야 — M1 MedDRA, M3 비임상 시기, M4 CTD, M8 eCTD). **Step 1~5**: 2b 초안 승인 → 3 공개 협의 → **4 채택(합의 완료)** → **5 지역 이행**(FDA guidance / CHMP 채택 + 시행일). **Step 4 ≠ 시행** — 시험의 단골 함정.
- **CTD/eCTD**(M4/M8): 신청서의 공통 구조 — Module 1(지역) · 2(요약) · 3(품질) · 4(비임상) · 5(임상). 미국·EU·일본 모두 같은 틀, Module 1만 다르다.
- **WHO**: 가이드라인도 내지만 핵심은 **평가 체계** — **GBT**(당국 성숙도 ML1–4), **WLA**(신뢰 당국 지정), **Prequalification**(UN 조달 가능 제품), **EML**(필수의약품 목록), **CRP**(협력 등록).
- **PIC/S**: GMP **사찰 당국**들의 협력체(산업 불참). 공통 GMP 가이드 = EU GMP와 사실상 동일. FDA 2011 가입.
- **MRA**(EU–US): GMP **사찰 결과를 서로 인정**(허가 상호인정 아님).

## 4. 숫자 읽는 법 — 틀리는 자리가 정해져 있다

1. **일수의 종류**: **calendar days**(달력일: IND 30일, PDUFA 회의 60/75일)와 **영업일**(주말·공휴일 제외) 두 가지다. FDA 문서는 영업일을 **business days**(Form 483 응답 15)나 **working days**(FAR 3, 806 10, WL 응답 15)로 쓰는데 둘은 같은 뜻이다. 문제는 calendar days와 영업일을 바꿔 함정을 판다.
2. **시계의 시작점**: PDUFA는 NME NDA·원 BLA가 **60일 filing date**, 비NME가 **receipt date**; EU 중앙 절차는 **active days**(clock-stop 제외) 210 + EC 67.
3. **"채택"과 "시행"**: ICH Step 4·EU 법 채택·FDA 초안 guidance는 **아직 아님**. 기준일 2026-09-01에 효력이 있어야 정답.
4. **지역 간 대응물을 쌍으로**: IND ↔ CTA(CTR) · NDA/BLA ↔ MAA · USPI ↔ SmPC · PADER ↔ PSUR · REMS ↔ RMP/aRMM · PMR ↔ Specific Obligation/PASS · 314.70 ↔ Reg 1234/2008 · Part 7 리콜 ↔ Art 117/Rapid Alert.
5. **법 조문 번호는 번지수**: 505(o)(4)는 "라벨 변경 명령", 506(g)는 "RMAT", Art 24는 "갱신", Art 117은 "공급 금지" — 번호를 보면 주제가 떠올라야 한다. 각 장에 표로 반복해 둔다.

## 5. 36장 지도 — 어디를 지나가는지 알고 걷기

| 묶음 | 장 | 한 줄 |
|---|---|---|
| 지형 | 1–2 | 개발 연속선 · 국제 조화(ICH·WHO) |
| 비임상 | 3–8 | GLP · safety pharm · PK/TK · 독성 · 국소 내성 · 유전독성 |
| 비임상→임상 | 9–15 | 생식·발암·면역독성 등 특수 독성, 비임상→FIH 전환, 임상 설계·GCP |
| 품질 | 16–22 | CMC · 규격 · 안정성 · 생물의약품 품질 · 라벨 |
| 제출 | 23–27 | CTD/eCTD · 가속 경로 · dossier 전략 |
| 조합·수명주기 | 28–31 | 조합 제품 · 승인 후 의무 · 이전·갱신 · 변경 |
| 집행·시판 후 | 32–36 | GMP 사찰 · 리콜 · 약물감시 · 광고 · 시장 접근 |
| 특화(P2) | 6주제 | OTP · 361 vs 351 · RMAT · 역가 · 비교동등성 · EU ATMP |

각 장 교과서는 같은 뼈대로 간다: **왜 이 규제가 있나 → 무엇을 요구하나(미국 → EU → ICH) → 숫자표 → 흔한 혼동 → 덱 카드 연결 → 1차 출처**. 교과서를 읽은 뒤 같은 번호 덱의 **요약 → 카드 → 숏테스트** 순으로 간다.

## 6. 1차 출처를 읽는 습관

- 미국: **eCFR**(ecfr.gov — 현행 CFR), **Federal Register**(규칙 제정 이력), FDA **guidance 검색**(초안/최종 구분).
- EU: **EUR-Lex**(규정·지침 원문·통합본), **EMA 웹**(절차 안내·Q&A·가이드라인), **EudraLex**(Vol 1 법·Vol 2 절차·Vol 4 GMP·Vol 9/10 PV·임상).
- 글로벌: **ich.org**(가이드라인·Step 상태), **who.int**(GBT·WLA·PQ), **picscheme.org**.

이 장에 숫자가 적은 건 의도다. 숫자는 맥락(어느 법, 어느 절차)에 붙어야 남는다. 다음 장(Ch.1)에서 개발 연속선 위에 그 숫자들을 올린다.
