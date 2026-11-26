# 문제은행 — Ch.9+10 발암성 · 생식발생독성(DART)

> **근거:** `textbook/Ch09-10.md` + `cards/Ch09-10.md` 검증 메모(ICH S1A, S1B·S1B(R1)(Step 4 2022-08, WoE 6요소), S1C(R2)(25배 AUC·1,500 mg/kg/day·MRHD ≤500 mg/day), M3(R2) §10·§11(2026-11-26 §11.3 원문 대조로 고친 WOCBP 150명·3개월 예외 포함), S5(R3) 2020, S9, S6(R1), S11, FDA CGT 비임상 2013, FDA PLLR(2014-12-03 공포·2015-06-30 시행, 21 CFR 201.57(c)(9)), EU SmPC 4.6·5.3, EMA 2008 생식·수유 위험평가 가이드라인). 새 숫자 없음. 계산 문항은 교과서 상수(24개월 in-life + 6~9개월 = 30~33개월)로만 계산했다.
> **형식:** 영문 시나리오 → 영문 선지 A~D → 정답 → 한국어 해설. 태그 `[R]/[A]/[An]` + Domain.
> **작성:** 2026-11-26. 64문항.

---

### Q01 [R][Domain I] — S1A trigger
Under ICH S1A, which expected clinical use pattern triggers the need for carcinogenicity studies?

A. Continuous use for at least 3 months, or any intended use in a paediatric population.
B. Continuous use for at least 12 months, matching the longest non-rodent chronic toxicity study.
C. Continuous use for at least 6 months, or frequent intermittent use giving similar exposure.
D. Repeated dosing beyond the period covered by the 6-month rodent toxicity study.

**정답:** C

**해설**
- C: S1A는 임상 사용이 **6개월 이상 연속**이거나 잦은 간헐 사용으로 총 노출이 그와 비슷하면 발암성 시험을 요구한다.
- A: 3개월이나 소아 대상이라는 이유는 S1A의 기준이 아니다.
- B: 12개월이 아니라 6개월이다. 만성독성 시험 기간과 연동하지 않는다.
- D: 기준은 임상 사용 기간이다. 반복투여 독성시험이 덮는 기간으로 정하지 않는다.

---

### Q02 [R][Domain I] — usual timing of carcinogenicity data
For a drug that meets the S1A use criterion and raises no special concern, by when are carcinogenicity studies usually expected?

A. Before the first-in-human study, so that long-term risk is known before dosing starts.
B. After approval, as a post-marketing requirement negotiated with the agency during the NDA review.
C. Before Phase 2 begins, because Phase 2 gives the first multi-month patient exposure.
D. Before the marketing application; earlier completion is needed when there is cause for concern.

**정답:** D

**해설**
- D: 발암성 시험은 보통 **시판 허가 신청 전**에 완료한다. 임상시험 전에 요구되는 건 유전독성 양성·구조적 경고 같은 **특별한 우려**(M3(R2)의 "cause for concern")가 있을 때다.
- A: 우려가 없으면 FIH 전 요건이 아니다.
- B: 기본 시기는 신청 전이다. 시판 후로 미루는 것은 기본 규칙이 아니다.
- C: Phase 2 시작이 기준점이 아니다.

---

### Q03 [A][Domain I] — positive genotoxicity, short use
A candidate shows positive genotoxicity findings pointing to a DNA-reactive mechanism. Planned clinical use is short and intermittent, well under 6 months. How should the team treat carcinogenic risk?

A. Defer it to the marketing application, since cause for concern changes design but not timing.
B. Address it despite the short use, bringing assessment forward before long exposure or stopping.
C. Cover it with a 2-year rat study started after Phase 3, as done for a structural alert.
D. Set it aside, since S1A ties carcinogenicity testing to at least 6 months of continuous clinical use.

**정답:** B

**해설**
- B: 유전독성 양성은 **DNA 반응성 발암 기전**을 전제하므로 S1A의 6개월 조건과 무관하게 위험을 다뤄야 한다. 장기 임상 노출 전에 평가를 당기거나 개발을 멈춘다.
- A: cause for concern은 시기를 앞당기는 요인이다.
- C: Phase 3 뒤에 시작하면 장기 노출 전 평가라는 목적을 놓친다.
- D: 6개월 조건은 우려가 없는 일반 경우의 기준이다. 유전독성 양성은 이를 넘어선다.

---

### Q04 [An][Domain I] — negative genotoxicity in WoE
In an S1B(R1) weight-of-evidence assessment, how does a negative genotoxicity package function?

A. It is one factor pointing toward a 2-year rat study adding little value.
B. It waives carcinogenicity testing by itself, whatever the other factors show.
C. It is set aside, because WoE is limited to target biology and hormonal effects.
D. It shifts the requirement from a 2-year rat study to a 2-year mouse study.

**정답:** A

**해설**
- A: 유전독성 음성은 S1B(R1) WoE에서 "2년 랫 시험 가치 낮음" 쪽 **요소 하나**다. 다른 요소와 종합한다.
- B: WoE는 6개 요소를 종합한다. 한 요소로 면제가 결정되지 않는다.
- C: 유전독성은 6개 요소 중 하나다.
- D: WoE는 2년 랫 시험의 가치를 묻는다. 마우스 장기 시험으로 옮기는 규정이 아니다.

---

### Q05 [R][Domain I] — S1B basic design
Which design reflects the basic ICH S1B approach (before R1) for a small molecule needing carcinogenicity assessment?

A. A 2-year mouse study alone, with a rat study added if the mouse result is positive.
B. Two 6-month transgenic mouse studies, one in Tg.rasH2 mice and one in p53+/- mice.
C. A 2-year rat study plus a 2-year dog study, so that a non-rodent species is included.
D. A 2-year rat study plus a 6-month transgenic mouse study, or 2-year studies in rat and mouse.

**정답:** D

**해설**
- D: S1B 기본 구성은 **2년 랫 + 단기 대안(6개월 transgenic 마우스)** 또는 **2년 랫 + 2년 마우스**다.
- A: 장기 시험의 중심은 2년 랫이다.
- B: transgenic 모델은 2년 랫과 짝을 이루는 단기 대안이다. 둘만으로 구성하지 않는다.
- C: 발암성 장기 시험은 설치류다. 비설치류 2년 시험은 기본 구성이 아니다.

---

### Q06 [R][Domain I] — the S1B(R1) question
What core question does ICH S1B(R1), which reached Step 4 in August 2022, ask before a 2-year rat study is run?

A. Whether the clinical dose stays below the limit dose set for carcinogenicity testing.
B. Whether a 2-year rat study would add value to human carcinogenic risk assessment.
C. Whether a 2-year mouse study could replace the rat study for the same compound.
D. Whether in vitro assays could replace both rodent studies for the compound.

**정답:** B

**해설**
- B: S1B(R1)(Step 4 **2022-08**)은 6개 WoE 요소를 종합해 **2년 랫 시험이 사람 발암 위험 평가에 가치를 더하는가**를 먼저 묻는다.
- A: 한계용량은 S1C(R2) 용량 선택 문제다.
- C: 마우스로의 대체가 아니라 랫 시험의 가치가 질문이다.
- D: S1B(R1)은 단기 transgenic 마우스를 유지한다. in vitro로 두 시험을 대체하는 틀이 아니다.

---

### Q07 [A][Domain I] — inconclusive WoE
A sponsor's S1B(R1) weight-of-evidence assessment is inconclusive: some factors suggest low value, others leave the question open. What follows?

A. Both rodent studies are dropped in favour of a longer chronic toxicity study in dogs.
B. The decision is deferred until after approval, when clinical data can settle it.
C. The 2-year rat study is omitted, because a single factor favouring low value suffices.
D. The 2-year rat study is conducted, because uncertainty points toward running it.

**정답:** D

**해설**
- D: S1B(R1)에서 가치가 없다고 결론 나면 생략, **불확실하면 수행**한다.
- A: 비설치류 만성독성 연장은 발암성 시험의 대안이 아니다.
- B: 결론이 불확실하면 수행이 원칙이다. 승인 뒤로 판단을 미루는 규칙이 아니다.
- C: 생략은 "가치 없음" 결론일 때다. 요소 하나로 정하지 않는다.

---

### Q08 [R][Domain I] — the six WoE factors
Which of the following is one of the six weight-of-evidence factors in ICH S1B(R1)?

A. Evidence of immunomodulation by the drug or its target.
B. Duration of the planned Phase 3 trial in the target population.
C. Results of the embryo-fetal development studies in two species.
D. Clinical efficacy shown in the Phase 2 dose-ranging study.

**정답:** A

**해설**
- A: 6개 요소는 표적 생물학, 2차 약리, 만성독성 조직병리, 호르몬 교란, 유전독성, **면역조절**이다.
- B: 임상 기간은 S1A의 필요성 판단 변수다. WoE 요소가 아니다.
- C: EFD는 생식독성(S5(R3)) 소재다. 발암성 WoE 요소가 아니다.
- D: 임상 효능은 WoE 요소가 아니다.

---

### Q09 [A][Domain I] — GPCR antagonist package
A GPCR antagonist has well-characterised target biology, no hormonal effects, negative genotoxicity and no proliferative findings in 6-month rat and 9-month dog studies. Which carcinogenicity package fits S1B(R1)?

A. Omit both rodent studies, since the WoE factors together show negligible risk.
B. Conduct 2-year rat and mouse studies, since S1B(R1) applies to biologics instead.
C. Omit the 2-year rat study on a WoE argument and conduct a 6-month Tg.rasH2 study.
D. Conduct the 2-year rat study and drop the transgenic study, which S1B(R1) removed.

**정답:** C

**해설**
- C: WoE로 "2년 랫 가치 낮음"을 논증해 **2년 랫 생략 + 6개월 Tg.rasH2**를 제안할 수 있다.
- A: S1B(R1)에서 단기 transgenic 마우스는 유지된다.
- B: S1B(R1)은 소분자 발암성 평가의 틀이다. 생물의약품은 S6(R1)이다.
- D: 방향이 반대다. 생략 대상은 2년 랫이고 transgenic 마우스는 남는다.

---

### Q10 [A][Domain III] — agreeing the WoE in advance
The same team wants to rely on a waiver of the 2-year rat study. What should regulatory affairs advise as the procedural step?

A. Agree a prospective WoE document with FDA (Executive CAC) and EMA beforehand.
B. Notify the agencies after the transgenic study ends, as waivers need not be pre-agreed.
C. Ask the IRB to grant the waiver, since it reviews nonclinical carcinogenicity plans.
D. Submit the WoE document with the NDA and let reviewers judge it at filing.

**정답:** A

**해설**
- A: 절차는 **사전 WoE 문서를 FDA(Executive CAC)·EMA와 합의**하는 것이다.
- B: 사후 통보가 아니라 사전 합의다.
- C: IRB는 비임상 발암성 패키지를 합의하는 주체가 아니다.
- D: 신청 시점에 처음 내면 2년 시험을 시작할 시기를 이미 놓친다. 사전 합의가 절차다.

---

### Q11 [A][Domain II] — Day 120 question
At Day 120, CHMP asks why an MAA for a product used continuously for 9 months contains no carcinogenicity data. The sponsor has 6-month rat data and a WoE argument. Which response strategy fits the textbook?

A. Withdraw the MAA and resubmit once 2-year rat and 2-year mouse studies are both complete.
B. Reply that S1B(R1) is not adopted in the EU, so an FDA-agreed waiver should transfer directly.
C. Argue that 9 months of use falls below the S1A trigger, so carcinogenicity data are not expected.
D. Structure the six-factor WoE, add transgenic mouse results, and offer a PAES or condition if needed.

**정답:** D

**해설**
- D: 응답은 ① **WoE 6요소를 구조화**한 근거 ② 수행했거나 진행 중인 **단기 transgenic 마우스** 결과 ③ 필요하면 **PAES/조건**으로 2년 시험을 시판 후 완료하는 제안이다.
- A: S1B(R1) WoE가 있으므로 두 장기 시험을 전제로 철회할 이유가 없다.
- B: CHMP는 S1B(R1)을 Step 5로 채택했다.
- C: 9개월 연속 사용은 6개월 기준을 넘는다.

---

### Q12 [R][Domain II] — S1B(R1) in EU procedures
Which statement about citing S1B(R1) in an EU marketing authorisation procedure is correct?

A. It can be cited for biologics, since CHMP adopted it within the S6(R1) framework.
B. It cannot be cited until the Commission transposes it into an EU regulation.
C. It applies to US submissions, while the EU keeps the original S1B design unchanged.
D. It can be cited in a Day 120 response, as CHMP has adopted it at Step 5.

**정답:** D

**해설**
- D: CHMP가 S1B(R1)을 **Step 5**로 채택했으므로 EU Day 120 응답의 근거로 쓸 수 있다.
- A: S1B(R1)은 S6(R1)의 일부가 아니다. 소분자 발암성 평가 틀이다.
- B: ICH 가이드라인은 CHMP 채택으로 EU에서 쓰인다. 규정 전환이 전제가 아니다.
- C: S1B(R1)은 ICH 지역 공통이다. EU가 구 설계만 고수하지 않는다.

---

### Q13 [R][Domain I] — what S1B(R1) did not do
A colleague summarises ICH S1B(R1). Which statement is incorrect?

A. It calls for the 2-year rat study when the WoE conclusion is uncertain.
B. It ties omission of the 2-year rat study to a WoE finding of low value.
C. It removed the 2-year rat study from carcinogenicity assessment.
D. It keeps the short-term transgenic mouse study in the package.

**정답:** C

**해설**
- C: 틀린 진술이다. S1B(R1)은 2년 시험을 없애지 않았다. WoE로 "가치 없음"일 때만 생략하고 불확실하면 수행한다.
- A: 맞다. 불확실하면 수행한다.
- B: 맞다. 생략은 가치 낮음 결론에 묶여 있다.
- D: 맞다. 단기 transgenic 마우스는 유지된다.

---

### Q14 [An][Domain IV] — two candidates, two packages
A sponsor has two chronic-use small molecules. X has well-understood target biology, negative genotoxicity, no hormonal effects and no proliferative findings. Y shows hormonal perturbation and proliferative changes in the 6-month rat study. Which plan is most defensible?

A. Run transgenic mouse studies alone for both, since S1B(R1) replaced the rat study.
B. Propose 2-year rat waivers for both, since each has negative genotoxicity on file.
C. Propose a 2-year rat waiver for X and plan the 2-year rat study for Y.
D. Plan the 2-year rat study for X and propose a waiver for Y, given its known effects.

**정답:** C

**해설**
- C: X는 WoE 요소가 "2년 랫 가치 낮음" 쪽으로 모인다. Y는 호르몬 교란과 만성독성 증식성 소견이 있어 결론이 불확실하거나 가치가 있으므로 **수행**한다.
- A: S1B(R1)은 2년 랫을 조건부로 생략하게 했을 뿐 대체하지 않았다.
- B: 유전독성 음성은 6요소 중 하나일 뿐이다. Y의 다른 요소가 생략을 막는다.
- D: 두 제품의 판단이 뒤바뀌었다.

---

### Q15 [A][Domain I] — intermittent use
A migraine drug will be taken in frequent intermittent courses over years; total exposure is similar to 6 months of continuous use, although no single course lasts that long. Is carcinogenicity assessment triggered under S1A?

A. Triggered for the EU, while the US counts continuous courses alone for this purpose.
B. Not triggered, because intermittent use is assessed under ICH S9 instead of S1A.
C. Triggered, because frequent intermittent use with similar total exposure counts.
D. Not triggered, because no single course reaches 6 months of continuous use.

**정답:** C

**해설**
- C: S1A는 **잦은 간헐 사용으로 총 노출이 6개월 연속과 유사**한 경우도 포함한다.
- A: S1A는 ICH 공통 기준이다. 지역 차이를 두지 않는다.
- B: S9는 진행성 암 항암제 규정이다. 간헐 사용 규정이 아니다.
- D: 한 번의 연속 기간만 보지 않는다.

---

### Q16 [A][Domain III] — choosing the short-term model
A project toxicologist asks which study can serve as the short-term alternative paired with a 2-year rat study under ICH S1B. What is the correct answer?

A. A 9-month dog study with extended histopathology of proliferative lesions.
B. A 13-week rat dose range-finding study that sets the S1C(R2) top dose.
C. A rabbit embryo-fetal study that adds a second species to the package.
D. A 6-month transgenic mouse study, such as Tg.rasH2 or p53+/- mice.

**정답:** D

**해설**
- D: 단기 대안은 **6개월 transgenic 마우스**(Tg.rasH2, p53+/- 등)다.
- A: 9개월 개 시험은 만성독성 시험이다.
- B: 13주 시험은 S1C(R2) 용량 선택 근거다. 발암성 단기 대안이 아니다.
- C: 토끼는 EFD의 두 번째 종이다. 발암성과 관계없다.

---

### Q17 [R][Domain I] — S1C(R2) limit dose
Under ICH S1C(R2), what limit dose may be used as the top dose in a carcinogenicity study, and under what condition?

A. 1,500 mg/kg/day, when the maximum recommended human dose is at most 1,000 mg/day.
B. 1,500 mg/kg/day, when the maximum recommended human dose is at most 500 mg/day.
C. 1,000 mg/kg/day, when the maximum recommended human dose is at most 500 mg/day.
D. 1,000 mg/kg/day, when a 50-fold exposure margin over humans cannot be reached.

**정답:** B

**해설**
- B: S1C(R2) 한계용량은 **1,500 mg/kg/day**이고 조건은 **MRHD ≤500 mg/day**다.
- A: 조건이 500 mg/day이다. 1,000은 일반 독성 한계용량 숫자와 섞인 것이다.
- C: 1,000 mg/kg/day는 일반 독성(M3(R2))의 한계용량이다.
- D: 1,000 mg/kg/day·50배는 일반 독성의 짝이다.

---

### Q18 [R][Domain I] — exposure-based endpoint
Which exposure-based endpoint does ICH S1C(R2) accept for selecting the high dose of a carcinogenicity study?

A. A 25-fold Cmax ratio of human to rodent exposure.
B. A 25-fold AUC ratio of rodent to human exposure.
C. A 10-fold AUC ratio of rodent to human exposure.
D. A 50-fold AUC ratio of rodent to human exposure.

**정답:** B

**해설**
- B: S1C(R2) 노출 기반 종점은 **25배 AUC 비(설치류:사람)**다.
- A: 지표는 AUC이고 비의 방향은 설치류:사람이다.
- C: 10배는 교과서에 없는 숫자다.
- D: 50배는 일반 독성(M3(R2))의 노출 배수다.

---

### Q19 [A][Domain I] — limit dose not available
A drug's maximum recommended human dose is well above 500 mg/day. The team proposes 1,500 mg/kg/day as the carcinogenicity top dose purely as a limit dose. What is the problem?

A. The 1,500 mg/kg/day limit dose depends on an MRHD of at most 500 mg/day.
B. The limit dose is 1,000 mg/kg/day for carcinogenicity, so the proposal is too high.
C. The limit dose applies to biologics, so a small molecule must use the MTD instead.
D. A limit dose can be used in mouse studies, but rat studies must reach the MTD.

**정답:** A

**해설**
- A: S1C(R2) 한계용량 1,500 mg/kg/day는 **MRHD ≤500 mg/day**일 때 쓴다. 이 조건이 안 맞으면 다른 종점(MTD, 25배 AUC 등)으로 근거를 대야 한다.
- B: 1,000 mg/kg/day는 일반 독성 한계용량이다.
- C: 한계용량은 소분자 발암성 용량 선택의 종점이다.
- D: 종에 따라 한계용량 사용을 나누는 규정은 교과서에 없다.

---

### Q20 [R][Domain I] — not an S1C(R2) endpoint
Which of the following is NOT a dose-selection endpoint recognised by ICH S1C(R2)?

A. Saturation of absorption.
B. A 50-fold exposure margin.
C. Dose-limiting pharmacodynamic effects.
D. Maximum feasible dose.

**정답:** B

**해설**
- B: 50배 노출 배수는 일반 독성(M3(R2)) 숫자다. S1C(R2)는 **25배 AUC**다.
- A: 흡수 포화는 S1C(R2) 종점이다.
- C: 용량제한 약력학 효과는 S1C(R2) 종점이다.
- D: MFD는 S1C(R2) 종점이다.

---

### Q21 [An][Domain I] — why the numbers differ
Why does carcinogenicity dose selection use a higher limit dose but a lower exposure multiple than general toxicity testing?

A. The higher limit offsets the smaller group sizes used in 2-year bioassays.
B. Carcinogenicity studies use mice, which tolerate higher doses but clear most drugs faster than rats.
C. The higher limit avoids missing carcinogens over 2 years; survival limits the multiple.
D. Regulators set the carcinogenicity numbers first and the general numbers later.

**정답:** C

**해설**
- C: 발암성은 **2년 노출에서 발암물질을 놓치지 않는 것**이 목적이라 한계용량을 1,500으로 올렸고, 장기 시험의 **생존·내약성** 때문에 노출 배수는 25배로 낮췄다.
- A: 군 크기는 교과서가 든 이유가 아니다.
- B: 종 차이는 교과서가 든 이유가 아니다.
- D: 제정 순서는 숫자 차이의 근거가 아니다.

---

### Q22 [A][Domain III] — toxicologist borrows the general limit
A study director plans a 2-year rat study with a top dose of 1,000 mg/kg/day, citing the ICH M3(R2) limit dose. The MRHD is 200 mg/day. What should you advise?

A. Raise it to the S1C(R2) limit of 1,500 mg/kg/day, which this MRHD permits.
B. Accept it, because the M3(R2) limit dose governs carcinogenicity studies too.
C. Lower it to reach a 50-fold margin, since that is the carcinogenicity criterion.
D. Accept it, provided the 13-week study showed a 50-fold margin at that dose level.

**정답:** A

**해설**
- A: 발암성은 S1C(R2)를 따른다. MRHD가 500 mg/day 이하이므로 한계용량 **1,500 mg/kg/day**를 쓸 수 있다. 1,000을 쓰면 발암물질을 놓칠 위험이 있다.
- B: M3(R2) 1,000 mg/kg/day는 일반 독성 숫자다.
- C: 50배는 일반 독성 배수다. 발암성은 25배 AUC다.
- D: 50배는 일반 독성 배수다. 발암성 노출 기준은 25배 AUC다.

---

### Q23 [A][Domain I] — matching the pairs
Which pairing of top-dose rules is correct?

A. General toxicity: 1,500 mg/kg/day and 25-fold; carcinogenicity: 1,000 mg/kg/day and 50-fold.
B. General toxicity: 1,500 mg/kg/day and 50-fold; carcinogenicity: 1,000 mg/kg/day and 25-fold AUC.
C. General toxicity: 1,000 mg/kg/day and 25-fold; carcinogenicity: 1,500 mg/kg/day and 50-fold AUC.
D. General toxicity: 1,000 mg/kg/day and 50-fold; carcinogenicity: 1,500 mg/kg/day and 25-fold AUC.

**정답:** D

**해설**
- D: 일반 독성(M3(R2)) **1,000 mg/kg/day·50배**, 발암성(S1C(R2)) **1,500 mg/kg/day·25배 AUC**다.
- A: 두 쌍이 통째로 뒤바뀌었다.
- B: 한계용량만 뒤바뀌었다.
- C: 노출 배수만 뒤바뀌었다.

---

### Q24 [A][Domain III] — advanced-cancer kinase inhibitor
An oncology team asks whether a 2-year carcinogenicity study is needed for a kinase inhibitor intended for patients with metastatic disease. What is the correct advice?

A. Not needed, because kinase inhibitors are exempt from carcinogenicity testing.
B. Needed, because the drug will be given continuously for more than 6 months.
C. Needed in a transgenic mouse model, which S9 accepts in place of the rat study.
D. Generally not needed, because ICH S9 does not call for it in advanced cancer.

**정답:** D

**해설**
- D: **S9**는 **진행성 암 환자** 대상 항암제에 발암성 시험을 일반적으로 요구하지 않는다.
- A: 면제 근거는 약물 계열이 아니라 진행성 암이라는 환자 집단이다.
- B: S1A의 6개월 조건보다 S9의 집단 조건이 우선한다.
- C: S9는 발암성 시험 자체를 일반적으로 요구하지 않는다. 대체 모델 요구가 아니다.

---

### Q25 [An][Domain IV] — indication expands to adjuvant use
The same kinase inhibitor is now being developed as adjuvant therapy for patients with early-stage cancer and long expected survival. How does this affect carcinogenicity planning?

A. Carcinogenicity returns to S1A/S1B(R1), because the population is no longer advanced.
B. Unchanged — S9 covers the product once it is approved for any cancer indication or population.
C. A 2-year mouse study is added, while the rat study stays waived under S9.
D. Unchanged, provided the adjuvant course is shorter than the metastatic regimen.

**정답:** A

**해설**
- A: 적응증이 **초기 암·보조요법·장기 생존 집단**으로 넓어지면 **S1A/S1B(R1)**로 돌아간다.
- B: S9 면제는 승인 여부가 아니라 진행성 암 집단에 묶여 있다.
- C: S9 하에서 일부 종만 면제하는 구조는 교과서에 없다.
- D: 투여 기간 비교는 기준이 아니다. 집단이 바뀐 것이 핵심이다.

---

### Q26 [A][Domain I] — monoclonal antibody, standard bioassay
For a monoclonal antibody for rheumatoid arthritis, the team plans a standard 2-year rat bioassay. What does ICH S6(R1) indicate?

A. The bioassay is required, because chronic use exceeds the 6-month S1A trigger.
B. The bioassay is generally inappropriate; a mechanism-based assessment is used.
C. The bioassay is waived, because antibodies carry negligible carcinogenic risk in patients.
D. The bioassay is replaced by a 2-year study in cynomolgus monkeys instead.

**정답:** B

**해설**
- B: 표준 설치류 bioassay는 생물의약품에 **일반적으로 부적절**하다. S6(R1)은 표적의 증식·면역억제 관련성, 만성독성의 증식성 변화, 문헌·임상 데이터로 논증하는 **기전 기반 평가**를 요구한다.
- A: 6개월 조건은 소분자 S1A 기준이다. 생물의약품은 S6(R1) 논리로 간다.
- C: 면제가 아니라 기전 기반으로 위험을 논증한다.
- D: 원숭이 장기 발암성 시험은 교과서가 제시한 대안이 아니다.

---

### Q27 [R][Domain I] — why the bioassay fails for biologics
According to the textbook, why is the standard rodent carcinogenicity bioassay generally unsuitable for biotechnology-derived products under ICH S6(R1)?

A. Rodent studies are reserved for products with positive genotoxicity findings.
B. Protein products cannot be dosed for 2 years by any practical route.
C. Species specificity and immunogenicity limit what rodent studies can show.
D. Biologics are degraded to amino acids, which are known to be non-carcinogenic.

**정답:** C

**해설**
- C: 교과서가 드는 이유는 **종 특이성·면역원성**이다.
- A: 설치류 발암성 시험을 유전독성 양성에 한정하는 규정은 없다.
- B: 투여 경로의 실현성은 교과서가 든 이유가 아니다.
- D: 분해 산물 논리는 교과서에 없다.

---

### Q28 [A][Domain III] — "2-year rat plan" for an EV product
An MSC-derived extracellular vesicle product is intended for chronic use in children. The regulatory lead asks for "the 2-year rat carcinogenicity plan." How should you reframe the request?

A. Replace the rat study with a 6-month Tg.rasH2 study, as S1B(R1) allows for any product.
B. Assess tumorigenicity, ectopic tissue and host proliferation, with biodistribution data.
C. Waive carcinogenicity entirely, because EV products contain no living cells to proliferate.
D. Run the 2-year rat study, adding a juvenile cohort to reflect the paediatric population.

**정답:** B

**해설**
- B: 세포·EV 제품은 표준 2년 시험이 맞지 않는다. 제품 특이 위험 — **종양원성·이소성 조직 형성·숙주 세포 증식 자극** — 을 **생체분포·지속성 + in vitro/in vivo 종양원성 평가**로 다룬다.
- A: S1B(R1)은 소분자 틀이다. EV 제품에 transgenic 마우스로 대체하는 규정은 없다.
- C: 숙주 세포 증식 자극 같은 위험이 남으므로 평가를 생략하지 않는다.
- D: 2년 설치류 bioassay 자체가 부적절하다.

---

### Q29 [R][Domain I] — product-specific risks for cell/EV products
Which set lists the product-specific risks the textbook names for cell and EV products in place of a standard 2-year bioassay?

A. Genotoxicity, hormonal perturbation and saturation of absorption in rodent dose-range studies.
B. Tumorigenicity, ectopic tissue formation and stimulation of host cell proliferation.
C. Secondary pharmacology, maximum feasible dose and dose-limiting pharmacology.
D. Immunogenicity, embryo-fetal toxicity and reduced male fertility in rodents.

**정답:** B

**해설**
- B: 세포·EV 제품의 제품 특이 위험은 **종양원성·이소성 조직 형성·숙주 세포 증식 자극**이다.
- A: 유전독성·호르몬 교란은 S1B(R1) WoE 요소이고, 흡수 포화는 S1C(R2) 종점이다.
- C: 2차 약리는 WoE 요소이고, 나머지는 S1C(R2) 종점이다.
- D: 면역원성은 S6(R1)이 bioassay를 부적절하게 보는 이유이고, 나머지는 DART 소재다.

---

### Q30 [A][Domain II] — justifying and agreeing the EV plan
For the paediatric chronic-use EV product, which guidance and meeting route does the textbook point to for justifying and agreeing the tumorigenicity programme?

A. ICH S11 and the FDA CGT nonclinical guidance (2013), agreed at INTERACT/pre-IND.
B. ICH S1B(R1) and S1C(R2), agreed through a Day 120 response to CHMP questions.
C. ICH S9 and the FDA carcinogenicity protocol guidance, agreed with the Executive CAC.
D. ICH S5(R3) and E21, agreed at the end-of-Phase 2 meeting before pivotal trials.

**정답:** A

**해설**
- A: 소아 장기 사용이면 **S11**(소아 비임상)과 **FDA CGT 비임상 가이던스(2013)**로 정당화하고 **INTERACT/pre-IND**에서 합의한다.
- B: S1B(R1)·S1C(R2)는 소분자 표준 발암성 틀이다.
- C: S9는 항암제, Executive CAC는 소분자 WoE·프로토콜 협의 맥락이다.
- D: S5(R3)·E21은 생식독성·임신 관련이다.

---

### Q31 [A][Domain V] — start date for a 2-year study
A 2-year rat study must be fully reported for an NDA planned 40 months from now. Using the textbook's planning numbers, when must dosing start?

A. Within 10 to 13 months, allowing 24 months in-life plus 3 to 6 months to report.
B. Within 16 months, since only the 24-month in-life phase must precede the NDA.
C. Within 1 to 4 months, allowing 24 months in-life plus 12 to 15 months to report.
D. Within 7 to 10 months, allowing 24 months in-life plus 6 to 9 months to report.

**정답:** D

**해설**
- D: 2년 in-life **24개월** + 조직병리·통계·보고서 **6~9개월** = **30~33개월**이다. 40 − 33 = 7, 40 − 30 = 10이므로 **7~10개월 안에** 투여를 시작한다.
- A: 보고 기간을 줄였다. 교과서 수치는 6~9개월이다.
- B: in-life 뒤의 보고 기간 6~9개월을 빠뜨렸다.
- C: 보고 기간을 부풀렸다. 교과서 수치는 6~9개월이다.

---

### Q32 [R][Domain V] — total duration of a 2-year study
In the textbook's planning estimate, how long does a 2-year rat carcinogenicity study take from first dose to final report?

A. About 24 months, since reporting runs in parallel with the in-life phase.
B. About 36 to 40 months, adding a 13-week dose range-finding study as well.
C. About 30 to 33 months, adding histopathology, statistics and reporting.
D. About 26 to 27 months, adding a short recovery period after dosing ends.

**정답:** C

**해설**
- C: in-life 24개월 + 조직병리·통계·보고서 6~9개월 ≈ **30~33개월**이다.
- A: 보고 단계는 in-life 뒤에 6~9개월이 더 든다.
- B: 13주 용량범위 시험은 투여 시작 전 단계다. 교과서의 30~33개월에 포함되지 않는다.
- D: 회복기 추가는 교과서 계산에 없다.

---

### Q33 [A][Domain V] — what precedes 2-year dosing
Dosing of a 2-year rat study must start within the next 7 to 10 months. Which activities must be finished before dosing begins?

A. The definitive EFD studies in rodent and rabbit, so that the dose groups can be shared.
B. A 13-week dose range-finding study for S1C(R2) endpoints and FDA CAC protocol consultation.
C. The pre-NDA meeting and a PLLR-format draft label, so that labeling claims are fixed first.
D. The 6-month transgenic mouse study, whose result decides whether the rat study is needed.

**정답:** B

**해설**
- B: 투여 전에 **13주 용량범위 시험으로 S1C(R2) 종점 근거**를 만들고 **FDA 프로토콜 사전 협의(Carcinogenicity Assessment Committee)**를 끝낸다.
- A: EFD는 생식독성 시험이다. 발암성 투여 개시 조건이 아니다.
- C: 라벨 작업은 발암성 투여 개시 조건이 아니다.
- D: 2년 랫 시험의 필요성은 S1B(R1) WoE로 판단한다. transgenic 결과를 기다리는 순서가 아니다.

---

### Q34 [A][Domain V] — late start
A team planning an NDA 40 months from now cannot start 2-year rat dosing until month 12. Using the textbook's planning numbers, what happens?

A. The report arrives at months 48 to 51, missing the planned NDA by 8 to 11 months.
B. The report arrives at month 40 exactly, since reporting overlaps the in-life phase.
C. The report arrives at month 36, leaving 4 months of margin before the NDA.
D. The report arrives at months 42 to 45, missing the planned NDA by 2 to 5 months.

**정답:** D

**해설**
- D: 12 + 30 = 42, 12 + 33 = 45개월이다. 40개월 NDA보다 **2~5개월 늦다**(교과서 상수 24개월 in-life + 6~9개월 보고).
- A: 보고 기간을 부풀렸다.
- B: 보고는 in-life 뒤에 6~9개월 더 걸린다.
- C: in-life 24개월만 더했다. 보고 6~9개월이 빠졌다.

---

### Q35 [An][Domain V] — is the schedule still feasible?
For an NDA planned at month 40, the 13-week dose range-finding study and the CAC protocol consultation will not finish until month 10, when 2-year rat dosing can begin. How should the planner describe the schedule?

A. Infeasible by more than a year, because the in-life phase alone runs 36 months.
B. Feasible at the fast end of the estimate, with a risk of slipping up to 3 months.
C. Comfortable, because the study will be reported by month 34 at the latest.
D. Feasible with room to spare, because reporting takes about 3 months after dosing.

**정답:** B

**해설**
- B: 10 + 30 = 40, 10 + 33 = 43개월이다. 보고가 가장 빠르면 40개월에 맞고, 늦으면 **최대 3개월** 밀린다. 교과서 계산의 시작 상한(7~10개월)의 끝에 걸린 일정이다.
- A: in-life는 24개월이다.
- C: 보고 기간 6~9개월을 반영하지 않은 숫자다.
- D: 보고는 6~9개월이다.

---

### Q36 [A][Domain II] — protocol consultation skipped
A US sponsor plans to start a 2-year rat study next month and submit the protocol to FDA afterwards "for information." What should regulatory affairs advise?

A. Consult FDA's Carcinogenicity Assessment Committee on the protocol before dosing.
B. Proceed, because FDA reviews carcinogenicity protocols at the time of the NDA submission.
C. Submit the protocol to the IRB, which approves dose selection for animal studies.
D. Proceed, provided the EMA has agreed the dose selection in scientific advice.

**정답:** A

**해설**
- A: 투여 전에 **FDA 프로토콜 사전 협의(Carcinogenicity Assessment Committee)**를 끝낸다. 용량 선택이 뒤늦게 부정되면 2년 시험을 다시 해야 한다.
- B: 사후 검토가 아니라 사전 협의가 계획 순서다.
- C: IRB는 사람 대상 연구를 다룬다.
- D: EMA 자문이 FDA 사전 협의를 대신한다는 규정은 교과서에 없다.

---

### Q37 [R][Domain I] — S5(R3) study types
Which set correctly expands the three classic study types in ICH S5(R3)?

A. FEED: fetal exposure and early development; EFD: early fertility determination; PPND: post-partum neonatal dosing.
B. FEED: fertility and early embryonic development; EFD: early fetal death; PPND: paternal and neonatal development.
C. FEED: fertility and early embryonic development; EFD: embryo-fetal development; PPND: pre- and postnatal development.
D. FEED: female endocrine and estrous data; EFD: embryo-fetal development; PPND: pre- and postnatal development.

**정답:** C

**해설**
- C: **FEED**(생식능·초기 배아 발생), **EFD**(배아-태자 발생), **PPND**(출생 전후 발생)다.
- A: 세 약어가 모두 잘못 풀렸다.
- B: EFD와 PPND가 잘못 풀렸다.
- D: FEED가 잘못 풀렸다.

---

### Q38 [R][Domain I] — EFD species
Which species are typically used for embryo-fetal development studies under ICH S5(R3)?

A. A rodent and a rabbit, giving two species for this study type.
B. A rodent and a non-human primate, giving two relevant species.
C. A rodent alone, as for the fertility and pre-/postnatal studies.
D. A rabbit and a dog, giving a non-rodent pair for this study type.

**정답:** A

**해설**
- A: EFD는 **설치류 + 토끼** 두 종이다.
- B: 교과서의 EFD 두 번째 종은 토끼다.
- C: 설치류 한 종은 FEED·PPND 쪽이다.
- D: 개는 EFD의 일반 종이 아니다. 설치류가 빠졌다.

---

### Q39 [R][Domain I] — what S5(R3) (2020) changed
Which statement about ICH S5(R3) (2020) matches the textbook?

A. It splits development into stages A to F and permits alternative and exposure-based designs.
B. It drops the rabbit and makes a rodent EFD study sufficient for every small molecule.
C. It merges FEED, EFD and PPND into a single combined study that every sponsor must run.
D. It replaces in vivo studies with in vitro assays, with animal work kept for positives.

**정답:** A

**해설**
- A: S5(R3)(2020)은 생식·발생을 **단계 A~F**로 나누고 **대안 접근·노출 기반 설계**를 허용한다.
- B: EFD는 설치류 + 토끼다.
- C: 하나의 통합 시험을 의무화하지 않는다.
- D: 대안 접근을 허용할 뿐 생체 시험을 체외 시험으로 대체하는 구조로 서술되지 않는다.

---

### Q40 [A][Domain I] — one-species EFD plan
A team proposes to support WOCBP enrolment with a definitive EFD study in rats alone, reasoning that the fertility and pre-/postnatal studies also use rodents. What is the gap?

A. Nothing is missing, because S5(R3) accepts one rodent species for every study type.
B. The rat EFD study must be repeated in mice so that two rodent strains are tested.
C. A second EFD species, typically the rabbit, is expected alongside the rodent.
D. The EFD study should be run in a dog, because a non-rodent is needed for each stage.

**정답:** C

**해설**
- C: EFD는 **설치류 + 토끼** 두 종이 일반적이다. FEED·PPND가 설치류 한 종이라고 EFD도 한 종이 되지 않는다.
- A: EFD는 두 종이다.
- B: 두 번째 종은 다른 설치류가 아니라 토끼다.
- D: 두 번째 종은 개가 아니라 토끼다.

---

### Q41 [A][Domain I] — men in Phase 1/2
A sponsor wants to enrol men in Phase 1 and Phase 2 trials before any dedicated male fertility study. What does ICH M3(R2) §11 allow?

A. Men may enrol if they agree to contraception, which replaces the fertility study.
B. Men may enrol; repeat-dose histopathology covers this, with the study before Phase 3.
C. Enrolment is deferred until a male fertility study is complete, as for women.
D. Men may enrol in Phase 1, but Phase 2 requires the male fertility study to be completed first.

**정답:** B

**해설**
- B: 반복투여 독성시험의 **고환·부고환 조직병리와 정자 평가**가 포착하므로 Phase 1/2 남성 참여에 별도 생식능 시험이 필요 없고, **Phase 3 전**에 완료한다.
- A: 근거는 피임이 아니라 반복투여 독성의 생식기 평가다.
- C: 남성은 Phase 1/2에 별도 시험 없이 참여할 수 있다.
- D: Phase 2도 별도 시험 없이 가능하다. 완료 시점은 Phase 3 전이다.

---

### Q42 [An][Domain IV] — why the sexes differ
Why does ICH M3(R2) let men join early trials before a dedicated fertility study while gating women of childbearing potential (WOCBP) more strictly?

A. Male reproductive toxicity is rare, so studies in men add little information at any stage.
B. Male exposure does not directly create embryo risk; WOCBP exposure can mean fetal exposure.
C. Women are more sensitive to drug toxicity, so every study must precede their first dose.
D. Male fertility studies take longer to run, so regulators accept them later for practical reasons.

**정답:** B

**해설**
- B: 남성 노출은 **배아 위험을 직접 만들지 않고** 반복투여 독성이 생식기를 평가한다. WOCBP는 **임신 가능성 = 배아-태자 노출**이라 EFD 데이터 없이는 위험을 통제할 수 없다.
- A: 남성 생식독성이 드물다는 것은 근거가 아니다. 남성 생식능 시험도 Phase 3 전에 완료한다.
- C: 감수성 차이는 교과서가 든 이유가 아니다. 여성 생식능 시험도 Phase 3 전이다.
- D: 시험 기간은 교과서가 든 이유가 아니다.

---

### Q43 [A][Domain I] — US Phase 2 with WOCBP
A US-only sponsor wants to enrol WOCBP in a Phase 2 trial before definitive EFD studies are done. The protocol includes pregnancy testing and highly effective contraception. What does ICH M3(R2) permit in the United States?

A. Nothing until definitive EFD studies in two species are complete, as in the EU and Japan.
B. EFD assessment can be deferred until the marketing application, together with the PPND study.
C. Enrolment is permitted, provided the female fertility study is complete before dosing starts.
D. EFD assessment can be deferred until before Phase 3, given the pregnancy-prevention measures.

**정답:** D

**해설**
- D: **미국**은 피임 조치(임신검사·고효율 피임) 하에 EFD 평가를 **Phase 3 전**까지 미룰 수 있다.
- A: 그것은 EU·일본의 원칙이다(공통 예외 제외).
- B: PPND가 시판 신청 전이다. EFD는 Phase 3 전이 한계다.
- C: 여성 생식능 시험의 시한은 Phase 3 전이다. EFD 요건을 대신하지 않는다.

---

### Q44 [A][Domain IV] — global Phase 2 with WOCBP
A sponsor will run one Phase 2 trial in the US, the EU and Japan, enrolling WOCBP for 6 months. Only a rat EFD range-finding study exists. What is the safest nonclinical plan?

A. Rely on the 150-WOCBP exception, since range-finding data in one species suffices.
B. Complete the PPND study first, since it covers the embryo-fetal period as well.
C. Rely on the US deferral, since a global protocol follows the most flexible ICH region.
D. Complete definitive EFD before WOCBP exposure, meeting the EU and Japan requirement.

**정답:** D

**해설**
- D: EU·일본은 공통 예외가 아니면 WOCBP 노출 **전에 definitive EFD 완료**다. 글로벌 Phase 2면 EU·일본 요건에 맞춰 **EFD를 먼저 끝내는 게 안전**하다.
- A: 공통 예외는 **두 종 예비 EFD**와 **최대 3개월** 조건이다. 한 종·6개월이라 맞지 않는다.
- B: PPND는 시판 신청 전 시험이다. EFD를 대신하지 않는다.
- C: 미국 연기 규정은 EU·일본에 적용되지 않는다.

---

### Q45 [A][Domain I] — the all-region exception in the EU
An EU sponsor has preliminary EFD data in two species and will enrol fewer than 150 WOCBP, using pregnancy-prevention measures, in a 3-month trial before definitive reproduction toxicity testing. Is this consistent with ICH M3(R2)?

A. Yes — up to 150 WOCBP for up to 3 months is allowed in all ICH regions under these conditions.
B. Yes, but the trial must also wait for the PPND study, which the exception requires.
C. No — the exception applies in the United States, since only FDA accepts preliminary EFD data from two species.
D. No — in the EU, definitive EFD must precede any WOCBP exposure without exception.

**정답:** A

**해설**
- A: **모든 ICH 지역 공통 예외**: 두 종 **예비 EFD** + 피임 조치면 **WOCBP 최대 150명·최대 3개월** 투여를 definitive 시험 전에 할 수 있다.
- B: PPND는 시판 신청 전 요건이다. 이 예외의 조건이 아니다.
- C: 이 예외는 미국 한정이 아니라 ICH 공통이다.
- D: EU·일본의 "노출 전 완료"는 이 공통 예외 밖의 원칙이다.

---

### Q46 [R][Domain I] — conditions of the exception
Which conditions define the M3(R2) exception that lets WOCBP receive investigational treatment before definitive reproduction toxicity testing in all ICH regions?

A. Definitive EFD data in the rat, pregnancy prevention, up to 300 WOCBP and up to 3 months.
B. Preliminary EFD data in two species, pregnancy prevention, up to 150 WOCBP and up to 3 months.
C. Preliminary FEED data in two species, contraception, up to 150 WOCBP and up to 12 months.
D. Preliminary EFD data in one species, pregnancy testing, up to 150 WOCBP and up to 6 months.

**정답:** B

**해설**
- B: 조건은 **두 종 예비 EFD + 피임 조치**, **최대 150명**, **최대 3개월**이다.
- A: 인원 숫자가 틀렸고, 예외는 예비 데이터를 전제로 한다.
- C: 예비 데이터는 FEED가 아니라 EFD이고 기간은 3개월이다.
- D: 한 종·6개월이 틀렸다.

---

### Q47 [An][Domain IV] — when the exception runs out
A sponsor with preliminary EFD data in two species plans a 6-month trial in WOCBP with pregnancy-prevention measures, at sites in the US and the EU. Definitive EFD studies are not yet done. Which assessment is correct?

A. The EU sites may proceed, but US sites need definitive EFD first, as FDA rejects deferral.
B. The trial fits the all-region exception at both sites, since preliminary data exist in two species.
C. The trial exceeds 3 months, so EU sites need definitive EFD first; US sites may defer to Phase 3.
D. The trial is blocked at both sites, since the US deferral applies only to Phase 1 trials.

**정답:** C

**해설**
- C: 공통 예외는 **최대 3개월**이므로 6개월 시험엔 안 맞는다. 그러면 EU는 노출 전 **definitive EFD 완료**, 미국은 피임 조치 하에 **Phase 3 전**까지 연기할 수 있다.
- A: 지역이 뒤바뀌었다.
- B: 예외의 기간 조건(3개월)을 넘는다.
- D: 미국 연기는 Phase 3 전까지다. Phase 1 한정이 아니다.

---

### Q48 [R][Domain I] — female fertility timing
By when must female fertility studies be completed under ICH M3(R2)?

A. Before WOCBP enter Phase 3, in every ICH region.
B. Before WOCBP are first dosed in Phase 1, in every ICH region.
C. Before the marketing application, together with the PPND study.
D. Before Phase 3 in the US, but before Phase 1 in the EU and Japan.

**정답:** A

**해설**
- A: **여성 생식능(FEED)**은 모든 ICH 지역에서 WOCBP의 **Phase 3 참여 전**이다.
- B: Phase 1 전이 아니다.
- C: 시판 신청 전은 PPND다.
- D: 지역차는 EFD 타이밍 얘기다. 여성 생식능은 지역 공통이다.

---

### Q49 [A][Domain V] — PPND timing
A development plan schedules the pre- and postnatal development (PPND) study to finish one year after approval, "since no pregnant women are in the trials." What does ICH M3(R2) require?

A. Completion before men enter Phase 3 trials.
B. Completion before WOCBP enter Phase 2 trials.
C. Completion before the marketing application.
D. Completion as a post-approval commitment.

**정답:** C

**해설**
- C: **PPND**는 **시판 허가 신청 전**에 완료한다.
- A: 남성 Phase 3 전에 완료하는 것은 남성 생식능 시험이다.
- B: Phase 2 WOCBP 노출과 연결된 것은 EFD다.
- D: 시판 후 약속이 아니라 신청 전 요건이다.

---

### Q50 [A][Domain V] — sequencing the DART package
Which sequence fits ICH M3(R2) §11 for a chronic-use small molecule developed in the US, EU and Japan, with WOCBP enrolled from Phase 2 for longer than 3 months?

A. Definitive EFD before Phase 2 WOCBP dosing; female fertility before Phase 3; PPND before the marketing application.
B. Definitive EFD before Phase 3; female fertility before the marketing application; PPND after approval.
C. PPND before Phase 2 WOCBP dosing; definitive EFD before Phase 3; female fertility before approval.
D. Female fertility before Phase 1; definitive EFD before Phase 3; PPND before the end-of-Phase 2 meeting.

**정답:** A

**해설**
- A: 3개월을 넘는 WOCBP 노출이라 공통 예외가 안 맞으므로 EU·일본 기준으로 **노출 전 definitive EFD**, **여성 생식능은 Phase 3 전**, **PPND는 시판 신청 전**이다.
- B: Phase 3 전 EFD 연기는 미국 규정이다. 여성 생식능·PPND 시한도 틀렸다.
- C: PPND를 앞에 두고 EFD를 미뤄 순서가 뒤집혔다.
- D: 여성 생식능 시한은 Phase 3 전이고, EU·일본은 EFD를 Phase 3 전까지 미룰 수 없다.

---

### Q51 [A][Domain III] — pregnant women in Phase 3
The clinical team proposes enrolling pregnant women in a Phase 3 trial for a chronic condition, citing ICH E21 as the governing standard. What should regulatory affairs advise?

A. Proceed once EFD in two species is done, since FEED and PPND address other stages.
B. Proceed if the PLLR 8.1 section is drafted, since labeling covers the nonclinical gap.
C. Proceed under E21, since it is the final ICH standard for clinical trials enrolling pregnant women.
D. Complete full DART first; E21 is a 2025 draft, and a pregnancy registry/PASS is the usual route.

**정답:** D

**해설**
- D: 임신부 등록에는 **완전한 DART(FEED·EFD 두 종·PPND)**가 선행돼야 한다. ICH **E21**은 **2025 초안**이라 준수 근거가 아니고, 보통 **pregnancy registry/PASS**로 간다.
- A: FEED·PPND까지 포함한 완전한 DART가 필요하다.
- B: 라벨 서술은 비임상 요건을 대신하지 않는다.
- C: E21은 최종 기준이 아니라 초안이다.

---

### Q52 [A][Domain III] — correcting a timing slide
A colleague's slide on ICH M3(R2) §11 contains four statements. Which one must be corrected?

A. Men can join Phase 1/2 trials before a dedicated male fertility study is completed.
B. In the US, EFD can be deferred until before Phase 3 when pregnancy-prevention measures are used.
C. In the EU and Japan, EFD can be deferred until before Phase 3 when contraception is used.
D. Female fertility studies are completed before WOCBP enter Phase 3 in every ICH region.

**정답:** C

**해설**
- C: 고쳐야 할 진술이다. Phase 3 전 연기는 **미국** 규정이다. EU·일본은 공통 예외(두 종 예비 EFD·150명·3개월) 외에는 WOCBP 노출 **전에 definitive EFD 완료**다.
- A: 맞다. 반복투여 독성의 생식기 평가가 포착한다.
- B: 맞다. 미국은 피임 조치 하에 Phase 3 전까지 연기할 수 있다.
- D: 맞다. 여성 생식능은 지역 공통으로 Phase 3 전이다.

---

### Q53 [R][Domain II] — PLLR dates
When was the FDA Pregnancy and Lactation Labeling Rule (PLLR) published, and when did it take effect?

A. Published 2015-06-30; effective 2014-12-03.
B. Published 2014-12-03; effective 2015-06-30.
C. Published 2014-12-03; effective the same day.
D. Published 2013-12-03; effective 2014-06-30.

**정답:** B

**해설**
- B: PLLR은 **2014-12-03 공포, 2015-06-30 시행**이다.
- A: 두 날짜가 뒤바뀌었다.
- C: 공포일과 시행일이 다르다.
- D: 연도가 하나씩 당겨졌다.

---

### Q54 [R][Domain II] — PLLR subsections
Under the PLLR, which subsections replace the former pregnancy, labor and delivery, and nursing mothers content in Section 8?

A. 8.1 Pregnancy Category, 8.2 Lactation, 8.3 Pediatric Use and Developmental Risk.
B. 8.1 Fertility, 8.2 Pregnancy, 8.3 Lactation and Nursing Mothers, as in the SmPC.
C. 8.1 Pregnancy, 8.2 Lactation, 8.3 Females and Males of Reproductive Potential.
D. 8.1 Pregnancy, 8.2 Labor and Delivery, 8.3 Contraception and Pregnancy Testing.

**정답:** C

**해설**
- C: PLLR의 Section 8은 **8.1 Pregnancy / 8.2 Lactation / 8.3 Females and Males of Reproductive Potential**이다.
- A: 범주(Category)는 폐지됐고 8.3 명칭이 틀렸다.
- B: SmPC 구조와 섞였다. EU는 4.6 한 절이다.
- D: 8.2는 Lactation이고 8.3 명칭이 틀렸다.

---

### Q55 [A][Domain II] — legacy "Category C" and an efficacy supplement
A legacy label still shows "Pregnancy Category C." The sponsor is preparing an efficacy supplement for a new indication. What labeling action is required?

A. Keep the category until the next annual report, then convert Section 8 to PLLR format.
B. Add the new indication and leave Section 8 alone, since PLLR applies to new NDAs.
C. Keep "Category C" alongside new 8.1 text, since human data are not yet available.
D. Submit a full PLLR-format label with the supplement, removing the category letter.

**정답:** D

**해설**
- D: efficacy supplement는 **PLR/PLLR 전환 트리거**라 그 sNDA에 **PLLR 형식 전체 라벨**을 함께 내고 **문자 범주를 제거**한다(21 CFR 201.57(c)(9)).
- A: 연차보고로 미루는 경로가 아니라 이번 보충에서 전환한다.
- B: 기존 라벨도 efficacy supplement가 전환 트리거다.
- C: 데이터가 없으면 "no data" 서술로 쓰되 범주 문자는 남길 수 없다.

---

### Q56 [A][Domain II] — little human pregnancy data
During PLLR conversion, the team notes there are essentially no human pregnancy data. How should 8.1 be written?

A. Copy the EU SmPC 4.6 wording, since FDA accepts it in place of 8.1 text.
B. Leave 8.1 blank until a pregnancy registry produces human outcome data.
C. State the absence of human data in narrative form, without a category letter.
D. Retain "Category C" as the most accurate summary when human pregnancy data are lacking.

**정답:** C

**해설**
- C: 데이터가 없으면 **"no data" 서술**로 쓰고 **범주 문자는 쓰지 못한다**.
- A: SmPC 4.6 문구로 8.1을 대신하는 규정은 없다.
- B: 8.1은 서술형으로 채운다. 비워 두는 규칙이 아니다.
- D: 문자 범주는 폐지됐다.

---

### Q57 [R][Domain II] — SmPC sections
In an EU SmPC, where do recommendations on use in pregnancy and the summary of animal reproductive findings appear?

A. Use recommendations in 5.3; animal findings in 4.6.
B. Use recommendations in 4.6; animal findings in 5.3.
C. Use recommendations in 4.6; animal findings in 4.8.
D. Use recommendations in 4.4; animal findings in 5.1.

**정답:** B

**해설**
- B: **SmPC 4.6**(Fertility, pregnancy and lactation)에 사용 권고, **5.3**(Preclinical safety data)에 동물 소견 요약이다.
- A: 두 절이 뒤바뀌었다.
- C: 동물 소견 요약은 5.3이다.
- D: 4.6·5.3이 정답 절이다.

---

### Q58 [A][Domain II] — translating animal data into SmPC wording
An EU labeling writer asks which document sets the rules for turning animal reproductive data into the pregnancy statement of the SmPC. What should you point to?

A. The EMA 2008 guideline on risk assessment on human reproduction and lactation, from data to labelling.
B. The FDA PLLR, which the EMA adopted for SmPC section 4.6 once the US rule took effect in 2015 for new labels.
C. ICH E21, which sets labeling wording for pregnancy and lactation across ICH regions.
D. ICH S5(R3), whose stage A to F results map directly onto standard SmPC phrases.

**정답:** A

**해설**
- A: 동물 데이터를 문구로 옮기는 규칙은 EMA **Guideline on risk assessment of medicinal products on human reproduction and lactation: from data to labelling**(2008)이다.
- B: PLLR은 미국 규정이다.
- C: E21은 2025 초안이고 라벨 문구 기준이 아니다.
- D: S5(R3)는 시험 설계 가이드라인이다. 라벨 문구 규칙이 아니다.

---

### Q59 [An][Domain II] — one finding, two labels
A rabbit EFD study shows malformations at exposures near the clinical level. Where will this finding and its consequences appear in the US label and the EU SmPC?

A. US: Section 13 nonclinical toxicology alone; EU: 4.6 alone, since 5.3 covers carcinogenicity findings.
B. US: a "Category D" statement in 8.1; EU: a warning in 4.4 with no other placement.
C. US: narrative in 8.1 (risk summary, clinical considerations, data); EU: 4.6 advice plus 5.3 summary.
D. US: 8.2 Lactation, since animal data go there; EU: 5.3 alone, since 4.6 covers human data.

**정답:** C

**해설**
- C: 미국은 PLLR **8.1 Pregnancy** 서술형(위험 요약·임상 고려·데이터)으로, EU는 **4.6**에 사용 권고, **5.3**에 동물 소견 요약으로 쓴다.
- A: 미국은 8.1 서술에 반영하고, EU 5.3은 비임상 안전성 전반이다.
- B: 문자 범주는 폐지됐고, EU는 4.6·5.3에 쓴다.
- D: 8.2는 수유다. EU 4.6에도 사용 권고가 들어간다.

---

### Q60 [A][Domain III] — what an 8.1 narrative contains
A medical writer drafting PLLR section 8.1 asks what elements the narrative format is built on. What is the correct answer?

A. A risk summary, clinical considerations and data.
B. Animal findings alone, with human data moved to Section 14.
C. A letter category, a short rationale and a reference to the animal data.
D. A boxed warning, a contraindication and a dosing table.

**정답:** A

**해설**
- A: PLLR 서술형은 **위험 요약·임상 고려·데이터**로 구성된다.
- B: 8.1은 사람·동물 데이터를 함께 서술한다. Section 14로 옮기는 규칙은 없다.
- C: 문자 범주는 폐지됐다.
- D: 이는 8.1 서술의 구성 요소가 아니다.

---

### Q61 [A][Domain IV] — neonatal MSC-EV product
An MSC-EV product is being developed for a chronic lung disease of newborns. How does the textbook frame the DART and follow-up questions for this programme?

A. Developmental follow-up is covered by the PPND study, so post-approval tracking is unnecessary.
B. WOCBP timing is the main gating issue, so definitive EFD in two species must precede the first neonatal dose.
C. A full DART package is required before neonatal dosing, as for enrolling pregnant women.
D. WOCBP rules are not directly engaged; long-term developmental follow-up flows into a post-approval registry.

**정답:** D

**해설**
- D: 신생아 대상이라 **WOCBP 논점이 직접 걸리지 않지만**, 부모 보고 결과·**장기 발달 추적**이 승인 후 의무(**레지스트리**)로 이어진다.
- A: 교과서는 장기 발달 추적을 승인 후 레지스트리로 연결한다.
- B: 대상이 신생아라 WOCBP 노출 문제가 중심이 아니다.
- C: 완전한 DART 선행은 임신부 등록의 요건이다.

---

### Q62 [An][Domain I] — three exceptions compared
Which pairing correctly matches each product type with how the textbook says carcinogenicity is handled?

A. Advanced-cancer drug: transgenic mouse alone; antibody: S9 exemption; cell product: 2-year rat study with biodistribution added.
B. Advanced-cancer drug: mechanism-based (S6(R1)); antibody: generally not needed (S9); cell product: 2-year mouse.
C. Advanced-cancer drug: S1B(R1) waiver; antibody: 2-year rat; cell product: S9 exemption.
D. Advanced-cancer drug: generally not needed (S9); antibody: mechanism-based (S6(R1)); cell product: tumorigenicity assessment.

**정답:** D

**해설**
- D: 진행성 암 항암제는 **S9로 일반적으로 불요**, 항체는 **S6(R1) 기전 기반 평가**, 세포·EV 제품은 **종양원성 평가**(생체분포·지속성 포함)다.
- A: 항체는 S9 대상이 아니고 세포 제품에 2년 랫은 부적절하다.
- B: S9와 S6(R1)이 뒤바뀌었다.
- C: 세 제품의 근거가 모두 틀렸다.

---

### Q63 [A][Domain III] — review of a team briefing
A briefing note for the project team makes four statements. Which one is correct?

A. PLLR took effect on 2014-12-03, and letter categories may stay on legacy labels.
B. S1C(R2) allows 1,500 mg/kg/day as a limit dose when MRHD is at most 500 mg/day.
C. In the EU, EFD can be deferred until before Phase 3 for WOCBP using contraception.
D. S9 waives carcinogenicity studies for anticancer drugs in early-stage and adjuvant use.

**정답:** B

**해설**
- B: 맞다. S1C(R2) 한계용량 **1,500 mg/kg/day**, 조건 **MRHD ≤500 mg/day**다.
- A: 2014-12-03은 공포일이고 시행은 2015-06-30이다. 문자 범주는 폐지됐고 efficacy supplement 때 제거해야 한다.
- C: Phase 3 전 연기는 미국 규정이다.
- D: S9 면제는 진행성 암 환자 대상이다. 초기 암·보조요법은 S1A/S1B(R1)로 돌아간다.

---

### Q64 [An][Domain V] — integrated nonclinical plan
A chronic-use small molecule (daily use for years) will be developed in the US, the EU and Japan, with WOCBP from a 6-month Phase 2 trial onward. Which integrated plan meets the textbook's timing rules?

A. Carcinogenicity before the marketing application; definitive EFD before Phase 2 WOCBP dosing; female fertility before Phase 3; PPND before filing.
B. Carcinogenicity after approval as a commitment; definitive EFD before Phase 2; female fertility and PPND before Phase 3.
C. Carcinogenicity before the marketing application; preliminary EFD only before Phase 2; female fertility and PPND after approval.
D. Carcinogenicity before Phase 2 dosing begins; definitive EFD before Phase 3; female fertility and PPND both before the marketing application is filed.

**정답:** A

**해설**
- A: 발암성은 우려가 없으면 **시판 신청 전**, 6개월 WOCBP 노출은 공통 예외(3개월)를 넘으므로 EU·일본 기준 **노출 전 definitive EFD**, **여성 생식능은 Phase 3 전**, **PPND는 시판 신청 전**이다.
- B: 발암성 기본 시기는 신청 전이고, PPND는 신청 전이다.
- C: 예비 EFD만으로는 3개월을 넘는 노출을 지지하지 못하고, 여성 생식능·PPND 시한이 틀렸다.
- D: 우려가 없으면 발암성을 Phase 2 전에 끝낼 필요가 없고, EU·일본은 EFD를 Phase 3 전으로 미룰 수 없다.

---
