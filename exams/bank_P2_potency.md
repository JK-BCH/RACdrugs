# 문제은행 — P2 Potency(역가): 610.10 · 2011 guidance · 2023 초안 · ICH Q6B/Q2(R2)/Q14 · EU · CAR-T/AAV/MSC-EV

> **근거:** `textbook/P2_potency.md` + `cards/P2_potency.md` 검증 메모(21 CFR 600.3(s)·610.9·610.10·610.12–610.14·211.165·600.14·601.12, FD&C 501(a)(2)(B), FDA Potency Tests 2011(기준일 현행 최종)·Potency Assurance 초안 2023-12(최종 2026-11-02 = 기준일 이후), CBER CMC 유연성 성명 2026-01-11, ICH Q6B·Q2(R2)·Q14·Q5E·Q1, USP <1032>–<1034>, Ph. Eur. 일반장, EMA 세포 기반 2008·GTMP 2018·EMA/CAT/22473/2025, FDA CAR T 2024-01, ISCT 2006/2016, MISEV2023). EU 변경 코드 번호는 2026-01-15 신지침 번호가 확인 필요라 정답 키로 쓰지 않고 분류 원칙(완화 = Type II)만 묻는다. 새 숫자 없음.
> **형식:** 영문 시나리오 → 영문 선지 A~D → 정답 → 한국어 해설. 태그 `[R]/[A]/[An]` + Domain.
> **작성:** 2026-11-28. 64문항.

---

### Q01 [R][Domain I] — 600.3(s) definition
Under 21 CFR 600.3(s), potency is the specific ability or capacity of the product to effect a given result. How may that ability be indicated?

A. By identity testing on the final container, confirming the product is what the label states.
B. By nonclinical pharmacology studies submitted in the IND, which then serve as the release test.
C. By appropriate laboratory tests or adequately controlled clinical data from use as intended.
D. By the quantity of active ingredient per dose, expressed as content against a chemical standard.

**정답:** C

**해설**
- C: 600.3(s)는 역가를 **appropriate laboratory tests** 또는 의도된 방식으로 투여해 얻은 **adequately controlled clinical data**로 지시되는 능력으로 정의한다. 임상 효과와 연결된 생물학적 능력이다.
- A: 라벨 그대로임을 구별하는 것은 identity(610.14)다.
- B: IND 비임상 약리 자료는 출하 시험이 아니다. 정의에도 없다.
- D: 역가는 함량이 아니다. 생물학적 능력이다.

---

### Q02 [R][Domain I] — 610.10 requirement
What does 21 CFR 610.10 require of the potency test for a licensed biologic?

A. Any tests the manufacturer selects for release, provided identity and sterility tests are also performed.
B. A single standardised cell-based assay shared across a product class so lots can be compared.
C. Tests in vitro or in vivo, or both, specifically designed for each product to indicate its potency.
D. A compendial animal bioassay, with in vitro methods allowed once FDA grants a waiver.

**정답:** C

**해설**
- C: 610.10은 역가 시험을 **in vitro 또는 in vivo(또는 둘 다)** 로, **각 제품에 특별히 설계**해 역가를 지시하도록 요구한다.
- A: identity·sterility 시험은 별개 요건(610.14·610.12)이고 역가 시험을 대신하지 않는다.
- B: 제품별 설계가 요건이다. 제품군 공용 시험이 아니다.
- D: in vitro 시험도 610.10이 직접 허용한다. 면제 요건은 없다.

---

### Q03 [R][Domain II] — 610.9 alternative method
A manufacturer wants to replace the potency method described in its approved application with a faster method. Which provision allows a different method, and on what condition?

A. 211.194, provided the laboratory records describe the new method in full.
B. 610.9, provided equivalence to the method it replaces is demonstrated.
C. 600.3(s), provided the new method is supported by controlled clinical data.
D. 610.13, provided the new method also measures residual process reagents.

**정답:** B

**해설**
- B: **610.9**는 동등성을 입증하면 다른 방법으로 대체할 수 있게 한다.
- A: 211.194는 실험실 기록 조항이다. 방법 대체 근거가 아니다.
- C: 600.3(s)는 역가의 정의다. 방법 대체 규정이 아니다.
- D: 610.13은 purity 조항이다.

---

### Q04 [A][Domain III] — release without potency test
During a quality review, the head of manufacturing proposes releasing a licensed cell therapy lot on identity, viability and sterility results while the potency assay is being repaired. The legal team asks for the regulatory consequence. What should regulatory affairs advise?

A. Release without a potency test renders the product adulterated under FD&C 501(a)(2)(B).
B. Acceptable because viability is a recognised surrogate for potency under the 2011 guidance.
C. Acceptable if the lot is labelled as released under a deviation and the potency result is filed later.
D. A minor CGMP deviation, handled in the annual report as having low product-quality impact.

**정답:** A

**해설**
- A: 역가 시험 없이 또는 규격 미충족 상태로 출하하면 **501(a)(2)(B) adulterated**다. 211.165(a) 출하 시험 위반도 겹치고 483·WL·BPDR·리콜로 이어진다.
- B: 대리 분석은 생물 활성과의 상관이 데이터로 입증될 때만 쓴다. 생존율은 purity 항목이다.
- C: 사후 제출로 출하 시험 요건을 채울 수 없다.
- D: 610.10 요건 미충족이므로 연차 보고로 처리할 사안이 아니다.

---

### Q05 [A][Domain IV] — IND without any potency measure
A sponsor submits a first-in-human IND for an autologous cell product. Module 3 lists identity, sterility and viability but states that potency will be developed before Phase 3. What risk does this create?

A. A request for a validated quantitative assay before the first subject is dosed.
B. None at Phase 1, since potency expectations under the 2011 guidance begin at Phase 2.
C. A clinical hold under 312.42, because the IND lacks any potency measurement.
D. A refuse-to-file decision on the BLA, while the IND itself may proceed unchanged.

**정답:** C

**해설**
- C: 2011 guidance는 **IND 초기부터 어떤 역가 측정**을 기대한다. 역가 측정 부재는 **312.42 clinical hold** 사유다.
- A: 검증된 정량 시험은 BLA 기대다. Phase 1엔 적격 반정량 시험이면 된다.
- B: Phase 1에도 정성·반정량 측정이 필요하다.
- D: 위험은 IND 단계에서 이미 생긴다.

---

### Q06 [R][Domain I] — ISCT 2006 markers
An MSC lot shows CD73, CD90 and CD105 at or above 95% and hematopoietic markers at or below 2%. Under 21 CFR 610, what does this result establish?

A. Identity, consistent with the ISCT 2006 minimal criteria for MSCs; it is not a potency result.
B. Sterility, because marker panels detect adventitious agents in the cell population.
C. Purity, because the negative markers set the level of non-MSC contaminants as the sole test.
D. Potency, because the markers define the cells that carry the immunomodulatory activity.

**정답:** A

**해설**
- A: ISCT 2006 마커(CD73·CD90·CD105 **≥95%**, 음성 **≤2%**)는 **identity(610.14)** 다. FDA·EMA는 "마커 통과 = 역가"를 인정하지 않는다.
- B: 마커는 무균·외래성 인자와 관계없다.
- C: 세포 조성은 purity 항목에 들지만 마커 패널의 규제상 역할은 정체성 확인이다.
- D: 역가는 기능(610.10)이다. 마커는 기능을 재지 않는다.

---

### Q07 [A][Domain III] — advising the development team on markers
An MSC development team for steroid-refractory GvHD plans its Phase 1 release panel. The scientists propose that passing the ISCT surface-marker panel be listed as the potency test, because the panel is validated and reproducible. How should regulatory affairs respond?

A. Agree, provided tri-lineage differentiation is added, since together they form the ISCT potency matrix.
B. Disagree, and replace the marker panel with an in vivo GvHD animal model as the release test.
C. Disagree; keep markers as identity and add a MOA-linked functional assay such as IFN-γ-stimulated IDO.
D. Agree for Phase 1, and switch to a functional assay once the product enters Phase 3.

**정답:** C

**해설**
- C: 마커는 정체성이다. Phase 1 역가는 **MOA 연결 기능 시험**(IFN-γ 자극 후 **IDO 활성/kynurenine** 또는 **PGE2**)을 반정량·적격 수준으로 둔다.
- A: 3계열 분화능은 특성화다. ISCT 2016 matrix는 면역조절·혈관신생·분비체 기능이다.
- B: 동물 모델은 윤리·재현성 문제가 있다. 교과서는 Phase 1에 in vitro 기능 시험을 제시한다.
- D: Phase 1에도 정체성 마커로 역가를 대신할 수 없다.

---

### Q08 [R][Domain I] — tri-lineage differentiation
How is MSC tri-lineage differentiation capacity usually classified in a release and characterisation package?

A. As a purity test, because it detects contaminating cell types that fail to differentiate.
B. As a sterility-related test, because differentiation cultures reveal microbial growth.
C. As the primary potency test, because differentiation is the defining biological function of mesenchymal stromal cells.
D. As characterisation tied to identity; it is not potency unless it reflects the mechanism of action.

**정답:** D

**해설**
- D: 3계열 분화능은 ISCT 2006 정체성 기준의 일부이고 **특성화**로 분류된다. MOA가 아니면 역가가 아니다.
- A: 오염 세포 비율 같은 세포 조성은 purity 항목이지만 분화능 시험의 역할은 아니다.
- B: 무균은 610.12 시험으로 따로 본다.
- C: GvHD 같은 적응증의 MOA는 면역조절이다. 분화가 MOA가 아니면 역가 시험이 될 수 없다.

---

### Q09 [R][Domain I] — purity category
Which group of tests falls under purity (21 CFR 610.13) for a cell therapy product?

A. IDO activity, PGE2 secretion and T-cell suppression co-culture.
B. Mycoplasma and adventitious virus testing with rapid sterility methods.
C. CD73, CD90 and CD105 expression with chain-of-identity checks.
D. Viability, residual medium and enzymes, beads and endotoxin.

**정답:** D

**해설**
- D: **610.13 purity**는 생존율, 잔류 배지·혈청·효소·비드, 엔도톡신, 세포 조성이다.
- A: 기능 시험이므로 역가(610.10, ISCT 2016 matrix)다.
- B: 무균(610.12)과 그에 딸린 안전 시험이다.
- C: 정체성(610.14) 항목이다.

---

### Q10 [R][Domain I] — surrogate assays under 2011 guidance
Under FDA's 2011 potency guidance, when can a non-biological surrogate assay such as flow phenotype or secreted protein serve as the potency test?

A. When its correlation with biological activity has been demonstrated with data.
B. When it is more precise than the biological assay, whatever its link to activity.
C. When the product is autologous and too short-lived for any biological assay.
D. When a compendial chapter describes the method and its acceptance criteria.

**정답:** A

**해설**
- A: 2011 guidance는 비생물학적 대리 분석을 허용하되 **생물 활성과의 상관 입증**을 필수로 한다.
- B: 정밀도만으로는 역가를 지시하지 못한다. 상관이 핵심이다.
- C: 자가 제품이라는 사정이 상관 입증을 면제하지 않는다.
- D: 약전 수재 여부는 대리 분석의 수용 조건이 아니다.

---

### Q11 [R][Domain I] — matrix approach
What does the matrix approach in FDA's 2011 potency guidance describe?

A. Combining complementary assays when one cannot capture potency, each with a defined role and criteria.
B. Testing one lot at several sites so that inter-laboratory variability can be averaged into one result.
C. Bracketing stability time points so that potency is tested at the first and last points.
D. Combining identity, purity, potency and sterility into one composite release score.

**정답:** A

**해설**
- A: 단일 시험으로 부족할 때(다중 MOA·복합 제품) **복수 보완 시험을 조합**한다. 각 시험의 역할과 합격 기준을 명시한다.
- B: 여러 사이트 시험은 matrix approach의 뜻이 아니다.
- C: 안정성 설계 용어와 혼동한 것이다.
- D: 네 범주는 규격표에서 따로 둔다. 합산 점수가 아니다.

---

### Q12 [R][Domain V] — phase-appropriate potency timeline
A regulatory project manager is building the CMC timeline for a cell therapy. Which sequence matches the phase-appropriate potency expectations of FDA's 2011 guidance?

A. Validated assay at IND; acceptance criteria at Phase 2; stability-indicating status at BLA.
B. Some measure at IND; quantitative by Phase 2; qualified with specifications pre-Phase 3; validated at BLA.
C. Qualitative assay through Phase 3; quantitative assay and validation within the BLA review clock.
D. Potency deferred past Phase 1; quantitative assay at Phase 2; validation after licensure as a postmarketing commitment.

**정답:** B

**해설**
- B: 단계별 기대는 **IND 어떤 측정 → Phase 2 정량 → Phase 3 전 적격·규격 → BLA 검증 + 합격 기준 + 안정성 지시**다.
- A: IND에 검증을 요구하지 않는다. 검증은 BLA 기대다.
- C: Phase 3 전에 적격·규격이 있어야 한다. 심사 중 개발은 늦다.
- D: Phase 1에도 어떤 측정은 필요하다. 검증을 승인 후로 미룰 수 없다.

---

### Q13 [R][Domain II] — what the BLA must contain
Which potency content does FDA expect in the BLA for a cell or gene therapy product?

A. A qualified semi-quantitative assay reported as "report result", with criteria set post-approval.
B. Characterisation data from several assays, with release based on identity and viability.
C. A validated assay, with stability claims supported by viability rather than by potency data.
D. A validated quantitative assay with acceptance criteria, shown to be stability-indicating over shelf life.

**정답:** D

**해설**
- D: BLA에는 **검증된(Q2) 정량 시험 + 합격 기준 + 안정성 지시**가 들어간다.
- A: 보고값·넓은 임시 기준은 Phase 1 수준이다.
- B: 특성화는 출하가 아니다. 정체성·생존율이 역가를 대신하지 않는다.
- C: 역가는 핵심 안정성 속성이다. 생존율로 대신하지 않는다.

---

### Q14 [An][Domain I] — why single bioassays fail
Which of the following is NOT a valid reason for a single bioassay often failing as the potency test for a cellular product?

A. A multi-day assay may not finish before a short shelf life ends and the product is used.
B. Multiple mechanisms of action mean one assay cannot represent the full activity.
C. ICH Q2(R2) excludes biological assays, so a bioassay cannot be validated for a BLA submission.
D. Responder-cell donor variability drives assay CV toward 20–30%, destabilising OOS calls.

**정답:** C

**해설**
- C: 사실이 아니다. **Q2(R2)는 생물 시험을 포함**해 상대 역가·평행성 검증을 다룬다.
- A: 수일 소요 시험과 짧은 유효기간의 충돌도 교과서가 드는 이유다.
- B: 다중 MOA는 교과서가 드는 첫 이유다.
- D: 공배양 반응 세포 공여자 변동으로 **CV 20–30%** 가 나와 합격 기준·OOS 판정이 불안정해진다.

---

### Q15 [An][Domain IV] — where the surrogate breaks
After six months frozen storage, an MSC lot keeps its surface phenotype and secretes the same surrogate cytokine, but the T-cell suppression co-culture shows a clear loss of activity. What does this pattern reveal about the release strategy?

A. The phenotype result confirms potency, and the co-culture loss reflects responder-cell drift alone.
B. The surrogate misses the degradation mechanism, so it cannot stand alone as stability-indicating.
C. The lot remains within potency specification because the surrogate is the registered release test.
D. The co-culture assay is unreliable and should be dropped in favour of the stable surrogate.

**정답:** B

**해설**
- B: 교과서가 든 붕괴 지점이다. 대리지표가 **열화 기전을 놓치면**(표현형 유지·기능 소실) 안정성 지시 역할을 못 한다. 기능 시험을 남기고 상관을 다시 본다.
- A: 표현형은 정체성이다. 반응 세포 drift는 조사 대상이지 결론으로 단정할 수 없다.
- C: 대리 분석은 상관이 성립할 때만 역가를 지시한다. 여기서는 상관이 깨졌다.
- D: 열화를 잡은 쪽은 기능 시험이다. 감도 있는 시험을 버리는 것은 거꾸로다.

---

### Q16 [A][Domain IV] — surrogate after a process change
A sponsor licensed a matrix in which a secreted-protein surrogate stands in for a co-culture bioassay at release. It now changes the culture medium. What must accompany the change regarding the surrogate?

A. Nothing beyond routine release, because the surrogate was validated at licensure.
B. A switch to an in vivo assay, since in vitro surrogates lose validity after any process change.
C. A new identity marker panel, since medium changes affect phenotype rather than function.
D. Re-verification that the surrogate still correlates with biological activity after the change.

**정답:** D

**해설**
- D: 공정 변경 후 **상관 재검증 누락**은 matrix+대리지표가 깨지는 지점이다. 변경 후 상관을 다시 보여야 한다.
- A: 검증은 방법 성능이고, 대리-활성 상관은 공정 변경으로 달라질 수 있다.
- B: in vivo 전환 요건은 없다. 상관 재검증이 답이다.
- C: 정체성 마커는 역가 상관 문제를 풀지 못한다.

---
### Q17 [R][Domain I] — current guidance on the reference date
For an exam keyed to 1 September 2026, which document is the current final FDA guidance on potency testing for cellular and gene therapy products?

A. The November 2026 final "Potency Assurance" guidance, which replaces the 2011 text.
B. The 2011 "Potency Tests for Cellular and Gene Therapy Products".
C. The 2024 CAR T guidance, which superseded the general potency guidance across CGT product classes.
D. The December 2023 "Potency Assurance for Cellular and Gene Therapy Products".

**정답:** B

**해설**
- B: 2026-09-01 기준 **현행 최종은 2011 Potency Tests**다.
- A: Potency Assurance 최종은 2026-11-02로 **기준일 이후**라 시험 비적용이다.
- C: CAR T guidance는 제품군 특화 문서다. 일반 역가 guidance를 대체하지 않았다.
- D: 2023-12 문서는 **초안**이다.

---

### Q18 [R][Domain I] — status of Potency Assurance
On 1 September 2026, what is the regulatory status of FDA's "Potency Assurance for Cellular and Gene Therapy Products"?

A. A final rule codified in 21 CFR 610.10, binding on applicants from its effective date.
B. A draft guidance from December 2023; the 2011 guidance remains the current final text on that date.
C. A final guidance issued in December 2023 that already replaced the 2011 guidance.
D. A withdrawn proposal, replaced by the CBER CMC flexibility statement of January 2026.

**정답:** B

**해설**
- B: 기준일에 Potency Assurance는 **2023-12 초안**이고 현행 최종은 2011이다. 최종화는 기준일 이후라 답에 쓰지 않는다.
- A: guidance는 규정이 아니다. 610.10 조문은 별개다.
- C: 2023-12에 나온 것은 초안이다.
- D: 2026-01-11 성명은 승인 후 규격 재평가에 관한 것이고 초안을 철회하지 않았다.

---

### Q19 [An][Domain I] — 2011 vs 2023 concept
What is the central conceptual difference between the 2011 potency guidance and the December 2023 draft?

A. 2011 applies at licensure; 2023 removes potency expectations from the IND stage to reduce early burden.
B. 2011 asks which test meets 610.10; 2023 asks whether process, materials and tests together assure potency.
C. 2011 covers gene therapy products; 2023 extends the potency requirements to cellular products as well.
D. 2011 permits surrogate assays; 2023 requires an in vivo bioassay for each licensed product at release.

**정답:** B

**해설**
- B: 2011은 "어떤 **시험**이 610.10을 충족하나", 2023 초안은 "**전략**(공정+원료+시험)이 역가를 **보증**하나"다.
- A: 2023 초안도 단계별 성숙을 말한다. IND 기대를 없애지 않는다.
- C: 2011도 세포·유전자치료 제품 모두를 다룬다.
- D: 2023 초안은 matrix·대리 분석을 유지한다. in vivo 의무화는 없다.

---

### Q20 [R][Domain I] — order of the strategy
In the December 2023 draft, which order of steps builds a Potency Assurance Strategy?

A. Release assay → acceptance criteria → MOA understanding → QTPP → process controls → stability.
B. CQA → QTPP → release assay → process design → MOA.
C. MOA → release assay → CQA → QTPP → stability protocol.
D. QTPP → CQA → MOA understanding → combined controls → assay development and validation.

**정답:** D

**해설**
- D: **QTPP → CQA → MOA 이해 → 통제 조합**(공정 설계·원료·공정 중·출하) → 분석법 개발·검증(Q14·Q2(R2)) → 안정성·변경 관리다.
- A: 출하 시험부터 시작하는 것은 2023 초안이 벗어나려는 접근이다.
- B·C: QTPP가 출발점이고 CQA가 그 다음이다. 순서가 뒤섞였다.

---

### Q21 [A][Domain III] — elements of the control combination
A cross-functional team drafts a Potency Assurance Strategy for an autologous product. Which proposed element does NOT belong to the combination of controls described in the 2023 draft?

A. Manufacturing process design with defined parameters linked to potency.
B. Post-marketing clinical outcome tracking in place of the release potency assay.
C. In-process controls and tests that show lot-to-lot consistency during manufacture.
D. Control of starting materials such as donor cells, cell banks, vectors and media.

**정답:** B

**해설**
- B: 2023 초안의 통제 조합에는 **출하 역가 시험**이 들어 있다. 시판 후 임상 추적으로 출하 시험을 대신하는 요소는 없다.
- A: 제조 **공정 설계**(파라미터·QbD)는 통제 조합의 요소다.
- C: **공정 중 통제·시험**도 요소다.
- D: **원료·시작 물질 통제**(공여자·세포 은행·벡터·배지)도 요소다.

---

### Q22 [An][Domain IV] — drivers of the shift
Which factor most directly explains why release testing alone cannot assure potency for many autologous cell products?

A. Autologous products are exempt from 610.10, so FDA needed another basis for potency.
B. The 2011 guidance banned surrogate assays, leaving autologous products without a workable release option.
C. Cell-based assays cannot be validated, so their release data carry little regulatory weight.
D. Short shelf life means the product is often administered before a release result exists.

**정답:** D

**해설**
- D: **짧은 유효기간·자가 제품**은 출하 시험 결과 전에 투여되는 경우가 있어 시험만으로 보증할 수 없다. 2023 초안의 첫 동인이다.
- A: 자가 제품도 610.10 대상이다.
- B: 2011 guidance는 상관이 입증된 대리 분석을 허용한다.
- C: 세포 기반 시험도 Q2(R2)로 검증한다.

---

### Q23 [A][Domain IV] — answering on the reference date
A colleague preparing for the RAC exam writes: "FDA's current potency guidance is the 2026 Potency Assurance final, which replaced the 2011 document." The question asks for current FDA guidance. What is the better answer?

A. Current final guidance is the 2026 final, because finalisation dates are irrelevant when answering exams.
B. Current final guidance is the 2011 Potency Tests; the 2023-12 draft sets out FDA's direction.
C. There is not yet a final FDA potency guidance; 610.10 and ICH Q6B govern on that date.
D. Current final guidance is the 2023-12 Potency Assurance, finalised on issue in December 2023.

**정답:** B

**해설**
- B: '현행 guidance'를 물으면 **2011**, 'FDA 방향·초안'을 물으면 **2023-12 초안**이다. 2026-11-02 최종은 기준일 이후다.
- A: 기준일 이후 사건은 시험 비적용이다.
- C: 2011 guidance가 현행이다.
- D: 2023-12 문서는 초안으로 나왔다.

---

### Q24 [R][Domain II] — ICH Q6B on potency
Under ICH Q6B, how is potency for a biotechnological product normally expressed and supported?

A. As relative potency from a biological assay calibrated against primary and working references.
B. As absolute mass of active protein per vial, measured by a validated chromatographic assay.
C. As a pass/fail result from an animal bioassay, without a reference preparation.
D. As identity confirmed by peptide mapping, with activity inferred from the primary structure.

**정답:** A

**해설**
- A: Q6B는 역가를 **생물학적 시험**(동물·세포·생화학 — 리간드 결합·효소)으로 재고, **참조 물질**(1차·작업) 대비 **상대 역가**로 보고한다.
- B: 질량 함량은 역가가 아니다.
- C: 참조 물질 대비 상대 역가가 원칙이다.
- D: 구조로 활성을 추정하는 것은 Q6B의 역가 개념이 아니다.

---

### Q25 [R][Domain II] — what Q14 adds
Which concept is introduced by ICH Q14 for analytical procedure development and lifecycle?

A. Relative potency and parallelism as validation characteristics for biological potency assays.
B. Comparability of a product before and after a manufacturing process change.
C. The analytical target profile and a risk-based enhanced approach to lifecycle change.
D. Consolidated stability testing of biologics and ATMPs in a single guideline.

**정답:** C

**해설**
- C: **Q14**(2023-11)는 **ATP**, 위험 기반 **enhanced approach**(파라미터·robustness·설계 공간), established conditions에 따른 변경 관리를 다룬다.
- A: 상대 역가·평행성 검증은 **Q2(R2)** 다.
- B: 비교동등성은 **Q5E**다.
- D: 안정성 통합은 **Q1**(Step 4 2026-06)이다.

---

### Q26 [R][Domain II] — Q2(R2) bioassay characteristics
Which set of characteristics does ICH Q2(R2) address when validating a biological potency assay?

A. Relative potency, parallelism, accuracy, precision, specificity and range.
B. Identity, sterility, endotoxin and viability, with ranges set by Ph. Eur. 2.7.29.
C. Vector genome titre, infectious titre and full/empty capsid ratio for each lot.
D. Process capability, lot distribution and upper limits for the release specification.

**정답:** A

**해설**
- A: Q2(R2)는 생물 시험을 포함해 **상대 역가·평행성·정확도(회수)·정밀도·특이성·범위·선형(4PL)** 을 다룬다.
- B: 규격 범주와 약전 시험이 섞였다. 검증 특성이 아니다.
- C: AAV 역가 matrix 요소다.
- D: 합격 기준 설정 근거다. 검증 특성이 아니다.

---

### Q27 [R][Domain II] — USP bioassay chapters
Which pairing of USP chapter and scope is correct?

A. <1033> statistical analysis; <1032> validation of relative accuracy.
B. <1034> design and development; <1033> replacement of reference standards and drift trending.
C. <1032> validation of bioassays; <1034> design and development.
D. <1032> design and development; <1033> validation; <1034> analysis including parallelism.

**정답:** D

**해설**
- D: **<1032>** 설계·개발, **<1033>** 검증(상대 정확도·정밀도·범위), **<1034>** 통계 분석(평행성 검정·역가 추정)이다.
- A·B·C: 장 번호와 범위가 뒤바뀌었다. 참조 물질 교체만 다루는 장은 없다.

---

### Q28 [R][Domain I] — Ph. Eur. general chapters
Which Ph. Eur. general chapter is correctly matched to its subject?

A. 5.3 — gene transfer medicinal products.
B. 2.7.29 — nucleated cell count and viability.
C. 2.7.28 — flow cytometry for cell products.
D. 5.14 — statistical analysis of biological assays.

**정답:** B

**해설**
- B: **2.7.29**는 유핵 세포 수·생존율이다.
- A: 5.3은 생물 시험 통계다.
- C: 2.7.28은 조혈 CFU 분석이다. 유세포는 2.7.24다.
- D: 5.14는 유전자 전달 제품이다.

---

### Q29 [A][Domain II] — non-parallel curves
In a validated cell-based relative-potency assay, the test sample and reference are run on the same plate with a 4PL fit. The test curve's slope and asymptotes differ markedly from the reference. What is the correct handling?

A. Average the result with the next run, since one non-parallel run does not affect the lot.
B. Report relative potency from the EC50 ratio, since the midpoint is the defined endpoint.
C. Shift the reference curve to match the test curve and recalculate relative potency.
D. Do not report relative potency; failing the parallelism test means the comparison is not valid.

**정답:** D

**해설**
- D: 상대 역가는 시험과 참조 곡선의 **평행성**이 성립할 때만 의미가 있다(USP <1034>, Q2(R2)). 평행성 실패면 상대 역가를 보고하지 않고 조사한다.
- A: 평균으로 무효 결과를 덮을 수 없다.
- B: 평행성 없이 중간점 비율만 보고할 수 없다.
- C: 참조 곡선을 조작하는 것은 데이터 무결성 문제다.

---

### Q30 [A][Domain II] — demonstrating specificity
A sponsor validating a cytokine-suppression potency assay for an MSC product wants to show specificity. Which experiment best addresses it?

A. Running the assay on three analysts and two days to estimate intermediate precision.
B. Checking that a dilution series of the reference gives a linear response.
C. Showing that heat-inactivated product is distinguished from active product.
D. Testing samples at known potencies across the range to measure recovery.

**정답:** C

**해설**
- C: **특이성**은 비활성·**열변성 대조**를 활성 제품과 구별하는지로 본다.
- A: 분석자·일 변동은 정밀도(중간)다.
- B: 희석 선형은 선형성이다.
- D: 알려진 역가 샘플 회수는 상대 정확도다.

---

### Q31 [A][Domain II] — setting acceptance criteria
A sponsor proposes a BLA release potency range for a cell-based assay. Which basis is consistent with ICH Q6B and the 2011 guidance?

A. The assay's validated range, since any result the method can measure is acceptable.
B. A lower limit alone, because higher potency is expected to strengthen the clinical effect further.
C. A range copied from a licensed product with a similar mechanism to ease review.
D. Clinical lot distribution, process capability and stability change, with an upper limit too.

**정답:** D

**해설**
- D: 합격 기준은 **임상 로트 분포 + 공정 능력 + 안정성 변화**로 정하고 통계로 정당화한다. 과활성 안전을 위해 **상한**도 둔다.
- A: 검증 범위는 합격 기준을 포함해야 하지만 합격 기준 그 자체가 아니다.
- B: 상한도 필요하다.
- C: 규격은 제품 자체 데이터로 정당화한다.

---

### Q32 [A][Domain V] — reference standard tracker
A regulatory operations lead sets up a tracker for the potency reference programme. Which structure fits the two-tier reference model?

A. A working reference from each new lot, with the primary reference created at the BLA filing.
B. A primary reference bought from a compendial supplier, which removes the need for in-house reference material.
C. A sparingly used primary reference from a clinical lot, and a working reference calibrated against it.
D. A single commercial lot used daily until exhausted, then replaced by whichever released lot is next in the warehouse.

**정답:** C

**해설**
- C: **1차 참조**는 임상 대표 로트로 광범위 특성화하고 −80/LN2에 보관하며 소량만 쓴다. **작업 참조**는 1차 대비 보정(assigned potency)해 일상 시험에 쓴다.
- A: 1차 참조는 임상 로트에서 일찍 확보한다. 신청 시점에 만들면 늦다.
- B: 세포 제품은 사내 1차·작업 참조가 필요하다.
- D: 단일 로트 소진·교체는 교체 프로토콜과 drift 관리를 빠뜨린다.

---
### Q33 [A][Domain V] — reference replacement SOP
The QC group is drafting the SOP for replacing a working potency reference that is running low. Which element should the SOP contain?

A. Replacement after FDA approves a prior approval supplement for each new working reference lot.
B. Parallel runs of new and old material, assigned potency with uncertainty, and drift trending.
C. Immediate use of the new material once its identity test passes, to avoid testing gaps.
D. Assignment of 100% potency to the new material by definition, since each reference lot serves as its own standard.

**정답:** B

**해설**
- B: 교체 프로토콜은 **신·구 병행 시험(n회)**, **역가 할당·불확도**, **drift 추세**, 재적격 주기, 대량 분취·장기 안정성을 담는다.
- A: 교체는 사내 교체 프로토콜(병행 시험·역가 할당·drift 추세)로 관리하는 항목으로 설명된다. 작업 참조 로트마다 FDA 사전 승인을 받는 절차로 다루지 않는다.
- C: 정체성 통과만으로 역가 할당이 되지 않는다.
- D: 작업 참조는 1차 대비 보정해 역가를 할당한다. 정의로 정하지 않는다.

---

### Q34 [A][Domain II] — what goes into the stability protocol
A licensed MSC product uses a three-assay potency matrix at release. The stability group proposes testing every matrix assay at every stability time point. What is the recommended approach?

A. Test each matrix assay at each time point, since stability must mirror the release specification exactly.
B. Test the surrogate assay alone, since it is faster and has lower variability than the bioassay.
C. Test viability alone on stability, since potency is a release attribute rather than a stability attribute.
D. Select and justify the stability-indicating elements of the matrix for the stability protocol.

**정답:** D

**해설**
- D: 안정성 프로토콜에는 matrix 전부가 아니라 **안정성 지시 요소**를 골라 정당화해 넣는다.
- A: 전부 넣으라는 요구는 교과서에 없다.
- B: 대리 분석이 열화를 놓칠 수 있다. 선택 기준은 속도가 아니라 안정성 지시 여부다.
- C: 역가는 **핵심 안정성 속성**이다.

---

### Q35 [R][Domain I] — stability guideline in 2026
Which ICH stability guidance reached Step 4 in June 2026, before the exam reference date?

A. ICH Q6B, revised to include stability testing of advanced therapies.
B. ICH Q5E, revised to cover potency-based stability comparability.
C. ICH Q14, which added stability indication to the analytical target profile.
D. ICH Q1, consolidating Q1A–F and modernising Q5C for biologics and ATMPs.

**정답:** D

**해설**
- D: **Q1 통합 가이드라인 Step 4 2026-06**은 Q1A–F와 Q5C를 통합·현대화하고 생물·ATMP를 고려한다. 기준일 전이다. 지역 이행은 진행 중이다.
- A: Q6B는 규격 가이드라인(1999)이다.
- B: Q5E는 비교동등성 가이드라인이다.
- C: Q14는 분석법 개발 가이드라인이다.

---

### Q36 [A][Domain II] — post-thaw use time
A sponsor proposes a post-thaw use time for a cryopreserved cell product. Forced-degradation samples held beyond that time lose activity in a co-culture assay, but the release potency assay shows no change. What follows?

A. The proposed time is supported, because the registered release assay shows stable potency.
B. The release assay is not shown to be stability-indicating, so it cannot justify the post-thaw time.
C. The post-thaw time can be justified by viability data, which replace potency as the stability attribute for cells.
D. The co-culture assay should be dropped because it disagrees with the validated release assay.

**정답:** B

**해설**
- B: 역가 시험은 열화·동결해동·보관 중 손실을 **감지**해야 유효기간·해동 후 사용 시간을 정당화한다. 강제 분해에서 손실을 못 잡았으니 **안정성 지시**가 입증되지 않았다.
- A: 열화를 못 잡는 시험의 '안정'은 근거가 아니다.
- C: 생존율은 역가를 대신하지 않는다.
- D: 손실을 감지한 시험을 버리는 것은 거꾸로다.

---

### Q37 [R][Domain I] — EMA cell-based guideline 2008
How does the EMA guideline on human cell-based medicinal products (2008) describe potency?

A. As a characterisation attribute that need not appear in release specifications.
B. As a parameter set case by case by the Qualified Person at batch certification, using the batch record.
C. As a quantitative measure of biological activity related to the intended mechanism of action.
D. As the number of viable cells per dose, measured under Ph. Eur. 2.7.29.

**정답:** C

**해설**
- C: EMA 2008은 역가를 **의도된 MOA와 관련된 생물학적 활성의 정량**으로 보고 출하·안정성 규격에 넣는다. 대리 마커는 기능과의 상관을 입증해야 한다.
- A: 출하·안정성 규격에 들어간다.
- B: QP는 MA 규격 충족을 확인한다. 역가를 정하지 않는다.
- D: 세포 수·생존율은 역가가 아니다.

---

### Q38 [R][Domain I] — EMA GTMP guideline 2018
Under the EMA gene therapy (GTMP) quality guideline of 2018, what should the potency package for a viral vector product include?

A. Vector titre, both physical and infectious, together with transgene expression and its function.
B. Capsid identity by peptide mapping, with transgene expression tested later in clinical samples.
C. Physical genome titre alone, since it defines the labelled dose in vector genomes.
D. Infectious titre alone, because physical titre counts empty and defective particles.

**정답:** A

**해설**
- A: GTMP 2018은 **벡터 역가**(물리 — 게놈 수 / 감염성)와 **전이유전자 발현·기능**을 요구한다. 변형 세포는 세포 역가 + 발현이다.
- B: 발현·기능은 출하·규격 시험에서 본다.
- C: 게놈 수는 용량 단위일 뿐 생물 활성을 보이지 않는다.
- D: 감염성 역가만으로는 발현·기능을 보이지 못한다.

---

### Q39 [A][Domain IV] — EU clinical-stage expectations
An EU sponsor of an ATMP plans exploratory trials now and a confirmatory trial in two years. Under EMA/CAT/22473/2025, what is the expectation for potency?

A. Potency testing deferred through clinical development; the assay is first required in the MAA.
B. A validated potency assay with final commercial specifications in place before the first exploratory trial starts.
C. Qualified testing early; assay established and specifications justified before confirmatory trials.
D. Potency may be replaced by identity markers until the product is authorised.

**정답:** C

**해설**
- C: EMA/CAT/22473/2025(2025-07-01)는 **단계 비례**다. 초기엔 특성화·적격, **확증 시험 전 역가 시험 확립·규격 정당화**다.
- A: 임상 단계에도 역가 기대가 있다.
- B: 초기 탐색 단계에 최종 검증을 요구하지 않는다.
- D: 정체성 마커는 역가를 대신하지 않는다.

---

### Q40 [An][Domain III] — EU legal force
A US-based legal team says that potency requirements are weaker in the EU because the EU has no equivalent of 21 CFR 610.10. How should regulatory affairs respond?

A. Agree; EU potency expectations are set in guidance and cannot be enforced at batch level.
B. Agree in part; Ph. Eur. general chapters bind an MA holder that chooses to cite them in its dossier.
C. Disagree; the EU enforces potency through FDA-equivalent regulations adopted by the Commission under ICH Q6B.
D. Disagree; Annex I of Directive 2001/83, binding Ph. Eur. and MA specifications, enforced via QP.

**정답:** D

**해설**
- D: EU는 **Dir 2001/83 Annex I + Ph. Eur.(구속) + EMA 가이드라인 + MA 규격**으로 요구하고, **QP 인증(Annex 16)** 시 규격 충족을 확인한다. 미충족 배치 출하가 위반 축이다.
- A: QP 인증과 사찰(Art 111)로 배치 단위 집행이 된다.
- B: 약전 일반장은 Annex I을 통해 **법적 구속**력이 있다.
- C: ICH Q6B는 규정이 아니다. EU는 자체 법 체계로 집행한다.

---

### Q41 [An][Domain IV] — why US and EU converge
Despite different legal anchors, a single potency validation report and specification justification can often support both a BLA and an MAA. Why?

A. Both share ICH Q6B, Q2(R2) and Q14 for specifications and analytical expectations.
B. The EU applies 610.10 directly to products also licensed in the United States.
C. Ph. Eur. general chapters are adopted verbatim into 21 CFR Part 610 by an FDA incorporation rule.
D. FDA and EMA mutually recognise each other's release testing for ATMPs.

**정답:** A

**해설**
- A: 양쪽이 **Q6B**(규격 구조)·**Q2(R2)**(평행성·상대 역가)·**Q14**(ATP·수명주기)를 공유하므로 같은 검증 보고서·규격 정당화가 양쪽 Module 3에 들어간다. USP와 Ph. Eur.도 조화된다.
- B: 610.10은 미국 규정이다.
- C: 약전이 CFR에 편입되지 않는다.
- D: 상호 인정은 수렴 이유로 교과서에 없다.

---

### Q42 [An][Domain III] — remaining differences
Which difference between the US and EU potency systems remains after ICH convergence?

A. US lot release under 610.2, CBER product review, versus the EU Qualified Person's personal responsibility.
B. The US requires parallelism testing; the EU accepts EC50 ratios without parallelism.
C. The US sets potency in the label; the EU sets it in the risk management plan instead.
D. The US uses relative potency against a reference preparation; the EU uses absolute activity units per dose.

**정답:** A

**해설**
- A: 남는 차이는 **미국 lot release(610.2)·CBER 제품 전문가 심사**와 **EU QP 개인 책임·Part IV**, 그리고 변경 카테고리(601.12 vs 1234/2008)다.
- B·D: 양쪽 모두 Q6B·Q2(R2)로 상대 역가·평행성을 쓴다.
- C: 역가 규격은 양쪽 모두 품질 자료(Module 3)에 있다.

---

### Q43 [A][Domain I] — CAR-T potency components
A sponsor of an autologous CAR-T product drafts its release potency under FDA's January 2024 CAR T guidance. Which package fits that guidance?

A. Memory phenotype and exhaustion markers, which predict persistence and clinical response.
B. VCN alone, because copy number determines both transgene expression and safety.
C. Percent CAR+ cells, VCN, and target-cell cytotoxicity and/or antigen-stimulated IFN-γ or IL-2.
D. Total viable cell count and CD3 percentage, which together express the dose-related activity.

**정답:** C

**해설**
- C: 2024-01 CAR T guidance의 역가는 **% CAR+**(형질도입 효율), **VCN**(안전 상한 + 발현), **생물학적 활성**(표적 **세포독성** 및/또는 **IFN-γ·IL-2**)이다.
- A: 기억 표현형·소진 마커는 특성화다.
- B: VCN만으로는 생물 활성을 보이지 못한다.
- D: 생존율·세포 수·CD3는 보조 항목이다. 생물 활성을 재지 않는다.

---

### Q44 [A][Domain I] — CAR-T release vs characterisation
For an autologous CAR-T product, which attribute is best placed in characterisation rather than in the release specification?

A. Percent CAR-positive cells measured by flow cytometry.
B. Memory T-cell phenotype and exhaustion markers.
C. Vector copy number with an upper safety limit.
D. Cytotoxicity against antigen-positive target cells in co-culture.

**정답:** B

**해설**
- B: **기억 표현형·소진 마커·증식능**은 공정 일관성·comparability를 위한 **특성화** 항목이다.
- A: % CAR+는 출하 시험이다.
- C: VCN은 안전 상한이 있는 출하 항목이다.
- D: 세포독성은 출하 역가다.

---

### Q45 [A][Domain IV] — CAR-T wide criteria and OOS
An autologous CAR-T lot is just below the release cytotoxicity limit, and the patient has no remaining apheresis material. FDA questions why the sponsor's acceptance range is wide. Which position is consistent with the CAR T guidance?

A. Starting-material variability anchored to the clinically effective range; OOS-product administration procedure for the lot.
B. The range is wide because potency is a characterisation attribute for CAR-T; the lot is released with a label statement.
C. The range must be narrowed to that of allogeneic products; the lot is destroyed and the patient is re-apheresed.
D. The range is wide because autologous products are exempt from upper limits; the lot is released after retesting until it passes.

**정답:** A

**해설**
- A: 자가 출발 물질 변동으로 역가 분포가 넓으므로 **임상 로트로 입증된 효능 범위**를 하한으로 정당화한다. 범위 밖은 OOS 조사 또는 **OOS 제품 투여 결정 절차**(의사 판단·FDA 통지)로 다룬다.
- B: CAR-T에서 세포독성·사이토카인은 출하 역가다.
- C: 동종 제품 범위를 따를 근거가 없다. 교과서는 자가 대체 불가 상황에 OOS 제품 투여 절차를 둔다.
- D: 상한(VCN ≈5 copies/cell 관행)은 유지한다. 합격 나올 때까지 재시험은 금지다.

---

### Q46 [A][Domain I] — AAV genome titre is not enough
An AAV gene therapy sponsor proposes ddPCR vector-genome titre as the sole release potency test, since the label dose is in vg/kg. What is the main gap?

A. vg/kg labelling requires an in vivo animal potency assay on each lot to confirm the labelled dose.
B. Genome titre is a purity attribute, so it cannot appear in the release specification.
C. ddPCR is not an accepted method for vector-genome titre, so qPCR must be used.
D. Genome titre does not show biological activity; transgene expression and function are needed.

**정답:** D

**해설**
- D: 벡터 게놈 역가는 용량 단위다. **전이유전자 발현·기능**(형질도입 후 단백 발현 + 효소·세포 반응)이 생물학적 역가다. 감염성 역가와 full/empty 비도 matrix에 든다.
- A: 매 로트 동물 시험 요건은 없다.
- B: 게놈 역가는 용량 단위로 출하에 쓴다.
- C: ddPCR은 교과서가 쓰는 게놈 역가 방법이다.

---

### Q47 [A][Domain V] — AAV reference standards from external sources
An AAV programme manager must select external reference material to harmonise vector-genome and infectious-titre units with other laboratories. Which external source is used for this purpose?

A. The USP reference standard listed in <1033>, used as the sole primary reference.
B. A Ph. Eur. biological reference preparation, required before any EU clinical trial.
C. ATCC/NIST AAV2 and AAV8 reference standard materials, plus in-house primary and working references.
D. A WHO International Standard for each AAV serotype, which replaces in-house primary and working references.

**정답:** C

**해설**
- C: **ATCC/NIST AAV2·AAV8 RSM**으로 게놈·감염 역가 **단위를 조화**하고, 사내 1차·작업 참조를 함께 둔다.
- A·B·D: 이 목적으로 쓰는 외부 참조 물질은 ATCC/NIST RSM이다. 외부 물질이 사내 1차·작업 참조를 없애도 된다는 근거도 없다.

---

### Q48 [A][Domain V] — guidance tracker on the reference date
A regulatory intelligence tracker lists four FDA/ICH items. Which one must be marked as after the 1 September 2026 reference date and excluded as an answer key?

A. The final CGT FAQ issued on 20 August 2026.
B. The CBER CMC flexibility statement issued on 11 January 2026.
C. The final Potency Assurance guidance of 2 November 2026.
D. ICH Q1 reaching Step 4 in June 2026.

**정답:** C

**해설**
- C: Potency Assurance 최종은 **2026-11-02**로 기준일 이후다. 시험 비적용이다.
- A: CGT FAQ 최종은 **2026-08-20**으로 기준일 전이다.
- B: CMC 유연성 성명은 **2026-01-11**이다.
- D: Q1 Step 4는 **2026-06**이다.

---
### Q49 [A][Domain II] — potency OOS, first step
A release potency result for an allogeneic MSC lot falls below specification, while identity and viability pass. The QC manager asks what to do first. Which action comes first?

A. Reject the lot at once and close the record without any laboratory review.
B. Retest the same sample until two consecutive results pass, then release the lot with a note.
C. A Phase I laboratory review of responder cells, reagents, plate and reference curve.
D. Report a BPDR within 45 days, because a potency failure is reportable once it is confirmed.

**정답:** C

**해설**
- C: 첫 단계는 **Phase I 실험실 조사**(FDA OOS 2022)다. 반응 세포 passage·시약·플레이트·참조 곡선을 본다. 시스템 적합성 실패가 확인되면 근거 문서를 남기고 결과를 무효화한다.
- A: 조사 없이 종결하면 원인과 영향 평가가 빠진다.
- B: 합격이 나올 때까지 재시험하는 것은 금지다. 재시험은 사전 정의된 계획으로만 한다.
- D: 출하 전 OOS는 BPDR 대상이 아니다. BPDR은 유통·투여된 경우다.

---

### Q50 [A][Domain II] — Phase II investigation
The Phase I laboratory review of a potency OOS finds no assignable assay error and system suitability passed. Which element belongs to the full-scale Phase II investigation?

A. Averaging the OOS result with earlier passing results from the same lot to reach a reportable value.
B. Batch and donor records, raw materials, other matrix results and a predefined retest plan.
C. Invalidating the result because the assay CV is known to be high for cell-based methods.
D. Resampling from another vial as routine, and reporting whichever result is higher.

**정답:** B

**해설**
- B: **Phase II 전면 조사**는 공정 기록(공여자·확장·해동), 원료 변동, 다른 matrix 요소의 일관성, **사전 정의된 재시험 계획**, 타 로트·안정성 추세를 본다.
- A: 평균으로 OOS를 덮을 수 없다.
- C: 시험 변동이 크다는 일반론으로는 무효화할 수 없다. 무효화는 근거 문서가 있을 때만 한다.
- D: 재샘플링은 원 샘플의 비대표성이 입증될 때만 한다. 높은 값만 고르는 것은 허용되지 않는다.

---

### Q51 [A][Domain III] — disposition: allogeneic vs autologous
After a full investigation, a potency OOS is confirmed for an allogeneic cell lot. The clinical team notes that a physician has asked to use the lot under the OOS-product administration procedure. What is the correct disposition?

A. Hold the lot until the next annual report, then decide with FDA.
B. Reject the lot; the OOS-product procedure is limited to autologous, irreplaceable products.
C. Release with a label statement of reduced potency and a dose adjustment.
D. Release under the OOS-product procedure, because the treating physician has accepted the documented risk.

**정답:** B

**해설**
- B: 확정 OOS는 **불합격**이다. OOS 제품 투여 절차는 **자가·대체 불가** 경우에 한정되고 동종 제품은 해당하지 않는다.
- A: 연차 보고는 확정 OOS 처분 경로가 아니다.
- C: 라벨 문구로 규격 미충족을 해소할 수 없다.
- D: 동종 제품은 다른 로트로 대체할 수 있어 이 절차의 대상이 아니다.

---

### Q52 [A][Domain V] — reporting a distributed OOS lot
A potency OOS is confirmed for a licensed cell therapy lot that had already been distributed and administered. Which reporting obligation applies in the US?

A. A Field Alert Report, the route used for quality defects in NDA drug products.
B. A BPDR under 21 CFR 600.14 within 45 days, with recall assessment.
C. An expedited IND safety report, because potency is a clinical safety attribute.
D. A note in the next annual report, because the lot has already been used.

**정답:** B

**해설**
- B: 유통·투여된 로트의 역가 미달은 **BPDR(600.14) 45일** 보고 대상이다. 리콜(Class II)도 평가한다.
- A: 생물의약품 BLA 제품의 경로는 BPDR이다.
- C: 품질 결함 보고는 BPDR이다. 이상사례 신속 보고와는 다른 경로다.
- D: 이미 투여되었다고 보고 의무가 사라지지 않는다.

---

### Q53 [A][Domain III] — EU handling of a potency OOS
In the EU, a cell-based ATMP batch fails its authorised potency specification. What follows for batch release?

A. The QP cannot certify the batch under Annex 16, and Article 117 defect handling is assessed.
B. The batch may be certified once the competent authority grants a Type IA notification.
C. The QP may certify the batch because Ph. Eur. general chapters are advisory for advanced therapies.
D. The QP may certify the batch if the deviation is recorded in the product quality review.

**정답:** A

**해설**
- A: EU는 Ch.6 OOS 절차를 따르고, **Annex 16**에 따라 MA 규격 미충족 배치는 **QP 인증 불가**다. Art 117 결함 처리도 평가한다.
- B: 변경 신고는 배치 인증 요건을 대신하지 않는다.
- C: 약전 일반장은 Annex I을 통해 법적 구속력이 있다.
- D: PQR 기록으로 규격 미충족을 해소할 수 없다.

---

### Q54 [A][Domain IV] — US reporting category for widening
Two years after approval, commercial data show a release potency range that is narrower than needed, with no clinical signal across the observed range. The sponsor will cite the CBER CMC flexibility statement of 11 January 2026. Which US reporting category applies to widening the range?

A. Prior approval supplement under 601.12(b); the statement does not lower the category.
B. CBE-0, provided a comparability protocol is filed with the supplement.
C. Annual report, because the change rests on commercial manufacturing experience rather than on new clinical data.
D. CBE-30, because the 2026 statement lowered the category for potency changes.

**정답:** A

**해설**
- A: 합격 기준 **완화**는 **PAS(601.12(b))** 다. 2026-01-11 성명은 재평가의 **수용 가능성**을 말한 것이고 카테고리를 낮추지 않았다. Type C 회의나 comparability protocol로 미리 합의할 수 있다.
- B: comparability protocol은 사전 합의 수단이다. 이 경우 즉시 시행 보고로 낮아지는 근거가 아니다.
- C: 상업 경험이 근거여도 규격 완화는 연차 보고 대상이 아니다.
- D: 성명이 카테고리를 낮췄다는 것은 흔한 오해다.

---

### Q55 [A][Domain IV] — EU classification of the same change
The same company files the potency specification change in the EU. It will widen the release range beyond the authorised limits, and separately plans to tighten an impurity limit. How are the two changes classified in principle?

A. Widening is a Type II variation; tightening is a Type IA variation.
B. Both are Type IB variations, because both change a finished-product specification.
C. Widening is an extension application; tightening is a Type IB variation.
D. Widening is a Type IA variation; tightening is a Type II variation.

**정답:** A

**해설**
- A: 완제품 규격을 승인 범위 **밖으로 완화**하면 **Type II**, 규격을 **강화**하면 **Type IA**다. 코드 번호는 2026-01-15 신지침에서 바뀌었는지 확인되지 않아 원칙만 본다.
- B: 완화와 강화는 위험 수준이 달라 같은 분류가 아니다.
- C: 규격 완화는 확장 신청 사안이 아니다.
- D: 두 분류가 뒤바뀌었다.

---

### Q56 [An][Domain IV] — the core of a relaxation package
A regulatory lead drafts the justification for widening a potency acceptance range after approval. Which argument carries the package?

A. Removal of the upper limit, since commercial lots have stayed well below it.
B. The number of commercial lots lost to potency failures since approval, with the cost of each rejection.
C. A wider range used by a competitor product with a similar mechanism.
D. Proof that potency across the proposed range lacks clinical relevance, keeping the upper limit.

**정답:** D

**해설**
- D: 핵심은 **임상 관련성 결여 증명**이다. 상업 로트 분포·추세, 임상 결과·AE와의 비상관, 안정성 추세, 분석 변동 분해, Q6B 정당화, Q9(R1) 위험 평가를 묶고 **상한과 안전 지표는 유지**한다.
- A: 과활성 안전 때문에 상한은 유지한다.
- B: 잃은 로트 수는 핵심 근거가 아니다.
- C: 규격은 자기 제품 데이터로 정당화한다.

---

### Q57 [A][Domain III] — pre-IND response on potency
At a pre-IND meeting, FDA asks how the sponsor will assure potency during Phase 1 without a quantitative assay. The sponsor's draft answer is being reviewed. Which draft answer is most consistent with the 2011 guidance?

A. A qualified semi-quantitative functional assay at release, with surrogates and a development plan.
B. Passing ISCT surface markers will serve as the potency test until a quantitative assay is developed and validated.
C. Potency will be inferred from clinical response in Phase 1 subjects instead of a release measure.
D. Dosing will begin after the potency assay is fully validated under ICH Q2(R2).

**정답:** A

**해설**
- A: Phase 1 역가는 **적격 반정량 기능 시험**(보고값·넓은 임시 기준)과 대리 분석, 공정 일관성 근거, Phase 2 정량·Phase 3 전 검증으로 가는 개발 계획, 임상 로트 보존 샘플로 답한다.
- B: 정체성 마커로 역가를 대신한다는 주장은 피할 답이다.
- C: IND 초기에도 어떤 역가 측정이 출하에 있어야 한다.
- D: "검증 완료 후 Phase 1" 약속도 피할 답이다. 단계 비례 기대에 맞지 않는다.

---

### Q58 [An][Domain IV] — weak potency assay and comparability
A sponsor wants to move manufacturing to a new site. Its potency assay has high variability, and an equivalence test on pre- and post-change lots cannot reach a conclusion. What is the most likely regulatory consequence?

A. Clinical bridging may be needed or the change refused, as high similarity cannot be shown analytically.
B. The change is reported in the annual report, since site moves do not affect potency under Q5E.
C. The change is accepted if identity and sterility results match, which replace potency for comparability.
D. The change is accepted, because inconclusive potency data default to a conclusion of comparability under ICH Q5E.

**정답:** A

**해설**
- A: Q5E는 분석 비교로 "highly similar"를 보이고, 못 보일 때 bridging으로 간다. 역가는 임상 효과와 가장 직접 연결된 CQA다. 변동이 크면 동등성(TOST)이 실패해 **임상 bridging이나 변경 거부**로 이어진다.
- B: 사이트 이전도 역가 비교성을 보여야 한다.
- C: 정체성·무균은 역가 비교를 대신하지 않는다.
- D: 결론 불가는 비교성 입증이 아니다.

---

### Q59 [A][Domain IV] — protecting future comparability
A Phase 1 cell therapy sponsor expects several manufacturing changes before licensure. Which early step best protects its ability to show comparability later?

A. Delaying potency development until Phase 3, when the process is locked.
B. Relying on identity markers for later comparability, since they vary less than functional bioassays do.
C. Banking clinical-lot material as reference and planning a comparability protocol under 601.12(e).
D. Using a new reference lot after each change, so each process has its own standard.

**정답:** C

**해설**
- C: Phase 1부터 역가에 투자하고, 임상 로트로 **참조 물질 은행**을 만들며, **comparability protocol(601.12(e))** 로 사전 합의하는 것이 교과서 전략이다.
- A: 역가가 늦으면 변경 비교가 막힌다.
- B: 정체성 마커는 역가 비교를 대신하지 않는다.
- D: 변경마다 참조를 바꾸면 변경 전후를 비교할 기준이 사라진다.

---

### Q60 [R][Domain I] — MISEV2023 is not potency
An MSC-EV sponsor reports CD63, CD81 and CD9 positivity, negative calnexin and albumin, a size distribution and TEM images. How should this data set be classified?

A. As identity and purity characterisation; potency needs a functional assay linked to MOA.
B. As the potency test, since MISEV2023 defines EV biological activity through marker content per dose.
C. As stability-indicating data, since marker loss tracks the loss of EV activity.
D. As the dose metric, since marker positivity sets the number of particles per dose.

**정답:** A

**해설**
- A: MISEV2023 항목(양성 CD63·CD81·CD9 등, 음성 calnexin·albumin, 크기, TEM)은 **정체성·순도**다. 역가는 MOA 가설 기반 기능 시험으로 잰다.
- B: MISEV2023은 역가 기준이 아니다.
- C: 마커 유지가 기능 유지를 뜻하지 않는다. 대리지표가 열화를 놓칠 수 있다.
- D: 용량 지표는 보통 입자 수와 단백/입자 비 조합으로 따로 정당화한다.

---

### Q61 [A][Domain I] — EV functional potency assay
An MSC-EV product for bronchopulmonary dysplasia is thought to act by dampening macrophage inflammation. Which release potency assay design fits that hypothesis?

A. CD63 ELISA per dose, reported as percent of the clinical lot's marker content.
B. Total protein per dose, since protein content reflects the cargo responsible for the anti-inflammatory activity.
C. Nanoparticle tracking count per mL, reported against a particle-count reference material.
D. Percent reduction of TNF-α from LPS-stimulated macrophages, as relative potency with heat-treated controls.

**정답:** D

**해설**
- D: MOA 가설이 대식세포 염증 억제면 **LPS 자극 THP-1/BMDM의 TNF-α·IL-6 감소 %** 를 정량 상대 역가로 잰다. 열처리·단백분해 대조를 둔다.
- A: 마커 정량은 정체성·용량 지표 쪽이다. 기능을 재지 않는다.
- B: 총 단백은 오염 단백을 포함한다. 기능 시험이 아니다.
- C: 입자 수는 용량 지표다. 방법 의존적이고 비EV 입자를 포함한다.

---

### Q62 [A][Domain II] — promoting an EV surrogate
An MSC-EV team measures a panel of miRNA cargo and wants it to replace the macrophage assay at release, because it is faster. What must happen first?

A. The panel must show higher precision than the macrophage assay in a single validation run of the method.
B. The parent-cell ISCT marker panel must pass for each lot used in the comparison.
C. The panel must be listed in MISEV2023 as a recognised EV potency marker.
D. Lot-to-lot correlation between the cargo panel and the functional assay must be demonstrated.

**정답:** D

**해설**
- D: cargo 정량은 기능 시험과 **로트 간 상관**을 데이터로 입증한 뒤에 출하 대리로 승격한다(2011 matrix 조건).
- A: 정밀도만으로는 역가를 지시하지 못한다.
- B: 모세포 마커는 정체성이다. cargo-기능 상관을 대신하지 않는다.
- C: MISEV2023은 정체성·순도 기준이다. 대리 승격 요건이 아니다.

---

### Q63 [An][Domain IV] — EV strategy: where parent-cell potency sits
In a Potency Assurance Strategy for an MSC-EV product, the sponsor releases each parent MSC bank on an IDO/PGE2 potency test and shows that parent-cell potency correlates with EV potency. Which control element does this represent?

A. Identity testing of the EV product under 21 CFR 610.14.
B. In-process control of particle yield and the protein-to-particle ratio.
C. Raw material and starting material control within the potency assurance strategy.
D. Release testing of the drug product, which replaces the EV functional assay.

**정답:** C

**해설**
- C: **모세포 은행 역가 출하**(ISCT 2016 IDO/PGE2)와 EV 역가의 상관은 2023 초안 전략의 **원료·시작 물질 통제**다.
- A: 정체성 시험은 마커 확인이다. 모세포 역가와 관계없다.
- B: 입자 수율·단백/입자 비는 공정 중 통제다.
- D: 원료 통제는 출하 matrix의 기능 시험을 대신하지 않는다.

---

### Q64 [A][Domain III] — EU view of an MSC-EV product
An EU team reviews the release panel for an MSC-EV product. A draft lists Ph. Eur. 2.7.29 nucleated cell count and viability as a release test. What is the problem?

A. The chapter is valid but must be listed as the potency test rather than as purity.
B. The chapter does not apply, because an EV product has no nucleated cells to count.
C. The chapter must be replaced by 2.7.28 colony-forming assays for MSC-derived products.
D. The chapter applies after authorisation, not to clinical-stage EV batches.

**정답:** B

**해설**
- B: EV 제품에는 세포가 없으므로 **Ph. Eur. 2.7.29는 적용되지 않는다**. EV는 Q6B 규격 틀로 다룬다.
- A: 세포 수·생존율은 역가가 아니다.
- C: 2.7.28은 조혈 CFU 분석이다. EV와 관계없다.
- D: 적용 시점 문제가 아니라 대상 문제다.

---
