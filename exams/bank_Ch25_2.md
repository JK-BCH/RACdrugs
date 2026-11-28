# 문제은행 — Ch.25 (2/2) 전자 제출: 잘못 내면 어떻게 되나·Module 1·제출 통로·기준일 상태

> **근거:** `textbook/Ch25.md` + `cards/Ch25_1.md`·`cards/Ch25_2.md` 검증 메모(FD&C 745A(a)·FDASIA 2012 §1136, FDA eCTD 의무 2017-05-05/2018-05-05/2019-05-05, CDISC 2016-12-17/2017-12-17, FDA validation criteria high=거부·medium=접수 후 지적, TCG, US Module 1(1.1–1.16), 21 CFR 54 3454/3455·25,000 USD, SPL 1.14, grouped submission, ESG NextGen 2025-04-14, E2B(R3) IND 2026-04-01·시판 후 2026-10-01, EU eSubmission Roadmap, EU Module 1(1.0–1.10), worksharing, PSUR Repository 2016-06-13, SPOR RMS/OMS/PMS/SMS, eCTD v4.0 FDA 2024-09-16·2026-10-16, EU 2025-12-22·2027 Q1·2028 Q1). 2253 eCTD 의무는 2021-06-24다 (2026-11-28 원문 확인). EU v4.0 선택 제출(2025-12-22)은 기준일 전이라 기준일엔 선택 제출 가능으로 다뤘다. 새 숫자 없음. 날짜 계산 문항은 위 상수로만 계산했다.
> **형식:** 영문 시나리오 → 영문 선지 A~D → 정답 → 한국어 해설. 태그 `[R]/[A]/[An]` + Domain.
> **작성:** 2026-11-27. 64문항.

---

### Q01 [R][Domain II] — high versus medium severity
How do high and medium severity errors differ in their consequence under the FDA eCTD validation criteria?

A. High errors mean rejection, so the sequence is not received; medium errors are received but flagged.
B. High errors lead to a refuse-to-file letter by day 60; medium errors are fixed in the annual report.
C. High errors are accepted with a deficiency letter, while medium errors cause the sequence to be rejected.
D. Both are received, but a high error suspends the review clock until a corrected sequence arrives.

**정답:** A

**해설**
- A: **High** 오류는 거부(미접수)다. filing·PDUFA 시계가 시작되지 않는다. **Medium** 오류는 접수되지만 지적되고, 다음 sequence에서 고친다.
- B: high 오류는 RTF가 아니라 미접수다. medium 오류를 annual report로 고친다는 규정은 없다.
- C: 두 등급의 결과가 뒤바뀌었다.
- D: high 오류는 접수 자체가 안 된다. 접수된 뒤 시계가 멈추는 구조가 아니다.

---

### Q02 [A][Domain II] — invalid application number in sequence 0000
An NDA sequence 0000 is transmitted through ESG NextGen. The next day the sponsor learns it was rejected because the application number in us-regional.xml is invalid. The project lead asks what this means for the PDUFA timeline and what to do next. Which response is correct?

A. The application has no receipt date yet; the sponsor fixes the number and resubmits as sequence 0000.
B. The PDUFA clock is paused at day one; the sponsor asks FDA to correct the number within the existing sequence.
C. The PDUFA clock started on transmission; the sponsor sends a corrected us-regional.xml as sequence 0001.
D. The 60-day filing review continues; the sponsor explains the error in a cover letter in the next sequence.

**정답:** A

**해설**
- A: 거부는 **미접수**라 PDUFA 접수일이 없고 60일 filing도 시작되지 않았다. pre-assigned application number를 확인하고 us-regional.xml을 고쳐 **같은 번호(0000)로 재제출**한다. 거부된 sequence는 존재하지 않는 것으로 본다.
- B: 시계가 멈춘 것이 아니라 시작되지 않았다. FDA가 거부된 sequence 안의 번호를 고쳐 주지 않는다.
- C: 거부된 제출로는 시계가 시작되지 않는다. 다음 번호로 넘어가는 것도 틀렸다.
- D: 접수되지 않은 제출에는 filing review가 없다. cover letter 설명으로 거부가 풀리지 않는다.

---

### Q03 [A][Domain II] — which number to use after rejection
An IND holder's sequence 0012 is rejected for a high severity error. The publishing team had already planned 0013 for a protocol amendment and proposes to send the corrected content as 0014 to keep the plan intact. Which instruction is correct?

A. Send the corrected content as 0014 as proposed, with a cover letter explaining the gap at 0012 and 0013.
B. Resubmit as 0012 with a replace operation pointing to the rejected leaves, so the history shows the fix.
C. Resubmit as 0012, because the rejected sequence is treated as never having existed.
D. Send the corrected content as 0013 and move the protocol amendment to 0014, keeping numbers consecutive.

**정답:** C

**해설**
- C: high 오류로 거부된 sequence는 **존재하지 않는 것으로 취급**한다. 고친 내용을 **같은 sequence 번호**로 다시 낸다.
- A: 번호 공백을 cover letter로 설명하는 절차는 없다.
- B: 거부된 sequence의 leaf는 접수되지 않아 lifecycle에 없다. replace로 가리킬 대상이 없다.
- D: 거부된 번호를 건너뛰면 lifecycle에 빈 번호가 생긴다. 규칙은 같은 번호 재제출이다.

---

### Q04 [R][Domain II] — error and outcome pairing
Which pairing of an eCTD error and its FDA outcome is correct?

A. An invalid application number: received, with a request to confirm the number in an information amendment.
B. A corrupted XML backbone: received, then corrected through a replace operation in the next sequence.
C. A missing study tagging file: received, because tagging is optional in the US as it is in the EU.
D. A missing study tagging file for a Module 5 study: rejected as a high severity error.

**정답:** D

**해설**
- D: **STF 누락**은 교과서가 든 high severity 예다. 거부된다.
- A: 잘못된 application number도 high 예라 접수되지 않는다.
- B: 백본 손상도 high 예다. 접수 후 다음 sequence에서 고치는 것은 medium의 처리다.
- C: STF는 **FDA 요구**, EU 선택이다. 미국에서 선택이 아니다.

---

### Q05 [A][Domain II] — medium error found after receipt
FDA acknowledges receipt of sequence 0012 for a commercial IND. A later validation report lists a medium severity finding on PDF bookmarks. The publishing lead wants to pull 0012 and resubmit it under the same number. What is the correct approach?

A. Keep 0012 and fix the bookmarks in a later sequence, because medium findings are received.
B. Ask FDA to delete 0012 from the lifecycle so the corrected files can be sent as a new sequence 0012.
C. Resubmit 0012, since any validation finding voids the receipt and the sequence must be sent again.
D. Wait for FDA to issue a refuse-to-file letter, then resubmit the whole sequence with a new number.

**정답:** A

**해설**
- A: **Medium** 오류는 접수되고 지적만 된다. 다음 sequence에서 고친다.
- B: 접수된 sequence를 lifecycle에서 지우는 절차는 교과서에 없다.
- C: 같은 번호 재제출은 high 오류로 거부된 경우의 처리다. 접수된 sequence는 그대로 남는다.
- D: medium 오류는 RTF 사유로 규정돼 있지 않다.

---

### Q06 [An][Domain II] — why "not received"
Why does FD&C 745A(a) treat a submission that ignores the required electronic format as not received, rather than as a filing deficiency?

A. Because format defects are treated as fraud, which removes the application from the review queue.
B. Because format is a condition of the submission's existence, and non-receipt is the clearest way to enforce it.
C. Because FDA reviewers are not authorised to read paper documents after the statute took effect.
D. Because refuse-to-file letters are reserved for missing clinical data, not for format problems.

**정답:** B

**해설**
- B: 745A(a)는 형식을 filing 결함이 아니라 **존재 요건**으로 두었다. 종이·혼합 제출은 심사 시스템에 들어올 수 없고, 강제에는 "접수 안 됨"이 가장 명확하다.
- A: 형식 미준수를 사기로 보는 근거는 없다.
- C: 심사자의 권한 문제가 아니다. 교과서의 이유는 심사 시스템과 강제의 명확성이다.
- D: RTF 사유를 임상 자료로 한정하는 규정은 교과서에 없다. 재무 공개 누락도 RTF 사유가 될 수 있다.

---

### Q07 [A][Domain I] — paper NDA and paper research IND
In 2026 a company sends FDA an NDA on paper. In the same week a university investigator sends a non-commercial research IND on paper. What happens to each submission?

A. Both are not received, because 745A(a) covers paper INDs and NDAs alike after its effective dates.
B. The NDA is received but refused for filing; the research IND is not received for lack of a backbone.
C. The NDA is treated as not received; the research IND is exempt from the eCTD requirement and can proceed.
D. Both are received, but each is placed on hold until an eCTD version is supplied within the filing period.

**정답:** C

**해설**
- C: **NDA는 2017-05-05부터 eCTD 의무**라 종이 제출은 미접수다. **비상업(research) IND는 면제**다(전자 권장).
- A: research IND는 면제 대상이다.
- B: 두 결과가 뒤바뀌었고, NDA 형식 미준수는 RTF가 아니라 미접수다.
- D: 형식 미준수 NDA는 접수되지 않는다. 접수 후 보완 기간을 주는 구조가 아니다.

---

### Q08 [A][Domain IV] — DMF dates in late 2018
In September 2018 two suppliers sent FDA paper DMFs: one a Type II drug substance DMF, the other a Type III packaging DMF. Which statement reflects the eCTD requirements at that time?

A. The Type III DMF had to be eCTD from 2017-05-05; the Type II DMF was not required until 2018-05-05.
B. Type II needed eCTD from 2018-05-05; Type III was not required until 2019-05-05.
C. Both were acceptable on paper, because DMF eCTD requirements began in 2019.
D. Both were not received, because DMFs of each type followed the 2018-05-05 date.

**정답:** B

**해설**
- B: 상업 IND·DMF(Type III 제외)는 **2018-05-05**, **Type III DMF는 2019-05-05**다. 2018년 9월이면 Type II는 의무 시행 후, Type III는 아직 전이다.
- A: 2017-05-05는 NDA·ANDA·BLA 날짜다. Type III가 더 이르지 않다.
- C: Type II는 2018-05-05부터 의무였다.
- D: Type III는 한 해 늦은 2019-05-05다.

---

### Q09 [R][Domain II] — pre-submission practice
Which pair of steps does the textbook describe as standard before a sponsor transmits an original US application in eCTD?

A. Registering the product in SPOR and submitting the application form through the PLM Portal.
B. Sending a draft sequence for FDA pre-validation and waiting for a medium-severity clearance letter.
C. Filing a paper courtesy copy with the division and obtaining a debarment waiver from FDA.
D. Passing the FDA validation criteria internally and requesting a pre-assigned application number.

**정답:** D

**해설**
- D: 제출 전 **FDA validation criteria 통과**와 **pre-assigned application number 요청**이 표준이다.
- A: SPOR와 PLM eAF는 EU 시스템이다.
- B: FDA가 초안 sequence를 사전 검증해 주는 절차는 교과서에 없다.
- C: 종이 사본이나 debarment waiver는 교과서의 표준 절차가 아니다. debarment는 1.3.3 진술이다.

---

### Q10 [An][Domain II] — STF in a two-region dossier
A sponsor builds one eCTD for FDA and EMA. Because STFs are optional in the EU, the publisher proposes omitting them from both regional sequences to save time. Evaluate the proposal.

A. Acceptable for both, provided the Module 5 table of contents lists each study by its identifier.
B. Acceptable for FDA, but the EU sequence needs STFs because EMA uses them to start Day 1.
C. Acceptable, because FDA follows the EU approach for files that sit outside Module 1.
D. Acceptable for the EU only; FDA requires STFs, and a missing STF is a high severity rejection.

**정답:** D

**해설**
- D: STF는 **FDA 요구, EU 선택**이다. 미국 sequence에서 빠지면 **high severity**로 거부된다. 백본은 지역별로 만들기 때문에 EU 쪽만 생략할 수 있다.
- A: 목차 기재가 STF를 대신한다는 규정은 없다.
- B: 두 지역의 요건이 뒤바뀌었다.
- C: 지역 사양과 validation은 지역별이다. FDA가 EU 방식을 따르지 않는다.

---

### Q11 [R][Domain II] — what an STF does
What does a study tagging file do in an eCTD?

A. It tags each Module 1 form with the signatory's name, date and meaning of signature.
B. It records the lifecycle operation that links a new leaf to a leaf in an earlier sequence.
C. It lists the CDISC standard versions used in each dataset, replacing the define.xml file.
D. It groups study documents in Modules 4.2 and 5.3 by study identifier and document type.

**정답:** D

**해설**
- D: **STF**는 M4.2/M5.3 시험 문서를 **시험 ID·문서 유형**으로 묶는 XML이다.
- A: 서명 표시(이름·일시·의미)는 Part 11의 11.50 요건이다.
- B: leaf 간 관계는 lifecycle operation과 modified-file 속성이 기록한다.
- C: 표준 버전은 Data Standards Catalog를 따르고 define.xml은 그대로 필요하다.

---

### Q12 [R][Domain II] — granularity and leaf titles
Which FDA document sets the conventions for document granularity, leaf titles, file names and PDF format in a US eCTD?

A. The Data Standards Catalog, which lists supported CDISC versions.
B. The eCTD Validation Criteria, which list high and medium severity checks.
C. The eCTD Technical Conformance Guide.
D. The Module 1 specification for forms 356h and 3674.

**정답:** C

**해설**
- C: granularity·leaf 제목·파일명·PDF 규격·STF는 **Technical Conformance Guide**가 정한다.
- A: Data Standards Catalog는 study data 표준의 버전을 정한다.
- B: validation criteria는 검사 항목과 등급(high/medium)이다.
- D: Module 1 사양은 지역 문서의 위치를 정한다. 문서 granularity 규칙은 TCG다.

---

### Q13 [A][Domain IV] — which trials need CDISC data
An NDA to be submitted in 2026 includes two pivotal trials. Trial X started in October 2016; Trial Y started in February 2017. Which statement about standardised study data is correct?

A. Trial Y is covered, as it started after 2016-12-17; Trial X started before that date.
B. Neither trial falls under it, because the NDA requirement applies to trials started after 2017-12-17.
C. Trial X falls under it, because the rule counts from the first enrolment in the program, not the trial.
D. Both trials fall under the requirement, because the NDA itself is submitted after the effective date.

**정답:** A

**해설**
- A: NDA·BLA·ANDA는 **2016-12-17 이후 시작된 시험**부터다. 2017년 2월 시작인 Y가 해당하고, 2016년 10월 시작인 X는 그 전이다.
- B: 2017-12-17은 상업 IND 기준이다. NDA 기준은 2016-12-17이다.
- C: 프로그램 첫 등록일로 세는 규칙은 없다.
- D: 기준은 제출일이 아니라 **시험 시작일**이다.

---

### Q14 [R][Domain IV] — CDISC standards
Which pairing of CDISC standard and data type is correct?

A. SDTM for nonclinical studies; SEND for clinical tabulations.
B. ADaM for clinical tabulations; SDTM for analysis datasets.
C. SEND for analysis datasets; ADaM for nonclinical tabulations.
D. SDTM for clinical tabulations; SEND for nonclinical studies.

**정답:** D

**해설**
- D: **SDTM**(임상), **ADaM**(분석), **SEND**(비임상)이다. 여기에 define.xml과 reviewer's guide가 붙는다.
- A: SDTM과 SEND의 용도가 서로 바뀌었다.
- B: ADaM과 SDTM의 용도가 서로 바뀌었다.
- C: SEND와 ADaM의 용도가 서로 바뀌었다.

---

### Q15 [A][Domain IV] — GLP toxicology for an EV IND
A company preparing its first commercial IND for an extracellular vesicle product has GLP toxicology studies that started in 2025. The CMC lead asks whether the study reports alone are enough for the eCTD. Which advice is correct?

A. SEND datasets are needed, because the studies started after the 2017-12-17 commercial IND date.
B. SDTM datasets are needed, because SEND is limited to small-molecule toxicology studies.
C. Reports alone suffice, because cell and vesicle products under CBER are outside CDISC standards.
D. Reports alone suffice, because SEND applies to marketing applications and not to INDs.

**정답:** A

**해설**
- A: 상업 IND는 **2017-12-17 이후 시작** 시험부터 표준화 study data가 의무다. 비임상은 **SEND**다.
- B: SDTM은 임상 표준이다. 비임상 독성은 SEND다.
- C: CBER도 같은 eCTD 체계를 쓴다. CBER 제품을 CDISC에서 빼는 규정은 교과서에 없다.
- D: 상업 IND에도 study data 의무가 있다.

---

### Q16 [An][Domain II] — why validate before sending
Why is running the FDA validation criteria internally before transmission treated as standard practice, rather than relying on FDA's own check after receipt? A new publishing manager considers the internal run optional.

A. Because a medium error found by FDA converts the sequence into a refuse-to-file decision.
B. Because a high error means non-receipt: no clock starts, and the whole delay falls on the sponsor.
C. Because FDA charges a resubmission fee for each sequence that fails validation after transmission.
D. Because FDA validates Module 1 itself, leaving the sponsor responsible for checking Modules 2 to 5.

**정답:** B

**해설**
- B: high 오류는 **거부(미접수)**라 filing·PDUFA 시계가 시작되지 않는다. 지연은 전부 스폰서 몫이다. 그래서 제출 전 검증이 표준이다.
- A: medium 오류는 접수되고 지적될 뿐이다.
- C: 재제출 수수료는 교과서에 없다.
- D: FDA validation이 Module 1만 본다는 근거는 없다. STF 누락(Module 5 시험)도 high 오류다.

---

### Q17 [R][Domain II] — US Module 1 map
In the US Module 1, where do the financial disclosure forms, the debarment certification and the patent information go?

A. 1.3.3, 1.3.4 and 1.3.5 respectively, in numerical order.
B. 1.3.4, 1.3.3 and 1.3.5 respectively.
C. 1.3.5, 1.3.4 and 1.3.3 respectively.
D. 1.1, 1.3.3 and 1.12.14 respectively.

**정답:** B

**해설**
- B: 재무 공개(3454/3455) **1.3.4**, debarment 진술(FD&C 306(k)) **1.3.3**, 특허 정보·certification(314.53) **1.3.5**다.
- A: 재무 공개와 debarment의 위치가 서로 바뀌었다.
- C: 순서가 거꾸로다.
- D: 1.1은 forms(356h, 3674), 1.12.14는 환경이다.

---

### Q18 [A][Domain II] — investigator holding sponsor stock
During the pivotal trial, one clinical investigator held 60,000 USD of the sponsor's stock. The regulatory lead asks how this is handled in the NDA. Which response is correct?

A. Disclose it in the cover letter in Module 1.2, as holdings are reported when over 100,000 USD.
B. File Form 3454 certifying the holding in Module 1.3.3 with the debarment statement.
C. Report the holding in the clinical study report in Module 5.3, since disclosure forms cover payments.
D. File Form 3455 disclosing the interest and the steps taken to minimise bias, in Module 1.3.4.

**정답:** D

**해설**
- D: 지분 **≥25,000 USD**는 Part 54 임계값을 넘는다. **Form 3455**로 공개하고 편향 최소화 조치를 설명해 **1.3.4**에 둔다.
- A: 임계값은 25,000 USD이고, 공개는 cover letter가 아니라 1.3.4 서식으로 한다.
- B: 3454는 임계 미달 investigator의 인증이다. 1.3.3은 debarment 자리다.
- C: 재무 공개는 Module 1.3.4의 서식으로 낸다. 지분도 임계 항목이다.

---

### Q19 [A][Domain II] — investigator below the thresholds
An investigator in the same NDA held 5,000 USD of sponsor stock and received routine study payments. The disclosure package is being assembled. How is this investigator covered in Module 1.3.4?

A. The sponsor files Form 3455 for the investigator, because any equity holding triggers disclosure.
B. The sponsor certifies the investigator on Form 3454, because the holding is below the threshold.
C. The investigator signs Form 3674 in Module 1.1, which replaces the disclosure forms when amounts are small.
D. The investigator is left out of Module 1.3.4, because the holding is below the threshold.

**정답:** B

**해설**
- B: 임계값(지분 25,000 USD 등) 미달 investigator는 **Form 3454**로 인증한다. 위치는 **1.3.4**다.
- A: 3455는 임계를 넘을 때다. 지분이면 무조건 공개라는 규칙은 없다.
- C: 3674는 1.1의 다른 양식이다. 재무 공개를 대신하지 않는다.
- D: 임계 미달도 3454 인증으로 다룬다. 빠지지 않는다.

---

### Q20 [R][Domain II] — what triggers Form 3455
Under 21 CFR Part 54, which arrangement makes an investigator's interest disclosable on Form 3455?

A. Payments covering the routine costs of conducting the trial.
B. An equity interest in the sponsor worth less than 25,000 USD.
C. Compensation whose amount depends on the outcome of the trial.
D. Prior employment at an unrelated company in the same therapeutic area.

**정답:** C

**해설**
- C: **결과 연동 보상**은 Part 54 공개 항목이다. 지분·기타 보상 ≥25,000 USD, 특허권과 함께 3455 대상이다.
- A·D: 교과서가 든 임계 항목(지분, 기타 보상, 특허권, 결과 연동 보상)에 해당하지 않는다.
- B: 25,000 USD 미만 지분은 임계 미달이라 3454 인증이다.

---

### Q21 [An][Domain III] — disclosure omission versus format failure
An NDA in valid eCTD format omits the Module 1.3.4 financial disclosure forms. A colleague says it will be treated as not received, like a paper NDA. Evaluate the claim.

A. Correct, because financial disclosure is a high severity validation check in the FDA criteria.
B. Correct, because any missing Module 1 document makes the backbone invalid under 745A(a).
C. Incorrect; FDA accepts the missing forms in the first annual report without affecting filing.
D. Incorrect; it is received, and the omission can be a refuse-to-file ground at filing review.

**정답:** D

**해설**
- D: 형식은 맞으니 745A(a)의 미접수 문제가 아니다. 재무 공개 **누락은 RTF 사유가 될 수 있다**. 존재 요건(형식)과 filing 결함(내용)은 다른 단계다.
- A: 교과서가 든 high 예는 백본 손상·잘못된 application number·STF 누락이다.
- B: 745A(a)는 형식 미준수에 관한 것이다. 내용 누락이 백본을 무효로 만들지 않는다.
- C: annual report로 미뤄도 된다는 규정은 없다.

---

### Q22 [R][Domain I] — what SPL is
What is SPL, and where does it sit in a US eCTD?

A. An HL7 XML labeling format placed in Module 1.14, serving as the DailyMed source.
B. A PDF labeling template placed in Module 1.15 with each promotional piece.
C. A summary of product labeling placed in Module 2.5 of the clinical overview.
D. An SPOR-linked product record placed in Module 1.2 alongside the application form.

**정답:** A

**해설**
- A: **Structured Product Labeling**은 HL7 XML 라벨 형식이고 **1.14**에 들어간다. DailyMed의 원본이다.
- B: 1.15는 promotional(2253) 자리이고 SPL은 PDF가 아니다.
- C: 2.5는 Clinical Overview다.
- D: SPOR와 1.2 eAF는 EU 쪽이다.

---

### Q23 [A][Domain V] — label change and SPL
After approval, a sponsor makes a labeling change through a CBE-0 supplement. The team plans to update the PDF label now and refresh the SPL at the next annual report. Which response is correct?

A. Not acceptable; an updated SPL in Module 1.14 is expected with each labeling change.
B. Not acceptable, because CBE-0 changes must go through a PAS before any SPL can be updated.
C. Acceptable, provided the supplement cover letter in Module 1.2 describes the pending SPL update.
D. Acceptable, because SPL is refreshed once a year in Module 1.13 together with the annual report.

**정답:** A

**해설**
- A: SPL은 **라벨 변경마다(CBE-0·PAS)** 갱신해 **1.14**에 낸다.
- B: CBE-0와 PAS는 각각 별개 경로다. CBE-0를 PAS로 바꿔야 한다는 근거는 없다.
- C: cover letter 설명이 SPL 갱신을 대신하지 않는다.
- D: SPL 갱신을 annual report로 미루는 규정은 없다. 1.13은 annual report 자리다.

---

### Q24 [A][Domain III] — promotional pieces by email
Marketing asks regulatory to email a set of new promotional pieces directly to OPDP so they can launch this week. How should regulatory respond?

A. Hold the pieces for the annual report, where promotional materials are filed in Module 1.13.
B. Submit the pieces through the CDER NextGen Portal, because promotional pieces are non-eCTD.
C. Submit the pieces with Form FDA 2253 in eCTD Module 1.15 through ESG NextGen.
D. Email is acceptable for promotional pieces, provided Form 2253 is attached as a PDF.

**정답:** C

**해설**
- C: 판촉 자료는 **Form 2253**과 함께 **1.15**에 넣어 **ESG NextGen**으로 보낸다. 이메일은 공식 제출이 아니다.
- A: 1.13은 annual report 자리다. 판촉 자료는 1.15다.
- B: 2253은 ESG NextGen 통로 대상이다. CDER NextGen Portal은 비eCTD 제출용이다.
- D: 이메일은 첨부 서식이 있어도 공식 제출이 아니다.

---

### Q25 [R][Domain III] — accelerated approval promotion
For a product approved under accelerated approval, what applies to promotional materials before use?

A. They are submitted in advance to FDA under 314.550 or 601.45.
B. They are filed within the annual report under 314.81 after first use.
C. They are exempt from Form 2253 while the confirmatory trial is ongoing.
D. They are cleared by the advisory committee that reviewed the application.

**정답:** A

**해설**
- A: 가속승인 제품의 판촉 자료는 **사전 제출**(314.550/601.45)이다.
- B: 사후 annual report 제출은 가속승인 제품의 요건이 아니다.
- C: 2253 면제 근거는 없다.
- D: 자문위원회 승인 절차는 교과서에 없다.

---

### Q26 [R][Domain I] — the E2B(R3) route
Which US submission goes through E2B(R3) to FAERS rather than as an eCTD through ESG NextGen?

A. A Form 2253 promotional submission.
B. A REMS assessment for an approved drug product.
C. An annual report for an approved NDA.
D. A postmarketing individual case safety report.

**정답:** D

**해설**
- D: **시판 후 ICSR**은 **E2B(R3) → FAERS**다.
- A·B·C: REMS(1.16)·2253(1.15)·annual report(1.13)는 eCTD → ESG NextGen이다.

---

### Q27 [A][Domain III] — ICSR status on the reference date
It is 1 September 2026. A safety lead asks which US electronic ICSR requirements apply. Which answer is correct?

A. Neither applies yet; IND ICSRs start on 2026-10-01 and postmarketing ICSRs on 2026-10-16.
B. IND E2B(R3) applies since 2026-04-01; postmarketing starts 2026-10-01, after this date.
C. Both IND and postmarketing E2B(R3) requirements took effect together in April 2025 with ESG NextGen.
D. The postmarketing E2B(R3) requirement is in force; the IND requirement starts on 2026-10-01.

**정답:** B

**해설**
- B: IND 전자 ICSR(E2B(R3))은 **2026-04-01**부터 의무다. 시판 후는 **2026-10-01**부터라 기준일엔 비적용이다.
- A: 2026-10-16은 v3.2.2 forward compatibility 날짜다. IND 쪽은 이미 시행 중이다.
- C: 2025-04-14는 ESG NextGen USP 날짜다. E2B(R3) 날짜가 아니다.
- D: 두 날짜가 뒤바뀌었다.

---

### Q28 [A][Domain III] — vaccine adverse event reports
A sponsor holds a CBER-licensed vaccine and also a CBER-licensed cell therapy. Its safety team plans to send every postmarketing ICSR for both products to FAERS. Which correction is needed?

A. Vaccine ICSRs go to VAERS; the cell therapy's postmarketing ICSRs follow the FAERS route.
B. Both products' ICSRs go as eCTD sequences through ESG NextGen, because CBER does not use FAERS.
C. Both products' ICSRs go to VAERS, because CBER products report through VAERS.
D. The cell therapy's ICSRs go to VAERS, while the vaccine's follow the FAERS route.

**정답:** A

**해설**
- A: **백신 ICSR은 VAERS**다(FAERS 아님). 그 밖의 시판 후 ICSR은 E2B(R3) → FAERS다.
- B: 시판 후 ICSR은 eCTD가 아니라 E2B(R3)로 간다.
- C: VAERS는 백신 경로다. CBER 제품 전체가 아니다.
- D: 두 제품의 경로가 뒤바뀌었다.

---

### Q29 [R][Domain I] — CBER gateway
Which statement about CBER electronic submissions is correct?

A. CBER receives eCTD sequences through CESP, the portal used for biologics.
B. CBER accepts BLAs on paper because 745A(a) applies to CDER applications.
C. CBER uses eCTD and ESG NextGen, with validation criteria shared with CDER.
D. CBER requires its own gateway and a separate eCTD specification for biologics.

**정답:** C

**해설**
- C: **CBER도 eCTD + ESG NextGen**이고 validation criteria는 공통(일부 CBER 항목)이다. pre-assigned number 경로와 일부 양식만 다르다.
- A: CESP는 EU 국가 당국 제출 포털이다.
- B: BLA는 2017-05-05부터 eCTD 의무다.
- D: 별도 gateway는 없다.

---

### Q30 [R][Domain I] — non-eCTD route
Through which FDA channel are non-eCTD submissions, such as research INDs, sent?

A. The FAERS E2B(R3) gateway.
B. The EMA eSubmission Web Client.
C. The CDER NextGen Portal.
D. The PLM Portal for web forms.

**정답:** C

**해설**
- C: research IND 등 **비eCTD 제출**은 **CDER NextGen Portal**이다.
- A: FAERS는 ICSR 경로다.
- B·D: PLM Portal과 Web Client는 EU 시스템이다.

---

### Q31 [A][Domain II] — identical CMC for three NDAs
A sponsor holds three NDAs for different strengths under separate application numbers. It wants to submit the same CMC update to all three. Which eCTD approach applies?

A. Three separate sequences with different content, because one sequence is limited to one application number.
B. A single merged application, because a grouped CMC change requires the NDAs to be combined first.
C. A worksharing sequence filed to the lead NDA, with the other two cross-referencing it in their next sequences.
D. A grouped submission: one sequence copied to each application, with every number listed in us-regional.xml.

**정답:** D

**해설**
- D: **Grouped submission**은 한 sequence를 **복수 application number에 복제**한다. us-regional.xml에 모든 번호를 적는다. 내용이 동일해야 한다.
- A: grouped submission이 한 sequence로 여러 신청을 다루는 장치다.
- B: 신청을 합치라는 요건은 없다. 신청별 lifecycle은 독립이다.
- C: worksharing은 EU 제도이고, 거기서도 제품별 sequence를 낸다.

---

### Q32 [An][Domain V] — limits of a grouped submission
After a grouped CMC sequence goes to three NDAs, one strength needs a labeling change that does not apply to the other two. The publisher wants to add it to the next grouped sequence for all three. Evaluate.

A. Not appropriate; grouping needs identical content, so the change goes in a sequence for that NDA alone.
B. Appropriate, provided the cover letter states that the label change affects a single strength.
C. Appropriate, because once applications are grouped their lifecycles merge and must stay aligned.
D. Not appropriate, because each grouped application must first withdraw from the group by amendment.

**정답:** A

**해설**
- A: grouped submission의 조건은 **내용 동일**이다. 한 신청에만 해당하는 변경은 그 신청에만 낸다. 신청별 lifecycle은 **독립**이다.
- B: cover letter 설명이 내용 동일 조건을 대신하지 않는다.
- C: 그룹으로 내도 lifecycle은 합쳐지지 않는다.
- D: 그룹 탈퇴 절차는 교과서에 없다.

---

### Q33 [R][Domain I] — EU Module 1 map
In the EU Module 1, which pairing of section and content is correct?

A. 1.3 expert information; 1.4 product information including SmPC and package leaflet.
B. 1.2 environmental risk assessment; 1.6 electronic application form.
C. 1.8 paediatric compliance; 1.10 pharmacovigilance system summary and RMP.
D. 1.6 environmental risk assessment; 1.8 pharmacovigilance system summary and RMP.

**정답:** D

**해설**
- D: EU M1은 **1.6 ERA**, **1.8 PV 시스템 요약·RMP**다.
- A: 1.3은 product information, 1.4는 전문가 정보로 서로 바뀌었다.
- B: 1.2는 eAF, 1.6은 ERA로 서로 바뀌었다.
- C: 1.8은 PV/RMP, 1.10은 소아(PIP compliance)로 서로 바뀌었다.

---

### Q34 [A][Domain I] — one dossier, two regions
A sponsor will file the same quality, nonclinical and clinical content with FDA and EMA from one source. The publishing vendor wants a single build. Which plan correctly states what must differ?

A. Module 3 differs, because the EU requires QRD format for quality data while FDA requires SPL.
B. Module 1 is swapped; the US carries environmental 1.12.14 and patent information, the EU ERA 1.6 and PIP.
C. Modules 2 to 5 are rewritten for each region, while Module 1 is shared because forms are harmonised.
D. The cover letter alone differs, because one backbone and one sequence history serve both agencies.

**정답:** B

**해설**
- B: **M2–M5는 공유, Module 1만 바꿔 끼운다.** 미국 1.12.14 환경·특허 vs EU 1.6 ERA·PIP처럼 요구 문서가 다르다. 지역 사양·validation·sequence 이력도 지역별이다.
- A: QRD와 SPL은 라벨 형식(Module 1) 얘기다. Module 3는 공유된다.
- C: 공유하는 쪽과 바꾸는 쪽이 뒤바뀌었다.
- D: 백본과 sequence 이력은 지역별이다.

---

### Q35 [A][Domain II] — worksharing across four CAPs
A MAH plans a worksharing Type II variation covering four centrally authorised products. How should the eCTD be organised?

A. One grouped sequence copied into the four lifecycles, with every product number listed in the regional XML.
B. One sequence for the reference product, with the other three products citing its sequence number in their eAF.
C. A separate sequence in each product's lifecycle, with common documents in each and the worksharing number in the cover letter.
D. A separate sequence for each product, each assessed on its own by the authority responsible for that product.

**정답:** C

**해설**
- C: **제품별 별도 sequence**에 공통 문서를 각각 넣는다(허용 범위에서 상호 참조). cover letter(1.0)에 worksharing 번호·대표 제품, eAF는 PLM에서 만든다.
- A: 한 sequence 복제는 미국 grouped submission 방식이다.
- B: 대표 제품 하나에만 내지 않는다. 제품마다 sequence가 있다.
- D: 평가는 **한 번**이고 결과가 각 MA에 반영된다.

---

### Q36 [An][Domain I] — US grouping versus EU worksharing
Which statement correctly compares the US grouped submission with an EU worksharing variation?

A. Both file a sequence per product, but the US alone allows common documents to appear in more than one sequence.
B. The US copies one sequence to several applications; the EU files a sequence per product. Lifecycles stay independent in both.
C. Both copy one sequence to several applications, and in both the grouped applications then share a single lifecycle.
D. The EU copies one sequence to several products; the US files a sequence per application. Lifecycles merge in the EU.

**정답:** B

**해설**
- B: 미국은 **한 sequence를 복수 신청에 복제**, EU worksharing은 **제품별 sequence + 공통 문서**다. 어느 쪽이든 **각 신청의 lifecycle은 독립**이다.
- A: 미국은 한 sequence를 복제한다. EU도 공통 문서를 각 sequence에 넣는다.
- C: EU는 제품별 sequence이고, lifecycle은 어느 쪽도 합쳐지지 않는다.
- D: 두 지역의 방식이 뒤바뀌었다.

---

### Q37 [A][Domain III] — PSUR uploaded to CESP
A regulatory associate uploaded the PSUR for a nationally authorised product to CESP and recorded the obligation as met. The QPPV notices the entry during an audit. What correction is needed?

A. Resend it through EudraVigilance, because PSURs are safety data that the ICSR database collects.
B. None, because CESP is the correct portal for any submission concerning a nationally authorised product.
C. Resend it to each national authority by email, because PSURs fall outside the eSubmission channels.
D. Resubmit it to the PSUR Repository; a CESP upload is not accepted as a PSUR submission.

**정답:** D

**해설**
- D: PSUR은 CAP·NAP 모두 **PSUR Repository**(2016-06-13부터 의무)다. **CESP 제출은 PSUR로 인정되지 않는다.** 재제출하고 EURD list 일정을 확인한다.
- A: EudraVigilance는 ICSR 경로다.
- B: NAP라도 PSUR은 Repository다.
- C: 이메일 제출 경로는 없다.

---

### Q38 [R][Domain III] — PSUR Repository scope and date
Which statement about the EU PSUR Repository is correct?

A. Its use has been mandatory since 2018-01-01 for PSURs of centrally authorised products, with CESP for the rest.
B. Its use became mandatory with eCTD v4.0 on 2025-12-22 for each product, replacing the eSubmission Gateway.
C. Its use has been mandatory since 2016-06-13 for PSURs of both centrally and nationally authorised products.
D. Its use is optional on the reference date and becomes mandatory with the EU v4.0 mandate in 2028 Q1.

**정답:** C

**해설**
- C: **2016-06-13부터** 모든 PSUR(**CAP·NAP**)이 Repository 의무다.
- A: 2018-01-01은 DCP/MRP 전체 eCTD 날짜다. NAP도 Repository다.
- B: 2025-12-22는 EU v4.0 선택 제출 시작이다.
- D: 기준일에 이미 의무다. 2028 Q1은 EU v4.0 의무 시점이다.

---

### Q39 [R][Domain I] — SPOR components
Which SPOR component holds data on organisations such as MAHs and manufacturing sites?

A. OMS
B. PMS
C. SMS
D. RMS

**정답:** A

**해설**
- A: **OMS**가 조직이다.
- B: PMS는 제품이다.
- C: SMS는 물질이다.
- D: RMS는 참조어(용어)다.

---

### Q40 [An][Domain I] — why SPOR/IDMP
Why did the EU build SPOR on ISO IDMP, and what does it change for a submission team?

A. To harmonise EU and US labeling, so teams submit SPL instead of SmPC in Module 1.3.
B. To speed PSUR assessment, so teams file PSURs as SPOR records rather than as documents.
C. To link data across authorities using structured identifiers, so teams register in OMS and use RMS terms.
D. To replace eCTD with structured data, so teams stop compiling Module 1 once PMS is live.

**정답:** C

**해설**
- C: 제품·물질·조직·용어가 문서마다 **자유 텍스트**라 당국 간 연계(PV 신호·공급 부족·제조소 추적)가 안 됐다. **ISO IDMP 구조화 식별자**를 쓰고, 팀엔 **OMS 등록·RMS 용어**·향후 PMS 제출 의무가 생긴다.
- A: SPL은 미국 형식이다.
- B: PSUR은 PSUR Repository로 문서 제출한다.
- D: SPOR가 eCTD를 대체한다는 내용은 없다. eAF가 SPOR를 참조하는 구조다.

---

### Q41 [R][Domain I] — orphan designation route
Through which EMA system is an orphan designation request submitted?

A. CESP
B. CTIS
C. IRIS
D. EudraGMDP

**정답:** C

**해설**
- C: orphan 지정·scientific advice·PRIME 등 절차는 **IRIS**다.
- A: CESP는 국가 당국 제출 포털이다.
- B: CTIS는 임상시험이다.
- D: EudraGMDP는 GMP/GDP 인증·비준수다.

---

### Q42 [A][Domain I] — routing two EU procedures
A company has a Type II variation for a centrally authorised product and, separately, a new MAA through the decentralised procedure to eight member states. Which routing is correct?

A. Both through CESP, with the eAF generated in IRIS for the centralised variation.
B. The variation through the EMA Gateway with a PLM eAF; the DCP MAA through CESP.
C. The variation through CESP with an eAF; the DCP MAA through the EMA Gateway to each NCA.
D. Both through the EMA eSubmission Gateway, since one company file covers both procedures.

**정답:** B

**해설**
- B: CAP Type II variation은 **EMA eSubmission Gateway + PLM eAF**, 8개국 DCP MAA는 **CESP**다.
- A: CAP 제출은 Gateway다. eAF는 PLM Portal에서 만든다. IRIS는 orphan·SA 절차다.
- C: 두 경로가 뒤바뀌었다.
- D: 국가 당국 절차(DCP)는 CESP다.

---

### Q43 [A][Domain II] — national procedure in late 2018
In September 2018 a company prepared two national procedure submissions in one member state: a new MAA and a variation to an existing national authorisation. What did the HMA eSubmission Roadmap require then?

A. eCTD for neither, because national procedures were brought in when the roadmap ended in 2019-01-01.
B. eCTD for both, because the national procedure followed the DCP and MRP date of 2018-01-01 for each activity.
C. eCTD for the new MAA, required since 2018-07-01; the variation was not yet required to be eCTD until 2019-01-01.
D. eCTD for the variation, required since 2018-07-01; new national MAAs followed later, from 2019-01-01.

**정답:** C

**해설**
- C: NP **신규 MAA는 2018-07-01**, **NP 전체는 2019-01-01**이다. 2018년 9월이면 신규 MAA는 의무, variation은 아직 전이다.
- A: NP 신규 MAA는 2018-07-01부터였다.
- B: 2018-01-01은 DCP/MRP 모든 활동의 날짜다. NP는 따로다.
- D: 신규 MAA와 전체 활동의 순서가 뒤바뀌었다.

---

### Q44 [A][Domain II] — MRP in mid-2017
In mid-2017 a MAH had a new MAA through the mutual recognition procedure and also a variation to an earlier MRP authorisation. Which statement reflects the roadmap?

A. Both had to be eCTD, because MRP followed the 2015-07-01 date set for the decentralised procedure.
B. The variation had to be eCTD from 2017-01-01; the new MAA followed from 2018-01-01.
C. Neither had to be eCTD, because MRP activities were first brought in on 2018-01-01.
D. The new MAA had to be eCTD from 2017-01-01; the variation followed only from 2018-01-01.

**정답:** D

**해설**
- D: **MRP 신규 MAA 2017-01-01**, **DCP/MRP 모든 규제 활동 2018-01-01**이다. 2017년 중반이면 신규 MAA만 의무다.
- A: 2015-07-01은 DCP 신규 MAA 날짜다.
- B: 신규 MAA와 variation의 순서가 뒤바뀌었다.
- C: MRP 신규 MAA는 2017-01-01부터였다.

---

### Q45 [An][Domain I] — application form strategy
What does the difference between the US Form 356h and the EU eAF show about each region's approach to structured data?

A. Both now use web forms linked to master data, so the difference lies in the Module 1 section number.
B. The EU treats the form as data input linked to SPOR, while the US starts structuring from SPL and study data.
C. The US structures data through its form, while the EU structures data through labeling and study data.
D. The EU treats the form as a PDF document, while the US enters the form as data linked to IDMP records.

**정답:** B

**해설**
- B: 미국 **356h**는 PDF 서식(1.1)이고, EU **eAF**는 PLM Portal의 데이터 입력(1.2)으로 **SPOR 마스터데이터를 참조**한다. EU는 신청서부터, 미국은 **SPL·study data**부터 구조화했다.
- A: 356h는 마스터데이터와 연결된 웹 양식이 아니다.
- C: 두 지역의 출발점이 뒤바뀌었다.
- D: 두 지역이 뒤바뀌었다.

---

### Q46 [R][Domain I] — what the eAF is
Which statement about the EU electronic application form is correct?

A. It is created in the PLM Portal, references SPOR master data, and yields structured data plus a PDF.
B. It is created in CTIS, references the RMP, and is used for the centralised procedure alone.
C. It is created in IRIS, references the EURD list, and is filed in Module 1.0 with the cover letter.
D. It is created in CESP, references OMS alone, and replaces the cover letter in Module 1.2.

**정답:** A

**해설**
- A: **PLM Portal – eAF**는 웹 신청서로 **SPOR 마스터데이터를 참조**하고 **구조화 데이터 + PDF**를 만든다. 위치는 **1.2**다.
- B: CTIS는 임상시험 시스템이다. eAF는 MAA·variation 양식이고 CAP 전용이 아니다.
- C: IRIS는 orphan·SA 절차 포털이고, eAF는 1.2다.
- D: CESP는 제출 포털이다. eAF가 cover letter(1.0)를 대신하지 않는다.

---

### Q47 [A][Domain III] — EU safety and trial routing
An EU sponsor has a serious ICSR from a marketed product and must also submit a Phase 2 clinical trial application. Which routing is correct?

A. The ICSR through the PSUR Repository; the CTA through IRIS.
B. The ICSR through EudraVigilance in E2B(R3); the CTA through CTIS.
C. The ICSR through EudraVigilance in E2B(R3); the CTA through the EMA Gateway.
D. The ICSR through CESP to the national authority; the CTA through CTIS.

**정답:** B

**해설**
- B: 중대 ICSR은 **EudraVigilance(E2B(R3))**, Phase 2 CTA는 **CTIS**다.
- A: PSUR Repository는 PSUR, IRIS는 orphan·SA 절차다.
- C: 임상시험은 CTIS다. Gateway는 CAP 제출이다.
- D: ICSR은 CESP가 아니라 EudraVigilance다.

---

### Q48 [R][Domain II] — EU validation and procedure start
What role does eCTD validation play in an EU procedure?

A. Validation applies to the centralised procedure, with national procedures exempt.
B. Validation is advisory; the procedure starts on the date the sequence is sent.
C. Validation runs after Day 120, when the list of questions is adopted.
D. Passing validation is a precondition for the procedure to start at Day 1.

**정답:** D

**해설**
- D: EU는 **validation 통과가 Day 1의 전제**다.
- A: EU validation criteria는 eCTD 제출 전반에 적용된다. 국가 절차를 면제하는 근거는 없다.
- B: 통과하지 못하면 절차가 시작되지 않는다.
- C: validation은 절차 시작 전 단계다.

---

### Q49 [A][Domain II] — 505(b)(2) literature dossier
A 505(b)(2) NDA relies on published clinical literature and on FDA's finding for a reference product. Where do the literature references, the bridging rationale and the patent certification go?

A. Literature in Module 2.7, bridging rationale in Module 5.4, patent certification in Module 1.3.3.
B. Literature in Module 1.4, bridging rationale in Module 1.2, patent certification in Module 1.3.4.
C. Literature in Module 5.4, bridging rationale in Module 2.5, patent certification in Module 1.3.5.
D. Literature in Module 4.3, bridging rationale in Module 2.7, patent certification in Module 1.1.

**정답:** C

**해설**
- C: 문헌 전문은 **5.4**, bridging 논리는 **2.5**(2.5.1)·2.7, 참조 제품 특허 certification은 **1.3.5**다. 의존 진술은 1.2/1.3에 둔다.
- A: 2.7은 요약이고 5.4가 문헌 자리다. 1.3.3은 debarment다.
- B: 1.4는 references/LOA다. 1.3.4는 재무 공개다.
- D: 4.3은 비임상 문헌 자리다. 임상 문헌은 5.4다. 1.1은 forms다.

---

### Q50 [R][Domain IV] — nonclinical literature
Where are published nonclinical literature references placed in an eCTD?

A. Module 4.3
B. Module 1.4
C. Module 2.4
D. Module 5.4

**정답:** A

**해설**
- A: 비임상 문헌은 **4.3**이다.
- B: US 1.4는 references/LOA다.
- C: 2.4는 Module 2 요약 영역이다. 문헌 전문 자리가 아니다.
- D: 5.4는 임상 문헌이다.

---

### Q51 [A][Domain V] — annual report timing
An EV product was approved in the US. The operations lead is building the first-year calendar and asks when the annual report is due and where it sits in the eCTD. Which answer is correct?

A. Each June and December, in Module 1.13 combined with the drug listing update.
B. Within 60 days of the approval anniversary, in Module 1.16 together with the REMS assessment.
C. At 18 months after approval, in Module 1.13 together with the first REMS assessment.
D. Within 60 days of the approval anniversary, in Module 1.13 as its own sequence.

**정답:** D

**해설**
- D: annual report는 **승인 기념일 60일 내**, **1.13**, 별도 sequence다.
- A: 6월·12월은 drug listing 갱신 시점이다.
- B: 1.16은 REMS 자리다.
- C: 18개월은 REMS 평가 시점이다.

---

### Q52 [A][Domain V] — REMS assessment in the calendar
The same product has a REMS. When is the first REMS assessment shown in the calendar, and in which Module 1 section?

A. Each June and December, in Module 1.14 with the SPL.
B. At 18 months, in Module 1.16.
C. At 60 days after the approval anniversary, in Module 1.13.
D. Between October and December, in Module 1.15 with promotional pieces.

**정답:** B

**해설**
- B: 교과서 달력의 REMS 평가는 **18개월**, 위치는 **1.16**이다.
- A: 6월·12월은 drug listing이고 1.14는 labeling이다.
- C: 기념일 60일 내는 annual report(1.13)다.
- D: 10–12월은 establishment registration이고 1.15는 promotional이다.

---

### Q53 [A][Domain V] — listing and registration timing
In the first-year calendar after approval, when are drug listing updates and establishment registration scheduled?

A. Both within 60 days of the approval anniversary, as parts of the annual report in Module 1.13.
B. Both at 18 months after approval, aligned with the first REMS assessment in Module 1.16.
C. Drug listing between October and December; establishment registration each June and December.
D. Drug listing each June and December; establishment registration between October and December.

**정답:** D

**해설**
- D: **drug listing은 6월·12월**, **establishment registration은 10–12월**이다.
- A: 60일은 annual report 기한이다. 둘은 annual report의 일부가 아니다.
- B: 18개월은 REMS 평가다.
- C: 두 시점이 서로 바뀌었다.

---

### Q54 [An][Domain V] — bundling into one sequence
To save effort, a team proposes to hold a CBE-0 labeling change, a new promotional piece and a REMS assessment and send them all inside the annual report sequence. Evaluate.

A. Acceptable, provided the cover letter in Module 1.2 lists each item and its Module 1 section.
B. Not acceptable; each item has its own section and submission type, so each is a separate sequence.
C. Not acceptable, because these items must go through E2B(R3) rather than as eCTD sequences.
D. Acceptable, because the annual report is the designated sequence for each post-approval item.

**정답:** B

**해설**
- B: 라벨 변경(1.14 SPL)·2253(1.15)·REMS 평가(1.16)·annual report(1.13)는 **각각 별도 sequence·submission type**이다.
- A: cover letter 목록이 별도 sequence를 대신하지 않는다.
- C: E2B(R3)는 ICSR 형식이다. 이 항목들은 eCTD → ESG NextGen이다.
- D: annual report가 모든 승인 후 항목을 담는 sequence라는 규정은 없다.

---

### Q55 [A][Domain IV] — manufacturing change for an EV product
An EV product is licensed under a BLA. The manufacturing team changes a purification step a year after approval. Which regulation governs the change and how is it submitted?

A. 21 CFR 314.70, filed inside the next annual report in Module 1.13.
B. 21 CFR 314.80, filed through FAERS because it concerns product quality.
C. 21 CFR 601.45, filed in Module 1.15 because changes need pre-submission.
D. 21 CFR 601.12, filed as its own eCTD sequence through ESG NextGen.

**정답:** D

**해설**
- D: BLA 제품의 CMC 변경은 **601.12**이고, 다른 항목처럼 **별도 sequence**로 ESG NextGen을 통해 낸다.
- A: 314.70은 NDA 쪽 CMC 변경 조항이다. annual report에 묶지 않는다.
- B: 314.80은 periodic safety 조항이다.
- C: 601.45는 가속승인 제품 판촉 자료 사전 제출 조항이다.

---

### Q56 [A][Domain IV] — supplier DMF in non-eCTD format
For a commercial IND, the sponsor plans to reference a supplier's Type II DMF. The supplier still maintains the DMF in a non-eCTD format. What should the sponsor do?

A. Copy the DMF content into its own Module 3, which avoids the need for a letter of authorisation.
B. Proceed, because DMF eCTD requirements are limited to Type III packaging DMFs.
C. Confirm by contract that the DMF is in eCTD, because a non-eCTD Type II DMF blocks the reference.
D. Proceed, because the IND is commercial and DMFs referenced by INDs keep the paper option.

**정답:** C

**해설**
- C: Type II DMF는 **2018-05-05**부터 eCTD 의무다. 공급자 DMF가 비eCTD면 **참조가 막히니** 계약으로 확인한다.
- A: DMF 참조는 LOA(1.4)를 통한다. 내용을 복사하라는 해법은 교과서에 없다.
- B: Type III는 오히려 한 해 늦은 2019-05-05였고, Type II도 의무 대상이다.
- D: 상업 IND와 DMF 모두 2018-05-05부터 eCTD 의무다.

---

### Q57 [A][Domain I] — v4.0 status on the reference date
It is 1 September 2026. A regulatory operations lead asks whether eCTD v4.0 is mandatory anywhere. Which answer is correct?

A. v4.0 is optional in both regions; v3.2.2 remains the standard for the US and the EU.
B. v4.0 is mandatory in both regions, as v3.2.2 was retired when ESG NextGen launched in April 2025.
C. v4.0 is mandatory for EU centralised MAAs from 2025-12-22, while it remains optional in the US.
D. v4.0 is mandatory for new US applications from 2024-09-16, while it remains optional in the EU.

**정답:** A

**해설**
- A: 기준일 기준 **양쪽 다 v3.2.2가 표준**이고 v4.0은 **선택**이다.
- B: ESG NextGen은 통로 변경이다. v3.2.2 폐기와 관계없다.
- C: 2025-12-22는 EU CAP **선택** 제출 시작이다. 의무는 2028 Q1이다.
- D: 2024-09-16은 FDA가 신규 신청에 v4.0을 **수용**하기 시작한 날이다. 의무가 아니다.

---

### Q58 [A][Domain I] — not yet in force on the reference date
On 1 September 2026, which of these requirements is not yet in force?

A. US electronic IND ICSRs in E2B(R3).
B. US forward compatibility for v3.2.2 applications.
C. EU PSUR submission through the PSUR Repository.
D. US commercial IND submissions in eCTD.

**정답:** B

**해설**
- B: v3.2.2 **forward compatibility는 2026-10-16**이라 기준일 시점 비적용이다.
- A: IND 전자 ICSR은 2026-04-01부터 의무다.
- C: PSUR Repository는 2016-06-13부터 의무다.
- D: 상업 IND eCTD는 2018-05-05부터 의무다.

---

### Q59 [R][Domain I] — EU v4.0 timeline
Which sequence of dates describes the EU eCTD v4.0 timeline for centrally authorised products?

A. Mandatory from 2025-12-22, with v3.2.2 accepted for variations until 2027 Q1.
B. Optional from 2025-12-22, recommended from 2027 Q1, mandatory from 2028 Q1.
C. Optional from 2024-09-16, recommended from 2026-10-16, mandatory from 2027 Q1.
D. Pilot from 2025-12-22, optional from 2027 Q1, mandatory from 2028 Q1.

**정답:** B

**해설**
- B: EU CAP은 **선택 2025-12-22**(기준일 전이라 기준일엔 선택 제출 가능) → **권고 2027 Q1** → **의무 2028 Q1**이다.
- A: 2025-12-22는 선택 시작이다.
- C: 2024-09-16과 2026-10-16은 FDA 날짜다.
- D: 2025-12-22에 선택 제출이 열렸다. 파일럿은 forward compatibility 쪽(CAP 2026-03~)이다.

---

### Q60 [A][Domain V] — filing an EU MAA in v4.0 on the reference date
On 1 September 2026 a company wants to submit a new centralised MAA in eCTD v4.0. A colleague says v4.0 cannot be used in the EU until it becomes mandatory. Which response is correct?

A. The colleague is wrong; v4.0 is required for new centralised MAAs, with v3.2.2 kept for variations.
B. The colleague is wrong; v4.0 has been an option for centralised MAAs since 2025-12-22.
C. The colleague is right; EU v4.0 submissions open on 2026-10-16, after the reference date.
D. The colleague is right; EU v4.0 submissions open with the 2027 Q1 recommendation.

**정답:** B

**해설**
- B: EU CAP v4.0 **선택 제출은 2025-12-22**부터다. 기준일 전이라 기준일엔 선택 제출이 가능하다. v3.2.2도 여전히 표준이다.
- A: 기준일에 v4.0은 의무가 아니다. 의무는 2028 Q1이다.
- C: 2026-10-16은 FDA forward compatibility 날짜다.
- D: 2027 Q1은 권고 단계다. 선택 제출은 그 전에 열렸다.

---

### Q61 [R][Domain II] — what v4.0 adds
Which feature distinguishes eCTD v4.0 from v3.2.2?

A. A document-centric backbone that repeats the full structure in each sequence.
B. Replacement of lifecycle operations by an annual consolidated sequence.
C. Document reuse, controlled vocabulary and two-way communication via HL7 RPS.
D. Removal of the regional Module 1, which is merged into the common Modules.

**정답:** C

**해설**
- C: v4.0은 **HL7 RPS 메시지**로 **문서 재사용·keyword/controlled vocabulary·양방향 통신**, 그룹 제출을 지원한다.
- A: 문서 중심 백본과 구조 반복은 v3.2.2의 특징이다.
- B·D: 지역 Module 1 폐지나 연간 통합 sequence는 교과서에 없다.

---

### Q62 [A][Domain IV] — CBER IND for an EV product
A company will open a commercial IND at CBER for an EV product. Its staff, who previously worked with CDER, ask whether anything about the submission route changes. Which advice is correct?

A. Use eCTD through ESG NextGen as at CDER; the pre-assigned number route and some forms differ.
B. Use the CDER NextGen Portal, because CBER does not receive eCTD sequences through ESG.
C. The IND is exempt from eCTD, because CBER biologics follow the research IND rule.
D. The IND goes to CBER through CESP, with CBER's own validation criteria replacing FDA's.

**정답:** A

**해설**
- A: **CBER도 eCTD + ESG NextGen**이다. 상업 IND는 eCTD 의무다. 다른 것은 **pre-assigned number 경로**와 일부 양식이다.
- B: CDER NextGen Portal은 비eCTD 제출용이다.
- C: 면제는 비상업(research) IND다. 상업 IND는 2018-05-05부터 의무다.
- D: CESP는 EU 포털이다. validation criteria는 공통이다(일부 CBER 항목).

---

### Q63 [An][Domain V] — v4.0 for an existing NDA
On 1 September 2026, a sponsor with an NDA maintained in v3.2.2 wants to send its next supplement in v4.0, citing FDA acceptance of v4.0 since 2024. The publishing tool already supports v4.0. Evaluate.

A. Not yet; FDA accepts v4.0 for new applications, and forward compatibility for v3.2.2 begins 2026-10-16.
B. Acceptable, because the EU optional start on 2025-12-22 also opened v4.0 for US supplements.
C. Not acceptable until FDA makes v4.0 mandatory in 2028 Q1, when existing applications convert.
D. Acceptable, because FDA acceptance of v4.0 since 2024-09-16 covers new and existing applications.

**정답:** A

**해설**
- A: FDA는 2024-09-16부터 **신규 신청**에 v4.0을 수용한다. 기존 v3.2.2 신청의 **forward compatibility는 2026-10-16**이라 기준일 시점 비적용이다.
- B: EU 날짜는 미국 제출과 관계없다.
- C: 2028 Q1은 EU 의무 시점이다. FDA 날짜가 아니다.
- D: 2024-09-16 수용은 신규 신청 대상이다.

---

### Q64 [A][Domain II] — misfiled Module 1 documents
A publishing check of a US NDA finds the REMS document in Module 1.15 and the meeting minutes in Module 1.11. Where should they go?

A. REMS in 1.14 with labeling; meeting minutes in 1.9 with pediatric material.
B. REMS in 1.12.14; meeting minutes in 1.4 with the references.
C. REMS in 1.16; meeting minutes in 1.6.
D. REMS in 1.13 with the annual report; meeting minutes in 1.2 with the cover letter.

**정답:** C

**해설**
- C: **REMS는 1.16**, **meetings는 1.6**이다. 1.15는 promotional, 1.11은 information amendment 자리다.
- A: 1.14는 labeling, 1.9는 pediatric이다.
- B: 1.12.14는 환경, 1.4는 references/LOA다.
- D: 1.13은 annual report, 1.2는 cover letter다.

---
