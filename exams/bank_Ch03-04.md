# 문제은행 — Ch.3+4 GLP·비임상 개발 원칙 / Safety pharmacology

> **근거:** `textbook/Ch03-04.md` + `cards/Ch03-04.md` 검증 메모(21 CFR 58 조문, GLP QS NPRM 81 FR 58342(2016-08-24), ICH S7A·S7B·E14/S7B Q&A 2022, M3(R2), OECD GLP·Dir 2004/9·2004/10·MAD). GLP QS **최종규칙은 기준일까지 없다**(2026-08 Unified Agenda에 새 NPRM 계획만 있음) (2026-11-28 원문 확인). Q07·Q33은 "최종규칙 확인, 그 전엔 현행 Part 58"을 정답으로 둔다.
> **형식:** 영문 시나리오 → 영문 선지 A~D → 정답 → 한국어 해설. 태그 `[R]/[A]/[An]` + Domain.
> **작성:** 2026-11-24. 68문항(Q01–Q17 초판 + Q18–Q68 증보). 유형 R 23 / A 35 / An 10.

---

### Q01 [A][Domain I] — GLP scope
A sponsor ran an exploratory pharmacology study in mice to select a target, and later a 28-day rat toxicity study to support its IND. Which must comply with 21 CFR Part 58?

A. Only the 28-day rat toxicity study — a safety study supporting the IND; 58.3(d) excludes basic exploratory studies.
B. Both studies, because both appear in the IND and 58.3(d) brings pharmacology studies within the definition.
C. The mouse study alone, because target-selection pharmacology was performed first and underpins the later safety work.
D. Neither — Part 58 covers studies supporting marketing applications (NDA/BLA), and IND-stage studies fall outside it.

**정답:** A

**해설**
- A: Part 58은 신청(IND·NDA·BLA 등)을 **뒷받침하는 안전성 시험**에 적용된다. **58.3(d)** 정의가 basic exploratory study·효력 탐색·사람 대상 시험을 제외한다.
- B: 탐색 약리 시험은 58.3(d) 정의에서 제외된다. IND에 넣을 땐 312.23(a)(8)(iii) 진술만 쓴다.
- C: 수행 순서는 기준이 아니다. 목적(안전성 vs 탐색)이 기준이고, 표적 선정용 탐색 시험은 GLP 밖이다.
- D: IND를 뒷받침하는 안전성 시험도 GLP 대상이다.

---

### Q02 [R][Domain I] — study director
Under 21 CFR 58.33, which phrase describes the study director's role?

A. "Archivist of record" — responsible for retaining study records and specimens after the study ends.
B. "Single point of study control" — one study director per study, with overall responsibility for its conduct and reporting.
C. "Independent monitor of study conduct" — separate from the personnel who direct and conduct the study.
D. "Sponsor's authorised representative" — signs on the sponsor's behalf for the study.

**정답:** B

**해설**
- B: **58.33** study director는 연구 하나에 **한 명**, "**single point of study control**"이고, 기술적 수행·해석·분석·문서화·보고에 총괄 책임을 진다. 교체는 문서화한다.
- A: 기록·검체 보관은 별도 archive 기능이고, 보관 요건은 58.195가 정한다. study director의 역할 정의가 아니다.
- C: 독립 모니터링과 수행 인력과의 분리는 **QAU(58.35)** 의 요건이다.
- D: sponsor 대표가 아니라 시험 시설 측 책임 과학자다.

---

### Q03 [A][Domain III] — QAU independence
At a CRO, the toxicologist serving as study director for Study X also performs the QA inspections for Study X because the QA manager is on leave. Assess.

A. A violation if the final report then omits the QA statement; otherwise a minor documentation issue.
B. A violation of 58.35 — the QAU must be independent of that study's personnel, so the study director cannot QA it.
C. Acceptable as a documented temporary deviation, provided the QA manager reviews the inspection records on return.
D. Acceptable because the study director holds the highest technical qualification at the facility for this study type.

**정답:** B

**해설**
- B: **58.35** QAU는 해당 연구의 **지휘·수행 인력과 완전히 분리·독립**. SD가 자기 연구를 QA하면 독립성 자체가 없다. 다른 연구의 QA는 가능하다.
- A: QA 진술 유무와 무관하게 독립성 위반이다.
- C: 독립성 결여는 일시 편차나 복귀 후 검토로 정당화되지 않는다. 전형적 483 항목이다.
- D: 자격이 아니라 독립성 문제다.

---

### Q04 [A][Domain II] — non-GLP study in an IND
Your pivotal 13-week dog study was run at a non-GLP academic laboratory. You still intend to include it in the IND. What does 21 CFR 312.23 require?

A. The study may not be included, because a pivotal IND safety study has to be GLP-compliant under Part 58.
B. A waiver request under 21 CFR 58.1 before submission, justifying the non-GLP conduct of the pivotal study.
C. Nothing at IND stage; GLP status is reported later in the NDA/BLA nonclinical summary.
D. A statement of GLP compliance for each nonclinical study or, if not compliant, a brief statement of the reason.

**정답:** D

**해설**
- D: **312.23(a)(8)(iii)** 는 각 비임상 시험에 대해 **GLP 준수 진술 또는 미준수 사유**를 쓰라고 한다. 비GLP 시험 포함은 금지가 아니다. 다만 pivotal 안전성 시험을 비GLP로 받아줄지는 FDA 판단이다.
- A: 포함 금지 규정이 아니다. 비GLP pivotal 시험도 사유 진술로 들어가고, 수용 여부만 FDA 판단이다.
- B: 58.1에 waiver 절차는 없다.
- C: IND 단계에서 312.23(a)(8)(iii)로 진술한다.

---

### Q05 [R][Domain I] — retention period
How long must GLP study records and specimens be retained under 21 CFR 58.195 for a study submitted in support of an application?

A. 5 years after approval of the application, since approval is the later regulatory event.
B. Whichever is shortest: 2 years after approval or 5 years after submission.
C. Whichever is longer: 2 years after approval or 5 years after submission.
D. 2 years after submission to FDA, the same period used for studies never submitted.

**정답:** B

**해설**
- B: 58.195(b)는 **승인 후 ≥2년**, **FDA 제출 후 ≥5년**, 미제출 연구는 완료·종료·중단 후 ≥2년 중 **가장 짧은 쪽**("whichever … is shortest")이다.
- A: 두 숫자를 바꿔 붙인 오답이다. 승인 기준은 2년이다.
- C: 방향이 반대다. 조문은 "shortest"다. 가장 흔한 착각이다.
- D: 제출 기준은 5년이다. 2년은 승인 기준이자 미제출 연구 기준이다.

---

### Q06 [A][Domain V] — facility closure
Your long-time GLP CRO announces it will close in six months. Which 21 CFR 58 obligation applies to its archived raw data and specimens?

A. Transfer of all records and specimens to the sponsor's archives under 58.195(g), with written notice to FDA.
B. Records must be transferred to FDA's own archive, which takes custody when a GLP facility closes.
C. The CRO must retain records for an additional 5 years after closure, mirroring the submission-based period.
D. The CRO may destroy records whose minimum retention period has elapsed, without notifying FDA.

**정답:** A

**해설**
- A: **58.195(g)**: 시설 폐업 시 raw data·문서·검체를 **sponsor 보관소로 이관 + FDA 서면 통보**. 프로젝트 관리 과제는 inventory, 보관 조건, 보관 기간 유지, archivist 지정이다.
- B: FDA는 보관소가 아니다. 통보 대상이다.
- C: 폐업 시설이 계속 보관하는 구조가 아니다. 5년은 FDA 제출 기준 보관 기간이다.
- D: 보관 의무가 끝나지 않은 기록은 폐기할 수 없고, 통보 의무가 있다.

---

### Q07 [A][Domain IV] — GLP Quality System rule status
It is September 2026. A quality head asks whether the "new GLP Quality System rule" governs an ongoing rat carcinogenicity study. Which is the correct regulatory posture?

A. Confirm whether a final rule is published and effective; until then, current Part 58 governs.
B. No — the proposal was withdrawn after the comment period closed in January 2017.
C. Yes — the August 2016 proposal took effect on publication, so ongoing studies moved to the quality-system basis.
D. Yes — OECD GLP principles apply directly in US studies, so the quality-system approach already governs.

**정답:** A

**해설**
- A: FDA의 GLP QS 제안은 **2016-08-24 NPRM(81 FR 58342)** 이고(의견 마감 2017-01-21) **최종규칙은 없다**. 2026-08 Unified Agenda는 새 NPRM을 계획으로만 올렸다. 답은 두 단계: 최종규칙 공표·시행 전이면 현행 Part 58, 공표됐어도 시행일 전이면 구 규정. 2026-09-01엔 현행 Part 58이다.
- B: 철회 공고는 없다. 2026-08 Unified Agenda가 새 NPRM과 함께 2016 제안 철회를 계획으로 올렸을 뿐이다.
- C: NPRM(proposed rule)은 효력이 없다. 공표 즉시 시행도 아니다.
- D: OECD 원칙은 미국 법이 아니다. MAD는 데이터 수용 얘기다.

---

### Q08 [R][Domain I] — EU GLP instruments
Which legal instruments implement GLP in the EU, and on what are they based?

A. Regulation (EC) 1394/2007, based on ICH S6 and the OECD GLP principles.
B. Directives 2004/10/EC and 2004/9/EC, based on the OECD GLP principles.
C. Regulation (EU) 536/2014, based on ICH E6 and applied to GLP test facilities.
D. Directive 2001/83/EC alone, through the GLP requirement in its Annex I.

**정답:** B

**해설**
- B: **Dir 2004/10/EC**(GLP 원칙의 적용·검증)와 **Dir 2004/9/EC**(사찰·검증)가 **OECD GLP 원칙**을 EU법으로 받았다. 회원국 GLP 감시당국이 사찰한다. Dir 2001/83 **Annex I**가 비임상 안전성 데이터의 GLP 수행을 요구한다.
- A: 1394/2007은 ATMP 규정이다.
- C: 536/2014는 임상시험 규정(CTR)이다.
- D: 2001/83 Annex I는 GLP 수행을 요구하지만 GLP 자체를 정하는 지침은 2004/9·2004/10이다.

---

### Q09 [A][Domain III] — Korean CRO data
A Korean CRO proposes to run your GLP 4-week rat study. The clinical team worries FDA and EMA will not accept Korean data. Advise.

A. Accept, provided FDA pre-inspects the facility before the study starts, as it does for foreign GLP sites.
B. Accept — Korea is a full MAD adherent; verify GLP certification and the study director's qualifications.
C. Reject the CRO — FDA accepts foreign GLP data from EU facilities but not from Korean ones.
D. Accept the data for EMA, but plan to repeat the study in a US laboratory for the IND.

**정답:** B

**해설**
- B: **OECD MAD** — 한 회원국 GLP 감시 하에서 수행된 데이터를 다른 회원국이 수용한다. 한국은 전면 참여국이다. 확인할 것은 **GLP 인증 시설인지, SD 자격**이지 "외국 데이터인지"가 아니다.
- A: 사전 사찰은 요건이 아니다. FDA는 필요하면 사찰할 수 있을 뿐이다.
- C: "외국이라 안 된다"는 틀렸다. 한국은 MAD 전면 참여국이고, FDA는 외국 GLP 데이터를 받으며 필요하면 외국 시설도 사찰한다.
- D: 반복 수행 요건은 없다. MAD로 FDA·EMA 모두 데이터를 수용한다.

---

### Q10 [An][Domain I] — OECD GLP vs Part 58 on multi-site studies
Why does the handling of multi-site studies differ between OECD GLP and 21 CFR Part 58, and why does it matter for a global CRO network?

A. OECD GLP defines multi-site studies and principal investigators; Part 58 does not, leaving split-study responsibility unclear.
B. Part 58 defines principal investigators for remote sites; OECD GLP does not, so OECD studies cannot be split across sites.
C. The difference is mainly terminological, because both frameworks define a principal investigator at each remote site.
D. Both frameworks prohibit multi-site studies, so a global CRO must keep each GLP study within one test facility.

**정답:** A

**해설**
- A: OECD GLP에는 **multi-site study·principal investigator**(각 site의 위임 책임자) 개념이 있어 SD가 원격 site를 통제하는 틀을 준다. **Part 58에는 없다**. 글로벌 CRO는 OECD 틀로 운영하고 FDA 제출 시 58 요건을 매핑한다. 2016 NPRM이 이 격차를 메우려던 개정이다.
- B: 방향이 반대다.
- C: Part 58에 PI 개념이 없다는 게 핵심이다.
- D: 금지 규정은 없다. 글로벌 CRO는 OECD 틀로 multi-site 시험을 운영한다.

---

### Q11 [R][Domain I] — S7A core battery
What constitutes the ICH S7A safety pharmacology core battery, under what quality standard, and when must it be complete?

A. Central nervous, respiratory and renal systems; GLP; before marketing application.
B. Cardiovascular, gastrointestinal and respiratory systems; GLP; before the start of Phase 3 trials.
C. Cardiovascular, hepatic and renal systems; non-GLP exploratory conditions; before Phase 2 dosing.
D. Cardiovascular, central nervous and respiratory systems; GLP; before first human dosing.

**정답:** D

**해설**
- D: core battery = **심혈관·중추신경·호흡** 3계, **GLP**, **첫 사람 투여 전**. 신장·소화기·자율신경 등은 supplemental, 신호 추적은 follow-up으로 임상 후속 단계에 한다.
- A·B·C: 간·신장·소화기는 supplemental 영역이고, 시점은 FIH 전이다.

---

### Q12 [A][Domain III] — topical product
For a topical ointment with negligible systemic exposure, the pharmacology lead wants to omit the respiratory and CNS core-battery assessments. Is there a basis in S7A?

A. Yes — topical products fall outside S7A, so the omission needs no written justification.
B. No — the core battery must be completed before FIH for each product, whatever the route of administration.
C. Yes — reduction or omission can be justified if PK data show negligible exposure and higher-absorption conditions are addressed.
D. No — S7A permits omitting the cardiovascular assessment for topical products, but not the CNS or respiratory ones.

**정답:** C

**해설**
- C: S7A는 **전신 노출이 매우 낮은 국소 제품**의 평가 축소·생략을 **정당화할 수 있게** 한다. 단 "negligible"을 PK 데이터로 보이고 손상 피부·넓은 면적 같은 조건 변화를 다뤄야 한다. 생략이 아니라 **정당화 문서**가 핵심이다.
- A: 무조건 면제는 없다. PK 근거와 조건 변화 검토가 필요하다.
- B: 전신 노출이 매우 낮은 국소 제품은 축소·생략을 정당화할 여지가 있다. 투여 경로와 무관하게 일률 적용하는 구조가 아니다.
- D: 계통별 제한은 없다. 축소 근거는 전신 노출 수준이다.

---

### Q13 [R][Domain I] — S7B components
What are the two components of the ICH S7B nonclinical assessment for QT-prolongation risk?

A. An in vitro hERG (IKr) assay and an in vivo QT assay in conscious animals.
B. An in vitro hERG assay and a rodent micronucleus test.
C. A 28-day rat toxicity study with ECG and an Ames test.
D. A thorough QT study and a concentration-QTc analysis from the first-in-human trial.

**정답:** A

**해설**
- A: **S7B** = **in vitro IKr(hERG) assay + in vivo QT assay**(보통 의식 있는 비설치류 텔레메트리). 둘을 합쳐 통합 위험 평가를 하고, 양성이면 follow-up.
- B·C: Ames·micronucleus는 유전독성(S2)이다. S7B와 무관하다.
- D: TQT·농도-QTc는 **E14(임상)** 요소다. 비임상 S7B 구성 요소가 아니다.

---

### Q14 [A][Domain I] — "double negative" under the 2022 Q&A
Your compound shows a clean hERG assay run to best practices and no QTc effect in a telemetered dog study at exposures covering the high clinical exposure. How may this be used under the 2022 E14/S7B Q&A?

A. As grounds to waive clinical QT assessment, because the dog exposures already cover the high clinical exposure.
B. As supplementary evidence alongside early clinical concentration-QTc analysis, possibly avoiding a TQT study.
C. As a substitute for repeating the in vivo QT assay in later nonclinical submissions.
D. It cannot be used — the Q&A still expects a dedicated thorough QT study for each new compound.

**정답:** B

**해설**
- B: "**double negative**"는 통합 위험 평가의 **보조 증거(supplementary evidence)** 다. 1차 분석은 초기 임상의 **농도-QTc 모델링**이고, 조건이 맞으면 TQT 대신 대안 경로(Q&A 5.1/6.1)로 갈 수 있다.
- A: 비임상 음성만으로 임상 QT 평가를 면제받는 건 아니다. 고노출을 포괄해도 1차 분석은 임상 농도-QTc다.
- C: 비임상 자료가 비임상 자료를 대체하는 구조가 아니다.
- D: 2022 Q&A가 TQT 대안 경로를 열었다.

---

### Q15 [An][Domain IV] — why nonclinical cannot replace TQT alone
Explain why the integrated nonclinical assessment cannot by itself replace a thorough QT study, and what clinical element is required.

A. Because hERG assays are run outside GLP, so a nonclinical double negative cannot carry the weight of a pivotal clinical study.
B. Because the in vivo QT assay must be repeated in healthy volunteers at the same exposure multiples.
C. Because the Q&A keeps the thorough QT study as the required clinical element for new compounds.
D. The double negative is supplementary; clinical concentration-QTc modelling over an adequate exposure range is required.

**정답:** D

**해설**
- D: 비임상 double negative는 **보조 증거**다. TQT 대안이 되려면 **임상 농도-QTc**가 충분한 노출 범위(고노출 포함)에서 수행돼야 한다. 전략은 Phase 1 SAD/MAD에 고품질 ECG + PK 샘플링을 넣는 것이다.
- A: GLP 여부가 논점이 아니다. 비임상이 보조 증거인 이유는 임상 농도-QTc가 1차 분석이기 때문이다.
- B: "사람에서 반복"이 아니라 임상 농도-QTc 분석이 필요한 것이다.
- C: Q&A는 TQT를 일률적으로 요구하지 않는다. 조건이 맞으면 대안 경로(Q&A 5.1/6.1)가 있다.

---

### Q16 [A][Domain II] — microdose
A sponsor wants a human PET microdose study (total dose 80 µg) before any 28-day toxicity study. Which M3(R2) provision applies, and what nonclinical support is needed?

A. Standard IND requirements — a PET tracer study still needs 28-day repeat-dose toxicity in two species before human dosing.
B. Approach 1 applies, but it requires 14-day repeat-dose toxicity in a rodent and a non-rodent before dosing.
C. Approach 1 (microdose): ≤100 µg total; one-species extended single-dose toxicity study; exploratory IND in the US.
D. Microdosing is outside ICH guidance; the FDA 2006 exploratory IND guidance governs the study instead.

**정답:** C

**해설**
- C: **M3(R2) §7 접근 1(microdose)** — 총 투여량 **≤100 µg**, NOAEL 용량의 1/100 이하·약리 활성 용량의 1/100 이하. 비임상은 **한 종 extended single-dose 독성시험**으로 지지 가능. 미국은 exploratory IND(2006 guidance).
- A: 탐색 임상 접근은 표준 IND 요건을 줄여 준다. 접근 1은 28일 반복투여를 요구하지 않는다.
- B: 반복투여 요건은 접근 1에 없다.
- D: M3(R2)가 탐색 임상 접근을 담는다. 2006 guidance는 미국의 exploratory IND 제출 경로다.

---

### Q17 [A][Domain III] — BIMO GLP inspection
FDA conducts a BIMO inspection of your GLP CRO and finds the QAU master schedule missing and protocol amendments not signed by the study director. Which outcome and response are most likely?

A. VAI, since both findings are documentation gaps that the CRO can correct in its next internal audit without a written response.
B. Likely OAI; respond to the Form 483 within 15 business days with CAPA and a data-reliability impact assessment.
C. Debarment of the study director, because unsigned protocol amendments fall to the study director under 58.120.
D. NAI, because neither finding affects the raw data or the conclusions of the affected studies.

**정답:** B

**해설**
- B: master schedule 부재(**58.35**)와 SD 서명 없는 protocol 변경(**58.120**)은 핵심 요건 위반이라 **OAI**로 가기 쉽다. 483 응답은 **15 영업일** 안에 CAPA(QAU 재구축·문서 통제) + **해당 연구 데이터 신뢰성 영향 평가**. 신뢰성이 흔들리면 FDA가 그 연구를 **거부**할 수 있다. BIMO GLP 사찰 프로그램은 CPGM 7348.808.
- A·D: master schedule(58.35)과 SD 서명(58.120)은 단순 문서 문제가 아니라 핵심 요건이다. VAI/NAI로 보기 어렵다.
- C: debarment는 별도 법적 절차다. 사찰 결과에서 바로 나오지 않는다.

---

### Q18 [R][Domain I] — what GLP guarantees
Which statement best describes what compliance with 21 CFR Part 58 assures a regulator?

A. That the study results have been independently verified by the QAU repeating key measurements.
B. That the study design was scientifically sound and the dose selection was appropriate for the clinical plan.
C. That the test article is safe for first-in-human dosing at the doses tested in the study.
D. That the study was conducted as written, with retained, reliable data and clear responsibility.

**정답:** D

**해설**
- D: GLP는 **운영·기록 체계**다. 시험이 적힌 대로 수행됐고, 데이터가 조작·누락 없이 보관되며, 책임자가 분명하다는 것을 보증한다. 규제당국이 데이터 신뢰성 자체를 규제하는 이유다.
- A: 재현·재측정 요건은 Part 58에 없다. QAU는 감시·보증 조직이다.
- B: GLP는 시험 설계의 **과학적 질을 보증하지 않는다**.
- C: 안전성 결론은 데이터 해석의 문제다. GLP는 그 데이터를 믿을 수 있게 하는 체계다.

---

### Q19 [R][Domain I] — 58.3(d) exclusions
Which of the following is EXCLUDED from the definition of a "nonclinical laboratory study" under 21 CFR 58.3(d)?

A. A 28-day rat toxicity study supporting an IND.
B. A 13-week dog toxicity study supporting an NDA.
C. A basic exploratory study conducted to explore a hypothesis.
D. A GLP cardiovascular telemetry study in dogs supporting an IND.

**정답:** C

**해설**
- C: **58.3(d)** 정의는 **basic exploratory study**(가설 탐색), 효력 탐색, 사람 대상 시험을 제외한다.
- A·B·D: 신청(IND·NDA)을 뒷받침하는 안전성 시험이다. 모두 Part 58 적용 대상이다.

---

### Q20 [A][Domain II] — GLP statement scope in the IND
An IND contains three nonclinical studies: a GLP 28-day rat toxicity study, a non-GLP exploratory mouse pharmacology study, and a non-GLP dog PK study. For which must the IND address GLP status under 21 CFR 312.23(a)(8)(iii)?

A. The non-GLP studies, because the GLP rat study is covered by the facility's compliance certificate.
B. None of them yet; the GLP statement belongs to the NDA nonclinical section.
C. Each study — either a GLP compliance statement or the reason for noncompliance.
D. The GLP rat study, to document its compliance; non-GLP studies are labelled exploratory instead.

**정답:** C

**해설**
- C: **312.23(a)(8)(iii)** 는 **각 비임상 시험**에 대해 GLP 준수 진술 또는 미준수 사유를 쓰라고 한다. 준수한 시험도, 비GLP 시험도 모두 진술 대상이다.
- A·D: 준수 시험만, 또는 미준수 시험만 쓰는 구조가 아니다. 시설 인증서나 "탐색" 표시가 진술을 대신하지 않는다.
- B: IND 내용 요건이다(312.23(a)(8)(iii)).

---

### Q21 [A][Domain I] — study director replacement
Midway through a GLP 13-week study the study director resigns. The facility proposes that two senior toxicologists jointly take over. Assess under 21 CFR 58.33.

A. Not acceptable — the study director cannot be replaced mid-study; the facility must restart the study.
B. Acceptable if the QAU approves both as co-directors and records the split of duties.
C. Acceptable — Part 58 permits co-directors when the workload of a 13-week study justifies it.
D. Not acceptable — there is one study director per study; the replacement must be one person, documented.

**정답:** D

**해설**
- D: **58.33** study director는 연구 하나에 **한 명**이다. "single point of study control"이 핵심이고, **교체는 문서화**한다.
- A: 교체는 가능하다. 문서화가 요건이고 재시작 요건은 없다.
- B: QAU 승인으로 공동 SD가 가능해지는 것이 아니다. QAU는 독립 감시 조직이다.
- C: 한 명 요건이 있다. 업무량은 예외 사유가 아니다.

---

### Q22 [R][Domain I] — QAU functions
Which of the following is NOT a Quality Assurance Unit function under 21 CFR 58.35?

A. Signing the final report as the person responsible for technical conduct.
B. Maintaining records of inspections and providing a QA statement in the final report.
C. Maintaining copies of the protocols for the studies it monitors.
D. Maintaining a master schedule of the facility's nonclinical laboratory studies.

**정답:** A

**해설**
- A: final report에 기술적 수행 책임자로 **서명·일자**하는 것은 **study director(58.185)** 의 일이다. QAU는 final report에 **QA 진술**을 넣는다.
- B·C·D: **58.35** QAU 업무다 — master schedule 유지, protocol 사본 보관, 사찰 기록, final report QA 진술.

---

### Q23 [A][Domain III] — QA of another study
The study director of Study X is asked to perform QAU inspections for Study Y, a study in which she has no direction or conduct role. Is this permissible under 21 CFR 58.35?

A. No — a study director at the facility is barred from QAU functions for the duration of her own study.
B. Yes, and she may also QA Study X if the QA manager documents the arrangement.
C. No — QAU staff must be employed by a legal entity separate from the test facility.
D. Yes — independence applies to the study inspected; she may not QA her own Study X.

**정답:** D

**해설**
- D: **58.35** 독립성은 **해당 연구**의 지휘·수행 인력과의 분리다. SD가 **다른 연구의 QA는 가능**, **자기 연구는 불가**다.
- A: 전면 금지가 아니다. 독립성은 검사 대상 연구를 기준으로 본다.
- B: 자기 연구 QA는 문서화해도 독립성이 없다.
- C: 별도 법인 요건은 없다. 같은 시설 안에서 독립이면 된다.

---

### Q24 [R][Domain I] — protocol and amendments
Under 21 CFR 58.120, how must a GLP study be conducted and how are changes handled?

A. According to an approved written protocol; the study director signs and dates amendments.
B. According to an approved written protocol; amendments must be signed by the sponsor's representative.
C. According to the facility's standard operating procedures, which replace a study-specific protocol.
D. According to a verbal plan agreed with the sponsor; changes are recorded by the QAU.

**정답:** A

**해설**
- A: **58.120** — **승인된 서면 protocol**로 수행하고, 변경(amendment)은 **SD 서명·일자**다.
- B: 서명 주체는 study director다.
- C: SOP는 protocol을 대체하지 않는다.
- D: 서면 protocol이 요건이다. QAU는 protocol 사본을 보관하는 것이고 변경을 승인하는 주체가 아니다.

---

### Q25 [R][Domain I] — final report
Under 21 CFR 58.185, what must the final report of a GLP study carry?

A. The archivist's signature confirming retention.
B. The sponsor's signature and a certificate of analysis.
C. The study director's signature and date, and the QA statement.
D. The QAU manager's signature, since the study director signs the protocol rather than the report.

**정답:** C

**해설**
- C: **58.185** final report는 **SD 서명·일자**가 있고 **QA 진술**을 포함한다.
- A: archivist는 보관(58.195) 쪽 역할이다.
- B: sponsor 서명·CoA 요건은 58.185에 없다.
- D: SD는 protocol 변경(58.120)에도, final report(58.185)에도 서명한다.

---

### Q26 [A][Domain V] — retention for a study never submitted
A GLP 4-week rat study was terminated after 2 weeks and its results were never submitted to FDA. How long must its records and specimens be retained under 21 CFR 58.195?

A. At least 5 years after termination, because 5 years is the longer of the two statutory periods.
B. At least 2 years after the date the study was terminated.
C. Until the related application is approved, plus 2 years.
D. Retention ends at termination for studies not submitted to FDA.

**정답:** B

**해설**
- B: **미제출 연구**는 완료·종료·중단 후 **2년** 보관한다.
- A: "5년"은 FDA에 **제출된** 연구의 제출 기준이다. 미제출 연구에는 적용되지 않는다.
- C: 제출되지 않은 연구는 신청 승인과 연결되지 않는다.
- D: 미제출 연구도 보관 의무가 있다.

---

### Q27 [A][Domain V] — computing the retention date
A GLP study's results were submitted to FDA in an IND in 2019. The NDA that relies on the study was approved in 2025. Under 21 CFR 58.195, until at least what year must the records be retained?

A. 2024 (5 years after submission).
B. 2027 (2 years after approval).
C. 2030 (5 years after approval).
D. 2021 (2 years after submission).

**정답:** A

**해설**
- A: 두 기준을 모두 계산하고 **가장 짧은 쪽**을 택한다(58.195(b) "whichever … is shortest"). 제출 후 5년 = 2024, 승인 후 2년 = 2027 → **2024**.
- B: 2027은 긴 쪽이다. 조문은 가장 짧은 쪽을 적용한다.
- C: 승인 기준은 5년이 아니라 2년이다.
- D: 제출 기준은 2년이 아니라 5년이다.

---

### Q28 [A][Domain V] — facility closure: pick the wrong statement
Your GLP CRO is closing. Which statement about 21 CFR 58.195(g) is INCORRECT?

A. Raw data, documentation and specimens must be transferred to the archives of the sponsor.
B. Transfer to the sponsor ends the retention obligation, so records may be discarded on receipt.
C. FDA must be notified of the transfer in writing, as part of the facility-closure obligation.
D. The sponsor must plan an inventory, suitable storage conditions for specimens, and designation of an archivist.

**정답:** B

**해설**
- B: 이관은 **보관 장소**가 바뀌는 것이다. **보관 기간**(승인 후 2년/제출 후 5년 중 가장 짧은 쪽)은 그대로 유지해야 한다.
- A·C: **58.195(g)** 의 두 요건 — sponsor 보관소로 이관 + FDA 서면 통보.
- D: 프로젝트 관리 과제다 — inventory, 보관 조건, 보관 기간 유지, archivist 지정.

---

### Q29 [An][Domain V] — closure project plan
A regulatory PM is building the transfer plan for a closing GLP CRO's archive. Which set of tasks correctly follows from 21 CFR 58.195(g) and the retention rules?

A. Inventory, specimen storage, each study's retention clock, an archivist, and written notice to FDA.
B. Transfer the final reports to the sponsor; raw data may remain with the CRO's liquidator until retention ends.
C. Negotiate a 1-year retention extension with the CRO; FDA notification is optional when the sponsor keeps custody.
D. Ship the archived materials to FDA for storage and request written confirmation of receipt.

**정답:** A

**해설**
- A: 조문 요건(sponsor 이관 + FDA 서면 통보)에 관리 과제 네 가지가 붙는다 — **inventory, 검체 보관 조건, 보관 기간 유지(승인 후 2년/제출 후 5년 중 가장 짧은 쪽), archivist 지정**.
- B: raw data·문서·검체 **전부**가 sponsor 이관 대상이다.
- C: 폐업 시설이 계속 보관하는 구조가 아니다. FDA 통보는 의무다.
- D: FDA는 보관소가 아니라 통보 대상이다.

---

### Q30 [R][Domain I] — BIMO GLP programme
Under which Compliance Program Guidance Manual does FDA's BIMO programme inspect GLP facilities?

A. ICH E6(R3) guideline.
B. CPGM 7348.808.
C. CPGM 7348.810.
D. 21 CFR 58.35.

**정답:** B

**해설**
- B: BIMO GLP 사찰 프로그램은 **CPGM 7348.808**이다.
- A: E6는 임상 GCP 가이드라인이다.
- C: 교재에 없는 번호다. 7348.808만 GLP 프로그램으로 익힌다.
- D: 58.35는 QAU 조문이다. 사찰 프로그램 번호가 아니다.

---

### Q31 [A][Domain III] — Form 483 response
After a BIMO GLP inspection your CRO receives a Form 483 citing an absent master schedule. What should the written response contain, and by when?

A. A request to reclassify the inspection as NAI, sent once the CRO has corrected the schedule.
B. A legal denial of the observations, within 30 calendar days of the close-out meeting.
C. A commitment to retrain QAU staff, within 15 calendar days of the inspection.
D. CAPA and a data-reliability impact assessment for the affected studies, within 15 business days.

**정답:** D

**해설**
- D: 483 응답은 **15 business days** 안에 **CAPA**(QAU 재구축·문서 통제)와 **해당 연구 데이터 신뢰성 영향 평가**를 담는다.
- A: 분류 재지정 요청으로 응답이 끝나지 않는다. CAPA와 영향 평가가 빠져 있다.
- B: 기한도 내용도 다르다.
- C: 교육만으로는 CAPA가 아니고, 신뢰성 영향 평가가 빠진다. 기한도 영업일 기준이다.

---

### Q32 [An][Domain III] — why FDA may refuse a study
Why can core Part 58 violations found at a CRO lead FDA to refuse to accept a sponsor's pivotal toxicity study, even when the study's scientific design is sound?

A. Because core GLP violations lead to debarment of the sponsor, which then bars FDA from relying on its pivotal studies.
B. Because 312.23 bars non-GLP studies from an IND, and the violations make the study non-GLP.
C. Because GLP makes data believable; when QAU or protocol control fails, FDA may refuse the unreliable study.
D. Because FDA requires pivotal studies to be repeated after a Form 483 cites core Part 58 requirements.

**정답:** C

**해설**
- C: GLP는 과학적 설계가 아니라 **데이터 신뢰성**을 보증한다. 핵심 요건 위반으로 신뢰성이 흔들리면 FDA는 그 연구를 **거부**할 수 있다. 그래서 483 응답에 신뢰성 영향 평가가 들어간다.
- A: debarment는 별도 법적 절차다. 거부 근거는 데이터 신뢰성이다.
- B: 비GLP 시험도 사유 진술로 IND에 들어갈 수 있다. 수용 여부가 FDA 판단일 뿐이다.
- D: 반복 요건은 없다. 핵심은 데이터 신뢰성 영향 평가다.

---

### Q33 [A][Domain IV] — CRO claims the new rule
A CRO's proposal states: "We operate under the new FDA GLP Quality System final rule, so a separate QAU under 21 CFR 58.35 is no longer required." As the sponsor's regulatory lead, what is the correct response?

A. Accept if the CRO is OECD GLP-certified, because OECD principles override Part 58 for US submissions.
B. Confirm whether a final rule is published and effective; until then, the 58.35 QAU requirement applies.
C. Accept — the 2016 proposed rule replaced Part 58's QAU requirement when it was published in the Federal Register.
D. Reject the CRO — FDA formally withdrew the Quality System proposal after the January 2017 comment deadline.

**정답:** B

**해설**
- B: 2016-08-24 NPRM(81 FR 58342)은 **제안**이고 **최종규칙은 없다**. 현행 **Part 58**이 유효하고, 최종규칙이 공표돼도 시행일 전이면 구 규정이다.
- A: OECD 원칙은 미국 법이 아니다.
- C: NPRM은 효력이 없다. 공표 즉시 시행도 아니다.
- D: 철회 공고는 없다. 2026-08 Agenda에 철회 계획만 있다.

---

### Q34 [R][Domain I] — GLP Quality System NPRM facts
Which statement about FDA's GLP Quality System proposed rule is correct?

A. It proposes to abolish the QAU and study director roles in favour of a sponsor-led quality system.
B. It was published on 21 January 2017, with comments closing 24 August 2016, and took effect on publication.
C. Published 24 August 2016 at 81 FR 58342; comments closed 21 January 2017 after extension; quality-system basis aligned with OECD GLP.
D. It was published as a final rule on 24 August 2016 and is in force, replacing Part 58 for studies started after that date.

**정답:** C

**해설**
- C: **2016-08-24 NPRM, 81 FR 58342**, 의견 마감 **2017-01-21**(연장, 81 FR 75351). 목표는 GLP Quality System 요구, OECD GLP 정합, **multi-site study·sponsor 책임** 명시.
- A: 역할 폐지가 아니라 quality system 기반 재구성이다. sponsor 책임은 명시 대상이지 SD·QAU의 대체가 아니다.
- B: 날짜가 뒤바뀌었다. NPRM은 공표로 효력이 생기지 않는다.
- D: proposed rule이다. 최종규칙은 공표되지 않았고 Part 58은 대체되지 않았다.

---

### Q35 [R][Domain I] — concept present in OECD GLP but absent from Part 58
Which concept is defined in the OECD GLP principles but not in 21 CFR Part 58?

A. Principal investigator at a separate site in a multi-site study.
B. Quality Assurance Unit independent of study personnel.
C. Master schedule of the facility's studies.
D. Study director with overall responsibility as the single point of study control.

**정답:** A

**해설**
- A: OECD GLP에는 **multi-site study**와 **principal investigator**(각 site의 위임 책임자) 개념이 있다. **Part 58에는 없다**. 2016 NPRM이 메우려던 격차다.
- B·C·D: 둘 다 뼈대가 같다 — study director, QAU, master schedule은 Part 58에도 있다.

---

### Q36 [A][Domain III] — splitting a US GLP study across sites
A global CRO network will run the in-life phase of a GLP rat study in one country and the histopathology at another site, for a US IND. How should the study director's control of the remote site be framed?

A. Appoint a second study director at the histopathology site to control the remote phase.
B. Under Part 58's principal investigator provisions, which assign the remote histopathology phase to a named site lead.
C. Multi-site GLP studies are prohibited for FDA submissions, so both phases must run at one site.
D. Use the OECD multi-site framework with a principal investigator, and map Part 58 requirements onto it.

**정답:** D

**해설**
- D: 글로벌 CRO는 **OECD 틀**(SD + 원격 site의 principal investigator)로 운영하고 **FDA 제출 시 58 요건을 매핑**한다. Part 58에는 multi-site·PI 개념이 없어 책임 경계가 규정상 불명확하다.
- A: study director는 연구 하나에 한 명이다(58.33).
- B: Part 58에는 PI 조항이 없다.
- C: 금지 규정은 없다.

---

### Q37 [R][Domain I] — 2004/9 vs 2004/10
Which EU directive governs the inspection and verification of GLP?

A. Directive 2004/10/EC.
B. Directive 2001/83/EC.
C. Regulation (EU) 536/2014.
D. Directive 2004/9/EC.

**정답:** D

**해설**
- D: **Dir 2004/9/EC** = 사찰·검증(inspection and verification). 회원국 GLP 감시당국이 사찰한다.
- A: **Dir 2004/10/EC** = GLP 원칙의 적용·검증(application). 둘을 바꿔 외우기 쉽다.
- B: 2001/83은 의약품 지침이다. Annex I가 비임상 안전성 데이터의 GLP 수행을 요구한다.
- C: 536/2014는 임상시험 규정이다.

---

### Q38 [R][Domain I] — where the EU requires GLP for medicines
Which EU provision requires that nonclinical safety data in a marketing authorisation dossier be generated under GLP?

A. Annex I of Directive 2001/83/EC.
B. ICH M3(R2) nonclinical safety guideline.
C. Regulation (EC) 1394/2007 on advanced therapies.
D. Directive 2004/9/EC, Article 1.

**정답:** A

**해설**
- A: **Dir 2001/83 Annex I**가 비임상 안전성 데이터의 **GLP 수행을 요구**한다. GLP 자체의 내용·사찰은 2004/10·2004/9가 정한다.
- B: M3(R2)는 ICH 가이드라인이다. EU 법적 요건이 아니다.
- C: 1394/2007은 ATMP 규정이다.
- D: 2004/9는 사찰 지침이다. 의약품 dossier 요건을 정하는 조문이 아니다.

---

### Q39 [R][Domain I] — OECD MAD
What does the OECD Mutual Acceptance of Data (MAD) system provide?

A. FDA acceptance of foreign GLP facilities on the condition that FDA gives up its inspection rights.
B. Acceptance by other members of data generated under GLP monitoring in an OECD member or adherent.
C. Harmonised timing of nonclinical studies relative to clinical development across the OECD member countries.
D. Mutual recognition of GMP inspection outcomes between EU and US authorities for medicinal products.

**정답:** B

**해설**
- B: **MAD** — 한 OECD 회원국(또는 전면 참여국)의 GLP 감시 하에서 수행된 시험 데이터를 다른 회원국이 **수용**한다. 한국은 전면 참여국이다.
- A: FDA는 외국 시설도 사찰할 수 있다. 사찰 권한을 없애는 제도가 아니다.
- C: 시기·기간·범위 조화는 M3(R2)다.
- D: GMP 사찰 상호인정은 MAD가 아니다. MAD는 **데이터 수용** 체계다.

---

### Q40 [A][Domain III] — what to verify at the Korean CRO
Before placing a GLP 4-week rat study at a Korean CRO for a US IND, which two items should the sponsor's regulatory lead verify?

A. That FDA has pre-approved the facility, and that the study director is a US citizen.
B. That the study will be repeated in a US laboratory, and that OECD has inspected the site.
C. That the CRO holds an EU GMP certificate, and that the data will be re-analysed in the US.
D. That the facility is GLP-certified under Korean GLP monitoring and the study director is qualified.

**정답:** D

**해설**
- D: 확인할 것은 한국 GLP 감시당국 하의 **GLP 인증 시설인지**와 **SD 자격**이다. "외국 데이터인지"는 쟁점이 아니다. 한국은 OECD MAD 전면 참여국이다.
- A: FDA 사전 승인·국적 요건은 없다.
- B: 반복 수행 요건은 없다. OECD는 시설을 사찰하는 기관이 아니다. 회원국 감시당국이 사찰한다.
- C: GMP 인증은 GLP와 다른 체계다. 재분석 요건도 없다.

---

### Q41 [A][Domain IV] — FDA and foreign GLP sites
A Korean CRO's business development manager says: "Because Korea is an OECD MAD adherent, FDA has no right to inspect our facility." Is this correct?

A. No — FDA must inspect each foreign GLP facility before it accepts that facility's data.
B. Yes — MAD transfers inspection rights to the authority of the country where the study was run.
C. No — MAD covers data acceptance, but FDA may still inspect foreign GLP facilities.
D. Yes — inspection rests with the Korean monitoring authority, and EU authorities by agreement.

**정답:** C

**해설**
- C: MAD는 **데이터 수용** 제도다. FDA는 외국 GLP 데이터를 받고, **필요하면 외국 시설도 사찰할 수 있다**.
- A: 사전 사찰은 요건이 아니다. "할 수 있다"와 "해야 한다"를 구분한다.
- B·D: 사찰 권한을 없애는 제도가 아니다.

---

### Q42 [An][Domain I] — the pathway for Korean GLP data into a US IND
Why can a GLP toxicity study run at a Korean CRO support a US IND, and which three elements make the pathway complete?

A. Because Part 58 does not apply outside the US, so any foreign study is accepted without a GLP statement.
B. Because of a US–Korea mutual recognition agreement on GLP inspections; the elements are FDA pre-inspection, a US study director, and an NDA-stage GLP certificate.
C. Because Directive 2004/10/EC applies in Korea through its OECD membership, making Korean GLP EU-equivalent.
D. Because of OECD MAD; elements: MAD acceptance, a GLP-certified facility with a qualified study director, and the IND GLP statement.

**정답:** D

**해설**
- D: 경로 = **OECD MAD + GLP 인증 시설(SD 자격 확인) + 312.23(a)(8)(iii) 진술**. 한국은 OECD 회원·MAD 전면 참여국이다.
- A: IND를 뒷받침하는 안전성 시험이면 GLP 대상이고 진술도 필요하다. 수행 장소는 기준이 아니다.
- B: 근거는 MAD(데이터 수용)다. 사찰 상호인정 협정이 아니다. 사전 사찰·국적·NDA 단계 인증서는 요건이 아니다.
- C: 2004/10은 EU 지침이다. 한국에 적용되지 않는다. 근거는 MAD다.

---

### Q43 [R][Domain I] — functional endpoints
Which set of endpoints belongs to safety pharmacology under ICH S7A rather than to toxicology?

A. Histopathology, organ weights and clinical chemistry measured after a single acute dose.
B. Micronucleus frequency and bacterial reverse mutation, as functional markers of genotoxic stress.
C. ECG and blood pressure; behaviour, temperature and FOB; respiratory rate and tidal volume.
D. Fertility indices and fetal skeletal findings in embryo-fetal development studies.

**정답:** C

**해설**
- C: S7A는 **기능**을 본다 — ECG 간격·혈압(CV), 행동·체온·FOB(CNS), 호흡수·tidal volume(호흡).
- A: 조직병리·임상병리는 투여 횟수와 무관하게 **구조 손상**을 보는 독성시험 종점이다.
- B: 유전독성 종점이다. 기능 평가가 아니다.
- D: 생식·발생독성 종점이다.

---

### Q44 [An][Domain I] — why toxicity studies do not replace S7A
A toxicologist argues that a planned 28-day repeat-dose study with full histopathology makes the S7A core battery redundant. Why is this reasoning wrong?

A. Because the core battery is run after Phase 1, once human exposure is known, whereas repeat-dose toxicity studies precede FIH.
B. Because S7A studies are run as non-GLP pharmacology studies and therefore cannot be combined with GLP toxicity studies.
C. Functional effects can arise without tissue change; toxicity studies cannot replace the core battery, though they can host it.
D. Because histopathology is less sensitive than telemetry across the endpoints that a core battery measures.

**정답:** C

**해설**
- C: 독성시험은 **구조**, safety pharmacology는 **기능**이다. 기능 이상은 조직 변화 없이 생기고 보통 **단회 투여 후 급성**이다. 그래서 대체는 안 되고, 설계가 맞으면 **통합**은 가능하다.
- A: core battery는 **첫 사람 투여 전**에 끝낸다.
- B: core battery는 **GLP**로 수행한다.
- D: 민감도 일반론이 아니라 측정 대상(기능 vs 구조)이 다르다는 점이 논거다.

---

### Q45 [A][Domain I] — integrating the core battery into a toxicity study
A sponsor proposes to collect ECG, blood pressure and respiratory endpoints within its GLP repeat-dose dog toxicity study instead of running a separate cardiovascular study. Is this consistent with ICH S7A?

A. Yes — and the integrated endpoints also fall outside the IND GLP statement for that study.
B. No — S7A requires a stand-alone cardiovascular study because telemetry cannot run within repeat dosing.
C. Yes — core-battery endpoints may be integrated into a toxicity study designed for those endpoints.
D. No — functional endpoints belong in non-GLP pharmacology studies, not in a GLP toxicity study.

**정답:** C

**해설**
- C: 설계가 맞으면 core battery를 **독성시험에 통합**할 수 있다. 통합과 대체는 다르다 — 기능 종점 자체는 평가되어야 한다.
- A: IND의 GLP 진술 요건(312.23(a)(8)(iii))은 그대로다.
- B: 설계가 맞으면 통합을 허용한다. 별도 시험이 필수인 구조가 아니다.
- D: core battery는 GLP로 수행한다.

---

### Q46 [R][Domain I] — supplemental systems
Which organ systems are addressed by ICH S7A supplemental safety pharmacology studies rather than the core battery?

A. Cardiovascular, central nervous and respiratory.
B. Reproductive, endocrine and musculoskeletal systems.
C. Hepatic, haematopoietic and immune systems.
D. Renal, gastrointestinal and autonomic nervous systems.

**정답:** D

**해설**
- D: **supplemental** = 신장·소화기·자율신경 등. follow-up(신호 추적)과 함께 임상 후속 단계에서 할 수 있다.
- A: 이것이 **core battery** 3계다.
- B·C: 교재의 supplemental 목록(신장·소화기·자율신경 등)에 없는 조합이다.

---

### Q47 [A][Domain IV] — timing of the core battery
A development plan schedules the S7A core battery to run in parallel with the Phase 1 SAD study and the renal and GI supplemental studies before Phase 2. Which element is wrong?

A. The core battery must precede FIH; supplemental studies may follow during clinical development.
B. The core battery may wait until Phase 2, but supplemental studies must precede Phase 1.
C. The supplemental studies must also be complete before Phase 1, together with the core battery.
D. Nothing — S7A lets the core battery run alongside SAD cohorts if dosing starts at sub-therapeutic levels.

**정답:** A

**해설**
- A: core battery는 **첫 사람 투여 전** 완료다. supplemental·follow-up은 임상 후속 단계에서 가능하다.
- B: 순서가 뒤바뀌었다.
- C: supplemental은 FIH 전 요건이 아니다.
- D: core battery 시점이 틀렸다. 저용량 시작은 FIH 전 완료 요건의 예외가 아니다.

---

### Q48 [A][Domain III] — contents of the topical justification
A topical cream programme wants to omit CNS and respiratory core-battery studies. What must the S7A-based justification document demonstrate?

A. That systemic exposure is negligible on PK data, and that damaged skin or large-area use is addressed.
B. That the product is a topical formulation, which by itself establishes low systemic exposure under S7A.
C. That the sponsor has filed a formal S7A waiver with FDA before submitting the IND.
D. That the cardiovascular study was positive, so the risk is already characterised and other systems need not be tested.

**정답:** A

**해설**
- A: S7A는 전신 노출이 매우 낮은 국소 제품의 평가 축소·생략을 **정당화**할 수 있게 한다. 정당화 문서는 **"negligible"을 PK 데이터로** 보이고, **손상 피부·넓은 면적** 같은 조건 변화를 다뤄야 한다.
- B: 제형만으로 면제되지 않는다.
- C: 공식 waiver 절차가 아니라 과학적 정당화 문서가 핵심이다.
- D: 양성 신호는 생략 근거가 아니다. 오히려 follow-up 대상이다.

---

### Q49 [A][Domain II] — non-GLP core battery in the IND
A sponsor's cardiovascular telemetry study (S7A core battery) was run in a non-GLP pharmacology laboratory. How does this affect the IND?

A. The study is acceptable as is, because S7A studies are exempt from GLP and need not be declared.
B. Nothing needs stating, because safety pharmacology is outside the scope of 312.23(a)(8)(iii).
C. The study cannot be referenced in the IND, because S7A requires the core battery to be GLP before first human dosing.
D. The IND must state the reason for noncompliance under 312.23(a)(8)(iii); FDA judges acceptability.

**정답:** D

**해설**
- D: core battery는 **GLP** 기준이다. 비GLP라도 IND에 넣을 수 있으나 **312.23(a)(8)(iii)** 미준수 사유를 써야 하고, 수용 여부는 FDA 판단이다.
- A: S7A는 core battery를 GLP로 수행하라고 한다.
- B: 각 비임상 시험이 진술 대상이다.
- C: 금지 규정은 없다. S7A가 GLP를 기대해도 비GLP 시험은 사유 진술로 IND에 들어간다.

---

### Q50 [R][Domain I] — S7B in vivo QT assay
How is the ICH S7B in vivo QT assay typically conducted?

A. In anaesthetised rodents with ECG recorded during a 28-day toxicity study.
B. In healthy human volunteers with intensive ECG monitoring.
C. In conscious non-rodents using telemetry.
D. In vitro using cardiomyocytes expressing hERG.

**정답:** C

**해설**
- C: in vivo QT assay는 보통 **의식 있는 비설치류 텔레메트리**다.
- A: 설치류·마취 조건은 교재의 설명과 다르다.
- B: 사람 대상 QT 평가는 **E14**(임상)다.
- D: hERG는 in vitro 쪽 구성 요소다. in vivo assay와 구분한다.

---

### Q51 [A][Domain I] — positive hERG signal
A compound inhibits hERG (IKr) in vitro at concentrations near the projected clinical exposure. Under ICH S7B, what follows?

A. A thorough QT study can be waived, since the hERG result is available before Phase 1.
B. Combine both results into an integrated risk assessment; a positive signal triggers follow-up studies.
C. The in vivo QT assay may be skipped, because a positive in vitro result already decides the integrated assessment.
D. The programme must stop, because a hERG-positive compound cannot enter the clinic under S7B.

**정답:** B

**해설**
- B: S7B는 **hERG + in vivo QT**를 합쳐 **통합 위험 평가**를 하고, **양성이면 follow-up**이다.
- A: 양성 신호는 waiver와 반대 방향이다. TQT 대안 경로는 "double negative"에서 논의된다.
- C: 두 구성 요소를 함께 본다.
- D: 중단 규정은 없다. 위험을 평가하고 추적한다.

---

### Q52 [R][Domain I] — S7A, S7B, E14
Which guideline covers the clinical evaluation of QT prolongation, traditionally by a thorough QT (TQT) study?

A. ICH S7B.
B. ICH S7A.
C. ICH M3(R2).
D. ICH E14.

**정답:** D

**해설**
- D: **E14** = 임상 QT 연장 평가, 전통적으로 **TQT**.
- A: S7B = 비임상 QT 위험(hERG + in vivo QT).
- B: S7A = safety pharmacology core battery(CV·CNS·호흡).
- C: M3(R2) = 비임상 시험의 시기·기간·범위.

---

### Q53 [R][Domain I] — the E14/S7B Q&A
When did the ICH E14/S7B Questions and Answers reach Step 4, and what is its central position on nonclinical data?

A. Step 4 February 2022; a double negative is supplementary evidence, with concentration-QTc as the primary analysis.
B. Step 4 February 2022; a nonclinical double negative waives the clinical QT assessment when exposure margins are met.
C. Step 4 2009; it harmonised the timing of nonclinical QT studies relative to clinical development.
D. Step 4 February 2022; it keeps a dedicated TQT study as a requirement in each development programme.

**정답:** A

**해설**
- A: **Step 4 2022-02**. double negative = **보조 증거(supplementary evidence)**, **농도-QTc 모델링이 1차 분석**, 조건이 맞으면 TQT 대안 경로(Q&A 5.1/6.1).
- B: 비임상 음성만으로 임상 QT 평가가 면제되지 않는다.
- C: 2009는 M3(R2)다.
- D: Q&A는 TQT 대안 경로를 열었다. 모든 프로그램에 TQT를 요구하지 않는다.

---

### Q54 [A][Domain IV] — "automatic waiver" claim
A clinical pharmacologist writes in the development plan: "Clean hERG and negative dog telemetry mean the TQT study is waived." Correct the statement.

A. The statement is wrong because the Q&A still requires a TQT study, with nonclinical data used to set its doses.
B. The double negative is supplementary evidence; clinical concentration-QTc in Phase 1 is still required.
C. The statement is wrong because hERG results are irrelevant to the clinical plan once dog telemetry is negative.
D. The statement is correct — the 2022 Q&A waives the TQT study once a double negative is documented.

**정답:** B

**해설**
- B: "**automatic waiver**"는 없다. double negative는 **보조 증거**다. 1차는 충분한 노출 범위(고노출 포함)의 **임상 농도-QTc**이고, 그래서 Phase 1 SAD/MAD에 **고품질 ECG + PK 샘플링**을 넣는다.
- A: 조건이 맞으면 TQT 대안 경로(Q&A 5.1/6.1)가 있다.
- C: hERG 음성은 농도-QTc 분석의 신뢰도를 올리는 보조 증거다.
- D: 자동 면제가 아니다. double negative는 보조 증거다.

---

### Q55 [A][Domain IV] — designing Phase 1 for the alternative pathway
Your compound has a nonclinical double negative. What should the Phase 1 design include so that the E14/S7B Q&A alternative to a TQT study remains available?

A. A repeat of the dog telemetry study at higher doses, to extend the margin over the clinical exposure.
B. ECG collection can be dropped, because the nonclinical double negative already settles the question.
C. High-quality ECG and PK sampling in SAD/MAD, covering high clinical exposure, to support concentration-QTc.
D. A separate thorough QT study run in parallel with the SAD cohorts, so that concentration-QTc data are available early.

**정답:** C

**해설**
- C: 전략은 **Phase 1 SAD/MAD에 고품질 ECG + PK 샘플링**을 설계해 넣는 것이다. 농도-QTc가 **충분한 노출 범위(고노출 포함)** 에서 수행돼야 대안 경로가 열린다.
- A: 비임상 반복은 임상 농도-QTc를 대신하지 못한다.
- B: 비임상은 보조 증거다. 임상 데이터가 1차다.
- D: 대안 경로의 목적은 TQT 전용 시험을 피하는 것이다.

---

### Q56 [An][Domain IV] — mapping the cardiac safety package
Match each element of an integrated cardiac safety package to its guideline: (1) hERG assay and conscious dog telemetry; (2) concentration-QTc modelling in Phase 1 and the TQT alternative; (3) GLP cardiovascular core battery before FIH.

A. (1) E14; (2) S7B; (3) M3(R2).
B. (1) S7A; (2) S7B and the 2022 E14/S7B Q&A; (3) E14.
C. (1) S7B; (2) S7A and the 2022 Q&A; (3) E14.
D. (1) S7B; (2) E14 with the 2022 Q&A; (3) S7A.

**정답:** D

**해설**
- D: **S7B** = hERG + in vivo QT(비임상). **E14**(+ 2022 Q&A) = 임상 QT, 농도-QTc 1차 분석, TQT 대안. **S7A** = core battery(CV·CNS·호흡), GLP, FIH 전.
- A·B·C: 비임상 QT(S7B)·임상 QT(E14)·core battery(S7A)의 자리가 뒤섞였다. M3(R2)는 시기·기간·범위 가이드라인이다.

---

### Q57 [R][Domain I] — purpose of M3(R2)
What is the primary purpose of ICH M3(R2), and which regions' requirements did it harmonise?

A. To harmonise the timing, duration and scope of nonclinical studies; unified US, EU and Japan in 2009.
B. To set the clinical QT assessment standard; harmonised across ICH regions.
C. To define GLP requirements for nonclinical studies; harmonised across the OECD member countries under MAD.
D. To define the safety pharmacology core battery; harmonised between US and EU regulators in 2009.

**정답:** A

**해설**
- A: **M3(R2)** = 임상 개발 단계 대비 비임상 안전성 시험의 **시기·기간·범위** 조화. **2009**, 미국·EU·일본 통합. 탐색 임상 접근(microdose 등)도 담는다.
- B: 임상 QT는 E14다.
- C: GLP는 21 CFR 58·OECD GLP 원칙이다. MAD는 데이터 수용 체계다.
- D: core battery는 S7A다. M3(R2)는 미국·EU·일본을 통합했다.

---

### Q58 [R][Domain I] — microdose criteria
Which set of criteria defines the ICH M3(R2) exploratory clinical trial Approach 1 (microdose)?

A. Any dose below the pharmacologically active dose, supported by in vitro data instead of a toxicity study.
B. Total dose ≤1 mg, supported by 14-day repeat-dose toxicity in two species.
C. Total dose ≤100 µg; ≤1/100 of the NOAEL-based dose and of the pharmacologically active dose.
D. Total dose ≤100 mg, and ≤1/10 of the NOAEL-based dose and of the pharmacologically active dose.

**정답:** C

**해설**
- C: 접근 1(microdose) = 총 투여량 **≤100 µg**, **NOAEL 용량의 1/100 이하**, **약리 활성 용량의 1/100 이하**.
- A: 비임상 독성시험 지지 없이 가는 접근은 없다. 한 종 extended single-dose 독성시험이 필요하다.
- B: 수치가 틀렸고, 지지 시험은 한 종 extended single-dose 독성시험이다.
- D: 단위(mg)와 비율(1/10)이 틀렸다.

---

### Q59 [A][Domain II] — dose above the microdose ceiling
A sponsor proposes a human PET study with a total administered dose of 150 µg and asks to proceed under M3(R2) Approach 1 with a single-species extended single-dose toxicity study. Assess.

A. Not acceptable because PET imaging studies fall outside the M3(R2) exploratory approaches.
B. Acceptable — under Approach 1 the 1/100-of-NOAEL criterion overrides the total-dose limit when it is met.
C. Not acceptable as Approach 1 — 150 µg exceeds the 100 µg total-dose ceiling, whatever the NOAEL ratio.
D. Acceptable if the study is filed as a standard IND with the single-dose study as support.

**정답:** C

**해설**
- C: 접근 1은 **총 ≤100 µg** 천장이 있다. 150 µg은 넘는다. 세 조건(≤100 µg, 1/100 NOAEL, 1/100 PAD)을 모두 충족해야 한다.
- A: PET microdose는 접근 1의 대표 사례다.
- B: 총 100 µg 절대 천장이 있다. 1/100 NOAEL 조건이 천장을 대신하지 않는다.
- D: 표준 IND로 내면 접근 1의 축소된 비임상 요건을 쓰지 못한다.

---

### Q60 [A][Domain II] — nonclinical package and US filing for a microdose
For a qualifying M3(R2) Approach 1 microdose study, what nonclinical support is sufficient and how is it filed in the US?

A. One-species extended single-dose toxicity; an exploratory IND under FDA's 2006 guidance.
B. A full S7A core battery and S7B package; filed as a BLA for the imaging agent.
C. 28-day repeat-dose toxicity in a rodent and a non-rodent; filed as a standard IND under 312.23.
D. Nonclinical studies can be deferred; the study is filed as a pre-IND meeting request.

**정답:** A

**해설**
- A: 비임상은 **한 종 extended single-dose 독성시험**으로 지지 가능. 미국은 **exploratory IND(2006 guidance)** 다.
- B: BLA는 허가 신청이다.
- C: 표준 IND 요건이다. 탐색 임상 접근은 이를 줄여 준다.
- D: 비임상 지지 없이 가는 접근은 없다. pre-IND 미팅은 신청 경로가 아니다.

---

### Q61 [A][Domain III] — safety pharmacology for an EV product
An academic group plans an IND for an MSC-derived extracellular vesicle (EV) product and asks whether the ICH S7A core battery applies as written. Advise.

A. Yes, but S7B's hERG assay is the required element, as for small molecules.
B. Case-by-case under FDA's 2013 CGT guidance, with functional endpoints in the toxicity studies.
C. Yes — S7A applies to EV products as written; run the three stand-alone core-battery studies before FIH.
D. No — cell-derived products are exempt from functional safety assessment under the 2013 CGT guidance.

**정답:** B

**해설**
- B: S7A는 **소분자·단백질 전제**다. EV 같은 세포 유래 제품은 **case-by-case**로 가고 기준점은 **FDA 2013 CGT 비임상 가이던스**다. "기능 평가" 질문은 남으므로 **독성시험 안에서 기능 종점을 통합**하고 **INTERACT**에서 설계를 합의한다.
- A: hERG는 S7B 소분자 틀의 구성 요소다. EV 제품의 답이 아니다.
- C: 그대로 적용하는 전제가 맞지 않는다.
- D: 면제가 아니다. 기능 평가 질문은 남고, 2013 가이던스는 case-by-case 기준점이다.

---

### Q62 [An][Domain III] — why S7A fits EV products poorly
Why is the ICH S7A framework difficult to apply directly to an MSC-EV product, and what does this imply for the nonclinical plan?

A. Because the 2022 E14/S7B Q&A excludes biologics and cell-derived products from S7A-type assessment.
B. Because EV products are GLP-exempt, so a nonclinical plan for functional safety is not needed.
C. Because EV products cannot cause functional effects such as infusion reactions or changes in haemodynamics.
D. Species relevance and exposure are hard to establish; follow the 2013 CGT guidance case-by-case.

**정답:** D

**해설**
- D: 어려운 이유는 **종 관련성·노출 측정**이다. 소분자·단백질 전제가 맞지 않으므로 case-by-case로 가고, 기준점은 **2013 CGT 가이던스**, 설계는 core battery 복사가 아니라 독성시험 안의 **기능 종점 통합**이다.
- A: E14/S7B Q&A는 QT 평가 문서다. 이 논점과 무관하다.
- B: GLP 적용 여부와 S7A 적합성은 다른 문제다. 비임상 계획은 필요하다.
- C: 주입 반응·혈역학·호흡은 EV 제품에서도 보는 기능 종점이다.

---

### Q63 [A][Domain I] — pick the wrong statement about the four pillars
Which statement about 21 CFR Part 58 is INCORRECT?

A. 58.35 — the study director of the study may act as its QAU when QA staff are unavailable.
B. 58.185 — the final report is signed and dated by the study director and includes the QA statement.
C. 58.33 — one study director per study serves as the single point of study control.
D. 58.120 — the study is conducted under an approved written protocol, with amendments signed and dated by the study director.

**정답:** A

**해설**
- A: **58.35** QAU는 해당 연구의 지휘·수행 인력과 **완전히 분리·독립**이다. SD가 자기 연구를 QA하면 독립성이 없다. 인력 부족은 예외 사유가 아니다.
- B·C·D: 각 조문의 요건을 바르게 적은 진술이다.

---

### Q64 [A][Domain V] — pick the wrong statement about retention
Which statement about 21 CFR 58.195 is INCORRECT?

A. For a submitted study, records are retained at least 2 years after approval of the application or at least 5 years after submission of the results to FDA, whichever is shorter.
B. When a facility closes, the retention obligation ends and records may be destroyed after transfer.
C. For a study not submitted to FDA, records are retained at least 2 years after completion, termination or discontinuation.
D. When a facility closes, records and specimens are transferred to the sponsor's archives and FDA is notified in writing.

**정답:** B

**해설**
- B: 폐업 시 바뀌는 것은 **보관 장소**다. 보관 **기간** 의무는 그대로 유지된다. 58.195(g)는 이관 + FDA 서면 통보를 요구한다.
- A·C·D: 58.195의 요건을 바르게 적은 진술이다.

---

### Q65 [An][Domain I] — GLP compliance versus scientific adequacy
A GLP-compliant 28-day rat study used a top dose that produced no exposure margin over the intended clinical dose. FDA finds the study scientifically inadequate. Does GLP compliance protect the sponsor's position?

A. Yes, provided the final report carries the QA statement and the study director's signature.
B. Yes — a GLP-compliant study must be accepted, because Part 58 compliance covers design and dose selection.
C. No — GLP assures reliable conduct and records, not scientific adequacy of design or dose selection.
D. No — dose selection errors make the study non-GLP retroactively, so it must be declared non-GLP in the IND.

**정답:** C

**해설**
- C: **GLP ≠ 과학적 타당성**. GLP는 운영·기록 체계이고 설계의 과학적 질은 보증하지 않는다. 신뢰할 수 있는 데이터라도 설계가 부적절하면 불충분하다고 판단될 수 있다.
- A·B: GLP 준수나 QA 진술은 데이터 신뢰성에 관한 것이다. 설계 적절성과 별개다.
- D: 설계 결함이 GLP 지위를 바꾸지 않는다. 두 축은 독립적이다.

---

### Q66 [A][Domain II] — GLP statement wording for a Korean CRO study
Your IND includes a GLP 4-week rat study run at a GLP-certified Korean CRO under Korean GLP monitoring. How should 312.23(a)(8)(iii) be addressed for this study?

A. Omit the statement — foreign studies are outside 312.23(a)(8)(iii), which covers studies run in US facilities.
B. Attach an OECD GLP certificate for the facility in place of the written statement.
C. State a reason for noncompliance, because GLP-compliant status under 312.23 is limited to Part 58 studies run in the US.
D. State that the study was conducted in compliance with GLP, identifying the GLP-certified facility.

**정답:** D

**해설**
- D: 한국은 OECD MAD 전면 참여국이고, GLP 인증 시설에서 수행된 시험은 **GLP 준수 진술** 대상이다. 미준수 사유 진술은 필요 없다. 미준수 사유는 비GLP 시험에 쓰는 것이다.
- A: 각 비임상 시험이 진술 대상이다. 수행 장소는 기준이 아니다.
- B: 진술을 대체하는 서류는 없다. OECD는 인증서를 발급하는 기관이 아니라 회원국 감시당국이 사찰한다.
- C: "외국이라 안 된다"는 틀렸다. FDA는 외국 GLP 데이터를 받는다.

---

### Q67 [A][Domain IV] — selecting a CRO for a US IND toxicity programme
A sponsor must choose between (i) a GLP-certified Korean CRO under Korean GLP monitoring, and (ii) a US academic laboratory with excellent science but no GLP programme, for a pivotal 4-week rat study supporting a US IND. Which is the better regulatory choice, and why?

A. (ii) — scientific quality is what GLP measures, and the academic lab's science is stronger.
B. (i) — it is GLP-compliant and accepted under MAD; (ii) would need a reason-for-noncompliance statement.
C. (ii) — the study will be in the US, so FDA will accept it without a GLP statement; statements apply to foreign studies.
D. Either — GLP status is reported at NDA stage rather than in the IND.

**정답:** B

**해설**
- B: pivotal 안전성 시험은 **GLP 안**이다. (i)은 MAD + GLP 인증 시설 + 준수 진술로 경로가 완성된다. (ii)는 미준수 사유를 써야 하고, 비GLP pivotal 시험의 수용 여부는 FDA 판단이다.
- A: GLP는 과학적 질이 아니라 데이터 신뢰성 체계다.
- C: 수행 장소는 기준이 아니다. 진술은 각 시험에 필요하다.
- D: IND 단계에서 진술한다(312.23(a)(8)(iii)).

---

### Q68 [An][Domain IV] — if a GLP Quality System final rule is published
Suppose, at some future date, FDA publishes a GLP Quality System final rule. What should a sponsor running multi-site GLP studies through CROs do, and what caution applies?

A. Stop ongoing studies at once and have them re-approved under the new quality-system rule.
B. Apply OECD GLP principles instead, since the final rule would make Part 58 redundant for US submissions.
C. Confirm the effective date, then review CRO contracts for multi-site and sponsor responsibilities.
D. Nothing yet — a final rule would apply to studies started after the sponsor's next NDA submission.

**정답:** C

**해설**
- C: 두 단계 — **시행일 전이면 구 규정**이 적용되고, 시행되면 **multi-site·sponsor 책임 구조**가 바뀌므로 **CRO 계약서를 다시 본다**. NPRM(2016-08-24, 81 FR 58342)이 multi-site study·sponsor 책임 명시를 목표로 했다. 2026-08 Agenda는 새 NPRM을 계획 중이다.
- A: 중단 요건은 없다.
- B: OECD 원칙은 미국 법이 아니다. Part 58 개정이 미국 요건이다.
- D: 적용 시점은 시행일로 정해진다. 신청 제출 시점이 아니다.
