# 문제은행 — Ch.7+8 국소 내성 · 유전독성(M7 포함)

> **근거:** `textbook/Ch07-08.md` + `cards/Ch07-08.md` 검증 메모(EMA 국소내성 가이드라인 Rev. 1 EMA/CHMP/SWP/2145/2000, ICH M3(R2) §8 국소 내성·§9 유전독성, ICH S2(R1) Option 1·2, ICH M7(R2) TTC·LTL AI·5 class·(Q)SAR·cohort of concern·통제 옵션 1~4·적용 범위, M4S CTD 위치, 21 CFR 312.23(a)(8)). 새 숫자 없음. 계산 문항은 M7(R2) AI 상수로만 계산했다. FDA 2024 Ames 양성 후속 draft guidance의 최종화 여부(미확인)는 정답 키로 쓰지 않았다.
> **형식:** 영문 시나리오 → 영문 선지 A~D → 정답 → 한국어 해설. 태그 `[R]/[A]/[An]` + Domain.
> **작성:** 2026-11-26. 64문항.

---

### Q01 [R][Domain I] — M3(R2) local tolerance principle
How does ICH M3(R2) expect local tolerance to be evaluated for a new drug?

A. As part of the general toxicity studies, using the intended clinical route of administration.
B. In a dedicated local tolerance study in rabbits, completed before any repeated-dose toxicity work starts.
C. In in vitro irritation assays, since ICH has stopped accepting animal local tolerance data.
D. In a stand-alone study in the most sensitive species, using an exaggerated dose of the active substance.

**정답:** A

**해설**
- A: M3(R2) §8은 국소 내성을 **일반 독성시험의 일부로, 임상 투여 경로를 써서** 평가하라고 한다. 별도 stand-alone 시험은 일반적으로 권장하지 않는다.
- B: 별도 토끼 시험을 먼저 하라는 규정은 없다. 통합 평가가 기본이다.
- C: in vitro 개정은 EMA 3Rs Working Party의 권고 상태이고, M3(R2)의 원칙은 일반 독성시험 통합이다.
- D: stand-alone 시험은 기본이 아니고, 평가는 임상 처방에 가깝게 한다.

---

### Q02 [A][Domain I] — local tolerance: pick the incorrect statement
A regulatory associate drafts a briefing note on local tolerance. Which statement in the draft is INCORRECT?

A. The test article should resemble the clinical formulation, including excipients, as closely as possible.
B. Additional testing may be considered where a route-specific concern exists, such as ocular or mucosal use.
C. A stand-alone local tolerance study is the expected default before first-in-human dosing.
D. Contact-site findings can be captured within the repeated-dose studies when the clinical route is used.

**정답:** C

**해설**
- C: 틀린 진술이다. M3(R2) §8은 stand-alone 국소 내성 시험을 **일반적으로 권장하지 않는다**. 별도 시험은 정당화가 필요한 예외다.
- A: 부형제를 포함한 임상 처방에 가깝게 평가하는 것이 좋다.
- B: 혈관 주위 누출·안구·점막 같은 경로 특이 우려가 있을 때 추가 시험을 고려한다.
- D: 임상 경로로 일반 독성시험에 포함해 접촉 부위를 보는 것이 원칙이다.

---

### Q03 [R][Domain I] — EMA Rev. 1 scope
What is the scope of the EMA guideline on non-clinical local tolerance testing (EMA/CHMP/SWP/2145/2000 Rev. 1)?

A. Local effects of the active substance after normal clinical use, with excipients addressed in the quality dossier instead.
B. Contact-site effects after normal clinical use and after inadvertent administration, for active substance and excipients.
C. Skin and eye irritation of industrial chemicals, adapted to medicinal products through the OECD test guidelines.
D. Systemic toxicity after inadvertent intra-arterial injection, with contact-site effects left to the clinical trial protocol.

**정답:** B

**해설**
- B: Rev. 1은 **정상 임상 사용 후 접촉 부위**와 **비의도 투여**(paravenous·intra-arterial 누출 등) 상황에서 **활성성분과 부형제 모두**의 국소 영향을 다룬다.
- A: 부형제도 평가 대상이다. 품질 자료로 넘기지 않는다.
- C: 의약품 국소 내성 지침이다. OECD in vitro 방법은 3Rs Working Party 개정 권고의 방향일 뿐이다.
- D: 대상은 국소 영향이다. 비의도 투여도 국소 영향 평가 상황으로 포함된다.

---

### Q04 [R][Domain I] — EMA Rev. 1 replaced document
Which earlier document did the EMA local tolerance guideline Rev. 1 (EMA/CHMP/SWP/2145/2000) replace?

A. ICH M3(R2), whose local tolerance section was withdrawn in the EU.
B. Directive 2010/63/EU, which previously set local tolerance test methods.
C. ICH S2(R1), which formerly covered injection-site irritation testing.
D. CPMP/SWP/2145/00, the earlier CPMP local tolerance note for guidance.

**정답:** D

**해설**
- D: Rev. 1은 구 **CPMP/SWP/2145/00**을 대체했다.
- A: M3(R2) §8은 국소 내성을 일반 독성시험에 통합하는 원칙으로 유효하다. 철회되지 않았다.
- B: Dir 2010/63/EU는 동물실험 지침이다. 3Rs 흐름의 배경일 뿐 국소 내성 시험법 문서가 아니다.
- C: S2(R1)은 유전독성 표준 battery 지침이다.

---

### Q05 [A][Domain III] — paravenous study proposal
For an IV oncology biologic, the toxicology lead proposes a stand-alone rabbit paravenous irritation study. What should the regulatory lead advise first?

A. Check whether injection-site observation and histopathology in the repeated-dose studies already cover the concern.
B. Replace the rabbit study with an intra-arterial study in dogs, which EMA Rev. 1 names as the preferred model.
C. Run the rabbit study before first-in-human dosing, because EMA Rev. 1 requires it for each IV product.
D. Drop local tolerance evaluation entirely, because biologics fall outside the scope of the EMA local tolerance guideline.

**정답:** A

**해설**
- A: Rev. 1은 비의도 투여(paravenous 누출)를 다루지만, 먼저 **반복투여 독성시험의 주사 부위 관찰·조직병리**로 커버되는지 본다. 핵심은 별도 시험의 **필요성 정당화**다.
- B: 개 intra-arterial 시험을 선호 모델로 지정한 근거는 없다.
- C: 모든 IV 제품에 별도 토끼 시험을 요구하지 않는다.
- D: 국소 내성 평가 자체를 생략하는 근거는 없다. 일반 독성시험 안에서 평가한다.

---

### Q06 [A][Domain III] — when added testing is justified
Following the previous discussion, when would additional paravenous evaluation be justified, and how should it begin?

A. When the product is given intravenously at any dose; start with an in vivo rabbit study, since in vitro data carry little weight for injectables.
B. When extravasation risk is real and the formulation is irritant (pH, osmolality, solvent); start with in vitro haemolysis and cytotoxicity data.
C. When the repeated-dose studies used the clinical route; start with a second species, because one species cannot show contact-site effects.
D. When the clinical formulation contains excipients; start with excipient-free drug substance testing to isolate the active substance effect.

**정답:** B

**해설**
- B: 누출 위험이 실제로 높고 제형이 **자극성(pH·osmolality·용매)** 일 때 추가 평가를 정당화하고, **in vitro(용혈·세포독성)** 데이터부터 쌓는다.
- A: IV 투여만으로 추가 시험이 정당화되지 않고, in vitro 데이터를 먼저 쌓는 것이 교과서 순서다.
- C: 임상 경로를 쓴 반복투여 시험은 오히려 접촉 부위를 커버하는 근거다.
- D: 평가는 부형제를 포함한 임상 처방에 가깝게 한다. 부형제를 뺀 시험은 방향이 반대다.

---

### Q07 [R][Domain I] — 3Rs Working Party direction
In which direction did the EMA 3Rs Working Party recommend revising the local tolerance guideline?

A. Toward stand-alone studies replacing integrated contact-site evaluation.
B. Toward non-human primate models for ocular and mucosal products.
C. Toward OECD-validated in vitro models for skin and eye irritation.
D. Toward a mandatory second species for each local tolerance study.

**정답:** C

**해설**
- C: 3Rs WP는 **피부·안자극을 in vitro 모델(OECD 검증 대체시험법) 우선**으로 개정하라고 권고했다. Dir 2010/63/EU·3Rs 흐름이다.
- A: 통합 평가가 원칙이고, 권고는 동물시험을 in vitro로 대체하는 방향이다.
- B·D: 동물 사용을 늘리는 방향은 3Rs와 반대다.

---

### Q08 [An][Domain IV] — status of the revision on the exam date
A colleague says the EU local tolerance guideline "has already been replaced by an in vitro-only guideline." How should this be evaluated for exam purposes?

A. Correct; the 3Rs revision took effect and animal local tolerance data are now refused in the EU.
B. Correct for skin products; parenteral products still follow Rev. 1 until a later revision.
C. Incorrect; Rev. 1 was withdrawn, and M3(R2) §8 is now the sole EU reference on the topic.
D. Incorrect; Rev. 1 remains in effect, and the in vitro revision is at the recommendation stage.

**정답:** D

**해설**
- D: 시험 기준일에는 **Rev. 1이 유효**하고, 3Rs Working Party의 in vitro 중심 개정은 **권고 상태**다.
- A: 개정이 시행되었다는 근거는 없다.
- B: 경로별로 일부만 개정되었다는 근거는 없다.
- C: Rev. 1은 철회되지 않았다.

---

### Q09 [R][Domain II] — CTD location of reports
Where in the CTD are local tolerance study reports placed?

A. Module 2.4 Nonclinical Overview.
B. Module 2.6.7 Toxicology Tabulated Summary.
C. Module 2.6.6 Toxicology Written Summary.
D. Module 4.2.3.6 Local Tolerance.

**정답:** D

**해설**
- D: 보고서는 **Module 4.2.3.6 Local Tolerance**에 들어간다(M4S).
- A·B·C: 2.6.7(tabulated)·2.4(Nonclinical Overview)·2.6.6(written)은 **요약** 위치다. 보고서 본문은 Module 4.2.3.6에 둔다.

---

### Q10 [A][Domain II] — CTD summaries and regional use
A sponsor filing in the US, EU and Japan asks where the local tolerance data are summarised and whether placement differs by region. Which answer is correct?

A. In 2.6.6 and 2.6.7, with Japan moving the tabulated summary into a regional Module 1 section for local review.
B. In 2.6.6 (written), 2.6.7 (tabulated) and 2.4 Nonclinical Overview, with the same placement in all three regions.
C. In 2.6.7 alone, with each region setting its own section numbering for the toxicology summaries.
D. In 2.4 alone, with the EU asking for a separate local tolerance annex placed next to the nonclinical overview.

**정답:** B

**해설**
- B: 요약은 **2.6.6(written)·2.6.7(tabulated)·2.4 Nonclinical Overview**에 들어가고, M4S라 **미국·EU·일본 공통**이다.
- A: 2.4도 요약 위치이고, 일본만 Module 1로 옮기는 규정은 없다.
- C: 2.6.6·2.4가 빠졌고, 지역별 번호 체계도 M4S 공통 구조와 맞지 않는다.
- D: 2.6.6·2.6.7이 빠졌고, EU 별도 부속서는 근거가 없다.

---

### Q11 [A][Domain I] — which test article
A team plans the injection-site evaluation within its 4-week toxicity study. Which test article choice best matches the local tolerance principle?

A. The active substance dissolved in saline, so that findings can be attributed to the drug alone.
B. The formulation closest to the clinical one, including its excipients, given by the clinical route.
C. The vehicle alone by the clinical route, with the active substance given orally to raise exposure.
D. A concentrated research formulation, since local tolerance is judged on exaggerated local concentrations.

**정답:** B

**해설**
- B: 국소 내성은 **임상 처방(부형제 포함)에 가깝게, 임상 경로로** 평가하는 것이 좋다. EMA Rev. 1도 활성성분과 부형제 모두를 평가 대상으로 둔다.
- A: 부형제를 빼면 임상 처방의 국소 영향을 볼 수 없다.
- C: 접촉 부위 평가는 임상 경로로 투여한 시험물질로 한다.
- D: 과장 농도 원칙은 교과서 근거가 없다. 기준은 임상 처방이다.

---

### Q12 [An][Domain IV] — when route-specific testing is considered
Four development programmes ask whether they need additional local tolerance work beyond the general toxicity studies. Which programme has the strongest basis to consider it?

A. An IV product whose repeated-dose studies used the clinical route and formulation.
B. An ophthalmic product with an ocular route-specific concern not covered by systemic studies.
C. An oral tablet whose repeated-dose studies used oral gavage of the clinical tablet formulation.
D. A subcutaneous product whose repeated-dose studies showed clean injection sites.

**정답:** B

**해설**
- B: 추가 시험은 **경로 특이 우려(혈관 주위 누출·안구·점막)** 가 있을 때 고려한다. 안구 경로 우려가 일반 독성시험으로 커버되지 않으면 근거가 가장 강하다.
- A·C: 임상 경로와 처방으로 일반 독성시험을 했으므로 접촉 부위가 이미 평가되었다.
- D: 임상 경로 시험에서 주사 부위 이상이 없다면 추가 시험 근거가 약하다.

---

### Q13 [A][Domain I] — local tolerance for an EV product
An MSC-EV product will be given intratracheally and intravenously in the clinic. How should contact-site tolerance be addressed nonclinically?

A. Within the toxicity studies, using the intratracheal and intravenous routes to examine the contact sites.
B. Through stand-alone rabbit irritation studies for each route, which M3(R2) §8 requires for biologics.
C. By deferring the question to Phase 2, since cell-derived products sit outside local tolerance guidance altogether.
D. Through a separate ICH S2(R1) battery, which covers contact-site effects for biological products.

**정답:** A

**해설**
- A: 교과서는 EV 제품에서도 **기관 내·정맥 투여 경로를 독성시험 안에 넣어** 접촉 부위를 본다고 한다. 통합 평가 원칙과 같다.
- B: M3(R2) §8은 stand-alone 시험을 일반적으로 권장하지 않는다.
- C: Phase 2로 미루는 근거는 없다.
- D: S2(R1)은 유전독성 battery이고, 세포 제품엔 소분자식으로 적용되지 않는다.

---

### Q14 [R][Domain I] — three questions of genotoxicity
Which set lists the three questions the standard genotoxicity assessment addresses?

A. Gene mutation in bacteria; carcinogenicity in rodents; reproductive toxicity in vivo.
B. Gene mutation in bacteria; chromosomal damage in vitro; chromosomal damage in vivo.
C. Chromosomal damage in vitro; DNA adducts in humans; tumour incidence in transgenic mice.
D. Gene mutation in mammalian cells; phototoxicity in vitro; chromosomal damage in dogs.

**정답:** B

**해설**
- B: 유전독성은 ① **유전자 돌연변이(박테리아, Ames)** ② **염색체 손상 in vitro** ③ **염색체 손상 in vivo**를 묻는다.
- A: 발암성·생식독성은 별도 영역이다.
- C: 사람 DNA adduct·형질전환 마우스 종양은 표준 질문이 아니다.
- D: 광독성과 개 염색체 시험은 세 질문에 없다.

---

### Q15 [R][Domain I] — S2(R1) Option 1
Which combination is ICH S2(R1) standard battery Option 1?

A. Ames test; mouse lymphoma Tk assay; in vitro micronucleus, with the in vivo work deferred to marketing.
B. Ames test; in vivo micronucleus in hematopoietic cells; a second in vivo assay such as liver comet.
C. In vitro mammalian cell assay; in vivo liver comet; transgenic rodent mutation assay in two tissues.
D. Ames test; in vitro mammalian cell chromosomal damage assay; in vivo rodent hematopoietic cell assay.

**정답:** D

**해설**
- D: Option 1은 **Ames + in vitro 포유류 세포 염색체 손상(염색체이상·MN 또는 MLA Tk) + in vivo 설치류 조혈세포 MN 또는 염색체이상**이다.
- A: in vivo 염색체 손상이 빠졌다. in vitro 두 개로 in vivo를 대신하지 않는다.
- B: Option 2의 구성이다.
- C: Ames가 빠졌고, 형질전환 설치류 시험은 Ames 양성 후속 수단이다.

---

### Q16 [R][Domain I] — S2(R1) Option 2
Which combination is ICH S2(R1) standard battery Option 2?

A. Ames test plus an in vitro mammalian cell assay, with the in vivo assay replaced by a second Ames strain set.
B. In vitro micronucleus plus in vivo micronucleus, with the Ames test omitted when the compound is cytotoxic.
C. Ames test plus in vitro and in vivo assays, as in Option 1, but run under non-GLP conditions for speed.
D. Ames test plus an in vivo assessment in two tissues, such as hematopoietic micronucleus and liver comet.

**정답:** D

**해설**
- D: Option 2는 **Ames + in vivo 두 조직**(조혈세포 MN + 두 번째 in vivo, 예: 간 comet)이다. in vitro 포유류 세포 시험이 없다.
- A: in vitro 포유류 세포 시험은 Option 1의 구성이고, in vivo를 대신하지 않는다.
- B: 두 옵션 모두 Ames가 들어간다.
- C: Option 2는 Option 1과 구성이 다르다. GLP 완화 옵션이 아니다.

---
### Q17 [A][Domain I] — what Option 2 lacks
A study director summarises the two S2(R1) options for a new hire. Which statement is INCORRECT?

A. Both options start with a bacterial gene mutation (Ames) test.
B. Option 2 evaluates two tissues in vivo, for example blood and liver.
C. Option 2 includes an in vitro mammalian cell chromosomal damage assay.
D. Option 1 includes an in vivo rodent hematopoietic cell chromosomal damage assay.

**정답:** C

**해설**
- C: 틀린 진술이다. Option 2는 in vitro 포유류 세포 시험을 빼고 **in vivo 두 조직**으로 간다.
- A: 두 옵션 모두 Ames로 시작한다.
- B: 조혈세포 MN + 간 comet 같은 두 조직 평가가 Option 2다.
- D: Option 1의 세 번째 구성이 설치류 조혈세포 MN 또는 염색체이상이다.

---

### Q18 [A][Domain I] — precipitation and cytotoxicity
A compound precipitates and is highly cytotoxic in mammalian cell culture, so in vitro chromosomal assays are uninterpretable. Which approach fits ICH S2(R1)?

A. Option 1 with the in vitro assay repeated at lower concentrations until a clean negative result is obtained.
B. Option 2: the Ames test plus in vivo assessment in two tissues, omitting the in vitro mammalian cell assay.
C. Option 1 using the mouse lymphoma Tk assay, which S2(R1) names as the remedy for precipitating compounds.
D. A waiver of genotoxicity testing, since uninterpretable assays show the compound cannot reach DNA.

**정답:** B

**해설**
- B: in vitro 포유류 세포 시험을 신뢰할 수 없을 때 **Option 2(Ames + in vivo 두 조직)** 가 S2(R1)이 명시적으로 열어둔 길이다.
- A: 음성이 나올 때까지 반복하는 접근은 근거가 없다.
- C: MLA Tk는 Option 1의 in vitro 선택지 중 하나일 뿐, 침전 화합물의 해법으로 지정되지 않았다.
- D: 해석 불가가 면제 근거가 되지 않는다.

---

### Q19 [A][Domain I] — acceptable in vitro component
Under Option 1, a CRO offers several assays for the in vitro mammalian cell component. Which offer fits the S2(R1) description?

A. A mouse lymphoma Tk assay, as an alternative to chromosomal aberration or micronucleus testing.
B. A transgenic rodent mutation assay, accepted as the in vitro component when cells are cytotoxic.
C. A rodent bone marrow micronucleus assay, which can stand in for the in vitro component.
D. A second bacterial reverse mutation assay in additional strains, replacing the mammalian cell assay.

**정답:** A

**해설**
- A: Option 1의 in vitro 포유류 세포 구성은 **염색체이상 또는 micronucleus, 또는 MLA Tk**다.
- B: 형질전환 설치류 시험은 in vivo 시험이고 Ames 양성 후속 수단이다.
- C: 골수 MN은 in vivo 구성이다.
- D: 박테리아 시험은 첫 번째 구성(Ames)이고 포유류 세포 시험을 대신하지 않는다.

---

### Q20 [A][Domain V] — integrating in vivo genotoxicity
The programme needs an in vivo micronucleus result before Phase 2 and wants to minimise animal use. A 13-week rat study is about to start. What is the best plan?

A. Build micronucleus blood or marrow sampling, and liver comet tissue if needed, into the 13-week rat study design.
B. Run a separate acute micronucleus study after the 13-week study, since integrated designs are reserved for Option 1.
C. Defer the in vivo micronucleus study until after Phase 2 starts, because M3(R2) sets its deadline at Phase 3.
D. Add a separate dog micronucleus study, because S2(R1) asks for a non-rodent species for in vivo genotoxicity.

**정답:** A

**해설**
- A: S2(R1)은 **in vivo 시험을 반복투여 독성시험에 통합**할 수 있다고 본다. 13주 랫 시험에 MN 채혈·골수 수집 시점과 간 comet 조직을 넣으면 별도 시험이 필요 없다.
- B: 통합은 Option 1에만 국한되지 않는다. 별도 시험은 동물 사용을 늘린다.
- C: M3(R2) §9는 완전 battery를 **Phase 2 시작 전**에 요구한다.
- D: in vivo 구성은 설치류 조혈세포 시험이다. 비설치류 요건은 없다.

---

### Q21 [R][Domain I] — single-dose clinical trial
Under ICH M3(R2) §9, what genotoxicity assessment is considered sufficient to support a single-dose clinical trial?

A. An in vitro chromosomal aberration study alone.
B. An in vivo micronucleus study in two tissues.
C. An assessment of gene mutation (Ames test).
D. The complete standard battery, including in vivo.

**정답:** C

**해설**
- C: 단회 투여 임상은 **유전자 돌연변이 평가(Ames)** 로 충분하다. 실무에선 in vitro 염색체 결과도 함께 넣는 경우가 많다.
- A: 단회 임상의 기준은 유전자 돌연변이 평가다.
- B: in vivo 두 조직 평가는 Option 2의 구성이고 단회 임상 요건이 아니다.
- D: 완전 battery는 Phase 2 시작 전 요건이다.

---

### Q22 [R][Domain I] — multiple-dose clinical trial
What does ICH M3(R2) §9 add to the gene mutation assessment before multiple-dose clinical trials?

A. An assessment of chromosomal damage, either in vitro or in vivo.
B. A second Ames study with metabolic activation from human liver.
C. A transgenic rodent mutation study in the target organ of toxicity.
D. A carcinogenicity bioassay, since repeated dosing raises tumour risk.

**정답:** A

**해설**
- A: 반복 투여 임상에는 **염색체 손상 평가(in vitro 또는 in vivo)** 를 추가한다.
- B: 두 번째 Ames는 시점 규칙에 없다.
- C: 형질전환 설치류 시험은 Ames 양성 후속 수단이다.
- D: 발암성 시험은 유전독성 시점 규칙의 일부가 아니다.

---

### Q23 [R][Domain I] — complete battery
By when must the complete standard genotoxicity battery be finished under ICH M3(R2) §9?

A. Before submission of the marketing application.
B. Before the first single-dose clinical trial.
C. Before the start of Phase 2 clinical trials.
D. Before the start of Phase 3 clinical trials.

**정답:** C

**해설**
- C: **완전한 표준 battery는 Phase 2 시작 전**에 완료한다.
- A·D: 너무 늦다. Phase 2 전이 기준이다.
- B: 단회 FIH는 유전자 돌연변이 평가(Ames)로 충분하다.

---

### Q24 [A][Domain V] — back-scheduling the Phase 2 start
Phase 2 is planned to start in month 12. The in vivo micronucleus endpoint sits inside a 13-week rat toxicity study. Which scheduling statement is correct?

A. The schedule needs the final report in hand by the end-of-Phase 2 meeting with FDA.
B. The micronucleus data can follow Phase 2 start if Phase 1 showed a clean clinical safety profile.
C. The 13-week study report should be closed before month 12, working back from the Phase 2 start.
D. The 13-week study can still be running at Phase 2 start, provided the in-life dosing phase has already begun.

**정답:** C

**해설**
- C: 완전 battery가 **Phase 2 시작 전** 요건이므로, 13주 시험 보고서가 Phase 2 시작 전에 닫히도록 **역산**한다.
- A: 기준은 Phase 2 시작이다. end-of-Phase 2 회의가 아니다.
- B: 임상 안전성 신호가 없다는 것은 battery 완료 요건을 대신하지 않는다.
- D: 진행 중인 시험으로는 완료 요건을 채우지 못한다.

---

### Q25 [A][Domain III] — IND content for a SAD FIH
The IND for a single-ascending-dose first-in-human trial is due in 8 weeks. What genotoxicity package and presentation should the regulatory lead request?

A. Ames results (often with in vitro chromosomal data) in 312.23(a)(8) as integrated summary, tables and GLP statement, plus an in vivo plan.
B. The complete battery including in vivo results under 312.23(a)(8), because FDA will not accept a single-dose IND without the in vivo micronucleus data.
C. A statement that genotoxicity testing will be completed before Phase 3, with the Ames report filed later as an information amendment.
D. Ames results placed in the investigator's brochure, since 312.23(a)(8) covers repeated-dose toxicity rather than genotoxicity studies.

**정답:** A

**해설**
- A: 단회 FIH엔 **Ames**가 필수이고 실무적으로 in vitro 염색체 결과도 함께 넣는다. 312.23(a)(8)에 **통합 요약 + 데이터 표 + GLP 진술**로 넣고, in vivo는 Phase 2 전 완료 계획을 적는다.
- B: 완전 battery는 Phase 2 전 요건이다. 단회 FIH엔 Ames로 충분하다.
- C: Ames는 FIH 전에 있어야 하고, 완전 battery 기준은 Phase 3가 아니라 Phase 2다.
- D: 유전독성도 312.23(a)(8) 약리·독성 정보에 들어간다.

---

### Q26 [A][Domain I] — moving from SAD to MAD
After a single-dose study supported by an Ames test, the sponsor will begin a 14-day multiple-ascending-dose study. What genotoxicity data should be added before MAD dosing?

A. The full battery including two in vivo tissues, because MAD is part of Phase 2 under M3(R2).
B. A liver comet assay alone, since repeated dosing shifts the concern to the liver.
C. An assessment of chromosomal damage, in vitro or in vivo, to support repeated dosing.
D. Nothing new, because the Ames test supports each clinical trial within Phase 1.

**정답:** C

**해설**
- C: 반복 투여 임상에는 **염색체 손상 평가(in vitro 또는 in vivo)** 를 추가한다. 그래서 실무에선 FIH 때 in vitro 염색체 결과를 함께 준비한다.
- A: 완전 battery는 Phase 2 전 요건이고, MAD는 Phase 2가 아니다.
- B: 간 comet 단독은 시점 규칙의 요건이 아니다.
- D: Ames만으로 충분한 것은 단회 투여 임상이다.

---

### Q27 [A][Domain I] — timing: pick the incorrect statement
Which statement about genotoxicity timing under ICH M3(R2) §9 is INCORRECT?

A. The complete standard battery must be finished before first-in-human dosing.
B. Chromosomal damage may be assessed either in vitro or in vivo for multiple dosing.
C. Chromosomal damage assessment is added before multiple-dose trials.
D. A gene mutation assessment is considered sufficient for single-dose trials.

**정답:** A

**해설**
- A: 틀린 진술이다. 완전 battery는 **Phase 2 시작 전**에 완료한다. FIH 전이 아니다.
- B·C: 반복 투여 임상엔 in vitro 또는 in vivo 염색체 손상 평가를 추가한다.
- D: 단회 투여 임상은 Ames로 충분하다.

---

### Q28 [A][Domain I] — consequence of a positive Ames test
A positive Ames result is reported during Phase 1 for a drug intended for a chronic, non-life-threatening condition. What is the usual regulatory consequence?

A. Further clinical development is usually blocked, given the possible DNA-reactive mutagen signal.
B. Development continues unchanged, because Ames positives in bacteria seldom matter for human risk.
C. The sponsor needs just a warning added to the investigator's brochure and the consent form.
D. Development continues if the in vitro chromosomal assay was negative, which overrides Ames.

**정답:** A

**해설**
- A: Ames 양성은 **DNA 반응성 돌연변이원** 가능성을 뜻해 보통 추가 임상 개발이 막힌다. 예외는 진행성 암·생명 위협 질환이다.
- B: 박테리아 양성을 무시할 근거는 없다.
- C: 문서 경고만으로 해결되지 않는다.
- D: in vitro 염색체 음성이 Ames 양성을 뒤집는다는 근거는 없다.

---

### Q29 [A][Domain III] — follow-up of an Ames positive
The CRO asks how to follow up the positive Ames result. Which plan matches the textbook approach?

A. Run a two-year carcinogenicity study first, because tumour data alone can resolve a bacterial mutagenicity signal.
B. Repeat the Ames test in the same strains until two negative runs are obtained, then report the majority result as final.
C. Replace the Ames result with a (Q)SAR prediction, since two complementary models outweigh experimental data in M7.
D. Investigate mechanism and activation conditions, then in vivo relevance (transgenic rodent, comet), for weight of evidence.

**정답:** D

**해설**
- D: 후속은 **기전 조사·대사 활성 조건 확인·in vivo 관련성(transgenic rodent mutation, comet)** 으로 weight-of-evidence를 만드는 것이다.
- A: 발암성 시험을 먼저 하라는 근거는 없다.
- B: 음성이 나올 때까지 반복하는 접근은 근거가 없다.
- C: (Q)SAR는 데이터가 없을 때의 분류 도구다. 실험 결과를 대체하지 않는다.

---

### Q30 [An][Domain IV] — in vitro positive, in vivo negative
An in vitro chromosomal aberration test is positive, but in vivo micronucleus and liver comet are negative with demonstrated bone-marrow exposure. What is the best regulatory strategy?

A. Proceed, arguing weight of evidence: in vivo negatives with exposure, plus mechanism, can prevail.
B. Stop development, because any in vitro positive defines the compound as a genotoxic hazard.
C. Proceed without further discussion, because S2(R1) lets in vivo results replace in vitro data by default.
D. Repeat the in vitro test with another cell line and report whichever result is negative.

**정답:** A

**해설**
- A: S2(R1)은 노출이 입증된 **in vivo 음성**이 **weight-of-evidence**로 우선할 수 있다고 본다. 기전(비DNA 반응성·threshold)을 설명하고 두 조직 in vivo 음성을 묶어 결론을 쓴다.
- B: in vitro 양성이 곧 개발 중단은 아니다.
- C: 결론은 weight-of-evidence 설명이 필요하다. 자동으로 대체되지 않는다.
- D: 음성 결과만 골라 보고하는 것은 근거가 없다.

---

### Q31 [An][Domain I] — strengthening the weight of evidence
In the case above, which additional observation most strengthens the argument that the in vitro positive is not relevant in vivo?

A. The positive appeared at low, non-cytotoxic concentrations both with and without metabolic activation.
B. The positive appeared only at highly cytotoxic, high concentrations under non-physiological conditions.
C. The in vivo work covered a single tissue, so the second tissue result could not contradict it.
D. The in vivo studies were run at doses well below those that gave any measurable bone-marrow exposure.

**정답:** B

**해설**
- B: in vitro 양성이 **세포독성·높은 농도·비생리적 조건에서만** 나왔다면 in vivo 음성이 우선할 근거가 강해진다.
- A: 비세포독성 저농도 양성은 오히려 우려를 키운다.
- C: 교과서는 두 조직 in vivo 음성을 묶는 전략을 쓴다. 한 조직은 근거를 약하게 한다.
- D: in vivo 음성은 **노출 입증**이 있어야 의미가 있다.

---

### Q32 [A][Domain II] — what can be stated about Ames-positive follow-up
A sponsor's briefing document discusses Ames-positive follow-up. Which statement can be supported from the sources in this chapter?

A. A 2024 FDA guidance on Ames-positive follow-up was finalised and mandates transgenic rodent assays.
B. Follow-up builds weight of evidence from mechanism, metabolic activation and in vivo relevance.
C. ICH S2(R1) requires a two-year rodent bioassay as the first step after any positive Ames result.
D. ICH M3(R2) §9 exempts Ames positives from follow-up when the clinical trial is single-dose.

**정답:** B

**해설**
- B: Ames 양성 후속은 **기전·대사 활성 조건·in vivo 관련성**으로 weight-of-evidence를 만드는 것이다.
- A: FDA가 2024년에 Ames 양성 후속시험 draft guidance를 냈다는 것까지만 확인되고 최종화 여부는 확인되지 않았다. 그 내용을 근거로 단정할 수 없다.
- C: 발암성 시험을 첫 단계로 요구한다는 근거는 없다.
- D: M3(R2) §9는 시점 규칙이고 양성 후속을 면제하지 않는다.

---
### Q33 [An][Domain IV] — genotoxicity for a cell-derived product
A board member asks why the MSC-EV programme has not budgeted an Ames test and in vivo micronucleus study like the company's small-molecule programmes. Which answer reflects the textbook?

A. The battery is not applied as for small molecules; tumorigenicity and genetic stability take that role.
B. The battery is replaced by an M7 (Q)SAR assessment, since EVs contain small-molecule process impurities.
C. The battery is postponed until Phase 3, because cell-derived products follow the oncology timing under S9.
D. The battery is applied in the small-molecule way; the budget line was simply missed and should be added.

**정답:** A

**해설**
- A: 교과서는 유전독성 battery가 세포 제품엔 **소분자식으로 적용되지 않고**, 대신 **종양원성·유전적 안정성**이 그 자리를 맡는다고 한다.
- B: M7은 ATMP·생물의약품을 범위에서 제외한다. 공정 시약 잔류는 별도 위험평가다.
- C: S9는 진행성 암 항암제 지침이다. 세포 유래 제품의 시점 근거가 아니다.
- D: 소분자식 battery 적용은 교과서와 반대다.

---

### Q34 [R][Domain I] — TTC value
What is the ICH M7(R2) threshold of toxicological concern (TTC) for a mutagenic impurity in a drug taken for a lifetime?

A. 20 µg/day.
B. 120 µg/day.
C. 1.5 µg/day.
D. 10 µg/day.

**정답:** C

**해설**
- C: M7(R2) TTC는 **1.5 µg/day**(평생 복용 기준)다.
- A: 20은 >1~12개월 AI다.
- B: 120은 ≤1개월 AI다.
- D: 10은 >1~10년 less-than-lifetime AI다.

---

### Q35 [R][Domain I] — risk level behind the TTC
What theoretical risk does the M7(R2) TTC of 1.5 µg/day represent?

A. A theoretical excess lifetime cancer risk of 10⁻⁶.
B. A theoretical excess lifetime cancer risk of 10⁻⁵.
C. A theoretical excess lifetime cancer risk of 10⁻⁴.
D. A mutation frequency at the Ames background rate.

**정답:** B

**해설**
- B: TTC는 이론적 **10⁻⁵(10만 명 중 1명) 평생 추가 암 위험**에 해당한다.
- A·C: 위험 수준의 자릿수가 다르다.
- D: TTC는 암 위험 기준이다. Ames 배경 빈도와 연결되지 않는다.

---

### Q36 [R][Domain I] — ≤1 month acceptable intake
Under ICH M7(R2), what is the acceptable intake for an individual mutagenic impurity when treatment lasts up to 1 month?

A. 1.5 µg/day.
B. 120 µg/day.
C. 10 µg/day.
D. 20 µg/day.

**정답:** B

**해설**
- B: **≤1개월은 120 µg/day**다(M7(R2) 표 2).
- A: 1.5는 >10년~평생(TTC)이다.
- C: 10은 >1~10년이다.
- D: 20은 >1~12개월이다.

---

### Q37 [A][Domain I] — 6-month trial acceptable intake
A Phase 2 trial will dose patients for 6 months. Which acceptable intake applies to an individual Class 2 impurity?

A. 1.5 µg/day, since development trials apply the lifetime TTC.
B. 10 µg/day, the value for treatment longer than 1 month.
C. 120 µg/day, since clinical trials use the shortest-duration limit.
D. 20 µg/day, the value for more than 1 up to 12 months.

**정답:** D

**해설**
- D: **>1~12개월은 20 µg/day**이고, 개발 중 임상시험에도 같은 기간 기준을 쓴다.
- A: 임상시험에도 기간별 AI를 적용한다. TTC는 >10년~평생이다.
- B: 10은 >1~10년 구간이다.
- C: 임상시험이라고 짧은 기간 한도를 쓰지 않는다. 투여 기간으로 정한다.

---

### Q38 [A][Domain I] — 5-year treatment acceptable intake
A drug is expected to be taken for about 5 years. Which acceptable intake applies to an individual mutagenic impurity?

A. 10 µg/day, the value for more than 1 up to 10 years.
B. 120 µg/day, the value for products taken intermittently.
C. 20 µg/day, the value for treatment beyond 1 month.
D. 1.5 µg/day, the value for any treatment beyond 1 year.

**정답:** A

**해설**
- A: **>1~10년은 10 µg/day**다.
- B: 120은 ≤1개월이다. 간헐 투여 기준은 교과서에 없다.
- C: 20은 >1~12개월이다.
- D: 1.5는 >10년~평생이다. 1년 초과 전체가 아니다.

---

### Q39 [A][Domain I] — calculation: 6 months, 200 mg/day
A Class 2 mutagenic impurity is present in a drug given for 6 months at a maximum daily dose of 200 mg. What is the acceptable concentration limit?

A. 10 ppm.
B. 100 ppm.
C. 600 ppm.
D. 7.5 ppm.

**정답:** B

**해설**
- B: >1~12개월 → AI **20 µg/day**. 20 µg ÷ 200 mg = **100 ppm(0.01%)**.
- A: 10 ppm은 근거 없는 값이다. AI 숫자를 그대로 ppm으로 옮긴 오류다.
- C: 600 ppm은 ≤1개월 AI 120을 쓴 값이다.
- D: 7.5 ppm은 평생 TTC 1.5를 쓴 값이다.

---

### Q40 [A][Domain I] — calculation: lifetime, 200 mg/day
The same impurity is now in a drug taken for a lifetime at a maximum daily dose of 200 mg. What is the acceptable concentration limit?

A. 1.5 ppm.
B. 50 ppm.
C. 7.5 ppm.
D. 100 ppm.

**정답:** C

**해설**
- C: 평생 → TTC **1.5 µg/day**. 1.5 ÷ 200 = **7.5 ppm**.
- A: AI 숫자를 그대로 ppm으로 옮긴 오류다. 용량으로 나누지 않았다.
- B: 50 ppm은 >1~10년 AI 10을 쓴 값이다.
- D: 100 ppm은 >1~12개월 AI 20을 쓴 값이다.

---

### Q41 [A][Domain V] — calculation: 3-week Phase 1
A Phase 1 study doses healthy volunteers for 3 weeks at a maximum daily dose of 200 mg. What is the acceptable concentration of an individual Class 2 impurity?

A. 600 ppm, using the 120 µg/day intake.
B. 50 ppm, using the 10 µg/day intake value.
C. 100 ppm, using the 20 µg/day intake.
D. 7.5 ppm, using the lifetime TTC.

**정답:** A

**해설**
- A: 3주는 **≤1개월 → 120 µg/day**. 120 ÷ 200 = **600 ppm**. 개발 중 임상시험에도 기간 기준을 쓴다.
- B: 10은 >1~10년이다.
- C: 20은 >1~12개월이다.
- D: 임상시험도 기간별 AI를 쓴다. TTC는 평생 기준이다.

---

### Q42 [A][Domain I] — calculation: 5 years, 100 mg/day
A drug for a chronic condition is expected to be taken for about 5 years at a maximum daily dose of 100 mg. What is the acceptable concentration of an individual mutagenic impurity?

A. 1,200 ppm.
B. 100 ppm.
C. 200 ppm.
D. 15 ppm.

**정답:** B

**해설**
- B: >1~10년 → AI **10 µg/day**. 10 ÷ 100 = **100 ppm**.
- A: 1,200 ppm은 ≤1개월 AI 120을 쓴 값이다.
- C: 200 ppm은 >1~12개월 AI 20을 쓴 값이다.
- D: 15 ppm은 평생 TTC 1.5를 쓴 값이다.

---

### Q43 [A][Domain V] — duration of development trials
A clinical pharmacologist argues that because the first trials are short, the lifetime TTC of 1.5 µg/day should still apply to impurities during development "to be safe." What does M7(R2) say?

A. Development trials use 120 µg/day throughout, whatever their dosing period.
B. Development trials use the lifetime TTC, and duration limits start after approval.
C. Development trials are outside M7, which applies to the marketed product alone.
D. Development trials apply the same duration-based acceptable intakes as marketed use.

**정답:** D

**해설**
- D: less-than-lifetime AI는 **개발 중 임상시험에도 같은 기간 기준**으로 적용한다.
- A: 120은 ≤1개월 투여 시험에만 해당한다. 기간에 따라 달라진다.
- B: 기간별 AI는 시판 후에만 쓰는 것이 아니다.
- C: 개발 중 임상시험도 M7 기간 기준 대상이다.

---

### Q44 [An][Domain I] — boundary trap: 13 months
A sponsor sets an impurity limit using 20 µg/day for a product with a planned 13-month treatment period. Evaluate the choice.

A. Incorrect; 13 months falls in >1 to 10 years, so 10 µg/day applies.
B. Incorrect; any treatment beyond 12 months uses the lifetime 1.5 µg/day TTC.
C. Correct, because periods are rounded down to the nearest full year.
D. Correct, because 20 µg/day covers treatment up to 2 years.

**정답:** A

**해설**
- A: 경계는 **≤1개월 / >1~12개월 / >1~10년 / >10년**이다. 13개월은 >1~10년 구간이라 **10 µg/day**다.
- B: 1.5는 >10년~평생이다. 12개월 초과 전체가 아니다.
- C: 반올림·내림 규칙은 근거가 없다.
- D: 20 µg/day는 12개월까지다.

---

### Q45 [A][Domain I] — compound-specific data
A mutagenic impurity has robust rodent carcinogenicity data from which a compound-specific limit can be derived. What should the sponsor use?

A. The TTC of 1.5 µg/day, since M7 does not allow limits based on compound data.
B. A compound-specific acceptable intake derived from the carcinogenicity data.
C. The 120 µg/day value, since carcinogenicity data justify the highest limit.
D. Class 5 status, because carcinogenicity data remove the impurity from M7.

**정답:** B

**해설**
- B: 화합물별 발암성 데이터가 있으면 **compound-specific AI**를 쓴다.
- A: TTC는 데이터가 없을 때의 기본값이다.
- C: 120은 ≤1개월 투여 AI이고, 데이터가 있다고 이 값을 쓰지 않는다.
- D: 변이원성 발암물질은 Class 1이다. Class 5는 alert 없음 또는 비변이원성 데이터다.

---

### Q46 [R][Domain I] — Class 1
Which description matches ICH M7(R2) Class 1?

A. Known mutagen with unknown carcinogenic potential.
B. Known mutagenic carcinogen, from available data.
C. Alerting structure unrelated to the API, lacking any data.
D. Alerting structure shared with a non-mutagenic API.

**정답:** B

**해설**
- B: **Class 1 = 알려진 변이원성 발암물질**이다.
- A: Class 2다.
- C: Class 3이다.
- D: Class 4다.

---

### Q47 [R][Domain I] — Class 2
Which description matches ICH M7(R2) Class 2?

A. Alerting structure unrelated to the API, lacking any data.
B. Known mutagenic carcinogen with compound-specific data.
C. Absence of structural alert, or a non-mutagenic data result.
D. Known mutagen whose carcinogenic potential is unknown.

**정답:** D

**해설**
- D: **Class 2 = 알려진 변이원성, 발암성 미지**다.
- A: Class 3이다.
- B: Class 1이다.
- C: Class 5다.

---

### Q48 [R][Domain I] — Class 3
Which description matches ICH M7(R2) Class 3?

A. Known mutagen with unknown carcinogenic potential, from Ames data.
B. Absence of alerts, confirmed by two complementary (Q)SAR methods.
C. Alerting structure shared with the API, which tested non-mutagenic.
D. Alerting structure unrelated to the API, lacking mutagenicity data.

**정답:** D

**해설**
- D: **Class 3 = alerting structure가 API와 무관하고 데이터 없음**이다.
- A: Class 2다.
- B: Class 5다.
- C: Class 4다.

---
### Q49 [R][Domain I] — Class 4
Which description matches ICH M7(R2) Class 4?

A. Known mutagen with unknown carcinogenic potential, based on bacterial data.
B. Alerting structure unrelated to the API, lacking any mutagenicity data from testing.
C. Alert shared with the API or tested related compounds, which are non-mutagenic.
D. Known mutagenic carcinogen whose limit is set from compound-specific data.

**정답:** C

**해설**
- C: **Class 4 = alerting structure가 API 또는 시험된 관련 화합물과 공유되고 그것들이 비변이원성**이다.
- A: Class 2다.
- B: Class 3이다.
- D: Class 1이다.

---

### Q50 [A][Domain I] — two (Q)SAR methods, no alert
No mutagenicity data exist for a new synthesis impurity. Two complementary (Q)SAR methodologies return no structural alerts. What follows under ICH M7(R2)?

A. Class 3, with an Ames test needed to confirm the absence of mutagenic potential.
B. Class 2, because any impurity without data is presumed mutagenic.
C. Class 5, and further mutagenicity testing is not recommended for it.
D. Class 4, because the absence of alerts is treated as sharing the API's profile.

**정답:** C

**해설**
- C: 두 상보적 (Q)SAR에서 alert가 없으면 **Class 5**이고 **추가 시험이 필요 없다**(M7(R2) §6).
- A: Class 3은 alert가 있고 데이터가 없을 때다.
- B: Class 2는 알려진 변이원 데이터가 있을 때다.
- D: Class 4는 alert가 API 또는 시험된 관련 화합물과 공유될 때다.

---

### Q51 [A][Domain III] — one alert, unrelated to the API
A CMC colleague reports that one of the two (Q)SAR methods flags a structural alert in an impurity. The alert is not present in the API, and no data exist. What should the regulatory lead advise?

A. Treat it as Class 1 and set a compound-specific limit from published carcinogenicity data.
B. Treat it as Class 3, since an alert is present, and confirm the outcome with an Ames test.
C. Treat it as Class 4, because a single alert from one method is weighed against the API.
D. Treat the impurity as Class 5, because the second method returned a negative prediction.

**정답:** B

**해설**
- B: alert가 하나라도 있고 API와 무관하며 데이터가 없으면 **Class 3**이고, **Ames로 확정**한다.
- A: Class 1은 알려진 변이원성 발암물질이다. 데이터가 없다.
- C: Class 4는 alert가 API 또는 시험된 관련 화합물과 공유되고 비변이원성일 때다.
- D: 두 방법 중 하나라도 alert가 있으면 Class 5가 아니다.

---

### Q52 [R][Domain I] — the two (Q)SAR methodologies
Which pair of (Q)SAR methodologies does ICH M7(R2) expect to be used together?

A. Expert rule-based and in vitro Ames methodologies.
B. Two statistical models from different vendors.
C. Expert rule-based and statistical methodologies.
D. Statistical and read-across methodologies in combination.

**정답:** C

**해설**
- C: M7(R2)은 **expert rule-based + statistical** 두 상보적 (Q)SAR를 쓴다.
- A: Ames는 실험이고 (Q)SAR 방법이 아니다.
- B·D: 두 방법은 서로 다른 원리여야 상보적이다. 통계 모델 둘이 아니다.

---

### Q53 [An][Domain I] — data-based vs SAR-based classes
A reviewer asks which ICH M7(R2) classes can be assigned from structure-activity reasoning alone, without mutagenicity data on the impurity. Which answer is correct?

A. Classes 1, 3 and 4.
B. Classes 1, 2 and 5.
C. Classes 2, 4 and 5.
D. Classes 3, 4 and 5.

**정답:** D

**해설**
- D: **3·4·5는 SAR로**, **1·2·5는 데이터로** 분류한다. Class 5는 양쪽 근거 모두 가능하다.
- A·C: Class 1·2는 변이원성(·발암성) 데이터가 있어야 한다.
- B: 데이터 기반 class 조합이다.

---

### Q54 [R][Domain I] — cohort of concern
Which structural groups form the ICH M7(R2) "cohort of concern"?

A. Aflatoxin-like, N-nitroso and alkyl-azoxy compounds.
B. Aflatoxin-like, alkyl halide and aromatic amine compounds.
C. N-nitroso, sulfonate ester and hydrazine compounds.
D. Epoxide, aldehyde and Michael acceptor compounds.

**정답:** A

**해설**
- A: cohort of concern은 **aflatoxin-like, N-nitroso, alkyl-azoxy** 구조다.
- B·C·D: 교과서가 정의한 세 구조가 아니다. 일부만 섞이거나 다른 구조로 바뀌었다.

---

### Q55 [A][Domain I] — N-nitroso impurity limit
A new N-nitroso impurity is found in a drug substance. The CMC team proposes a 1.5 µg/day limit based on the TTC. How should the regulatory lead respond?

A. Accept it, because the TTC is the default for any mutagenic impurity without data.
B. Accept it, provided the product is taken for less than 1 month at the 120 µg/day value.
C. Reject it; the impurity must be shown absent, since N-nitroso groups bar marketing in the US and EU.
D. Reject it; the TTC excludes this group, so a compound-specific acceptable intake is needed.

**정답:** D

**해설**
- D: N-nitroso는 **cohort of concern**이라 TTC로도 위험이 과소평가될 만큼 강력해 **TTC 적용 제외**, **화합물별 AI**가 필요하다.
- A: TTC 기본값은 cohort of concern에 쓰지 않는다.
- B: less-than-lifetime AI도 TTC 틀이라 이 구조엔 쓰지 않는다.
- C: 교과서 근거는 화합물별 AI 설정이다. 부재 입증 요건은 없다.

---

### Q56 [An][Domain IV] — nitrosamine actions in context
How do the FDA and EMA nitrosamine actions that followed the 2018 sartan NDMA events relate to ICH M7(R2)?

A. They extended the TTC of 1.5 µg/day to nitrosamines, a group that M7 had left unaddressed before.
B. They applied the M7 Option 4 control strategy, which waives testing for N-nitroso impurities.
C. They applied the M7 cohort-of-concern provision: risk assessment and AI setting (CPCA approach).
D. They replaced M7 with a separate framework, since M7 did not cover N-nitroso impurities.

**정답:** C

**해설**
- C: 교과서는 2018년 사르탄 NDMA 사태 이후 FDA·EMA의 **니트로사민 위험평가·AI 설정(CPCA 접근)** 이 **cohort of concern 조항의 실전**이라고 한다.
- A: cohort of concern은 TTC 적용 제외다.
- B: Option 4는 통제 옵션이고 니트로사민 면제 조항이 아니다.
- D: M7은 이미 N-nitroso를 cohort of concern으로 다룬다.

---

### Q57 [R][Domain II] — Option 1
What does ICH M7(R2) control Option 1 involve?

A. Omission of a specification test, justified by fate and purge knowledge.
B. In-process control with an upstream intermediate test at a higher limit.
C. A test in an intermediate specification, omitted for the DS.
D. A test with an acceptance limit in the drug substance specification.

**정답:** D

**해설**
- D: **Option 1 = 원료의약품 규격에 시험·한도**다.
- A: Option 4다.
- B: Option 3이다.
- C: Option 2다.

---

### Q58 [A][Domain III] — Option 2 vs Option 3
A CMC colleague wants to test the impurity at an intermediate rather than in the drug substance. Which statement correctly separates Option 2 from Option 3?

A. Option 2 tests in an intermediate specification; Option 3 adds in-process control, a higher upstream limit and purge.
B. Option 2 and Option 3 differ just in the batch count needed for periodic verification of the result.
C. Option 2 tests in the drug substance at a higher limit; Option 3 tests in the starting material at the full AI.
D. Option 2 relies on process knowledge without any testing; Option 3 tests in the drug substance specification.

**정답:** A

**해설**
- A: **Option 2**는 중간체 규격에 시험(DS에선 생략), **Option 3**은 공정 중 관리 + 상위 한도로 중간체 시험(**purge 입증**)이다.
- B: 정기 검증 배치 수(3/6)는 Option 1의 조건이다.
- C: 원료의약품 시험은 Option 1이다.
- D: 시험 없이 공정 이해로 가는 것은 Option 4다.

---

### Q59 [A][Domain III] — when Option 4 can be used
The process chemists want to file Option 4 (no specification test) for a mutagenic impurity removed early in the synthesis. What must the sponsor demonstrate?

A. That the impurity is Class 5 by two complementary (Q)SAR methods, so that Ames testing can be waived.
B. That the impurity was below 30% of the AI at laboratory scale in spiking and purge experiments.
C. That the impurity was below 30% of the AI in 3 consecutive production-scale batches of drug substance.
D. That fate/purge understanding gives sufficient confidence it is below the AI in the drug substance.

**정답:** D

**해설**
- D: **Option 4**는 **공정 파라미터·fate/purge 이해로 원료의약품 중 불순물이 AI 미만**이라는 충분한 확신을 입증할 때 쓴다. 위험 기반 정당화 문서가 핵심이다.
- A: Class 5면 변이원성 불순물로 다루지 않는다. 통제 옵션 선택 조건이 아니다.
- B: 실험실 규모 30% 기준은 **Option 3** 정당화 기준이다.
- C: 연속 3배치 30% 미만은 **Option 1 정기 검증** 조건이다.

---

### Q60 [An][Domain III] — locating the "30%" criterion
A training slide states: "Option 4 requires the impurity to be below 30% of the AI." Which correction is accurate?

A. The 30% figure applies to Class 4 impurities, which share their alerts with a non-mutagenic API.
B. The 30% figure belongs to the TTC derivation, as a safety margin applied on top of 1.5 µg/day.
C. The 30% figure belongs to Option 1 periodic verification and the Option 3 lab-scale justification.
D. The slide is correct; staying below 30% of the AI is the Option 4 condition for omitting the test.

**정답:** C

**해설**
- C: "30% 미만"은 **Option 1 정기 검증 시험 조건**(실생산 연속 3배치 또는 pilot 6배치)과 **Option 3 실험실 규모 정당화 기준**이다. Option 4는 fate/purge로 **AI 미만**이라는 확신이다.
- A: class 정의에는 30% 기준이 없다.
- B: TTC 산출과 무관하다.
- D: Option 4 조건이 아니다.

---

### Q61 [A][Domain II] — Option 1 periodic verification
Under Option 1, a sponsor wants to move from testing every batch to periodic verification testing. Which batch data support that move?

A. Results below the limit in 1 production-scale batch plus a two-method (Q)SAR negative.
B. Results below 50% of the limit in 3 consecutive production-scale or 6 pilot-scale batches tested.
C. Results below 30% of the limit in 6 consecutive production-scale or 3 pilot-scale batches.
D. Results below 30% of the limit in 3 consecutive production-scale or 6 pilot-scale batches.

**정답:** D

**해설**
- D: Option 1 정기 검증은 **실생산 연속 3배치 또는 pilot 6배치가 한도의 30% 미만**일 때다.
- A: 배치 데이터 요건과 (Q)SAR는 별개다.
- B: 기준은 30%다.
- C: 실생산·pilot 배치 수가 뒤바뀌었다.

---

### Q62 [R][Domain I] — M7 scope
Which product type falls within the scope of ICH M7(R2)?

A. A synthetic peptide for metabolic disease.
B. An antisense oligonucleotide for a rare disease.
C. A post-approval change to a small-molecule drug.
D. A monoclonal antibody produced in CHO host cells.

**정답:** C

**해설**
- C: M7은 **신규 원료의약품·완제와 시판 후 변경**에 적용된다.
- A: 펩타이드는 제외다.
- B: 올리고뉴클레오티드는 제외다.
- D: 생물의약품은 제외다.

---

### Q63 [A][Domain IV] — M7 and an MSC-EV product
Your company develops an MSC-EV product. A consultant recommends a full M7 impurity assessment for the product itself. What is the best response?

A. Disagree; M7 reaches EVs after approval, through its post-approval change provision for marketed products.
B. Agree, because M7 applies to any product made from human-derived starting materials.
C. Agree, but apply the less-than-lifetime AIs, given that EVs are dosed for short periods.
D. Disagree; M7 excludes ATMPs and biologics; process impurities follow Q6B, Q5 and ATMP guidance.

**정답:** D

**해설**
- D: M7은 생물의약품·**ATMP** 등을 범위에서 **제외**한다. 공정 유래 불순물은 **Q6B·Q5 계열**과 ATMP 가이드라인으로 다룬다.
- A: 시판 후 변경 조항은 범위 안 제품에 해당한다.
- B: 사람 유래 원료 여부는 M7 범위 기준이 아니다.
- C: 범위 밖 제품에 M7 AI를 적용하지 않는다.

---

### Q64 [An][Domain III] — small-molecule reagent in EV manufacture
A small-molecule reagent is used in the same EV manufacturing process. The CMC lead asks how its residual level should be justified. Which advice is correct?

A. Set the limit at the TTC of 1.5 µg/day, as S9 directs for reagents in products outside M7.
B. Apply M7 directly, since the reagent is a small molecule and M7 covers small-molecule impurities in general.
C. Justify the residual limit by risk assessment, since the product sits outside M7's impurity frame.
D. Leave it unjustified, because reagents are consumed in the process and do not reach the product.

**정답:** C

**해설**
- C: 시약은 소분자지만 M7의 대상은 범위 안 **"의약품 중 불순물"** 이고 EV 제품은 범위 밖이다. 대신 **위험평가로 잔류 한도를 정당화**한다.
- A: S9는 진행성 암 항암제 지침이다. 이런 지시는 없다.
- B: 시약이 소분자라는 이유로 M7이 직접 적용되지 않는다.
- D: 공정 시약 잔류는 위험평가 대상이다.

---
