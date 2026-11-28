# 문제은행 — Ch.33 (1/2) 리콜: 개념·구조

> **근거:** `textbook/Ch33.md` + `cards/Ch33_1.md`·`cards/Ch33_2.md` 검증 메모(21 CFR 7.3·7.3(m)·7.40–7.59, FDA *Initiation of Voluntary Recalls* 2022-03-04, *Public Warning and Notification of Recalls* 2019-02, PHS 351(d)(2) 일당 최대 $100,000, mandatory recall 근거 518(e)·1271.440·569D, FAR 314.81(b)(1)(ii) 3 working days, BPDR 600.14 45 calendar days, 806 10 working days, DSCSA 582 24시간, OII 2024-10-01, Dir 2001/83 Arts 117·116·117a·123(2)·81·23a, GMP Ch.8 2015-03-01, CoCP Rapid Alert I 동시/II 24시간/III 미해당, Delegated Reg 2016/161 2019-02-09, ESMP 2025-02-02, Reg 2022/123, 506C, 유효기간 단축 = CBE-30·승인 프로토콜 연장 = annual report(FDA 2004 Changes guidance)). 새 숫자 없음. 계산 문항은 위 상수로만 계산했다.
> **형식:** 영문 시나리오 → 영문 선지 A~D → 정답 → 한국어 해설. 태그 `[R]/[A]/[An]` + Domain.
> **기준일:** 2026-09-01. 그 이후 일정(DSCSA 소형 dispenser 2026-11-27 → 2027-11-27 연장 발표 2026-08 포함)은 기준일 시점 사실로만 다룬다.
> **작성:** 2026-11-27. 64문항.

---

### Q01 [R][Domain II] — what 21 CFR 7.3 calls a recall
Under 21 CFR 7.3, which description best fits a "recall"?

A. Retrieval of product that has not left the direct control of the manufacturer, such as stock still in its warehouse.
B. Any removal of marketed product that FDA has formally ordered after a hearing, whatever the product category.
C. Removal of distributed product for routine stock rotation or a minor quality complaint that is not violative.
D. Removal or correction of a marketed product that FDA considers violative and against which it could take legal action.

**정답:** D

**해설**
- D: 7.3의 recall은 FDA가 압류 같은 법적 조치를 취할 수 있는 **위법(violative) 제품**의 **제거 또는 현장 교정**이다. 분류되고 Enforcement Report에 공개된다.
- A: 제조자 직접 통제 하 미유통 제품 회수는 **stock recovery**이고 리콜이 아니다.
- B: 리콜 정의는 FDA 명령을 요건으로 하지 않는다. 일반 의약품에는 명령 권한 자체가 없다.
- C: 위법이 아니거나 경미한 사유의 제거는 **market withdrawal**이다.

---

### Q02 [A][Domain II] — relabelling in the field
A firm learns that a distributed lot carries a violative label statement. Instead of retrieving the product, it plans to send staff to pharmacies to apply corrected labels and argues that, because nothing is removed, Part 7 does not apply. Which response is correct?

A. Agreed; Part 7 covers physical removal, so field relabelling is handled as a market withdrawal instead.
B. Not agreed; field correction of a violative product is a recall, with 7.46 notice and classification.
C. Agreed, provided the corrected labels are applied within the period FDA sets for status reports.
D. Not agreed, but mainly because label errors are Class I by definition and need FDA approval first.

**정답:** B

**해설**
- B: 7.3의 recall은 removal **또는 correction**이다. 재라벨·유효기간 단축 통지 같은 현장 교정도 리콜이므로 7.46 통지와 분류 대상이다.
- A: correction도 리콜 정의에 들어간다. 위법 제품이므로 market withdrawal이 될 수 없다.
- C: 7.53 상태 보고 주기는 리콜 여부를 정하는 기준이 아니다.
- D: 등급은 결함 유형이 아니라 HHE가 정하는 결과 확률이다. 라벨 오류도 Class III일 수 있다.

---

### Q03 [R][Domain II] — market withdrawal
Which situation is a market withdrawal rather than a recall under 21 CFR 7.3?

A. A firm removes an injectable lot after a sterility failure, before FDA has finished its classification.
B. A firm corrects labels in the field for a lot whose stated strength is wrong and could cause overdose.
C. A firm removes a lot at FDA's written request after the agency finds a health hazard it declined to act on.
D. A firm removes a lot with a minor quality complaint that is not violative and would not attract legal action.

**정답:** D

**해설**
- D: **market withdrawal**은 위법이 아니거나 경미해서 법적 조치 대상이 아닌 사유의 제거·교정이다. 분류·공개가 없다.
- A: 무균 실패는 위법 제품이다. 분류 전 개시라도 리콜이다.
- B: 위법 라벨의 현장 교정은 correction이므로 리콜이다.
- C: 7.45 FDA-requested recall이다.

---

### Q04 [A][Domain II] — stock recovery
During release review, QA finds a labelling defect on a lot that is still in the manufacturer's own warehouse and has never been shipped. The team retrieves the pallets for rework. How is this action characterised under 21 CFR 7.3?

A. A Class III recall, because the defect is minor but the product is still violative.
B. A stock recovery, because the product never left the manufacturer's direct control.
C. A market withdrawal, which must be reported to FDA but is neither classified nor published.
D. A firm-initiated recall that needs 7.46 notice, since the defect would be violative if shipped.

**정답:** B

**해설**
- B: 제조자 **직접 통제 하**에 있는 미유통 제품 회수는 **stock recovery**이고 리콜이 아니다.
- A: 유통되지 않은 제품에는 리콜 등급이 매겨지지 않는다.
- C: market withdrawal은 유통된 제품의 비위법·경미 사유 제거다. 이 경우는 출하 전이다.
- D: 7.46 통지는 유통된 위법 제품의 리콜에 붙는다.

---

### Q05 [An][Domain III] — mislabelling a recall as a withdrawal
A firm removes a distributed lot whose impurity result exceeds the approved specification. To avoid publicity, its internal memo calls the action a "market withdrawal" and it sends no 7.46 notice. What is the regulatory consequence of this choice?

A. FDA can treat the action as a recall, classify it and publish it, because the product is violative.
B. None, because the firm's own characterisation controls whether an action is a recall or a withdrawal.
C. FDA is limited to a Warning Letter, because the firm has already removed the product voluntarily.
D. FDA must first order the recall under 7.45 before it can classify or publish the firm's action.

**정답:** A

**해설**
- A: 리콜 여부는 이름이 아니라 **위법성**으로 정해진다. 위법 제품을 market withdrawal로 부르면 FDA가 재분류하고 Enforcement Report에 공개할 수 있다.
- B: 회사의 명명은 결정적이지 않다. 교과서 "흔한 혼동" 1번이 이 경우다.
- C: 위법 제품의 처리는 리콜 분류·공개로 이어진다. 이미 제거했다는 사실이 분류를 막지 않는다.
- D: 7.45는 명령이 아니라 요청이고, 회사가 이미 회수한 경우 그 절차를 먼저 밟을 필요가 없다.

---

### Q06 [R][Domain II] — Class I wording
Which definition matches a Class I recall under 21 CFR 7.3(m)?

A. The product is violative and has been distributed to consumers, so a public warning is required.
B. There is a reasonable probability that use of the product will cause serious harm or death.
C. Use of the product may cause temporary or medically reversible harm, with serious harm remote.
D. Use of the product is not likely to cause adverse health consequences, although it is violative.

**정답:** B

**해설**
- B: Class I은 사용·노출 시 **중대한 건강 피해나 사망의 합리적 확률**이 있는 경우다.
- A: 공중 경고는 7.42 전략 요소다. 소비자 유통 자체가 Class I의 정의는 아니다.
- C: Class II의 정의다.
- D: Class III의 정의다.

---

### Q07 [R][Domain II] — Class II wording
A drug lot fails dissolution, and the health hazard evaluation concludes that use may cause temporary or medically reversible harm, with the probability of serious harm remote. Which class fits this conclusion?

A. Class I
B. Class III
C. Not a recall; a market withdrawal
D. Class II

**정답:** D

**해설**
- D: **일시적·의학적으로 회복 가능한 피해**, 중대 피해 확률 **희박**은 7.3(m) Class II다. 용출 OOS는 교과서의 전형적 Class II 예다.
- A: Class I은 중대 피해·사망의 합리적 확률이다.
- B: Class III은 건강 피해 가능성이 낮은 위법이다.
- C: 용출 OOS는 규격 이탈이므로 위법이다. market withdrawal이 아니다.

---

### Q08 [R][Domain II] — Class III example
Which defect is the textbook example of a Class III drug recall?

A. A label printing error with no effect on safety.
B. A sterility failure in an injectable product.
C. A nitrosamine impurity above the acceptable intake.
D. A strength error on the label that could lead to overdose.

**정답:** A

**해설**
- A: 안전에 영향이 없는 라벨 인쇄 오류는 **Class III**(건강 피해 가능성 낮은 위법)의 예다.
- B: 주사제 무균 실패는 Class I의 예다.
- C: 나이트로사민 허용치 초과는 보통 Class II다.
- D: 과량 투여로 이어질 수 있는 강도 오류는 Class I의 예다.

---

### Q09 [A][Domain II] — same defect, different class
Two firms each recall a lot for the same dissolution failure. One product is an antiepileptic with a narrow therapeutic range; the other is a vitamin supplement. How would FDA's health hazard evaluation most likely classify them?

A. Both Class II, because the class follows the type of defect and dissolution failure is a Class II defect.
B. Both Class III, because a dissolution failure cannot cause serious harm whatever the product.
C. The antiepileptic Class II and the vitamin Class I, because vitamins are used by more consumers.
D. The antiepileptic Class I and the vitamin Class III, because class follows the probable outcome.

**정답:** D

**해설**
- D: 등급은 결함 유형이 아니라 **결과 확률**이다. 같은 용출 OOS라도 발작 위험이 있는 항경련제는 Class I, 비타민은 Class III이 될 수 있다.
- A: 결함 유형으로 등급이 고정된다는 생각이 오류다. HHE가 제품·환자·용법을 본다.
- B: 치료역이 좁은 약에서는 용출 이탈이 중대 피해로 이어질 수 있다.
- C: 사용자 수가 아니라 피해의 심각도와 확률이 등급을 정한다.

---

### Q10 [An][Domain II] — who classifies, and when the firm acts
A recall committee wants to wait for FDA's classification before contacting customers, so that the depth of the recall matches the final class. Evaluate this plan.

A. Sound; under Part 7 a firm may not begin a recall until FDA's center has classified the hazard.
B. Flawed; FDA classifies after its health hazard evaluation, but the firm should initiate before then.
C. Sound, provided the firm sends its 7.46 notice to FDA immediately and holds customer letters.
D. Flawed, because the firm classifies the recall itself and FDA merely confirms the class at termination.

**정답:** B

**해설**
- B: 등급은 **FDA 센터가 HHE(7.41) 후** 정한다. 그러나 회사는 **분류 전에도 개시**한다(2022 guidance). 분류 대기는 교과서 "흔한 혼동" 3번이다.
- A: Part 7에 분류 전 개시 금지 규정은 없다. 2022 guidance는 반대로 신속 개시를 기대한다.
- C: FDA 통지만 하고 고객 통신을 미루면 위법 제품이 계속 사용된다. 통신문도 FDA 검토를 기다리지 않는다.
- D: 분류 주체는 FDA다. 회사의 HHE는 협상 근거일 뿐이다.

---

### Q11 [R][Domain II] — HHE factors
Which item is NOT one of the health hazard evaluation factors in 21 CFR 7.41?

A. The likelihood that the hazard will occur, and its immediate and long-range consequences.
B. Whether any disease or injury has already occurred from use of the product.
C. Whether particular segments of the population, such as children or surgical patients, are at greater risk.
D. The cost to the firm of retrieving the product at each level of distribution.

**정답:** D

**해설**
- D: 회수 비용은 7.41 요소가 아니다. HHE는 건강 영향만 본다.
- A: 발생 가능성과 즉시·장기 결과는 7.41 요소다.
- B: 이미 발생한 피해는 7.41 요소다.
- C: 기존 조건 때문에 위험이 큰 인구 집단(소아·고령·수술·면역저하) 노출은 7.41 요소다.

---

### Q12 [R][Domain II] — elements of a recall strategy
Which set lists the three elements of a recall strategy under 21 CFR 7.42?

A. Recall communication, status reports and the Enforcement Report entry.
B. Root cause, corrective action and verification of effectiveness.
C. Depth of recall, public warning and effectiveness checks.
D. Health hazard evaluation, recall classification and termination criteria.

**정답:** C

**해설**
- C: 7.42 전략은 **depth**(consumer/user · retail · wholesale), **public warning**, **effectiveness checks** 세 요소다.
- A: 통신문 7.49, 상태 보고 7.53은 문서 생애 단계다.
- B: 근본 원인·CAPA는 품질 시스템 요소다. 7.42 전략 요소가 아니다.
- D: HHE는 7.41, 종결은 7.55다. 전략 요소가 아니다.

---

### Q13 [R][Domain II] — effectiveness check Level B
In a recall strategy, an effectiveness check at Level B means FDA expects the firm to contact which share of consignees?

A. 10% of consignees, a fixed one-in-ten sample.
B. 2% of consignees, a small spot-check sample.
C. 100% of consignees, each one contacted directly.
D. More than 10% but less than 100% of consignees.

**정답:** D

**해설**
- D: Level B는 **10% 초과~100% 미만**이다.
- A: 10%는 Level C다.
- B: 2%는 Level D다.
- C: 100%는 Level A다.

---

### Q14 [A][Domain II] — effectiveness check arithmetic
A recall letter goes to 200 consignees, and FDA agrees an effectiveness check at Level D. How many consignees must the firm's check cover?

A. 20 consignees, or one in ten.
B. 200 consignees, contacting each one.
C. 4 of the 200 consignees on the list.
D. Zero, as Level D means the check is skipped.

**정답:** C

**해설**
- C: Level D는 **2%**다. 200 × 0.02 = 4곳이다(200 ÷ 50 = 4로 검산).
- A: 20곳은 10%로 Level C다.
- B: 전수는 Level A다.
- D: 점검이 없는 것은 Level E다.

---

### Q15 [A][Domain II] — choosing recall depth
A tablet lot with a Class I label strength error went to wholesalers and then to retail pharmacies, which have already dispensed some packs to patients. Which recall depth fits this distribution?

A. Consumer or user level, because packs have already reached patients.
B. Wholesale level, because the firm's own customers are the wholesalers.
C. Retail level, because pharmacies are the last point the firm can trace.
D. Wholesale level first, moving to retail once FDA has classified the hazard.

**정답:** A

**해설**
- A: depth는 위험과 유통 경로로 정한다. 이미 환자에게 조제됐을 가능성이 있으면 **consumer/user level**까지 내려간다.
- B: 직접 고객이 도매라는 사실이 depth를 정하지 않는다. 제품이 간 곳이 기준이다.
- C: 환자 보유분이 있으면 retail level에서 멈추면 위험이 남는다.
- D: 분류를 기다려 단계적으로 내리는 방식은 2022 guidance의 신속 개시와 맞지 않는다.

---

### Q16 [R][Domain II] — public warning under the 2019 guidance
A product with a serious hazard has reached consumers. Under FDA's 2019 guidance on public warning and notification of recalls, which statement is correct?

A. The firm may issue a public warning after FDA has classified the recall as Class I, and not before then.
B. A public warning replaces the 7.49 recall letter, so consignees need not be contacted directly.
C. The firm should issue its press release or web notice promptly, without awaiting FDA review of it.
D. FDA does not issue public warnings itself; it relies on the firm and on the Enforcement Report.

**정답:** C

**해설**
- C: 2019 guidance는 회사가 보도자료·웹 공지를 **FDA 검토를 기다리지 말고 신속히** 내기를 기대한다. 평이한 언어·사진·로트·행동·MedWatch 안내를 넣고 홍보 문구는 금지한다.
- A: 공중 경고는 분류를 기다리는 절차가 아니다. 2022·2019 guidance 모두 신속성을 요구한다.
- B: 공중 경고는 7.42 전략 요소 중 하나일 뿐이다. 7.49 통신문을 대신하지 않는다.
- D: 회사가 하지 않거나 불충분하면 **FDA가 직접** 공중 경고를 낸다.

---

### Q17 [R][Domain II] — 7.46 timing
When a firm initiates a recall of a distributed drug on its own, when does 21 CFR 7.46 expect it to notify FDA?

A. Within 3 working days of deciding to recall.
B. Within 10 working days of starting the recall.
C. With the first status report under 7.53.
D. Immediately.

**정답:** D

**해설**
- D: 7.46은 회사 개시 리콜을 FDA에 **즉시** 알리도록 한다. 제품·로트·수량·유통·사유·HHE·전략·통신문 초안을 담는다.
- A: 3 working days는 FAR(314.81(b)(1)(ii)) 시한이다.
- B: 10 working days는 기기 Part 806 보고 시한이다.
- C: 7.53 상태 보고는 개시 후 FDA가 정한 주기로 내는 후속 문서다.

---

### Q18 [R][Domain II] — recall communication content
Which feature is expected in a drug recall letter under 21 CFR 7.49?

A. A statement of the FDA classification, which must be final before the letter is sent.
B. A prominent "URGENT: DRUG RECALL" heading and a means for consignees to respond.
C. A short product description, with lot numbers left to a later status report.
D. Reassuring promotional wording so that consignees keep confidence in the product line.

**정답:** B

**해설**
- B: 7.49 통신문은 상단 굵게 **"URGENT: DRUG RECALL"**, 제품·로트 식별, 사유·위해, 구체적 조치와 **응답 수단**을 담는다.
- A: 통신문은 분류나 FDA 검토를 기다리지 않는다.
- C: 로트·유효기간 같은 식별 정보는 통신문에 들어가야 한다.
- D: 홍보 문구는 금지다.

---

### Q19 [R][Domain II] — status report interval
How often are recall status reports under 21 CFR 7.53 typically due?

A. At intervals FDA specifies, typically every 2 to 4 weeks.
B. Annually, in the NDA annual report filed after the recall.
C. Daily, until FDA has terminated the recall in writing.
D. Once, together with the firm's request to terminate the recall.

**정답:** A

**해설**
- A: 7.53 상태 보고 주기는 **FDA가 지정**하며 통상 **2–4주**다. 통지 수신처 수·응답·회수 수량·effectiveness 결과·완료 예상을 담는다.
- B: 리콜 상태 보고는 annual report와 별개다.
- C: 일일 보고는 교과서 규정에 없다.
- D: 종결 요청 전까지 주기적으로 낸다.

---

### Q20 [R][Domain II] — termination
Who terminates a recall under 21 CFR 7.55, and how?

A. The firm, by sending FDA a final status report showing that 100% of product was recovered.
B. FDA, in writing, once it decides reasonable efforts have removed or corrected the product.
C. The firm, by its own decision, when the last effectiveness check is complete and complaints have stopped.
D. FDA, but not until each consignee has confirmed in writing that its stock is gone.

**정답:** B

**해설**
- B: 7.55 종결은 **FDA가** 합리적 노력이 이뤄졌고 제품이 제거·교정됐다고 판단할 때 **서면**으로 한다. 회사는 종결을 요청할 수 있다.
- A: 회사가 요청할 수는 있지만 종결 판단은 FDA가 한다. 100% 회수가 요건도 아니다.
- C: 회사가 스스로 종결을 정하지 않는다. 종결은 FDA의 서면 판단이다.
- D: 전수 서면 확인은 종결 요건이 아니다. 기준은 합리적 노력이다.

---

### Q21 [A][Domain III] — Enforcement Report before classification
A firm began a recall last week, and FDA's center is still completing its health hazard evaluation. A journalist asks whether the recall can appear in FDA's weekly Enforcement Report yet. Which answer is correct?

A. No; the Enforcement Report covers FDA-requested recalls under 7.45 rather than firm ones.
B. Yes, if the firm has also issued a public warning under 7.42.
C. Yes; recalls awaiting classification can be listed as "not yet classified".
D. No; the Enforcement Report lists a recall once it has been classified, not before.

**정답:** C

**해설**
- C: Enforcement Report는 주간 공개이고, 분류 대기 중인 리콜도 **"not yet classified"**로 먼저 게재될 수 있다.
- A: 회사 개시 리콜도 게재된다. FDA 요청 리콜은 "FDA requested"로 표시될 뿐이다.
- B: 공중 경고와 Enforcement Report 게재는 별개다.
- D: 분류 후 갱신되지만 분류 전 게재도 가능하다.

---

### Q22 [R][Domain II] — 2022 voluntary recall guidance
Which expectation comes from FDA's final guidance "Initiation of Voluntary Recalls Under 21 CFR Part 7, Subpart C" (2022)?

A. Firms should complete the root-cause investigation before initiating a recall, to set the correct depth.
B. Firms should obtain FDA approval of the recall letter before sending it to any consignee.
C. Firms should be recall-ready and should not wait for the investigation to finish before initiating.
D. Firms should use paper letters rather than electronic notices, to create a reliable audit trail.

**정답:** C

**해설**
- C: 2022 guidance(2022-03-04)는 **recall-ready**(인력 훈련·연락 계획·코딩·유통 기록)와 **조사 완료를 기다리지 않는 개시**를 기대한다.
- A: 조사 완료 후 개시는 guidance가 경계하는 지연이다.
- B: FDA의 통신문 검토를 기다리지 말라는 것이 guidance 내용이다.
- D: guidance는 전자 통신을 권장한다.

---

### Q23 [A][Domain III] — where the 7.46 notice goes
A US firm decides on 2026-08-20 to recall a drug lot. Its SOP still says to send the initial notice to the "ORA recall coordinator". As of the 2026-09-01 reference date, which office houses FDA's recall coordinators?

A. The Office of Inspections and Investigations (OII), created from ORA on 2024-10-01.
B. CDER's Office of Compliance, since the recall coordinator role moved out of the field offices.
C. The Office of Regulatory Affairs, which remains unchanged for recall coordination.
D. The Drug Shortage Staff, because each recall is screened first for its shortage impact.

**정답:** A

**해설**
- A: ORA는 **2024-10-01** **Office of Inspections and Investigations(OII)**로 개편됐고 리콜 조정관도 OII 소속이다. SOP를 고쳐야 한다.
- B: 센터는 HHE·분류를 맡는다. 7.46 접수는 OII 리콜 조정관이다.
- C: ORA라는 명칭은 개편으로 바뀌었다.
- D: Drug Shortage Staff는 506C 부족 협의 부서다.

---

### Q24 [R][Domain II] — conditions for an FDA-requested recall
Which combination of conditions supports an FDA-requested recall under 21 CFR 7.45?

A. A Class III defect, a firm with a prior Warning Letter, and a product sold over the counter.
B. A completed root-cause investigation, an approved CAPA, and a firm request for FDA involvement.
C. A defect found at inspection, an imported product, and a firm located outside the United States.
D. A health risk (or gross violation), no recall initiated by the firm, and a need for agency action.

**정답:** D

**해설**
- D: 7.45 요건은 셋이다. 제품이 **건강 위험**(또는 중대 위법·사기)을 주고, 회사가 **리콜을 개시하지 않았고**, **기관 조치가 필요**하다.
- A: 과거 WL이나 OTC 여부는 요건이 아니다.
- B: 조사·CAPA 완료나 회사 요청은 요건이 아니다.
- C: 수입 제품은 7.59가 다룬다. 7.45의 요건이 아니다.

---

### Q25 [A][Domain IV] — the firm refuses FDA's request
FDA sends a centre-approved written request to recall an approved small-molecule injectable that it rates Class I. The firm refuses. What can FDA do next?

A. Issue a mandatory recall order under section 518(e), which applies to drugs and devices alike.
B. Nothing further under Part 7; the recall is voluntary and the firm's refusal ends the matter.
C. Order the recall under PHS 351(d)(2), which reaches injectables under any application type.
D. Seek seizure or an injunction, issue its own public warning, and issue a Warning Letter.

**정답:** D

**해설**
- D: 일반 의약품에는 리콜 명령 권한이 없다. 거부 시 FDA는 **압류(304)·금지명령(302)**, 직접 **공중 경고**, WL로 압박한다.
- A: 518(e)는 기기 권한이다.
- B: 거부해도 법적 조치와 공개 압력이 남는다.
- C: 351(d)(2)는 licensed 생물의약품 권한이다. 소분자 NDA 주사제에는 쓸 수 없다.

---

### Q26 [R][Domain II] — no mandatory recall authority
For which product category does FDA lack mandatory recall authority?

A. Medical devices under the FD&C Act.
B. Licensed biologics, including vaccines.
C. Prescription drugs under an NDA or ANDA.
D. Controlled substances under federal scheduling.

**정답:** C

**해설**
- C: 일반 의약품(NDA/ANDA/OTC)에는 **mandatory recall 권한이 없다**. FDA는 7.45 요청과 압류·금지명령을 쓴다.
- A: 기기는 518(e)가 있다.
- B: 생물의약품은 PHS 351(d)(2)가 있다.
- D: 통제물질은 569D(SUPPORT Act 2018)가 있다.

---

### Q27 [A][Domain IV] — biologic with an imminent hazard
A licensed vaccine lot is found to present an imminent or substantial hazard to public health, and the manufacturer delays action. Which statement about FDA's authority is correct?

A. FDA can order a recall under section 569D, which covers vaccines added by the SUPPORT Act in 2018.
B. FDA is limited to a 7.45 request, because PHS 351(d)(2) applies to human cell and tissue products.
C. FDA can order a recall under 351(d)(2), but not before the firm has refused a 7.45 request in writing.
D. FDA can order the lot recalled immediately under PHS 351(d)(2), with civil penalties for violations.

**정답:** D

**해설**
- D: **PHS 351(d)(2)**는 licensed 생물의약품 배치가 imminent or substantial hazard면 **즉시 회수 명령**을 허용한다(1986 NCVIA). 위반 민사벌금은 **일당 최대 $100,000**다.
- A: 569D는 통제물질 권한이다.
- B: HCT/P 명령 근거는 1271.440이다. 351(d)(2)는 licensed 생물의약품이다.
- C: 351(d)(2) 명령에 7.45 거부를 선행 요건으로 두는 규정은 교과서에 없다. "즉시"가 핵심이다.

---

### Q28 [R][Domain II] — matching order authorities
Which pairing of product and mandatory recall authority is correct?

A. HCT/Ps — 21 CFR 1271.440.
B. Medical devices — PHS 351(d)(2).
C. Controlled substances — section 518(e).
D. Licensed biologics — section 569D.

**정답:** A

**해설**
- A: HCT/P는 **1271.440**(retention·recall·destruction·cessation, PHS 361)이 명령 근거다.
- B: 기기는 518(e)다.
- C: 통제물질은 569D다.
- D: licensed 생물의약품은 PHS 351(d)(2)다.

---

### Q29 [An][Domain III] — why "voluntary" is not optional
A new regulatory associate says that, because FDA cannot order a drug recall, a firm is free to decide whether to recall a violative drug. Which statement best corrects this view?

A. "Voluntary" applies to Class III recalls, while Class I and II drug recalls are mandatory by statute.
B. "Voluntary" refers to who initiates; seizure, injunction, Park liability and publicity leave little choice.
C. "Voluntary" is accurate, because Part 7 is guidance and a firm that does nothing faces little consequence.
D. "Voluntary" is inaccurate, because 21 CFR 7.40 gives FDA a general recall order power for drugs.

**정답:** B

**해설**
- B: '자발'은 **개시 주체**가 회사라는 뜻이다. 위법 제품은 압류(304)·금지명령(302) 대상이고, 유통 지속은 301 금지 행위·**Park doctrine**, 7.45 요청, Enforcement Report 공개, 211.198·Q10 의무가 있어 개시 여부의 자유는 거의 없다.
- A: 등급에 따라 명령 권한이 생기지 않는다. 일반 의약품에는 등급과 무관하게 없다.
- C: 결과가 거의 없다는 주장이 틀렸다. 위의 법적·공개 압력이 있다.
- D: 7.40은 자발 리콜 정책이다. 의약품 명령 권한을 만들지 않는다.

---

### Q30 [R][Domain II] — Field Alert Report clock
An ANDA holder finds that a distributed lot has a stability failure. When is the Field Alert Report due under 21 CFR 314.81(b)(1)(ii)?

A. Within 3 working days, even if the investigation is not complete.
B. Within 3 working days after the root-cause investigation is complete.
C. Within 45 calendar days, as for biological product deviation reports.
D. Within 15 calendar days, as for serious unexpected adverse experiences.

**정답:** A

**해설**
- A: FAR은 **3 working days**이고 조사 완료 전이라도 낸다. 안정성 실패는 명시 FAR 사유다.
- B: 조사 완료를 기다리면 시한을 넘긴다. FAR은 리콜·조사와 무관하게 먼저 간다.
- C: 45일은 BLA의 BPDR(600.14)이다.
- D: 15일은 환자 유해 사례 ICSR(314.80) 시한이다.

---

### Q31 [A][Domain II] — BLA deviation report
A BLA holder finds that a distributed lot was released despite a deviation that may affect its potency. Which report and deadline apply to this event as a product deviation?

A. A Field Alert Report within 3 working days under 314.81(b)(1)(ii).
B. A biological product deviation report within 45 calendar days under 600.14.
C. A correction and removal report within 10 working days under Part 806.
D. A 15-day report under 600.80, because reduced potency affects efficacy in patients.

**정답:** B

**해설**
- B: BLA 유통 배치의 safety·purity·potency에 영향을 줄 수 있는 편차는 **BPDR 45 calendar days**(600.14)다.
- A: FAR은 NDA/ANDA 제도다.
- C: 806은 기기 교정·제거 보고다.
- D: 600.80 15-day는 환자 유해 사례 보고다. 제품 편차 자체의 보고가 아니다.

---

### Q32 [A][Domain II] — 5 mg tablets in 10 mg labels
QC finds that one lot of 5 mg tablets was packaged with 10 mg labels and has already been shipped to wholesalers. Which sequence of US actions is most appropriate?

A. Complete the root-cause investigation, wait for FDA's classification, then file a FAR and start the recall.
B. Start the recall immediately, then file a FAR within 3 working days of FDA's classification decision.
C. Treat it as a market withdrawal, because patients receive half the labelled dose rather than an overdose.
D. File a FAR within 3 working days and notify FDA immediately under 7.46, without awaiting classification.

**정답:** D

**해설**
- D: 라벨 혼입은 명시 FAR 사유라 **3 working days** 시계가 먼저 돈다. 리콜은 **7.46 즉시 통지**로 개시하고 분류를 기다리지 않는다(2022 guidance). HHE는 절반 용량에 따른 치료 실패 위험을 보고, 좁은 치료역이면 Class I이다.
- A: 조사·분류 대기는 FAR과 리콜 모두를 늦춘다.
- B: FAR 시계는 FDA 분류가 아니라 정보 수령에서 출발한다.
- C: 잘못된 강도 표시는 misbranding이므로 위법이다. 용량이 적어도 리콜이다.

---

### Q33 [R][Domain II] — device correction and removal
A device manufacturer starts a field correction to reduce a risk to health. Under 21 CFR 806, when must it report the correction to FDA?

A. Within 3 working days.
B. Within 10 working days.
C. Within 45 calendar days.
D. Immediately, under 21 CFR 7.46.

**정답:** B

**해설**
- B: 위험 감소·위법 교정 목적의 correction/removal은 **10 working days** 내 806 보고다.
- A: 3 working days는 FAR이다.
- C: 45 calendar days는 BPDR이다.
- D: 7.46 즉시 통지는 Part 7 리콜 절차다. 806 시한이 아니다.

---

### Q34 [A][Domain II] — autoinjector for an approved biologic
Autoinjectors for an approved biologic show needle-shield failures that could cause missed doses. The firm will supply replacement devices to patients. Which set of US obligations applies?

A. A Part 806 report alone, because the defect sits in the device constituent rather than the biologic itself.
B. Part 7 recall, a Part 806 report within 10 working days for the device part, and a BPDR within 45 days.
C. A Field Alert Report within 3 working days and a Part 7 recall, because the product is a drug.
D. A Part 7 recall by itself, because replacing devices is a correction and corrections fall outside Part 806.

**정답:** B

**해설**
- B: BLA 제품이라 리콜은 **Part 7**, 기기 구성품 교정·제거는 **806 보고 10 working days**, 결함 자체는 **BPDR 45일**(600.14)이다. 교체 기기 공급은 correction이다.
- A: 의약품(생물) 쪽 체계도 함께 적용된다. 한 사건을 두 보고 체계로 보낸다.
- C: FAR은 NDA/ANDA 제도다. BLA는 BPDR이다.
- D: 806은 correction과 removal 둘 다 다룬다.

---

### Q35 [A][Domain I] — DSCSA illegitimate product
A US wholesaler's investigation confirms that a package in its stock is illegitimate under the DSCSA. Which action and deadline apply?

A. Notify FDA within 3 working days through a Field Alert Report.
B. Notify the manufacturer, which then reports to FDA within 10 working days.
C. Quarantine the package and report it in the next 7.53 status report.
D. Notify FDA within 24 hours using Form 3911 and notify trading partners.

**정답:** D

**해설**
- D: FD&C **582**는 불법 제품 확정 시 **24시간 내 FDA 통지(Form 3911)**와 거래 파트너 통지를 요구한다.
- A: FAR은 NDA/ANDA 보유자의 품질 결함 보고다.
- B: 10 working days는 기기 806 시한이다. DSCSA 의무는 거래 파트너 자신에게 있다.
- C: 7.53은 리콜 상태 보고다. DSCSA 통지와 별개다.

---

### Q36 [A][Domain II] — counting the FAR deadline
An NDA holder receives information on a Monday that a distributed lot failed its impurity specification. There are no public holidays that week. Applying the textbook's 3-working-day rule and counting from the day after receipt, what is the last day to submit the Field Alert Report?

A. Wednesday of the same week.
B. Friday of the same week.
C. Thursday of the same week.
D. Monday of the following week.

**정답:** C

**해설**
- C: 수령 다음 날부터 working day를 센다. 화(1)·수(2)·목(3)이므로 **목요일**이다. 월요일 + 3 working days = 목요일로 검산된다.
- A: 수요일은 2 working days째다.
- B: 금요일은 4 working days째다.
- D: 다음 주 월요일은 5 working days째다. calendar day로 세도 맞지 않는다.

---

### Q37 [An][Domain II] — assigning the separate clocks
A company holds an NDA for tablets, a BLA for a monoclonal antibody and clearance for a stand-alone device. Each product has a distributed-lot problem this month. Which assignment of report and deadline is correct?

A. Tablets: FAR 3 working days; antibody: Part 806 10 working days; device: BPDR 45 days.
B. Tablets: FAR 3 working days; antibody: BPDR 45 days; device: Part 806 10 working days.
C. Tablets: Part 806 10 working days; antibody: BPDR 45 days; device: FAR 3 working days.
D. Tablets: BPDR 45 days; antibody: FAR 3 working days; device: Part 806 10 working days.

**정답:** B

**해설**
- B: NDA/ANDA는 **FAR 3 working days**(314.81), BLA는 **BPDR 45 calendar days**(600.14), 기기는 **806 10 working days**다. 셋 다 리콜 결정과 별도로 돈다.
- A: BPDR과 806이 뒤바뀌었다.
- C: FAR과 806이 뒤바뀌었다.
- D: FAR과 BPDR이 뒤바뀌었다.

---

### Q38 [R][Domain II] — EU authority power to stop supply
Under Directive 2001/83/EC, which article lets the competent authority prohibit supply and withdraw a medicinal product from the market, for example because it is harmful or not of the declared composition?

A. Article 81.
B. Article 23a.
C. Article 123(2).
D. Article 117.

**정답:** D

**해설**
- D: **Art 117**은 당국의 공급 금지·시장 철수 근거다. 유해·효능 결여·B/R 불리·기재 조성 불일치·시험 미실시·허가 조건 위반이 사유이고 배치 한정도 가능하다.
- A: Art 81은 공급 지속 의무다.
- B: Art 23a는 시판 중단 2개월 전 통지다.
- C: Art 123(2)는 MAH의 통지 의무다.

---

### Q39 [R][Domain II] — MAH notification under Article 123(2)
Under Article 123(2) of Directive 2001/83/EC, what must an MAH notify, and when?

A. Withdrawal or recall actions within the EU, within 2 months, with reasons left out of the notice.
B. Recall actions, within 24 hours, using the Rapid Alert form for Class I and II defects.
C. Any action to withdraw, suspend or recall, forthwith with reasons, including third-country actions.
D. Any action to withdraw, suspend or recall, in the next periodic safety update report, with reasons.

**정답:** C

**해설**
- C: Art 123(2)(Dir 2012/26)는 철회·정지·회수·MA 미신청 등 조치를 **즉시(forthwith)**, **사유와 함께** 통지하게 하고 **제3국 조치도 포함**한다.
- A: 제3국 조치도 포함하고, 사유 명시가 요건이다. 2개월은 Art 23a다.
- B: Rapid Alert는 당국이 발신하는 체계다. MAH 통지 의무와 다르다.
- D: 정기 보고를 기다리지 않는다. 즉시 통지다.

---

### Q40 [R][Domain II] — Article 117a
What does Article 117a of Directive 2001/83/EC (added by Directive 2011/62/EU) require member states to ensure?

A. Delegated rules on unique identifiers and anti-tampering devices on the outer packaging of medicines.
B. A designated person at each manufacturer responsible for handling complaints, defects and recalls.
C. A two-month advance notice to the authority before an MAH stops placing a product on the market.
D. A system for reports of suspected defective or falsified medicines and for recalls reaching patients.

**정답:** D

**해설**
- D: Art 117a는 결함·위조 의심 신고를 받는 시스템과 **환자에게 도달한 제품까지 회수**하는 체계를 보장하게 한다.
- A: safety features는 Delegated Reg 2016/161이다.
- B: 지정 책임자는 GMP Ch.8 요건이다.
- C: Art 23a다.

---

### Q41 [A][Domain I] — planned cessation of supply in the EU
An MAH plans to stop marketing a nationally authorised product in one member state for commercial reasons. No defect is involved. Which EU obligations apply?

A. Notify the authority 6 months in advance, which is the EU period matching section 506C in the US.
B. Notify the authority at least 2 months ahead under Article 23a and respect the Article 81 supply duty.
C. Notify the authority after supply has stopped, because without a defect a prior notice is not required.
D. Send a Class III Rapid Alert, because a cessation without a defect is handled as a low-risk recall.

**정답:** B

**해설**
- B: 시판 중단은 **Art 23a 2개월 전** 통지가 원칙이고, **Art 81** 공급 지속 의무가 함께 걸린다.
- A: 6개월은 미국 506C 기간이다.
- C: 결함이 없어도 Art 23a의 사전 통지가 적용된다. 사후 통지로는 부족하다.
- D: Class III은 Rapid Alert 미해당이고, 결함 없는 시판 중단은 리콜이 아니다.

---

### Q42 [R][Domain II] — GMP Chapter 8
Which element is a requirement of EU GMP Chapter 8 (in force 2015-03-01)?

A. Defects that may lead to a recall or abnormal restriction in supply are notified to the authority without undue delay.
B. Notification of a defect is deferred until the root cause is confirmed and "human error" is excluded.
C. Mock recalls are optional and may be replaced by effectiveness checks performed during real recalls.
D. Defects in investigational products are excluded and handled under the sponsor's own procedures.

**정답:** A

**해설**
- A: Ch.8은 리콜·**비정상 공급 제한**으로 이어질 수 있는 결함을 **지체 없이** NCA(CAP은 EMA도)에 알리게 한다.
- B: 통지는 근본 원인 확정을 기다리지 않는다. "사람 실수"를 기본 원인으로 두지 말라는 것은 조사 요건이다.
- C: **mock recall** 정기 평가는 Ch.8 요건이다. effectiveness check와 목적이 다르다.
- D: Ch.8 통지는 위조·IMP를 포함한다.

---

### Q43 [R][Domain II] — Rapid Alert Class I timing
Under the EU Compilation of Union Procedures, when is a Rapid Alert for a Class I quality defect transmitted?

A. Within 24 hours after the national action.
B. Within 7 days, through CTIS.
C. Simultaneously with the national action.
D. If the batch was exported, and not otherwise.

**정답:** C

**해설**
- C: Class I(잠재적 생명 위협·중대 위험)은 **국가 조치와 동시**에 Rapid Alert를 보내고, 수출 여부와 무관하게 전 수신처에 간다.
- A: 24시간은 Class II다.
- B: 7일·CTIS는 CTR Art 52/54 임상시험 통지다.
- D: Class I·II 모두 배치 수출 여부와 무관하게 전파한다.

---

### Q44 [A][Domain II] — Class II alert for a non-exported batch
A batch of tablets has a Class II quality defect. It was distributed in one member state only and was never exported. The supervisory authority asks whether a Rapid Alert is still needed. Which answer is correct?

A. Yes; within 24 hours to all recipients, whether or not the batch was exported.
B. No; Rapid Alerts are sent once a defective batch has crossed a border, not before.
C. No; Class II defects are handled nationally without a Rapid Alert.
D. Yes; simultaneously with the national action, as for each classified defect.

**정답:** A

**해설**
- A: Class II는 **24시간 내** Rapid Alert를 **전 수신처**에 보내고, 수출 여부와 무관하다.
- B: 수출 여부는 Class I·II 전파 요건이 아니다.
- C: 국내 처리로 끝나는 것은 Class III이다.
- D: 국가 조치와 동시는 Class I이다.

---

### Q45 [A][Domain II] — Class III and the Rapid Alert system
A national authority orders a Class III recall of a product with a cosmetic packaging defect. A colleague drafts a Rapid Alert to all EU/EEA authorities. Is this required?

A. Yes, within 24 hours, because each recall of a centrally or nationally authorised product is shared.
B. Yes, within 48 hours, which is the Class III timeline in the Rapid Alert procedure.
C. No; Class III defects fall outside the Rapid Alert system and are handled nationally.
D. Yes, simultaneously with the national action, because the defect concerns packaging.

**정답:** C

**해설**
- C: Class III은 **Rapid Alert 미해당**이고 국내에서 처리한다.
- A: 24시간은 Class II다.
- B: Class III "48시간" 표기는 검증되지 않은 자료이고, 교과서·덱은 "미해당"으로 정리한다.
- D: 동시 전파는 Class I이다.

---

### Q46 [A][Domain II] — whom to notify for a CAP defect
A quality defect is found in a centrally authorised product. The MAH's draft SOP says to notify EMA only, because the product holds a Union marketing authorisation. What is the correct notification route?

A. The European Commission, which then decides under Article 20 of Regulation 726/2004.
B. The supervisory authority first, which forwards the information to EMA after classification.
C. EMA and the supervisory authority, without delay, together with Article 123(2) notice.
D. EMA, since national authorities have a minor role for centrally authorised products.

**정답:** C

**해설**
- C: CAP 결함은 MAH/제조자가 **지체 없이 EMA + supervisory authority**에 알리고 **Art 123(2)** 통지를 한다. "EMA만"은 교과서 "흔한 혼동" 7번이다.
- A: Art 20 EC 조치는 필요시 단계다. 첫 통지 대상이 아니다.
- B: CAP은 처음부터 EMA에도 직접 알린다. 분류 후 전달 방식이 아니다.
- D: supervisory authority(배치 출하·제조소 NCA)가 결함 조사와 Rapid Alert 발신을 맡으므로 역할이 작지 않다.

---

### Q47 [A][Domain IV] — sterility failure in a CAP biologic shipped to the US
A centrally authorised biologic fails sterility on retained samples. The lot was shipped to six member states, Switzerland and the United States, where the product is licensed under a BLA. Which combination of actions fits the textbook framework?

A. EU Class II Rapid Alert within 24 hours; US Field Alert Report within 3 working days; recall at wholesale level.
B. EU Class I Rapid Alert sent to the six member states; US 7.46 notice after FDA classifies the hazard.
C. EU Class I Rapid Alert simultaneously; US BPDR within 45 days and immediate 7.46 notice; user-level recall.
D. EU notice to EMA as the single contact; US Part 806 report within 10 working days, because sterility is a device-type defect.

**정답:** C

**해설**
- C: 무균 실패는 Class I이다. EU는 EMA + supervisory authority에 지체 없이 알리고 supervisory authority가 **Rapid Alert를 즉시** 보낸다. 미국은 BLA라 **BPDR 45일**, **7.46 즉시 통지**, user level·effectiveness A이고, 회사가 안 하면 351(d) 명령 가능성이 있다.
- A: 무균 실패는 Class II가 아니다. FAR은 NDA/ANDA 제도다.
- B: Class I Rapid Alert는 6개 회원국에 그치지 않고 스위스·미국 같은 MRA·PIC/S 수신처를 포함해 전 수신처로 간다. 7.46은 분류를 기다리지 않는다.
- D: CAP은 supervisory authority에도 알린다. 806은 기기 보고다.

---

### Q48 [R][Domain II] — who sends the Rapid Alert
In the EU, which body normally issues a Rapid Alert for a quality defect?

A. The MAH, directly to each member state.
B. The supervisory authority.
C. The Reference Member State in a DCP.
D. The European Commission.

**정답:** B

**해설**
- B: Rapid Alert 발신은 **supervisory authority**(배치 출하·제조소 NCA)이고 CAP은 EMA가 조정한다.
- A: MAH는 당국에 통지할 뿐 Rapid Alert를 발신하지 않는다.
- C: DCP의 RMS는 variation·Art 116 평가를 맡는다. 발신은 supervisory authority다.
- D: EC는 Rapid Alert 수신처 중 하나다.

---

### Q49 [An][Domain V] — effectiveness check versus mock recall
A quality director proposes to drop periodic mock recalls because the firm already performs effectiveness checks whenever it runs a real recall. Which assessment is correct?

A. Acceptable; both tools answer the same question, so real-recall effectiveness checks can replace mock recalls.
B. Not acceptable; effectiveness checks verify a real recall, while mock recalls rehearse the process between recalls.
C. Acceptable in the US, because mock recalls are an EU concept with little relevance to US recall capability.
D. Not acceptable; mock recalls are what FDA uses to set the Level A to E effectiveness check for each recall.

**정답:** B

**해설**
- B: effectiveness check는 **실제 리콜 중 사후 검증**(Level A–E, 7.53 수치)이고, mock recall(Ch.8 §8.30)은 **리콜이 없을 때 절차 시연**이다. 리콜이 드물어 훈련 없이는 연락처·유통 기록이 당일에 작동하지 않는다.
- A: 둘 다 "회수 가능성"을 묻지만 시점과 목적이 달라 서로를 대신하지 않는다.
- C: 미국도 211.150 회수 가능성과 2022 guidance의 recall-ready를 요구한다.
- D: effectiveness level은 7.42 전략에서 정한다. mock recall과 무관하다.

---

### Q50 [R][Domain I] — DSCSA purpose and milestone
Which statement about the Drug Supply Chain Security Act is correct?

A. It aims at traceability and anti-counterfeiting, with electronic package-level tracing from 2023-11-27.
B. It aims mainly at anti-counterfeiting, verifying packs at dispensing without storing transaction history.
C. It applies to controlled substances and was enacted by the SUPPORT Act in 2018 as section 569D.
D. It requires lot-level tracing, with package-level serialization left to each state's pharmacy board.

**정답:** A

**해설**
- A: DSCSA(2013, FD&C 581–585)는 **추적성 + 위조 방지**가 목적이고, **2023-11-27** 상호운용 전자 패키지 단위 추적을 요구한다(안정화 2024-11-27).
- B: 위조 방지 중심, 조제 시점 검증, 거래 이력 미저장은 EU 2016/161의 특징이다. DSCSA는 추적성도 목적이다.
- C: 569D는 통제물질 리콜 명령 권한이다. DSCSA는 처방약 전반이다.
- D: DSCSA는 패키지 단위 serialization과 TI/TH/TS 교환을 요구한다.

---

### Q51 [A][Domain I] — DSCSA exemptions at the reference date
As of 2026-09-01, a US pharmacy with 12 pharmacists and technicians asks when its DSCSA electronic package-level tracing exemption ends. Which date is correct?

A. 2025-05-27.
B. 2027-11-27.
C. 2025-08-27.
D. 2025-11-27.

**정답:** B

**해설**
- B: 소형 dispenser(약사·테크 ≤25명) 유예는 2026-11-27에서 **2027-11-27**로 연장됐다(2026-08 발표). 기준일 2026-09-01 시점에 이미 발표된 사실이다.
- A: 2025-05-27은 제조·재포장 유예 종료다.
- C: 2025-08-27은 도매 유예 종료다.
- D: 2025-11-27은 대형 dispenser 유예 종료다.

---

### Q52 [R][Domain I] — EU safety features
Which statement about EU safety features under Directive 2011/62/EU and Delegated Regulation 2016/161 is correct?

A. They apply from 2019-02-09 and record each transaction between wholesalers to rebuild distribution paths.
B. They apply from 2023-11-27, requiring interoperable electronic tracing between trading partners at package level.
C. They apply from 2019-02-09, pairing a unique identifier with an anti-tampering device checked at dispensing.
D. They apply from 2015-03-01, together with GMP Chapter 8, to investigational medicinal products as well.

**정답:** C

**해설**
- C: 2016/161은 **2019-02-09**부터 **UI(2D) + ATD**, NMVS/EMVS 업로드, **조제 시점 검증·decommission**을 요구한다.
- A: 거래 이력은 저장하지 않는다. 경로 재구성은 도매 기록(Art 80)에 의존한다.
- B: 2023-11-27 전자 추적은 DSCSA다.
- D: 2015-03-01은 GMP Ch.8 시행일이다.

---

### Q53 [An][Domain I] — what each traceability system contributes to a recall
A global recall SOP must use both US DSCSA data and EU safety-feature data. Which statement best describes what each system contributes?

A. DSCSA rebuilds the distribution path for depth and reconciliation; EU data show which packs reached patients.
B. EU data rebuild the distribution path between wholesalers; DSCSA shows which packs were dispensed to patients.
C. Both systems hold the same transaction history, so the SOP can treat their data as interchangeable.
D. Neither system has a recall role; both are anti-counterfeiting tools and recalls rely on 7.53 reports.

**정답:** A

**해설**
- A: DSCSA는 거래마다 TI/TH/TS를 교환해 **유통 경로를 재구성**하므로 depth·수량 대조·effectiveness에 쓰인다. EU 2016/161은 decommission 기록으로 **환자에게 간 패키지 확인**과 위조 차단에 강하다.
- B: 역할이 뒤바뀌었다. 2016/161이 경로를 추적한다는 생각은 교과서 "흔한 혼동" 8번이다.
- C: EU 시스템은 거래 이력을 저장하지 않는다.
- D: 추적성은 리콜 깊이를 정하는 한계 요인이다. 두 시스템 모두 리콜에 기여한다.

---

### Q54 [A][Domain II] — EMVS "already decommissioned" alert
A pharmacy in Spain scans a pack and the EMVS reports that the unique identifier was already decommissioned. Which first response fits Delegated Regulation 2016/161 and the textbook chain?

A. Report a Class I Rapid Alert to the EU/EEA authorities at once, because the pack must be falsified.
B. Return the pack to the wholesaler, which must notify FDA within 24 hours using Form 3911.
C. Withhold supply, rule out system errors, and notify the NCA if falsification is suspected.
D. Dispense the pack, because a decommissioned identifier proves it passed verification earlier.

**정답:** C

**해설**
- C: 약국은 **공급을 중단하고 조사**해 시스템·절차 오류를 배제한다(Arts 30·36·37). 위조가 의심되면 **NCA 통지**(Art 117a)로 넘어간다. 대부분은 데이터 오류라 false alert 절차가 필수다.
- A: Rapid Alert는 당국이 위조를 확인한 뒤 supervisory authority 등이 보낸다. 약국이 바로 발신하지 않는다.
- B: Form 3911은 미국 DSCSA 582 절차다.
- D: 이미 decommission된 UI는 경보 사유다. 공급을 멈춘다.

---

### Q55 [A][Domain I] — shortage after a CAP recall
After a recall, the MAH of a centrally authorised oncology injectable must halt supply for four months. Which EU shortage channel is mandatory for reporting this, as of the 2026-09-01 reference date?

A. A section 506C notice to EMA, at least 6 months before supply stops.
B. The Rapid Alert system, using the Class II form within 24 hours of the decision.
C. The EMVS, by flagging the affected unique identifiers as unavailable.
D. The European Shortages Monitoring Platform (ESMP), mandatory since 2025-02-02.

**정답:** D

**해설**
- D: CAP 부족 보고는 **ESMP**가 **2025-02-02**부터 의무 채널이다. Art 23a·Art 81과 Reg 2022/123 MSSG 협의가 함께 간다.
- A: 506C는 미국 FD&C 조항이다.
- B: Rapid Alert는 품질 결함 경보 체계다. 부족 보고 채널이 아니다.
- C: EMVS는 safety features 검증 시스템이다.

---

### Q56 [A][Domain IV] — US shortage notification alongside a recall
A US firm is the sole manufacturer of a life-supporting sterile injectable. A recall will interrupt supply. Which shortage obligations apply?

A. Notify FDA under 506C 6 months ahead (or as soon as possible) and keep a 506C(j) risk management plan.
B. Notify FDA under Article 23a 2 months in advance, and report the interruption through the EU's ESMP channel.
C. Notify FDA within 3 working days through a Field Alert Report, which also serves as the shortage notice.
D. Notify FDA if the recall is Class I, because Class II and III recalls do not create a reportable shortage.

**정답:** A

**해설**
- A: **506C**는 생명유지·생명구조 등 제품의 단일/주요 제조자에게 **6개월 전**, 불가능하면 즉시 통지를 요구한다. **506C(j) 위험관리계획**(CARES Act 2020)도 갖춘다.
- B: Art 23a·ESMP는 EU 제도다.
- C: FAR은 품질 결함 보고이고 부족 통지를 대신하지 않는다.
- D: 506C는 리콜 등급이 아니라 공급 중단·차질에 걸린다.

---

### Q57 [An][Domain IV] — recall versus supply
A Class II defect is found in the only US-licensed lot of a life-sustaining biologic, and a full recall would create a shortage. Which approach reflects the textbook's balance of recall against supply?

A. Recall to the consumer level at once, because a Class II defect leaves little room for supply considerations.
B. Limit depth to wholesale, add a Dear HCP letter with use instructions, and consider temporary importation.
C. Hold off on action until a replacement lot is released, because shortage risk outweighs a Class II hazard.
D. Downgrade the defect to Class III so that a Rapid Alert and Enforcement Report listing can be avoided.

**정답:** B

**해설**
- B: 교과서는 **환자 위해 vs 미치료 위해**를 문서화한 B/R로 depth를 wholesale로 제한하고, **Dear HCP + 사용 지침**, 추가 시험 후 조건부 유통, **임시 수입**을 Drug Shortage Staff와 협의한다. EU는 supply-critical 경로가 대응물이다.
- A: 부족을 고려한 대안이 교과서에 있다. 무조건 전면 회수가 유일한 답이 아니다.
- C: 위법 제품을 방치하면 301·압류 노출이 생긴다. 대안을 찾되 조치는 한다.
- D: 등급은 FDA가 HHE로 정한다. 공개를 피하려는 하향은 과소 분류 노출을 만든다.

---

### Q58 [R][Domain I] — global alert systems
Which statement about global systems for defective or falsified medicines is correct?

A. WHO GSMS, set up in 2013, collects member-state reports and publishes WHO Medical Product Alerts.
B. PIC/S runs its own recall classification, which replaces the CoCP Rapid Alert procedure for its members.
C. WHO GSMS is the EU platform for reporting shortages of centrally authorised products since 2025.
D. Rapid Alerts are limited to EU/EEA authorities and are kept from non-EU agencies.

**정답:** A

**해설**
- A: **WHO GSMS**(2013)는 회원국 보고를 받아 **Medical Product Alert**를 낸다.
- B: PIC/S는 CoCP와 동일한 Rapid Alert 절차를 채택한다.
- C: EU 부족 플랫폼은 ESMP다.
- D: PIC/S·MRA 파트너(미국·일본·캐나다 등)와 WHO도 수신처다.

---

### Q59 [R][Domain I] — recall terminology
A Class I recall is being coordinated across several jurisdictions. Which terminology pairing is correct?

A. Canada uses Class I/II/III, while the EU uses Type I/II/III.
B. Japan uses Type I/II/III, while Australia uses Class I/II/III alone.
C. The US uses Level A to E for recall classes, while the EU uses Class I/II/III.
D. Canada uses Type I/II/III, while the US, EU and Japan use Class I/II/III.

**정답:** D

**해설**
- D: 미국·EU·일본은 **Class I/II/III**, 캐나다는 **Type I/II/III**다.
- A: 캐나다와 EU가 뒤바뀌었다.
- B: 일본은 Class 체계다. 호주 TGA는 행동 유형(recall / product defect correction / alert)에 Class를 병용한다.
- C: Level A–E는 effectiveness check 수준이다. 미국 등급은 Class다.

---

### Q60 [A][Domain V] — timing of direct notices in a global Class I recall
A Class I defect affects a product sold in the US, EU, Japan and Canada. The EU supervisory authority will issue a Rapid Alert today. The MAH's Japan affiliate plans to notify PMDA next week, after the EU action settles. What is the main problem with this plan?

A. The Rapid Alert reaches PIC/S and MRA recipients, so the MAH's direct notice must not lag it.
B. None; Japanese authorities receive the information through the WHO, so timing does not matter much.
C. Japan uses Type I/II/III, so the affiliate must first reclassify the defect before it can notify.
D. The affiliate must wait for FDA's classification, which sets the class for each jurisdiction.

**정답:** A

**해설**
- A: Rapid Alert는 PIC/S·MRA 수신처로 전파되므로 **MAH 직접 통지가 Rapid Alert보다 늦으면 안 된다**. 단일 HHE를 같은 날 제출하고 global recall lead 1명이 조율한다.
- B: Rapid Alert는 PIC/S 회원 당국에도 전파된다. 지연은 신뢰를 떨어뜨린다.
- C: 일본은 Class I/II/III 체계다.
- D: 각 당국이 자기 등급을 정한다. 일관성은 등급 매핑표로 맞춘다.

---

### Q61 [An][Domain III] — exposure from delay or under-classification
A firm delays a recall for weeks and argues internally for a lower class than its own data support. Which exposure does the textbook list for this conduct?

A. Mainly a higher Enforcement Report fee, since delay itself is not a prohibited act under the FD&C Act.
B. Mainly EU exposure under Article 23a, because US law does not address the timing of voluntary recalls.
C. FDA reclassification, a 7.45 request or FDA public warning, and seizure, injunction or Park prosecution.
D. Mainly loss of the right to request termination, because 7.55 bars firms that delayed initiation.

**정답:** C

**해설**
- C: 지연·과소 분류는 FDA **재분류·7.45 요청·직접 공중 경고**, 위법 제품 유통 지속에 따른 **301 → 압류·금지명령·Park 형사**로 이어진다. EU Art 116/117, 제조물 책임도 있다.
- A: 위법 제품 유통 지속은 301 금지 행위다. 게재 수수료 개념은 교과서에 없다.
- B: 미국 노출이 핵심이다. Art 23a는 시판 중단 통지다.
- D: 7.55에 그런 제한은 교과서에 없다.

---

### Q62 [A][Domain III] — decision record contents
Legal counsel asks what a recall decision record should contain so that it holds up later. Which element does the textbook specifically add beyond the health hazard evaluation?

A. A statement that the firm accepts FDA's class without reservation, to show cooperation with the agency.
B. The marketing team's estimate of lost sales, to justify the chosen depth of recall to shareholders.
C. The alternatives considered, such as market withdrawal or a Dear HCP letter, and why each was rejected.
D. A single summary written after termination, so that interim drafts do not become discoverable.

**정답:** C

**해설**
- C: 결정 기록에는 HHE와 근거 외에 결정자·일시와 **고려한 대안과 기각 이유**가 들어간다. 유통·수량, 당국 통지 시각, 통신문 승인본, 상태 보고·종결도 남긴다.
- A: 등급 수용 진술은 기록 요소가 아니다. 회사 HHE는 협상 근거다.
- B: 매출 손실은 depth 근거가 아니다.
- D: 기록은 결정 시점에 남긴다. 사후 요약은 통지 시각 같은 요소를 담지 못한다.

---

### Q63 [A][Domain IV] — potency OOS in an administered MSC-EV lot
A stability pull shows a potency OOS for an allogeneic MSC-EV lot (licensed as a biologic) already given to patients at four US and two German centres. No adverse events are reported. Which plan fits the textbook?

A. Usually Class II; BPDR in 45 days; user-level recall of unused stock; Dear HCP letter; EU Class II Rapid Alert in 24 hours.
B. Class I by default; FAR within 3 working days; recall unused stock at wholesale level; EU action deferred unless an adverse event occurs.
C. Class III, because adverse events did not occur; BPDR within 45 days; EU notice to the German authority alone.
D. Not a recall, because the product was administered; a Dear HCP letter by itself, with an EU DHPC under GVP XV.

**정답:** A

**해설**
- A: 역가 부족은 미치료 위험이라 보통 **Class II**다. 미국은 **BPDR 45일**, 미사용분 7.46 **user level**·effectiveness A, 투여 환자는 **Dear HCP**로 재평가한다. 독일은 Ch.8로 EMA + supervisory authority·PEI, Art 123(2), **Class II Rapid Alert 24시간**이다.
- B: Class I 기본값은 무균·엔도톡신 결함 얘기다. FAR은 NDA/ANDA 제도다.
- C: AE가 없다는 사실만으로 Class III이 되지 않는다. EU는 EMA + supervisory authority에 알린다.
- D: 미사용분은 회수 대상이다. 투여분에 대한 서신이 리콜을 대신하지 않는다.

---

### Q64 [A][Domain V] — changing the expiration dating period
A stability failure at 30 months shows that a labelled 36-month expiry is supported only to 24 months. Separately, a second product has full shelf-life data on production batches under its approved stability protocol supporting a longer expiry. Under FDA's 2004 guidance on changes to an approved NDA or ANDA, how are the two changes filed?

A. Shortening: CBE-30 supplement; extension: annual report.
B. Shortening: annual report; extension: CBE-30 supplement.
C. Shortening: CBE-0 supplement; extension: prior approval supplement.
D. Shortening: prior approval supplement; extension: CBE-0 supplement.

**정답:** A

**해설**
- A: 더 높은 확신을 위한 유효기간 **단축**은 **CBE-30 supplement**다. 승인된 프로토콜 하 생산 배치 full shelf-life 데이터에 근거한 **연장**은 **annual report**(314.70(d)(2)(vi))다. 이미 유통된 재고의 재라벨은 별도로 correction = 리콜이다.
- B: 두 범주가 뒤바뀌었다.
- C: 단축은 CBE-0가 아니다. 승인 프로토콜·생산 배치 데이터 연장은 PAS까지 가지 않는다.
- D: 단축에 PAS는 과하고, 연장에 CBE-0는 맞지 않는다.

---
