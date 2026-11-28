# 문제은행 — Ch.11 환경 위험 평가(ERA): 미국 NEPA·21 CFR 25와 EU ERA guideline Rev. 1

> **근거:** `textbook/Ch11.md` + `cards/Ch11.md` 검증 메모(21 CFR 25.15·25.21·25.31(b)·25.31(c)·25.40–42, FDA CDER Environmental Impact Review, EMA ERA guideline Rev. 1(채택 2024-02-15, 시행 2024-09-01, action limit 0.01 µg/L, log Kow > 4.5 PBT, Fpen 1%), Dir 2001/83 Art 8(3)(ca)·10(1), eCTD Module 1.12.14·1.6). EU 정당화 범주는 2026-11-28 원문 확인: Rev. 1 Phase I Q1 자연 발생 물질(비타민·전해질·아미노산·펩타이드·단백질·뉴클레오타이드·탄수화물·지질)·herbal·adjuvant 없는 백신은 ERA를 정당화로 갈음, GMO 제품은 범위 밖, 세포·EV는 직접 열거되지 않는다. 새 숫자 없음. 계산 문항은 위 상수로만 계산했다.
> **형식:** 영문 시나리오 → 영문 선지 A~D → 정답 → 한국어 해설. 태그 `[R]/[A]/[An]` + Domain.
> **작성:** 2026-11-26. 64문항.

---

### Q01 [R][Domain I] — legal basis of the US review
What is the legal basis for FDA's environmental review of drug approvals, and which regulation implements it?

A. The Federal Food, Drug, and Cosmetic Act, implemented through the NDA content rules in 21 CFR 314.50.
B. The Clean Water Act, implemented through FDA's labeling regulations in 21 CFR Part 201.
C. An ICH environmental guideline adopted by FDA and implemented through 21 CFR Part 25.
D. The National Environmental Policy Act, implemented by FDA's procedures in 21 CFR Part 25.

**정답:** D

**해설**
- D: 미국 ERA는 **NEPA**의 집행이다. **21 CFR Part 25**가 FDA의 NEPA 이행 절차(categorical exclusion / EA / EIS)를 정한다(25.1).
- A: ERA의 근거는 FD&C Act의 신청서 내용 규정이 아니라 환경 영향 검토를 요구하는 NEPA다.
- B: 교과서가 근거로 드는 법은 NEPA다. 표시 규정은 ERA의 법적 근거가 아니다.
- C: ERA에 관한 ICH 가이드라인은 없다. ERA는 지역 규정 영역이다.

---

### Q02 [R][Domain I] — why a drug approval is reviewed at all
Why must FDA consider environmental impact when it approves a drug application?

A. Because the sponsor's manufacturing site discharges waste, which FDA inspects as part of the pre-approval inspection.
B. Because the drug's environmental toxicity forms part of FDA's benefit-risk judgement on approvability.
C. Because ICH M4 places an environmental section in the CTD that each region must assess on its merits.
D. Because the approval is a federal action, and NEPA requires federal actions to be reviewed for environmental impact.

**정답:** D

**해설**
- D: 의약품 승인도 **"연방 행위"** 라 NEPA상 환경 영향을 검토해야 한다. 핵심은 결정 자체의 환경 영향을 묻는 행정법이라는 점이다.
- A: 교과서의 논리는 승인이라는 연방 행위의 영향이다. 제조소 배출 점검이 근거가 아니다.
- B: ERA 결과는 미국에서도 거절 사유가 아니다. 결과는 FONSI/EIS 절차로 처리된다.
- C: ERA는 ICH 조화 대상이 아니고, 미국 위치는 지역 Module 1.12.14다.

---

### Q03 [R][Domain I] — 25.31(b) criterion
Which criterion allows a drug application to claim the categorical exclusion in 21 CFR 25.31(b)?

A. The active ingredient has a log Kow of 4.5 or less, so that bioaccumulation is not expected.
B. The application does not increase use of the active moiety compared with the reference product.
C. The estimated concentration at the point of entry into the aquatic environment is below 1 ppb.
D. The predicted concentration in surface water, using a default market penetration of 1%, is below 0.01 µg/L.

**정답:** C

**해설**
- C: **25.31(b)** 는 승인이 활성 모이어티의 사용을 늘리더라도 **수생환경 진입점 추정 농도(EIC) < 1 ppb**면 제외한다.
- A: log Kow > 4.5는 EU PBT 스크리닝 촉발값이다. 미국 exclusion 기준이 아니다.
- B: 사용 증가 여부가 기준이 아니다. 사용이 늘어도 EIC가 1 ppb 미만이면 제외된다.
- D: Fpen 1%와 0.01 µg/L는 EU Rev. 1 Phase I의 개념이다.

---

### Q04 [A][Domain I] — EIC 0.3 ppb
An NDA for a new antidepressant estimates an EIC of 0.3 ppb, and there are no extraordinary circumstances. What environmental documentation does FDA expect?

A. A 25.31(b) exclusion claim with the EIC basis and a statement of absent extraordinary circumstances.
B. An Environmental Assessment, because a new molecular entity always requires one.
C. An Environmental Assessment followed by a FONSI, because any measurable EIC requires FDA to make a finding.
D. A Phase I and Phase II assessment under the EMA guideline, which FDA accepts in place of a US claim.

**정답:** A

**해설**
- A: EIC 0.3 ppb는 1 ppb 미만이다. **25.31(b)** 를 인용하고 EIC 계산 근거와 **extraordinary circumstances 없음** 진술(25.15)을 낸다. EA는 불요하다.
- B: 신약이라는 이유로 EA가 요구되지 않는다. 기준은 EIC다.
- C: FONSI는 EA를 낸 경우의 결론이다. 1 ppb 미만은 exclusion으로 끝난다.
- D: 미국은 21 CFR 25에 따른 주장을 낸다. EU 패키지의 PEC 계산을 EIC 산출에 재활용할 수는 있지만 미국 주장을 대신하지 않는다.

---

### Q05 [A][Domain II] — content of the exclusion claim
A regulatory writer is assembling a 25.31(b) categorical exclusion claim for a small-molecule NDA. Which content belongs in it?

A. A citation of 25.31(b) and OECD 301 biodegradation data, since FDA requires fate data for the claim.
B. A citation of 25.31(b), the EIC basis, and a statement that extraordinary circumstances are absent.
C. A FONSI drafted by the sponsor for FDA signature, with the EIC calculation attached as support.
D. A PEC/PNEC ratio below 1, derived from algae, daphnia and fish studies, plus the cited exclusion.

**정답:** B

**해설**
- B: 신청서에 해당 조항을 **인용**하고 **extraordinary circumstances가 없다**고 진술한다(25.15). EIC 계산 근거(예상 생산량·인구·하수 희석)를 붙인다.
- A: OECD 301 등 운명 시험은 EU Phase II Tier A 항목이다. exclusion 주장의 요건이 아니다.
- C: FONSI는 FDA가 EA를 검토해 내는 결론이다. exclusion 주장에는 쓰이지 않는다.
- D: PEC/PNEC는 EU Tier A의 위험 지표다.

---

### Q06 [R][Domain II] — US placement
Where in the US eCTD does the environmental analysis (categorical exclusion claim or EA) belong?

A. Module 1.12.14, Environmental analysis.
B. Module 1.6, Environmental Risk Assessment.
C. Module 3.2.R, regional information.
D. Module 2.4, the nonclinical overview.

**정답:** A

**해설**
- A: 미국은 eCTD **Module 1.12.14 Environmental analysis**다.
- B: 1.6은 EU의 ERA 위치다. 지역을 뒤바꾼 오답이다.
- C·D: ERA는 지역 Module 1 문서다. 비임상 개요나 품질 지역 정보에 넣지 않는다.

---

### Q07 [R][Domain I] — 25.31(c)
What does the categorical exclusion in 21 CFR 25.31(c) cover?

A. Naturally occurring substances, such as proteins, peptides and nucleic acids.
B. Generic applications that do not increase use of the active moiety beyond the reference drug.
C. Applications whose EIC at the point of entry into the aquatic environment is below 1 ppb.
D. Products with endocrine activity, once estrogen, androgen and thyroid data are supplied.

**정답:** A

**해설**
- A: **25.31(c)** 는 **자연 발생 물질**(단백질·펩타이드·핵산 등 자연계 존재 물질)의 exclusion이다.
- B: 교과서상 미국 ANDA에도 25.31(b)가 적용된다. 25.31(c)의 내용이 아니다.
- C: EIC < 1 ppb는 25.31(b)의 기준이다.
- D: 호르몬 활성은 extraordinary circumstances 후보다. exclusion 범주가 아니다.

---

### Q08 [A][Domain I] — recombinant protein and mRNA vaccine
A sponsor is filing a recombinant protein therapeutic and an mRNA vaccine in the US. Neither raises extraordinary circumstances. What environmental documentation is expected?

A. An EA for each, because biologics fall outside the scope of the categorical exclusions in 21 CFR 25.31.
B. Nothing, because naturally occurring substances need no environmental documentation.
C. A 25.31(b) claim for each, supported by an EIC calculation below 1 ppb.
D. A 25.31(c) claim for each, citing it and stating that extraordinary circumstances are absent.

**정답:** D

**해설**
- D: 재조합 단백질·mRNA 백신은 보통 **25.31(c)** 자연 발생 물질 exclusion이다. 조항 인용 + extraordinary circumstances 없음 진술이면 충분하다.
- A: 생물의약품도 exclusion 대상이다. 25.31(c)가 그 경로다.
- B: 미국에서도 25.31(c) 주장을 낸다. 아무것도 내지 않는 것은 흔한 혼동이다.
- C: 자연 발생 물질의 경로는 25.31(c)다. EIC 계산을 앞세울 근거가 교과서에 없다.

---

### Q09 [R][Domain I] — extraordinary circumstances
Under 21 CFR 25.21, which situation is an example of extraordinary circumstances?

A. The product is a recombinant protein with a long manufacturing process.
B. The product has hormonal activity that could significantly affect the environment.
C. The product is the first in its pharmacological class to be filed with FDA.
D. The sponsor has filed the same product in the EU, where Phase II was triggered.

**정답:** B

**해설**
- B: extraordinary circumstances는 멸종위기종·고독성·**호르몬 활성** 등 환경에 유의한 영향을 줄 수 있는 특별 상황이다(25.21).
- A: 재조합 단백질은 25.31(c) 경로의 대표 예다. 공정 길이는 특별 상황이 아니다.
- C: 계열 최초라는 사실은 교과서의 예에 없다.
- D: EU Phase II 촉발은 EU 기준(0.01 µg/L)의 결과다. 미국 25.21 판단과 별개다.

---

### Q10 [A][Domain I] — effect of extraordinary circumstances
A product meets the 25.31(b) EIC criterion, but the review identifies extraordinary circumstances. What follows?

A. The exclusion cannot be used, and an Environmental Assessment must be submitted.
B. The exclusion applies, but FDA issues an EIS to document the special situation.
C. The application is refused until the extraordinary circumstances are removed by reformulation.
D. The exclusion still applies, provided the EIC calculation is placed in Module 1.12.14.

**정답:** A

**해설**
- A: extraordinary circumstances가 있으면 exclusion을 **쓸 수 없고 EA**를 낸다(25.21). 그래서 모든 exclusion 주장에 "없음" 진술이 붙는다.
- B: EIS는 EA 뒤 드물게 가는 결론이다. exclusion을 문서화하는 수단이 아니다.
- C: ERA는 거절 사유가 아니다. 미국은 EA 절차로 간다.
- D: EIC 기준을 충족해도 특별 상황이 있으면 exclusion이 막힌다.

---

### Q11 [A][Domain III] — estrogenic data request
The CMC lead asks why FDA requested estrogenic activity data with the environmental submission for a hormone-related product that claims an exclusion. What is the best explanation?

A. FDA views endocrine-active substances as candidate extraordinary circumstances and asks for data supporting the exclusion claim.
B. FDA uses estrogenic data to decide whether the product needs a REMS, which is then filed together with the environmental analysis.
C. FDA needs the data to calculate the EIC, which depends on receptor potency rather than production volume.
D. FDA requires the data from every applicant, as part of a harmonised ICH environmental data package.

**정답:** A

**해설**
- A: FDA는 **estrogen·androgen·갑상선 활성** 물질을 extraordinary circumstances 후보로 보고 exclusion 주장 시 지지 데이터를 요구한다. 미량으로도 수생 생태계 내분비 교란을 일으킬 수 있어서다. 데이터가 없으면 EA로 가야 할 수 있다.
- B: 교과서는 이 데이터를 REMS와 연결하지 않는다.
- C: EIC 계산 근거는 예상 생산량·인구·하수 희석이다.
- D: 호르몬 활성 데이터는 해당 시 첨부한다. ERA에 관한 ICH 가이드라인도 없다.

---

### Q12 [A][Domain I] — OTC switch supplement
An approved antidepressant later files a supplement for an OTC switch that is expected to raise the EIC above 1 ppb. What changes?

A. The sponsor files a new exclusion claim under 25.31(c), because the active moiety is already marketed.
B. The supplement must include an EIS, because the switch increases use beyond the original approval.
C. The exclusion is lost, so an EA is submitted and FDA issues a FONSI or, rarely, requires an EIS.
D. Nothing, since the original NDA's exclusion claim covers later supplements to the same application.

**정답:** C

**해설**
- C: EIC가 1 ppb를 넘으면 exclusion을 못 쓰고 **EA(25.40)** 를 낸다. FDA가 **FONSI**를 내거나 극히 드물게 **EIS**로 간다. 보충 신청도 "사용 증가"를 일으키면 같은 규칙이다.
- A: 25.31(c)는 자연 발생 물질 범주다. 시판 중이라는 사실과 무관하다.
- B: 바로 EIS로 가지 않는다. EA를 먼저 내고, EIS는 드문 결론이다.
- D: exclusion은 신청마다 판단한다. 사용 증가를 일으키는 보충은 새로 평가한다.

---

### Q13 [R][Domain I] — content of an EA
Under 21 CFR 25.40, what does an Environmental Assessment for a drug address?

A. Manufacturing site emissions, worker exposure and waste permits.
B. Clinical efficacy, environmental fate and the proposed labeling text.
C. Substance characteristics, environmental fate, toxicity and mitigation.
D. EIC calculation, extraordinary circumstances statement and the FONSI.

**정답:** C

**해설**
- C: EA(25.40)는 **물질 특성·환경 운명·독성·완화**를 다룬다.
- A: 교과서의 EA 항목에 제조소 배출·작업자 노출·폐기물 허가는 없다.
- B: 임상 유효성과 표시안은 EA 항목이 아니다.
- D: EIC 근거와 "없음" 진술은 exclusion 주장의 내용이다. FONSI는 FDA가 낸다.

---

### Q14 [R][Domain I] — EA outcomes
What outcomes can follow FDA's review of an Environmental Assessment?

A. Approval or refusal of the application on environmental grounds.
B. A FONSI in most cases, or rarely an Environmental Impact Statement.
C. A categorical exclusion or a complete response letter to the sponsor.
D. A PEC/PNEC conclusion, followed by Tier B testing where it is 1 or more.

**정답:** B

**해설**
- B: EA 검토 결과는 **FONSI**(Finding of No Significant Impact)가 대부분이고, 유의한 영향이 예상되면 드물게 **EIS**다(25.41–42).
- A: ERA는 승인 거절 사유가 아니다. 결과는 FONSI/EIS 절차다.
- C: categorical exclusion은 EA를 내기 전 단계의 경로다.
- D: PEC/PNEC와 Tier B는 EU Rev. 1 Phase II의 개념이다.

---

### Q15 [A][Domain I] — US ANDA
A US generic applicant asks whether an ANDA is exempt from environmental documentation. What is correct?

A. ANDAs must submit an EA, because the exclusions apply to new drug applications.
B. ANDAs may claim the 25.31(b) exclusion, which applies to them as to NDAs.
C. ANDAs are exempt, because a generic cannot increase use of the active moiety.
D. ANDAs follow the EU Art 10(1) approach and file a justification of unchanged exposure.

**정답:** B

**해설**
- B: 미국 ANDA에도 **25.31(b)** 가 적용된다. 조건이 맞으면 exclusion 주장을 낸다.
- A: 25.31(b)는 사용을 늘리는 NDA·ANDA·보충 모두에 걸친다. EA가 일괄 요구되지 않는다.
- C: 제네릭이 ERA 면제라는 것은 흔한 혼동이다.
- D: Art 10(1)은 EU 제네릭 규정이다. 지역을 뒤바꾼 오답이다.

---

### Q16 [An][Domain I] — wrong statement about the US system
Which statement about the US environmental review of drugs is INCORRECT?

A. An unfavourable EA is a ground on which FDA refuses to approve the drug.
B. Most drug applications end with a categorical exclusion rather than an EA.
C. An Environmental Impact Statement is a rare outcome for drug applications.
D. A FONSI is the usual result when an Environmental Assessment is reviewed.

**정답:** A

**해설**
- A: 틀린 진술이다. 미국은 FONSI/EIS 절차로 처리하고, ERA는 거절 사유가 아니다.
- B: 맞는 진술이다. 현실에선 거의 전부 categorical exclusion으로 끝난다.
- C: 맞는 진술이다. EIS는 의약품에서 극히 드물다.
- D: 맞는 진술이다. EA 검토 결과는 대부분 FONSI다.

---

### Q17 [R][Domain I] — EU legal basis
Which EU provision requires an environmental risk assessment in a marketing authorisation application?

A. Directive 2001/83/EC Article 8(3)(ca).
B. Directive 2001/83/EC Article 10(1).
C. Regulation 726/2004, as a CHMP opinion criterion.
D. ICH M4, Module 1 regional content.

**정답:** A

**해설**
- A: **Dir 2001/83 Art 8(3)(ca)** 가 MAA에 ERA 제출을 요구한다.
- B: Art 10(1)은 제네릭 신청의 근거 조항이다. 제네릭도 Art 8(3)(ca)에 따라 ERA 또는 정당화를 낸다.
- C: Reg 726/2004 recital은 ERA가 거절 사유가 아니라는 맥락에서 인용된다. 제출 의무의 근거가 아니다.
- D: ERA에 관한 ICH 가이드라인은 없다.

---

### Q18 [R][Domain I] — ERA and refusal in the EU
In the EU, what role does the ERA outcome play in the decision on a marketing authorisation?

A. It can lead to refusal only where the substance is concluded to be PBT or vPvB.
B. It is not a ground for refusal and sits outside the benefit-risk assessment.
C. It is a ground for refusal once Phase II shows a PEC/PNEC ratio of 1 or more.
D. It is weighed in the benefit-risk balance and can tip a borderline application toward refusal.

**정답:** B

**해설**
- B: EU에서 **ERA 결과는 MA 거절 사유가 아니고** 이익-위험 평가에 들어가지 않는다. 대신 처분·보관 안내와 위험 완화 조치로 간다.
- A: Rev. 1은 PBT/vPvB 결과가 위험평가 결론을 바꾸지 않는다고 명시한다. 승인 결정에도 영향을 주지 않는다.
- C: PEC/PNEC ≥ 1은 Tier B 정밀 평가로 가는 신호다. 거절 사유가 아니다.
- D: ERA는 명시적으로 B/R 밖에 있다.

---

### Q19 [A][Domain II] — where an ERA concern ends up
An EU ERA identifies an environmental concern for a new active substance. Where is this concern reflected in the authorised product information?

A. In the benefit-risk section of the CHMP assessment report, which lowers the overall balance.
B. In SmPC section 4.4 as a warning, and in the RMP as an important identified risk.
C. In a post-authorisation condition requiring Phase II studies before renewal of the MA.
D. In disposal and storage instructions in SmPC 5.3 and 6.6 and in the package leaflet.

**정답:** D

**해설**
- D: ERA 결과는 **처분·보관 안내(SmPC 5.3·6.6, PL)** 와 위험 완화 조치로 간다.
- A: ERA는 이익-위험 평가에 들어가지 않는다.
- B: 교과서는 ERA 결과를 4.4 경고나 RMP 위험으로 연결하지 않는다.
- C: Phase II는 Phase I PEC가 action limit 이상일 때 MAA 단계에서 수행한다. 갱신 조건이 아니다.

---

### Q20 [R][Domain I] — Rev. 1 dates
When was the revised EMA ERA guideline (Rev. 1) adopted by the CHMP, and when did it come into effect?

A. Adopted 2024-02-15; in effect immediately on adoption.
B. Adopted 2024-02-15; in effect from 2024-09-01.
C. Adopted 2024-09-01; in effect from 2026-09-01.
D. Adopted 2023-09-01; in effect from 2024-02-15.

**정답:** B

**해설**
- B: Rev. 1은 CHMP **채택 2024-02-15**, **시행 2024-09-01**이다.
- A: 채택과 시행 사이에 간격이 있다. 시행일은 2024-09-01이다.
- C: 2024-09-01은 시행일이다. 2026-09-01은 시험 기준일이다.
- D: 채택일이 시행일 자리로 옮겨졌다.

---

### Q21 [A][Domain II] — which version applies
A sponsor will submit an EU MAA in 2026. A consultant proposes structuring the ERA on the previous version of the EMA guideline. What is correct?

A. Rev. 1 applies to new active substances, while the previous version remains for generics.
B. The previous version applies, because Rev. 1 covers applications started after its effective date only.
C. Rev. 1 applies, since it took effect on 2024-09-01 for MAAs submitted thereafter.
D. Either version may be used during a transition that runs until the exam reference date.

**정답:** C

**해설**
- C: Rev. 1은 **2024-09-01**부터 시행되어 그 이후 제출되는 MAA(및 ERA가 필요한 변경)에 적용된다. 2026-09-01 기준일에 유효한 것도 Rev. 1이다.
- A: 교과서는 Rev. 1의 적용을 신약·제네릭으로 나누지 않는다. 제네릭 취급 세부는 가이드라인 본문으로 확인한다.
- B: 2026 제출은 시행일 이후다. 이전 판을 쓸 근거가 없다.
- D: 교과서에 기준일까지 이어지는 병행 기간은 없다.

---

### Q22 [R][Domain I] — what Phase I contains
Under EMA ERA guideline Rev. 1, what does Phase I consist of?

A. A literature review of the active substance, with refined PEC values in other compartments.
B. An EIC calculation at the point of entry into the aquatic environment.
C. Fate and ecotoxicity testing, leading to a PEC/PNEC ratio.
D. A PEC_surface water estimate, with a default Fpen of 1%, plus PBT screening.

**정답:** D

**해설**
- D: **Phase I**은 노출 추정이다. **PEC_surface water**를 계산(기본 **Fpen 1%**, 필요시 정밀화)하고 **PBT 스크리닝**을 붙인다.
- A: 추가 구획의 정밀 평가는 Phase II Tier B다.
- B: EIC는 미국 25.31(b)의 개념이다.
- C: 운명·생태독성 시험과 PEC/PNEC는 Phase II Tier A다.

---

### Q23 [R][Domain I] — action limit
What is the Phase I action limit that triggers Phase II under Rev. 1?

A. A PEC/PNEC ratio of 1 or more.
B. PEC_surface water of 1 µg/L or more.
C. PEC_surface water of 0.1 µg/L or more.
D. PEC_surface water of 0.01 µg/L or more.

**정답:** D

**해설**
- D: **PEC_sw ≥ 0.01 µg/L**이면 Phase II로 간다.
- A: PEC/PNEC ≥ 1은 Tier A에서 Tier B로 가는 기준이다.
- B: 1 µg/L(= 1 ppb)는 미국 25.31(b) 기준이다. EU보다 100배 느슨하다.
- C: 교과서의 action limit는 0.01 µg/L다.

---

### Q24 [R][Domain I] — PBT screening trigger
Under Rev. 1, which property of the active substance triggers stepwise PBT screening?

A. A log Kow greater than 4.5.
B. A PEC/PNEC ratio of 1 or more in Tier A.
C. A log Kow greater than 1, measured by OECD 106.
D. A PEC_surface water of 0.01 µg/L or more.

**정답:** A

**해설**
- A: **log Kow > 4.5**면 지속성·축적성·독성을 단계적으로 평가한다.
- B: PEC/PNEC ≥ 1은 Tier B 기준이다.
- C: 숫자와 시험이 틀렸다. OECD 106은 흡착 시험이다.
- D: 0.01 µg/L는 Phase II를 정하는 action limit다. PBT 스크리닝과는 별개다.

---

### Q25 [A][Domain I] — log Kow 5.2, PEC 0.004 µg/L
A new active substance has a log Kow of 5.2 and a PEC_sw of 0.004 µg/L. What ERA work is required under Rev. 1?

A. Phase II Tier A, because the log Kow above 4.5 overrides the action limit.
B. Neither Phase II nor PBT screening, because the PEC is below the action limit.
C. Phase II Tier B directly, because a lipophilic substance needs additional compartments.
D. Phase II risk assessment is not needed, but PBT/vPvB screening is performed.

**정답:** D

**해설**
- D: PEC가 action limit **0.01 µg/L 미만**이라 **Phase II 위험평가는 불요**다. 하지만 **log Kow > 4.5**라 **PBT/vPvB 스크리닝**은 한다.
- A: PBT는 Phase II 여부를 정하지 않는다. Phase II 여부는 PEC로 정한다.
- B: PEC가 낮아도 log Kow > 4.5면 PBT 스크리닝은 한다.
- C: Tier B는 Tier A의 PEC/PNEC ≥ 1일 때다.

---

### Q26 [A][Domain I] — PEC above the limit, low Kow
A new active substance has a PEC_sw of 0.05 µg/L and a log Kow well below 4.5. What does Rev. 1 require?

A. A refined Phase I using a lower Fpen, which removes the need for any Phase II work on the substance.
B. Phase II Tier A testing leading to a PEC/PNEC ratio; PBT screening is not triggered.
C. PBT screening only, because Phase II applies when log Kow exceeds 4.5.
D. Phase II Tier B directly, because the PEC is five times the action limit.

**정답:** B

**해설**
- B: 0.05 µg/L는 action limit 0.01 µg/L를 넘는다. **Tier A**(물리화학·운명·생태독성 → PEC/PNEC)가 필수다. log Kow가 4.5 이하라 PBT 스크리닝 촉발은 없다.
- A: Fpen 정밀화는 교과서상 가능하지만, 정밀화가 Phase II를 없앤다는 근거는 교과서에 없다.
- C: PBT 스크리닝과 Phase II의 기준을 뒤섞었다. Phase II는 PEC로 정한다.
- D: 0.05/0.01 = 5배인 것은 맞지만, Tier B는 Tier A의 PEC/PNEC ≥ 1일 때다.

---

### Q27 [R][Domain I] — Tier A studies
Which set of studies belongs to Phase II Tier A under Rev. 1?

A. Refined assessment in additional environmental compartments, after a PEC/PNEC of 1 or more.
B. OECD 301 biodegradation, 106 adsorption, 308 water-sediment, and algae 201, daphnia 211, fish 210.
C. OECD 301 biodegradation and a PBT screening, leading to a PEC_surface water estimate.
D. Estrogen, androgen and thyroid activity studies, which are needed to rule out extraordinary circumstances.

**정답:** B

**해설**
- B: **Tier A**는 기본 물리화학·운명(OECD **301** 생분해, **106** 흡착, **308** 수-저질)·생태독성(조류 **201**, 물벼룩 **211**, 어류 **210**) → **PEC/PNEC**다.
- A: 추가 구획 정밀 평가는 Tier B다.
- C: PEC_sw 추정과 PBT 스크리닝은 Phase I이다.
- D: 호르몬 활성 데이터는 미국 exclusion 주장에서 FDA가 요구하는 것이다.

---

### Q28 [R][Domain I] — Tier B trigger
When does a Rev. 1 Phase II assessment move from Tier A to Tier B?

A. When the Tier A PEC/PNEC ratio is 1 or more.
B. When the PEC_surface water reaches 0.01 µg/L or more.
C. When the log Kow of the substance is greater than 4.5.
D. When the substance is concluded to be PBT or vPvB.

**정답:** A

**해설**
- A: Tier A의 **PEC/PNEC ≥ 1**이면 **Tier B**(정밀 평가·추가 구획)로 간다.
- B: 0.01 µg/L는 Phase I에서 Phase II로 가는 action limit다.
- C: log Kow > 4.5는 PBT 스크리닝 촉발값이다.
- D: PBT 결론은 위험평가 결론을 바꾸지 않는다. Tier 진행의 기준이 아니다.

---

### Q29 [A][Domain I] — PBT conclusion with low PEC
A substance with a PEC_sw below the action limit is concluded to be PBT after screening. What is the consequence under Rev. 1?

A. Phase II Tier A becomes mandatory, because a PBT conclusion replaces the PEC trigger.
B. The substance cannot receive an MA until environmental monitoring data are generated.
C. The PBT result is withheld from the dossier, because the PEC is below the action limit.
D. The PBT information is submitted, but it does not change the risk conclusion or trigger Phase II.

**정답:** D

**해설**
- D: Rev. 1은 PBT/vPvB 결과가 위험평가 결론을 바꾸지 않는다고 명시한다. PBT로 판정돼도 Phase II를 추가 요구하지 않지만 **PBT 정보는 제출**된다.
- A: Phase II 여부는 PEC로 정한다. PBT 판정 = Phase II는 흔한 혼동이다.
- B: ERA는 MA 거절 사유가 아니다. 모니터링은 전략적으로 준비할 사항이다.
- C: 정보는 투명하게 제출한다.

---

### Q30 [An][Domain IV] — rationale for separating PBT
Why does Rev. 1 keep the PBT/vPvB assessment separate from the PEC-based risk conclusion?

A. PBT is a property, while PEC/PNEC is exposure-based risk; a low-exposure drug may still accumulate.
B. PBT data come from different OECD laboratories, so EMA cannot combine them with fate data in one conclusion.
C. PBT substances are regulated under chemicals law, so the medicinal products guideline leaves them out entirely.
D. PBT screening applies to generics only, while the PEC-based conclusion applies to new active substances.

**정답:** A

**해설**
- A: **PBT는 "성질"**, **PEC/PNEC는 "노출 기반 위험"** 이다. 저용량 약은 노출이 작아 위험이 낮아도 축적성 물질일 수 있다. 그래서 정보는 투명하게 받되 승인 결정엔 영향 없게 둔 것이다.
- B: 시험 기관의 차이는 교과서의 논리가 아니다.
- C: Rev. 1은 PBT 스크리닝을 요구한다. 빼지 않는다.
- D: PBT 스크리닝은 log Kow > 4.5인 물질에 적용된다. 신청 유형으로 나누지 않는다.

---

### Q31 [A][Domain IV] — strategy after a PBT flag
An EU dossier will carry a PBT flag for the active substance, although the PEC is below the action limit. What should the regulatory lead prepare?

A. A Phase II Tier B package, since a PBT flag escalates the assessment beyond Tier A.
B. A withdrawal plan, since a PBT flag leads to refusal under Article 8(3)(ca).
C. A request to CHMP to delete the PBT conclusion, since it has no regulatory consequence.
D. Disposal guidance, possible environmental monitoring, and handling of reputational issues.

**정답:** D

**해설**
- D: PBT 플래그가 붙으면 **폐기 안내·환경 모니터링**과 지속가능성 **평판 이슈**를 준비한다.
- A: PBT는 Phase II를 촉발하지 않는다. Tier B는 Tier A PEC/PNEC ≥ 1일 때다.
- B: ERA는 거절 사유가 아니다.
- C: PBT 정보는 제출 대상이다. 삭제를 요청할 근거가 교과서에 없다.

---

### Q32 [R][Domain II] — EU placement
Where is the ERA placed in an EU MAA dossier, and how is it treated at submission?

A. Module 1.6; it may follow during the clock stop as a supplement.
B. Module 1.12.14; it is reviewed after validation with the quality dossier.
C. Module 2.4; it is assessed together with the nonclinical overview.
D. Module 1.6; it is an item on the validation checklist.

**정답:** D

**해설**
- D: EU는 **Module 1.6 Environmental Risk Assessment**다. **validation 체크리스트** 항목이라 빠지면 접수부터 막힌다.
- A: 위치는 맞지만, validation 항목이라 나중에 내는 문서가 아니다.
- B: 1.12.14는 미국 위치다.
- C: ERA는 지역 Module 1 문서다.

---

### Q33 [A][Domain II] — EU generic under Art 10(1)
A generic MAA under Article 10(1) of Directive 2001/83/EC is being prepared. What does the dossier need regarding environmental risk?

A. Nothing, because the reference product's ERA already covers the active substance.
B. A US-style categorical exclusion claim, because Article 10(1) mirrors 21 CFR 25.31(b).
C. An ERA or a justification, commonly arguing that exposure does not rise above the reference product.
D. A full Phase II package, because generics cannot rely on the reference product's data.

**정답:** C

**해설**
- C: Art 8(3)(ca)는 모든 MAA에 적용되고 제네릭도 **ERA 또는 정당화**를 낸다. 참조제 대비 **환경 노출을 늘리지 않는다**는 논증으로 Phase I 수준 정당화가 흔하다.
- A: 제네릭이 ERA 면제라는 것은 흔한 혼동이다.
- B: categorical exclusion은 미국 21 CFR 25의 제도다.
- D: 교과서는 Phase I 수준 정당화가 가능한 경우가 많다고 본다.

---

### Q34 [A][Domain IV] — wrong statement about generics
Which statement about environmental documentation for generics is INCORRECT?

A. An EU generic may justify its ERA by arguing market substitution for the reference product.
B. A US ANDA may claim the categorical exclusion in 21 CFR 25.31(b).
C. An EU generic under Article 10(1) is exempt from the ERA requirement.
D. Details of generic handling under Rev. 1 should be checked in the guideline text.

**정답:** C

**해설**
- C: 틀린 진술이다. EU 제네릭도 ERA 또는 정당화가 필요하다.
- A: 맞는 진술이다. 시장 대체 논증으로 노출이 늘지 않음을 보인다.
- B: 맞는 진술이다. 미국 ANDA에도 25.31(b)가 적용된다.
- D: 맞는 진술이다. 덱은 Rev. 1의 제네릭 취급 세부를 가이드라인 본문으로 확인하라고 한다.

---

### Q35 [R][Domain I] — unit equivalence
For the purpose of comparing US and EU thresholds, what is 1 ppb equal to in water?

A. 0.01 µg/L.
B. 1 µg/L.
C. 0.1 µg/L.
D. 1 mg/L.

**정답:** B

**해설**
- B: **1 ppb = 1 µg/L**다.
- A: 0.01 µg/L는 EU action limit다. 1 ppb의 100분의 1이다.
- C·D: 단위 환산이 틀렸다. 교과서 기준으로 1 ppb는 1 µg/L다.

---

### Q36 [A][Domain I] — how much stricter
Compare the US categorical exclusion threshold (EIC below 1 ppb) with the EU Phase I action limit (PEC_sw of 0.01 µg/L). Which statement is correct?

A. The EU action limit is 10-fold stricter than the US threshold.
B. The US threshold is 100-fold stricter than the EU action limit.
C. The two thresholds are equivalent once ppb is converted to µg/L.
D. The EU action limit is 100-fold stricter than the US threshold.

**정답:** D

**해설**
- D: 미국 1 ppb = **1 µg/L**, EU action limit = **0.01 µg/L**다. 1 ÷ 0.01 = **100**배로 EU가 엄격하다.
- A: 배수 계산이 틀렸다.
- B: 방향이 반대다. 숫자가 작은 EU가 엄격하다.
- C: 환산하면 1 µg/L와 0.01 µg/L로 같지 않다.

---

### Q37 [A][Domain I] — same product, two regions
A product's US EIC is 0.3 ppb. Assume the EU Phase I PEC_sw for the same product is also 0.3 µg/L. What follows in each region?

A. Categorical exclusion in the US; PBT screening only in the EU, since the PEC is low.
B. Categorical exclusion in the US; Phase II in the EU, since the PEC is 30 times the action limit.
C. An EA in the US and Phase II in the EU, since both thresholds are exceeded.
D. Categorical exclusion in both regions, since 0.3 is below the US threshold of 1 and the EU accepts it.

**정답:** B

**해설**
- B: 0.3 ppb는 미국 1 ppb 미만이라 **25.31(b)** exclusion이다. EU에선 0.3 ÷ 0.01 = **30**배로 action limit를 넘어 **Phase II**다. 미국 exclusion 제품이 EU에선 Phase II를 요구받는 흔한 경우다.
- A: PBT 스크리닝은 log Kow > 4.5로 정한다. PEC가 action limit를 넘었으니 Phase II다.
- C: 미국 기준 1 ppb는 넘지 않았다.
- D: EU에는 categorical exclusion이 없다. 0.01 µg/L가 기준이다.

---

### Q38 [R][Domain I] — ICH and ERA
Is there an ICH guideline on environmental risk assessment for human medicines?

A. There is none; ERA is regional, and VICH GL6/GL38 cover veterinary medicines.
B. Yes; ICH M4 sets the ERA content, which each region places in Module 1.
C. Yes; an ICH ERA guideline was adopted with the EMA Rev. 1 in 2024.
D. Yes; VICH GL6/GL38 apply to human medicines through ICH adoption.

**정답:** A

**해설**
- A: **ICH ERA 가이드라인은 없다**. VICH GL6/GL38은 동물약이다. ERA는 지역 규정 영역이다.
- B: ERA 위치(미국 1.12.14, EU 1.6)는 지역 Module 1이고, 내용을 정하는 ICH 문서는 없다.
- C: 2024년에 채택된 것은 EMA의 Rev. 1이다.
- D: VICH 문서는 동물약 대상이다.

---

### Q39 [An][Domain IV] — organising a global ERA workstream
A sponsor will file in the US, EU and Japan. How should the environmental workstream be organised?

A. Build the EU Phase I/II package first, reuse its PEC for the US EIC, and check Japan separately.
B. Wait for ICH harmonisation, since the regions are expected to adopt a single ERA format.
C. Build the US exclusion claim first and adapt it for the EU, since the US threshold is the stricter one.
D. Prepare one ERA in Module 1.6 and submit it unchanged to all three regions.

**정답:** A

**해설**
- A: **EU 패키지(Phase I/II)를 기준**으로 만들고, 그 PEC 계산을 미국 EIC 산출에 재활용해 exclusion 또는 EA로 가며, 일본은 국가 요건을 별도 확인한다.
- B: ICH ERA 가이드라인은 없고, 교과서는 조화 계획을 말하지 않는다.
- C: EU가 100배 엄격하다. 미국 기준이 더 엄격하다는 전제가 틀렸다.
- D: 미국은 1.12.14에 21 CFR 25 기준의 문서를 내고, 일본은 국가 요건이 별도다.

---

### Q40 [An][Domain I] — philosophy of the two systems
Which statement best captures the difference in philosophy between the US and EU ERA systems?

A. The US evaluates the product's fate and toxicity within benefit-risk; the EU applies a procedural law that ends in exclusion.
B. Both systems apply product legislation, but the EU uses a stricter number and the US uses a looser one.
C. The US applies general administrative law to federal actions; the EU evaluates product fate and toxicity apart from approval.
D. The US integrates ERA into its approval decision; the EU harmonises ERA through ICH and leaves the decision to member states.

**정답:** C

**해설**
- C: 미국은 **연방 행위의 환경 영향을 검토하는 일반 행정법(NEPA)** 을 승인에 적용해 조건이 맞으면 절차를 끝낸다. EU는 **제품의 환경 운명·독성 자체**를 과학적으로 평가하되 승인 결정과 분리했다.
- A: 두 지역의 특징을 뒤바꿨다.
- B: 미국은 의약품 입법이 아니라 NEPA라는 일반 행정법이 근거다.
- D: 미국에서도 ERA는 거절 사유가 아니고, ERA에 관한 ICH 가이드라인은 없다.

---

### Q41 [An][Domain I] — why the EU asks for more data
Why does the EU typically require far more environmental test data than the US for the same small molecule?

A. The EU follows an ICH ERA guideline, while the US has opted out of that guideline.
B. The EU evaluates the product's fate and toxicity itself, with a 100-fold stricter limit.
C. The EU assesses environmental risk as part of benefit-risk, so CHMP needs full data to weigh it.
D. The EU applies NEPA-style procedures, which require an EA for each new active substance.

**정답:** B

**해설**
- B: EU는 **제품의 환경 운명·독성 자체**를 과학적으로 평가하게 했고, action limit도 **100배 엄격**하다. 그래서 미국 exclusion 제품도 EU에선 Phase II를 요구받기 쉽다.
- A: ERA에 관한 ICH 가이드라인은 없다.
- C: EU에서 ERA는 이익-위험 평가 밖에 있다.
- D: NEPA는 미국 법이다.

---

### Q42 [A][Domain III] — advising a colleague on ICH
A new colleague plans to search the ICH website for the harmonised ERA guideline to use for a US, EU and Japan filing. What advice is correct?

A. Use VICH GL6/GL38, which ICH extended to human medicines in 2024.
B. Use ICH S7A, which covers environmental safety pharmacology studies.
C. There is none to find; use 21 CFR 25, EMA Rev. 1 and Japan's national rules.
D. Use ICH M4, which harmonises ERA content across the three regions.

**정답:** C

**해설**
- C: **ICH ERA 가이드라인은 없다**. 미국은 21 CFR 25, EU는 EMA ERA guideline Rev. 1, 일본은 국가 요건을 따로 본다.
- A: VICH GL6/GL38은 동물약이다.
- B: 교과서는 ERA를 다루는 ICH 문서가 없다고 한다.
- D: ICH M4는 ERA 내용을 조화하지 않는다. ERA는 지역 Module 1 문서다.

---

### Q43 [A][Domain I] — default Fpen
A Phase I PEC_surface water estimate is first calculated without product-specific market data. Which market penetration factor (Fpen) is used by default under Rev. 1?

A. 4.5%, matching the PBT trigger.
B. 0.01, matching the action limit.
C. 1%, refined where justified.
D. 100%, as a worst case.

**정답:** C

**해설**
- C: Phase I PEC 계산의 기본 **Fpen은 1%**이고, 필요시 정밀화한다.
- A: 4.5는 log Kow PBT 촉발값이다.
- B: 0.01 µg/L는 action limit다. Fpen과 다른 값이다.
- D: 교과서의 기본값은 1%다.

---

### Q44 [A][Domain II] — missing Module 1.6
An EU MAA is submitted without Module 1.6 because the team planned to provide the ERA during the procedure. What is the likely consequence?

A. The application proceeds, and CHMP adds a post-authorisation condition for the ERA.
B. The ERA is requested at the first clock stop, as it does not affect the decision.
C. The application is refused, because a missing ERA is a ground for refusal of the MA.
D. The application stalls at validation, because the ERA is a validation checklist item.

**정답:** D

**해설**
- D: Module 1.6은 **validation 체크리스트** 항목이라 빠지면 **접수부터 막힌다**.
- A: 교과서는 ERA를 시판 후 조건으로 미루는 경로를 말하지 않는다.
- B: ERA가 결정에 영향을 주지 않는 것은 맞지만, 제출 자체는 validation 요건이다.
- C: ERA 결과는 거절 사유가 아니다. 문제는 결과가 아니라 접수 단계다.

---

### Q45 [A][Domain V] — ordering Tier A
The EU MAA is 10 months away, and the API's PEC_sw is 0.05 µg/L. What should the regulatory lead do now?

A. Order Tier B studies now, because Tier A is skipped once the action limit is exceeded.
B. Wait for the CHMP's questions, because Phase II data can follow at the first clock stop.
C. Order Phase II Tier A studies now, because outsourcing takes about 6 to 9 months.
D. Refine the Fpen until the PEC falls below the action limit, then file Phase I only.

**정답:** C

**해설**
- C: action limit 초과라 **Tier A 필수**다. 시험 외주가 **6~9개월**이라 MAA 10개월 전이면 **지금 발주**다.
- A: Tier B는 Tier A의 PEC/PNEC ≥ 1일 때 추가된다.
- B: ERA는 validation 항목이라 처음부터 Module 1.6에 들어가야 한다.
- D: 정밀화가 action limit 아래로 내려 준다는 근거는 교과서에 없다.

---

### Q46 [An][Domain V] — Tier A result above 1
Tier A studies ordered 10 months before an EU MAA return a PEC/PNEC of 1 or more. How does this affect the plan?

A. The application is withdrawn, because a PEC/PNEC of 1 or more is a ground for refusal.
B. Tier B refined assessment is added, extending the workstream beyond the Tier A timeline.
C. The ERA is complete, because Tier A ends the Phase II assessment in every case.
D. The PBT screening is repeated, because the PEC/PNEC result replaces the log Kow trigger.

**정답:** B

**해설**
- B: **PEC/PNEC ≥ 1이면 Tier B**(정밀 평가·추가 구획)가 추가된다. Tier A 외주 6~9개월에 더해 일정이 늘어난다.
- A: ERA 결과는 거절 사유가 아니다.
- C: Tier A 결과에 따라 Tier B가 추가될 수 있다.
- D: PBT 스크리닝은 log Kow로 정하고, PEC/PNEC와 별개다.

---

### Q47 [A][Domain V] — how far above the limit
An API has a PEC_sw of 0.05 µg/L. By what factor does this exceed the Rev. 1 action limit?

A. 500-fold.
B. 50-fold.
C. 0.5-fold.
D. 5-fold.

**정답:** D

**해설**
- D: 0.05 ÷ 0.01 = **5**배다. action limit를 넘으니 Tier A가 필수다.
- A·B·C: 계산이 틀렸다. action limit는 0.01 µg/L다.

---

### Q48 [R][Domain I] — PBT and the risk conclusion
What does Rev. 1 state about PBT/vPvB results and the environmental risk conclusion?

A. A PBT conclusion raises the risk conclusion by one tier.
B. PBT/vPvB results replace the PEC/PNEC conclusion.
C. A vPvB conclusion leads directly to Tier B testing.
D. PBT/vPvB results do not change the risk conclusion.

**정답:** D

**해설**
- D: Rev. 1은 **PBT/vPvB 결과가 위험평가 결론을 바꾸지 않는다**고 명시한다.
- A·B: PBT는 성질이고 PEC/PNEC는 노출 기반 위험이라 분리돼 있다.
- C: Tier B는 Tier A PEC/PNEC ≥ 1일 때다.

---

### Q49 [A][Domain I] — MSC-EV product in the US
A sponsor files an MSC-derived extracellular vesicle product in the US. There are no extraordinary circumstances. What environmental documentation is expected for the vesicles themselves?

A. An Environmental Assessment, because cell-derived products fall outside the categorical exclusions in 21 CFR 25.31.
B. An EU-style Phase I PEC estimate filed in Module 1.12.14 in place of a US exclusion claim.
C. A 25.31(c) claim for naturally occurring substances, with a statement of absent extraordinary circumstances.
D. A 25.31(b) claim, supported by an EIC calculation from expected production and sewage dilution.

**정답:** C

**해설**
- C: MSC-EV 자체는 미국에선 **25.31(c)** 자연 발생 물질 exclusion이다. 조항 인용 + extraordinary circumstances 없음 진술을 낸다.
- A: 생물학적 물질도 25.31(c)로 제외된다.
- B: 미국은 21 CFR 25에 따른 주장을 낸다.
- D: 25.31(b)는 EIC 기준 경로다. 자연 유래 생물학적 물질의 경로는 25.31(c)다.

---

### Q50 [A][Domain III] — the component not to forget
The CMC team believes the ERA for an MSC-EV product needs no attention beyond the vesicles. Which point should the regulatory lead raise?

A. The US claim for the vesicles must be an EA, because cell-derived products carry extraordinary circumstances by default.
B. The vesicles themselves need Phase II Tier A testing in the EU, because biological material has a log Kow above 4.5.
C. Residual process small molecules (medium components, antibiotics, cryoprotectants) may need assessment or justification.
D. The ERA moves to Module 3 for cell-derived products, because the residual components are part of the quality dossier.

**정답:** C

**해설**
- C: 제조 공정 유래 **잔류 소분자**(배지 성분·항생제·동결보존제)는 제품에 남으면 별도 평가 대상이 될 수 있고, 최소한 **정당화 문서**가 필요하다.
- A: 미국에서 EV 자체는 25.31(c) 경로다.
- B: 교과서는 세포·EV 자체에 Phase II를 요구한다고 하지 않는다. log Kow 주장도 근거가 없다.
- D: ERA 위치는 미국 1.12.14, EU 1.6이다.

---

### Q51 [An][Domain IV] — EU plan for an MSC-EV product
An EU MAA is planned for an MSC-EV product. The team wants to state in Module 1.6 that the product is exempt from ERA. What is the soundest approach?

A. Treat the product as a new active substance and run a full Phase II package for the vesicles.
B. Confirm any exemption's scope in the Rev. 1 text, and justify residual small molecules.
C. Cite 21 CFR 25.31(c) in Module 1.6, since the EU accepts the US natural-substance exclusion.
D. State the exemption, since Rev. 1 lists cell-derived products by name, and omit the excipients.

**정답:** B

**해설**
- B: Rev. 1은 자연 발생 물질(단백질·지질·뉴클레오타이드 등)에 대해 ERA를 연구 대신 **정당화**로 갈음하게 하지만, 세포·EV는 이름으로 열거되지 않으므로 이 범위에 든다는 논증을 문서로 세워야 한다. 어느 쪽이든 **배지 잔류 소분자·항생제·동결보존제**의 정당화 문서를 준비한다. Module 1.6은 validation 항목이라 빠지면 접수부터 막힌다.
- A: 교과서는 EV 자체에 Phase II 전체 평가를 요구한다고 하지 않는다.
- C: 25.31(c)는 미국 규정이다. EU에선 Rev. 1을 본다.
- D: Rev. 1은 세포 유래 제품을 이름으로 열거하지 않고, 자연 발생 물질도 완전 면제가 아니라 정당화 문서를 낸다. 잔류 소분자를 빼면 안 된다.

---

### Q52 [R][Domain I] — hormonal data with the claim
When an exclusion claim under 25.31(b) is filed for a product with relevant activity, which data does FDA expect to be attached?

A. Log Kow and PBT screening results.
B. OECD 211 daphnia reproduction data.
C. Estrogen, androgen and thyroid activity data.
D. A PEC/PNEC ratio for surface water.

**정답:** C

**해설**
- C: 25.31(b) 주장에는 EIC 계산 근거와 해당 시 **estrogen·androgen·갑상선 활성** 데이터를 첨부한다.
- A: log Kow와 PBT 스크리닝은 EU Phase I 항목이다.
- B·D: 생태독성 시험과 PEC/PNEC는 EU Tier A 항목이다.

---

### Q53 [A][Domain I] — supplement that increases use
An approved NDA files a supplement for a new formulation expected to increase use of the active moiety. How is the environmental requirement handled?

A. An EIS is required, because a second approval compounds the earlier exposure.
B. Supplements are outside 21 CFR Part 25, which applies to original applications.
C. A 25.31(c) claim is filed, because the active moiety is already on the market.
D. The same rule applies: an exclusion if the EIC stays below 1 ppb, otherwise an EA.

**정답:** D

**해설**
- D: 보충 신청도 **"사용 증가"** 를 일으키면 같은 규칙이다. EIC < 1 ppb면 25.31(b) exclusion, 넘으면 EA다.
- A: EIS는 EA 뒤 드문 결론이다.
- B: 25.31(b)는 사용을 늘리는 NDA·ANDA·보충에 걸친다.
- C: 25.31(c)는 자연 발생 물질 범주다.

---

### Q54 [A][Domain I] — wrong statement among common confusions
Which statement is INCORRECT?

A. A PBT conclusion under Rev. 1 automatically triggers Phase II testing.
B. The US ERA sits in Module 1.12.14 and the EU ERA in Module 1.6.
C. In the US, a biologic files a 25.31(c) claim rather than nothing.
D. An EU generic MAA needs an ERA or a justification of unchanged exposure.

**정답:** A

**해설**
- A: 틀린 진술이다. PBT는 별도 정보이고, Phase II 여부는 PEC로 정한다.
- B: 맞는 진술이다.
- C: 맞는 진술이다. 생물의약품도 25.31(c) 주장을 낸다.
- D: 맞는 진술이다. Art 8(3)(ca)는 제네릭에도 적용된다.

---

### Q55 [A][Domain I] — reading a consultant's memo
A consultant's memo states that a product with an EIC of 0.3 ppb "meets the EU action limit, because 0.3 ppb is below 1 µg/L." What is wrong with the memo?

A. The EU uses ppb rather than µg/L, so the conversion in the memo cannot be applied.
B. Nothing; the US and EU thresholds are numerically the same after unit conversion.
C. The EU limit is 0.01 µg/L, so 0.3 µg/L is above it; the memo compared against the US threshold.
D. The EU limit applies to the PEC/PNEC ratio, so a concentration cannot be compared with it.

**정답:** C

**해설**
- C: 1 ppb = 1 µg/L이므로 0.3 ppb는 0.3 µg/L다. EU action limit는 **0.01 µg/L**라 이를 넘는다. 메모는 미국 기준과 비교했다.
- A: EU action limit는 µg/L로 표시된 PEC_sw 값이다.
- B: 두 기준은 100배 차이가 난다.
- D: action limit는 PEC_sw에 대한 값이다. PEC/PNEC는 Tier A 지표다.

---

### Q56 [An][Domain I] — refusal in both regions
Compare how an adverse environmental finding is handled in the US and the EU.

A. Both regions refuse approval, but the US does so only after an EIS is prepared.
B. The EU refuses where Tier B confirms risk; the US routes the finding through FONSI or EIS.
C. Neither refuses: the US uses FONSI/EIS, and the EU keeps ERA outside benefit-risk.
D. The US refuses after an unfavourable EA; the EU keeps ERA outside benefit-risk.

**정답:** C

**해설**
- C: 미국은 **FONSI/EIS 절차**, EU는 명시적으로 **B/R 밖**이다. 둘 다 거절 사유가 아니다.
- A: EIS는 드문 절차적 결론이고, 거절로 이어진다는 근거가 교과서에 없다.
- B: EU에서도 ERA 결과는 거절 사유가 아니다.
- D: 미국에서도 ERA는 거절 사유가 아니다.

---

### Q57 [A][Domain III] — "biologics file nothing"
A colleague says that a recombinant protein BLA needs no environmental section because it is a biologic. What is the correct advice?

A. Disagree; an EA is required, since biologics cannot use the categorical exclusions in 21 CFR 25.31.
B. Disagree; a 25.31(c) claim citing the exclusion and absent extraordinary circumstances is filed.
C. Agree, since 21 CFR Part 25 applies to small-molecule drug applications.
D. Agree, provided the EU Module 1.6 for the same product shows exemption.

**정답:** B

**해설**
- B: 생물의약품도 아무것도 안 내는 것이 아니다. 미국은 **25.31(c)** 주장(조항 인용 + extraordinary circumstances 없음)을 낸다.
- A: 생물의약품은 25.31(c) exclusion을 쓴다.
- C: 재조합 단백질은 25.31(c) 경로로 Part 25 안에 있다.
- D: EU 문서가 미국 요건을 대신하지 않고, EU 면제 범주는 확인할 사항이다.

---

### Q58 [R][Domain I] — FONSI
What does FONSI stand for in the US environmental review?

A. Finding of No Significant Impact.
B. Formal Notice of Significant Impact.
C. Finding of Negligible Substance Input.
D. Final Order on Notified Safety Issues.

**정답:** A

**해설**
- A: **FONSI**는 Finding of No Significant Impact다. EA 검토의 대부분 결과다.
- B·C·D: 교과서의 용어가 아니다. 유의한 영향이 예상될 때는 EIS로 간다.

---

### Q59 [A][Domain II] — basis for the EIC
A regulatory writer must document the basis of the EIC in a 25.31(b) claim. Which inputs does the textbook list?

A. Fpen of 1%, PNEC and the log Kow of the substance.
B. Expected production volume, population and sewage dilution.
C. OECD 301 biodegradation and OECD 106 adsorption results.
D. Clinical dose, half-life and the number of patients in trials.

**정답:** B

**해설**
- B: EIC 계산 근거는 **예상 생산량·인구·하수 희석**이다.
- A: Fpen·PNEC·log Kow는 EU Rev. 1의 개념이다.
- C: OECD 301·106은 EU Tier A 운명 시험이다.
- D: 교과서는 임상시험 정보를 EIC 근거로 들지 않는다.

---

### Q60 [A][Domain IV] — Japan in the plan
A global ERA plan covers the US and EU in detail. What does the textbook say about Japan?

A. Japan follows the ICH ERA guideline, so the EU package can be reused.
B. Japan applies the US 1 ppb exclusion, so the US claim is reused.
C. Japan accepts the EU Module 1.6 document as its national ERA.
D. Japan has its own national requirements, to be checked separately.

**정답:** D

**해설**
- D: 일본은 **국가 요건이 별도**라 따로 확인한다.
- A: ICH ERA 가이드라인은 없다.
- B·C: 교과서는 일본이 다른 지역 문서를 그대로 받는다고 하지 않는다.

---

### Q61 [A][Domain II] — variation requiring ERA
After 2024-09-01, a marketing authorisation holder files a change that requires an ERA. Which guideline version governs it?

A. Rev. 1, which applies to MAAs and to changes requiring an ERA filed thereafter.
B. The previous version, because Rev. 1 applies to initial MAAs.
C. The previous version, because the product was first authorised before 2024.
D. Rev. 1, but only if the change raises the PEC_sw by at least 0.01 µg/L.

**정답:** A

**해설**
- A: Rev. 1은 **2024-09-01** 이후 제출되는 MAA **및 ERA가 필요한 변경**에 적용된다.
- B: 변경도 적용 대상이다.
- C: 기준은 제출 시점이다. 최초 허가 연도가 아니다.
- D: action limit는 Phase II 여부를 정하는 값이다. 적용 판본을 정하지 않는다.

---

### Q62 [An][Domain IV] — omitting PBT screening
A sponsor's API has a log Kow of 5.2 and a PEC_sw of 0.004 µg/L. It proposes to skip PBT screening, arguing that low exposure makes it pointless. Evaluate.

A. Not acceptable, because the PBT result will push the risk conclusion above the action limit.
B. Acceptable, provided the SmPC carries disposal instructions in sections 5.3 and 6.6.
C. Not acceptable; log Kow above 4.5 triggers PBT screening even when the PEC is below the limit.
D. Acceptable, because PBT screening is part of Phase II, which is not triggered here.

**정답:** C

**해설**
- C: **log Kow > 4.5**면 PEC가 action limit 미만이어도 **PBT 스크리닝은 한다**. PBT는 성질에 관한 정보라 노출이 낮아도 받는다.
- A: PBT 결과는 위험평가 결론을 바꾸지 않는다.
- B: 폐기 안내는 PBT 스크리닝을 대신하지 않는다.
- D: PBT 스크리닝은 Phase I에 붙는다. Phase II 여부와 별개다.

---

### Q63 [A][Domain I] — classifying a Tier A study
A Tier A study plan lists OECD 308. How is this study classified in the Rev. 1 Tier A package?

A. A water-sediment fate study.
B. A PBT screening study.
C. A Tier B compartment study.
D. An ecotoxicity study in fish.

**정답:** A

**해설**
- A: OECD **308**은 **수-저질** 운명 시험이다. 운명 시험은 301 생분해, 106 흡착, 308 수-저질이다.
- B: PBT 스크리닝은 log Kow > 4.5일 때 Phase I에 붙는다.
- C: OECD 308은 Tier A 항목이다.
- D: 어류 생태독성은 OECD 210이다.

---

### Q64 [An][Domain V] — planning a two-region filing
A small molecule has a US EIC below 1 ppb and an EU PEC_sw of 0.05 µg/L. The EU MAA is 10 months away. Which plan fits the textbook?

A. File EAs in both regions, since the EU limit is exceeded and the US follows the EU result.
B. Order Tier A now for the EU, and reuse the PEC work to support the US exclusion claim.
C. Use the US exclusion to justify Phase I only in the EU, since the two thresholds are aligned.
D. File the US exclusion now, and wait for the US outcome before starting any EU studies.

**정답:** B

**해설**
- B: EU는 action limit 초과라 **Tier A**가 필수이고 외주 6~9개월이라 **지금 발주**한다. 그 PEC 계산을 미국 EIC 산출에 재활용해 **25.31(b)** exclusion 주장에 쓴다.
- A: EU에는 EA라는 절차가 없고, 미국은 EIC 1 ppb 미만이라 exclusion이다.
- C: 두 기준은 100배 차이가 나서 정렬돼 있지 않다.
- D: 미국 결과를 기다리면 EU Tier A 일정이 MAA에 맞지 않는다.

---
