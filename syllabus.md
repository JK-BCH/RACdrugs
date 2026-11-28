# RAC-Drugs 자습 syllabus — 36장 × 1차 자료 reading list

교재(RAPS Fundamentals 2nd ed.) 없이 공부하기 위한 지도다. 장 순서는 `schedule.md`
의 36장 주제를 따르고, 내용은 **FDA / EU / ICH·WHO 1차 자료**로만 채운다.
출제 근거 비중이 **US 30 / EU 30 / 글로벌 40** (`refs/exam_facts.md`)이라 모든 장을
세 열로 쓴다. 매일 카드는 그날 장의 이 목록에서 나온다.

**출제 기준일 2026-09-01.** 그 뒤에 바뀐 것은 "시험엔 구법"이라고 따로 적었다.

표시 규칙
- ✔ = 2026-11-21 이 세션에서 웹으로 상태·날짜 확인
- ○ = 오래 안정된 규정/가이드라인, 오늘 재확인은 안 함
- ? = 확인 필요 (카드에 넣기 전에 반드시 검색)

링크는 안정된 landing page 위주다. eCFR 패턴은
`https://www.ecfr.gov/current/title-21/chapter-I/subchapter-X/part-N` (A=1–99,
C=200–299, D=300–499, F=600–680, H=800–898, L=1270–1271). EUR-Lex 패턴은
`https://eur-lex.europa.eu/eli/dir/2001/83/oj`, `/eli/reg/2004/726/oj` 식.
ICH 공식 페이지는 JS 렌더링이라 자동 수집이 안 되니 사람이 열어서 봐야 한다.

---

## 횡단 자료 (매일 쓰는 것)

| 종류 | 링크 |
|---|---|
| eCFR Title 21 | https://www.ecfr.gov/current/title-21 |
| FDA guidance 검색 | https://www.fda.gov/regulatory-information/search-fda-guidance-documents |
| FD&C Act 조문 (Cornell) | https://www.law.cornell.edu/uscode/text/21/chapter-9 |
| EudraLex (Vol 1 법령 · 2 NtA · 4 GMP · 9 PV · 10 CT) | https://health.ec.europa.eu/medicinal-products/eudralex_en |
| EMA human regulatory overview | https://www.ema.europa.eu/en/human-regulatory-overview |
| ICH Quality / Safety / Efficacy / Multidisciplinary | https://www.ich.org/page/quality-guidelines · /safety-guidelines · /efficacy-guidelines · /multidisciplinary-guidelines |
| WHO 의약품 규범·표준 (GMP, TRS) | https://www.who.int/teams/health-product-policy-and-standards |
| WHO Prequalification | https://extranet.who.int/prequal/ |

**Domain I Task 3 시스템 이름** (content outline이 직접 지목): CDER NextGen Portal /
**ESG NextGen** (2025-04-14부터 Unified Submission Portal이 WebTrader 대체 ✔) ·
Drugs@FDA · EU **CTIS** (CTR 536/2014) · EMA **IRIS** (orphan·scientific advice·PRIME) ·
**PLM Portal / eAF** · **CESP** · **EudraVigilance** · **EudraGMDP**.

---

## Phase 1 챕터별

### Ch.1 — Drug development continuum (preclinical → market access)
Task: I-2 (경로·타임라인), I-5 (수명주기 자문)
- **US** ○ 21 CFR 312 (IND; 312.21 phases, 312.40 effective 30일) · 314 (NDA) · 601 (BLA)
  · FD&C 505 / PHS 351 · ✔ PDUFA VII goals letter FY2023–27
  https://www.fda.gov/media/151712/download (NME NDA·original BLA: 60일 filing date
  + 10개월 standard / 6개월 priority; non-NME: receipt date 기준)
- **EU** ✔ centralised procedure 210 active days + EC 결정 67일
  https://www.ema.europa.eu/en/human-regulatory-overview/marketing-authorisation/obtaining-eu-marketing-authorisation-step-step
  · ○ Dir 2001/83/EC + Reg (EC) 726/2004 · ✔ CTR 536/2014는 2025-01-31부터 유일 체계
- **ICH/WHO** ○ ICH M3(R2) (비임상 타이밍) · E8(R1) (임상 일반 고려) · M4 CTD
- 카드 각: 다음 제출물·만나야 할 사람·걸리는 시계. 2026-11-21 카드 20장 완료.

### Ch.2 — International harmonization (ICH, WHO 등)
Task: I-6, I-7
- **US** ○ FDA의 ICH 가이드라인 채택 = Federal Register notice로 guidance 발행 (법적 구속력 없음)
  · FDA Office of Global Policy and Strategy
- **EU** ○ EMA가 ICH 가이드라인을 CHMP 채택 → "Step 5" 문서로 게시 · EU–US MRA (GMP 상호인정, 2019 전면 운영)
- **ICH/WHO** ○ ICH 구조: Assembly, Management Committee, Working Groups; **Step 1→5**
  (Step 2a/2b 초안 공개, Step 3 공개의견, Step 4 채택, Step 5 지역 이행)
  https://www.ich.org/page/ich-harmonisation-better-health
  · ○ WHO: Essential Medicines List, Prequalification, Global Benchmarking Tool,
  **WHO Listed Authority (WLA)** https://www.who.int/initiatives/who-listed-authority-reg-authorities
  · ○ PIC/S (GMP 검사 협력) https://picscheme.org · ICMRA · IPRP
- 카드 각: Step 번호별 의미, "harmonised ≠ 법" (지역 이행 필요), WHO WLA vs SRA 개념.

### Ch.3 + Ch.4 — GLP·비임상 개발 원칙 / Safety pharmacology
Task: I-1, III-3
- **US** ○ 21 CFR 58 (GLP) https://www.ecfr.gov/current/title-21/chapter-I/subchapter-A/part-58
  · ✔ GLP Quality System **NPRM 2016-08-24** (81 FR 58342), 최종규칙 없음 —
  2026-08 Unified Agenda(RIN 0910-AJ01) 새 NPRM 계획, 2026-09-01 기준 현행 Part 58 (2026-11-28 원문 확인)
  · ○ 21 CFR 312.23(a)(8) (IND 비임상 섹션)
- **EU** ○ OECD GLP 원칙 + Dir 2004/9/EC, 2004/10/EC (GLP 검사·적용) · EMA 과학 가이드라인 (하위 메뉴 Non-clinical)
  https://www.ema.europa.eu/en/human-regulatory-overview/research-development/scientific-guidelines (비임상 하위 페이지 직접 링크는 429로 확인 못 함)
- **ICH/WHO** ○ M3(R2) + Q&A · S7A (safety pharmacology core battery) · S7B (QT) + E14/S7B Q&A (2022)
  · S6(R1) (biotech 비임상) · S9 (항암) · S11 (소아 비임상) · S12 (유전자치료 biodistribution)
- 카드 각: GLP는 안전성 시험에만(약리/PK 아님), core battery 3계(CV·CNS·호흡), S7B·E14 통합 Q&A.

### Ch.5 + Ch.6 — PK/TK / Acute·chronic toxicity
Task: I-1, III-3
- **US** ○ 21 CFR 312.23(a)(8)(ii) · FDA guidance *Estimating the Maximum Safe Starting Dose in
  Initial Clinical Trials* (2005, MRSD/HED) · *Nonclinical Safety Evaluation of Reformulated Drug
  Products and Products Intended for Administration by an Alternate Route* (2015)
- **EU** ○ EMA *Guideline on strategies to identify and mitigate risks for first-in-human and early
  clinical trials* (Rev 1, 2017) · EMA 비임상 가이드라인 페이지(위)
- **ICH/WHO** ○ S3A (TK) + Q&A (microsampling) · S3B (반복투여 조직분포) · S4 (만성독성 기간: 설치류 6개월,
  비설치류 9개월) · M3(R2) 표 1 (임상 기간별 반복투여 독성 기간)
- 카드 각: M3(R2) 임상 기간↔독성 기간 매핑, MRSD 계산 순서(NOAEL→HED→safety factor 10).

### Ch.7 + Ch.8 — Local tolerance / Genotoxicity
Task: I-1
- **US** ○ 21 CFR 312.23(a)(8) · FDA guidance *Genotoxic and Carcinogenic Impurities* → M7로 대체됨
- **EU** ✔ EMA *Guideline on non-clinical local tolerance testing of medicinal products*
  (EMA/CHMP/SWP/2145/2000 Rev. 1) https://www.ema.europa.eu/en/scientific-guidelines/non-clinical-local-tolerance-testing-medicinal-products
  (3Rs WP가 in vitro 중심 개정 권고 중)
- **ICH/WHO** ○ S2(R1) (standard battery: Ames + in vitro 포유류 + in vivo) · ✔ M7(R2) (2023, 변이원성 불순물·TTC)
  · M3(R2) §11 local tolerance (별도 시험 대신 일반독성에 포함 원칙)
- 카드 각: M3(R2)는 local tolerance를 반복투여독성 안에서 보는 걸 선호, S2(R1) battery 옵션 1 vs 2, TTC 1.5 µg/day.

### Ch.9 + Ch.10 — Carcinogenicity / DART
Task: I-1
- **US** ○ 21 CFR 312.23 · 21 CFR 201.57(c)(9) (임신·수유 라벨링 PLLR 2014) · FDA *Reproductive and
  Developmental Toxicities — Integrating Study Results to Assess Concerns* (2011)
- **EU** ○ EMA *Guideline on risk assessment of medicinal products on human reproduction and lactation*
  (2008) · SmPC 4.6 (fertility, pregnancy, lactation)
- **ICH/WHO** ○ S1A (필요성) · ✔ **S1B(R1)** (2022, weight-of-evidence로 2년 설치류 생략 가능) · S1C(R2) (용량 선택)
  · ○ **S5(R3)** (2020, DART) · S6(R1) (biotech 발암성 접근) · M3(R2) §§ 6, 9 (임상 단계별 DART 타이밍)
- 카드 각: S1B(R1) WoE 6요소, 발암성 시험이 필요한 임상 기간(6개월 이상 투여), WOCBP 포함 전 필요한 DART.

### Ch.11 — Environmental risk assessment
Task: I-1, II-1
- **US** ○ 21 CFR 25 (NEPA) — 25.31 categorical exclusion, EA/EIS, FONSI
  https://www.ecfr.gov/current/title-21/chapter-I/subchapter-A/part-25 · FDA *Environmental Assessment
  of Human Drug and Biologics Applications* (1998) · ○ 21 CFR 314.50(d)(1)(iii)/601.2 (ERA 제출 위치)
- **EU** ✔ EMA *Guideline on the environmental risk assessment of medicinal products for human use*
  **Rev. 1, CHMP 채택 2024-02-15** (Phase I PEC/action limit 0.01 µg/L → Phase II)
  https://www.ema.europa.eu/en/environmental-risk-assessment-medicinal-products-human-use-scientific-guideline
  · ○ Dir 2001/83 Art 8(3)(ca) (ERA 의무, MA 거절 사유 아님)
- **ICH/WHO** — ICH 가이드라인 없음 (지역 규정 영역). VICH GL6/GL38은 동물약.
- 카드 각: US는 categorical exclusion 조건(환경 농도 1 ppb 미만 등), EU는 ERA 결과가 B/R에 못 들어감(Art 8), 기준일 전 Rev 1 적용.

### Ch.12 — Global registration of active substances
Task: II-1, I-6
- **US** ○ 21 CFR 314.420 (DMF) https://www.ecfr.gov/current/title-21/chapter-I/subchapter-D/part-314
  · FDA DMF 페이지 (Type II/III/IV/V; Type I 폐지) https://www.fda.gov/drugs/forms-submission-requirements/drug-master-files-dmfs
  · ○ GDUFA Type II API DMF fee · LOA (letter of authorization)
- **EU** ○ **ASMF** 절차 (CHMP/QWP/227/02 Rev 4) · EDQM **CEP** (Certificate of Suitability, Ph. Eur. 모노그래프)
  https://www.edqm.eu/en/certification-of-suitability-cep (EDQM은 자동 접근 403 — 브라우저로 열 것) · ○ Dir 2001/83 Art 46b/111b (API GMP written confirmation, 수입)
- **ICH/WHO** ○ Q7 (API GMP) · Q11 + Q&A (starting material 정의) · M4Q · Q3D(R2) (원소불순물) · Q3C (잔류용매, 최신 개정 확인 ?)
  · WHO API prequalification
- 카드 각: DMF vs ASMF vs CEP 3자 비교(법적 지위·갱신·열람), Q11 starting material 선정 원칙.

### Ch.13 — Biologics vs small molecules
Task: I-4, I-7
- **US** ○ PHS 351(a)/(k) · 21 CFR 600/601/610 https://www.ecfr.gov/current/title-21/chapter-I/subchapter-F/part-601
  · ○ BPCIA "deemed to be a BLA" 전환(2020-03-23) · ✔ 351(k)(7) 4년 제출 금지/12년 승인 금지
  https://www.fda.gov/media/89049/download · ○ *Scientific Considerations in Demonstrating Biosimilarity* (2015)
  · ✔ *Considerations in Demonstrating Interchangeability — Update* **draft 2024-06** (switching study 일반적 불필요 제안; 최종화 **?**)
  https://www.fda.gov/media/179456/download · ○ CDER vs CBER 관할(Intercenter Agreement; 치료용 단백질은 CDER, 세포·유전자·혈액·백신은 CBER)
- **EU** ○ Dir 2001/83 Annex I Part I·II (biological 정의) · Art 10(4) biosimilar · EMA overarching biosimilar
  guideline (CHMP/437/04 Rev 1) https://www.ema.europa.eu/en/human-regulatory-overview/marketing-authorisation/biosimilar-medicines-marketing-authorisation
  · ○ 생물의약품 8+2(+1) data/market exclusivity (Art 10(1))
- **ICH/WHO** ✔ Q5A(R2) (2023, 바이러스 안전성) · ○ Q5B/C/D · **Q5E** (comparability) · Q6B (규격) · S6(R1)
  · WHO *Guidelines on evaluation of similar biotherapeutic products* (TRS 1004 Annex 2)
- 카드 각: 미국 12년 vs EU 8+2+1 비교, interchangeable이 EU에 없는 개념(국가 substitution 정책), Q5E 적용 시점.

### Ch.14 — Clinical·nonclinical drug supply coordination
Task: III-1, III-2, V-4
- **US** ○ 21 CFR 312.6 (IMP 라벨 "Caution: New Drug—Limited by Federal law…") · 312.7 (판촉·과금 금지) · 312.8 (charging)
  · ○ 21 CFR 210.2(c) (Phase 1 IMP는 211 면제) + guidance *CGMP for Phase 1 Investigational Drugs* (2008)
  · ○ 21 CFR 312.57/312.62 (기록, 약물 처분)
- **EU** ○ CTR 536/2014 Arts 61–63 (IMP 제조·수입 허가, QP) · **Delegated Reg (EU) 2017/1569** (IMP GMP) +
  Commission *Detailed guidelines on GMP for IMPs* (2017, 구 Annex 13 대체) https://health.ec.europa.eu/medicinal-products/eudralex/eudralex-volume-4_en
  · ○ auxiliary medicinal products (CTR Art 2(2)(8)) · EudraLex Vol 10
- **ICH/WHO** ○ E6(R3) §(sponsor: IMP 공급·책임) · Q7 §19 (임상용 API) · Q1(stability; IMP 유효기간 연장 원칙)
- 카드 각: Phase 1 cGMP 면제 범위, QP release가 미국에 없는 개념, comparator sourcing·blinding·re-labelling 책임.

### Ch.15 — Pharmaceutical development & manufacturing experience
Task: I-1, III-3
- **US** ○ 21 CFR 210/211 https://www.ecfr.gov/current/title-21/chapter-I/subchapter-C/part-211 · FDA *Process Validation:
  General Principles and Practices* (2011, 3단계) · *Quality Systems Approach to Pharmaceutical CGMP* (2006)
- **EU** ○ EudraLex Vol 4 Part I/II/III · ✔ **Annex 1** (무균, 2022 개정, 2023-08-25 시행; 8.123은 2024-08-25) ·
  ○ Annex 15 (qualification·validation) · ✔ **Annex 11 개정 + 신설 Annex 22(AI) 공개협의 2025-07-07~10-07 종료, 최종 미채택 (시험엔 구 Annex 11 2011판)**
  https://health.ec.europa.eu/consultations/stakeholders-consultation-eudralex-volume-4-good-manufacturing-practice-guidelines-chapter-4-annex_en
- **ICH/WHO** ○ Q8(R2) (QbD, design space) · ✔ Q9(R1) (2023, 품질위험관리) · Q10 (PQS) · Q11 · **Q12** (lifecycle, established conditions, PACMP)
  · ✔ Q13 (연속생산, 2022) · ○ WHO GMP main principles (TRS 986 Annex 2)
- 카드 각: QbD 용어(QTPP/CQA/CPP/design space), Q12 established conditions vs 미국 314.70 reporting category, Annex 1 CCS.

### Ch.16 — Analytical method lifecycle
Task: I-1, III-3
- **US** ○ FDA *Analytical Procedures and Methods Validation for Drugs and Biologics* (2015) · USP <1220> (analytical procedure
  lifecycle) · <1225>/<1226> · 21 CFR 211.165(e), 211.194(a)(2) (검증·적합성)
- **EU** ○ Ph. Eur. 5.26 (implementation of pharmacopoeial procedures) · EMA Q2(R2)/Q14 Step 5 채택본
- **ICH/WHO** ✔ **Q2(R2)** + **Q14** (2023-11 Step 4; ATP, 개발 approach, 다변량·실시간 분석 포함) · ○ Q6A/Q6B (규격) ·
  Q3A/Q3B (불순물) · ✔ **Q3E** (extractables/leachables) **Step 2b 2025-08, Step 4 예정 2027-06 → 시험엔 초안 상태**
- 카드 각: Q14 "minimal vs enhanced approach", ATP 개념, Q2(R2)가 validation 항목을 어떻게 재배열했는지, 방법 변경 시 Q12와 연결.

### Ch.17 — Application types, data requirements, marketing approval
Task: I-2, II-1
- **US** ○ FD&C **505(b)(1)** full NDA / **505(b)(2)** / **505(j)** ANDA · PHS **351(a)/351(k)** · 21 CFR 314.50 (NDA 내용), 314.94 (ANDA),
  314.101–.105 (filing/approval) · ○ 505(b)(2) guidance (1999 draft) · Hatch-Waxman: 5년 NCE, 3년 new clinical investigation, 180일 first generic,
  Orange Book patent listing, Paragraph IV · ✔ orphan 7년 (21 CFR 316) · 21 CFR 314.126 (adequate and well-controlled)
- **EU** ○ Dir 2001/83 **Art 8(3)** full · **10(1)** generic · **10(3)** hybrid · **10(4)** biosimilar · **10a** well-established use · **10b** fixed combination ·
  **10c** informed consent · ○ 절차 4종: centralised (Reg 726/2004 Annex: 의무/선택 범위) · MRP · DCP · national · ○ conditional MA (Reg 507/2006),
  exceptional circumstances (Art 14(8)) https://www.ema.europa.eu/en/human-regulatory-overview/marketing-authorisation
- **ICH/WHO** ○ M4 CTD (제출 포맷의 공통분모) · E9 (통계 원칙) · E10 (대조군 선택) · WHO *Guidelines on submission of documentation for
  multisource (generic) FPP* (prequalification)
- 카드 각: 505(b)(2) vs EU hybrid 10(3) 대응, centralised 의무 범위(biotech, orphan, ATMP, 특정 적응증 NAS), 8+2+1 vs 5/3/7년.

### Ch.18 — Phases of development (1–4)
Task: I-1, III-1
- **US** ○ 21 CFR 312.21 (Phase 1/2/3 정의, 겹침 허용) https://www.ecfr.gov/current/title-21/chapter-I/subchapter-D/part-312/subpart-B/section-312.21
  · ○ 312.300–.320 expanded access · 312.85 Phase 4 · FDA *Exploratory IND Studies* (2006) · *Adaptive Designs* (2019) · *Master Protocols* (2022)
- **EU** ○ CTR 536/2014 (low-intervention trial 개념, Part I/II 평가, RMS) https://www.ema.europa.eu/en/human-regulatory-overview/research-development/clinical-trials-human-medicines/clinical-trials-regulation
  · ○ EMA first-in-human 가이드라인 (2017)
- **ICH/WHO** ○ **E8(R1)** (2021, quality by design of trials, critical-to-quality factors) · ✔ **E6(R3)** Principles+Annex 1 Step 4 2025-01-06;
  **Annex 2 Step 4 2026-06-03 (EU 시행 2027-01-15) → 기준일엔 Annex 1까지만 유효** https://www.ich.org/news/ich-e6r3-guideline-reaches-step-4-ich-process
  · ○ E9(R1) (estimand) · E10 · ✔ **E20** adaptive design **Step 3 초안 (2025-06)** · ✔ **E21** 임신·수유 포함 **Step 3 초안 (2025-05)**
  · ✔ **M11** CeSHarP 프로토콜 템플릿 Step 4 2025-11-19
- 카드 각: Phase 겹침, E6(R3) 구조(Principles/Annex 1 interventional/Annex 2 non-traditional), estimand 5요소, M11이 뭘 표준화하나.

### Ch.19 — Diversity in clinical trials
Task: I-1, III-1
- **US** ✔ FDORA 2022 §§3601–3602 → FD&C 505(z) **Diversity Action Plan** 의무; FDA draft guidance **2024-06**, 2026 기준 **최종화 미확인 ?**
  (의무 발효 = 최종 guidance 공표 후 180일 이후 등록 시작 시험) https://www.fda.gov/regulatory-information/search-fda-guidance-documents/diversity-action-plans-improve-enrollment-participants-underrepresented-populations-clinical-studies
  · ○ *Enhancing the Diversity of Clinical Trial Populations* (2020 final) · *Collection of Race and Ethnicity Data in Clinical Trials* (2016) · Drug Trials Snapshots
- **EU** ○ CTR 536/2014 Art 25(5)/Annex I (대상 집단 대표성 정당화) · EMA/HMA ACT EU · EMA *Reflection paper on sex/gender* 등
- **ICH/WHO** ○ **E5(R1)** (ethnic factors, bridging) · **E17** (MRCT, pooled regions) · E7 (고령) · E11(R1) (소아) · ✔ E21 (임신·수유, 초안)
- 카드 각: DAP 제출 시점(Phase 3 전/pivotal 전), 면제(waiver) 근거, E17의 region 정의, E5 intrinsic/extrinsic factor.

### Ch.20 — Health authority interactions
Task: IV-4, III-2
- **US** ✔ *Formal Meetings Between the FDA and Sponsors or Applicants of PDUFA Products* (2023)
  https://www.fda.gov/media/172311/download — Type A 30 / B 60 / B(EOP) 70 / C 75 / D 50 / INTERACT 75일; package 제출 시점; preliminary responses
  · ○ CBER SOPP 8101.1 · ○ 21 CFR 10.65 (meetings), 10.75 (dispute resolution) · Formal Dispute Resolution guidance · Advisory Committee (21 CFR 14)
- **EU** ○ EMA scientific advice / protocol assistance (SAWP, 40/70일 절차) https://www.ema.europa.eu/en/human-regulatory-overview/research-development/scientific-advice-protocol-assistance
  · ○ **PRIME** (kick-off meeting, rapporteur 조기 지정) · pre-submission meeting (제출 6–7개월 전) · clock-stop Day 120 LoQ / Day 180 LoOI ·
  oral explanation · parallel EMA–FDA scientific advice · EMA–HTA parallel consultation (→ HTAR Joint Scientific Consultation)
- **ICH/WHO** — 해당 ICH 가이드라인 없음. WHO prequalification pre-submission meeting 존재 ○.
- 카드 각: 회의 유형 선택 시나리오, briefing package 구성, 미국 preliminary response 2일/5일 차이, EU LoQ 응답 clock-stop.

### Ch.21 — Pediatrics
Task: I-2, II-1
- **US** ○ **PREA** (FD&C 505B: 의무 소아 평가, PSP는 EOP2 후 60일 내 initial PSP, waiver/deferral) · **BPCA** (505A: Written Request → 6개월 pediatric
  exclusivity) · RACE for Children Act (2020, 분자표적 항암제 PREA 확대) · 21 CFR 50 Subpart D (소아 피험자 보호) · 201.57(c)(9)(iv) 소아 라벨
- **EU** ○ **Paediatric Regulation (EC) 1901/2006** (PIP 의무, PDCO, waiver/deferral, compliance check, **6개월 SPC 연장**, orphan은 10→12년, **PUMA**)
  https://www.ema.europa.eu/en/human-regulatory-overview/research-development/paediatric-medicines-research-development
  · ✔ 2026-09-28 Council이 채택한 pharma package가 1901/2006을 대체 예정이나 **기준일 이후 → 시험엔 구법**
- **ICH/WHO** ○ **E11(R1)** (2017, 소아 임상) · ✔ **E11A** 소아 extrapolation Step 4 2024-08-21 · S11 (소아 비임상) · WHO EML for children
- 카드 각: PREA(의무) vs BPCA(인센티브) vs EU PIP(의무+보상) 비교표, PIP 제출 시점(PK 종료 후), EU PUMA 10년.

### Ch.22 — Region-specific studies
Task: I-6
- **US** ○ 21 CFR 312.120 (foreign clinical studies not under IND: GCP + 사찰 가능) · FDA *Acceptance of Foreign Clinical Studies* · 314.106
- **EU** ○ Dir 2001/83 Art 8(3)(ib) (3국 시험이 EU 윤리 기준에 준함을 진술) · EMA *Reflection paper on ethical and GCP aspects of trials conducted
  outside EU/EEA* (2012)
- **ICH/WHO** ○ **E5(R1)** + Q&A (bridging study, ethnic sensitivity) · **E17** (MRCT 설계·pooling) · WHO *Handbook for GCP* (2005) ·
  ✔ 일본 PMDA **2023-12 통지**: 일본 포함 MRCT 전 일본인 Phase 1 **원칙적 불요**(기존 데이터로 일본인 안전성 설명·관리 가능 시) https://www.pmda.go.jp/files/000266727.pdf · ○ 중국 NMPA (ICH 가입 2017, 2018 해외 데이터 수용 지침)
- 카드 각: E5 bridging이 필요한 조건, E17 pooled region 사전 정의, 미국의 IND 외 해외시험 수용 요건.

### Ch.23 — Core labeling (1/2 개념·구조 · 2/2 세부·상황형)
Task: II-1, II-2
- **US** ○ 21 CFR **201.56/201.57** (PLR: Highlights, FPI, 섹션 순서) https://www.ecfr.gov/current/title-21/chapter-I/subchapter-C/part-201
  · ○ **PLLR** (2014; 8.1–8.3 Pregnancy/Lactation/Reproductive potential) · 21 CFR 208 (Medication Guide) · 201.100 (Rx 라벨) · 610 Subpart G (biologics 라벨)
  · ○ 라벨 변경: 314.70(b)(2)(v) PAS vs (c)(6)(iii) CBE-0 (safety 강화) · "Changes Being Effected" 안전성 라벨 · 505(o)(4) safety labeling change 명령
  · FDA *Labeling for Human Prescription Drug and Biological Products — Implementing the PLR* (2013) · boxed warning guidance (2011)
- **EU** ○ Dir 2001/83 Title V (Arts 54–69: labelling, package leaflet, **Braille**, readability user testing Art 59(3)) · **SmPC guideline** (Rev 2, 2009) ·
  **QRD templates** (v10.x) https://www.ema.europa.eu/en/human-regulatory-overview/marketing-authorisation/product-information-requirements
  · ○ Blue Box · EPAR · PL 가독성 가이드라인 (2009) · ○ Art 23 (MAH가 product information을 최신 과학에 맞게 유지 의무)
- **ICH/WHO** ○ E2C(R2) (PBRER가 reference safety information을 어떻게 다루나) · M4E(R2) §2.5 (B/R 서술이 라벨 근거) · WHO INN
- 카드 각: Highlights 1/2페이지 제한, "Limitations of Use", SmPC 4.3 vs 4.4, 미국 Section 8 vs SmPC 4.6, 라벨 변경 보고 카테고리.

### Ch.24 — Benefit-risk assessment (1/2 · 2/2)
Task: IV-1
- **US** ✔ FDA *Benefit-Risk Assessment for New Drug and Biological Products* (final 2023-10) https://www.fda.gov/media/152544/download
  (Benefit-Risk Framework 5행: Analysis of Condition / Current Treatment Options / Benefit / Risk & Risk Management / Conclusions) ·
  ○ Patient-Focused Drug Development guidance 시리즈 (PFDD 1–4) · 21 CFR 314.125 (승인 거절 사유)
- **EU** ○ Reg 726/2004 + Dir 2001/83 Art 1(28a) (benefit-risk balance 정의) · EMA Benefit-Risk Methodology Project (PrOACT-URL, effects table) ·
  CHMP assessment report 템플릿 §benefit-risk · ○ 조건부 MA의 "positive B/R + 데이터 미완성" 논리 (Reg 507/2006 Art 4)
- **ICH/WHO** ○ **M4E(R2)** (2016, §2.5.6 Benefits and Risks Conclusions 구조화) · E2C(R2) (주기적 B/R 재평가) · E2E (PV planning)
- 카드 각: FDA framework 5행 채우기 시나리오, EU effects table, M4E(R2) §2.5.6 요구 요소, 시판 후 B/R 재평가가 PBRER에 들어가는 방식.

### Ch.25 — Electronic submissions (eCTD 등) (1/2 · 2/2)
Task: I-3, II-1
- **US** ○ FD&C 745A(a) → eCTD 의무(NDA/ANDA/BLA/상업 IND) · FDA *Providing Regulatory Submissions in Electronic Format — Certain Human Pharmaceutical
  Product Applications* (eCTD 의무 guidance) · ✔ **eCTD v4.0: FDA 신규 신청 수용 2024-09-16; 기존 v3.2.2 forward compatibility 2026-10-16**
  https://www.fda.gov/drugs/electronic-regulatory-submission-and-review/electronic-common-technical-document-ectd-v40
  · ✔ **ESG NextGen** (USP가 2025-04-14 WebTrader 대체) https://www.fda.gov/industry/esg-next-generation · ○ Study Data (SDTM/ADaM/SEND, CDISC, Data Standards Catalog) ·
  21 CFR 11 (전자기록·서명) · ✔ ICSR E2B(R3) 의무 (IND 2026-04-01, 시판후 2026-10-01 — 후자는 기준일 이후)
- **EU** ✔ **eCTD v4.0: CAP 신규 MAA 선택적 제출 2025-12-22부터(기준일 이후), 권고 2027 Q1, 의무 2028 Q1** https://esubmission.ema.europa.eu/
  · ○ EU Module 1 spec, eCTD v3.2.2 의무(CP·MRP·DCP) · **CESP** · **PLM Portal / eAF** (web-based 신청서) · IRIS · EMA eSubmission roadmap
- **ICH/WHO** ○ **M8** eCTD (v3.2.2, v4.0 spec) · M2 (ESTRI) · M4 (CTD 구조 Module 1–5) · E2B(R3) (ICSR 전송)
- 카드 각: Module 1이 지역별인 이유, lifecycle operation(new/replace/delete/append), 기준일 시점 v4.0 상태(US 수용/EU 아직), 21 CFR 11 적용 범위.

### Ch.26 — Expedited pathways (1/2 · 2/2)
Task: I-2, IV-1
- **US** ○ *Expedited Programs for Serious Conditions — Drugs and Biologics* (2014) https://www.fda.gov/media/86377/download —
  **Fast Track** 506(b) · **Breakthrough** 506(a) · **Accelerated Approval** 506(c) (+ FDORA 2022: 확증시험 "underway" 요구, 신속 철회 절차; ✔ draft AA guidance 2024-12) ·
  **Priority Review** (PDUFA 6개월) · ✔ **RMAT** 506(g) 60일 통보 · ✔ *Expedited Programs for Regenerative Medicine Therapies* **draft 2025-09** https://www.fda.gov/media/188874/download
  · ○ Priority Review Voucher (tropical 524, rare pediatric 529 — 529 **✔ 재승인 2026-02-03 → 2029-09-30**) · Project Orbis, RTOR (OCE)
- **EU** ○ **Accelerated assessment** (Reg 726/2004 Art 14(9): 150일) https://www.ema.europa.eu/en/human-regulatory-overview/marketing-authorisation/accelerated-assessment
  · **Conditional MA** (Reg 507/2006; 1년 갱신, specific obligations) · **Exceptional circumstances** (Art 14(8); 연 1회 재평가) · **PRIME** (2016) ·
  ○ 국가 compassionate use (Art 83 Reg 726/2004)
- **ICH/WHO** — 직접 가이드라인 없음. ○ WHO Collaborative Registration Procedure (SRA/WLA 승인 의약품의 신속 국가등록) · E9/E10 (대리변수 수용 논리)
- 카드 각: 4개(+RMAT) 프로그램 자격·시점·혜택 매트릭스, Breakthrough vs RMAT vs PRIME 비교표, AA 확증시험 FDORA 요건, EU conditional vs exceptional.

### Ch.27 — Dossier requirements (1/2 · 2/2)
Task: II-1, I-6
- **US** ○ 21 CFR 314.50 (NDA 항목 → CTD 매핑) · 601.2 (BLA) · Form FDA 356h · 314.50(d)(5)(vi)(b) ISS/ISE · pediatric (505B) ·
  patent 정보 314.53 · financial disclosure (21 CFR 54) · debarment certification · 환경 (Ch.11)
- **EU** ○ Notice to Applicants **Vol 2B** (CTD Module 1 EU) https://health.ec.europa.eu/medicinal-products/eudralex/eudralex-volume-2_en ·
  Dir 2001/83 **Annex I** (dossier 내용·과학 요건, Part I–IV) · ○ EMA pre-submission guidance (validation checklist, Day -14 제출) ·
  ○ RMP (GVP Module V) 제출 의무, PSMF 요약, GMP 증명(QP declaration), **ERA**, pediatric compliance check
- **ICH/WHO** ○ **M4** (organisation) / M4Q(R1) / M4S(R2) / M4E(R2) · ✔ **M4Q(R2) Step 2 2025, Step 4 예정 2027-06 → 시험엔 M4Q(R1)** ·
  ○ E3 (CSR 구조) · WHO CTD 채택(prequalification)
- 카드 각: Module 2 summary 종류(QOS, nonclinical overview/summary, clinical overview/summary), 지역별 Module 1 차이, 356h vs eAF, Annex I Part II(생물의약품·ATMP 특례).

### Ch.28 — Combination products (1/2 · 2/2)
Task: I-8
- **US** ○ 21 CFR **Part 3** (정의 3.2(e), **PMOA**, RFD 절차 3.7) https://www.ecfr.gov/current/title-21/chapter-I/subchapter-A/part-3 ·
  **Part 4** (cGMP: 211 + 820 streamlined; Subpart B 시판후 안전성 보고) · FD&C 503(g) (Cures Act 개정) · **Office of Combination Products** ·
  ○ *Principles of Premarket Pathways for Combination Products* (2022) · *Human Factors Studies and Related Clinical Study Considerations in
  Combination Product Design and Development* (draft 2016 **?**) · ✔ **QMSR 2026-02-02 시행 → 21 CFR 820가 ISO 13485:2016 인용체계로 바뀜; Part 4의 820 참조도 연동**
  https://www.fda.gov/medical-devices/postmarket-requirements-devices/quality-management-system-regulation-qmsr · ○ Pre-RFD · IVD companion diagnostic guidance (2014) · IDE 21 CFR 812 (약·기기 동시 임상)
- **EU** ○ "combination product" 법적 범주 없음 — **MDR 2017/745 Art 117** (integral drug-device: notified body opinion을 MAA에 첨부) ·
  Dir 2001/83 Annex I 3.2.R · EMA *Guideline on quality documentation for medicinal products when used with a medical device* (2021) ·
  ○ IVDR 2017/746 (companion diagnostic 정의 + EMA 협의) · ○ Art 1(8)/(9) MDR (주 작용 기준 경계 설정) · borderline manual
- **ICH/WHO** — 전용 ICH 없음. ○ ISO 13485:2016, ISO 14971 (위험관리), ISO 11608 (needle-based injection systems), IMDRF 문서 참고.
- 카드 각: PMOA 결정 시나리오(prefilled syringe, drug-eluting stent, CDx), Part 4 streamlined 선택, Art 117 NB opinion 범위, QMSR이 바꾼 것.

### Ch.29 — Postauthorization commitments (1/2 · 2/2)
Task: IV-3
- **US** ✔ **PMR vs PMC** (505(o)(3) 요구 / 서면 약속) https://www.fda.gov/drugs/guidance-compliance-regulatory-information/postmarketing-requirements-and-commitments-introduction
  · ○ 506(c) AA 확증시험(PMR), 505B 소아(PMR), 505(o)(3) 안전성(PMR), animal rule · **506B** annual status report (21 CFR 314.81(b)(2)(vii)) ·
  ○ FDA guidance *Postmarketing Studies and Clinical Trials — Implementation of Section 505(o)(3)* (2011) · REMS (505-1) assessment 일정 · 공개 DB (PMR/PMC database)
- **EU** ○ **Specific obligations** (conditional MA, Annex II) · **PAES** Delegated Reg (EU) **357/2014** · **PASS** (Dir 2001/83 Arts 21a/22a, GVP Module VIII; 비개입 PASS는 PRAC 프로토콜 승인) ·
  ○ Art 22 (conditions) · Art 23 (MAH 정보 갱신 의무) · 조건 이행 보고(annual reassessment for exceptional circumstances)
- **ICH/WHO** ○ **E2E** (PV planning: safety specification + PV plan) · E2C(R2) (PBRER에 시판후 연구 상태) · E2F (DSUR)
- 카드 각: PMR/PMC 분류 시나리오, 506B 보고 미제출 결과, EU specific obligation vs PASS vs PAES 3자 구분, RMP 안의 additional PV activity.

### Ch.30 — Transfers & renewals (1/2 · 2/2)
Task: II-2
- **US** ✔ **21 CFR 314.72** (NDA 소유권 이전: 구 소유자 서신 + 신 소유자 356h·완전 사본 보유 진술) https://www.law.cornell.edu/cfr/text/21/314.72 ·
  ✔ BLA는 **21 CFR 601.12(f)(1)** 서면 통지 + license 재발급 ○ · ○ 미국엔 **갱신 제도 없음** — 대신 **annual report** (314.81(b)(2)), 재등록(drug listing 21 CFR 207 연 2회 갱신),
  establishment registration, 사용자 수수료(PDUFA program fee)
- **EU** ○ **Renewal**: Dir 2001/83 **Art 24** / Reg 726/2004 **Art 14(1)–(3)** — 5년 후 1회 갱신 → 이후 무기한(PV 근거로 1회 추가 갱신 가능), 신청은 만료 **9개월 전** ·
  **sunset clause** (3년 미시판/연속 3년 미유통 → 실효, Art 24(4)–(6)) · ○ **Transfer** of MA: Reg (EC) 2141/96 (centralised) — 새 MAH는 EEA 설립 ·
  EMA post-authorisation procedural advice https://www.ema.europa.eu/en/documents/regulatory-procedural-guideline/european-medicines-agency-post-authorisation-procedural-advice-users-centralised-procedure_en.pdf
  · ○ Brexit 이후 MAH 이전 사례(UK→EEA)
- **ICH/WHO** — 해당 없음. ○ WHO prequalification 재평가(requalification) 개념만.
- 카드 각: 미국 "갱신 없음 / annual report"와 EU 5년 갱신·sunset 대비, 이전 시 새 MAH 요건(EEA), 이전과 variation의 관계(Type IAIN).

### Ch.31 — Variations & supplements (1/2 · 2/2)
Task: II-2
- **US** ○ **21 CFR 314.70** (NDA) / **601.12** (BLA): **PAS** (major) · **CBE-30** · **CBE-0** · **annual report** (minor) ·
  ○ guidance *Changes to an Approved NDA or ANDA* (2004) · *CMC Postapproval Manufacturing Changes to Be Documented in Annual Reports* (2014) ·
  *Comparability Protocols* (2022 final) · 314.70(e) protocol · ○ labeling 변경 카테고리 (Ch.23) · 505(b)(2)로 가는 변경(새 제형·용법 등 효능 보충 sNDA)
- **EU** ✔ **Reg (EC) 1234/2008** as amended by **Delegated Reg (EU) 2024/1701** (2025-01-01 적용) — Type **IA/IAIN/IB/II**, line extension(Annex I), grouping, worksharing,
  ✔ **새 EC Variations Guidelines 2026-01-15 적용** (IA 연 1회 일괄 보고, super-grouping, Art 5 recommendation 확대)
  https://www.ema.europa.eu/en/guidance-application-revised-variations-framework · ○ "unforeseen variation" 분류 요청(Art 5) · urgent safety restriction (Art 22)
- **ICH/WHO** ○ **Q12** (established conditions → 보고 카테고리 연결, PACMP, PLCM 문서) · Q5E (생물의약품 변경 comparability) · WHO *Guidelines on variations to a prequalified product*
- 카드 각: 미국 PAS/CBE-30/CBE-0/AR 분류 시나리오 vs EU IA/IB/II 매핑, Q12 PACMP가 미국 comparability protocol과 어떻게 대응, 2026-01-15 전후 EU 절차 차이(기준일은 신 Regulation·구 Guideline 시점 — 주의).

### Ch.32 — Compliance (GMP, inspections 등) (1/2 · 2/2)
Task: III-5, V-2
- **US** ○ FD&C **704** (사찰 권한) · 501(a)(2)(B) (cGMP 위반 = adulterated) · 21 CFR 210/211 · ○ 사찰 유형: pre-approval (PAI, CPGM 7346.832), surveillance,
  for-cause, BIMO (GCP/GLP, CPGM 7348.810/811) · **Form FDA 483** → 15 business day 응답 관행 · **Warning Letter** · untitled letter · OAI/VAI/NAI 분류 ·
  **Import Alert**, consent decree, seizure/injunction · ○ 21 CFR 11 · Data integrity guidance (2018) · ○ FDA–EU **MRA** (2019, 상호 GMP 사찰 인정)
- **EU** ○ **Directive (EU) 2017/1572** (GMP 원칙, 구 2003/94/EC 대체) · EudraLex **Vol 4** Part I/II/III + Annexes (1, 2, 11, 13→IMP, 15, 16 QP certification, 17 RTRT, 19 samples, 21 importers)
  https://health.ec.europa.eu/medicinal-products/eudralex/eudralex-volume-4_en · ○ **QP** (Dir 2001/83 Arts 48–52) · GMP certificate / non-compliance statement → **EudraGMDP** ·
  **Compilation of Union Procedures** (inspections, exchange of information) · GCP inspection (CTR Art 78; EMA GCP IWG) · PIC/S · ○ EMA GMP/GDP IWG Q&A
  · ✔ FDA **RRA(Remote Regulatory Assessments) 최종 guidance 2025-06-26** · ✔ **해외 제조소 불시 사찰 확대 2025-05** · ✔ **EU GMP Ch.4·Annex 11 개정 + Annex 22(AI) 초안 2025-07-07** — 2026-09-01 기준 최종 미공표(2011판 현행) · ✔ **EU-US MRA 동물용 2023-05-31** · ✔ QMM 프로토타입 자발(3년차 2026) · ○ 483 15 business days / WL 15 working days / 501(j) / CPGM 7356.002·7346.832 / Dir 2017/1572(2022-01-31) / Part IV 2018-05-22 / Annex 1 2023-08-25 — 상세는 cards/Ch32_1.md 검증 메모
- **ICH/WHO** ○ **Q7** (API GMP) · Q9(R1) (위험기반 사찰) · Q10 (PQS) · E6(R3) (sponsor QA·QC, 사찰 대응) · **WHO GMP** (TRS 986 Annex 2) · WHO *Guidance on good data and record management practices* (TRS 996 Annex 5) · PIC/S PI 041 data integrity
- 카드 각: 483 vs Warning Letter 법적 성격, PAI 3목표(readiness/conformance/data integrity), QP 개념의 부재(미국), MRA 범위(인체용 완제·일부 제외), Vol 4 Annex 번호↔주제.

### Ch.33 — Recalls (1/2 · 2/2)
Task: II-3, III-6
- **US** ○ **21 CFR Part 7 Subpart C** (7.40–7.59: 자발적 recall, Class I/II/III, depth, recall strategy, effectiveness checks, status reports, termination) ·
  guidance *Initiation of Voluntary Recalls Under 21 CFR Part 7, Subpart C* (2022 final) · Regulatory Procedures Manual Ch.7 · ○ Enforcement Report (주간) ·
  ✔ 강제 recall 권한은 제한적: **PHS 351(d)** (licensed biologics, imminent/substantial hazard) · **FD&C 569D** (controlled substances, SUPPORT Act 2018) · **518(e)** (devices) —
  일반 의약품은 자발적 + 압류·금지명령 · ○ 21 CFR 314.81(b)(1) field alert report (3 working days) · 600.14 BPDR (biologics 45일) · market withdrawal vs stock recovery 구분
- **EU** ○ Dir 2001/83 **Arts 116–118** (MA 정지·철회·변경, 공급 금지) · Arts 123/127a · **Rapid Alert System** (GMP non-compliance·quality defect, Compilation of Union Procedures) ·
  EudraLex Vol 4 **Chapter 8** (complaints, quality defects, product recalls; 2015 개정) · ○ 국가당국이 recall 집행, EMA가 CAP 조율 · **Falsified Medicines Directive 2011/62/EU** (안전장치, 위조) ·
  ○ EMA *Quality defects and recalls* 페이지 https://www.ema.europa.eu/en/human-regulatory-overview/post-authorisation/compliance-post-authorisation/quality-defects-recalls
- **ICH/WHO** ○ Q10 (CAPA, 관리 검토) · Q9(R1) · **WHO Rapid Alert** (SF medical products, Global Surveillance and Monitoring System) · WHO TRS 986 §8 (complaints & recalls)
- 카드 각: Class I/II/III 정의와 예시, recall vs market withdrawal vs stock recovery, FAR 3일, EU Rapid Alert class 1/2/3 매핑, 미국 강제 권한의 예외 3개.

### Ch.34 — Postmarket surveillance / pharmacovigilance (1/2 · 2/2)
Task: II-3, IV-3
- **US** ○ **21 CFR 314.80** (NDA 시판후 AE 보고: 15-day alert, periodic — 승인 후 3년 분기, 이후 연 1회) · **314.81** (annual report, FAR) · **600.80** (BLA) ·
  ○ **FAERS** · MedWatch 3500/3500A · ✔ **E2B(R3) 전자 ICSR**: IND safety 2026-04-01, 시판후 2026-10-01(기준일 이후) · ○ **REMS** (505-1: ETASU, assessment) ·
  **505(o)(4)** safety labeling change · **Sentinel Initiative** (505(k)(3)) · 21 CFR 312.32 IND safety reporting (7/15일, SUSAR 판단 3요소) · 312.33 IND annual report ·
  ○ PBRER 대체 제출 가능 (FDA guidance *Providing Postmarketing Periodic Safety Reports in the ICH E2C(R2) Format*, 2016)
- **EU** ○ Reg 726/2004 (Arts 21–29) + Dir 2001/83 **Title IX** (Arts 101–108) (2010/84/EU 개정 체계) · **GVP Modules I–XVI**
  https://www.ema.europa.eu/en/human-regulatory-overview/post-authorisation/pharmacovigilance-post-authorisation/good-pharmacovigilance-practices-gvp
  — I (PV system), II (**PSMF**), III (inspections), IV (audits), V (**RMP**, Rev 2), VI (ICSR 관리, Rev 2), VII (**PSUR**, EURD list, Art 107c), VIII (PASS), IX (signal), X (additional monitoring ▼),
  XV (safety communication), XVI (risk minimisation) · ○ **PRAC** · **EudraVigilance** (ICSR 중앙 보고, 15일/90일) · **QPPV** · Art 23 · referral 절차(Art 20 Reg 726/2004, Arts 31/107i Dir)
  · ✔ **AEMS 2026-03-11**(FAERS·VAERS 통합·개명) · ✔ **E2B(R3) FDA 의무: IND 2026-04-01 / 시판 후 2026-10-01(기준일 이후)** · ✔ **IR (EU) 2025/1466**(2025-07-22 발효, EV 모니터링 의무 2025-08-12, 나머지 2026-02-12 — MAH 신호탐지 pilot 종료) · ✔ **GVP XVI Rev 3 2024-08-06** · GVP XI–XIV 미발행 — 상세는 cards/Ch34_1.md
  · ✔ ICH E2D(R1) EU 이행 전략 문서 존재
- **ICH/WHO** ○ **E2A** (임상 안전성 정의·신속보고) · E2B(R3) (ICSR 전송 포맷) · **E2C(R2)** (PBRER) · ✔ **E2D(R1)** Step 4 2025-09-15 (시판후 ICSR 정의·관리) · **E2E** (PV planning) · **E2F** (DSUR) ·
  ✔ **M14** RWD 안전성 평가 Step 4 2025-09-04 · ○ M1 **MedDRA** · WHO **UMC/VigiBase**, WHO-ART 역사
- 카드 각: 미국 15-day vs EU 15일 serious/90일 non-serious, PSUR vs PBRER vs DSUR 3자 구분, RMP Part 구조, REMS vs EU risk minimisation(aRMM), PSMF가 미국엔 없음, 기준일 전후 E2B(R3) 의무 날짜.

### Ch.35 — Advertising & promotion (1/2 · 2/2)
Task: III-6, I-5
- **US** ○ FD&C **502(a)** (false/misleading) · **502(n)** (Rx 광고: brief summary, fair balance, major statement) · **21 CFR 202.1** https://www.ecfr.gov/current/title-21/chapter-I/subchapter-C/part-202
  · ✔ DTC TV/radio **"clear, conspicuous, neutral" 최종규칙 2023-11-21, 시행 2024-05-20, 준수 2024-11-20** · ○ **OPDP** (CDER) / **APLB** (CBER) · Form **2253** (사용 시 제출) ·
  ○ 21 CFR 314.550/601.45 (AA 제품 판촉자료 사전 제출) · untitled/warning letter · ○ guidances: *Presenting Quantitative Efficacy and Risk Information in DTC Promotional Labeling and Advertisements* (2023 final),
  *Medical Product Communications That Are Consistent With the FDA-Required Labeling* (2018), *Payor Communications* (2018), ✔ **SIUU** (off-label 과학정보 HCP 제공, **final 2025-01-06**, OMB 대기 표기) https://www.fda.gov/media/184871/download ·
  ○ reminder ad / help-seeking ad / 312.7 (IMP 판촉 금지) · Bad Ad Program · PhRMA Code
- **EU** ○ Dir 2001/83 **Title VIII / VIIIa (Arts 86–100)** — **Rx 의약품 일반대중 광고 금지** (Art 88), HCP 대상 광고 요건(Art 91 SmPC 일치), 샘플(Art 96), 선물·접대 제한(Art 94),
  ○ 국가 집행(자율규제: **EFPIA Code**, UK ABPI 등) · 질병 인식 캠페인 경계 · ○ 소셜미디어·인플루언서는 국가 가이던스 **?**
- **ICH/WHO** — ICH 없음. ○ **WHO Ethical Criteria for Medicinal Drug Promotion** (1988) · IFPMA Code of Practice
- 카드 각: fair balance·major statement·brief summary 구분, 2253 제출 시점, reminder ad 제외(boxed warning 제품), US DTC 허용 vs EU 금지, SIUU 요건(truthful, non-misleading, 출처 공개).

### Ch.36 — Market access (reimbursement, pricing) (1/2 · 2/2)
Task: I-5, IV-1
- **US** ○ 승인≠급여: **CMS** — Medicare **Part B** (ASP+6%, 의사 투여) / **Part D** (경구, PBM formulary) / Medicaid **Drug Rebate Program** (MDRP, best price) · **340B** ·
  ✔ **IRA 2022 Medicare Drug Price Negotiation**: 1차 10개 MFP **2026-01-01 시행**, 2차 15개 2027-01-01, 3차(Part B 포함) 2028 https://www.cms.gov/initiatives/medicare-prescription-drug-affordability/overview/medicare-drug-price-negotiation-program
  · ○ Part D 재설계(2025 OOP cap $2,000) · NCD/LCD (coverage) · CED (coverage with evidence development) · FDA–CMS parallel review · ICER (민간 가치평가) ·
  ○ "small molecule 9년 vs biologic 13년" negotiation 적격 시점
- **EU** ○ 가격·급여는 **회원국 권한** (TFEU 168) · **Transparency Directive 89/105/EEC** (가격·급여 결정 기한 90/180일) · ✔ **HTA Regulation (EU) 2021/2282**: 2025-01-12부터 **JCA** 대상 = 항암 신규 활성물질 + ATMP, **2028-01-13 orphan 추가, 2030-01-13 전체**
  https://health.ec.europa.eu/health-technology-assessment/regulation-health-technology-assessment_en · ○ Joint Scientific Consultation · 국가 HTA: 독일 **AMNOG/G-BA**, 프랑스 **HAS**(ASMR), 영국 **NICE** (EU 외), 이탈리아 AIFA ·
  ○ external reference pricing, managed entry agreement · ✔ pharma package(2026-09-28 Council 채택)의 regulatory data protection 변동은 **기준일 이후 → 시험엔 구 8+2+1**
- **ICH/WHO** — ICH 없음. ○ WHO EML (국가 급여 결정 참고) · WHO fair pricing forum · WHO *Guideline on country pharmaceutical pricing policies* (2020)
- 카드 각: Part B vs D 투여경로 논리, MFP 적격 연한, JCA 단계별 대상 날짜, Transparency Directive 기한, HTA가 B/R와 다른 질문(상대적 효과·비용)을 묻는다는 점.

---

## Phase 2 특화 주제 자료 (학습자 전문 분야)

- **CBER/OTP**: ✔ Super Office of Therapeutic Products 2023-03 신설 (FDA RMAT 페이지는 2025-11 갱신본에도 OTAT 표기) · OTP events https://www.fda.gov/news-events/otp-events-meetings-and-workshops ·
  Cellular & Gene Therapy guidances 목록 https://www.fda.gov/vaccines-blood-biologics/biologics-guidances/cellular-gene-therapy-guidances
- **351 vs 361 HCT/P**: ✔ 21 CFR 1271.10(a)(1)–(4) https://www.law.cornell.edu/cfr/text/21/1271.10 · 1271.3 정의(minimal manipulation, homologous use) · 1271.15 예외(same surgical procedure) ·
  ✔ guidance *Regulatory Considerations for HCT/Ps: Minimal Manipulation and Homologous Use* (2017, 2020 갱신) https://www.fda.gov/media/109176/download · Tissue Reference Group · 1271 Subparts C/D (donor eligibility, cGTP)
- **RMAT**: ✔ 506(g) · 60일 · ✔ 2025-09 draft 개정 guidance (Ch.26) · RMAT 승인 수 통계 페이지
- **Potency assay**: ○ 21 CFR 610.10 (potency), 600.3(s) 정의 · *Potency Tests for Cellular and Gene Therapy Products* (2011) · **?** *Potency Assurance for Cellular and Gene Therapy Products* (draft 2023-12 — 최종화 여부 확인) ·
  ○ EU: Ph. Eur. 2.6.27 / 5.2.12 · EMA *Guideline on potency testing of cell based immunotherapy medicinal products for the treatment of cancer* (2016) · ICH Q6B (potency 규격)
- **CMC comparability**: ○ **ICH Q5E** · **?** FDA *Manufacturing Changes and Comparability for Human Cellular and Gene Therapy Products* (draft 2023-07) · EMA *Q&A on comparability considerations for ATMPs* (2019) · Q12
- **EU ATMP**: ○ **Reg (EC) 1394/2007** (ATMP 정의 GTMP/sCTMP/TEP/combined; **CAT**; hospital exemption Art 28; centralised 의무) ·
  EudraLex Vol 4 **Part IV** (ATMP GMP, 2017) · EMA *Guideline on quality, non-clinical and clinical aspects of GTMPs* (2018) · *…of medicinal products containing genetically modified cells* (2020) ·
  ✔ pharma package가 1394/2007 자체는 대체하지 않음(대체 4법: 2001/83, 726/2004, 1901/2006, 141/2000) — **확인 필요 ?** (ATMP 규정 개정 범위) ·
  **PRIME** https://www.ema.europa.eu/en/human-regulatory-overview/research-development/prime-priority-medicines · CTR/CTIS (Ch.18)

---

## 2026-09-01 기준일 전후 정리 (카드 쓸 때 가장 많이 틀릴 곳)

| 항목 | 기준일 시점 상태 | 그 뒤 |
|---|---|---|
| EU pharma package (2001/83·726/2004·1901/2006·141/2000 대체) | 정치 합의 2025-12-11, **미발효** → 구법 출제 ✔ | Council 채택 2026-09-28, EP 채택·OJ 게재 후 발효, 전환 ~2028 |
| ICH E6(R3) | Principles+Annex 1 유효 ✔ | Annex 2 Step 4 2026-06, EU 시행 2027-01-15 |
| ICH Q1 (통합 안정성) | Step 4 2026-06 ✔ — 지역 이행(Step 5) 시점 **?** | — |
| ICH M4Q(R2) | Step 2 초안 ✔ | Step 4 예정 2027-06 |
| ICH Q3E, E20, E21 | 초안(Step 3) ✔ | — |
| ICH M11, M14, M15, E2D(R1), M13B | Step 4 완료 ✔ (2025-11 / 2025-09 / 2026-01 / 2025-09 / 2026-07) | — |
| EU Variations | Reg 2024/1701 적용 중(2025-01-01), 새 Guidelines 2026-01-15 적용 ✔ | — |
| EU eCTD v4.0 | 아직 미개시 (선택적 2025-12-22) ✔ | 권고 2027 Q1, 의무 2028 Q1 |
| US eCTD v4.0 | 신규 신청 수용 중 (2024-09-16) ✔ | v3.2.2 forward compat 2026-10-16 |
| US QMSR (21 CFR 820) | 시행 중 (2026-02-02) ✔ | — |
| US GLP Quality System rule | NPRM 2016-08 ✔, 최종규칙 없음 ✔ (현행 Part 58) | 새 NPRM 계획(2026-08 Agenda) |
| US Diversity Action Plan guidance | draft 2024-06, 최종 **?** | — |
| US E2B(R3) ICSR 의무 | IND 2026-04-01 적용 중 ✔ | 시판후 2026-10-01 |
| EU GMP Annex 11/22 | 2011판 유효, 개정 협의 종료 ✔ | 채택 시점 미정 |
| IRA MFP | 1차 10개 시행 중 (2026-01-01) ✔ | 2차 2027-01-01 |
| EU HTA JCA | 항암 NAS + ATMP 대상 ✔ | orphan 2028, 전체 2030 |
