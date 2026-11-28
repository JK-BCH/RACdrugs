# 문제은행 — Ch.15 제약 개발과 제조: 설계와 시스템으로 만드는 품질

> **근거:** `textbook/Ch15.md` + `cards/Ch15.md` 검증 메모(ICH Q8(R2) 2009, Q9(R1) 2023-01, Q10 2008, Q11, Q12 2019, Q13 2022-11, Q14/Q2(R2) 2023-11, FDA Process Validation 2011, EudraLex Vol 4 Annex 15 2015-10·Annex 1 2023-08-25 시행·Annex 11 2011판, Dir 2017/1572, 21 CFR 211, 314.70(e), FDA OOS guidance 2006/2022, WHO TRS 986 Annex 2·TRS 961 Annex 7). 새 숫자 없음. 계산 문항은 위 날짜로만 계산했다. 기준일 2026-09-01 이후 사항은 시험 비적용으로만 다룬다.
> **형식:** 영문 시나리오 → 영문 선지 A~D → 정답 → 한국어 해설. 태그 `[R]/[A]/[An]` + Domain.
> **작성:** 2026-11-26. 64문항.

---

### Q01 [R][Domain I] — QTPP
In ICH Q8(R2) terminology, what is the quality target product profile (QTPP)?

A. The release specification table filed in the marketing application for the product.
B. The set of process parameters that must be monitored because they affect quality.
C. The multidimensional range of inputs shown to assure quality in the application.
D. A prospective summary of the quality characteristics that the drug product should have.

**정답:** D

**해설**
- D: **QTPP**는 제품이 갖춰야 할 품질 특성을 미리 요약한 목표다(Q8(R2)). QbD 흐름의 출발점이다.
- A: 규격은 control strategy의 한 요소다. QTPP는 규격표가 아니라 목표 요약이다.
- B: 품질에 영향을 줘 통제해야 하는 공정 파라미터는 **CPP**다.
- C: 품질 보증이 입증된 다차원 조합은 **design space**다.

---

### Q02 [R][Domain I] — CQA
Which description matches a critical quality attribute (CQA) under ICH Q8(R2)?

A. A property that should be within an appropriate limit or range to ensure product quality.
B. A process parameter whose variability has an impact on product quality and so is controlled.
C. A planned set of controls derived from product and process understanding at commercial scale.
D. Information whose change requires a regulatory submission, as agreed with the authority.

**정답:** A

**해설**
- A: **CQA**는 품질을 보장하려면 적절한 범위 안에 있어야 하는 물리·화학·생물학·미생물 속성이다(Q8(R2)).
- B: CQA에 영향을 주어 통제하는 공정 파라미터는 **CPP**다.
- C: 통제 집합은 **control strategy**다.
- D: 변경 시 규제 보고가 필요한 법적 구속 정보는 Q12의 **established conditions**다.

---

### Q03 [R][Domain I] — QbD sequence
Which sequence reflects the ICH Q8(R2) development logic from target to control?

A. QTPP → CPP → CQA → control strategy → design space
B. Control strategy → QTPP → CQA → CPP
C. QTPP → CQA → CPP → design space → control strategy
D. CQA → QTPP → design space → CPP → control strategy → RTRT

**정답:** C

**해설**
- C: Q8(R2)는 **QTPP → CQA → CPP → design space → control strategy** 순서로 목표에서 통제까지 내려간다.
- A: CPP는 CQA에 영향을 주는 파라미터이므로 CQA를 먼저 정해야 정의된다.
- B: control strategy는 제품·공정 이해의 결과로 마지막에 온다.
- D: 목표 요약(QTPP)이 CQA보다 먼저다.

---

### Q04 [R][Domain I] — design space definition
What is a design space under ICH Q8(R2)?

A. The physical manufacturing area qualified for a product, from URS through performance qualification.
B. The range of operating conditions confirmed by three consecutive conformance batches at full scale.
C. The multidimensional combination of input variables and parameters shown to assure quality.
D. The validated range of a single process parameter, studied one factor at a time during development.

**정답:** C

**해설**
- C: **design space**는 품질 보증이 입증된 입력 변수·공정 파라미터의 **다차원 조합**이다(Q8(R2)).
- A: 시설·설비 적격성(URS~PQ)은 Annex 15의 영역이다.
- B: "3배치"는 공정 검증의 옛 관행이고 design space 정의와 무관하다.
- D: 단일 파라미터 범위가 아니라 다차원 조합이다.

---

### Q05 [A][Domain II] — move inside design space
An approved design space covers granulation water 20–30% and mixing time 5–15 min. Production moves from 24%/8 min to 28%/12 min. What regulatory action is required?

A. A Type IB variation in the EU, since operating targets differ from the dossier.
B. A CBE-30 supplement in the US, because two parameters change at once.
C. A prior approval supplement, because the target set points are moving.
D. None; record the move through the PQS change management system and keep it on file.

**정답:** D

**해설**
- D: 승인된 design space **안에서의 이동은 변경이 아니다**(Q8(R2) §2.4). 다만 PQS 변경관리로 문서화한다(Q10).
- A: EU variation도 범위 밖 이동일 때의 절차다.
- B·C: 미국 시판 후 변경 절차(314.70)는 design space **밖**으로 갈 때 쓴다.

---

### Q06 [A][Domain II] — move outside design space
The same product's approved design space covers granulation water 20–30%. The site wants to run routinely at 34% water. How should this be handled?

A. As a post-approval change, under 314.70 in the US and the variation system in the EU.
B. As a continued process verification trend, recorded in the annual product quality review.
C. As an internal PQS change, since the design space concept removes reporting for process changes.
D. As a deviation closed by CAPA, because design space limits are guidance rather than commitments.

**정답:** A

**해설**
- A: design space **밖**으로 나가면 시판 후 변경이다. 미국은 **314.70**, EU는 **variation** 절차다.
- B: CPV는 통제 상태를 보이는 활동이다. 변경 절차를 대신하지 않는다.
- C: 보고 불요는 승인된 design space **안** 이동에만 해당한다.
- D: 승인된 design space는 신청서의 약속이다. 일상 운전을 일탈로 처리할 수 없다.

---

### Q07 [An][Domain II] — design space not approved
A company's development report describes a wide design space, but the marketing application approved only fixed set points. Production now wants to move within the wider range described in the report. Evaluate.

A. Acceptable, because the range was studied, documented and summarised in Module 3 during development.
B. Not acceptable, because design space movement needs a prior approval supplement in each case.
C. Acceptable, if the change control record cites the development report data.
D. Not acceptable without a variation or supplement, because the design space was not approved.

**정답:** D

**해설**
- D: 보고 없이 이동할 수 있는 조건은 design space가 **신청서에 승인된 상태**인 것이다. 승인되지 않았다면 고정값을 벗어나는 것은 시판 후 변경이다.
- A·C: 개발 보고서의 연구 데이터만으로는 규제상 승인된 design space가 아니다.
- B: 승인된 design space 안의 이동은 규제 조치가 필요 없다.

---

### Q08 [R][Domain I] — control strategy
A CMC writer is drafting Module 3 for a new tablet and must describe the control strategy that came out of the team's development studies. A reviewer of the draft asks her to state precisely what the term covers. Under ICH Q8(R2), what is a control strategy?

A. A planned set of controls, from product and process understanding, on materials, process, specifications and monitoring.
B. The document that collects established conditions and reporting categories for lifecycle tracking.
C. The list of process parameters shown to be unrelated to quality, which can therefore be left unmonitored in routine commercial production.
D. A post-approval protocol agreed with the authority that sets the reporting category for a future change.

**정답:** A

**해설**
- A: **control strategy**는 제품·공정 이해에 기반한 통제 집합(원료·공정·규격·모니터링)이다(Q8(R2)).
- B: ECs·보고 카테고리를 모은 문서는 Q12의 **PLCM 문서**다.
- C: 품질 무관 파라미터 목록은 control strategy의 정의가 아니다.
- D: 사전 합의 프로토콜은 Q12의 **PACMP**다.

---

### Q09 [A][Domain I] — CPP identification
During development, a team finds that compression force changes tablet dissolution, which must stay within its limit. How should compression force be classified?

A. As an established condition, because CPP is not a concept used in Q8(R2).
B. As a QTPP element, because it defines the target product profile.
C. As a CPP, because it affects a CQA and must be monitored or controlled.
D. As a CQA, because it is measured on each batch and recorded in the batch record.

**정답:** C

**해설**
- C: CQA(용출)에 영향을 주어 모니터·통제해야 하는 공정 파라미터는 **CPP**다(Q8(R2)).
- A: CPP는 Q8(R2)의 개념이다. Q12 ECs에 포함될 수 있어도 분류 자체는 CPP다.
- B: QTPP는 목표 품질 요약이고 공정 파라미터 목록이 아니다.
- D: CQA는 제품 속성이다. 압축력은 공정 파라미터다.

---

### Q10 [A][Domain I] — Q9(R1) additions
After a shortage caused by a single-source excipient supplier, a company's QA director updates its risk management SOP to the 2023 revision of ICH Q9. She wants to cite the new element that addresses this kind of event. Which item was added to quality risk management by ICH Q9(R1)?

A. The requirement that each risk assessment use the most formal method available.
B. Replacement of science-based decisions with a fixed list of mandated controls.
C. A fixed scoring scale that every risk assessment must use regardless of context.
D. Risks to product availability, which treats supply disruption as a quality risk to manage.

**정답:** D

**해설**
- D: Q9(R1)(2023-01)은 **제품 가용성 위험**, 즉 공급 중단을 품질 위험으로 관리하는 내용을 넣었다.
- A: **형식 수준(formality)** 은 위험·복잡성에 비례한다. 항상 최고 형식을 요구하지 않는다.
- B: 과학 기반 원칙은 그대로 유지됐다.
- C: Q9(R1)은 **주관성**을 관리하라는 것이다. 고정 점수표를 강제하지 않는다.

---

### Q11 [A][Domain I] — Q9(R1) formality
A QA head insists that a minor, well-understood labelling-line adjustment receive the same full FMEA as a new aseptic process. Which Q9(R1) concept addresses this?

A. Management review, which sets the format of every risk assessment.
B. Product availability risk, since labelling errors can lead to recalls and shortages.
C. Real-time release testing, which removes the need for risk assessment.
D. Formality proportional to the level of risk and complexity of the issue.

**정답:** D

**해설**
- D: Q9(R1)은 **형식 수준을 위험·복잡성에 비례**시키라고 명시했다. 위험이 낮고 이해가 충분하면 덜 형식적인 방법이 맞다.
- A: 경영검토는 Q10 PQS 요소다. 위험평가 형식을 정하는 장치가 아니다.
- B: 가용성 위험은 공급 중단에 관한 것이다. 형식 수준 문제가 아니다.
- C: RTRT는 Q8(R2)의 출하 방식이다. 위험평가를 없애지 않는다.

---

### Q12 [A][Domain I] — Q9(R1) subjectivity
A risk team routinely scores every unknown as "high" to be safe, and scores shift with whoever chairs the meeting. Which ICH Q9(R1) concern does this illustrate?

A. The use of subjective patient-reported outcomes as critical quality attributes.
B. The requirement to publish risk assessments as part of the public assessment report.
C. Bias and excessive conservatism that can distort risk scoring and the decisions based on it.
D. The need to replace expert judgement with automated algorithms in every assessment.

**정답:** C

**해설**
- C: Q9(R1)의 **주관성** 항목은 위험 평가의 편향과 과도한 보수성을 줄이라는 것이다.
- A: 환자 보고 결과는 CQA 정의와 무관하다.
- B: 위험평가 공개 요구는 Q9(R1)의 내용이 아니다.
- D: 전문가 판단을 알고리즘으로 바꾸라는 요구는 없다.

---

### Q13 [R][Domain I] — Q10 four elements
Which list gives the four elements of the pharmaceutical quality system in ICH Q10?

A. Design space; control strategy; CAPA system; management review of process and product quality metrics.
B. Process performance and product quality monitoring; CAPA; change management; management review.
C. Knowledge management; quality risk management; CAPA system; change management system.
D. Process validation; supplier qualification; CAPA; annual product review.

**정답:** B

**해설**
- B: Q10 PQS 4요소는 **공정성능·제품품질 모니터링, CAPA, 변경관리, 경영검토**다.
- A: design space·control strategy는 Q8(R2) 개념이다.
- C: 지식관리와 품질위험관리는 4요소를 받치는 **enabler**다.
- D: 공정 검증·공급자 적격성은 Q10의 4요소 목록에 없다.

---

### Q14 [A][Domain I] — Q10 enablers
A training slide lists "knowledge management" as the fifth element of the ICH Q10 quality system. How should the slide be corrected?

A. Knowledge management replaces management review as the fourth Q10 element of the system.
B. Knowledge management is an enabler, together with quality risk management.
C. Knowledge management belongs to ICH Q12 and is outside Q10 entirely.
D. Knowledge management is a Q11 concept limited to starting materials.

**정답:** B

**해설**
- B: Q10에서 **지식관리와 QRM은 enabler**다. 4요소(모니터링·CAPA·변경관리·경영검토)를 받친다.
- A: 경영검토는 4요소 중 하나로 남는다.
- C: Q10이 지식관리를 enabler로 명시한다.
- D: Q11은 원료 개발 지침이다. 지식관리를 다루는 곳이 아니다.

---

### Q15 [A][Domain I] — Q10 scope
A virtual biotech company with a Phase 1 MSC-EV product argues that it does not need a pharmaceutical quality system yet, because it has no marketing authorization and no commercial site. Its QA consultant disagrees and cites ICH Q10. Over which part of the product lifecycle does the ICH Q10 quality system apply?

A. Development, technology transfer, commercial manufacturing and discontinuation.
B. Clinical manufacturing, ending when the process is transferred to a commercial site.
C. Commercial manufacturing and discontinuation, but not development or transfer.
D. Commercial manufacturing, beginning once the marketing authorization is granted.

**정답:** A

**해설**
- A: Q10은 수명주기 전 단계(**개발·기술이전·상업생산·중단**)에 적용된다.
- B: 상업생산과 중단 단계도 포함된다.
- C·D: 개발과 기술이전도 Q10 범위에 포함된다.

---

### Q16 [R][Domain I] — ICH guideline roles
Which pairing of ICH guideline and subject is correct?

A. Q11 — continuous manufacturing, including batch definition by time or mass.
B. Q11 — development of drug substance, including starting material selection.
C. Q13 — development of drug substance, including starting material selection.
D. Q12 — pharmaceutical quality system elements such as CAPA and management review.

**정답:** B

**해설**
- B: **Q11**은 원료(drug substance) 개발과 **starting material 선정**을 다룬다.
- A·C: 연속생산은 **Q13**이다. 두 선지는 Q11과 Q13을 뒤바꿨다.
- D: PQS 요소는 **Q10**이다. Q12는 시판 후 수명주기 관리다.

---

### Q17 [A][Domain I] — established conditions
During a Q12 implementation project, a site manager proposes to change a CPP set point that is listed as an established condition in the approved dossier, treating it as an internal target. QA objects. In ICH Q12, what are established conditions (ECs)?

A. Conditions of storage that define shelf life and are established in the stability protocol.
B. Legally binding information needed to assure quality, whose change requires a regulatory submission.
C. The commercial batch sizes established by the first three process performance qualification runs at the site.
D. Internal operating targets that a site may change freely under its own deviation procedure.

**정답:** B

**해설**
- B: **ECs**는 제품 품질 보증에 필요해 변경 시 **규제 보고가 요구되는 법적 구속 정보**(규격·CPP 등)다(Q12).
- A: 보관 조건·유효기간은 안정성 시험의 영역이고 ECs 정의가 아니다.
- C: PPQ 배치에서 정해지는 배치 크기는 ECs 정의와 무관하다.
- D: ECs는 자유롭게 바꿀 수 있는 내부 목표가 아니다. 법적 구속력이 있다.

---

### Q18 [R][Domain II] — PACMP
An EU marketing authorization holder expects to scale up its tablet process in two years and wants to agree with the authority now on how the change will be supported and reported. The regulatory lead proposes a PACMP. What does a post-approval change management protocol (PACMP) under ICH Q12 do?

A. It replaces the annual report by summarising each change made in the past year.
B. It documents an OOS investigation and the CAPA taken after a confirmed failure.
C. It lists the established conditions and is updated each time a variation for the product is approved.
D. It agrees in advance the change strategy, studies and reporting category for a planned change.

**정답:** D

**해설**
- D: **PACMP**는 시판 후 변경을 미리 계획해 당국과 **변경 전략·시험·보고 카테고리**를 합의하는 프로토콜이다.
- A: 지난 변경을 요약하는 문서가 아니라 앞으로의 변경을 사전 합의하는 것이다.
- B: OOS 조사는 21 CFR 211.192의 영역이다.
- C: ECs·보고 카테고리를 모아 추적하는 문서는 **PLCM 문서**다.

---

### Q19 [A][Domain II] — PLCM document
A regulatory lead wants a single record that tracks a product's established conditions, their reporting categories and any agreed PACMPs over its lifecycle. Which ICH Q12 tool fits?

A. The site master file
B. The annual product quality review
C. The product lifecycle management (PLCM) document
D. The contamination control strategy required by Annex 1

**정답:** C

**해설**
- C: **PLCM 문서**는 ECs·보고 카테고리·PACMP를 모아 수명주기 관리를 추적한다(Q12).
- A: SMF는 EudraLex Vol 4 Part III의 GMP 관련 문서다.
- B: 제품 품질 검토는 Q12의 PLCM 도구가 아니다.
- D: CCS는 Annex 1의 오염 통제 전략이다.

---

### Q20 [A][Domain V] — US site transfer
A US sponsor will move tablet manufacturing to a second site next year and wants to reduce the reporting burden. What approach fits ICH Q12 and US regulation?

A. Submit the site data in a prior approval supplement first, then request a downgrade to CBE-30 after FDA approval of the move.
B. Have a comparability protocol approved first under 314.70(e), then report the change at a lower category such as CBE-30.
C. Submit a PLCM document alone, because listing a change there lowers its category to annual reporting.
D. File the move as an annual report item, since site changes are moderate changes by default.

**정답:** B

**해설**
- B: 미국에서 PACMP에 해당하는 **comparability protocol(314.70(e))** 을 먼저 승인받으면 실제 변경은 **더 낮은 카테고리(PAS→CBE-30)** 로 낼 수 있다.
- A: 하향은 변경 전에 프로토콜을 승인받아야 가능하다. 사후 요청 순서가 틀렸다.
- C: PLCM 문서는 추적 문서다. 보고 카테고리를 스스로 낮추지 않는다.
- D: 교과서는 사전 승인 프로토콜을 통해 카테고리를 낮추는 경로를 제시한다. 연차보고로 바로 처리하는 근거는 없다.

---

### Q21 [A][Domain IV] — EU PACMP downgrade
An EU marketing authorization holder obtains approval of a PACMP for a manufacturing change that would normally be a Type II variation. What does the approved PACMP allow?

A. The change can later be submitted at a lower category, such as Type IB.
B. The change must still be a Type II, because the EU does not recognise PACMPs.
C. The change moves to the US comparability protocol route under 314.70(e).
D. The change can be implemented with no notification of any kind to the authority.

**정답:** A

**해설**
- A: EU도 **PACMP 승인 후 variation 하향(Type II→IB)** 이 가능하다.
- B: EU에서 PACMP·PLCM은 사용할 수 있다. 제한되는 것은 ECs 기반 하향이다.
- C: 314.70(e)는 미국 규정이다. EU 신청과 무관하다.
- D: 하향일 뿐 보고가 사라지지 않는다.

---

### Q22 [An][Domain IV] — EU partial implementation of Q12
Why has ICH Q12 been only partially implemented in the EU?

A. The EU considers PACMPs incompatible with Reg 1234/2008, while EC-based downgrades of reporting categories are fully accepted.
B. The EU did not adopt Q12 at Step 4, so it remains an ICH draft in Europe.
C. The EU variation framework (Reg 1234/2008) fixes change classification by law, which conflicts with EC-based reporting.
D. EU GMP Annex 15 forbids post-approval protocols for any product made by continuous manufacturing.

**정답:** C

**해설**
- C: EU **variation 법체계(Reg 1234/2008)** 가 변경 분류를 법으로 정해, Q12의 **ECs 기반 유연한 보고**와 일부 도구가 기존 체계와 호환되지 않는다고 EU 이행 주석이 밝혔다.
- A: 방향이 반대다. PACMP는 쓸 수 있고 ECs 기반 하향이 제한된다.
- B: Q12는 2019 ICH 가이드라인이다. 문제는 EU 법체계와의 호환성이다.
- D: Annex 15는 검증 지침이다. 부분 이행의 원인이 아니다.

---

### Q23 [A][Domain V] — global Q12 strategy
A company files the same product in the US and the EU and has defined established conditions with downgraded reporting categories based on them. What is the practical consequence?

A. The EU requires the company to drop its PACMPs and PLCM document before using variations.
B. The EU will apply the US categories once FDA has approved the PLCM document for the product.
C. The EC-based categories apply in both regions, because Q12 is an ICH guideline that both regions adopted at Step 4.
D. Regional reporting categories must be managed separately, since EC-based downgrades are limited in the EU.

**정답:** D

**해설**
- D: EU에선 **ECs를 명시해 카테고리를 낮추는 접근이 제한**되므로 글로벌 제품은 지역별 보고 카테고리를 따로 관리한다.
- A: EU에서도 PACMP·PLCM은 쓸 수 있다.
- B: FDA 승인이 EU 카테고리를 정하지 않는다.
- C: EU는 Q12를 부분 이행했다. ECs 기반 하향이 그대로 적용되지 않는다.

---

### Q24 [An][Domain IV] — Reg 2024/1701
According to the textbook, what effect did the 2025–26 variation reforms (Reg 2024/1701 and new guidelines) have on Q12 implementation in the EU?

A. They removed the EU variation system and replaced it with established conditions.
B. They prohibited PACMPs for medicinal products authorised by the centralised procedure.
C. They made the EU implementation identical to the US comparability protocol route.
D. They widened flexibility to some extent within the existing EU variation framework.

**정답:** D

**해설**
- D: 교과서는 Reg 2024/1701·새 가이드라인이 유연성을 **일부** 넓혔다고 쓴다.
- A: variation 체계는 유지된다. 지역별 관리가 여전히 필요하다.
- B: PACMP 금지는 교과서 내용과 반대다.
- C: 미국과 같아졌다는 근거는 없다.

---

### Q25 [R][Domain I] — Q13 batch definition
A company converting its tablet line from batch to continuous manufacturing must state in its application how a batch will be defined, since there is no longer a single blender charge. The process engineers list several options. Under ICH Q13, how may a batch be defined in continuous manufacturing?

A. Retrospectively, after release testing shows which material met specification.
B. By the volume of a single blender charge, as in traditional batch processing.
C. As one calendar day of production, which is the only definition accepted.
D. By quantity of material, time, or production amount, defined in advance.

**정답:** D

**해설**
- D: Q13은 **batch를 질량·시간·생산량 등으로 사전 정의**하도록 한다.
- A: 배치는 사전에 정의한다. 시험 결과로 사후 정하지 않는다.
- B: 블렌더 1회 충전 기준은 배치 생산의 개념이다.
- C: 하루라는 단일 정의는 Q13에 없다. 여러 기준 중 선택한다.

---

### Q26 [A][Domain III] — Q13 diversion
During start-up of a continuous line, material is produced before the process reaches a state of control. Which ICH Q13 concept governs this material?

A. Blending it into the next batch, because continuous processes average out start-up variation over the run.
B. Reprocessing it under a PACMP, since start-up material is a post-approval change.
C. Material classification and diversion during transitions, using process dynamics and traceability.
D. Releasing it with the batch, provided end-product testing on a composite sample passes.

**정답:** C

**해설**
- C: Q13은 전환(start-up/shutdown) 중 **물질 분류·diversion**을 요구하고, **RTD·물질 추적성**으로 해당 물질을 식별한다.
- A: 통제 상태 밖의 물질을 섞는 것은 Q13 개념이 아니다.
- B: PACMP는 시판 후 변경 계획 도구다. 전환 물질 처리와 무관하다.
- D: Q13의 핵심은 state of control이다. 혼합 시료 시험으로 대체하지 않는다.

---

### Q27 [R][Domain I] — ICH dates
Which pairing of ICH guideline and Step 4 date is correct?

A. Q9(R1) — 2022-11
B. Q13 — 2023-11
C. Q14 and Q2(R2) — 2023-01
D. Q13 — 2022-11

**정답:** D

**해설**
- D: **Q13**(연속생산) Step 4는 **2022-11**이다.
- A: Q9(R1)은 **2023-01**이다.
- B: 2023-11은 **Q14/Q2(R2)** 의 날짜다.
- C: Q14/Q2(R2)는 2023-11이다. 2023-01은 Q9(R1)이다.

---

### Q28 [R][Domain III] — FDA Stage 1
In FDA's 2011 process validation guidance, what is the focus of Stage 1?

A. Qualification of facility, equipment and utilities followed by performance qualification runs.
B. Writing the user requirement specification and design qualification for new equipment.
C. Ongoing collection and statistical trending of commercial data to show a state of control.
D. Process design: building process understanding and defining CPPs from development data.

**정답:** D

**해설**
- D: **Stage 1 Process Design**은 공정 이해와 개발 데이터로 **CPP를 정의**하는 단계다.
- A: 시설·설비 적격성과 PPQ는 **Stage 2**다.
- B: URS·DQ는 EU **Annex 15**의 적격성 단계 용어다.
- C: 상업 생산 중 추세 분석은 **Stage 3 CPV**다.

---

### Q29 [R][Domain III] — FDA Stage 2
What does Stage 2 (Process Qualification) include in FDA's 2011 guidance?

A. Annual product review of complaints and recalls, followed by management review.
B. Continued process verification by statistical trending throughout commercial production.
C. Qualification of facility, equipment and utilities, plus process performance qualification (PPQ).
D. Defining the QTPP and CQAs and setting up the design space for the marketing application and the development report.

**정답:** C

**해설**
- C: **Stage 2**는 시설·설비·유틸리티 적격성 + **PPQ**다.
- A: 연간 검토·경영검토는 Stage 2 내용이 아니다.
- B: 상업 생산 중 지속 검증은 **Stage 3**다.
- D: QTPP·CQA·design space는 Q8(R2) 개발 개념이다. Stage 1 쪽에 가깝다.

---

### Q30 [A][Domain III] — three PPQ batches
A manufacturing colleague says, "We validated the process — three PPQ batches passed." Mapped onto FDA's 2011 lifecycle, what is still missing?

A. A fourth PPQ batch, because the 2011 guidance raised the minimum from three to four batches.
B. Stage 3 continued process verification, with Stage 1 process design as the prerequisite that comes before it.
C. Nothing, because three consecutive passing batches complete validation under the 2011 guidance.
D. A repeat of the three batches at a second site, which Stage 2 requires for each product.

**정답:** B

**해설**
- B: 3 PPQ 배치는 **Stage 2의 일부**일 뿐이다. **Stage 1** 공정 설계가 전제이고 **Stage 3 CPV**가 빠졌다.
- A: 배치 수는 정해진 최소값이 아니라 **정당화**하는 것이다.
- C: 2011 가이던스는 "3배치 = 검증 완료"를 버렸다.
- D: 제2 제조소 반복 요구는 Stage 2의 내용이 아니다.

---

### Q31 [A][Domain III] — Stage 3 CPV
A US contract manufacturer completed process performance qualification for a new oral solution last quarter and has now released its first commercial batches. The site head wants to cut validation spending, arguing that the process is now validated. What does FDA expect during Stage 3?

A. Continued collection of data and statistical trend analysis to show the process remains in control.
B. Further validation is unneeded unless a major change triggers a new set of three consecutive batches.
C. Transfer of validation responsibility to the contract laboratory performing release testing.
D. Re-running PPQ each year on three batches to confirm that the validated state still holds.

**정답:** A

**해설**
- A: **Stage 3 CPV**는 상업 생산 중 **지속적 데이터 수집·통계적 추세 분석**으로 통제 상태를 입증한다.
- B: "한 번 검증하면 끝"이라는 생각을 수명주기 접근이 없앴다.
- C: 검증 책임 이전은 교과서 내용이 아니다.
- D: 매년 3배치 반복은 CPV의 내용이 아니다.

---

### Q32 [An][Domain III] — why the three-batch rule was dropped
Why did FDA (2011) and EU Annex 15 move away from the "three consecutive batches" rule?

A. Three batches were kept, but now must be manufactured at commercial scale and at a second site.
B. Three batches were replaced by a fixed requirement of five batches for sterile products.
C. They lacked a statistical basis; batch numbers are now justified, with continued verification.
D. Three batches were too costly for small companies, so the number was cut to one.

**정답:** C

**해설**
- C: 3배치는 **통계적 근거 없는 관행**이었다. 수명주기 접근은 배치 수를 **공정 변동성·복잡성·사전 지식으로 정당화**하고 CPV/OPV로 상업 생산 전체에서 통제 상태를 입증한다.
- A: 3배치 고정이 유지된 것이 아니다.
- B: 무균 제품 고정 배치 수는 교과서에 없다.
- D: 하나로 줄인 것이 아니라 정당화로 바꿨다.

---

### Q33 [R][Domain III] — Annex 15 qualification sequence
Under EU GMP Annex 15, which sequence of qualification stages applies to a new filling line?

A. IQ → OQ → PQ → DQ
B. URS → DQ → IQ → OQ → PQ
C. URS → DQ → FAT → OQ → IQ → PQ
D. URS → IQ → DQ → PQ → OQ

**정답:** B

**해설**
- B: Annex 15는 **URS → DQ → (FAT/SAT) → IQ → OQ → PQ** 순서이고 각 단계를 문서화·승인한다.
- A: URS가 빠졌고, DQ는 설치 전 단계다.
- C: IQ가 OQ보다 먼저다.
- D: DQ는 설치(IQ) 전에, OQ는 PQ 전에 온다.

---

### Q34 [A][Domain III] — after qualification
An EU fill-finish site has installed a new vial filling line and completed URS, DQ, IQ, OQ and PQ, each documented and approved under Annex 15. The production head wants to start commercial filling the following week. What follows next?

A. A design qualification review, because DQ is repeated after PQ to confirm the URS.
B. Immediate commercial release, since completion of PQ is treated as equivalent to full process validation.
C. Process validation (traditional, continuous or hybrid), then ongoing verification and requalification.
D. An annual re-run of IQ and OQ, which replaces any process verification during production.

**정답:** C

**해설**
- C: 적격성 다음은 **process validation**(전통적/연속 검증/하이브리드)이고, 이어서 **ongoing process verification**과 **재적격성 주기**다.
- A: DQ는 설치 전 단계다. PQ 뒤에 반복하는 순서가 아니다.
- B: 설비 적격성과 공정 검증은 별개 단계다.
- D: IQ/OQ 반복이 지속 검증을 대신하지 않는다.

---

### Q35 [R][Domain III] — Annex 15 scope
Which activity falls within the scope of EU GMP Annex 15 according to the textbook?

A. Out-of-specification investigation in the quality control laboratory of the site.
B. Transport verification, cleaning validation and packaging validation.
C. Contamination control strategy for sterile filling in Grade A.
D. Computerised system validation and electronic signature controls.

**정답:** B

**해설**
- B: **운송 검증·세척 검증·포장 검증**은 Annex 15 범위다.
- A: OOS 조사는 교과서에서 미국 211.192와 FDA OOS guidance로 다룬다.
- C: CCS는 **Annex 1**이다.
- D: 전산화 시스템은 **Annex 11**이다.

---

### Q36 [A][Domain III] — terminology mapping
An EU-based company is preparing its first US application and must translate its validation documents into FDA terminology. Its validation master plan describes ongoing process verification after process validation. What is the FDA equivalent of ongoing process verification?

A. Process design in Stage 1.
B. Performance qualification (PQ) of equipment.
C. Process performance qualification (PPQ) in Stage 2.
D. Continued process verification (CPV) in Stage 3.

**정답:** D

**해설**
- D: EU **ongoing process verification** ↔ FDA **CPV(Stage 3)** 이다.
- A: Stage 1 공정 설계는 개발 단계다.
- B: 설비 PQ는 적격성 단계로 상업 생산 중 지속 검증이 아니다.
- C: FDA **Stage 2 PPQ**에 대응하는 EU 용어는 **process validation**이다.

---

### Q37 [An][Domain III] — FDA vs Annex 15 structure
Where does FDA's 2011 framework differ in structure from EU Annex 15?

A. FDA spells out URS, DQ, IQ, OQ and PQ as separate stages, while Annex 15 leaves equipment qualification to Annex 11 on computerised systems.
B. Annex 15 details equipment qualification and transport, cleaning and packaging checks; FDA folds equipment qualification into Stage 2.
C. FDA rejects the lifecycle approach, while Annex 15 keeps the three-batch rule as a minimum.
D. Annex 15 ends after process validation without continued verification, while FDA requires CPV in Stage 3.

**정답:** B

**해설**
- B: 둘은 수명주기·배치 수 정당화·지속 검증으로 정렬된다. 차이는 구조로, EU는 **설비 적격성 단계와 운송·세척·포장 검증**을 같은 Annex에 명시하고 FDA는 설비 적격성을 **Stage 2**에 포괄한다.
- A: 역할이 뒤바뀌었다. URS~PQ를 명시한 쪽은 Annex 15다.
- C: 둘 다 수명주기 접근이고 3배치 규칙을 버렸다.
- D: Annex 15에도 **ongoing process verification**이 있다.

---

### Q38 [R][Domain III] — Annex 15 date and batch number
Which statement about EU GMP Annex 15 is correct?

A. It was revised in 2015-10 and states that the number of validation batches should be justified.
B. It was revised in 2015-10 and applies to computerised systems used in GMP activities.
C. It was revised in 2023-08 and introduced the contamination control strategy for sterile lines.
D. It was revised in 2011 and fixes three consecutive batches as the validation minimum.

**정답:** A

**해설**
- A: Annex 15는 **2015-10** 개정이고 "**number of batches should be justified**"라고 쓴다.
- B: 전산화 시스템은 **Annex 11**이다.
- C: 2023-08 시행과 CCS는 **Annex 1**이다.
- D: 2011은 FDA 공정 검증 가이던스와 Annex 11의 연도다. Annex 15는 3배치 고정을 버렸다.

---

### Q39 [R][Domain II] — US statutory basis
What is the statutory basis for treating a drug made without cGMP compliance as adulterated in the US?

A. 21 CFR 314.70(e)
B. FD&C Act 501(a)(2)(B)
C. 21 CFR 211.192
D. 21 CFR 211.100 and 211.110

**정답:** B

**해설**
- B: FD&C **501(a)(2)(B)**는 cGMP 미준수 의약품을 **adulterated**로 본다. 그 아래에 21 CFR 210/211이 있다.
- A: 314.70(e)는 comparability protocol 조항이다.
- C: 211.192는 불일치·OOS 조사 조항이다.
- D: 생산 절차와 공정 중 시험 조항이다. 법률 근거가 아니라 그 아래 규정이다.

---

### Q40 [R][Domain II] — US GMP regulations
Which set of US regulations sits below the FD&C Act GMP provision for drugs, with additions for biologics and combination products?

A. 21 CFR 210/211, with the 600-series for biologics and Part 4 for combination products.
B. 21 CFR 211 alone, with Part 210 for biologics and the 600-series for combination products.
C. 21 CFR 210/211, with the 600-series for combination products and Part 4 for biologics.
D. 21 CFR 820, with Part 210 for biologics and Part 211 for combination products.

**정답:** A

**해설**
- A: 미국은 **21 CFR 210/211** + 생물의약품 **600s** + 복합제 **Part 4**다.
- B: 210은 211과 함께 의약품 GMP 규정이고, 600s는 생물의약품용이다.
- C: 600s와 Part 4의 대상이 뒤바뀌었다.
- D: 이 장의 의약품 GMP 계층은 210/211이다.

---

### Q41 [A][Domain II] — 211.22
During an FDA inspection of a US tablet plant, the investigator finds that the production manager can overrule the quality group's decisions to reject batches. The firm asks which regulation sets the requirement it failed to meet. Which 21 CFR section requires an independent quality control unit?

A. 211.22
B. 211.100
C. 211.110
D. 211.194

**정답:** A

**해설**
- A: **211.22**가 독립 품질관리부서(QCU)다.
- B: 211.100은 서면 생산·공정관리 절차다.
- C: 211.110은 공정 중 시험이다.
- D: 211.194는 실험실 기록이다.

---

### Q42 [A][Domain II] — matching 211 sections
During a routine FDA inspection of a US generic tablet manufacturer, the investigator finds that granulation is run without written production and process control procedures and that in-process tests were skipped on several batches. Which sections apply?

A. 211.100 and 211.110
B. 211.160 through 211.165
C. 211.192 and 211.22
D. 211.22 and 211.194

**정답:** A

**해설**
- A: 서면 생산·공정관리 절차는 **211.100**, 공정 중 시험은 **211.110**이다.
- B: 211.160/165는 실험실 통제 일반과 시험·출하다.
- C: 211.192는 불일치·OOS 조사, 211.22는 QCU다.
- D: 211.22는 QCU, 211.194는 실험실 기록이다.

---

### Q43 [A][Domain II] — laboratory sections
A QC manager must locate the requirements for laboratory records and for testing and release. Which pairing is correct?

A. Laboratory records 211.160/165; testing and release 211.194
B. Laboratory records 211.100; testing and release 211.22
C. Laboratory records 211.192; testing and release 211.110 and 211.100
D. Laboratory records 211.194; testing and release 211.160/165

**정답:** D

**해설**
- D: 실험실 기록은 **211.194**, 실험실 통제 일반과 시험·출하는 **211.160/165**다.
- A: 두 조항이 뒤바뀌었다.
- B: 211.100은 생산 절차, 211.22는 QCU다.
- C: 211.192는 OOS 조사, 211.110은 공정 중 시험, 211.100은 생산 절차다.

---

### Q44 [A][Domain III] — OOS re-test proposal
An assay result is out of specification. The analyst proposes immediately testing a fresh sample and reporting the passing result. How should QA respond?

A. Accept, provided the new sample is taken from the same container and tested by a second analyst.
B. Reject the result as an outlier and release on the basis of the other batch data.
C. Refuse; investigate under 211.192, re-testing only under a predefined plan and rationale.
D. Accept, if the two results are averaged and the mean falls within the specification.

**정답:** C

**해설**
- C: **211.192**는 OOS를 **조사**하고 결론을 문서화하라고 한다. re-test는 **사전 정의된 계획·근거**가 있을 때만 하고 "testing into compliance"는 금지다.
- A: 다른 분석자가 새 시료를 시험해도 조사 없는 재시험은 testing into compliance다.
- B: 원 결과는 **무효 사유가 입증돼야** 기각된다.
- D: 평균으로 OOS를 덮는 것은 교과서의 원칙과 맞지 않는다. 조사가 먼저다.

---

### Q45 [R][Domain III] — OOS phases
A QC laboratory obtains an out-of-specification assay result for a commercial batch, and the laboratory supervisor must draft the investigation plan. She wants the plan to follow the stages of FDA's OOS guidance in the right order. Under FDA's OOS guidance, how is an OOS investigation structured?

A. Phase I full-scale review of manufacturing causes, then Phase II laboratory review of possible analyst error.
B. Phase I management review, then Phase II CAPA, with the laboratory review left as an optional step.
C. Phase I laboratory investigation for obvious analytical error, then Phase II full-scale investigation.
D. Phase I re-test by a second analyst, then Phase II averaging of the re-test with the original.

**정답:** C

**해설**
- C: **Phase I 실험실 조사**(명백한 분석 오류 확인) → **Phase II 전체 조사**(제조 원인)다(FDA OOS guidance 2006/2022).
- A: 두 단계의 순서가 뒤바뀌었다.
- B: 실험실 조사가 첫 단계다.
- D: 재시험은 사전 정의된 계획이 있을 때만 하고, Phase 구조와 다르다.

---

### Q46 [A][Domain III] — invalidating the original result
A QC analyst at a US site obtains an out-of-specification dissolution result for a commercial tablet batch. The Phase I laboratory investigation checks the calculations, instrument and standards and finds no assignable analytical error. What happens to the original result?

A. It is replaced by the average of three re-tests, which becomes the reportable value.
B. It is deleted from the laboratory record, since Phase I could not confirm it.
C. It stands, and a Phase II full-scale investigation of manufacturing causes follows.
D. It is set aside, because one re-test within specification shows the batch conforms.

**정답:** C

**해설**
- C: 원 결과는 **무효 사유가 입증돼야** 기각된다. 실험실 오류가 없으면 **Phase II 전체 조사**(제조 원인)로 간다.
- A: 재시험 평균으로 대체하는 것은 무효 입증 없이 원 결과를 버리는 것이다.
- B: 실험실 기록(211.194)에서 결과를 지우는 것은 기록 요건과 조사 원칙 모두에 어긋난다.
- D: 합격 재시험 하나로 원 결과를 버리면 testing into compliance다.

---

### Q47 [An][Domain III] — testing into compliance
Which practice is the clearest example of "testing into compliance"?

A. Re-testing under a protocol written before the OOS result, with a documented rationale.
B. Invalidating a result after the Phase I review identifies a documented pipetting error.
C. Opening a Phase II investigation after the laboratory review finds that the analysis was sound.
D. Repeating tests on new samples until a passing value appears, then reporting that value.

**정답:** D

**해설**
- D: 합격할 때까지 새 시료를 반복 시험해 그 값을 보고하는 것이 **testing into compliance**이고 금지된다.
- A: 사전 정의된 계획·근거가 있는 re-test는 허용된다.
- B: 무효 사유(분석 오류)가 입증된 기각은 원칙에 맞다.
- C: 실험실 오류가 없으면 Phase II로 가는 것이 정상 절차다.

---

### Q48 [A][Domain II] — 211.192 subject
A batch record shows an unexplained yield discrepancy that nobody followed up. Which subject of 21 CFR does the inspector's citation under 211.192 address?

A. Investigation of unexplained discrepancies and OOS results.
B. Responsibilities of the independent quality control unit.
C. Written procedures for production and process control.
D. Records of laboratory tests, including their raw data and calculations.

**정답:** A

**해설**
- A: **211.192**는 원인불명 불일치와 **OOS 조사**다.
- B: QCU는 211.22다.
- C: 서면 생산·공정관리 절차는 211.100이다.
- D: 실험실 기록은 211.194다.

---

### Q49 [A][Domain IV] — Dir 2017/1572
A US colleague preparing for an EU inspection asks which instrument now lays down the principles and guidelines of GMP for human medicines in the EU. What is the answer?

A. Regulation 1234/2008, which sets GMP principles together with variation rules.
B. Regulation 2024/1701, which replaced the GMP directive with a regulation.
C. Directive (EU) 2017/1572, which replaced the earlier Directive 2003/94/EC.
D. Directive 2003/94/EC, which remains in force alongside EudraLex Volume 4.

**정답:** C

**해설**
- C: **Dir (EU) 2017/1572**가 인체용 의약품 GMP 원칙·가이드라인을 정하고 **구 2003/94/EC를 대체**했다.
- A: Reg 1234/2008은 variation 법체계다.
- B: Reg 2024/1701은 variation 개정이다. GMP 원칙 지침이 아니다.
- D: 2003/94/EC는 대체됐다.

---

### Q50 [A][Domain IV] — EU GMP hierarchy order
A trainer is ordering the EU GMP legal hierarchy from the top down. Which order is correct?

A. EudraLex Vol 4 → Dir 2017/1572 → Dir 2001/83 Art 47 (Parts I–IV and Annexes)
B. Dir 2017/1572 → EudraLex Vol 4 → Dir 2001/83 Art 47 (national inspection rules)
C. Dir 2001/83 Art 47 → EudraLex Vol 4 → Dir 2017/1572 (Parts I–IV and Annexes)
D. Dir 2001/83 Art 47 → Dir 2017/1572 → EudraLex Vol 4 (Parts I–IV and Annexes)

**정답:** D

**해설**
- D: **Dir 2001/83 Art 47**(GMP 원칙 채택 위임) → **Dir 2017/1572**(원칙·가이드라인) → **EudraLex Vol 4**(Part I–IV + Annex) 순서다.
- A: 순서가 거꾸로다. 상세 가이드라인인 Vol 4가 맨 아래다.
- B: Art 47이 위임 근거로 맨 위에 온다.
- C: 원칙 지침(2017/1572)이 상세 가이드라인(Vol 4)보다 위다.

---

### Q51 [A][Domain II] — API manufacturer
A contract manufacturer makes an active substance for EU medicinal products. Which part of EudraLex Volume 4 sets its basic GMP requirements?

A. Part II, which corresponds to ICH Q7 for active substances.
B. Part I, the basic requirements for finished medicinal products.
C. Part III, which holds GMP-related documents such as the SMF.
D. Part IV, which covers GMP for active substances and excipients.

**정답:** A

**해설**
- A: **Part II**는 API GMP이고 **ICH Q7**과 같다.
- B: Part I은 완제의약품 기본 요건이다.
- C: Part III은 SMF·Q9·Q10 같은 GMP 관련 문서다.
- D: Part IV는 **ATMP** GMP다.

---

### Q52 [A][Domain V] — EV product GMP framework
A start-up will aseptically fill an MSC-derived EV product classified as an ATMP in the EU. Which GMP texts apply together?

A. WHO TRS 986 Annex 2 in place of EudraLex, because cell-derived products are global.
B. Annex 1 for aseptic processing and Part IV for ATMP GMP, applied in parallel.
C. Annex 15 and Annex 11 alone, because ATMPs are exempt from Annex 1 sterility rules.
D. Part II of Volume 4 and ICH Q7, because the EV is treated as an active substance.

**정답:** B

**해설**
- B: MSC-EV·세포 제품은 **Annex 1 무균 공정 + Part IV ATMP GMP**가 동시에 걸린다. CCS에서도 Part IV와 교차 적용을 명시한다(Annex 1 §2.3–2.5).
- A: EU 제품은 EudraLex를 따른다. WHO GMP는 WHO 사전적격성 등에서 쓰인다.
- C: ATMP라도 무균 충전이면 Annex 1이 적용된다.
- D: Part II(Q7)는 API다. ATMP는 Part IV다.

---

### Q53 [A][Domain IV] — Vol 4 Part III
An inspector asks where the site master file and the EU texts of ICH Q9 and Q10 sit in EudraLex Volume 4. What is the answer?

A. Part III, which holds GMP-related documents.
B. Part II, alongside the ICH Q7 text for active substances.
C. Part I, chapter on documentation for finished products.
D. Part IV, as part of the ATMP quality system requirements.

**정답:** A

**해설**
- A: **Part III**은 SMF·Q9·Q10 같은 **GMP 관련 문서**를 담는다.
- B: Part II는 API(Q7)다.
- C: Part I은 완제 기본 요건이다.
- D: Part IV는 ATMP GMP다.

---

### Q54 [A][Domain IV] — PIC/S vs EU GMP
A site inspected by a PIC/S member authority asks whether it must run a separate gap analysis between the PIC/S GMP guide and EU GMP. What does the textbook say?

A. The PIC/S guide applies to APIs, so finished products need EU GMP in addition.
B. The PIC/S guide is effectively the same as EU GMP and closely aligned with it.
C. The PIC/S guide is a WHO text and differs from EU GMP in structure and content.
D. The PIC/S guide was replaced by Annex 22, so EU GMP now takes precedence.

**정답:** B

**해설**
- B: 교과서는 **PIC/S GMP 가이드가 EU GMP와 사실상 동일**하다고 쓴다.
- A: API 한정이라는 근거는 없다.
- C: PIC/S는 WHO 문서가 아니다. WHO는 PIC/S와 협력하지만 고유 문서를 인용한다.
- D: Annex 22는 채택되지 않은 AI 초안이다.

---

### Q55 [A][Domain IV] — Annex 1 status on the reference date
An auditor writes that revised EU GMP Annex 1 "has applied since its adoption in 2022-08." How should the date be corrected?

A. It applies from 2023-08-25, with point 8.123 on lyophiliser loading from 2024-08-25.
B. It applies from 2022-08 except for the contamination control strategy, due in 2023.
C. It is still a consultation draft on 2026-09-01, so the previous version remains binding.
D. It applies from 2024-08-25 for all provisions, after a two-year transition from adoption.

**정답:** A

**해설**
- A: Annex 1은 2022-08에 개정됐고 **2023-08-25 시행**이다. **8.123**(동결건조기 적재)만 **2024-08-25**다.
- B: 채택(2022-08)과 시행(2023-08-25)을 혼동했다. CCS도 2023-08-25 시행 본문의 일부다.
- C: Annex 1은 기준일에 시행 중이다. 채택되지 않은 것은 Annex 11 개정안이다.
- D: 2024-08-25는 8.123 하나의 날짜다.

---

### Q56 [An][Domain IV] — Annex 1 date calculation
Using the textbook dates, how long after the general operation date of revised Annex 1 did point 8.123 come into operation?

A. 18 months
B. About 24 months
C. 12 months
D. 6 months

**정답:** C

**해설**
- C: 일반 시행 2023-08-25, 8.123 시행 2024-08-25다. 차이는 **12개월**(1년)이다.
- A·D: 두 날짜의 월·일이 같아 차이는 정확히 1년이다.
- B: 2년은 2022-08 채택 시점에서 8.123까지의 대략적 간격과 혼동한 값이다.

---

### Q57 [A][Domain I] — CCS concept
A sterile manufacturer has separate SOPs for gowning, environmental monitoring, cleaning and sterilisation, with no link between them. Which Annex 1 requirement does this gap point to?

A. A PLCM document that lists each SOP as an established condition for reporting.
B. A process performance qualification for each SOP, as defined in FDA Stage 2.
C. A contamination control strategy that ties these controls into one documented, QRM-based strategy.
D. A design qualification for each room, repeated before each aseptic process simulation run on the line.

**정답:** C

**해설**
- C: Annex 1의 핵심 신개념 **CCS**는 시설·장비·인력·공정·모니터링 전반의 오염 통제를 **하나의 문서화된 전략**으로 묶고 **QRM**으로 운영한다.
- A: PLCM 문서는 Q12 수명주기 도구다.
- B: PPQ는 FDA 공정 검증 Stage 2다.
- D: DQ는 Annex 15 적격성 단계다. 오염 통제를 통합하는 장치가 아니다.

---

### Q58 [A][Domain I] — CCS scope for an EV product
A team drafts the contamination control strategy for aseptic filling of an MSC-derived EV product. Which element belongs in it?

A. A PACMP agreeing the reporting category for a future transfer of the product to a second site.
B. An evaluation of whether the EV can be sterile-filtered, alongside APS (media fill) design.
C. A Phase I laboratory investigation plan for each out-of-specification potency result.
D. A design space for granulation water and mixing time, filed under ICH Q8(R2).

**정답:** B

**해설**
- B: CCS에는 원료·용기 멸균·**제균 여과 전략(EV의 제균여과 가능성 평가)**, **APS(media fill)** 설계, Grade A in B, RABS/isolator, gowning, 모니터링, 세척·소독, 일탈·추세 검토가 들어간다.
- A: PACMP는 Q12 시판 후 변경 도구다.
- C: OOS 조사는 211.192·FDA OOS guidance 영역이다.
- D: design space는 Q8(R2) 개발 개념이고 이 예시는 정제 공정이다.

---

### Q59 [A][Domain IV] — Annex 11 on the reference date
On 2026-09-01, IT asks whether to redesign the computerised-system validation programme "for the new Annex 11 and Annex 22." What is the best advice?

A. Redesign for Annex 22 only, because AI provisions were adopted ahead of the Annex 11 text.
B. Keep Annex 11 (2011) as the legal expectation and run a gap assessment against the drafts.
C. Redesign now, because the revised Annex 11 replaced the 2011 version when consultation closed.
D. Pause validation work until the revised Annex 11 is adopted, since the 2011 text was withdrawn.

**정답:** B

**해설**
- B: 개정 Annex 11·신설 Annex 22·Chapter 4는 공개협의만 끝나고 **채택되지 않았다**. 기준일엔 **Annex 11 2011판**이 법적 기대치이고, 데이터 무결성 가이드(PIC/S PI 041, EMA Q&A)와 함께 운영하며 개정안 방향은 **gap assessment**로 본다.
- A: Annex 22도 채택되지 않았다.
- C: 협의 종료는 채택이 아니다.
- D: 2011판은 철회되지 않고 유효하다.

---

### Q60 [An][Domain IV] — claiming Annex 22 compliance
In an inspection response dated 2026-09-01, a firm states that its AI-based visual inspection system "complies with EU GMP Annex 22." Evaluate the statement.

A. Inappropriate, because Annex 22 applies to sterile products and belongs to Annex 1.
B. Inappropriate, because Annex 22 was a consultation draft and not adopted on that date.
C. Appropriate, because Annex 22 was adopted together with the revised Annex 1 in 2022-08.
D. Appropriate, provided the system was also validated under Annex 15 qualification stages.

**정답:** B

**해설**
- B: Annex 22(AI)는 2025 공개협의를 거친 **초안**이고 기준일에 **채택되지 않았다**. "Annex 22 준수" 주장은 틀린다. 근거는 Annex 11 2011판과 데이터 무결성 가이드다.
- A: Annex 22는 AI에 관한 신설 초안이다. 무균 제품 지침이 아니다.
- C: Annex 1 개정과 Annex 22는 별개다.
- D: Annex 15 적격성이 미채택 Annex를 유효하게 만들지 않는다.

---

### Q61 [An][Domain IV] — Annex 11 consultation calculation
The consultation on the revised Annex 11, new Annex 22 and Chapter 4 ran from 2025-07-07 to 2025-10-07. Which statement is correct as of 2026-09-01?

A. It lasted 12 months and ends after the reference date, so the drafts are not yet in force.
B. It lasted 6 months and the revised texts took effect when it ended in 2025-10.
C. It lasted 3 months and the revised texts apply from 2026-01, after a short transition.
D. It lasted 3 months and ended without final adoption, so the 2011 Annex 11 still applies.

**정답:** D

**해설**
- D: 2025-07-07부터 2025-10-07까지는 **3개월**이다. 협의는 끝났지만 **최종 채택되지 않아** 기준일엔 **Annex 11 2011판**이 유효하다.
- A: 협의는 2025-10에 끝났고 2011판이 적용 중이다.
- B: 기간 계산이 틀렸고, 협의 종료로 시행되지 않는다.
- C: 시행일이 정해졌다는 근거는 없다. 기준일에도 채택 전이다.

---

### Q62 [A][Domain I] — WHO GMP for prequalification
A site in an LMIC will supply a WHO-prequalified product. Which GMP standard will WHO inspect against, and how does it relate to EU and PIC/S GMP?

A. WHO GMP main principles (TRS 986 Annex 2), broadly aligned with PIC/S and EU GMP.
B. WHO TRS 961 Annex 7, which serves as WHO's main GMP standard for finished products.
C. 21 CFR 210/211, because WHO prequalification relies on FDA inspection outcomes.
D. EudraLex Volume 4, because WHO adopted the EU text without change in 2014.

**정답:** A

**해설**
- A: WHO는 **WHO GMP main principles(TRS 986 Annex 2, 2014)** 와 부속 지침으로 사찰한다. **PIC/S·EU GMP와 큰 틀에서 정합**하지만 WHO 고유 문서를 인용한다. 국가 당국이 ML3/WLA면 사찰 결과를 **reliance**로 쓸 수 있다.
- B: TRS 961 Annex 7은 **기술이전** 지침이다.
- C: FDA 규정이 WHO 사찰 기준이 아니다.
- D: WHO는 EU 문서가 아니라 고유 문서를 인용한다.

---

### Q63 [A][Domain V] — technology transfer framework
A regulatory lead is planning the technology transfer of an EV product from a university laboratory to a CDMO. Which set of documents frames the transfer?

A. ICH Q10, WHO TRS 961 Annex 7 and Annex 15 §2; in the US, Q10 with the 2011 guidance.
B. ICH Q13, Annex 1 and Annex 11, which govern transfer of continuous processes to a CDMO.
C. ICH Q11, WHO TRS 986 Annex 2 and 21 CFR 211.22 on quality unit responsibilities.
D. ICH Q12 and the PLCM document, since a transfer to a CDMO is a post-approval change.

**정답:** A

**해설**
- A: 기술이전의 틀은 **Q10**(지식 관리·기술이전 단계), **WHO TRS 961 Annex 7**, **Annex 15 §2**이고, 미국은 Q10 + 2011 검증 가이던스다.
- B: Q13·Annex 1·Annex 11은 기술이전을 규정하는 틀이 아니다.
- C: TRS 986 Annex 2는 WHO GMP 기본 원칙이고 Q11은 원료 개발이다.
- D: 대학→CDMO 이전은 이 경우 시판 후 변경 틀이 아니다.

---

### Q64 [An][Domain V] — before the first GMP batch under an IND
The transfer of an EV process to a CDMO is underway while a US IND is active. Which set of tasks must be complete before the first GMP batch?

A. Three PPQ batches at the CDMO, a PLCM document, and a PACMP agreed in advance with FDA covering this transfer.
B. Transfer protocol/report, method transfer (USP <1224>), quality agreement, CMC change impact assessment.
C. Stage 3 continued process verification data and an annual report covering the CDMO site.
D. A new IND for the CDMO site, an Annex 22 assessment, and a design space approved by FDA.

**정답:** B

**해설**
- B: 첫 GMP 배치 전에는 기술이전 프로토콜·보고서, 공정 설명·CPP/CQA 이전, **분석법 이전(USP <1224>)**, 설비 적격성(IQ/OQ/PQ), **CDMO 품질계약**(책임 분담), **CMC 변경 영향 평가**(IND 중이면 정보 수정 제출)가 필요하다.
- A: PPQ·PLCM·PACMP는 상업 단계의 도구다. 교과서의 첫 배치 전 목록이 아니다.
- C: Stage 3 CPV는 상업 생산 중 활동이다.
- D: IND 중에는 정보 수정 제출이다. 새 IND와 Annex 22는 해당하지 않는다.
