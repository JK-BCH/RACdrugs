# 문제은행 — Ch.1 의약품 개발 연속선 (preclinical → market access)

> **근거:** `textbook/Ch01.md` + `cards/Ch01.md` 검증 메모(21 CFR 312·1271, PDUFA VII commitment letter, FD&C 506(g)·505(o), PHS 351(k), Reg 536/2014, EMA 중앙 절차 안내). 새 숫자 없음.
> **형식:** 영문 시나리오 → 영문 선지 A~D(근접 오답) → 정답 → 한국어 해설(왜 정답, 왜 오답 하나씩). 태그 `[R]/[A]/[An]` + Domain.
> **작성:** 2026-11-24. 64문항. 유형 R 20 / A 34 / An 10.

---

### Q01 [A][Domain II] — IND effective
A sponsor's IND for a first-in-human cell therapy is received by FDA on 1 March. By 29 March the sponsor has heard nothing from FDA. Under 21 CFR 312.40, when may the sponsor begin dosing?

A. On 30 April, 60 days after receipt, when the IND filing period ends.
B. On 31 March, 30 days after receipt, unless FDA places the study on clinical hold.
C. After FDA issues a written letter approving the IND, since silence is not approval.
D. Immediately upon FDA receipt, because no hold has been issued.

**정답:** B

**해설**
- B: 312.40(b)는 접수일로부터 **30일**이 지나면 IND가 effective가 된다고 정한다. 그 안에 clinical hold 통보가 없으면 시작할 수 있고, FDA가 더 일찍 허용 통보를 하면 기다리지 않아도 된다.
- A: 60일 filing은 NDA/BLA의 PDUFA 시계 개념이고 IND와 무관하다.
- C: IND는 "승인"이 아니라 "이의 없음 경과"다. 승인 서한은 없다.
- D: 접수 즉시는 아니다. 30일은 FDA가 검토해 hold를 걸 수 있는 기간이다.

---

### Q02 [A][Domain II] — PDUFA goal date, original BLA
An original BLA for an allogeneic cell therapy is submitted on 15 January 2027 and is filed by FDA. Under PDUFA VII with standard review, the approximate goal date is:

A. 16 September 2027 (6 months from the filing date).
B. 15 November 2027 (10 months from receipt, the standard review period).
C. 15 July 2027 (6 months from receipt).
D. 16 January 2028 (10 months from filing).

**정답:** D

**해설**
- D: NME NDA·**original BLA**는 시계가 **60일 filing date**에서 시작한다. filing ≈ 2027-03-16, +10개월 ≈ 2028-01-16. 제출 기준 약 12개월이다.
- A: 6개월은 priority review다. 문제는 standard다.
- B: receipt date 기준 10개월은 **non-NME NDA**의 시계다.
- C: priority인 데다 receipt 기준이라 두 가지가 다 틀렸다.

---

### Q03 [An][Domain II] — NME vs non-NME clock
Two NDAs are submitted on the same day and both receive standard review. One is for a new molecular entity; the other is a non-NME NDA. Why do their PDUFA goal dates differ?

A. They do not differ, since both have the same 10-month standard goal measured from receipt.
B. The NME receives a 12-month goal while the non-NME receives 10 months.
C. The non-NME clock starts at the 60-day filing date; the NME clock starts at the receipt date.
D. The NME clock starts at filing (day 60); the non-NME clock at receipt.

**정답:** D

**해설**
- D: 목표 기간은 둘 다 10개월이지만 **시작점**이 다르다. NME·original BLA는 filing date, non-NME는 receipt date. 그래서 NME가 약 2개월 늦게 끝난다.
- A: 시작점이 달라 실제 날짜는 다르다.
- B: 목표 기간 자체는 같다(10개월). 차이는 기간이 아니라 시작점이다.
- C: 방향이 반대다.

---

### Q04 [A][Domain II] — 361 vs 351
A clinic plans to market autologous bone-marrow MSCs that are culture-expanded over three passages and injected intra-articularly for knee osteoarthritis. It asserts the product is regulated solely under section 361 of the PHS Act. Which statement is correct?

A. The assertion holds because autologous use satisfies each of the four criteria of 21 CFR 1271.10(a), including minimal manipulation.
B. The cells are combined with a delivery article, so the product fails criterion 3 and requires a 505(b)(2) NDA.
C. The assertion fails on the systemic-effect criterion alone, but autologous use cures that criterion, so 361 still applies.
D. It fails: culture expansion exceeds minimal manipulation and the use is non-homologous, so an IND and 351 BLA apply.

**정답:** D

**해설**
- D: 배양 증식은 relevant biological characteristics를 바꿔 **기준 1(minimal manipulation)** 을 넘고, OA 치료 목적 관절 내 주사는 지방·골수 세포의 기본 기능이 아니라 **기준 2(homologous use)** 도 깨진다. 하나만 깨져도 351이다.
- A: "자가"는 **기준 4**(대사 활성 의존)만 구제한다. 배양 증식은 기준 1을 넘고, 자가라도 기준 1·2는 구제되지 않는다.
- B: 문제의 제품에는 결합된 물품이 없다. 세포치료제는 PHS 351(a) BLA이고 505(b)(2)는 소분자 NDA 경로다.
- C: 기준 4가 문제가 아니라 1·2가 문제다.

---

### Q05 [R][Domain I] — 1271.10(a)(3) exceptions
Under 21 CFR 1271.10(a)(3), combination of an HCT/P with which of the following does NOT, by itself, cause the HCT/P to fail the "not combined with another article" criterion?

A. A preserving or storage agent raising no new clinical safety concern.
B. A small-molecule drug added at a low dose to support engraftment.
C. A recombinant growth factor, because it is itself a biological product.
D. A synthetic scaffold regulated as a device, if it raises no new safety concern.

**정답:** A

**해설**
- A: 1271.10(a)(3)은 **물·크리스탈로이드·살균·보존·저장제**를 예외로 둔다. 조건은 새 임상 안전 우려를 일으키지 않는 것이다.
- B·C·D: 약물·기기·생물학적 제제와의 결합은 모두 기준 3을 깨뜨린다. 예외 목록에 없다. "새 안전 우려 없음" 조건은 물·크리스탈로이드·살균·보존·저장제 예외에만 붙는다.

---

### Q06 [A][Domain IV] — RMAT
A sponsor has Phase 1 data suggesting an allogeneic cell therapy improves a serious condition with unmet medical need. Which FDA designation is specific to this product class, and within what period must FDA respond to the request?

A. Fast Track designation; 30 calendar days.
B. Breakthrough Therapy designation; 60 calendar days.
C. RMAT designation; 75 calendar days.
D. RMAT designation; 60 calendar days.

**정답:** D

**해설**
- D: FD&C **506(g)** RMAT는 ① regenerative medicine therapy ② 중증·생명 위협 질환 ③ **preliminary clinical evidence**가 요건이고, FDA는 요청 후 **60 calendar days** 안에 통보한다.
- A: Fast Track은 제품군 전용이 아니고 기한도 다르다.
- B: 응답 기간은 맞을 수 있지만 "이 제품군 전용" 지정은 RMAT다.
- C: 75일은 Type C·INTERACT 회의 응답 기한이다. RMAT과 섞지 마라.

---

### Q07 [A][Domain III] — pre-IND meeting
A sponsor requests a pre-IND meeting for a cell therapy. Which set is correct?

A. Type B; FDA responds within 60 days; package 30 days before; preliminary responses 2 days before.
B. Type A; FDA responds within 30 days; package due 30 days before; preliminary responses 2 days before.
C. Type B (EOP); FDA responds within 70 days; package due 50 days before the meeting.
D. Type C; FDA responds within 75 days; preliminary responses 5 days before the meeting.

**정답:** A

**해설**
- A: pre-IND는 **Type B**다. 응답 **60 calendar days**, meeting package는 회의 **30일 전**, Type B(EOP 아님)의 preliminary responses는 회의 **2일 전**.
- B: Type A는 막힌 개발(hold 등)을 푸는 회의다. pre-IND가 아니다.
- C: EOP는 End-of-Phase 1/2 회의다. pre-IND는 EOP가 아니다.
- D: 5일 전 사전 답변은 INTERACT 규칙이고, Type C는 "그 외" 회의다.

---

### Q08 [A][Domain III] — INTERACT
Before starting IND-enabling toxicology, a sponsor wants FDA input on whether its proposed potency assay and starting-material sourcing are acceptable for a first-in-human cell therapy. Which interaction fits, and what is FDA's response timeline?

A. Type B meeting, as for pre-IND; 60 calendar days.
B. Type D meeting; 50 calendar days.
C. INTERACT meeting; 75 calendar days.
D. Type C meeting, since it covers other topics; 75 calendar days.

**정답:** C

**해설**
- C: **INTERACT**는 pre-IND보다 앞단의 비임상·CMC 초기 질문용이다. 응답 **75일**, 사전 답변 회의 5일 전, 조언이 바뀌면 30일 내 수정본.
- A: Type B는 pre-IND 등 이정표 회의다. 아직 pre-IND 단계가 아니다.
- B: Type D는 좁은 1~2개 이슈용이고 50일이다.
- D: 기한은 같지만 Type C는 "그 외" 회의다. 개발 초기 CMC 질문의 자리는 INTERACT다.

---

### Q09 [R][Domain III] — Type A
A sponsor's study is on clinical hold and it requests a meeting to resolve the hold. Which meeting type and FDA response time apply?

A. Type A; 30 calendar days.
B. Type C; 75 calendar days.
C. Type B (milestone); 60 calendar days.
D. Type D; 50 calendar days.

**정답:** A

**해설**
- A: 막힌 개발을 푸는 회의는 **Type A**, 응답 **30일**이다.
- B·C·D: 각각 이정표 회의(60), 좁은 이슈(50), 그 외(75)다. hold 해결은 Type A다.

---

### Q10 [An][Domain IV] — biosimilar exclusivity
A reference biological product was first licensed on 1 June 2020. In 2026 a biosimilar developer asks whether it may submit a 351(k) application and expect licensure. Which is correct?

A. It may submit now and be licensed upon approval, because the 4-year bar ended 1 June 2024.
B. It could have submitted since 2024 and may be licensed from 1 June 2027, 7 years after first licensure.
C. It may submit now, as the 4-year bar has ended, but cannot be licensed before 1 June 2032.
D. It may neither submit nor be licensed until 1 June 2032, the end of the 12-year period.

**정답:** C

**해설**
- C: PHS 351(k)(7) 두 시계는 참조 제품 **첫 허가일**에서 돈다. **4년**까지 제출 금지(2024-06-01), **12년**까지 허가 금지(2032-06-01). 2026년 제출은 가능, 허가는 2032년 이후다.
- A: 4년이 지나도 12년 허가 금지는 남는다.
- B: 7년은 orphan 독점 기간이다. 바이오시밀러 시계와 섞지 마라.
- D: 제출 금지는 4년이다. 12년은 허가 금지다.

---

### Q11 [R][Domain IV] — orphan
A disease affects approximately 150,000 persons in the United States. If a drug for it receives orphan designation and is then approved, how long is orphan-drug exclusivity?

A. 12 years.
B. 10 years.
C. 5 years.
D. 7 years.

**정답:** D

**해설**
- D: 미국 내 **200,000명 미만** 질환이면 지정 대상이고, 승인 시 동일 약·동일 적응증에 **7년** 독점(21 CFR 316).
- A: 12년은 참조 생물의약품 허가 금지 기간이다.
- B: 10년도 미국 orphan 독점 기간(7년)이 아니다. 이 장에서 나온 수치가 아니다.
- C: 5년은 미국 orphan 독점 기간(7년)이 아니다. 이 장에서 나온 수치가 아니다.

---

### Q12 [A][Domain V] — PMR vs PMC
An approval letter directs the applicant to conduct a study to assess a known serious risk associated with use of the drug. How is this study classified, and on what basis?

A. A postmarketing commitment, because the applicant agreed to it in writing.
B. A voluntary Phase 4 study that the applicant reports at its discretion.
C. A REMS element under FD&C Act 505-1.
D. A postmarketing requirement under FD&C Act 505(o)(3).

**정답:** D

**해설**
- D: **505(o)(3)** (FDAAA 2007 §901)는 알려진 중대 위험 평가·중대 위험 신호 평가·예상 밖 중대 위험 식별을 위한 승인 후 연구를 FDA가 **요구**할 수 있게 한다. 승인서에 "known serious risk 평가"라고 적혀 있으면 PMR이다.
- A: PMC는 신청자가 서면 동의했지만 법적 의무가 아닌 연구다. 법 근거로 요구된 것은 PMR이다.
- B: PMR은 의무이고 보고 의무(506B)도 따른다.
- C: REMS는 위험 완화 조치 체계다. 연구 분류가 아니다.

---

### Q13 [A][Domain V] — EU centralised timetable
A sponsor's EU launch plan allots 7 months from MAA validation to European Commission decision. Which assessment is correct?

A. Infeasible — CHMP needs 210 active days plus clock-stops, and the EC decision adds 67 days.
B. Feasible — the CHMP opinion takes 210 calendar days and the EC decision follows immediately after it.
C. Feasible if accelerated assessment is granted, which guarantees an EC decision within 7 months.
D. Infeasible — the CHMP stage by itself takes 12 months, with clock-stops counted inside that period.

**정답:** A

**해설**
- A: CHMP **210 active days**는 Day 120 이후(필요 시 Day 180 이후에도) **clock-stop**을 제외한 수치다. CHMP 의견 뒤 **EC 결정 67일**이 더 붙는다. active day만으로도 7개월을 넘고, clock-stop을 넣으면 보통 1년 이상이다.
- B: 210일은 calendar day가 아니라 active day이고, EC 결정은 67일이 걸린다.
- C: accelerated assessment는 이 장 범위 밖이고, 어떤 경우에도 EC 결정 기간은 남는다.
- D: CHMP active day는 210일이다. "12개월 고정"은 근거가 없다.

---

### Q14 [A][Domain II] — CTR vs Directive
A US sponsor plans its first EU trial of a cell therapy in 2027 and asks whether it may file under the Clinical Trials Directive with a single national competent authority. Respond.

A. Yes — the Directive remains available for ATMPs because they are excluded from the Regulation.
B. No — EU trials of cell therapies must be authorised centrally by EMA rather than by Member States.
C. No — since 31 January 2025 only the CTR applies, with a single coordinated assessment via CTIS.
D. Yes — sponsors may choose between the Directive and the Regulation until the transition period ends in 2028.

**정답:** C

**해설**
- C: **2025-01-31**부터 Directive 체제는 끝났다. 신청은 **CTIS**를 통해 관련 회원국이 **하나의 절차**로 평가한다.
- A: ATMP도 CTR 적용 대상이다. 제외 규정은 없다.
- B: 임상시험 승인은 회원국이 한다. 중앙 절차 의무는 시판 허가(MAA) 얘기다.
- D: 선택권은 없다. 전환 기간은 2025-01-31에 끝났다.

---

### Q15 [A][Domain IV] — approval vs access
A cell therapy receives a centralised EU marketing authorisation. The commercial team assumes it can now be sold across the EU at a single price. Correct them.

A. Correct — a centralised MA fixes a single EU price negotiated with the Commission.
B. Incorrect — the MA must first be converted into national authorisations in each Member State before sale.
C. Correct — EMA sets the price as part of the CHMP opinion, and the EC decision confirms it.
D. Incorrect — the MA is valid EU-wide, but pricing and reimbursement are decided nationally through HTA.

**정답:** D

**해설**
- D: 중앙 승인은 EU 전역에서 유효하지만 **가격·급여는 회원국 권한**이다. 나라별 HTA·가격 협상을 각각 거친다. 미국도 FDA 승인과 CMS·민간 보험 coverage는 별개다.
- A·C: EC도 EMA도 가격을 정하지 않는다.
- B: 중앙 승인은 그 자체로 EU 전역에 유효하다. 국가 전환 절차는 없다.

---

### Q16 [An][Domain I] — phase overlap
A team asserts that under 21 CFR 312.21 a Phase 2 study cannot begin until all Phase 1 studies are complete. Evaluate.

A. Incorrect — 312.21 does not define phases at all; phase boundaries are set by ICH E8.
B. Correct — 312.21 requires Phase 1 to finish first, because Phase 2 design depends on Phase 1 data.
C. Incorrect — 312.21 says the phases are generally sequential but may overlap, so the plan is permissible.
D. Correct — overlapping phases are permitted solely under an expanded access IND for treatment use.

**정답:** C

**해설**
- C: 312.21은 세 phase를 정의하면서 "일반적으로 순차적이지만 **겹칠 수 있다**"고 명시한다. 제약은 규정이 아니라 Phase 2 설계에 필요한 PK·약리 정보가 쌓였는지다.
- A: 312.21이 Phase 1(20~80명)·2·3(수백~수천 명)을 정의한다.
- B: 규정은 순차를 강제하지 않는다. PK·약리 정보는 Phase 2 설계의 고려 사항이지 규정상 선행 조건이 아니다.
- D: expanded access는 치료 목적 접근 제도다. phase 겹침과 무관하다.

---

### Q17 [R][Domain II] — 312.40 statements
Which statement about the IND waiting period under 21 CFR 312.40(b) is TRUE?

A. Once the 30 days pass, FDA loses the authority to place the study on clinical hold.
B. It becomes effective 30 days after receipt unless FDA imposes a clinical hold.
C. The IND becomes effective when FDA issues a written approval letter at the end of review.
D. The IND becomes effective 60 days after receipt, matching the filing period.

**정답:** B

**해설**
- B: 312.40(b)는 접수일로부터 **30일**이 지나면 IND가 effective가 된다고 정한다. 그 안에 clinical hold 통보가 없으면 시작할 수 있다.
- A: 30일이 지나도 FDA는 이후에 hold를 걸 수 있다. 교과서 "흔한 혼동 1"이 이 점을 명시한다.
- C: IND는 승인이 아니라 "이의 없음 경과"다. 승인 서한은 없다.
- D: 60일은 NDA/BLA의 PDUFA filing 기간이다. IND와 무관하다.

---

### Q18 [A][Domain II] — early notice
A sponsor's IND for an extracellular-vesicle (EV) product is received by FDA on 10 February. On day 20 FDA notifies the sponsor in writing that it has no objection and the study may proceed. What may the sponsor do?

A. Wait until day 30, because the 30-day period runs in full even after a favourable notice.
B. Begin after submitting a protocol amendment that confirms FDA's notice.
C. Begin the study now, because FDA's earlier notice makes the IND effective before day 30.
D. Begin after day 60, when the filing period that follows IND receipt ends.

**정답:** C

**해설**
- C: 312.40(b)는 FDA가 더 일찍 시작해도 좋다고 통보하면 30일을 기다리지 않아도 된다고 정한다.
- A: 30일은 최대 대기 기간이다. FDA의 조기 통보로 단축된다.
- B: 그런 절차는 312.40에 없다.
- D: 60일 filing은 NDA/BLA 개념이다. IND에는 없다.

---

### Q19 [A][Domain II] — hold inside 30 days
An IND for a first-in-human cell therapy is received on 1 April. On 28 April FDA notifies the sponsor that the proposed study is on clinical hold. Which is correct?

A. The sponsor may not begin; the IND is not effective while the hold stands.
B. The sponsor must withdraw the IND and resubmit a new one addressing the hold issues.
C. The hold is invalid because FDA must act within 20 days of receipt.
D. The IND still becomes effective on 1 May, and dosing may begin while the hold is discussed in a Type A meeting.

**정답:** A

**해설**
- A: 30일 안에 clinical hold 통보가 있으면 시작할 수 없다. hold 해결 회의는 **Type A**이고 FDA 응답은 **30일**이다.
- B: 재제출 의무는 312.40에 없다. hold를 푸는 것이 절차다.
- C: FDA는 30일 안에 hold를 걸 수 있다. 28일째 통보는 기간 안이다.
- D: hold가 있으면 30일이 지나도 시작할 수 없다.

---

### Q20 [R][Domain I] — Phase 1 size
Under 21 CFR 312.21, a Phase 1 study typically enrols how many subjects?

A. 80 to 200.
B. 20 to 80.
C. Several hundred to several thousand.
D. Several hundred.

**정답:** B

**해설**
- B: 312.21은 Phase 1을 보통 **20~80명**(안전·내약·PK)으로 둔다.
- A·D: 교과서에 그런 범위는 없다.
- C: 수백~수천 명은 **Phase 3** 규모다.

---

### Q21 [A][Domain I] — identify the phase
A sponsor runs a controlled study of its small molecule in patients with a specific indication to evaluate effectiveness and short-term adverse effects, enrolling about 150 patients. Under 21 CFR 312.21 this is best described as:

A. Phase 3 — because patients rather than healthy volunteers are enrolled.
B. Phase 1 — because enrolment is below several hundred and short-term adverse effects are monitored.
C. Phase 4 — because effectiveness, not safety, is the primary objective.
D. Phase 2 — a controlled study of effectiveness and short-term risk in one indication.

**정답:** D

**해설**
- D: 312.21의 Phase 2는 특정 적응증에서 효과와 단기 위험을 보는 **통제 시험**이다. 설명이 그대로 들어맞는다.
- A: Phase 3는 수백~수천 명이다. 환자 등록 여부가 기준이 아니다.
- B: Phase 1은 20~80명의 안전·내약·PK 연구다. 효과 평가 통제 시험이 아니다.
- C: Phase 4는 승인 후 연구다. 312.21의 세 phase에 들어 있지 않다.

---

### Q22 [R][Domain I] — Phase 3 size
Which phase does 21 CFR 312.21 describe as enrolling several hundred to several thousand subjects?

A. Phase 3.
B. Phase 1.
C. Phase 4.
D. Phase 2.

**정답:** A

**해설**
- A: 312.21의 **Phase 3**는 수백~수천 명이다.
- B: Phase 1은 20~80명이다.
- C: Phase 4는 312.21이 정의하는 phase가 아니다.
- D: Phase 2는 특정 적응증 통제 시험이고 수백~수천 명 규모로 정의되지 않는다.

---

### Q23 [R][Domain II] — IND content
Which section of 21 CFR Part 312 specifies the content of an IND, including the pharmacology and toxicology sections?

A. 312.21.
B. 312.40.
C. 1271.10.
D. 312.23.

**정답:** D

**해설**
- D: **312.23**이 IND 내용(약리·독성 섹션 등)을 정한다.
- A: 312.21은 phase 정의다.
- B: 312.40은 IND effective 시점(30일)이다.
- C: 1271.10은 HCT/P의 361 규제 기준이다. Part 312가 아니다.

---

### Q24 [A][Domain II] — small molecule marketing application
A sponsor has completed Phase 3 for a synthetic small-molecule drug and asks which marketing application and statute apply. Correct answer:

A. None — as a 361 HCT/P, it skips premarket review.
B. An NDA under section 505 of the FD&C Act.
C. A 351(k) application, because the molecule is new.
D. A BLA under section 351(a) of the PHS Act.

**정답:** B

**해설**
- B: 소분자 시판 허가는 FD&C Act **505 NDA**다.
- A: 361 HCT/P는 1271.10(a) 네 기준을 모두 만족하는 세포·조직 제품이다. 소분자에 적용되지 않는다.
- C: 351(k)는 바이오시밀러 경로다. 소분자와 무관하다.
- D: 351(a) BLA는 생물의약품(세포·유전자치료·EV 제품 등)의 경로다.

---

### Q25 [A][Domain II] — EV product pathway
A company develops an allogeneic MSC-derived extracellular-vesicle (EV) product for a neonatal lung disease. Which marketing application applies?

A. An NDA under FD&C Act 505, because EVs are not living cells.
B. A BLA under PHS Act 351(a), like cell and gene therapies.
C. None — EVs are regulated solely under PHS 361 as tissue-derived products.
D. A 351(k) biosimilar application.

**정답:** B

**해설**
- B: 교과서는 세포치료·유전자치료·**EV 제품**을 **351(a) BLA**로 둔다.
- A: 살아있는 세포가 아니어도 EV 제품은 생물의약품 경로다. 505 NDA는 소분자 중심이다.
- C: 361 면제는 1271.10(a) 네 기준을 모두 만족할 때만이다. 배양 증식이 들어가는 제품은 기준 1을 넘는다.
- D: 351(k)는 참조 제품이 있는 바이오시밀러용이다.

---

### Q26 [A][Domain IV] — 351(k) too early
A reference biologic was first licensed on 1 September 2023. In 2026 a developer wants to submit a 351(k) application. Which is correct?

A. Submission is allowed now because the 7-year period has not yet started.
B. Submission is barred until 1 September 2027; licensure until 1 September 2035.
C. Submission is allowed now because the 4-year bar has run; licensure is barred until 1 September 2035.
D. Submission is barred until 1 September 2035, 12 years after licensure; licensure follows immediately.

**정답:** B

**해설**
- B: PHS 351(k)(7)의 두 시계는 참조 제품 **첫 허가일**에서 돈다. **4년**(2027-09-01)까지 제출 불가, **12년**(2035-09-01)까지 허가 불가. 2026년은 4년이 지나지 않았다.
- A: 7년은 orphan 독점이다. 바이오시밀러 시계가 아니다.
- C: 2026년은 아직 4년 안이라 제출 자체가 안 된다.
- D: 제출 금지는 4년이다. 12년은 허가 금지다.

---

### Q27 [R][Domain IV] — which clock bars licensure
Under PHS Act 351(k)(7), FDA may not license a biosimilar until how long after the reference product's first licensure?

A. 7 years.
B. 4 years.
C. 10 years.
D. 12 years.

**정답:** D

**해설**
- D: **12년**까지 허가(licensure) 불가다.
- A: 7년은 orphan 독점이다.
- B: 4년은 351(k) **제출** 금지 기간이다.
- C: 10년은 351(k)(7)의 기간이 아니고 이 장에서 나온 수치도 아니다. 허가 금지는 12년이다.

---

### Q28 [An][Domain IV] — clock reference point
A biosimilar developer's plan states: "The 4-year and 12-year periods run from the date we submit our 351(k) application." Evaluate.

A. Correct — both clocks run from the 351(k) submission date.
B. Incorrect — both clocks run from the date of the biosimilar's own licensure.
C. Incorrect — both clocks run from the date the reference product was first licensed.
D. Partly correct — the 4-year clock runs from submission, the 12-year clock from reference licensure.

**정답:** C

**해설**
- C: 두 시계는 모두 참조 제품의 **첫 허가일**에서 시작한다(PHS 351(k)(7)).
- A·B: 바이오시밀러 측의 제출일·허가일은 기준점이 아니다.
- D: 두 시계의 기준점은 같다. 다른 것은 막는 행위(제출 vs 허가)다.

---

### Q29 [R][Domain I] — not a 1271.10(a) criterion
Which of the following is NOT one of the four criteria in 21 CFR 1271.10(a) for regulation solely under PHS 361?

A. The HCT/P is manufactured under an effective IND.
B. The HCT/P is minimally manipulated.
C. The HCT/P is not combined with another article, except water, crystalloids, or a sterilizing, preserving, or storage agent.
D. The HCT/P is intended for homologous use only.

**정답:** A

**해설**
- A: IND는 361 기준이 아니다. 361 HCT/P는 시판 전 심사가 없고, IND는 351 경로의 제도다.
- B·C·D: 각각 기준 1·2·3이다. 네 번째는 전신 효과·대사 활성 의존 기준이다.

---

### Q30 [A][Domain I] — autologous rescue of criterion 4
A minimally manipulated, uncombined, homologous-use autologous HCT/P depends on the metabolic activity of living cells for its primary function. Under 21 CFR 1271.10(a), is it eligible for regulation solely under PHS 361?

A. No — dependence on metabolic activity fails criterion 4, and the autologous exception covers criteria 1 and 2.
B. Yes — autologous use exempts the product from the 1271.10(a) criteria entirely.
C. Yes — criterion 4 allows such dependence for autologous or first- or second-degree relative use.
D. No — autologous use matters for criterion 2 (homologous use), not for criterion 4.

**정답:** C

**해설**
- C: 기준 4는 대사 활성에 의존하더라도 **자가·1·2촌 혈연 동종·생식용**이면 충족한 것으로 본다. 다른 세 기준은 문제에서 이미 만족한다.
- A: 기준 4에는 자가 등 예외가 있다. 자가는 기준 1·2를 구제하지 않는다.
- B: 자가는 기준 4만 구제한다. 기준 1·2·3은 그대로 적용된다.
- D: 자가 여부는 기준 2가 아니라 기준 4의 예외에 들어간다.

---

### Q31 [A][Domain I] — criterion 3 and crystalloid
A tissue bank suspends a minimally manipulated, homologous-use HCT/P in a crystalloid solution that raises no new clinical safety concern. Does this combination cause the product to fail criterion 3 of 21 CFR 1271.10(a)?

A. No — crystalloids are excepted from criterion 3 when they raise no new clinical safety concern.
B. Yes — combination with another article fails criterion 3, and the exception covers storage agents rather than solutions.
C. No — criterion 3 is limited to allogeneic products, so it does not reach this HCT/P.
D. Yes — water is excepted, but a crystalloid counts as a separate article.

**정답:** A

**해설**
- A: 1271.10(a)(3)은 물·크리스탈로이드·살균·보존·저장제를 새 임상 안전 우려가 없는 한 예외로 둔다.
- B: 예외 목록에 크리스탈로이드도 들어 있다.
- C: 기준 3은 자가·동종 구분 없이 적용된다.
- D: 예외는 물만이 아니다. 크리스탈로이드도 예외다.

---

### Q32 [A][Domain I] — unrelated allogeneic donor
An allogeneic HCT/P from an unrelated donor is minimally manipulated, for homologous use, and uncombined, but it has a systemic effect and depends on the metabolic activity of living cells for its primary function. Under 21 CFR 1271.10(a):

A. It fails criterion 4, because the relative exception does not cover an unrelated donor, so it is a 351 product.
B. It qualifies for 361 regulation if the donor consents, which brings it within the related-donor exception.
C. It qualifies for 361 regulation because criteria 1 to 3 are met and allogeneic donors fall within the criterion 4 exception.
D. It fails criterion 2 because allogeneic use is non-homologous by definition.

**정답:** A

**해설**
- A: 기준 4의 예외는 자가·1·2촌 혈연 동종·생식용이다. 비혈연 동종은 예외에 없어 기준 4 탈락이고, 하나만 깨져도 351이다.
- B: 기증자 동의는 1271.10(a) 기준에 없고, 비혈연 기증자를 혈연 예외에 넣지도 않는다.
- C: 비혈연 동종은 기준 4 예외에 없다. 네 기준을 **모두** 만족해야 361이다.
- D: homologous use는 제조자의 객관적 의도로 판단한다. 동종 여부로 결정되지 않는다.

---

### Q33 [An][Domain I] — homologous use standard
A manufacturer's website advertises an adipose-derived HCT/P for treating knee osteoarthritis, while its regulatory file states the intended use is "structural support of soft tissue". For the homologous-use criterion of 21 CFR 1271.10(a)(2), which statement is correct?

A. The regulatory file controls, so advertising claims do not count and the stated structural-support use is homologous.
B. Labeling and advertising show objective intent, so the OA use is non-homologous.
C. The criterion is satisfied because the cells are autologous and adipose tissue provides structural support.
D. Homologous use is judged by the treating physician's intent at the time of use.

**정답:** B

**해설**
- B: 기준 2는 라벨·광고에 드러난 제조자의 **객관적 의도**로 판단한다. OA 치료는 지방 세포의 기본 기능이 아니라 기준 2 탈락이다.
- A: 광고도 객관적 의도의 근거다. 규제 서류만으로 판단하지 않는다.
- C: 자가는 기준 4만 구제한다. 광고된 OA 치료 용도가 기준 2를 깨뜨린다.
- D: 판단 주체는 제조자의 객관적 의도다. 의사의 의도가 아니다.

---

### Q34 [A][Domain II] — non-NME NDA date
A non-NME NDA is received by FDA on 1 February 2027 and receives standard review. Under PDUFA VII the goal date is approximately:

A. 2 February 2028 (10 months from the 60-day filing date).
B. 2 October 2027 (6 months from the filing date).
C. 1 December 2027 (10 months from receipt).
D. 1 August 2027 (6 months from receipt).

**정답:** C

**해설**
- C: **non-NME NDA**는 **receipt date**에서 시계가 시작한다. 2027-02-01 + 10개월 = 2027-12-01.
- A: filing date 기준은 NME NDA·original BLA의 시계다.
- B·D: 6개월은 priority다. 문제는 standard다.

---

### Q35 [A][Domain II] — NME NDA priority date
An NME NDA is received on 1 February 2027, is filed, and receives priority review. Under PDUFA VII the goal date is approximately:

A. 1 December 2027 (10 months from receipt).
B. 2 October 2027 (6 months from filing).
C. 1 August 2027 (6 months from receipt).
D. 2 February 2028 (10 months from the filing date).

**정답:** B

**해설**
- B: NME NDA는 **filing date(접수 후 60일 ≈ 2027-04-02)** 에서 시작하고 priority는 **6개월**이라 ≈ 2027-10-02다.
- A: receipt 기준에 standard까지 두 가지가 틀렸다.
- C: receipt 기준은 non-NME NDA의 시계다.
- D: 10개월은 standard다.

---

### Q36 [R][Domain II] — PDUFA VII period
PDUFA VII covers which fiscal years?

A. FY2018–2022.
B. FY2020–2024.
C. FY2023–2027.
D. FY2025–2029.

**정답:** C

**해설**
- C: PDUFA VII = **FY2023–2027**이다. PDUFA는 FDA가 심사 목표일을 약속하는 근거다.
- A·B·D: 교과서가 제시한 기간이 아니다.

---

### Q37 [An][Domain II] — which finishes later
An original BLA and a non-NME NDA are both received on the same day and both get standard review. A project manager says both will reach their goal date on the same day. Evaluate.

A. Incorrect — the BLA clock starts at filing, so it ends about 2 months later.
B. Correct — both have a 10-month standard goal and the same submission date.
C. Incorrect — the non-NME NDA finishes later because supplements are reviewed last.
D. Incorrect — the original BLA has a 12-month goal while the NDA has 10 months.

**정답:** A

**해설**
- A: 둘 다 10개월이지만 original BLA는 **filing date**(접수 후 60일), non-NME NDA는 **receipt date**에서 시작한다. 그래서 BLA가 약 2개월 늦게 끝난다.
- B: 목표 기간이 같아도 시작점이 다르다.
- C: 그런 규칙은 없고 방향도 반대다.
- D: 목표 기간은 둘 다 10개월이다. 12개월은 제출 기준 체감 시간이다.

---

### Q38 [A][Domain II] — original BLA priority
An original BLA for a gene therapy is received on 15 January 2027 and granted priority review. Approximately when is the PDUFA goal date?

A. 15 November 2027 (10 months from receipt).
B. 16 January 2028 (10 months from the filing date).
C. 16 September 2027 (6 months from filing).
D. 15 July 2027 (6 months from receipt).

**정답:** C

**해설**
- C: original BLA는 **filing date ≈ 2027-03-16**에서 시작하고 priority **6개월**이라 ≈ 2027-09-16이다.
- A: receipt 기준에 standard다. 둘 다 틀렸다.
- B: 10개월은 standard다(교과서 예시의 2028-01-16).
- D: receipt 기준은 non-NME NDA다.

---

### Q39 [R][Domain III] — Type D
Which meeting type is intended for a narrow set of one or two issues, and what is FDA's response time?

A. Type D; 50 calendar days.
B. INTERACT; 75 calendar days.
C. Type A; 30 calendar days.
D. Type C; 75 calendar days.

**정답:** A

**해설**
- A: **Type D**는 좁은 1~2개 이슈용이고 FDA 응답은 **50일**이다.
- B: INTERACT는 pre-IND 앞단의 초기 개발 질문용이다.
- C: Type A는 막힌 개발을 푸는 회의다.
- D: Type C는 "그 외" 회의다.

---

### Q40 [A][Domain III] — End-of-Phase 2
After completing Phase 2 for a cell therapy, a sponsor requests a meeting to agree on the Phase 3 design. Which meeting type applies and when must FDA respond?

A. Type C, as for other topics; 75 calendar days.
B. Type B, as for pre-IND; 60 calendar days.
C. Type B (EOP); 70 calendar days.
D. Type A; 30 calendar days.

**정답:** C

**해설**
- C: End-of-Phase 1/2 회의는 **Type B (EOP)** 이고 응답은 **70일**이다.
- A: Type C는 "그 외" 회의다.
- B: 60일은 EOP가 아닌 Type B(pre-IND, pre-NDA/BLA)다.
- D: Type A는 hold 해결 등 막힌 개발용이다.

---

### Q41 [A][Domain III] — pre-BLA meeting logistics
A sponsor plans a pre-BLA meeting for its cell therapy on 1 September. Which set of logistics is correct?

A. Type C; FDA responds within 75 days; package due 30 days before; preliminary responses 5 days before.
B. Type B; FDA responds within 60 days; package 30 days before; preliminary responses 2 days before.
C. Type A; FDA responds within 30 days; package due with the request, given the short timeline.
D. Type B (EOP); FDA responds within 70 days of the request; package due 60 days before the meeting.

**정답:** B

**해설**
- B: pre-NDA/BLA는 **Type B**다. 응답 **60일**, meeting package는 회의 **30일 전**, Type B(EOP 아님) preliminary responses는 회의 **2일 전**이다.
- A: 5일 전 사전 답변은 INTERACT 규칙이다.
- C: Type A는 막힌 개발을 푸는 회의다.
- D: EOP는 End-of-Phase 1/2 회의다. 패키지 60일 전은 근거가 없다.

---

### Q42 [R][Domain III] — INTERACT revised advice
After an INTERACT meeting, FDA's advice changes from what was given in the preliminary responses. Within what period does FDA provide revised advice?

A. 5 days.
B. 75 days.
C. 30 days.
D. 2 days.

**정답:** C

**해설**
- C: INTERACT에서 조언이 바뀌면 **30일** 내 수정본을 보낸다.
- A: 5일 전은 INTERACT의 preliminary responses 시점이다.
- B: 75일은 INTERACT 요청에 대한 FDA 응답 기한이다.
- D: 2일 전은 Type B의 preliminary responses 시점이다.

---

### Q43 [R][Domain III] — meeting package timing
For a Type B meeting, when must the sponsor submit the meeting package?

A. 2 days before the meeting.
B. 60 days after the request is granted.
C. 30 days before the meeting.
D. Together with the meeting request.

**정답:** C

**해설**
- C: meeting package는 회의 **30일 전**에 제출한다.
- A: 2일 전은 FDA가 preliminary responses를 보내는 시점이다.
- B: 60일은 Type B 요청에 대한 FDA 응답 기한이다.
- D: 요청과 동시 제출 규칙은 교과서에 없다.

---

### Q44 [An][Domain III] — Type C vs INTERACT
A sponsor notes that both Type C and INTERACT meetings carry a 75-calendar-day FDA response time and concludes they are interchangeable. Evaluate.

A. Incorrect — INTERACT responses are due in 30 days, not 75, so the times differ.
B. Incorrect — Type C is reserved for clinical-hold resolution, unlike INTERACT.
C. Correct — identical response times make the two types equivalent, so either may carry early CMC questions.
D. Incorrect — INTERACT handles early CMC questions while Type C covers other topics; purpose decides the type.

**정답:** D

**해설**
- D: 응답 기한은 같아도 용도가 다르다. **INTERACT**는 pre-IND 앞단의 비임상·CMC 초기 질문, **Type C**는 "그 외" 회의다.
- A: INTERACT 응답은 75일이다. 30일은 조언이 바뀔 때 수정본 기한이다.
- B: hold 해결은 Type A다.
- C: 기한이 같다고 유형이 같은 것은 아니다.

---

### Q45 [A][Domain III] — which is Type A
Which request is appropriately handled as a Type A meeting?

A. A sponsor wants to review the content of a planned BLA.
B. A sponsor wants early CMC advice on a potency assay before IND-enabling studies.
C. A sponsor wants to discuss its Phase 3 design after Phase 2.
D. A sponsor needs to resolve a clinical hold that stalled development.

**정답:** D

**해설**
- D: **Type A**는 hold 해결 등 막힌 개발을 푸는 회의다. 응답 30일.
- A: pre-BLA는 Type B, 60일이다.
- B: 그 자리는 INTERACT(75일)다.
- C: End-of-Phase 2는 Type B (EOP), 70일이다.

---

### Q46 [R][Domain IV] — RMAT criteria
Which of the following is NOT a requirement for RMAT designation under FD&C Act 506(g)?

A. The disease affects fewer than 200,000 persons in the United States.
B. The product is a regenerative medicine therapy (cell therapy, therapeutic tissue engineering, HCT/P, or a combination using them).
C. Preliminary clinical evidence indicates potential to address unmet medical need.
D. It is intended to treat, modify, reverse, or cure a serious or life-threatening disease or condition.

**정답:** A

**해설**
- A: 200,000명 미만은 **orphan** 지정 기준이다. RMAT 요건이 아니다.
- B·C·D: 506(g)의 세 요건이다.

---

### Q47 [A][Domain IV] — RMAT response date
A sponsor submits an RMAT designation request on 1 March. By when must FDA notify the sponsor of its decision?

A. 15 May (75 calendar days).
B. 30 April (60 calendar days).
C. The period is set case by case in FDA guidance, not by statute.
D. 31 March (30 calendar days).

**정답:** B

**해설**
- B: 506(g)는 요청 후 **60 calendar days** 안에 통보하도록 한다. 3월 1일 + 60일 = 4월 30일.
- A: 75일은 Type C·INTERACT 회의 응답 기한이다.
- C: 60일 기한이 법에 있다.
- D: 30일은 Type A 회의 응답 기한이다.

---

### Q48 [A][Domain IV] — small molecule seeks RMAT
A sponsor of a small-molecule drug with preliminary clinical evidence in a life-threatening disease requests RMAT designation. Outcome?

A. Denied — RMAT requires completed Phase 3 data rather than preliminary clinical evidence.
B. Denied — RMAT requires a regenerative medicine therapy, which a small molecule is not.
C. Granted, but because the product is not a cell therapy FDA has 75 days rather than 60 to respond.
D. Granted — preliminary clinical evidence in a life-threatening disease is sufficient.

**정답:** B

**해설**
- B: 506(g) 요건 ①은 **regenerative medicine therapy**다. 소분자는 해당하지 않는다.
- A: 요건은 **preliminary clinical evidence**다. Phase 3 완료가 아니다.
- C: RMAT 통보 기한은 60일이다. 75일은 Type C·INTERACT 회의 응답 기한이다.
- D: 요건 ②·③만으로는 부족하다. 세 요건을 모두 갖춰야 한다.

---

### Q49 [R][Domain IV] — orphan threshold
What US prevalence threshold qualifies a disease for orphan-drug designation?

A. Fewer than 2,000,000 persons.
B. Fewer than 200,000 persons.
C. Fewer than 20,000 persons.
D. Fewer than 500,000 persons.

**정답:** B

**해설**
- B: 미국 내 **200,000명 미만** 질환이 지정 대상이다(ODA, 21 CFR 316).
- A·C·D: 교과서에 없는 수치다.

---

### Q50 [A][Domain IV] — above the threshold
A sponsor seeks orphan designation for a drug in a disease that affects about 250,000 persons in the United States. On the prevalence criterion alone, what is the outcome?

A. Not eligible — 250,000 exceeds the 200,000 limit.
B. Eligible — the threshold is 500,000.
C. Eligible — orphan status turns on unmet medical need rather than on prevalence.
D. Eligible, but exclusivity is shortened from 7 to 4 years.

**정답:** A

**해설**
- A: 지정 기준은 **200,000명 미만**이다. 250,000명은 넘는다.
- B: 500,000은 근거 없는 수치다.
- C: 교과서의 지정 기준은 유병 인구다.
- D: 독점 7년은 승인 시 붙는 것이고, 4년은 351(k) 제출 금지 기간이다. 섞지 마라.

---

### Q51 [An][Domain IV] — match the period
Match each period to what it governs: 4 years, 7 years, 12 years.

A. 4 = IND waiting period in years; 7 = orphan exclusivity; 12 = PDUFA standard review in months.
B. 4 = 351(k) submission bar; 7 = orphan exclusivity; 12 = 351(k) licensure bar, both from reference licensure.
C. 4 = orphan exclusivity; 7 = 351(k) submission bar; 12 = reference-product licensure bar.
D. 4 = 351(k) licensure bar; 7 = orphan exclusivity; 12 = 351(k) submission bar.

**정답:** B

**해설**
- B: **4년** 제출 금지·**12년** 허가 금지는 PHS 351(k)(7), 참조 제품 첫 허가일 기준. **7년**은 orphan 독점(21 CFR 316)이다.
- A: IND 대기는 30일이고, PDUFA standard는 10개월이다.
- C: 4년과 7년의 역할이 바뀌었다.
- D: 4년은 제출 금지, 12년은 허가 금지다. 방향이 반대다.

---

### Q52 [R][Domain V] — 505(o)(3) purposes
Which of the following is NOT one of the purposes for which FDA may require a postmarketing study under FD&C Act 505(o)(3)?

A. To assess signals of serious risk related to the use of the drug.
B. To assess a known serious risk related to the use of the drug.
C. To identify an unexpected serious risk when available data indicate the potential for a serious risk.
D. To support a new indication requested by the applicant.

**정답:** D

**해설**
- D: 새 적응증 지원은 505(o)(3)의 목적이 아니다. 505(o)(3)은 안전성(위험) 평가 목적의 연구를 요구하는 근거다.
- A·B·C: FDAAA 2007 §901이 넣은 505(o)(3)의 세 목적이다.

---

### Q53 [A][Domain V] — written agreement
During BLA review, the applicant agrees in a letter to conduct a long-term follow-up registry that FDA could not require under 505(o)(3). After approval, how is this study classified?

A. A REMS element.
B. A postmarketing commitment (PMC).
C. A postmarketing requirement under 505(o)(3), because it was agreed during review.
D. Not a postmarketing study, because a study that is not legally required falls outside 506B reporting.

**정답:** B

**해설**
- B: **PMC**는 신청자가 **서면으로 동의**했지만 법적 의무는 아닌 연구다.
- A: REMS는 위험 완화 체계다.
- C: PMR은 법·규정이 의무화한 연구다. 심사 중 동의했다고 PMR이 되지 않는다. 문제는 505(o)(3)로 요구할 수 없는 연구라고 명시한다.
- D: 서면 동의한 승인 후 연구는 PMC로 분류되고 506B 보고 의무가 있다.

---

### Q54 [An][Domain V] — 506B reporting
A regulatory affairs lead states: "Only PMRs carry a reporting obligation under section 506B; PMCs do not." Evaluate.

A. Incorrect — it is PMCs that are reported; PMRs are tracked through REMS instead.
B. Correct — PMCs are voluntary, so their progress is not reported under 506B.
C. Incorrect — 506B reporting applies to both PMRs and PMCs; only the legal requirement differs.
D. Correct — a PMC becomes reportable once FDA converts it into a PMR.

**정답:** C

**해설**
- C: 교과서 "흔한 혼동 4"는 보고 의무(**506B**)가 PMR·PMC **둘 다**에 있다고 명시한다. 차이는 법적 의무 여부다.
- A: 방향이 틀렸고 REMS는 보고 체계가 아니다.
- B·D: PMC도 보고 대상이다.

---

### Q55 [R][Domain V] — statutory origin
Which law added section 505(o)(3), the authority for FDA to require postmarketing studies?

A. The Orphan Drug Act.
B. FDAAA 2007, section 901.
C. PDUFA VII.
D. Regulation (EU) 536/2014.

**정답:** B

**해설**
- B: **FDAAA 2007 §901**이 505(o)(3)을 넣었다.
- A: ODA는 orphan 지정·독점이다.
- C: PDUFA는 사용자 수수료·심사 목표일 법이다.
- D: EU 임상시험 규정이다. 미국 PMR과 무관하다.

---

### Q56 [A][Domain I] — outdated office name
A regulatory associate drafting an RMAT request copies the office name "OTAT" from an FDA webpage last updated in November 2025 and asks whether the 60-day response period still applies. Best response?

A. The office name does not matter because RMAT requests for cell therapies are reviewed by CDER rather than CBER.
B. Use OTAT, because the November 2025 webpage is more recent than the reorganisation; the 60-day period is unchanged.
C. Use OTAT, but the response period is now 75 days, matching Type C and INTERACT meetings.
D. Update the name to OTP, which absorbed OTAT in March 2023; the 60-day period is unchanged.

**정답:** D

**해설**
- D: CBER는 **2023-03**에 **OTP**를 세우고 OTAT를 흡수했다. 조직명은 최신 조직도로 대조하되, 절차 요건(RMAT **60일**)은 바뀌지 않았다. 이것이 규제 인텔리전스의 기본 자세다.
- A: 세포·유전자치료 심사는 CBER(OTP)다.
- B: 웹페이지 갱신 시점이 2025-11이어도 조직명은 2023-03 개편 이전 것이다.
- C: RMAT 응답 기한은 60일이다. 75일은 Type C·INTERACT 회의 응답 기한이다.

---

### Q57 [R][Domain I] — CBER OTP
When did CBER establish the Office of Therapeutic Products (OTP), and what happened to OTAT?

A. January 2025; OTAT was transferred to CDER.
B. March 2023; OTAT was absorbed into OTP.
C. November 2025; OTAT was renamed OTP with no structural change.
D. March 2023; OTAT continues as a separate office alongside OTP.

**정답:** B

**해설**
- B: CBER는 **2023-03**에 OTP를 세웠고 OTAT가 그 안으로 들어갔다.
- A: 2025-01-31은 EU CTR 단독 적용 시점이다. 미국 조직 개편과 무관하다.
- C: 2025-11은 낡은 조직명을 담은 FDA 웹페이지의 갱신 시점이다. 설립 시점이 아니다.
- D: OTAT는 OTP에 흡수됐다. 병존하지 않는다.

---

### Q58 [R][Domain II] — CTR sole framework
Since which date has Regulation (EU) 536/2014 been the sole framework for clinical trial applications in the EU, with submissions made through CTIS?

A. 31 January 2025.
B. 31 January 2022.
C. 1 March 2023.
D. 1 June 2020.

**정답:** A

**해설**
- A: **2025-01-31**부터 Directive 체제는 끝났고 CTR과 CTIS만 적용된다.
- B: 교과서에 없는 날짜다.
- C: 2023-03은 CBER OTP 설립 시점이다.
- D: 2020-06-01은 바이오시밀러 예시의 참조 제품 허가일이다.

---

### Q59 [A][Domain II] — un-transitioned trial
A sponsor's EU trial of a biosimilar was authorised under the Clinical Trials Directive and was still recruiting on 1 February 2025, but had not been transitioned to the CTR via CTIS. Status?

A. Compliant — Directive trials authorised before the CTR may run to completion without transition.
B. Compliant until the next substantial amendment, when transition becomes mandatory.
C. Non-compliant — ongoing Directive trials had to be transitioned to the CTR by 31 January 2025.
D. Compliant — biosimilar trials fall outside the CTR, so the Directive still governs them.

**정답:** C

**해설**
- C: 덱 카드 15는 Directive 하에서 진행 중이던 시험도 **2025-01-31**까지 CTR로 전환해야 했고, 안 했으면 non-compliant라고 명시한다.
- A·B: 전환 유예는 없다.
- D: 교과서는 CTR을 EU 임상시험의 **유일한 틀**로 둔다. 제품군 예외는 없다.

---

### Q60 [An][Domain IV] — ATMP national route
An EU affiliate proposes to seek marketing authorisation for an ATMP through a national procedure in a single Member State to save time. Evaluate.

A. Not feasible — ATMPs are authorised by CTIS rather than by a marketing authorisation.
B. Feasible — ATMPs may use a national procedure if they will be marketed in a single Member State.
C. Feasible — the centralised procedure is mandatory for small molecules, not for ATMPs.
D. Not feasible — ATMPs, like biotechnology products, must use the EU centralised procedure.

**정답:** D

**해설**
- D: 생물공학 제품·ATMP는 **중앙 절차 의무**다.
- A: CTIS는 임상시험 신청 체계다. 시판 허가는 중앙 절차의 MAA다.
- B·C: 선택권은 없고, 의무 대상은 생물공학 제품·ATMP다.

---

### Q61 [A][Domain V] — clock-stop
A project manager notes that the CHMP has been assessing the company's MAA for well over 210 calendar days and asks whether the procedure is late. Best explanation?

A. No — 210 counts active days; clock-stops after Day 120 (and Day 180) pause the count.
B. Yes — 210 days is a calendar-day limit that runs from validation, and the CHMP has passed it.
C. No — the 210-day count begins after the 67-day EC decision period ends.
D. Yes — a clock-stop needs advance approval from the European Commission, so the CHMP is behind schedule.

**정답:** A

**해설**
- A: CHMP **210 active days**는 **Day 120 이후**(필요하면 Day 180 이후에도) 들어가는 **clock-stop**을 제외한 수치다. 답변 준비 기간만큼 실제 경과 시간이 늘어난다.
- B: 210일은 calendar day가 아니다.
- C: EC 결정 67일은 CHMP 의견 뒤에 온다. 순서가 반대다.
- D: 교과서에 그런 요건은 없다.

---

### Q62 [A][Domain V] — EC decision timing
The CHMP adopts a positive opinion on a cell therapy MAA. The commercial team asks when the European Commission decision can be expected. Best answer?

A. About 67 days after the CHMP opinion.
B. About 120 days after the CHMP opinion.
C. About 210 days after the CHMP opinion.
D. Immediately — the CHMP opinion is the marketing authorisation.

**정답:** A

**해설**
- A: CHMP 의견 뒤 **EC 결정 67일**이 더 붙는다.
- B: Day 120은 CHMP 평가 중 첫 clock-stop 시점이다.
- C: 210은 CHMP active day 수다.
- D: 시판 허가는 EC 결정이다. CHMP 의견은 권고다.

---

### Q63 [R][Domain I] — ICH M3(R2)
Which ICH guideline governs the timing and duration of nonclinical safety studies relative to clinical development, and what is its status?

A. ICH E8; in draft.
B. ICH Q5E; implemented.
C. ICH M3(R2); withdrawn in 2023.
D. ICH M3(R2); implemented.

**정답:** D

**해설**
- D: **ICH M3(R2)** 가 임상 개발 단계 대비 비임상 안전성 시험의 시기·기간을 정한다. implemented 상태이고 **Q&A**가 병행된다.
- A: E8은 M3(R2)가 아니고, 교과서는 비임상 시기 규율을 M3(R2)에 둔다.
- B: Q5E는 교과서에 없는 선지다. 비임상 시기 가이드라인은 M3(R2)다.
- C: M3(R2)는 implemented다. 철회되지 않았다.

---

### Q64 [A][Domain V] — US timeline integration
A regulatory PM builds a US timeline for an allogeneic cell therapy: IND received 1 March 2027 → first dosing. Which earliest first-dosing date is consistent with 21 CFR 312.40, assuming no clinical hold and no early notification?

A. 30 April 2027 — 60 days after receipt.
B. 1 January 2028 — 10 months after receipt.
C. 31 March 2027 — 30 days after receipt.
D. 1 March 2027 — dosing may begin on receipt.

**정답:** C

**해설**
- C: IND는 접수 후 **30일**이 지나면 effective가 된다. 3월 1일 + 30일 = 3월 31일.
- A: 60일은 NDA/BLA의 filing 기간이다.
- B: 10개월은 PDUFA standard 심사 목표다. IND와 무관하다.
- D: 접수 즉시 시작은 안 된다. 30일은 FDA가 hold를 걸 수 있는 기간이다.
