# 문제은행 — Ch.16 분석법 수명주기(Q2(R2)·Q14·USP <1220>·M10·potency)

> **근거:** `textbook/Ch16.md` + `cards/Ch16.md` 검증 메모(ICH Q2(R2)·Q14 Step 4 2023-11, ICH M10 2022, USP <1220>/<1225>/<1226>/<1224>, FDA 2015 분석법 가이던스, 21 CFR 211.165(e)·211.194(a)(2)·211.160(b)·610.10·600.3(s)·314.70, FDA Potency Tests CGT 2011, FDA 2004 변경 가이던스, EU Q.II.d.2·Q.II.d.1, EU GMP Ch.6, ICH Q6B·Q8(R2)·Q12, EU Annex 17). 새 숫자 없음. "?" 항목(Potency Assurance 최종화)은 정답 키로 쓰지 않았다. Ph. Eur. 5.26(Implementation of pharmacopoeial procedures, 11th Edition 2023-01-01 시행)은 2026-11-28 원문 확인.
> **형식:** 영문 시나리오 → 영문 선지 A~D → 정답 → 한국어 해설. 태그 `[R]/[A]/[An]` + Domain.
> **작성:** 2026-11-26. 64문항.

---

### Q01 [R][Domain I] — Q2(R2) validation characteristics
Which set lists the validation characteristics under ICH Q2(R2)?

A. Precision, robustness, range, and solution stability
B. Accuracy, precision, specificity/selectivity, range
C. Specificity, linearity, ruggedness, and detection limit
D. Accuracy, precision, robustness, and system suitability

**정답:** B

**해설**
- B: Q2(R2)의 검증 특성은 **accuracy·precision·specificity/selectivity·range(reportable range)** 다. linearity/response는 range 안에서 다룬다.
- A: robustness는 개발(Q14)에서 평가한다. 이 조합은 Q2(R2)의 목록이 아니다.
- C: linearity는 독립 항목이 아니라 range 안에서 다룬다. 이 조합은 Q2(R2) 목록이 아니다.
- D: robustness는 Q14 개발 단계 활동이고, system suitability는 run-level 점검이라 검증 특성이 아니다.

---

### Q02 [R][Domain I] — where robustness sits
Under the ICH Q2(R2)/Q14 pair, where is robustness of an analytical procedure normally evaluated?

A. During routine use, as part of each run's system suitability
B. During technology transfer, by the receiving laboratory under USP <1224>
C. During validation, as a fifth characteristic added to the core four
D. During development under Q14, documented in the development report

**정답:** D

**해설**
- D: robustness는 **Q14 개발 단계**에서 평가해 개발 보고서에 문서화한다. 개발에서 했으면 검증에서 반복할 필요가 없다.
- A: system suitability는 그날 시스템의 정상 작동을 보는 점검이다. robustness 평가와 다르다.
- B: <1224>는 기술이전 접근을 다룬다. robustness의 자리는 개발이다.
- C: Q2(R2)는 robustness를 검증 특성으로 두지 않는다.

---

### Q03 [A][Domain III] — QC wants robustness in the validation protocol
QC proposes adding a full robustness study to a validation protocol "because auditors expect it." A Q14 development report already documents the effect of parameter variation. What is the appropriate response?

A. Add the study anyway, since Q2(R2) lists robustness as a core validation characteristic.
B. Repeat robustness in validation, because development data cannot be cited in a protocol.
C. Drop robustness entirely, since Q2(R2)/Q14 removed it as a regulatory expectation for methods.
D. Reference the development report in the protocol and link it to system suitability criteria.

**정답:** D

**해설**
- D: Q2(R2)는 robustness를 개발 활동으로 둔다. Q14 개발 보고서가 있으면 검증 프로토콜에서 **그 보고서를 참조**하고 **system suitability 기준**으로 연결한다.
- A: robustness는 Q2(R2)의 검증 특성이 아니다.
- B: 개발에서 했으면 검증에서 반복할 필요가 없다. 개발 보고서가 근거가 된다.
- C: robustness가 없어진 것이 아니다. 개발 단계로 자리를 옮겼을 뿐이다.

---

### Q04 [A][Domain III] — robustness never documented
An older method is being revalidated. No development report exists and robustness was never studied. What should the team do about robustness?

A. Skip it, since revalidation of an existing method falls outside the scope of Q14.
B. Perform it now as a development activity and record it in a new development report.
C. Replace it with additional intermediate precision runs, which Q2(R2) accepts as equivalent.
D. Add it to the validation protocol as a validation characteristic with acceptance limits.

**정답:** B

**해설**
- B: 문서가 없으면 그때 **개발 활동**으로 robustness를 수행해 개발 보고서에 넣는다. 검증 항목으로 다루지 않는다.
- A: 근거 없이 생략하는 것은 교과서 처리 방식이 아니다.
- C: intermediate precision이 robustness를 대신한다는 규정은 없다.
- D: robustness는 Q2(R2)의 검증 특성이 아니다.

---

### Q05 [R][Domain I] — minimal approach
Under ICH Q14, what characterises the "minimal" approach to procedure development?

A. Validating a pharmacopoeial method by verification under USP <1226> instead of full validation
B. Defining an ATP first and then running a multivariate DoE to map parameter interactions
C. Prior knowledge and univariate experiments set the procedure, followed by Q2(R2) validation
D. Skipping formal validation for early-phase methods and relying on system suitability results

**정답:** C

**해설**
- C: **minimal**은 전통적 방식이다. 선행 지식·단변량 실험으로 절차를 정하고 Q2(R2)로 검증한다.
- A: <1226> verification은 공정서 방법의 문제이고, Q14의 minimal/enhanced 구분과 다르다.
- B: ATP 정의와 DoE 기반 체계적 개발은 **enhanced** approach의 요소다.
- D: system suitability는 검증을 대신하지 않는다. minimal approach도 Q2(R2) 검증을 거친다.

---

### Q06 [R][Domain I] — ATP
What is the analytical target profile (ATP) in ICH Q14?

A. A predefined statement of what is measured, why, and the required performance
B. A risk register of procedure parameters ranked after the robustness study
C. A summary of validation results submitted in CTD section 3.2.P.5.3 at filing
D. A list of system suitability limits that each analytical run must pass

**정답:** A

**해설**
- A: ATP는 **측정 대상·목적·성능 기준을 사전에 정의**한 것이다. enhanced approach의 출발점이다.
- B: 위험평가는 ATP 다음의 체계적 개발 단계에 속한다.
- C: 3.2.P.5.3은 완제 검증 데이터의 CTD 위치다. ATP는 사전 정의이지 결과 요약이 아니다.
- D: system suitability 기준은 control strategy의 일부일 수 있으나 ATP의 정의가 아니다.

---

### Q07 [R][Domain I] — enhanced approach sequence
Which sequence reflects the ICH Q14 enhanced approach?

A. ATP, then systematic development with risk assessment and DoE, then control strategy and lifecycle
B. Risk assessment, then validation, then ATP, then transfer to the receiving laboratory
C. Validation, then ATP definition, then robustness study, then routine release testing
D. Control strategy, then ATP, then validation, then submission of the development report to the agency for review

**정답:** A

**해설**
- A: enhanced는 **ATP → 체계적 개발(위험평가·DoE·파라미터 이해) → control strategy → 수명주기 관리**다.
- B: ATP가 출발점이다. 검증 뒤에 ATP가 오는 순서는 틀렸다.
- C: ATP는 맨 앞에 온다. 검증 뒤에 정의하는 것이 아니다.
- D: control strategy는 체계적 개발의 결과로 나온다. ATP보다 앞서지 않는다.

---

### Q08 [An][Domain I] — why Q14 and Q2(R2) are a pair
Why were ICH Q14 and Q2(R2) developed together rather than simply revising Q2(R1)?

A. Q2(R1) covered results but not why conditions were chosen, so minor changes needed agency review.
B. Q2(R1) conflicted with USP <1225>, and the pair was written to replace compendial validation.
C. Q2(R1) was written for biologics, so a pair was needed to extend validation to small molecules.
D. Q2(R1) required robustness in validation, and the pair moved it into routine system suitability testing.

**정답:** A

**해설**
- A: 구 Q2(R1)은 **검증 결과**만 다뤄 **왜 그 조건인지(개발 지식)** 가 dossier에 없었다. 그래서 사소한 변경도 당국 심사를 거쳤다. Q14가 개발 지식을 문서화하게 했다.
- B: 이 쌍은 USP를 대체하려는 것이 아니다. USP <1220>이 같은 구조를 약전 언어로 쓴다.
- C: Q2(R1)이 생물의약품 한정이었다는 내용은 교과서에 없다.
- D: robustness는 개발(Q14)로 옮겨졌다. system suitability로 옮겨진 것이 아니다.

---

### Q09 [An][Domain IV] — flexibility via Q12
A sponsor used the Q14 enhanced approach and linked its procedure knowledge to ICH Q12 established conditions. What post-approval benefit does this create?

A. Specification limits may be widened through internal change control without notification.
B. The method is exempt from Stage 3 ongoing verification because the ATP is already approved.
C. EU variation classification stops applying, since Q12 replaces Reg 1234/2008 for methods.
D. Changes within the ATP may go to a lower reporting category or be managed within the PQS.

**정답:** D

**해설**
- D: 개발 지식이 **Q12 established conditions**로 연결되면 **ATP 안에서의 변경은 낮은 카테고리나 PQS 관리**로 처리할 여지가 생긴다.
- A: 규격은 Q12에서도 핵심 EC다. 완화는 PAS·Type II급 제출이다.
- B: Stage 3는 일상 사용 중 성능 모니터링이다. ATP 승인으로 면제되지 않는다.
- C: EU는 variation 분류가 법정(Reg 1234/2008)이라 Q12 유연성을 완전히 받지 못한다.

---

### Q10 [R][Domain I] — Q2(R2)/Q14 status
What is the status of ICH Q2(R2) and Q14 on the exam reference date?

A. Both remain Step 2 drafts awaiting a 2025 consultation round.
B. Q2(R2) reached Step 4 in 2022 together with ICH M10.
C. Q14 reached Step 4 in 2023-11, while Q2(R2) remains a Step 2 draft.
D. Both reached Step 4 in 2023-11, later error-corrected in 2025.

**정답:** D

**해설**
- D: Q2(R2)와 Q14는 **2023-11 Step 4**이고, **2025 오류정정판**이 있다.
- A: 둘 다 최종(Step 4)이다. 초안 상태가 아니다.
- B: 2022 Step 4는 M10이다. Q2(R2)는 2023-11이다.
- C: 두 가이드라인은 함께 Step 4에 도달했다.

---

### Q11 [A][Domain I] — identification test
A QC lab is validating an identification test by IR for an incoming drug substance. Which Q2(R2) characteristic must be demonstrated?

A. Specificity/selectivity and accuracy, given patient risk
B. Specificity/selectivity and a quantitation limit
C. Specificity/selectivity, without further characteristics
D. Specificity/selectivity and range across expected content

**정답:** C

**해설**
- C: 확인시험은 **specificity/selectivity**만 요구된다.
- A: accuracy는 정량 시험에 요구된다. 확인시험에는 요구되지 않는다.
- B: LOQ 하한은 정량 불순물 시험의 range 개념이다.
- D: range는 정량 시험(정량·정량 불순물)의 특성이다.

---

### Q12 [A][Domain I] — quantitative impurity test
For a quantitative impurity test, which statement about the required Q2(R2) characteristics is correct?

A. Specificity, accuracy, precision and range, with the lower end of the range set at the LOQ.
B. Specificity and a detection limit suffice, since impurities are reported above a threshold.
C. Accuracy and repeatability alone, because specificity is shown by the assay of the same method.
D. Specificity, accuracy and precision, with range typically set at 80–120% of the specification.

**정답:** A

**해설**
- A: 정량 불순물은 **specificity + accuracy + precision(repeatability·intermediate) + range**이고, range 하한은 reporting threshold를 커버하는 **LOQ**다.
- B: specificity + 검출한계는 **한도시험**의 조합이다.
- C: 정량 불순물에도 specificity가 필요하고, precision은 intermediate까지 포함한다.
- D: 규격의 80–120%는 **정량(assay)** 의 range다.

---

### Q13 [A][Domain I] — limit test
A limit test for a residual impurity reports only "pass" or "fail" against a limit. Which Q2(R2) characteristics apply?

A. Specificity, accuracy, range to the LOQ
B. Precision and detection limit
C. Specificity and a detection limit
D. Accuracy, precision, and 80–120% range

**정답:** C

**해설**
- C: 한도시험은 **specificity + 검출한계**다.
- A: accuracy와 LOQ 하한의 range는 정량 불순물 시험의 조합이다.
- B: specificity는 모든 시험 유형에 공통으로 요구된다.
- D: 80–120% range는 정량(assay)의 기준이다.

---

### Q14 [A][Domain I] — assay range
A sponsor validates an assay for the active ingredient content of a tablet. What range does Q2(R2) typically expect?

A. About 80–120% of the specification
B. The range used for impurity tests
C. From the LOQ to 120% of the specification
D. From the detection limit to the upper limit

**정답:** A

**해설**
- A: 정량(assay)의 range는 **보통 규격의 80–120%** 다.
- B: 불순물 시험의 range는 하한이 LOQ다. 정량 range와 다르다.
- C: LOQ 하한은 정량 불순물 시험의 range다.
- D: 검출한계는 한도시험의 특성이다. 정량 range의 하한이 아니다.

---

### Q15 [R][Domain I] — linearity
How does ICH Q2(R2) handle linearity (response)?

A. Within range, rather than as a standalone validation characteristic in itself
B. As a separate characteristic required for each test type, including identification tests
C. As part of robustness, evaluated during Q14 development rather than validation
D. As part of system suitability, checked at the start of each analytical run

**정답:** A

**해설**
- A: Q2(R2)에서 linearity/response는 **range 안에서** 다룬다.
- B: linearity는 독립 특성이 아니고, 확인시험은 specificity만 요구된다.
- C: robustness는 개발 활동이지만 linearity를 그 일부로 두지 않는다.
- D: system suitability는 run-level 점검이다. linearity의 자리가 아니다.

---

### Q16 [An][Domain I] — characteristic assignment: wrong statement
Which statement about assigning Q2(R2) characteristics to test types is INCORRECT?

A. An identification test needs specificity/selectivity.
B. A quantitative impurity test needs just specificity and an LOD.
C. A limit test needs specificity and a detection limit.
D. An assay range is typically 80–120% of the specification.

**정답:** B

**해설**
- B: 틀린 진술이다. 정량 불순물은 **specificity + accuracy + precision + range(하한 LOQ)** 가 필요하다. specificity + 검출한계는 한도시험의 조합이다.
- A: 확인시험은 specificity/selectivity만이다. 맞는 진술이다.
- C: 한도시험은 specificity + 검출한계다. 맞는 진술이다.
- D: 정량 range는 보통 규격의 80–120%다. 맞는 진술이다.

---

### Q17 [R][Domain I] — USP <1220> stages
Which list gives the three stages of the analytical procedure lifecycle in USP <1220>?

A. Procedure Design, Procedure Verification under <1226>, then Procedure Revalidation after any change
B. Method Development, Method Validation, and Method Transfer to the receiving laboratory site
C. ATP Definition, System Suitability Qualification, and Periodic Revalidation at fixed intervals
D. Procedure Design, Procedure Performance Qualification, Ongoing Procedure Performance Verification

**정답:** D

**해설**
- D: USP <1220>(2022)은 **Stage 1 Procedure Design → Stage 2 Procedure Performance Qualification → Stage 3 Ongoing Procedure Performance Verification**이다.
- A: <1226> verification은 공정서 방법 적합성 확인이다. <1220>의 Stage 2가 아니다.
- B: 기술이전은 <1224>의 주제다. <1220>의 단계 이름이 아니다.
- C: system suitability는 Stage 3의 입력이고 단계 이름이 아니다. 고정 주기 재검증도 단계로 정의되지 않는다.

---

### Q18 [A][Domain V] — recurring system suitability failures
Over six months, a validated HPLC method shows a rising trend of system suitability failures at one site. How should this be handled within the USP <1220> lifecycle?

A. As Stage 1 work, since the failures show the ATP was wrongly defined at the outset.
B. As a reason for a transfer waiver under <1224>, moving testing to another site.
C. As Stage 3 input, where repeated failure is a trigger for re-evaluation or change.
D. As a routine laboratory matter, since validation already closed the assessment of the method.

**정답:** C

**해설**
- C: system suitability·추세 데이터는 **Stage 3 ongoing verification의 입력**이고, **반복 실패는 재검증·변경의 트리거**다.
- A: 추세 모니터링은 Stage 3의 일이다. ATP가 틀렸다고 단정할 근거는 없다.
- B: transfer waiver는 이전 시 정당화되는 면제다. 성능 저하 대응 수단이 아니다.
- D: 수명주기 개념은 검증 뒤에도 성능을 계속 모니터링하는 것이다.

---

### Q19 [R][Domain I] — Stage 2
In USP <1220>, Stage 2 Procedure Performance Qualification corresponds to which activity?

A. Monitoring and trending performance during routine use
B. Defining the ATP and studying robustness during development
C. Verifying a compendial method under actual conditions of use
D. Validation, demonstrating that the procedure meets its ATP

**정답:** D

**해설**
- D: Stage 2는 **검증**이다. 절차가 **ATP를 충족함을 입증**한다.
- A: 일상 사용 중 모니터링·추세는 Stage 3다.
- B: ATP와 robustness는 Stage 1 Procedure Design이다.
- C: 공정서 방법 적합성 확인은 <1226> verification이다.

---

### Q20 [A][Domain II] — USP monograph adopted
A site adopts the current USP assay monograph for its product and QC plans a full validation. What does 21 CFR Part 211 require for this method?

A. Full validation of each Q2(R2) characteristic, as for any method used for release testing
B. A waiver from method assessment, since compendial methods are validated by USP itself
C. Verification of suitability under actual conditions of use, following USP <1226>
D. Transfer of the method from USP laboratories by comparative testing under <1224>

**정답:** C

**해설**
- C: **211.194(a)(2)** 는 비공식 방법에만 검증을 요구한다. 공정서 방법은 **실제 사용 조건에서 적합함을 확인**하면 되고, USP **<1226>** verification이 그 틀이다.
- A: 공정서 방법에 전체 검증은 불요하다.
- B: 적합성 확인은 생략할 수 없다. 211.165(e)의 확립·문서화 요구도 공통으로 적용된다.
- D: <1224>는 실험실 간 이전이다. 공정서 방법 채택의 틀이 아니다.

---

### Q21 [R][Domain I] — <1225> vs <1226>
Which pairing of USP general chapters is correct?

A. <1225> verification of compendial procedures; <1226> validation of compendial procedures
B. <1225> system suitability for chromatography; <1226> validation of bioassays
C. <1225> transfer of analytical procedures; <1226> analytical procedure lifecycle
D. <1225> validation of compendial procedures; <1226> verification of compendial procedures

**정답:** D

**해설**
- D: **<1225> = validation**(새 USP 절차 작성 또는 비공식법 검증 틀), **<1226> = verification**(기존 USP 방법을 자기 제품·조건에서 쓸 때 적합성 확인)이다.
- A: 두 장의 역할이 뒤바뀌었다.
- B: system suitability는 <621>과 연결된다. <1225>가 아니다.
- C: 이전은 <1224>, 수명주기는 <1220>이다.

---

### Q22 [A][Domain II] — in-house method
A company develops its own HPLC method for a product with no compendial monograph. What does 21 CFR 211.194(a)(2) require?

A. Verification of suitability under actual conditions, as for a pharmacopoeial method
B. Full validation, because the method is not a compendial procedure
C. Qualification alone, with validation deferred until a monograph is published
D. System suitability data, provided each run meets criteria

**정답:** B

**해설**
- B: 211.194(a)(2)는 **비공식(non-compendial) 방법에 검증**을 요구한다.
- A: 적합성 확인만으로 되는 것은 공정서 방법이다.
- C: 모노그래프 발행까지 검증을 미룬다는 규정은 없다.
- D: system suitability는 run-level 점검이다. 검증을 대신하지 않는다.

---

### Q23 [R][Domain II] — 211.165(e)
Under 21 CFR 211.165(e), which attributes of test methods must be established and documented?

A. Specificity, system suitability, stability, and recovery
B. Accuracy, precision, specificity/selectivity, and range
C. Robustness, ruggedness, linearity, and detection limit
D. Accuracy, sensitivity, specificity, and reproducibility

**정답:** D

**해설**
- D: 211.165(e)는 **accuracy·sensitivity·specificity·reproducibility**의 확립·문서화를 요구한다. 공정서·비공식 방법에 공통이다.
- A·C: 211.165(e)의 문구가 아니다.
- B: 이것은 Q2(R2)의 검증 특성 목록이다. CFR 문구와 다르다.

---

### Q24 [A][Domain II] — EU routine use of a Ph. Eur. method
An EU site wants to start using a Ph. Eur. method in routine QC. Which approach matches EU expectations?

A. A USP <1224> transfer protocol with the EDQM laboratory acting as the sending unit
B. Confirmation of suitability in the user laboratory under EU GMP Chapter 6 and the Ph. Eur. general text
C. Approval of a Type II variation before first use, since adopting a compendial method changes the dossier
D. Full validation of the method per Q2(R2), because EU GMP does not recognise compendial status

**정답:** B

**해설**
- B: EU는 **EU GMP Chapter 6**(품질관리)과 **Ph. Eur.의 공정서 절차 이행에 관한 일반장**이 적용된다. 원칙은 <1226>과 같아서 검증 대신 **사용자 실험실의 이행 적합성 확인**이다. 일반장 번호는 확인이 필요해 여기서 쓰지 않는다.
- A: <1224>는 실험실 간 이전의 틀이다.
- C: 공정서 방법의 일상 사용 개시를 Type II로 다룬다는 근거는 교과서에 없다.
- D: 공정서 방법은 EU에서도 검증 대신 적합성 확인이다.

---

### Q25 [R][Domain II] — system suitability basis
Which references are associated with system suitability in the textbook?

A. 21 CFR 211.194(a)(2) and USP <1226>
B. 21 CFR 211.165(e) and USP <1225>
C. 21 CFR 610.10 and USP <1220>
D. 21 CFR 211.160(b) and USP <621>

**정답:** D

**해설**
- D: system suitability는 **211.160(b)**(실험실 통제)와 **USP <621>** 에 연결된다.
- A: 211.194(a)(2)와 <1226>은 공정서 방법 적합성 확인의 근거다.
- B: 211.165(e)와 <1225>는 시험법 특성 확립과 검증의 근거다.
- C: 610.10은 역가 시험, <1220>은 수명주기다.

---

### Q26 [An][Domain III] — SST is not validation
An inspector finds that a method was never validated. The site argues that it has passed system suitability on every run for two years. Evaluate the argument.

A. It succeeds if the trend data are submitted to the agency as a Stage 2 performance qualification report.
B. It succeeds, because consistent passing results over two years show the procedure is fit for its purpose.
C. It fails merely because two years is short; a longer record would be accepted as validation.
D. It fails; system suitability shows the system works that day, not that the procedure is fit for purpose.

**정답:** D

**해설**
- D: system suitability는 **그날 그 시스템이 정상 작동**하는지 보는 run-level 점검이다. validation은 **절차 자체가 목적에 맞음**을 입증하는 Stage 2 활동이다. 통과 기록이 검증을 대신하지 않는다.
- A: 추세 데이터를 Stage 2 보고서로 바꾸는 규정은 없다.
- B: 통과 이력은 Stage 3의 입력이지 검증 증거가 아니다.
- C: 기간의 문제가 아니라 성격의 문제다.

---

### Q27 [A][Domain III] — <1224> approaches
A sponsor will transfer a validated potency ELISA to a CDMO. Which list gives the transfer approaches in USP <1224>?

A. Revalidation, parametric release, comparability protocol, and waiver
B. Comparative testing, co-validation, revalidation, and transfer waiver
C. Co-validation, compendial verification, bracketing, and matrixing
D. Comparative testing, concurrent release, retrospective validation, and audit

**정답:** B

**해설**
- B: <1224>의 네 접근은 **comparative testing·co-validation·revalidation·transfer waiver**다.
- A: parametric release는 Annex 17, comparability protocol은 314.70(e)의 개념이다.
- C: compendial verification은 <1226>의 주제다. bracketing·matrixing도 이전 접근이 아니다.
- D: concurrent release, retrospective validation, audit는 <1224>의 접근이 아니다.

---

### Q28 [A][Domain III] — bioassay transfer design
For transferring a cell-based bioassay to a CDMO, which design is typical?

A. Full revalidation at the CDMO, without testing at the sending laboratory
B. Transfer waiver, because bioassays are too variable for a meaningful comparison
C. Verification under <1226>, since the bioassay is already validated
D. Comparative testing of the same samples at both sites, with precision criteria

**정답:** D

**해설**
- D: 생물검정은 **비교 시험 + 정밀도 기준**이 보통이다.
- A: revalidation도 <1224> 접근의 하나지만, 교과서가 생물검정에 보통이라고 한 것은 비교 시험이다.
- B: waiver는 정당화될 때의 선택지다. 변동성은 면제 근거가 아니다.
- C: <1226>은 공정서 방법의 적합성 확인이다. 실험실 간 이전이 아니다.

---

### Q29 [R][Domain III] — not a <1224> approach
Which of the following is NOT one of the USP <1224> transfer approaches?

A. Compendial verification
B. Co-validation
C. Transfer waiver
D. Comparative testing of samples

**정답:** A

**해설**
- A: compendial verification은 **<1226>** 의 주제다. <1224>의 네 접근에 없다.
- B·C·D: comparative testing, co-validation, transfer waiver는 revalidation과 함께 <1224>의 네 접근이다.

---

### Q30 [A][Domain III] — transfer protocol content
A transfer protocol is drafted for moving a release assay between sites. Which element must be fixed before testing starts?

A. The variation category for the receiving site's approval
B. The CTD section in which the transfer results will be filed
C. Acceptance criteria, such as mean difference and precision
D. The new ATP for the procedure at the receiving site

**정답:** C

**해설**
- C: 이전 프로토콜엔 책임·시료·기준물질·시험 설계·**사전 합격 기준**(예: 평균 차이·정밀도)·일탈 처리·교육 기록이 들어간다.
- A: variation 분류는 프로토콜 구성 요소가 아니다.
- B: CTD 위치는 프로토콜의 필수 요소로 제시되지 않았다.
- D: 이전은 같은 절차를 옮기는 것이다. 새 ATP를 정의하지 않는다.

---

### Q31 [A][Domain III] — co-validation
A receiving laboratory takes part in the original validation of a new method so that it can test commercial batches at launch. Which <1224> approach is this?

A. Comparative testing
B. Revalidation
C. Transfer waiver
D. Co-validation

**정답:** D

**해설**
- D: 검증에 수용 실험실이 참여하는 것이 **co-validation**이다.
- A: comparative testing은 같은 시료를 양쪽에서 시험해 비교한다.
- B: revalidation은 수용 실험실이 전체 또는 부분 재검증을 하는 것이다.
- C: waiver는 정당화된 경우 이전 시험을 면제하는 것이다.

---

### Q32 [A][Domain III] — transfer waiver condition
A sponsor proposes a transfer waiver under USP <1224> for moving a method to a second site. What is the condition for this approach?

A. It requires prior approval via a PAS.
B. It is limited to compendial methods.
C. It must follow co-validation first.
D. It is used when it can be justified.

**정답:** D

**해설**
- D: <1224>의 transfer waiver는 **정당화될 때** 쓸 수 있다.
- A: PAS 승인을 waiver 조건으로 두는 근거는 교과서에 없다.
- B: waiver를 공정서 방법에 한정하는 내용은 없다.
- C: co-validation은 별개의 접근이다. waiver의 전제가 아니다.

---

### Q33 [R][Domain II] — application requirements
Which US regulations require analytical procedures and validation data in the marketing application?

A. 21 CFR 314.70(e) and 610.10
B. 21 CFR 211.160(b) and 600.3(s)
C. 21 CFR 314.50(d)(1) and 601.2
D. 21 CFR 211.165(e) and 211.194(a)(2)

**정답:** C

**해설**
- C: 신청서 측 근거는 **314.50(d)(1)(NDA)과 601.2(BLA)** 다.
- A: 314.70(e)는 comparability protocol, 610.10은 역가 시험이다.
- B: 211.160(b)는 실험실 통제, 600.3(s)는 potency 정의다.
- D: 211.165(e)·211.194(a)(2)는 GMP가 "검증됐고 문서화됐나"를 묻는 근거다. 신청서 요구가 아니다.

---

### Q34 [A][Domain II] — CTD location, drug substance
Where in the CTD are validation data for drug substance analytical procedures placed?

A. 3.2.S.4.3
B. 2.3 QOS
C. 3.2.S.4.2
D. 3.2.P.5.3

**정답:** A

**해설**
- A: 원료 분석법의 **검증은 3.2.S.4.3**이다.
- B: 2.3 QOS는 요약이다.
- C: 3.2.S.4.2는 원료 분석 절차 자체다.
- D: 3.2.P.5.3은 완제 검증이다.

---

### Q35 [A][Domain II] — CTD location, drug product
A reviewer asks where the finished product's analytical procedures and their validation are filed. Which pairing is correct?

A. Procedures in 3.2.P.5.2; validation in 3.2.P.5.3
B. Procedures in 3.2.P.5.3; validation in 3.2.P.5.2
C. Procedures in the 2.3 QOS; validation in 3.2.P.5.2
D. Procedures in 3.2.S.4.2; validation in 3.2.S.4.3

**정답:** A

**해설**
- A: 완제는 **3.2.P.5.2(절차)·3.2.P.5.3(검증)** 이다.
- B: 두 위치가 뒤바뀌었다.
- C: 2.3 QOS는 요약이다. 절차 본문의 위치가 아니다.
- D: 3.2.S.4.2·3.2.S.4.3은 원료의 위치다.

---

### Q36 [R][Domain II] — regional CTD structure
How does the CTD placement of method validation data differ between the US, EU and Japan?

A. Japan requires validation data in Module 5, alongside bioanalytical reports under M10.
B. The US uses Module 3 while the EU places method data in Module 1 regional sections.
C. It does not differ; all three follow M4Q, with 3.2.S.4/3.2.P.5 and a 2.3 QOS summary.
D. The EU requires method validation in the QOS alone, with full data available on request.

**정답:** C

**해설**
- C: EU·일본도 미국과 **동일(M4Q)** 하다. 원료 3.2.S.4.2–4.3, 완제 3.2.P.5.2–5.3, 요약 2.3 QOS다.
- A: 일본도 M4Q 위치를 따른다.
- B: EU도 Module 3에 둔다. Module 1이 아니다.
- D: EU도 3.2.S.4·3.2.P.5에 검증 데이터를 둔다.

---

### Q37 [A][Domain II] — HPLC to UPLC, US
After approval of an NDA, a firm replaces its HPLC assay with an equivalent UPLC method. The specification is unchanged and comparative data show equivalence. How is the change usually reported in the US?

A. CBE-0, because the new method has a shorter run time
B. Prior approval supplement, as for any change to an approved method
C. Internal change control, since equivalence takes the change outside 21 CFR 314.70
D. Annual report or CBE-30, supported by the comparative data

**정답:** D

**해설**
- D: FDA 2004 *Changes to an Approved NDA/ANDA* 기준으로 동등성이 입증되고 규격이 그대로면 **annual report 또는 CBE-30**이다.
- A: 교과서는 이 변경을 AR 또는 CBE-30으로 둔다.
- B: PAS는 규격을 완화·삭제할 때다.
- C: 동등해도 제출 대상이다. 비교 검증 데이터가 근거가 된다.

---

### Q38 [A][Domain II] — HPLC to UPLC, EU
The same HPLC-to-UPLC change is made for a small-molecule product authorised in the EU. Which classification applies?

A. Type II under Q.II.d.1, since any method change affects the specification
B. An extension application, since the analytical technology changes
C. Type II under Q.II.d.2, since UPLC is a new non-standard technique
D. Type IA or IB under Q.II.d.2, as a minor change to an equivalent method

**정답:** D

**해설**
- D: 완제 시험법 변경은 **Q.II.d.2**이고, 사소하면 **IA**(a), 그 밖의 동등 방법 교체는 **IB**(d)다.
- A: Q.II.d.1은 규격 변경이다. 규격이 그대로인 시험법 교체가 아니다.
- B: 시험법 교체를 extension으로 다룬다는 근거는 교과서에 없다.
- C: 같은 원리의 동등 방법 교체는 IA/IB다. Type II는 생물·면역·면역화학 분석법(Q.II.d.2(c))이다.

---

### Q39 [A][Domain II] — EU, biological product method change
A marketing authorisation holder of a biological medicinal product replaces a release test with a new cell-based bioassay. How is this classified in the EU?

A. Type II under Q.II.d.2, as a new biological analytical procedure
B. Type IB, because biological products follow the same route as small molecules
C. Type IA, provided the new method was validated per Q2(R2) before implementation
D. Type II under Q.II.d.1, as a deletion of a specification parameter

**정답:** A

**해설**
- A: Q.II.d.2(c)에서 **생물·면역·면역화학 분석법**의 도입·교체·대폭 변경은 **Type II**다.
- B: 생물 분석법 교체는 IB(Q.II.d.2(d) 그 밖의 변경)가 아니라 II다.
- C: 검증을 마쳤다고 IA가 되지 않는다. 분류는 변경의 성격으로 정한다.
- D: Q.II.d.1은 규격 변경이다. 이 사례는 시험법 변경이다.

---

### Q40 [A][Domain II] — dropping dissolution, US
A sponsor wants to drop the dissolution test from an approved specification because "the ATP shows it is not critical." What is required in the US?

A. A prior approval supplement under 21 CFR 314.70(b)
B. Internal change control, justified by the ATP
C. A CBE-30, since the ATP serves as a comparability protocol
D. An annual report, since the method itself is not changed

**정답:** A

**해설**
- A: 규격에서 시험을 **삭제·완화**하는 것은 314.70에서 **PAS**다. ATP 논리는 정당화 근거일 뿐 제출을 면제하지 않는다.
- B: 규격은 Q12에서도 핵심 EC다. 변경관리만으로 처리할 수 없다.
- C: ATP가 314.70(e)의 comparability protocol이 되지는 않는다.
- D: AR은 동등 방법 교체에 쓰인다. 규격 삭제가 아니다.

---

### Q41 [A][Domain II] — dropping dissolution, EU
The same dissolution deletion is proposed for the EU authorisation. How is it classified?

A. A notification under the PQS, using Q12 established conditions
B. Type II under Q.II.d.1, as a deletion from the specification
C. Type IB under Q.II.d.2, supported by the ATP justification
D. Type IA under Q.II.d.2, since the method itself is unchanged

**정답:** B

**해설**
- B: 품질에 중요한 규격 항목 삭제는 EU에서 **Type II(Q.II.d.1(f))** 다. 용출 같은 중요 항목은 사소 삭제(IA) 조건을 채우지 못한다.
- A: EU는 variation 분류가 법정이라 Q12 EC 유연성을 완전히 받지 못한다.
- C·D: Q.II.d.2는 시험법 변경이다. 규격 삭제는 Q.II.d.1에 속한다.

---

### Q42 [An][Domain IV] — US vs EU room for analytical changes
A global sponsor wants to agree in advance how future analytical changes will be handled. Which comparison is accurate?

A. Both regions accept Q12 equally, so a single global change plan replaces the regional reporting categories.
B. The EU offers more room, because Reg 1234/2008 adopted the Q12 established conditions concept in full.
C. US: comparability protocol under 314.70(e); EU: statutory variation classes limit Q12, but a PACMP is possible.
D. The US allows prior agreement just for biologics, while the EU allows a PACMP for any product type.

**정답:** C

**해설**
- C: 미국은 **314.70 카테고리 + comparability protocol(314.70(e))** 로 사전 합의가 가능하고 Q12 EC 개념도 수용한다. EU는 **variation 분류가 법정**(Reg 1234/2008)이라 Q12 유연성을 완전히 못 받지만 **PACMP**는 가능하다.
- A: 두 지역의 수용 정도가 다르다.
- B: 방향이 반대다. EU가 법정 분류 때문에 더 제약된다.
- D: 314.70(e)를 생물의약품 한정으로 두는 내용은 교과서에 없다.

---

### Q43 [R][Domain IV] — new EU Variations Guidelines
What effect did the new EU Variations Guidelines, applied from 2026-01-15, have on post-approval analytical changes?

A. They moved analytical changes out of variations and into GMP change control.
B. They eased some points, but the basic classification structure remained.
C. They have not yet applied on the reference date and are outside the exam.
D. They adopted Q12 in full and removed the statutory variation categories.

**정답:** B

**해설**
- B: 2026-01-15 적용된 새 Variations Guidelines는 **일부 완화**했지만 **기본 구조는 같다**. 기준일 이전에 적용됐으므로 시험 범위에 든다.
- A: 분석법 변경은 계속 variation으로 다룬다.
- C: 적용일이 기준일보다 앞선다.
- D: Q12 유연성을 완전히 받지 못하는 구조는 그대로다.

---

### Q44 [An][Domain IV] — "equivalent, so no filing"
A site manager argues that because a replacement method is fully equivalent, no regulatory filing is needed in either region. Evaluate.

A. Correct, because equivalence means the approved dossier still accurately describes the method in use.
B. Incorrect, because any method change needs a PAS in the US and a Type II in the EU.
C. Incorrect; it is still filed (AR/CBE-30 in the US, IA/IB in the EU), supported by comparative data.
D. Correct in the EU, where IA/IB changes are handled internally, but not in the US.

**정답:** C

**해설**
- C: 동등한 방법 교체도 미국 **AR/CBE-30**, EU **IA/IB**로 제출 대상이다. **비교 검증 데이터**가 근거다.
- A: 동등성은 제출 범주를 낮출 뿐 제출을 없애지 않는다.
- B: PAS·Type II는 규격 완화·삭제나 생물 분석법 교체의 경우다.
- D: EU의 IA/IB도 variation이다. 내부 처리로 끝나지 않는다.

---

### Q45 [R][Domain I] — ICH M10 scope
What does ICH M10 (2022) harmonise?

A. Validation of release and stability methods for drug substances and finished drug products
B. Transfer of bioanalytical methods between CROs under a comparative testing design
C. Bioanalytical validation of drug and metabolite assays by chromatography and ligand binding
D. Validation of biomarker and immunogenicity assays used as endpoints in clinical trials

**정답:** C

**해설**
- C: M10은 **생체시료 중 약물·대사체 농도 측정**(PK/TK/BE용) 분석법에서 **크로마토그래피법과 리간드 결합법**의 검증·시료 분석 요건을 통일했다.
- A: 출하·안정성 시험법 검증은 Q2(R2)의 범위다.
- B: 실험실 간 이전은 <1224>의 주제다.
- D: 바이오마커와 면역원성(ADA) 분석은 M10 범위 밖이다.

---

### Q46 [A][Domain I] — biomarker assay
A sponsor's clinical team plans to validate a serum biomarker assay "to ICH M10" for an exploratory endpoint. What is the issue?

A. Biomarker assays fall outside the scope of M10 and follow separate guidance.
B. M10 covers biomarkers in BE studies, but not exploratory clinical endpoints.
C. M10 is limited to chromatographic methods, so a ligand-binding biomarker assay is out of scope.
D. Biomarker assays must instead be validated under Q2(R2) as release tests.

**정답:** A

**해설**
- A: **바이오마커는 M10 범위 밖**이고 별도 가이던스를 따른다.
- B: M10은 바이오마커를 다루지 않는다. 시험 유형에 따른 예외가 아니다.
- C: M10은 리간드 결합법도 포함한다. 문제는 분석 대상이 바이오마커라는 점이다.
- D: Q2(R2)는 품질 시험법 검증이다. 바이오마커 분석의 틀로 제시되지 않았다.

---

### Q47 [A][Domain I] — ADA assay
Which assay used in a monoclonal antibody program falls within ICH M10?

A. A ligand-binding assay for drug concentration in PK samples
B. A pharmacodynamic biomarker assay in a Phase 2 dose-finding study
C. An anti-drug antibody screening assay for immunogenicity
D. A cell-based potency assay used for lot release

**정답:** A

**해설**
- A: PK용 **약물 농도** 측정 리간드 결합법은 M10 범위다.
- B: 바이오마커 분석은 M10 범위 밖이다.
- C: 면역원성(ADA) 분석은 M10 범위 밖이다.
- D: 출하용 역가 시험은 Q2(R2) 검증과 610.10의 영역이다.

---

### Q48 [R][Domain I] — 610.10
Which regulation requires potency testing for biological products in the US?

A. 21 CFR 600.3(s)
B. 21 CFR 211.165(e)
C. 21 CFR 610.10
D. 21 CFR 601.2

**정답:** C

**해설**
- C: **610.10**이 생물의약품 역가 시험을 요구한다.
- A: 600.3(s)는 potency의 **정의**다. 시험 요구 조항이 아니다.
- B: 211.165(e)는 시험법 특성의 확립·문서화다.
- D: 601.2는 BLA 신청서 요건이다.

---

### Q49 [R][Domain I] — potency definition
How does 21 CFR 600.3(s) define potency?

A. The clinical effect observed in the pivotal trial, expressed relative to a reference product
B. The specific ability of the product to effect a given result, measured by laboratory tests
C. The quantity of active substance per dose, measured by a validated chromatographic assay
D. The biological activity shown in animal models, confirmed by a release bioassay on each lot

**정답:** B

**해설**
- B: 600.3(s)의 potency는 **특정 결과를 낼 수 있는 능력**이고 **실험실 시험으로 측정**한다.
- A: 임상 효과는 정의에 들어가지 않는다. 실험실 시험이 기준이다.
- C: 함량 정량은 potency 정의가 아니다.
- D: 동물 모델은 600.3(s) 정의의 요소가 아니다.

---

### Q50 [A][Domain I] — MSC-EV potency approach
A sponsor is designing the potency strategy for an MSC-derived extracellular vesicle product. Which approach follows the FDA 2011 guidance?

A. A single particle-count assay, since EV number correlates with dose
B. Clinical response data from Phase 1, used instead of a laboratory potency test
C. A matrix of an MoA-related bioactivity assay plus surrogate quantitative tests
D. Identity testing by surface markers, which 600.3(s) accepts in place of potency

**정답:** C

**해설**
- C: FDA *Potency Tests for CGT Products*(2011)의 **matrix approach**다. 작용기전 관련 **생물학적 활성 시험**(예: 대식세포 표현형 전환 assay)과 대리 정량 시험(EV 수·마커)을 조합한다.
- A: 세포·EV 제품은 단일 역가 시험이 어려워 복수 분석법을 조합한다.
- B: potency는 실험실 시험으로 측정한다.
- D: 600.3(s)는 potency를 실험실 시험으로 측정하는 능력으로 정의한다. 마커 확인만으로 대신하지 않는다.

---

### Q51 [A][Domain V] — Potency Assurance draft on the reference date
A regulatory plan for a cell therapy cites FDA potency guidance. On the exam reference date of 2026-09-01, which description is correct?

A. The 2011 Potency Tests guidance is final; the 2023 Potency Assurance document is a draft.
B. Both documents are drafts, so FDA potency guidance for cell therapies is not yet in force.
C. The 2011 guidance is withdrawn, and the 2023 draft binds sponsors until it is finalised.
D. The 2023 Potency Assurance document is final and has replaced and withdrawn the 2011 guidance.

**정답:** A

**해설**
- A: 기준일 현재 **2011 *Potency Tests for CGT Products*가 최종 가이던스**이고, 2023-12 *Potency Assurance*는 **초안**이다. 초안은 준수 근거가 아니다. 이후 최종화가 있더라도 기준일 이후라 시험에 적용되지 않는다.
- B: 2011 가이던스는 최종이다.
- C: 2011 가이던스가 철회됐다는 근거는 없고, 초안은 구속력이 없다.
- D: 기준일 현재 2023 문서는 초안이다.

---

### Q52 [An][Domain I] — rationale for the matrix approach
Why does FDA guidance favour a matrix approach for potency of cellular products?

A. A single potency test is hard to establish, so several assays are combined to cover the mechanism.
B. A matrix lets the sponsor defer validation of each assay until after licensure.
C. Cellular products are exempt from 610.10, so a matrix serves as a voluntary substitute for potency.
D. Matrix testing reduces the number of lots tested, as in stability bracketing designs.

**정답:** A

**해설**
- A: 세포·EV 제품은 **단일 역가 시험이 어려워** 작용기전 관련 활성 시험과 대리 정량 시험을 **조합**한다.
- B: BLA 때 Q2(R2) 검증 + Q6B 규격으로 간다. 허가 뒤로 미루지 않는다.
- C: 610.10은 생물의약품에 역가 시험을 요구한다. 면제 근거는 없다.
- D: 여기서 matrix는 복수 분석법 조합이다. 시료 수 감축 설계가 아니다.

---

### Q53 [R][Domain I] — Q6B specification
How does ICH Q6B describe a specification?

A. A list of in-process controls agreed with the inspector at pre-approval inspection
B. A list of tests, references to analytical procedures, and acceptance criteria
C. A set of process parameters with proven acceptable ranges for manufacture
D. A summary of validation results for each release test filed in 3.2.P.5.3

**정답:** B

**해설**
- B: Q6B 규격 = **시험 목록 + 분석 절차 참조 + 합격 기준**이다.
- A: 규격은 신청서로 승인되는 품질 기준이다. 실사관과 합의하는 목록이 아니다.
- C: 공정 파라미터 범위는 규격의 정의가 아니다.
- D: 검증 결과 요약은 규격이 아니다.

---

### Q54 [A][Domain I] — Q6A vs Q6B
A sponsor drafting the specification for a recombinant protein cites ICH Q6A throughout. What is the correction?

A. Use ICH Q2(R2), which defines the specification content for biological products.
B. Use ICH Q6B, which covers biological products including biological activity.
C. Keep Q6A, since Q6B is limited to cellular and gene therapy products.
D. Use ICH M10, since protein products are quantified by ligand-binding assays.

**정답:** B

**해설**
- B: 생물의약품 규격은 **Q6B**다. 생물활성(역가) 항목이 포함된다.
- A: Q2(R2)는 검증 가이드라인이다. 규격 내용을 정하지 않는다.
- C: Q6B를 세포·유전자치료제 한정으로 두는 내용은 교과서에 없다.
- D: M10은 생체시료 중 약물 농도 분석이다.

---

### Q55 [A][Domain V] — justifying acceptance criteria
At BLA submission, how should the acceptance criteria for a potency assay in the Q6B specification be justified?

A. By the validation range, since acceptance criteria must equal the reportable range
B. By literature values for similar products rather than own lots
C. By experience with batches used in clinical and stability studies
D. By the ATP alone, since development performance criteria set limits

**정답:** C

**해설**
- C: Q6B에서 합격 기준은 **임상·안정성 배치 경험**으로 정당화한다.
- A: 검증 range와 합격 기준이 같아야 한다는 규정은 없다.
- B: 자사 배치 경험이 근거다.
- D: ATP는 분석 성능 기준이다. 출하 한도의 근거가 아니다.

---

### Q56 [A][Domain V] — methods at IND/Phase 1
An EV product enters Phase 1 under an IND. What is the expected state of its analytical methods?

A. Each release and stability method validated to Q2(R2), with reference standards established
B. Methods qualified as fit for purpose, with reliability shown for the safety-related tests
C. Key methods validated to support pivotal data and comparability, with specifications set
D. Methods under development, with sterility and endotoxin testing deferred until Phase 2

**정답:** B

**해설**
- B: IND/Phase 1에선 방법이 **목적에 적합(qualified)** 하고, 무균·엔도톡신·확인·역가 대리 같은 **안전성 관련 시험은 신뢰성을 입증**한다. 전체 검증은 불요하다(FDA 2015, CGT CMC 가이던스).
- A: 모든 출하·안정성 시험의 Q2(R2) 검증은 **BLA** 기대다.
- C: 핵심 시험 검증과 규격 잠정 확정은 **Phase 3 전** 기대다.
- D: 안전성 관련 시험은 Phase 1부터 신뢰성을 입증해야 한다.

---

### Q57 [A][Domain V] — before pivotal Phase 3
What is expected of analytical methods before pivotal Phase 3 begins?

A. Validation of potency alone, since other tests can rely on compendial verification
B. Key tests validated for pivotal data and comparability, specifications provisionally set
C. Methods qualified for use, since validation is required at the BLA stage
D. Each method validated to Q2(R2) with a full Q14 lifecycle package and final specifications

**정답:** B

**해설**
- B: Phase 3 전에는 pivotal 데이터·comparability를 뒷받침할 **핵심 시험 검증 완료**와 **규격 잠정 확정**이 기대된다.
- A: 핵심 시험 전반이 검증 대상이다.
- C: qualified만으로 되는 시점은 IND/Phase 1이다.
- D: 전체 Q2(R2) 검증과 Q14 수명주기 문서는 BLA 기대다.

---

### Q58 [A][Domain V] — methods at BLA
Which description matches the expected state of analytical methods at BLA submission?

A. Key tests validated, with the rest qualified and validated after approval
B. Release and stability tests validated per Q2(R2), plus Q14 documents and reference standards
C. Methods qualified for intended use, with full validation committed as a post-licensure step
D. Potency validated under M10, with other tests verified under USP <1226>

**정답:** B

**해설**
- B: BLA에선 **모든 출하·안정성 시험의 Q2(R2) 검증**, **Q14 수명주기 문서**, **기준물질 확립**이 기대된다.
- A: 핵심 시험만 검증하는 것은 Phase 3 전 수준이다.
- C: qualified 수준은 IND/Phase 1이다.
- D: M10은 생체시료 분석이다. 출하 역가 시험의 틀이 아니다.

---

### Q59 [An][Domain V] — phase-appropriate plan: wrong statement
Which statement about a phase-appropriate analytical plan is INCORRECT?

A. The method schedule is worked back from the timing of process lock.
B. Full validation is not required at IND, but safety-related tests must be shown reliable.
C. Validation may wait until after BLA approval if methods were qualified at Phase 1.
D. Key tests should be validated before pivotal Phase 3 to support comparability.

**정답:** C

**해설**
- C: 틀린 진술이다. **BLA 시점에 모든 출하·안정성 시험이 Q2(R2) 검증**돼야 한다.
- A: 일정은 공정 lock과 맞물려 역산한다. 맞는 진술이다.
- B: IND/Phase 1은 qualified 수준이고 안전성 관련 시험은 신뢰성을 입증한다. 맞는 진술이다.
- D: Phase 3 전 핵심 시험 검증 완료가 기대된다. 맞는 진술이다.

---

### Q60 [R][Domain III] — RTRT definition
How is real-time release testing (RTRT) defined in ICH Q8(R2)?

A. Evaluating and assuring quality from process data, in place of finished-product testing
B. Release of each batch on the day of manufacture, using expedited finished-product tests
C. Release based on stability data, without testing individual commercial batches
D. Release by the QP before finished-product results are available, at the sponsor's risk

**정답:** A

**해설**
- A: RTRT는 **공정 데이터(PAT)로 품질을 평가·보증**해 **완제 시험을 대체**하는 것이다(Q8(R2) 정의).
- B: 완제 시험을 빨리 하는 것이 아니라 대체하는 것이다.
- C: 안정성 데이터는 RTRT의 근거가 아니다.
- D: 결과 전 출하를 RTRT로 정의하지 않는다.

---

### Q61 [A][Domain III] — NIR for content uniformity
Manufacturing proposes RTRT with an NIR model for tablet content uniformity. Which set of texts applies?

A. ICH M10 for model validation, USP <1224> for model transfer, and 21 CFR 610.10
B. Q2(R2)/Q14 multivariate provisions, EU Annex 17, and the FDA PAT guidance (2004)
C. USP <1226> for model verification, EU GMP Chapter 6, and ICH Q6B for the specification
D. ICH Q2(R2) robustness testing, EU Annex 1, and the FDA 2011 potency guidance

**정답:** B

**해설**
- B: NIR 모델은 **Q2(R2)/Q14 다변량 절차 조항**으로 검증·수명주기 관리하고, EU **Annex 17**(RTRT·parametric release), 미국 **PAT guidance(2004)** 가 적용된다.
- A: M10은 생체시료 분석, 610.10은 생물의약품 역가다.
- C: <1226>은 공정서 방법 적합성 확인이다. Q6B는 생물의약품 규격이다.
- D: robustness는 Q2(R2) 검증 특성이 아니고, 2011 가이던스는 세포·유전자치료제 역가다.

---

### Q62 [An][Domain II] — RTRT regulatory status
A firm wants to introduce RTRT through internal change control, arguing that it only replaces lab testing with process data. Evaluate.

A. Not acceptable, because EU Annex 17 limits RTRT to sterile products.
B. Acceptable if the NIR model passed system suitability on three consecutive commercial batches.
C. Not acceptable; RTRT is part of the specification, so it needs approval and a fallback test.
D. Acceptable, because RTRT is a GMP release decision rather than part of the dossier.

**정답:** C

**해설**
- C: RTRT는 **규격의 일부**라 **승인 대상**이고, 실패 시 **전통 시험으로의 fallback** 규정이 필요하다.
- A: Annex 17은 RTRT와 parametric release를 다룬다. 무균 제품 한정이라는 내용은 교과서에 없다.
- B: system suitability 통과는 승인을 대신하지 않는다.
- D: RTRT는 규격에 들어가므로 dossier 사항이다.

---

### Q63 [An][Domain IV] — potency evolution across phases
A cell therapy sponsor asks how its matrix potency assays should evolve from first-in-human to licensure. Which plan is consistent with the textbook?

A. Validate under M10 at Phase 1, then move to Q2(R2) if FDA requests it at the BLA stage.
B. Raise quantification and validation by phase, reaching Q2(R2) validation and Q6B specs at BLA.
C. Replace bioactivity assays with surrogate counts by Phase 3, since surrogates are easier to validate.
D. Fix the Phase 1 assays unchanged through licensure, since changing them breaks comparability.

**정답:** B

**해설**
- B: 임상 단계별로 **정량화·검증 수준을 높여** BLA 땐 **Q2(R2) 검증 + Q6B 규격**으로 간다.
- A: M10은 생체시료 중 약물 농도 분석이다. 역가 시험의 틀이 아니다.
- C: matrix는 작용기전 관련 활성 시험과 대리 시험의 조합이다. 활성 시험을 빼지 않는다.
- D: 단계별로 수준을 높이는 것이 교과서의 접근이다.

---

### Q64 [R][Domain II] — FDA 2015 guidance
Which FDA guidance (2015) addresses analytical procedures and validation for drugs and biologics and supports the Phase 1 "qualified, not fully validated" expectation?

A. *Potency Tests for Cellular and Gene Therapy Products*
B. *PAT guidance* on process analytical technology and real-time release
C. *Changes to an Approved NDA or ANDA*
D. *Analytical Procedures and Methods Validation for Drugs and Biologics*

**정답:** D

**해설**
- D: FDA 2015 *Analytical Procedures and Methods Validation for Drugs and Biologics*가 분석법 가이던스이고, IND/Phase 1 기대의 근거로 인용된다.
- A: 2011 세포·유전자치료제 역가 가이던스다.
- B: PAT guidance는 2004이고 RTRT의 맥락이다.
- C: 2004 시판 후 변경 가이던스다.

---
