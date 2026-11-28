# 문제은행 — Ch.28 (2/2) 복합제품: 세부 규정·상황형

> **근거:** `textbook/Ch28.md` + `cards/Ch28_1.md`·`cards/Ch28_2.md` 검증 메모(21 CFR 3.2(e)/(m)·3.4·3.7·3.8, Part 4 Subpart A(4.3·4.4)·Subpart B(4.102·4.103, 집행 2020-07-31/2021-01-31), 314.70·314.80·314.81(b)(1)·600.14·803·806, QMSR 2026-02-02·ISO 13485 §7.3/§7.4/§8.5.2/8.5.3, FDA Premarket Pathways 2022·bridging draft 2019·HF draft 2016·CDx 2014, MDR Art 1(8)/(9)·117·Annex IX §5.2, IVDR Art 48, EMA DDC 2021, EMA Q&A Art 117). 새 숫자 없음. 날짜 계산 문항은 교과서 기한(4.103 5 calendar days·5-day report 5 영업일·malfunction 30일·806 10 영업일·FAR 3 영업일·BPDR 45일·RFD 60일)으로만 계산했고, 공휴일이 없는 주를 가정했다. "?"로 표시된 *Essential Drug Delivery Outputs* 상태와 LDT 정책은 정답 키로 쓰지 않았다.
> **형식:** 영문 시나리오 → 영문 선지 A~D → 정답 → 한국어 해설. 태그 `[R]/[A]/[An]` + Domain.
> **작성:** 2026-11-27. 64문항.

---

### Q01 [A][Domain II] — plunger defect, which reports
An NDA holder markets a drug in a prefilled syringe. The syringe supplier reports a batch of plungers with silicone oil out of specification, and two patients report incomplete doses without injury. Which set of US reports fits Part 4 Subpart B?

A. A malfunction report within 30 calendar days alone, because Part 4 replaces the drug FAR obligation whenever the defect lies in the device constituent of the product.
B. A FAR within 5 working days and a malfunction report within 10 working days, without an 806 report because no patient was injured.
C. A FAR within 3 working days, a malfunction report within 30 calendar days, and a 15-day alert report for the two patients.
D. A FAR within 3 working days, a malfunction report within 30 calendar days, and an 806 report within 10 working days if a correction or removal is made.

**정답:** D

**해설**
- D: 제조 결함·규격 이탈은 **FAR**(314.81(b)(1), **3 영업일**), 재발 시 중상 가능성이 있는 기기 구성 결함은 **malfunction report**(**30 calendar days**), 회수·시정을 하면 **806 correction/removal**(**10 영업일**)이다.
- A: Part 4는 신청 유형 기반 보고 위에 기기 보고를 **더하는** 구조다. FAR 의무는 그대로 남는다.
- B: FAR는 3 영업일, malfunction은 30일이다. 806은 상해 유무가 아니라 회수·시정 여부로 정해진다.
- C: 이상반응(상해)이 없으므로 15-day 보고는 필요 없고 periodic 보고에 요약한다.

---

### Q02 [R][Domain II] — information sharing section and clock
Under 21 CFR Part 4 Subpart B, what is the information-sharing duty between constituent part applicants of a combination product?

A. 21 CFR 4.105 — share reportable safety information with the other applicant within 5 business days of receipt.
B. 21 CFR 4.103 — share reportable safety information with the other applicant within 5 business days of awareness.
C. 21 CFR 4.103 — share reportable safety information with the other applicant within 5 calendar days of receipt.
D. 21 CFR 4.102 — share reportable safety information with the other applicant within 30 calendar days of receipt.

**정답:** C

**해설**
- C: 구성품 신청자 간 정보 공유는 **4.103**이고, 기한은 정보 **접수(receipt) 후 5 calendar days**다.
- A: 조항 번호(4.105)와 날짜 단위(business days)가 둘 다 틀렸다. 교과서·덱은 4.103·calendar days로 바로잡았다.
- B: 조항은 맞지만 영업일이 아니라 달력일이고, 시작점도 접수다.
- D: 4.102는 보고 유형 조항이고, 30일은 malfunction report 기한이다.

---

### Q03 [A][Domain V] — sharing deadline as a date
A drug (NDA holder A) and a separately sold infusion pump (PMA holder B) are cross-labeled. On a Monday, B receives a report that the pump malfunctioned and caused an overdose with serious injury. What is the latest day for B to share the information with A under Part 4, assuming no holidays?

A. The following Monday, counting 5 business days from receipt.
B. The Saturday of the same week, counting 5 calendar days from receipt.
C. The Friday of the same week, counting the day of receipt as day one.
D. The Monday two weeks later, the same clock as a correction or removal report.

**정답:** B

**해설**
- B: 4.103은 접수 후 **5 calendar days**다. 월요일 접수 다음 날부터 달력일로 다섯 날을 세면 같은 주 **토요일**이다.
- A: 영업일로 센 값이다. 4.103의 단위는 달력일이다.
- C: 접수일을 첫날로 세면 기한이 하루 당겨진다. 기한은 접수 다음 날부터 센다.
- D: 10 영업일은 806 correction/removal 기한이다.

---

### Q04 [A][Domain V] — FAR due date
An NDA holder of a drug-led prefilled pen learns on a Wednesday that a released batch failed its specification for a device-related attribute. When is the field alert report due at the latest, assuming no holidays?

A. The Saturday of the same week, counting 3 calendar days from the date of awareness.
B. The following Monday, counting 3 working days from the date of awareness.
C. The Friday of the same week, counting the day of awareness as the first working day.
D. The Wednesday of the following week, counting 5 business days as for a 5-day report.

**정답:** B

**해설**
- B: **FAR**는 314.81(b)(1)에 따라 **3 영업일**이다. 수요일 다음 날부터 목·금·월로 세면 **다음 주 월요일**이다.
- A: 달력일로 셌다. FAR의 단위는 영업일이다.
- C: 인지일을 첫날로 세면 하루가 당겨진다.
- D: 5 영업일은 기기 **5-day report**의 기한이다.

---

### Q05 [R][Domain II] — Part 4B table
Which pairing matches the Part 4 Subpart B reporting timelines as presented for combination products?

A. Malfunction report within 30 working days; 806 correction/removal report within 10 calendar days.
B. Malfunction report within 15 calendar days; 806 correction/removal report within 30 calendar days.
C. Malfunction report within 5 working days; 806 correction/removal report within 3 working days.
D. Malfunction report within 30 calendar days; 806 correction/removal report within 10 working days.

**정답:** D

**해설**
- D: **malfunction 30 calendar days**(4.102/803), **806 correction/removal 10 영업일**이다.
- A: 두 기한의 날짜 단위가 뒤바뀌었다.
- B: 15일은 약 쪽 15-day 보고 숫자다. 806은 10 영업일이다.
- C: 5 영업일은 5-day report, 3 영업일은 FAR 기한이다.

---

### Q06 [R][Domain II] — biologic deviation report
For a biologic-led combination product, which deadline and citation apply to a biological product deviation report?

A. 45 days, under 21 CFR 600.14.
B. 30 calendar days, under 21 CFR 803, as for a device malfunction that could recur.
C. 15 calendar days, under 21 CFR 600.80, as for serious and unexpected adverse experiences.
D. 3 working days, under 21 CFR 314.81(b)(1), as for a drug field alert report.

**정답:** A

**해설**
- A: **BPDR**은 **600.14**, **45일**이다.
- B: 30일은 malfunction report다.
- C: 600.80은 생물의약품 이상반응 보고 조항이다. BPDR 조항이 아니다.
- D: 3 영업일은 약의 FAR다.

---

### Q07 [A][Domain II] — cross-labeled pump overdose, who reports
A drug (NDA holder A) is cross-labeled with a separately sold infusion pump (PMA holder B). B learns that a pump malfunction caused a serious, unexpected overdose. Which statement reflects Part 4?

A. B files its own 803 report and shares with A within 5 calendar days; A assesses a 314.80 15-day report, and both may report the same event.
B. The lead-center applicant alone reports, and B discharges its duty by forwarding the information to A within 5 calendar days.
C. B shares with A within 5 business days under 4.105, and A need not report anything because the device caused the event.
D. A and B file one joint report under the application of the PMOA, which avoids duplicate entries in FAERS and eMDR for the same overdose.

**정답:** A

**해설**
- A: B는 자기 PMA 보고(803 MDR 30일/5-day)를 하고 **4.103에 따라 5 calendar days 내 A에 공유**한다. A는 중상·unexpected면 **314.80 15-day**를 판단한다. **중복 보고는 허용**된다(각자 의무).
- B: 공유는 B의 보고 의무를 대신하지 않는다.
- C: 조항(4.105)·날짜 단위가 틀렸고, A의 314.80 의무도 남는다.
- D: 공동 보고 규정은 없다. 각 신청자가 각자 보고한다.

---

### Q08 [An][Domain IV] — contract that removes sharing
For the cross-labeled drug (NDA holder A) and pump (PMA holder B), the companies propose a contract under which B alone handles all pump events and does not pass them to A, "to avoid duplicate reports." Evaluate.

A. Acceptable, provided B reports within 5 calendar days instead of 30, which offsets the loss of A's assessment.
B. Not acceptable — B must transfer its device reporting duty to A, because the drug applicant leads cross-labeled products.
C. Not acceptable — 4.103 requires B to share within 5 calendar days, A keeps its own reporting duty, and duplicates are allowed.
D. Acceptable, because a written agreement between the applicants can allocate reporting duties as long as FDA receives one report of each event.

**정답:** C

**해설**
- C: **4.103 정보 공유**는 계약으로 없앨 수 없는 의무이고, A는 공유받은 정보로 **자기 314.80 의무**를 평가한다. 중복 보고를 피하는 것이 목표가 아니다 — **중복은 허용**된다.
- A: 기한을 당겨도 공유 의무와 A의 평가 의무는 대신되지 않는다.
- B: 각자 의무다. B의 803 보고 의무가 A로 넘어가지 않는다.
- D: 신청자 간 계약으로 보고 의무를 한쪽에 몰 수 있다는 근거는 없다.

---

### Q09 [A][Domain II] — 5-day report trigger
A drug-led autoinjector holder finds that a device fault in a distributed lot presents a serious risk to the public health. Which device-constituent report and timeline fits?

A. A field alert report, due within 3 working days, which replaces device reports for drug-led products.
B. A 4.103 information-sharing notice, due within 5 calendar days, which serves as the report to FDA.
C. A 5-day report, due within 5 business days.
D. A malfunction report, due within 30 calendar days, since a death has not yet been reported.

**정답:** C

**해설**
- C: 중대 공중보건 위험이면 **5-day report**(803), **5 영업일**이다.
- A: FAR는 별도 의무로 검토할 수 있지만, 기기 보고를 대신하지 않는다.
- B: 4.103은 신청자 사이의 공유 의무다. FDA 보고가 아니다.
- D: 30일 malfunction report는 일반 경로다. 공중보건 위험이 크면 5-day로 간다.

---

### Q10 [R][Domain II] — base rules for an NDA-led product
Which statement describes the postmarketing safety reporting framework of 21 CFR Part 4 Subpart B for an NDA-led combination product?

A. The holder chooses either 314.80 or 803 by notifying OCP, and the chosen set then covers both constituent parts.
B. The holder follows 314.80 and 314.81 alone, since device-constituent reports bind PMA and 510(k) holders and not NDA holders.
C. The holder follows 314.80 and 314.81 and adds device-constituent reports such as malfunction, 5-day and 806 reports.
D. The holder switches entirely to 21 CFR 803, because the device constituent sets the reporting rules once a device is present.

**정답:** C

**해설**
- C: Subpart B는 **신청 유형 기반 규정**(NDA → 314.80/.81)을 따르고 **다른 구성품 유형의 보고**(malfunction·5-day·806)를 **추가**한다.
- A: 보고 규정을 고르는 절차는 없다. 고르는 구조는 Subpart A cGMP의 streamlined 선택이다.
- B: 약 PMOA 제품도 기기 구성 보고를 추가로 한다.
- D: 기본 규칙은 신청 유형이 준다. NDA 제품이 803으로 통째로 바뀌지 않는다.

---

### Q11 [R][Domain I] — Subpart B enforcement dates
When did FDA begin enforcing 21 CFR Part 4 Subpart B?

A. 31 January 2021 for FAERS and eMDR reporters, and 31 July 2020 for VAERS reporters.
B. 31 July 2020 for FAERS, eMDR and VAERS reporters at once, the date the final rule was published in the Federal Register.
C. 2 February 2026 for each reporter group, aligned with the effective date of the QMSR amendments.
D. 31 July 2020 for FAERS and eMDR reporters, and 31 January 2021 for VAERS reporters.

**정답:** D

**해설**
- D: 집행 시작은 **2020-07-31**(FAERS·eMDR 보고자), **2021-01-31**(VAERS 보고자)이다.
- A: 두 날짜가 뒤바뀌었다.
- B: 최종규칙은 2016-12이고, VAERS 보고자는 따로 늦게 시작했다.
- C: 2026-02-02는 QMSR 시행일이다.

---

### Q12 [A][Domain II] — identifier for drug-led single-entity
A company prepares the label of a drug-led single-entity prefilled pen approved under an NDA. Which labeling and identifier approach fits?

A. UDI on the pen in place of an NDC, because the device constituent is the part users handle directly.
B. NDA labeling rules with device instructions for use, and an NDC; UDI does not apply to the product itself.
C. Device labeling under Part 801 as the base rule, with the drug information added as a package insert.
D. NDC and UDI together, because Part 4 applies device identifier rules to each device constituent.

**정답:** B

**해설**
- B: 복합제품은 **PMOA 신청 유형의 라벨 규정**(201 PLR·610)을 따르고 기기 **IFU·HF 기반 지시**를 넣는다. 식별자는 **NDC**이고 복합제품 자체엔 **UDI 비적용**이다.
- A: NDC가 식별자다. UDI가 대신하지 않는다.
- C: 기본 라벨 규정은 PMOA 신청 유형(NDA)에서 온다.
- D: UDI는 단독 판매 기기·cross-labeled 기기에 적용된다.

---

### Q13 [A][Domain II] — which product carries a UDI
A company has two products: a drug-led single-entity prefilled pen (NDA) and an infusion pump sold separately and cross-labeled with another firm's drug. Which identifier statement is correct?

A. Both products carry a UDI, because each contains a device constituent subject to Part 4.
B. The pen carries a UDI and the pump uses an NDC, because the pump is labeled for use with a drug.
C. Both products use an NDC, because each is part of a combination product led by the drug.
D. The pen uses an NDC and the separately sold pump carries a UDI.

**정답:** D

**해설**
- D: 복합제품 자체(프리필드 펜)는 **NDC**, **UDI**는 **단독 판매·cross-labeled 기기**(별도 판매 펌프)에 적용된다.
- A: 복합제품 자체엔 UDI를 적용하지 않는다.
- B: 둘이 뒤바뀌었다.
- C: 별도 판매 펌프는 기기로서 UDI 대상이다.

---

### Q14 [An][Domain I] — US vs EU adverse event architecture
Compare US and EU adverse event reporting for a drug-led product whose device part is a separately CE-marked co-packaged syringe in the EU.

A. Both regions run one integrated system, since the drug leads and its pharmacovigilance absorbs device events.
B. The US runs two parallel systems, FAERS and eMDR, while the EU folds device incidents into EudraVigilance alone.
C. The EU requires an Article 117 opinion for each incident, while the US relies on 4.103 sharing in place of reports.
D. The US runs one system with device requirements added; the EU runs pharmacovigilance and MDR vigilance in parallel.

**정답:** D

**해설**
- D: 미국은 신청 유형 기반 보고에 **Part 4B 기기 요건·4.103 공유**를 더한 **하나의 체계**다. EU는 의약품 PV(GVP·EudraVigilance)에 더해, 별도 CE 기기(co-packaged)면 **MDR vigilance**(EUDAMED)가 **병행**한다.
- A: EU는 별도 CE 기기면 두 체계가 나란히 간다.
- B: 미국은 통합 규정이고, EU의 co-packaged CE 기기는 MDR vigilance가 병행한다.
- C: Art 117은 시판 전 NB opinion이고, 4.103은 FDA 보고를 대신하지 않는다.

---

### Q15 [A][Domain III] — EU co-packaged syringe incident
In the EU, a drug vial is co-packaged with a separately CE-marked syringe. Several syringes crack during reconstitution, and one user is injured. Which vigilance route applies?

A. The MAH handles the event in pharmacovigilance, and MDR vigilance through EUDAMED applies in parallel for the CE-marked syringe.
B. The syringe maker reports under MDR vigilance alone, since a device defect falls outside pharmacovigilance for the vial.
C. The notified body that issued the Article 117 opinion receives the incident report and decides whether a variation is needed.
D. The MAH reports the event in EudraVigilance alone, since the syringe is covered by the medicinal product authorisation.

**정답:** A

**해설**
- A: co-packaged 별도 CE 기기면 의약품 PV와 **MDR vigilance**(EUDAMED, 제조자 사고 보고)가 **병행**한다.
- B: 사용자 상해는 의약품 PV에서도 다룬다. 두 체계가 병행한다.
- C: co-packaged 기기는 Art 117 대상이 아니고, NB가 사고 보고를 받는 구조도 아니다.
- D: co-packaged 기기는 의약품 MA에 흡수되지 않고 자기 CE를 유지한다.

---

### Q16 [R][Domain II] — calendar-day obligations
Which two Part 4 Subpart B obligations are counted in calendar days rather than working days?

A. The malfunction report and the 4.103 information-sharing duty.
B. The 806 correction/removal report and the field alert report.
C. The 5-day report and the field alert report.
D. The 806 correction/removal report and the 4.103 information-sharing duty.

**정답:** A

**해설**
- A: **malfunction 30 calendar days**, **4.103 공유 5 calendar days**다.
- B: 806(10 영업일)과 FAR(3 영업일)는 영업일이다.
- C: 5-day report(5 영업일)와 FAR(3 영업일)는 영업일이다.
- D: 806은 영업일이다.

---
### Q17 [R][Domain I] — single-application principle
What does FDA's 2022 final guidance *Principles of Premarket Pathways for Combination Products* establish about the number of marketing applications?

A. Two applications by default, merged into one when the constituents are physically or chemically combined.
B. One application to OCP, which then splits the review among the centers named in the letter of designation.
C. One application per constituent part, each reviewed by its own center and linked by a cross-reference letter.
D. One application to the lead center of the PMOA, with the other constituent reviewed inside it by the consulting center.

**정답:** D

**해설**
- D: 2022 guidance의 **단일 신청 원칙**: **PMOA 주관 센터에 하나의 신청**(NDA/BLA/PMA/510(k)/De Novo)을 내고, 상대 구성품 정보는 그 안에서 **자문 센터**가 심사한다.
- A: 기본은 하나이고, 두 신청이 예외다.
- B: OCP는 지정·조율 기관이다. 신청을 받는 곳은 주관 센터다.
- C: 구성품마다 신청을 내는 것은 예외(두 신청)다.

---

### Q18 [A][Domain IV] — NDA plus 510(k) to de-risk
A sponsor developing a drug with a co-packaged autoinjector plans to file the drug as an NDA and the autoinjector as a separate 510(k) "to de-risk the program." What is the best advice?

A. File one PMA through CDRH, because a 510(k) cannot be paired with an NDA under the 2022 guidance.
B. Proceed, provided the 510(k) is cleared first, so that the NDA can cite the clearance in place of its own device data.
C. File one NDA with the device data inside it for CDRH consult review; separate filings misalign timing and labels.
D. Proceed, since a cleared 510(k) lets the device be changed later without any effect on the NDA.

**정답:** C

**해설**
- C: co-packaged·single-entity면 **NDA 하나**에 기기 데이터(설계 통제·성능·HF)를 넣고 CDRH가 자문한다. 두 신청은 **심사 일정 불일치·라벨 교차 문제**로 오히려 위험을 키운다.
- A: 이 제품의 PMOA는 약물이라 주관 센터는 CDER이고 신청은 NDA다.
- B: 510(k)를 먼저 받아도 원칙 위반은 그대로다.
- D: 두 신청이 기기 변경을 자유롭게 해 준다는 근거는 없다. 단일 신청 원칙에 어긋난다.

---

### Q19 [An][Domain IV] — when two applications fit
Which situation gives the strongest basis for two marketing applications (a drug NDA and a device PMA) under FDA's 2022 premarket pathways policy?

A. A single-entity product whose PMOA is unclear, so that each center can review its own constituent in full.
B. A co-packaged kit whose device is made by a contract manufacturer that holds a separate quality system.
C. A single-entity prefilled syringe whose device team prefers to manage design changes through CDRH directly.
D. A cross-labeled device sold separately for other uses, with its own lifecycle, after OCP consultation.

**정답:** D

**해설**
- D: 두 신청은 **예외**이고, **별도 판매·다른 수명주기** 같은 사정이 있을 때 **정당화·OCP 협의**로 쓴다.
- A: PMOA가 불명확하면 RFD로 주관 센터를 정한다. 두 신청이 해법이 아니다.
- B: 기기 제조자가 따로 있어도 co-packaged 제품은 하나의 신청이다. 공급자는 구매 통제로 관리한다.
- C: 팀의 관리 편의는 single-entity 제품을 두 신청으로 나눌 근거가 아니다.

---

### Q20 [An][Domain IV] — why two filings raise risk
A program lead argues that a separate device filing reduces risk because "if the device is delayed, the drug can still be approved." Why does the textbook treat this as increasing risk for a co-packaged product?

A. A separate device filing makes the product a cross-labeled combination, which triggers a new RFD before either review.
B. CDRH cannot consult on an NDA once a device filing exists, so device data in the NDA go unreviewed.
C. The reviews run on different schedules and the labels must cross-reference, so delay in one stalls both.
D. FDA charges a second user fee and applies a longer review clock, so the drug approval is delayed by design.

**정답:** C

**해설**
- C: 두 신청은 **심사 일정 불일치**와 **라벨 교차 문제**를 만든다. co-packaged 제품은 기기 없이 출시되지 않으므로 한쪽 지연이 전체를 멈춘다.
- A: 신청 수가 3.2(e) 유형을 바꾸지 않는다. 포장이 유형을 정한다.
- B: CDRH 자문이 막힌다는 규정은 없다.
- D: 수수료·심사 기한 논리는 교과서 근거가 아니다.

---

### Q21 [A][Domain III] — CDx after approval
A Phase 3 trial used a companion diagnostic run at one central laboratory. The drug label will require the test. After approval, the sponsor wants to keep the assay as a lab-developed test at that laboratory instead of seeking device approval. What fits FDA's 2014 CDx policy?

A. Acceptable, provided the laboratory is named in the drug label as the single source of testing.
B. An FDA-approved CDx should be available at the same time as the drug; LDT substitution fits only a transitional exception.
C. The CDx must be approved before the pivotal trial begins, so the program now needs a new Phase 3 study run with the approved test.
D. Acceptable, because the assay already supported the pivotal trial and was analytically validated before use.

**정답:** B

**해설**
- B: 2014 CDx guidance는 약 라벨이 CDx를 요구하면 **FDA 승인/허가 CDx(PMA)** 가 **동시에** 있어야 한다고 본다. 중앙 실험실 LDT 대체는 승인 CDx가 없는 **과도기 예외**만 정당화할 수 있다.
- A: 라벨에 실험실 이름을 넣는 방식은 교과서 근거가 없다. 라벨은 "FDA-approved test"를 참조한다.
- C: pivotal 전 승인이 아니라 IDE로 임상에 쓰고 **동시 심사·동시 승인**을 노린다.
- D: pivotal에 썼다는 사실이 시판 후 승인 CDx를 대신하지 않는다.

---

### Q22 [R][Domain III] — CDx co-development elements
Which set of elements reflects the US architecture for co-developing a targeted drug and its companion diagnostic under the 2014 guidance?

A. Drug NDA or BLA first; CDx PMA filed after drug approval using postmarketing data from the drug's patients.
B. Drug NDA or BLA; CDx PMA; IDE use in trials; an analytically validated test in the pivotal; concurrent review.
C. A single NDA covering both drug and test, with CDRH consulting and the test cleared through the drug's labeling.
D. Drug NDA or BLA; CDx registered as an LDT under CLIA; the drug label naming the laboratory as the test source.

**정답:** B

**해설**
- B: 약 NDA/BLA + CDx **PMA**(CDRH), 임상은 **IDE**(812), pivotal에 **분석적 검증된 CDx**, **cross-labeled 동시 심사·동시 승인**, 라벨 상호 참조("FDA-approved test")다.
- A: 동시 승인이 원칙이다. 약 승인 뒤로 미루지 않는다.
- C: CDx는 별도 기기 신청(PMA)이다. 약 신청에 흡수되지 않는다.
- D: LDT는 원칙 경로가 아니다.

---

### Q23 [R][Domain I] — IVDR consultation for a CDx
Under the EU IVDR, how is a companion diagnostic for a centrally authorised medicinal product assessed?

A. As a Class C device by a notified body, which consults EMA on suitability for the medicine under Article 48.
B. As part of the medicinal product under Article 117, with the notified body opinion attached to the MAA.
C. As a Class B device by self-declaration, with the medicine's MAA carrying the test data in Module 3.2.R.
D. As a Class C device assessed by EMA directly, with the notified body consulted for the analytical validation alone.

**정답:** A

**해설**
- A: IVDR에서 CDx는 **Class C**로 **NB 평가** 대상이고, **Art 48(3)–(4)**에 따라 NB가 의약품 적합성(suitability)에 대해 **EMA(CAP) 또는 NCA와 협의**한다.
- B: Art 117은 integral drug-device 조합의 MDR 조항이다. CDx는 IVDR Art 48이다.
- C: CDx는 Class C이고 NB 평가가 필요하다.
- D: 평가 주체는 NB이고, EMA는 협의 대상이다.

---

### Q24 [R][Domain I] — when Part 4 starts for co-packaged products
During manufacture of a co-packaged kit, when does the Part 4 Subpart A streamlined approach begin to apply?

A. From receipt of each constituent at the external supplier's site, so that suppliers follow Part 4 from the start.
B. From the start of combining or co-packaging and thereafter; before that, each constituent follows its own rules.
C. From the date of marketing approval, whatever the manufacturing stage of each constituent part.
D. From final release testing under 211.165, so that the finished kit alone is subject to device provisions.

**정답:** B

**해설**
- B: 4.3·4.4(a): 각 구성품은 **결합 전까지 자기 규정**(약 211, 기기 QMSR)만 적용되고, **결합 작업과 그 이후**에 Part 4가 적용된다.
- A: 외부 기기 공급자는 기기 규정만 따른다.
- C: 기준은 승인일이 아니라 제조 단계(결합)다.
- D: 결합 작업 자체부터 Part 4다. 출하 시험에서 시작하지 않는다.

---

### Q25 [A][Domain II] — external syringe supplier
A drug manufacturer co-packages a syringe bought from an external device maker. The drug firm's QA asks the device maker to adopt Part 4 cGMP for its own plant. Which response fits?

A. The device maker must adopt Part 4, since its syringe ends up inside a combination product that is itself subject to Part 4.
B. It follows device rules; the drug firm bears Part 4 duties and controls the supplier through purchasing controls.
C. The device maker must add 211 provisions to its plant, because the syringe will contact the drug.
D. The device maker is exempt from device quality rules once it signs a quality agreement with the combination manufacturer.

**정답:** B

**해설**
- B: 외부 기기 공급자는 **기기 규정만** 따르고, **복합제품 제조자가 Part 4 의무**를 진다. 공급자는 **구매 통제**(820.50/ISO 13485 §7.4)로 관리한다.
- A: Part 4는 결합 작업과 그 이후에 적용된다.
- C: 211 조항 추가는 820 기반 복합제품 제조자의 선택지다. 공급자 의무가 아니다.
- D: 품질계약은 기기 규정 준수를 대신하지 않는다.

---

### Q26 [R][Domain II] — QMSR clause mapping
After the QMSR took effect, which ISO 13485:2016 clauses correspond to design controls, purchasing controls and CAPA under Part 4?

A. Design §7.4, purchasing §7.3, CAPA §8.5.2/8.5.3.
B. Design §7.3, purchasing §8.5.2, CAPA §7.4.
C. Design §5, purchasing §7.4, CAPA §7.3.9.
D. Design §7.3, purchasing §7.4, CAPA §8.5.2/8.5.3.

**정답:** D

**해설**
- D: 설계 통제 **§7.3**, 구매 **§7.4**, CAPA **§8.5.2/8.5.3**이다. 경영 책임은 §5다.
- A: 설계와 구매가 뒤바뀌었다.
- B: 구매와 CAPA가 뒤바뀌었다.
- C: §5는 경영 책임, §7.3.9는 설계 변경 통제다.

---

### Q27 [An][Domain I] — what QMSR changed in practice
A drug manufacturer asks how the QMSR changes its Part 4 obligations for an autoinjector in practice. Which assessment fits?

A. The requirements rose sharply, because ISO 13485 adds design controls that the former 820 regulation did not contain for devices.
B. The change affects device-based manufacturers alone, since drug-based firms did not cite 820 provisions before.
C. The level of requirements changed little; the language and inspection approach changed to ISO 13485 and a new program.
D. The device provisions were removed from Part 4, so drug-based manufacturers now follow 211 alone.

**정답:** C

**해설**
- C: Part 4가 참조하던 820 조항이 **ISO 13485 인용 체계**로 바뀌었다. 실무는 품질 매뉴얼 **조항 매핑 갱신**, 사찰은 **QSIT 대신 새 compliance program**(7382.850)이다. 요구 수준보다 **언어·사찰 방식**이 바뀐 것이다.
- A: 820.30에도 설계 통제가 있었다. 요구 수준은 크게 안 변했다.
- B: 211 기반 제조자도 820.30 등 추가 조항을 따르므로 영향을 받는다.
- D: 820 특정 조항 추가 구조는 그대로이고, 참조만 ISO 13485로 바뀌었다.

---

### Q28 [R][Domain I] — QMSR dates
Which dates apply to the QMSR and to its effect on Part 4?

A. QMSR effective 2 February 2026; technical amendments updating Part 4 references in December 2025.
B. QMSR effective 2 February 2026; Part 4 references left pointing to the former 820 sections.
C. QMSR effective December 2025; Part 4 references updated at the first inspection under the new program.
D. QMSR effective 31 July 2020; Part 4 references updated in January 2021 for VAERS reporters.

**정답:** A

**해설**
- A: **QMSR 시행 2026-02-02**(820 → ISO 13485:2016 인용), Part 4 참조를 정리한 **기술 개정 2025-12**다.
- B: Part 4 참조는 기술 개정으로 ISO 13485 체계로 정리됐다.
- C: 시행일과 개정 시점이 뒤섞였다.
- D: 2020-07-31·2021-01-31은 Part 4 Subpart B 집행일이다.

---

### Q29 [A][Domain II] — 211-based firm adds an autoinjector
A drug manufacturer that complies fully with 21 CFR 211 begins assembling a prefilled autoinjector. Which added device provisions does the streamlined approach call for?

A. Management responsibility, design controls, purchasing controls and CAPA, plus installation and servicing if relevant.
B. 211.84, 211.103, 211.165 and 211.170, applied to the device constituent's incoming components.
C. Full compliance with 820 in addition to full compliance with 211, because the product is now a single-entity combination.
D. Design controls alone, since purchasing and CAPA are already covered by the drug cGMP regulation.

**정답:** A

**해설**
- A: 211 기반이면 820의 특정 조항 — **820.20 경영 책임, 820.30 설계 통제, 820.50 구매, 820.100 CAPA**, 필요시 820.170 설치·820.200 서비스 — 를 더한다. QMSR 이후엔 ISO 13485 대응 조항으로 읽는다.
- B: 211 조항 목록은 820 기반 제조자가 더하는 쪽이다.
- C: streamlined approach는 두 규정 전면 준수가 아니라 하나 + 특정 조항이다.
- D: 구매 통제와 CAPA도 추가 조항에 들어 있다.

---

### Q30 [A][Domain II] — 820-based firm adds a drug
A device manufacturer that complies fully with the QMSR begins producing a drug-coated device as a single-entity product. Which added drug provisions fit the streamlined approach?

A. Full compliance with 211, because any drug constituent removes the device-based option under the Part 4 streamlined approach.
B. Selected 211 provisions, such as component testing, expiration dating, stability testing and reserve samples.
C. Design controls, purchasing controls and CAPA, applied to the drug substance supplier.
D. Drug provisions are not added, because the drug constituent remains under its own rules after combination.

**정답:** B

**해설**
- B: 820(QMSR) 기반이면 211의 특정 조항(**211.84** 원료 시험, .103 수율, .132 tamper-evident, **.137** 유효기간, .165 출하 시험, **.166** 안정성, .167 특수 시험, **.170** 보관 샘플)을 더한다.
- A: 820 기반 선택지는 약 구성품이 있어도 열려 있다.
- C: 설계·구매·CAPA는 211 기반 제조자가 더하는 820 조항이다.
- D: 결합 이후에는 Part 4가 적용되어 211 특정 조항이 붙는다.

---

### Q31 [A][Domain IV] — cell-seeded scaffold RFD
A sponsor's RFD argues that the PMOA of a cell-seeded scaffold is "biologic." The scaffold gives structural support, and tissue regeneration depends on the cells' metabolic activity. How is OCP likely to analyze it?

A. Device, because the scaffold makes up most of the product's mass and remains implanted permanently in the patient.
B. Biologic, CBER lead, since regeneration depends on the cells; data on effect without cells would inform it.
C. Undecidable, so the product goes to the center that received the first pre-submission meeting request.
D. Biologic, because a product containing living cells is assigned to CBER whatever its mode of action may be.

**정답:** B

**해설**
- B: OCP는 **치료 효과에 가장 중요한 작용**을 본다. 재생이 세포 대사 활성에 의존하면 **PMOA 생물 → CBER**(CDRH 자문)이고, 선례와 "세포 없이도 효과가 있나" 데이터가 근거다. 지정은 접수 후 60일 내 letter of designation이다.
- A: PMOA는 질량이 아니라 치료 효과 기여로 정한다.
- C: 불명확하면 선례, 그다음 전문성 있는 센터 순서다.
- D: 세포 포함 여부만으로 정하지 않는다. 스캐폴드가 주 치료면 기기 PMOA가 된다.

---

### Q32 [A][Domain IV] — OCP misses the 60-day clock
A sponsor files an RFD recommending CBER as lead center for a biologic-device product. OCP issues no letter of designation within 60 days of filing. What follows?

A. CDRH becomes the lead center, since device constituents default to CDRH when a letter does not issue within the period.
B. OCP gains an extension of the same length, after which the sponsor may request a meeting.
C. The RFD lapses, and the sponsor must refile with a shorter submission within the page limit.
D. CBER becomes the designated lead center, as the sponsor recommended.

**정답:** D

**해설**
- D: 3.8: 접수 후 **60일** 내 letter of designation이 없으면 **스폰서가 추천한 센터가 지정**된다.
- A: 기기 기본값 규정은 없다. 자동 결과는 스폰서 추천 센터다.
- B: 연장 규정은 없다. 기한에 자동 결과를 붙인 것이 3.8의 취지다.
- C: RFD가 실효되지 않는다. 자동 지정이 결과다.

---
### Q33 [R][Domain II] — bridging concept
What does "bridging" mean in FDA's 2019 draft guidance *Bridging for Drug-Device and Biologic-Device Combination Products*?

A. Linking the drug and device applications through cross-references so that two filings act as one review.
B. Transferring a device's 510(k) clearance to the combination product so that device data need not be resubmitted.
C. Comparing the US and EU device requirements so that one technical file can support both submissions.
D. Building the case to extrapolate existing data to a commercial device that differs from the device used earlier.

**정답:** D

**해설**
- D: 개발 중 쓴 기기와 **상용 기기가 다를 때** 기존 데이터를 새 기기로 **외삽**할 근거를 만드는 것이다 — 설계·성능 차이 분석, HF 검증, 필요시 PK/용량 전달 비교.
- A: 두 신청을 잇는 개념이 아니다. 원칙은 단일 신청이다.
- B: 510(k) 이전 개념은 교과서 근거가 없다.
- C: 지역 간 문서 비교는 bridging의 뜻이 아니다.

---

### Q34 [A][Domain III] — prototype in the pivotal
Clinical wants to run the pivotal drug trial with a prototype autoinjector and switch to the commercial device at launch. The drug is the PMOA. Which advice fits?

A. The switch can be handled after approval as a CBE-30 supplement, since the drug itself does not change.
B. Freeze the commercial design before the pivotal, or show equivalence with design controls, HF and bridging data.
C. Device work can wait, because a drug PMOA places the device under CDER review without the design control provisions.
D. A Phase 4 human factors study can replace equivalence data, provided it starts within the first year after launch.

**정답:** B

**해설**
- B: PMOA가 약물이라도 **설계 통제·HF 검증**이 필요하고, 임상 기구와 상용 기구의 **동등성**(용량 정확도·사용성·PK 영향)을 보여야 한다. 미국은 **bridging**, EU는 상용 기기에 대한 **Art 117 NB opinion**이다. 권고는 pivotal 전 **design freeze**다.
- A: 동등성 입증 없이 출시 시점 변경을 시판 후 보고로 미룰 근거가 없다. 미입증이면 승인 지연·추가 임상이다.
- C: 약물 PMOA여도 Part 4의 설계 통제가 붙는다.
- D: 시판 후 HF 연구가 승인 전 동등성 입증을 대신하지 않는다.

---

### Q35 [An][Domain III] — bridging fails
Device performance testing shows that the commercial autoinjector delivers dose differently from the clinical device, and the gap cannot be explained by design analysis. What does the bridging approach imply?

A. The difference is accepted if the device meets its ISO 13485 design outputs, since the drug did not change.
B. The clinical device can be marketed instead, since it was the one used to show efficacy and safety.
C. A labeling statement about the difference resolves the gap, provided human factors testing passes.
D. Bridging is not possible, so the commercial device must be studied clinically.

**정답:** D

**해설**
- D: 차이가 크면 **bridging이 불가**하고 **상용 기기로 임상**을 한다.
- A: 설계 출력 충족은 임상 데이터 외삽 근거가 되지 못한다.
- B: 교과서 선택지는 상용 기기로 임상하는 것이다. 임상 기기 출시는 근거가 없다.
- C: 라벨 문구가 용량 전달 차이를 메우지 않는다.

---

### Q36 [A][Domain II] — stronger spring after approval
After approval, an NDA holder replaces the autoinjector spring with a stronger one, which changes injection time. How should the US change be handled?

A. PAS under 314.70(b), or CBE-30 if equivalence is shown, with design change control, HF revalidation and performance tests.
B. A new RFD, because the change in injection time may shift the PMOA from drug to device.
C. Annual report, because a spring is a device component and device changes fall outside the 314.70 reporting categories for drugs.
D. A new 510(k) for the autoinjector, because device changes leave the NDA and move to CDRH review.

**정답:** A

**해설**
- A: 투여 성능·안전에 영향할 수 있으면 **PAS**(314.70(b)), 영향이 제한적이고 동등성이 입증되면 **CBE-30**이다. 데이터는 **설계 변경 통제**(ISO 13485 §7.3.9 + DHF 갱신), **HF 재검증**, 성능 시험(주입 시간·용량 정확도)이다.
- B: 스프링 변경은 치료 작용을 바꾸지 않는다. RFD 대상이 아니다.
- C: 기기 변경도 314.70 보고 카테고리로 분류한다.
- D: 단일 신청 원칙에 따라 변경은 NDA 안에서 다룬다.

---

### Q37 [A][Domain II] — the same spring change in the EU
The product in the previous scenario is centrally authorised in the EU as an integral single-use autoinjector. The stronger spring changes injection time. What is required in the EU?

A. A Type IB or II variation, plus a new Article 117 notified body opinion if conformity with the GSPR is affected.
B. A new MAA, because any change to an integral device ends the original authorisation under Article 1(9).
C. A Type IA notification alone, since device parts are outside the medicinal product authorisation.
D. A new CE certificate for the autoinjector, which then replaces the Article 117 opinion in Module 3.2.R.

**정답:** A

**해설**
- A: EU는 **Type IB/II variation**이고, GSPR 적합성에 영향이 있으면 **Art 117 NB 재의견**이 필요하다(EMA Q&A Art 117).
- B: 변경은 variation으로 다룬다. 새 MAA가 아니다.
- C: integral 기기는 의약품 MA 안에 있다. 성능 영향 변경은 IA로 끝나지 않는다.
- D: integral 기기는 CE가 아니라 Art 117 opinion으로 증명한다.

---

### Q38 [R][Domain II] — human factors guidances
Which pair of FDA guidances governs human factors for combination products, and in what status?

A. *Human Factors Studies … in Combination Product Design and Development* (final 2022) and CDRH *Applying Human Factors and Usability Engineering to Medical Devices* (final 2016).
B. *Technical Considerations for Pen, Jet, and Related Injectors* (final 2013) and *Bridging for Drug-Device and Biologic-Device Combination Products* (final 2019).
C. *Human Factors Studies … in Combination Product Design and Development* (final 2016) and CDRH *Applying Human Factors and Usability Engineering to Medical Devices* (draft 2016).
D. *Human Factors Studies … in Combination Product Design and Development* (draft 2016) and CDRH *Applying Human Factors and Usability Engineering to Medical Devices* (final 2016).

**정답:** D

**해설**
- D: 복합제품 HF guidance는 **draft 2016**, CDRH HF guidance는 **final 2016**이다.
- A: 2022는 Premarket Pathways guidance 연도다.
- B: bridging guidance는 2019 **draft**이고, 두 문서 모두 HF 핵심 guidance가 아니다.
- C: 두 guidance의 상태가 뒤바뀌었다.

---

### Q39 [A][Domain III] — which HF study proves acceptability
An autoinjector program has completed use-related risk analysis and several formative studies. Which study is used to show that remaining use errors are acceptable for the application?

A. A summative (validation) study with intended users in the intended environment, covering critical tasks.
B. A postmarketing complaint review, which shows acceptable use errors from real-world experience.
C. A further formative study with engineers, which refines the design before the final usability decision.
D. A bench performance study of dose accuracy, which replaces user testing once the design is frozen.

**정답:** A

**해설**
- A: 순서는 사용 관련 위험 분석 → formative → **summative(validation)** 이다. summative는 **의도 사용자·환경, 중요 과업**으로 사용 오류가 수용 가능함을 입증한다.
- B: 승인 전에 입증해 신청서에 넣는다.
- C: formative는 설계를 다듬는 단계이고, 의도 사용자로 하는 validation이 아니다.
- D: 성능 시험은 HF 연구를 대신하지 않는다.

---

### Q40 [R][Domain IV] — bridging guidance status
As of 1 September 2026, what is the status of FDA's guidance *Bridging for Drug-Device and Biologic-Device Combination Products*?

A. Withdrawn in 2026 after the QMSR replaced the 820 design control provisions.
B. Final 2019, binding on sponsors that change devices after pivotal trials.
C. Draft 2019, to be cited as a reference and not as a final policy.
D. Final 2022, issued together with the premarket pathways guidance.

**정답:** C

**해설**
- C: bridging guidance는 **2019 draft**이고 기준일 시점에 "참고"로 쓴다.
- A: 철회 근거는 없다. QMSR은 Part 4의 820 참조를 바꿨을 뿐이다.
- B: final이 아니다. guidance는 구속력도 없다.
- D: 2022 final은 Premarket Pathways guidance다.

---

### Q41 [A][Domain IV] — correcting three statements
It is 1 September 2026. A colleague says: "Part 4 still points to the 820 quality system regulation; the bridging guidance is final; and the EU has a combination product legal category." How many of these statements are correct?

A. One — the EU statement is correct under Article 117; the other two are wrong.
B. One — the bridging guidance is final; the other two are wrong.
C. None — Part 4 follows the QMSR's ISO 13485 framework, bridging is a 2019 draft, and the EU has no category.
D. Two — Part 4 still points to 820 and the bridging guidance is final, while the EU statement on a legal category is wrong.

**정답:** C

**해설**
- C: ① **QMSR 2026-02-02 시행**으로 Part 4의 820 참조는 ISO 13485 인용 체계로 바뀌었다. ② bridging은 **2019 draft**다. ③ EU엔 **복합제품 범주가 없고** MDR Art 1(8)/(9)·117, IVDR Art 48로 처리한다. 셋 다 틀렸다.
- A: Art 117은 NB opinion 조항이다. 법적 범주를 만들지 않는다.
- B: bridging guidance는 draft다.
- D: 820 QS regulation 참조는 QMSR로 바뀌었다.

---

### Q42 [R][Domain IV] — HF combination guidance status
As of 1 September 2026, what is the status of FDA's *Human Factors Studies and Related Clinical Study Considerations in Combination Product Design and Development*?

A. Draft 2019, issued with the bridging guidance.
B. Draft 2016.
C. Final 2016.
D. Final 2022, merged into the premarket pathways guidance.

**정답:** B

**해설**
- B: 복합제품 HF guidance는 **2016 draft**다.
- A: 2019 draft는 bridging guidance다.
- C: final인 것은 CDRH의 기기 HF guidance(2016)다.
- D: 2022 final은 Premarket Pathways guidance이고, HF guidance와 합쳐지지 않았다.

---

### Q43 [An][Domain V] — costliest mistakes
For an MSC-EV product with a dedicated applicator filed in the US and EU, which two failures does the textbook identify as the most expensive?

A. Filing an RFD that OCP rejects, and omitting a UDI from the applicator's label.
B. Changing the device after the pivotal trial, and delay of the EU notified body opinion.
C. Missing the 4.103 sharing deadline, and choosing the wrong ISO 13485 clause for CAPA.
D. Choosing the 211-based cGMP option, and filing a separate 510(k) for the applicator.

**정답:** B

**해설**
- B: 가장 비싼 실수는 **pivotal 후 기구 변경**과 **EU NB opinion 지연**(NB 역량 부족)이다. 그래서 설계 동결·NB 조기 계약이 프로젝트 관리 과제다.
- A: PMOA가 생물로 명확하면 RFD는 대개 불필요하고, 복합제품 자체엔 UDI가 적용되지 않는다.
- C: 둘 다 교과서가 꼽은 최대 비용 항목이 아니다.
- D: 211 기반 선택은 정당한 선택지다. 두 신청은 원칙 위반이지만 교과서가 꼽은 최대 비용 항목은 아니다.

---

### Q44 [A][Domain V] — first three months of the device workstream
A sponsor has 18 months to submit a BLA and MAA for an EV product with a single-use applicator. Which activities belong in months 0–3 of the device workstream?

A. Part 4 cGMP gap analysis and submission of the notified body technical documentation.
B. Summative HF study, ISO 10993 biocompatibility, and drafting of 3.2.P.2 and 3.2.R.
C. BLA and MAA submission with the notified body opinion attached, to secure an early review slot.
D. Design freeze with the DHF, supplier quality agreements, and a notified body contract for Article 117.

**정답:** D

**해설**
- D: **M0–3**은 기기 **설계 동결(DHF)**, 공급자 품질계약, EU **NB 계약**(Art 117)이다.
- A: Part 4 갭 분석과 NB 기술문서 제출은 M6–12다.
- B: HF summative·ISO 10993은 M3–9, 3.2.P.2/3.2.R 작성은 M12–15다.
- C: 제출은 M15–18이다.

---

### Q45 [A][Domain V] — sequencing the NB opinion
In the same 18-month plan, the notified body opinion is assumed to take 6–9 months. Which sequence is consistent with the textbook plan?

A. Skip the opinion for the MAA and file it as a post-authorisation variation once the NB responds.
B. Submit NB documentation in months 0–3, before design verification, so the opinion arrives first.
C. Submit NB documentation in months 15–18, so the opinion follows the MAA during validation.
D. Submit NB documentation in months 6–12, so the opinion is ready to attach at submission in months 15–18.

**정답:** D

**해설**
- D: **M6–12**에 NB 기술문서를 제출하고 6–9개월 소요를 가정하면 **M15–18 제출**에 opinion을 첨부할 수 있다.
- A: Art 117 opinion은 MAA에 첨부하는 문서다. 시판 후 variation으로 돌릴 수 없다.
- B: 설계 검증 전이라 NB가 평가할 기술문서가 갖춰지지 않는다.
- C: NB opinion은 MAA validation에 필수라 제출 뒤로 미룰 수 없다.

---

### Q46 [An][Domain V] — notified body capacity risk
Why is notified body capacity a regulatory risk for drug-device combinations in the EU, and which mitigation set fits?

A. NBs review the medicinal part too, so capacity limits slow efficacy review; mitigate by filing the MAA first, without any device data.
B. EMA issues Article 117 opinions when NBs are busy; mitigate by asking EMA to act as the notified body.
C. NB shortages can stretch Article 117 opinions to months or a year, which MAA validation needs; contract early, freeze devices.
D. NBs must reassess each CE-marked device yearly; mitigate by switching to reusable devices outside Article 1(9) entirely.

**정답:** C

**해설**
- C: MDR 전환 후 **NB 부족**으로 Art 117 opinion이 **수개월~1년** 걸릴 수 있고, MAA validation에 그 의견이 **필수**다. 완화: **NB 조기 계약**, Annex II/III 수준 기술문서 선준비, pre-submission에서 일정 공유, pivotal 전 기기 동결.
- A: NB opinion은 기기 부분 GSPR만 본다. 의약품 평가는 범위 밖이다.
- B: EMA가 NB를 대신한다는 규정은 없다.
- D: 매년 재평가 근거는 없고, 재사용 기기로 바꾸는 것은 완화책이 아니다.

---

### Q47 [A][Domain V] — EV with an integral applicator
An MSC-EV product will be supplied in a prefilled, single-use applicator that is integral to the product. Which US and EU plan fits?

A. US: two filings, BLA to CBER and PMA to CDRH; EU: MDR CE for the applicator and an MA for the EV product.
B. US: single-entity, CBER lead with CDRH consult, one BLA; EU: Article 1(9) MA plus an Article 117 NB opinion.
C. US: co-packaged, CDER lead with CBER consult, one NDA; EU: MA with the applicator's CE declaration in 3.2.R.
D. US: CDRH lead because the applicator delivers the dose; EU: Article 1(8) MDR with EMA consultation on the EV.

**정답:** B

**해설**
- B: 미국은 **single-entity**, PMOA 생물 → **CBER 주관·CDRH 자문**, **BLA 하나**에 기기 데이터(820.30/ISO §7.3, HF, 성능)다. EU는 integral·single-use라 **Art 1(9) → MA + Art 117 NB opinion**, DDC 3.2.P.2/P.7/R다.
- A: 단일 신청 원칙에 어긋나고, integral 기기는 EU에서 별도 CE가 아니다.
- C: 유형(single-entity)과 주관 센터(CBER)가 틀렸다.
- D: PMOA는 생물이고, EV가 주 작용이라 Art 1(8)이 아니다.

---

### Q48 [A][Domain V] — EV with a co-packaged nebuliser in the EU
The MSC-EV product will instead be co-packaged with a proprietary nebuliser that is CE-markable on its own. Which EU plan fits?

A. One combined EU authorisation covering both, issued by EMA after CAT classification.
B. Article 1(8) MDR for the whole kit, with EMA consulted on the EV product under Annex IX §5.2.
C. MDR CE for the nebuliser and an MA for the EV product, with CAT classification and in-use data in 3.2.P.2.
D. Article 1(9) MA with an Article 117 opinion, because the nebuliser is sold solely with the product and with no other medicine.

**정답:** C

**해설**
- C: co-packaged는 Art 1(9) integral이 아니라 **네뷸라이저 MDR CE + 약 MA**다. ATMP 여부는 **CAT 분류**로 별도 판단하고, **in-use 성능**은 3.2.P.2에 둔다.
- A: EU엔 두 구성을 한 허가로 묶는 복합제품 범주가 없다.
- B: Art 1(8)은 기기가 주이고 약물이 보조일 때다.
- D: co-packaged는 integral이 아니다. Art 117 대상이 아니다.

---
### Q49 [R][Domain I] — scope of the Article 117 opinion
What does a notified body opinion under MDR Article 117 cover for an integral drug-device product?

A. The quality, safety and usefulness of the medicinal substance, which the NB then reports to EMA for the MAA.
B. Both the device part and the medicine's quality, so that EMA can rely on the NB for Module 3 assessment.
C. Conformity of the device part with the GSPR in MDR Annex I, without assessing the medicine's efficacy or quality.
D. The usability clinical data in Module 5, since human factors fall under the NB's device expertise.

**정답:** C

**해설**
- C: 범위는 integral 기기 부분이 MDR Annex I **GSPR 관련 요건**(안전·성능)에 적합한지다. **의약품 평가(효능·품질)는 포함되지 않는다.**
- A: 의약물질의 품질·안전·유용성 의견은 Art 1(8) 제품에서 NB가 당국에 구하는 Annex IX §5.2 협의 내용이다.
- B: 의약품 품질은 NB 범위가 아니다.
- D: 사용성 임상 데이터는 Module 5에 들어가지만 NB opinion의 범위는 GSPR 적합성이다.

---

### Q50 [A][Domain II] — needle supplier change, same specification
A centrally authorised drug-device product changes its needle supplier. The new needle meets the same specification, and verification is maintained. Under the EMA Q&A on Article 117, what is likely required?

A. Neither a variation nor an NB opinion, because the needle is a device part and device changes sit outside the MA.
B. A new CE certificate for the needle, which the MAH files in 3.2.R in place of the Article 117 opinion.
C. No NB re-opinion if the MAH justifies no effect on GSPR conformity, and a Type IA or IB variation.
D. A new NB opinion and a Type II variation, because any supplier change is a change to the device design.

**정답:** C

**해설**
- C: EMA Q&A: **GSPR 적합성에 영향 없음**(동일 규격·검증 유지)을 MAH가 정당화하면 **NB 재의견 불요**, variation은 **Type IA/IB**(B.II.e)다. 동등성·성능 시험 문서는 3.2.R에 둔다.
- A: integral 기기는 MA 안에 있으므로 variation이 필요하다.
- B: integral 기기는 CE가 아니라 Art 117 opinion으로 증명한다.
- D: 영향이 있을 때가 Type II + 갱신 opinion이다. 공급자 변경이 자동으로 그쪽으로 가지 않는다.

---

### Q51 [A][Domain IV] — material change that affects GSPR
The same product changes the polymer of the device housing, and the NB considers that GSPR conformity may be affected. What is the regulatory route?

A. A new MAA, because a change of device material creates a new integral product under Article 1(9).
B. Type II variation with an updated NB opinion under Article 117.
C. Type IB variation, provided the polymer is listed in the European Pharmacopoeia for container use.
D. Type IA variation with the MAH's own risk assessment, since the NB's role ends at authorisation.

**정답:** B

**해설**
- B: GSPR 적합성에 영향이 있거나 NB가 재평가를 요구하면 **Type II + 갱신 NB opinion**이다.
- A: 변경은 variation으로 다룬다.
- C: 약전 등재 여부로 분류한다는 근거는 없다.
- D: 승인 후에도 GSPR 영향 변경엔 NB 재의견이 필요하다.

---

### Q52 [A][Domain I] — reusable insulin pen
A company sells an empty, reusable insulin pen in the EU; patients load it with cartridges authorised separately. Which regime applies to the pen?

A. Article 1(9), so the pen is covered by the insulin MA and needs an Article 117 opinion.
B. Article 1(8), with the NB consulting EMA on insulin under Annex IX §5.2.
C. A combination product authorisation, because the pen is labeled for one insulin.
D. MDR CE marking for the pen, separate from the insulin MA, because it is reusable.

**정답:** D

**해설**
- D: 재사용 기기는 **Art 1(9) 밖**이라 **MDR 기기(CE)** 로 약과 별도다.
- A: Art 1(9)는 integral·**비재사용**일 때다.
- B: Art 1(8)은 기기에 보조 약물이 포함된 경우다. 빈 펜엔 약물이 없다.
- C: EU엔 복합제품 범주가 없다.

---

### Q53 [A][Domain I] — heparin-coated catheter
A manufacturer seeks EU market access for a heparin-coated catheter. The catheter's main action is mechanical, and heparin plays an ancillary role. Which route fits?

A. Article 1(8): MDR conformity assessment, with the NB consulting a medicines authority on the heparin (Annex IX §5.2).
B. Article 1(9): a medicinal product MA for the heparin coating, with an Article 117 NB opinion covering the catheter itself.
C. Article 117 route: EMA evaluates the catheter, and the NB gives an opinion on the heparin's quality.
D. Co-packaged route: MDR CE for the catheter and a separate MA for the heparin coating.

**정답:** A

**해설**
- A: 기기가 주이고 약물이 **보조(ancillary)** 면 **Art 1(8) → MDR**이다. NB가 헤파린 부분에 대해 **EMA/NCA와 협의**한다(**Annex IX §5.2**).
- B: Art 1(9)는 약물이 주 작용일 때다.
- C: 평가 주체와 대상이 뒤바뀌었다.
- D: 코팅은 결합된 일체이고 별도 포장된 약이 아니다.

---

### Q54 [R][Domain I] — Annex IX §5.2
What does MDR Annex IX section 5.2 provide for a device that incorporates an ancillary medicinal substance?

A. The manufacturer files an MAA for the substance, and the NB relies on that authorisation without consultation.
B. The NB issues an Article 117 opinion for the substance, which is then attached to the device's technical file.
C. The NB seeks a scientific opinion from EMA or a national authority on the substance and reconsults on changes.
D. EMA assesses the device and issues the CE certificate, with the NB consulted on device safety.

**정답:** C

**해설**
- C: Art 1(8) 제품에서 NB가 의약물질의 **품질·안전·유용성**에 대해 **EMA 또는 국가 의약품 당국의 과학적 의견**을 구하는 **협의 절차**다. 당국 의견은 NB 결정에 반영되고, **물질 변경 시 재협의**한다.
- A: Art 1(8) 제품은 MDR로 간다. 물질에 별도 MAA를 내지 않는다.
- B: Art 117 opinion은 Art 1(9) 제품의 MAA에 붙는 문서다.
- D: CE 인증 주체는 NB다.

---

### Q55 [A][Domain I] — single-use prefilled pen
A company plans to market a single-use prefilled pen in the EU in which the drug provides the therapeutic action. The pen cannot be reused or separated. Which route fits?

A. A medicinal product MA under Directive 2001/83, with an Article 117 NB opinion for the pen.
B. Article 1(8) MDR conformity assessment with EMA consultation under Annex IX §5.2.
C. MDR CE for the pen and an MA for the drug, filed as two parallel procedures.
D. A medicinal product MA under Directive 2001/83, with the pen's GSPR conformity assessed by EMA.

**정답:** A

**해설**
- A: 약물이 주이고 기기가 **integral·single-use** → **Art 1(9) → Dir 2001/83 MA + Art 117 NB opinion**이다.
- B: Art 1(8)은 기기가 주일 때다.
- C: 두 절차는 co-packaged·재사용 기기의 경우다.
- D: GSPR 적합성은 EMA가 아니라 NB opinion으로 증명한다.

---

### Q56 [A][Domain IV] — CE-marked inhaler used as integral part
A device company's inhaler already carries a CE mark. A pharmaceutical company will now market it as an integral, single-use part of a drug-led product in the EU. What does the MAA need?

A. A new Article 117 NB opinion, for which the NB may reuse the CE technical documentation.
B. The CE certificate alone in 3.2.R, since a CE mark already proves GSPR conformity for the same device.
C. Nothing on the device, since the inhaler's CE mark makes it a co-packaged product outside Article 1(9).
D. A new CE certificate issued in the pharmaceutical company's name, which then replaces Article 117.

**정답:** A

**해설**
- A: CE 마크는 **단독 기기용**이라 Art 1(9) 제품에는 그대로 쓸 수 없고 **Art 117 NB opinion**이 필요하다. 다만 NB가 **CE 기술문서를 재활용**할 수 있다.
- B: CE만으론 부족하다. integral·single-use면 opinion이 필요하다.
- C: integral이면 co-packaged가 아니다.
- D: CE 재발급이 Art 117 opinion을 대신하지 않는다.

---

### Q57 [R][Domain II] — DDC guideline Module 3
Under the EMA 2021 guideline on quality documentation for medicinal products used with a medical device, which content belongs in 3.2.P.2?

A. Device description and specifications as part of the container closure system.
B. Clinical usability study reports and the summative human factors protocol.
C. The notified body opinion or CE declaration, the GSPR summary, and device change management.
D. Device selection rationale, HF summary, compatibility, dose accuracy and in-use stability.

**정답:** D

**해설**
- D: **3.2.P.2**(약제학적 개발)는 기기 선택 근거, **사용성/HF 요약**, 약물-기기 적합성(추출물·흡착), **용량 정확도·전달 성능**, in-use 안정성이다.
- A: 기기 설명·규격은 **3.2.P.7**이다.
- B: 사용성 임상 데이터는 Module 5다.
- C: NB opinion·GSPR 요약·변경 관리는 **3.2.R**이다.

---

### Q58 [R][Domain II] — where the NB opinion goes
In an EU MAA for an integral drug-device product, where is the Article 117 notified body opinion placed under the EMA 2021 guideline?

A. Module 3.2.R, together with the GSPR summary and device change management.
B. Module 3.2.P.2, together with the usability summary and dose accuracy data.
C. Module 5, together with the human factors validation report.
D. Module 3.2.P.7, together with the device description and specifications.

**정답:** A

**해설**
- A: **3.2.R**에 **NB opinion**(또는 CE 선언), GSPR 요약, 기기 변경 관리를 둔다.
- B: 3.2.P.2는 약제학적 개발이다.
- C: Module 5는 사용성 임상 데이터다.
- D: 3.2.P.7은 용기·기기 설명·규격이다.

---

### Q59 [R][Domain III] — usability clinical data location
Under the EMA 2021 DDC guideline, where do usability data that come from clinical studies belong?

A. Module 3.2.P.7, with the device specifications.
B. Module 5, apart from the quality documentation.
C. Module 3.2.P.2, replacing the usability summary there.
D. Module 3.2.R, attached to the notified body opinion.

**정답:** B

**해설**
- B: 품질 외 **사용성 임상 데이터는 Module 5**다. 3.2.P.2에는 사용성/HF **요약**이 들어간다.
- A: 3.2.P.7은 기기 설명·규격이다.
- C: 3.2.P.2의 요약은 남고, 임상 데이터 자체는 Module 5에 둔다.
- D: 3.2.R은 NB opinion·GSPR 요약·변경 관리다.

---

### Q60 [An][Domain I] — architecture and sponsor burden
Which comparison best describes the regulatory architecture and sponsor burden for drug-device combinations in the US and EU?

A. The US splits review between two centers with two applications, while the EU issues one combined authorisation.
B. The US uses a legal category, one lead center and one application; the EU uses one legal regime with two assessors.
C. Both regions use a legal combination category, but the EU adds a notified body opinion to the drug authorisation.
D. The EU uses a PMOA test to assign a lead agency, while the US relies on borderline rules within its device regulation.

**정답:** B

**해설**
- B: 미국은 **법적 범주**(3.2(e)) + **PMOA 단일 주관·단일 신청** + 통합 cGMP·보고다. EU는 범주 없이 **경계 규칙**으로 한쪽 법체계에 넣고 상대 부분은 협의·NB opinion으로 처리해 **NB(기기) + 당국(약) 두 평가자** 조율 부담이 있다.
- A: 미국은 단일 신청이 원칙이고, EU엔 통합 허가가 없다.
- C: EU엔 복합제품 범주가 없다.
- D: 두 지역이 뒤바뀌었다.

---

### Q61 [An][Domain IV] — one EU authorisation for a kit
A US team plans to obtain "one EU combination product authorisation" for a drug vial co-packaged with a reusable, separately CE-markable injector, mirroring its single US BLA. Evaluate.

A. Workable, provided the injector receives an Article 117 opinion, which brings it inside the MA.
B. Workable, because EMA issues a single authorisation for co-packaged kits after consulting a notified body.
C. Not workable — the EU has no such category; the injector needs MDR CE and the drug an MA.
D. Not workable — the kit must be split, and the drug alone is authorised while the injector stays unregulated.

**정답:** C

**해설**
- C: EU엔 **복합제품 범주가 없다**. co-packaged·재사용 기기는 **기기 MDR CE + 약 MA**를 각각 받고, MAA에 기기 정보·in-use 데이터를 넣는다.
- A: Art 117은 integral·single-use 기기용이다. 재사용 co-packaged 기기는 대상이 아니다.
- B: 두 구성을 한 허가로 묶는 절차는 EU에 없다.
- D: 기기는 MDR로 규제된다.

---

### Q62 [A][Domain I] — antibiotic bone cement
A bone cement contains an antibiotic that reduces infection risk, while the cement's main action is mechanical fixation. Under which EU route is it placed?

A. Article 1(8) MDR, with the NB consulting a medicines authority on the antibiotic.
B. Article 1(9) medicinal product MA, with the cement assessed under Article 117.
C. Two parallel routes: MDR CE for the cement and an MA for the antibiotic.
D. IVDR Article 48, with the NB consulting EMA on suitability for the antibiotic.

**정답:** A

**해설**
- A: 기기가 주이고 약물이 보조인 항생제 함유 골시멘트는 **Art 1(8) → MDR**이고, NB가 **Annex IX §5.2**로 EMA/NCA와 협의한다.
- B: Art 1(9)는 약물이 주일 때다.
- C: 결합된 일체 제품이라 두 절차로 나뉘지 않는다.
- D: IVDR Art 48은 CDx 조항이다.

---

### Q63 [R][Domain I] — exception to the NB opinion
Under Article 117 as presented in the textbook, when can an MAA for an integral drug-device product carry something other than a notified body opinion for the device part?

A. When the MAA is filed through the centralised procedure, since EMA assesses the device part itself.
B. When the device part is reusable, since Article 117 then allows a manufacturer's declaration of conformity.
C. When the device part is a Class I device that the manufacturer may self-declare, with that evidence of conformity.
D. When the device part already carries a CE mark for stand-alone use, which replaces the opinion in 3.2.R.

**정답:** C

**해설**
- C: 교과서는 Art 117 NB opinion의 예외로 **Class I 자체 선언이 가능한 기기**를 든다. 이때는 그 적합 증명을 첨부한다.
- A: 중앙 절차라도 기기 GSPR 적합성은 NB opinion으로 증명한다.
- B: 재사용 기기는 Art 1(9) 밖이라 MDR CE로 별도 간다.
- D: CE 마크 단독 기기도 Art 1(9) 제품에선 opinion이 필요하다(NB가 기술문서 재활용 가능).

---

### Q64 [A][Domain III] — EU CDx through an in-house test
A sponsor's centrally authorised drug will require a biomarker test. To save time, it proposes that each EU hospital run its own in-house test instead of a CE-marked companion diagnostic. Which response fits the IVDR?

A. The principle is Class C NB assessment with Article 48 consultation; Article 5(5) in-house tests are restricted.
B. Acceptable, because in-house tests under Article 5(5) are the default route for companion diagnostics.
C. The principle is an Article 117 NB opinion attached to the MAA, with the test treated as part of the medicinal product.
D. Acceptable, provided EMA lists the hospital tests in the SmPC under sections 4.1 and 4.2.

**정답:** A

**해설**
- A: IVDR에서 CDx는 **Class C NB 평가 + Art 48 협의**가 원칙이고, **in-house test(Art 5(5))는 조건이 제한적**이다. CDx 사용은 SmPC 4.1/4.2에 반영한다.
- B: in-house test는 원칙 경로가 아니다.
- C: Art 117은 MDR integral 기기 조항이다. CDx는 IVDR Art 48이다.
- D: SmPC 반영은 CDx 사용 표시이고, NB 평가를 대신하지 않는다.

---
