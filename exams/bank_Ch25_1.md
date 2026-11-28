# 문제은행 — Ch.25 (1/2) 전자 제출(eCTD): 개념·구조

> **근거:** `textbook/Ch25.md` + `cards/Ch25_1.md`·`cards/Ch25_2.md` 검증 메모(ICH M8·M4, FD&C 745A(a)(FDASIA 2012 §1136), FDA eCTD 의무 2017-05-05/2018-05-05/2019-05-05, CDISC 2016-12-17/2017-12-17, FDA validation criteria·TCG, ESG NextGen 2025-04-14, HMA eSubmission Roadmap, EMA 포털·SPOR, eCTD v4.0 일정, 21 CFR Part 11·2003 Scope guidance). 새 숫자 없음. 계산 문항은 위 날짜로만 계산했다. "?"(2253 eCTD 의무 연도)는 정답 키로 쓰지 않았다.
> **형식:** 영문 지문 → 영문 선지 A~D → 정답 → 한국어 해설. 태그 `[R]/[A]/[An]` + Domain. 기준일 2026-09-01.
> **작성:** 2026-11-27. 64문항.

---

### Q01 [R][Domain II] — what the eCTD is
Which description of the eCTD and its governing specification is correct?

A. The ICH CTD structure delivered in electronic form with an XML backbone, as specified by ICH M8.
B. A PDF rendering of the CTD, specified by ICH M4 with a regional cover letter.
C. An HL7 message format for safety reports, specified by ICH E2B(R3) across regions.
D. An FDA-specific electronic format, specified by the Technical Conformance Guide alone.

**정답:** A

**해설**
- A: eCTD는 **ICH CTD 구조(M4)를 XML 백본으로 전자화**한 형식이고, 사양은 **ICH M8**(v3.2.2; v4.0은 HL7 RPS)이다.
- B: M4는 CTD의 내용 구조를 정한다. 전자 형식과 백본은 M8이다.
- C: E2B(R3)는 ICSR 전송 표준이다. eCTD 사양이 아니다.
- D: TCG는 FDA의 운영 문서다. eCTD 자체는 ICH 사양이고 지역 Module 1만 당국별이다.

---

### Q02 [R][Domain II] — sequence numbering
In eCTD v3.2.2, how are individual submissions to the same application identified?

A. By sequences numbered from 0000, accumulating with each new submission.
B. By leaf titles, which the agency assigns once the backbone is validated.
C. By study tagging files, one created for each submission to the agency.
D. By sequences that restart at 0000 each calendar year for the application.

**정답:** A

**해설**
- A: **Sequence**는 한 번의 제출 단위이고 **0000**부터 누적 번호를 붙인다.
- B: Leaf title은 문서 1개의 제목이다. 제출 단위를 나타내지 않는다.
- C: STF는 M4/M5 시험 문서를 시험 단위로 묶는 XML이다. 제출 단위가 아니다.
- D: 번호는 누적된다. 해마다 다시 시작하지 않는다.

---

### Q03 [R][Domain II] — leaf
In eCTD terminology, what is a "leaf"?

A. The XML file that groups study reports by study identifier and type.
B. One module of the CTD, such as Module 3, with its table of contents.
C. A complete submission unit carrying its own sequence number and regional XML.
D. One document: the file together with its title, attributes and checksum.

**정답:** D

**해설**
- D: **Leaf**는 문서 1개이며 **파일 + 제목 + 속성 + 체크섬**으로 이루어진다.
- A: 시험별로 묶는 XML은 STF다.
- B: 모듈은 leaf의 상위 구조다. Leaf는 문서 단위다.
- C: 제출 단위는 sequence다.

---

### Q04 [R][Domain II] — lifecycle operations
Which set lists the eCTD v3.2.2 lifecycle operations?

A. New, revise, withdraw and annotate.
B. Create, update, retire and cross-reference.
C. New, replace, delete and append.
D. Submit, amend, supersede and archive.

**정답:** C

**해설**
- C: v3.2.2 lifecycle operation은 **new / replace / delete / append** 넷이다. 이전 leaf와의 관계를 백본에 기록해 current view를 만든다.
- A·B·D: 사양에 없는 용어 조합이다. "superseded"는 replace의 결과로 이전 leaf가 놓이는 상태이지 operation 이름이 아니다.

---

### Q05 [A][Domain II] — corrected CSR
In sequence 0012 a sponsor submits a corrected version of a clinical study report that was first submitted in an earlier sequence. Which operation applies, and what happens to the earlier file in the current view?

A. Append; both versions remain visible side by side in the current view.
B. New; the earlier leaf is removed from the application history entirely.
C. Delete then new; the earlier leaf stays current until FDA confirms receipt.
D. Replace; the earlier leaf is superseded and drops out of the current view.

**정답:** D

**해설**
- D: 정정본은 **replace**다. 이전 leaf는 **superseded**로 이력에 남지만 **current view에서 사라진다**.
- A: Append는 이전 문서에 덧붙이는 관계다. 정정본을 대체하는 용도가 아니다.
- B: New는 이전 leaf와 관계를 맺지 않는다. 또 이력에서 지워지는 operation은 없다.
- C: 대체는 replace 한 번으로 표시한다. 수령 확인과 current view는 관계가 없다.

---

### Q06 [A][Domain II] — obsolete appendix
A regulatory operations specialist wants an obsolete appendix to stop appearing as a valid document. The appendix was submitted two sequences ago and has no successor. What is the correct approach?

A. Ask the agency to purge the leaf from the archive, because history cannot contain withdrawn files.
B. Submit a replace operation with a blank page; deletion is not available once a sequence is accepted.
C. Submit a delete operation for that leaf; it leaves the current view but stays in the application history.
D. Resubmit the earlier sequence without the appendix, using the same sequence number as before.

**정답:** C

**해설**
- C: 폐기 문서는 **delete**다. **current view에서 제거되고 이력에는 유지**된다. 대상 leaf는 modified-file 속성으로 지정한다.
- A: eCTD는 이력을 지우지 않는다. delete도 이력엔 남는다.
- B: Delete operation이 따로 있다. 빈 페이지로 replace할 이유가 없다.
- D: 같은 번호 재제출은 high severity로 **거부된** sequence에만 해당한다. 접수된 sequence를 다시 쓰지 않는다.

---

### Q07 [A][Domain II] — modified-file attribute
When a replace or delete operation is used in a new sequence, how does the backbone identify which earlier document is affected?

A. Through the modified-file attribute, which points to the earlier leaf.
B. Through the cover letter, which lists the affected documents by name.
C. Through the leaf title, which must match the earlier title word for word.
D. Through the STF, which records the documents the sequence supersedes.

**정답:** A

**해설**
- A: replace/delete는 **modified-file 속성**으로 어느 sequence의 어느 leaf를 가리키는지 지정한다.
- B: Cover letter는 설명 문서다. 백본의 lifecycle 관계를 만들지 않는다.
- C: 제목이 같아도 관계는 생기지 않는다. 관계는 속성으로 기록된다.
- D: STF는 시험 문서를 시험 ID·문서 유형으로 묶는다. 대체 관계는 leaf 속성이 담당한다.

---

### Q08 [R][Domain II] — what an STF does
What is the function of a study tagging file (STF)?

A. It lists each leaf in a sequence with its checksum for integrity checking.
B. It records the lifecycle relationship between a new leaf and an earlier leaf.
C. It carries the application number and submission type for the regional XML.
D. It groups Module 4.2/5.3 study documents by study ID and document type.

**정답:** D

**해설**
- D: **STF**는 M4.2/M5.3 시험 문서를 **시험 ID·문서 유형**으로 묶는 XML이다.
- A: 체크섬은 각 leaf의 속성이다. STF의 역할이 아니다.
- B: lifecycle 관계는 operation과 modified-file 속성이 기록한다.
- C: 신청 번호·제출 유형은 지역 XML(us-regional.xml)에 들어간다.

---

### Q09 [A][Domain I] — STF: FDA vs EU
A company prepares the same Module 5 for FDA and for an EU centralised application. The EU publishing vendor proposes omitting STFs from both. Which response is correct?

A. Fine for the EU, but FDA requires STFs, and their omission is a high severity error.
B. Acceptable for both, because STFs are optional under ICH M8 in both regions.
C. Acceptable for FDA but not the EU, because EMA, not FDA, validates study tagging.
D. Required for both, because the EU makes STFs mandatory for Module 5 as FDA does.

**정답:** A

**해설**
- A: STF는 **FDA 요구, EU 선택**이다. FDA에서 STF 누락은 **high severity** 오류다.
- B: FDA는 STF를 요구한다.
- C: 방향이 반대다. FDA가 STF를 요구한다.
- D: EU는 STF가 선택이다. 지역이 뒤바뀌었다.

---

### Q10 [An][Domain I] — v3.2.2 vs v4.0
Which statement best captures the technical difference between eCTD v3.2.2 and v4.0?

A. v4.0 replaces PDFs with structured data, so study reports are no longer submitted as documents.
B. v4.0 keeps the v3.2.2 backbone but adds a second XML file for regional data.
C. v3.2.2 already allowed document reuse; v4.0 mainly adds new Module 1 sections.
D. v3.2.2 is a document-centred backbone; v4.0 is an HL7 RPS message allowing document reuse.

**정답:** D

**해설**
- D: v3.2.2는 **문서 중심 백본**(sequence마다 전체 구조 반복, 재사용 불가)이다. v4.0은 **HL7 RPS 메시지**로 **문서 재사용**, keyword/controlled vocabulary, 양방향 통신, 그룹 제출을 지원한다.
- A: 교과서가 든 v4.0의 차이는 메시지 구조와 재사용이다. 문서 제출을 없앤다는 근거는 없다.
- B: v4.0은 다른 기술이다. v3.2.2 백본에 파일을 더한 것이 아니다.
- C: 재사용 불가가 v3.2.2의 한계다.

---

### Q11 [R][Domain I] — v4.0 basis
eCTD v4.0 is built on which messaging standard?

A. CDISC SDTM with define.xml metadata.
B. HL7 Structured Product Labeling (SPL).
C. HL7 Regulated Product Submission (RPS).
D. ICH E2B(R3) individual case safety report messages.

**정답:** C

**해설**
- C: v4.0은 **HL7 RPS** 메시지 기반이다(ICH M8).
- A: SDTM·define.xml은 study data 표준이다.
- B: SPL은 HL7 기반이지만 라벨 형식이다(US Module 1.14).
- D: E2B(R3)는 ICSR 표준이다.

---

### Q12 [An][Domain V] — why migrate, status on the reference date
A regulatory operations lead must brief management on 1 September 2026 about eCTD versions. Which summary is accurate?

A. v4.0 offers reuse and two-way communication; on that date FDA requires v4.0 for new applications while the EU still uses v3.2.2.
B. v4.0 offers reuse, controlled vocabulary and two-way communication; on that date v3.2.2 remains the standard in both regions.
C. v4.0 offers reuse and grouped submission; on that date both regions have retired v3.2.2 for new applications.
D. v4.0 mainly cuts file size; on that date the EU requires v4.0 for centralised MAAs while FDA still accepts v3.2.2.

**정답:** B

**해설**
- B: v4.0의 장점은 **문서 재사용·keyword/controlled vocabulary·양방향 통신·그룹 제출**이고, 2026-09 기준 **양쪽 다 v3.2.2가 표준**, v4.0은 선택이다.
- A: FDA는 2024-09-16부터 v4.0을 **수용**할 뿐 요구하지 않는다.
- C: 어느 지역도 기준일에 v3.2.2를 폐지하지 않았다.
- D: EU CAP v4.0은 2025-12-22 선택, 의무는 2028 Q1이다.

---

### Q13 [R][Domain II] — regional vs common modules
How is an eCTD divided between regional and harmonised content?

A. Module 1 follows ICH M4; Modules 2 to 5 follow each authority's specification.
B. Modules 1 and 2 are regional under each authority's rules; Modules 3 to 5 follow ICH M4.
C. Module 3 is regional because GMP rules differ; the other modules follow ICH M4.
D. Module 1 is regional under each authority's rules; Modules 2 to 5 follow ICH M4.

**정답:** D

**해설**
- D: **Module 1은 지역**(각 당국 사양), **M2–M5는 공통**(ICH M4)이다.
- A: 방향이 뒤바뀌었다.
- B: Module 2(요약)도 공통이다.
- C: Module 3(품질)은 M4Q 공통 구조다.

---

### Q14 [A][Domain IV] — one source for FDA and EMA
A company wants to file the same quality and clinical content with FDA and EMA from one source. Which plan reflects how the eCTD is meant to be reused?

A. Reuse everything except the cover letter, since validation criteria are harmonised.
B. Reuse Module 1 and Module 2; rebuild Modules 3 to 5 under each region's specification.
C. Reuse Modules 2 to 5; build a regional Module 1, backbone and sequence history for each.
D. Share one backbone and one sequence history, with both Module 1 sets in a single sequence.

**정답:** C

**해설**
- C: **M2–M5는 재사용**하고 **Module 1·지역 사양·validation·sequence 이력은 지역별**이다. 같은 leaf를 쓰되 백본은 지역별로 만든다.
- A: validation criteria는 지역별이다(FDA criteria, EU criteria).
- B: 재사용되는 쪽은 M2–M5다. Module 1이 지역 부분이다.
- D: 각 당국은 별도 lifecycle을 갖는다. 백본을 공유하지 않는다.

---

### Q15 [An][Domain V] — what must differ between regions
A publishing team lists items that will differ between its US and EU eCTDs for the same product. Which item does NOT belong on that list?

A. The regional requirement: US patent information versus EU PIP compliance.
B. The environmental document location: US 1.12.14 versus EU 1.6.
C. The sequence history, since each authority holds a separate lifecycle.
D. The Module 3 quality content, as the CTD quality structure is regional.

**정답:** D

**해설**
- D: Module 3 품질 내용은 **M4 공통 구조**라 재사용된다. 다를 항목이 아니다.
- A: 미국 특허 정보(1.3.5) vs EU 소아(1.10, PIP compliance)는 지역 요구 문서 차이다.
- B: 환경 문서는 미국 **1.12.14**, EU **1.6(ERA)**로 위치가 다르다.
- C: sequence 이력은 당국마다 별도다.

---

### Q16 [R][Domain I] — M8 vs M4
Which pairing of ICH guidelines with their roles is correct?

A. M4 defines the eCTD backbone; E2B(R3) defines Module 1 for each region.
B. M4 defines the CTD content structure; M8 defines the eCTD specification.
C. M8 defines the CTD content structure; M4 defines the eCTD specification.
D. M8 defines Module 1 for each region; M4 defines the regional validation criteria.

**정답:** B

**해설**
- B: **M4 = CTD 구조**, **M8 = eCTD 사양**(v3.2.2, v4.0)이다.
- A: 백본은 M8이고, Module 1은 각 당국 사양이다.
- C: 역할이 뒤바뀌었다.
- D: Module 1과 validation criteria는 지역 당국이 정한다.

---

### Q17 [R][Domain I] — statutory basis
What gives FDA the authority to require submissions in a specified electronic format?

A. FD&C Act section 745A(a), added to the Act by FDASIA 2012 section 1136.
B. ICH M8, which binds FDA once adopted as a final ICH guideline.
C. 21 CFR Part 11, which mandates electronic submission of regulatory records generally.
D. The PDUFA commitment letter, which sets eCTD as a performance goal.

**정답:** A

**해설**
- A: **FD&C 745A(a)**(FDASIA 2012 §1136)가 guidance로 전자 형식을 **의무화**할 권한을 준다.
- B: ICH 사양은 형식을 정할 뿐 미국 내 의무는 745A(a)와 guidance로 생긴다.
- C: Part 11은 전자기록·전자서명이 신뢰받기 위한 요건이다. 전자 제출을 강제하는 근거가 아니다.
- D: 교과서상 의무의 근거는 법률(745A(a))이다.

---

### Q18 [R][Domain I] — first mandatory date
From what date was eCTD mandatory for NDAs, ANDAs and BLAs?

A. 2017-05-05
B. 2016-12-17
C. 2018-05-05
D. 2019-05-05

**정답:** A

**해설**
- A: **NDA·ANDA·BLA 2017-05-05**다.
- B: 2016-12-17은 CDISC study data 의무의 시험 시작 기준일이다.
- C: 2018-05-05는 상업 IND·DMF(Type III 제외)다.
- D: 2019-05-05는 Type III DMF다.

---

### Q19 [A][Domain II] — paper IND vs paper NDA
In 2026 a university investigator submits a paper IND for a non-commercial research study. In the same month a company submits its NDA on paper because its publishing vendor missed a deadline. What happens to each submission?

A. Both are refused to file, because eCTD has been mandatory for research and commercial INDs alike since 2018.
B. The NDA is received but refused to file; the IND is accepted, since research INDs are exempt.
C. The research IND can be accepted, being exempt; the NDA is treated as not received.
D. Both are received, because FDA can request conversion to eCTD within the review period.

**정답:** C

**해설**
- C: 비상업(research) IND는 **eCTD 면제**(전자 권장)다. NDA는 **2017-05-05부터 의무**라 비eCTD는 745A(a)에 따라 **"제출되지 않은 것"** 이다.
- A: research IND는 면제이고, 형식 미준수의 결과는 RTF가 아니라 미접수다.
- B: NDA는 접수 자체가 안 된다. RTF로 가는 단계에 이르지 않는다.
- D: 형식 미준수 제출은 접수되지 않는다. 사후 전환 절차는 근거가 없다.

---

### Q20 [An][Domain II] — "not received" logic
Why does section 745A(a) treat a non-compliant electronic format as "not received" rather than as a filing deficiency?

A. Refuse-to-file is limited to clinical and safety content, so FDA needed a separate legal route for handling format defects.
B. Format is a condition of existence: paper or mixed submissions cannot enter the review system, and non-receipt is the clearest enforcement.
C. Format defects are minor, so FDA avoids spending a 60-day filing review on them and returns the submission to the sponsor unopened.
D. Non-receipt lets FDA collect the user fee immediately while deferring scientific review until a compliant version arrives.

**정답:** B

**해설**
- B: 745A(a)는 형식을 filing 결함이 아니라 **존재 요건**으로 둔다. 종이·혼합 제출은 심사 시스템에 들어올 수 없고, 강제하려면 "접수 안 됨"이 가장 명확하다.
- A: 교과서가 든 이유가 아니다. RTF 사유의 범위를 이렇게 제한하는 근거는 없다.
- C: 결함이 사소해서가 아니다. 형식이 접수의 전제이기 때문이다.
- D: 수수료와 연결된 설명은 교과서 어디에도 없다.

---

### Q21 [A][Domain IV] — DMF types and dates
A drug manufacturer references three supplier DMFs: a Type II drug substance DMF, a Type IV excipient DMF and a Type III packaging DMF. From when did each have to be in eCTD format?

A. Type II and Type IV from 2018-05-05; Type III from 2019-05-05.
B. Each of the three from 2018-05-05, the same date as commercial INDs.
C. Type II and Type IV from 2017-05-05; Type III from 2018-05-05.
D. Type II from 2018-05-05; Type III and Type IV from 2019-05-05.

**정답:** A

**해설**
- A: DMF는 **Type III를 제외하고 2018-05-05**, **Type III는 2019-05-05**다.
- B: Type III는 한 해 늦은 2019-05-05다.
- C: 2017-05-05는 NDA·ANDA·BLA 날짜다.
- D: Type IV도 2018-05-05 대상이다. 늦춰진 것은 Type III뿐이다.

---

### Q22 [A][Domain IV] — commercial IND
A biotech company plans its first commercial IND for a small-molecule candidate. Its consultant suggests a paper submission because "INDs are exempt" and the eCTD can wait for the NDA. Which correction is right?

A. Commercial INDs need eCTD when they include CDISC datasets from studies started after 2017-12-17.
B. Commercial INDs have required eCTD since 2018-05-05; only non-commercial research INDs are exempt.
C. Commercial INDs have required eCTD since 2017-05-05, the same date as NDAs and BLAs.
D. INDs are exempt until the first Phase 3 protocol, after which eCTD becomes mandatory.

**정답:** B

**해설**
- B: **상업 IND는 2018-05-05부터 eCTD 의무**다. 면제는 **비상업(research) IND**뿐이다.
- A: 2017-12-17은 상업 IND의 study data 기준이다. eCTD 의무와 별개다.
- C: 2017-05-05는 NDA·ANDA·BLA 날짜다.
- D: 개발 단계에 따른 면제 규정은 없다. 상업 여부가 기준이다.

---

### Q23 [A][Domain V] — date arithmetic
Counting from the NDA/ANDA/BLA eCTD mandate, how long after it did the Type III DMF mandate take effect?

A. 24 months
B. 12 months
C. 18 months
D. 36 months

**정답:** A

**해설**
- A: 2017-05-05 → 2019-05-05, **24개월**이다.
- B: 12개월은 상업 IND·DMF(Type III 제외) 의무(2018-05-05)까지의 간격이다.
- C·D: 교과서 날짜로 나오지 않는 간격이다.

---

### Q24 [R][Domain II] — CDISC trigger
For NDAs, BLAs and ANDAs, which studies must use standardised (CDISC) study data?

A. Studies started after 2017-12-17.
B. Studies submitted after 2017-05-05.
C. Studies started after 2016-12-17.
D. Studies completed after 2016-12-17.

**정답:** C

**해설**
- C: NDA/BLA/ANDA는 **2016-12-17 이후 시작**된 시험이다.
- A: 2017-12-17 이후 시작은 상업 IND 기준이다.
- B: 2017-05-05는 eCTD 형식 의무일이다. study data 기준이 아니다.
- D: 기준은 시작일이다. 종료일이 아니다.

---

### Q25 [A][Domain IV] — SEND for a GLP study
A GLP repeat-dose toxicology study supporting a commercial IND started after 2017-12-17. The CRO offers PDF tables and says electronic datasets would add cost. What should the sponsor require?

A. PDF tables are sufficient, because standardised data are limited to clinical studies.
B. SDTM datasets, because SDTM covers both clinical and nonclinical tabulations.
C. ADaM analysis datasets, because nonclinical summaries are analysis outputs.
D. SEND datasets with define.xml, because the study started after the IND trigger date.

**정답:** D

**해설**
- D: 상업 IND는 **2017-12-17 이후 시작** 시험부터 CDISC 의무이고, 비임상 표준은 **SEND**(+ define.xml)다.
- A: SEND가 비임상 표준이다. 임상에만 적용되지 않는다.
- B: SDTM은 임상 표준이다. 비임상은 SEND다.
- C: ADaM은 임상 분석 데이터 표준이다.

---

### Q26 [R][Domain II] — data standards mapping
Which mapping of CDISC standards to data types is correct?

A. SDTM for analysis, ADaM for clinical tabulation, SEND for safety reports.
B. SDTM for clinical tabulation, ADaM for analysis, SEND for nonclinical.
C. SDTM for nonclinical, ADaM for clinical tabulation, SEND for analysis.
D. SDTM for clinical tabulation, ADaM for nonclinical, SEND for analysis.

**정답:** B

**해설**
- B: **SDTM = 임상**, **ADaM = 분석**, **SEND = 비임상**이다. 버전은 Data Standards Catalog를 따른다.
- A·C·D: 역할을 섞었다. 안전성 보고는 E2B(R3)이고 CDISC 데이터셋이 아니다.

---

### Q27 [A][Domain II] — high severity error
An NDA sequence fails FDA validation with a high severity error for a missing STF on a Module 5 study. The team had planned around a PDUFA date counted from the transmission day. What follows?

A. The sequence is received with a deficiency notice, and the STF is added in the next sequence.
B. The submission is rejected; fix the STF and resubmit using the next sequence number in the lifecycle.
C. Rejected; the filing clock does not start; fix the STF and resubmit under the same sequence number.
D. The submission is received but refused to file, and the 60-day filing review restarts after correction.

**정답:** C

**해설**
- C: **High = 거부(미접수)**, **filing/PDUFA 시계 미시작**이다. STF를 만들고 **같은 sequence 번호로 재제출**한다.
- A: 접수 후 다음 sequence에서 고치는 것은 medium이다.
- B: 거부된 sequence는 존재하지 않는 것으로 보므로 같은 번호를 쓴다.
- D: 거부는 접수 전 단계다. RTF가 아니다.

---

### Q28 [A][Domain II] — medium severity error
A sponsor's IND sequence triggers a medium severity validation finding on a document attribute. The sponsor wants to know whether the submission counts. How is it handled?

A. The submission is received, but the PDUFA clock is paused until the finding is fixed.
B. The submission is rejected and must be resubmitted under the same sequence number.
C. The submission is received, the finding is noted, and it is fixed in a later sequence.
D. The submission is rejected unless the sponsor holds a pre-assigned application number.

**정답:** C

**해설**
- C: **Medium = 접수되지만 지적**, 다음 sequence에서 수정한다.
- A: 교과서는 medium에 시계 정지를 두지 않는다.
- B: 거부·같은 번호 재제출은 high다.
- D: pre-assigned number는 제출 전 표준 절차일 뿐 medium 판정과 관계없다.

---

### Q29 [An][Domain II] — why the same sequence number
Why does a sponsor reuse the same sequence number after a high severity rejection?

A. FDA archives the rejected sequence and expects the correction to replace it by lifecycle operation.
B. Reusing the number keeps the original submission date as the receipt date for PDUFA.
C. The rejected sequence is treated as never having existed, so the number is still unused.
D. Sequence numbers are assigned by FDA and cannot be changed by the sponsor.

**정답:** C

**해설**
- C: 거부된 sequence는 **존재하지 않는 것**으로 취급하므로 그 번호가 아직 비어 있다.
- A: 거부된 sequence는 lifecycle에 들어가지 않는다. replace로 고칠 대상이 없다.
- B: 거부는 미접수라 접수일이 생기지 않는다. 시계는 재제출이 접수될 때 시작한다.
- D: sequence 번호는 신청자가 0000부터 누적해 붙인다.

---

### Q30 [A][Domain V] — 12-week checklist
Twelve weeks before a US NDA, the operations lead drafts an eCTD checklist with the publishing vendor. One item must be settled from the Technical Conformance Guide before documents are finalised. Which item is it?

A. The EU validation criteria for the parallel MAA.
B. The forward compatibility date for existing applications.
C. Financial disclosure thresholds for clinical investigators.
D. Granularity and leaf title conventions for the documents.

**정답:** D

**해설**
- D: 12주 체크의 첫 항목이 **granularity·leaf 제목 규칙(Technical Conformance Guide)** 이다.
- A: EU validation criteria는 EU 문서다.
- B: forward compatibility(2026-10-16)는 v4.0 일정이다. TCG 항목이 아니다.
- C: 재무 공개 임계값은 21 CFR Part 54다.

---

### Q31 [A][Domain V] — ESG account timing
A first-time US applicant plans its NDA. When should it set up its ESG NextGen account and send a test submission?

A. After the first high severity rejection, since ESG accounts are created on FDA request.
B. After FDA assigns an application number in response to the sponsor's first sequence.
C. Not needed, because first-time applicants submit through the CDER NextGen Portal.
D. During pre-submission work, so the test and acknowledgment precede filing.

**정답:** D

**해설**
- D: 12주 체크에 **ESG NextGen 계정·테스트 제출**과 **수령 확인(ACK)** 이 들어 있다. 제출 전에 끝낸다.
- A: 계정이 없으면 첫 제출부터 막힌다. 거부를 기다릴 이유가 없다.
- B: application number는 **제출 전에 pre-assigned**로 요청하는 것이 표준이다.
- C: CDER NextGen Portal은 비eCTD 제출(research IND 등)용이다. NDA는 eCTD → ESG NextGen이다.

---

### Q32 [R][Domain II] — examples of high severity
Which listed problem is given as an example of a high severity eCTD validation error?

A. A leaf title that differs slightly from the TCG style.
B. An incorrect application number in the regional XML.
C. A cover letter that omits the contact telephone number.
D. A PDF bookmark that points to the wrong page.

**정답:** B

**해설**
- B: 교과서의 high 예시는 **백본 손상, 잘못된 application number, STF 누락**이다.
- A·C·D: 교과서의 high 예시 목록에 없다. 이런 문제를 high로 분류할 근거가 없다.

---

### Q33 [R][Domain I] — ESG NextGen
What changed at the FDA Electronic Submissions Gateway on 2025-04-14?

A. eCTD v4.0 became mandatory for new applications sent through the gateway.
B. The ESG NextGen Unified Submission Portal replaced WebTrader.
C. The AS2 connection was retired and replaced by the CDER NextGen Portal.
D. CBER moved its submissions from the ESG to a separate biologics gateway.

**정답:** B

**해설**
- B: **2025-04-14 ESG NextGen USP가 WebTrader를 대체**했다. AS2는 병행된다.
- A: v4.0은 기준일 시점에도 선택이다.
- C: AS2는 병행한다. CDER NextGen Portal은 비eCTD 제출 통로다.
- D: CBER도 CDER와 같은 eCTD + ESG NextGen을 쓴다.

---

### Q34 [A][Domain IV] — non-eCTD route
An academic investigator holds a research IND and prefers not to build an eCTD for a small protocol amendment. Her institution asks which FDA channel accepts such non-eCTD submissions. Which is it?

A. The ESG NextGen USP, which accepts scanned paper pages as eCTD sequences.
B. The CDER NextGen Portal, which takes non-eCTD submissions like research INDs.
C. FAERS, which accepts IND correspondence alongside safety reports.
D. The EMA eSubmission Gateway, which FDA shares with academic sponsors.

**정답:** B

**해설**
- B: **CDER NextGen Portal**이 비eCTD 제출(research IND 등)을 받는다.
- A: ESG NextGen은 eCTD 통로다. 스캔본이 eCTD sequence가 되지 않는다.
- C: FAERS는 E2B(R3) 시판 후 ICSR을 받는다.
- D: EMA Gateway는 EU CAP 제출용이다.

---

### Q35 [R][Domain I] — CP milestone
Under the HMA eSubmission Roadmap, eCTD became mandatory for new centralised MAAs in which year?

A. 2017
B. 2015
C. 2010
D. 2018

**정답:** C

**해설**
- C: **CP 신규 MAA 2010**이다.
- A: 2017-01-01은 MRP 신규 MAA다.
- B: 2015-07-01은 DCP 신규 MAA다.
- D: 2018은 DCP/MRP 전체(01-01)와 NP 신규 MAA(07-01)다.

---

### Q36 [A][Domain I] — DCP vs MRP
A company files a new MAA by the decentralised procedure and, separately, a new MAA by the mutual recognition procedure. Which pair of dates made eCTD mandatory for these new MAAs?

A. DCP 2017-01-01; MRP 2015-07-01.
B. DCP 2015-07-01; MRP 2018-01-01.
C. DCP 2018-07-01; MRP 2017-01-01.
D. DCP 2015-07-01; MRP 2017-01-01.

**정답:** D

**해설**
- D: **DCP 신규 MAA 2015-07-01**, **MRP 신규 MAA 2017-01-01**이다.
- A: 두 날짜가 뒤바뀌었다.
- B: 2018-01-01은 DCP/MRP **모든 규제 활동**이다. 신규 MAA 날짜가 아니다.
- C: 2018-07-01은 NP 신규 MAA다.

---

### Q37 [A][Domain V] — DCP/MRP lifecycle activity
A company holds a product authorised by MRP before the roadmap took effect. When did eCTD become mandatory for its variations and other regulatory activities in MRP?

A. 2017-01-01, together with new MRP MAAs filed that year.
B. 2018-01-01, for all DCP/MRP activities.
C. 2015-07-01, together with new DCP MAAs filed that year.
D. 2019-01-01, together with national procedures in full.

**정답:** B

**해설**
- B: **DCP/MRP 모든 규제 활동 2018-01-01**이다.
- A: 2017-01-01은 MRP **신규 MAA**에 한한다.
- C: 2015-07-01은 DCP 신규 MAA다.
- D: 2019-01-01은 NP 전체다.

---

### Q38 [A][Domain V] — national procedure
A product authorised only by national procedure in one member state needs a variation. From when has eCTD been mandatory for such national activity, and when for new national MAAs?

A. Variations from 2018-01-01; new national MAAs from 2017-01-01.
B. National activity in full from 2018-07-01; new national MAAs from 2019-01-01.
C. National activity in full from 2019-01-01; new national MAAs from 2018-07-01.
D. National procedures remain outside the roadmap and may use non-eCTD formats.

**정답:** C

**해설**
- C: **NP 신규 MAA 2018-07-01**, **NP 전체 2019-01-01**이다.
- A: 2018-01-01·2017-01-01은 DCP/MRP 단계다.
- B: 두 날짜가 뒤바뀌었다.
- D: NP도 로드맵의 마지막 단계로 포함됐다.

---

### Q39 [R][Domain I] — CESP
What is CESP used for?

A. Submissions to national authorities in DCP, MRP and national procedures.
B. Submission of PSURs for both centrally and nationally authorised products.
C. Submissions of centralised MAAs and variations to EMA.
D. Electronic reporting of individual case safety reports in E2B(R3).

**정답:** A

**해설**
- A: **CESP**는 국가 당국(DCP/MRP/NP) 제출 포털이다.
- B: PSUR은 PSUR Repository다. CESP 제출은 PSUR로 인정되지 않는다.
- C: CAP 제출은 EMA eSubmission Gateway/Web Client다.
- D: ICSR은 EudraVigilance다.

---

### Q40 [A][Domain I] — centralised route
A sponsor is ready to submit a centralised MAA in eCTD. Which channel carries the dossier to EMA?

A. CTIS, which receives dossiers once the clinical programme is complete.
B. The EMA eSubmission Gateway or its Web Client, used for CAP submissions.
C. CESP, which forwards centralised files to EMA and the rapporteurs.
D. IRIS, which handles centralised procedures including MAAs.

**정답:** B

**해설**
- B: CAP 제출(MAA·variation·PSUR 등)은 **EMA eSubmission Gateway / Web Client**다.
- A: CTIS는 임상시험 시스템이다.
- C: CESP는 국가 당국 제출 포털이다.
- D: IRIS는 orphan 지정·scientific advice·PRIME 등 절차 포털이다.

---

### Q41 [A][Domain V] — CAP Type II variation
A regulatory associate prepares a Type II variation for a centrally authorised product. She has the eCTD sequence ready but has not yet created the application form. Which combination of systems is correct?

A. CESP for the eCTD sequence, with a PDF application form in Module 1.2.
B. EudraVigilance for the eCTD sequence, with SPOR generating the variation form.
C. IRIS for the eCTD sequence, with the application form generated in CTIS.
D. EMA Gateway/Web Client for the eCTD, with the form built in PLM eAF.

**정답:** D

**해설**
- D: CAP Type II variation → **Gateway/Web Client**(eCTD) + **PLM eAF**다.
- A: CESP는 국가 당국용이고, EU 신청서는 PLM eAF로 만든다.
- B: EudraVigilance는 ICSR용이다. SPOR는 eAF가 참조하는 마스터데이터다.
- C: IRIS·CTIS는 variation 제출 통로가 아니다.

---

### Q42 [A][Domain IV] — orphan designation
A biotech planning an EU programme for a rare disease wants orphan designation before scientific advice. Through which system is the designation request handled?

A. IRIS
B. CTIS, which handles EU clinical trial applications.
C. CESP
D. EudraGMDP

**정답:** A

**해설**
- A: orphan 지정·scientific advice·PRIME은 **IRIS**다.
- B: CTIS는 임상시험용이다.
- C: CESP는 국가 당국 제출용이다.
- D: EudraGMDP는 GMP/GDP 인증·비준수 정보다.

---

### Q43 [A][Domain III] — serious ICSR in the EU
A marketing authorisation holder receives a serious adverse reaction case for a centrally authorised product. Which system receives the individual case safety report?

A. CTIS, because the product is still under study.
B. The EMA eSubmission Gateway, as an eCTD sequence.
C. EudraVigilance, which receives ICSRs in E2B(R3) format.
D. The PSUR Repository, as part of the next periodic report.

**정답:** C

**해설**
- C: EU ICSR은 **EudraVigilance**(E2B(R3))다.
- A: 시판 제품의 ICSR이다. CTIS는 임상시험 시스템이다.
- B: Gateway는 CAP 제출 통로이고 ICSR은 eCTD로 보내지 않는다.
- D: PSUR Repository는 PSUR용이다. 개별 사례 보고 통로가 아니다.

---

### Q44 [A][Domain III] — Phase 2 CTA
A sponsor will run a Phase 2 trial in several EU member states. Where is the clinical trial application submitted?

A. CTIS, which handles EU clinical trial applications.
B. IRIS, which handles EU clinical trial procedures.
C. EudraVigilance, with the protocol attached to the safety profile.
D. CESP, addressed to each national competent authority.

**정답:** A

**해설**
- A: 임상시험은 **CTIS**다.
- B: IRIS는 orphan·scientific advice·PRIME 등이다.
- C: EudraVigilance는 ICSR용이다.
- D: CESP는 DCP/MRP/NP 신청 제출용이다.

---

### Q45 [R][Domain I] — EudraGMDP
What is EudraGMDP used for?

A. Registration of organisation data under the OMS service.
B. Information on GMP/GDP certificates and non-compliance.
C. Submission of national variations to competent authorities.
D. Electronic application forms that reference SPOR master data.

**정답:** B

**해설**
- B: **EudraGMDP**는 GMP/GDP 인증·비준수 정보다.
- A: 조직 데이터는 SPOR의 OMS다.
- C: 국가 제출은 CESP다.
- D: 웹 신청서는 PLM Portal eAF다.

---

### Q46 [A][Domain I] — eAF and SPOR
A team building an EU MAA application form notices that the manufacturer name and address must be selected from a list rather than typed. A new associate asks why the form works this way. What explains this?

A. IRIS assigns organisation identifiers during orphan designation.
B. The CESP portal validates addresses against EudraGMDP before forwarding.
C. The eAF is a fixed PDF form, and the pick list is a feature of the PDF reader.
D. PLM Portal eAF references SPOR master data; organisations come from OMS.

**정답:** D

**해설**
- D: **PLM Portal eAF는 SPOR 마스터데이터를 참조**하고, 조직은 **OMS**다.
- A: IRIS는 절차 포털이다. 조직 ID를 관리하지 않는다.
- B: CESP는 제출 통로다. eAF의 데이터 참조와 관계없다.
- C: eAF는 구조화 데이터 + PDF를 만드는 웹 양식이다.

---

### Q47 [A][Domain IV] — DCP MAA to 8 member states
A company files a new MAA by the decentralised procedure to 8 member states. How is the eCTD delivered?

A. Through the PSUR Repository, which serves as the common EU dossier store.
B. Through CESP to the national competent authorities concerned.
C. Once through the EMA Gateway, which forwards it to the 8 national authorities.
D. Through IRIS, which coordinates the reference member state.

**정답:** B

**해설**
- B: DCP MAA는 **CESP**로 각 NCA에 보낸다.
- A: PSUR Repository는 PSUR 전용이다.
- C: EMA Gateway는 CAP 제출용이다.
- D: IRIS는 orphan·SA·PRIME 절차용이다.

---

### Q48 [An][Domain I] — 356h vs eAF
What does the contrast between the US Form 356h and the EU eAF reveal?

A. The EU form remains a static PDF in Module 1.2, while the US form is a structured database entry in Module 1.1.
B. The US structures the application form as data, while the EU structures its labelling through the SPL format.
C. Both regions now submit the application form as structured data linked to IDMP.
D. The EU treats the form as data linked to SPOR/IDMP; the US form is a PDF, structuring via SPL and study data.

**정답:** D

**해설**
- D: 356h는 **PDF 서식**(1.1), eAF는 **데이터 입력**(1.2, SPOR 참조)이다. EU는 신청서부터, 미국은 **SPL·study data**부터 구조화한다.
- A: 형식이 뒤바뀌었다.
- B: 지역이 뒤바뀌었다. SPL은 미국 라벨 형식이다.
- C: 356h는 PDF 서식이다.

---

### Q49 [A][Domain V] — EU v4.0 on the reference date
On 1 September 2026 a company preparing a new centralised MAA asks whether it may use eCTD v4.0. Which answer is correct?

A. No; EU v4.0 submission opens when the 2027 Q1 recommendation applies, not before.
B. No; v4.0 is limited to the forward compatibility pilot that started in 2026.
C. Yes, as an option: CAP v4.0 submission opened on 2025-12-22, before that date.
D. Yes, and it must, because v4.0 became mandatory for new CAP MAAs on 2025-12-22.

**정답:** C

**해설**
- C: EU CAP v4.0 **선택 제출은 2025-12-22**로 **기준일 전**이다. 기준일엔 선택 제출이 가능하다.
- A: 2027 Q1은 권고 단계다. 선택은 그 전에 열렸다.
- B: forward compatibility pilot(2026-03~)은 별도 트랙이다. 신규 CAP MAA 선택 제출을 막지 않는다.
- D: 2025-12-22는 선택 시작일이다. 의무는 2028 Q1이다.

---

### Q50 [A][Domain V] — FDA v4.0 acceptance
A US sponsor plans a new NDA in late 2026 and is interested in eCTD v4.0 for document reuse. Its publishing vendor supports both versions. What is FDA's position on the reference date?

A. FDA does not accept v4.0 until the EU makes it mandatory, to keep regions aligned.
B. FDA accepts v4.0 for applications that started in v3.2.2, from 2026-10-16, not new ones.
C. FDA has required v4.0 for new applications since 2024-09-16; v3.2.2 is limited to existing ones.
D. FDA has accepted v4.0 for new applications since 2024-09-16; v3.2.2 is still the standard.

**정답:** D

**해설**
- D: FDA는 **2024-09-16부터 신규 신청 v4.0을 수용**한다. 기준일에도 v3.2.2가 표준, v4.0은 선택이다.
- A: FDA 일정은 EU와 독립적이다.
- B: 2026-10-16은 기존 v3.2.2 신청의 forward compatibility이고 기준일 이후다.
- C: 수용이지 의무가 아니다.

---

### Q51 [An][Domain V] — forward compatibility
A lifecycle manager asks whether, on 1 September 2026, an existing NDA built in v3.2.2 can continue in v4.0 under FDA forward compatibility. How should this be answered?

A. Yes; forward compatibility began with v4.0 acceptance on 2024-09-16.
B. Not applicable; forward compatibility starts 2026-10-16, after that date.
C. Yes, but for applications that FDA has grouped under one number.
D. No; existing applications must stay in v3.2.2 until the EU mandate in 2028.

**정답:** B

**해설**
- B: v3.2.2 **forward compatibility는 2026-10-16**으로 **기준일 이후**다. 기준일 시점 비적용이다.
- A: 2024-09-16은 **신규** 신청 수용일이다.
- C: grouped submission과 forward compatibility는 관계없다.
- D: FDA forward compatibility는 EU 일정과 별개로 2026-10-16이다.

---

### Q52 [R][Domain V] — EU v4.0 mandate
When does the EU timeline make eCTD v4.0 mandatory for centralised applications?

A. 2028 Q1
B. 2025-12-22
C. 2026-10-16
D. 2027 Q1

**정답:** A

**해설**
- A: EU **의무 2028 Q1**이다.
- B: 2025-12-22는 CAP 선택 시작이다.
- C: 2026-10-16은 FDA forward compatibility다.
- D: 2027 Q1은 권고 단계다.

---

### Q53 [An][Domain V] — status on the reference date
On 1 September 2026, which item is mandatory rather than optional or not yet in force?

A. EU eCTD in v3.2.2 across all procedures.
B. Postmarketing ICSRs to FDA in E2B(R3).
C. FDA forward compatibility for v3.2.2 applications.
D. eCTD v4.0 for EU centralised MAAs.

**정답:** A

**해설**
- A: **EU eCTD 전 절차(v3.2.2)** 는 기준일에 의무다(로드맵 마지막 단계 2019-01-01).
- B: 시판 후 ICSR E2B(R3)는 2026-10-01로 기준일 시점 비적용이다.
- C: 2026-10-16으로 기준일 시점 비적용이다.
- D: EU v4.0은 선택이다.

---

### Q54 [R][Domain III] — audit trail
Under 21 CFR Part 11, in which section do computer-generated, time-stamped audit trails appear as a control for closed systems?

A. 11.10
B. 11.70
C. 11.100
D. 11.30

**정답:** A

**해설**
- A: **11.10** 폐쇄 시스템 통제에 시스템 검증·정확한 사본·기록 보호·접근 제한·**audit trail**·운영 점검·권한 확인·교육이 있다.
- B: 11.70은 서명과 기록의 연결이다.
- C: 11.100은 전자서명 일반 요건이다. audit trail은 11.10이다.
- D: 11.30은 개방 시스템 추가 통제다.

---

### Q55 [A][Domain III] — open systems
A company lets external investigators sign trial records through a web system whose access it does not control. The quality unit asks which Part 11 provision adds controls for this situation. Which is it?

A. 11.10, which covers internal validation of closed systems.
B. 11.100(c), which replaces system controls with a certification letter.
C. 11.50, which requires the printed name and date on each signature.
D. 11.30, which adds controls such as encryption and digital signatures.

**정답:** D

**해설**
- D: 통제하지 않는 접근 = 개방 시스템이고, **11.30**이 **암호화·디지털 서명** 같은 추가 통제를 요구한다.
- A: 11.10은 폐쇄 시스템 통제다. 개방 시스템은 11.30이 그 위에 더한다.
- B: 11.100(c) 인증서는 시스템 통제를 대신하지 않는다.
- C: 11.50은 서명 표시다. 개방 시스템 통제가 아니다.

---

### Q56 [R][Domain III] — signature manifestation and linking
Which pairing of Part 11 sections and requirements is correct?

A. 11.50: link signatures to records; 11.70: show name, date and meaning.
B. 11.50: certification letter sent to FDA; 11.70: ID and password controls.
C. 11.50: encryption for open systems; 11.70: audit trail for closed systems.
D. 11.50: show name, date and meaning; 11.70: link signatures to records.

**정답:** D

**해설**
- D: **11.50 = 서명 표시(이름·일시·의미)**, **11.70 = 기록과의 연결**이다.
- A: 둘이 뒤바뀌었다.
- B: 인증서는 11.100(c), ID/비밀번호는 11.100–300 범위다.
- C: 암호화는 11.30, audit trail은 11.10이다.

---

### Q57 [A][Domain III] — 11.100(c) certification
A sponsor has validated a signing system and is about to start using electronic signatures for records it submits to FDA. What must it send to FDA before first use?

A. A list of users with their passwords, under the ID controls.
B. A certification (letter of non-repudiation) under 11.100(c), sent before use.
C. An audit trail export from the first month of use, under 11.10.
D. A validation summary for the signing software, filed in Module 1.

**정답:** B

**해설**
- B: 전자서명 사용 전 **11.100(c) 인증서(non-repudiation letter)** 를 제출한다.
- A: 비밀번호를 FDA에 내는 규정은 없다. ID/비밀번호는 11.100–300 범위의 통제 대상이다.
- C: audit trail은 유지 요건이다. 사전 제출 대상이 아니다.
- D: 검증은 11.10 요건이지만 사전 제출 대상은 인증서다.

---

### Q58 [A][Domain III] — unvalidated e-signature tool
IT proposes an unvalidated commercial e-signature tool for signing batch records and clinical documents. These records are required by 21 CFR 211 and 312. How should regulatory respond?

A. Acceptable, because the 2003 guidance removed Part 11 requirements for commercial off-the-shelf signing software.
B. Acceptable once the 11.100(c) letter is sent to FDA, since that letter takes the place of system validation.
C. Not acceptable unless validation, audit trail, signature linking, unique IDs and signature meaning are shown.
D. Acceptable if a paper copy is printed and wet-signed at the end of each year.

**정답:** C

**해설**
- C: predicate rule(211·312) 기록이면 **검증·audit trail·서명-기록 연결·고유 ID·서명 의미 표시·11.100(c)** 가 필요하다. 미검증 도구는 이를 보이지 못한다.
- A: 2003 guidance는 범위를 predicate rule 기록으로 좁혔을 뿐이다. 이 기록은 그 안에 있다.
- B: 인증서는 시스템 통제를 대신하지 않는다.
- D: 교과서에 이런 대체 경로는 없다. 전자 기록으로 유지하면 Part 11 요건이 걸린다.

---

### Q59 [An][Domain III] — 2003 Scope and Application
Why did FDA issue the 2003 Part 11 Scope and Application guidance, and what did it change?

A. Part 11 had been withdrawn; the guidance replaced it with voluntary data integrity standards.
B. Part 11 had been too lax; the guidance extended audit trail duties to each electronic record a regulated firm creates.
C. Part 11 was applied too broadly; enforcement discretion focused it on predicate-rule records, risk-based.
D. Part 11 had been rewritten; the guidance explained the new regulation text that FDA adopted in 2003.

**정답:** C

**해설**
- C: 1997 Part 11이 모든 전자기록에 과도 적용돼 비용 폭증·전자화 저해가 있었다. 2003 guidance는 **집행 재량**으로 **predicate rule 기록**에 집중하고 검증·audit trail·보존·사본을 **위험 기반**으로 했다.
- A: Part 11은 유지된다. 데이터 무결성 가이드는 이후 보완이다.
- B: 방향이 반대다. 범위를 좁혔다.
- D: 규정 문구는 그대로다. 기대치만 낮아졌다.

---

### Q60 [An][Domain III] — record outside predicate rules
A team keeps an internal spreadsheet for meeting room bookings that no FDA regulation requires. An auditor asks whether it needs Part 11 validation. Under the 2003 Scope and Application approach, how does Part 11 apply?

A. Outside its focus, since Part 11 is enforced for predicate-rule records.
B. Fully, because shared spreadsheets are open systems that need 11.30 encryption.
C. Fully, because Part 11 covers each electronic record that a regulated firm keeps.
D. It applies once the spreadsheet is printed and signed by hand.

**정답:** A

**해설**
- A: 2003 guidance는 Part 11을 **predicate rule이 요구하는 기록**에 집중시켰다. 예약표는 그런 기록이 아니다.
- B: 개방 시스템 여부는 접근 통제의 문제다. 범위 판단과 별개다.
- C: 그것이 2003 guidance가 바로잡은 과도 적용이다.
- D: 인쇄·수기 서명은 적용 범위를 정하지 않는다.

---

### Q61 [A][Domain IV] — first IND for an EV product
A company's first US IND for an extracellular vesicle product is due in 3 months. The team assumes a paper IND is fine because the product is novel. What should regulatory advise?

A. Commercial INDs need eCTD since 2018-05-05; prepare one and open the ESG NextGen account now.
B. Submit through the CDER NextGen Portal, which serves as the route for first-time commercial sponsors.
C. Novel biologics go to CBER, which accepts paper INDs until the first BLA is planned.
D. A paper IND is acceptable because cell and EV products fall outside section 745A(a).

**정답:** A

**해설**
- A: **상업 IND는 2018-05-05부터 eCTD 의무**다. eCTD로 준비하고 **ESG NextGen 계정**을 지금 연다.
- B: CDER NextGen Portal은 비eCTD 제출(research IND 등)용이다.
- C: CBER도 CDER와 같은 eCTD + ESG NextGen 체계다.
- D: 745A(a) 의무에 제품 유형 예외는 교과서에 없다. 면제는 research IND뿐이다.

---

### Q62 [A][Domain IV] — supplier DMF format
For the same EV IND, a packaging supplier says its Type III DMF is still on paper and that packaging DMFs were never in scope. Why is this a problem for the sponsor?

A. Type III DMFs have required eCTD since 2017-05-05, together with NDAs, ANDAs and BLAs.
B. It is not a problem, because Type III DMFs remain exempt from the eCTD mandate.
C. Type III DMFs need eCTD since 2019-05-05; a non-eCTD DMF can block the reference.
D. It matters at the BLA stage, not now, because INDs cannot reference DMFs.

**정답:** C

**해설**
- C: **Type III DMF는 2019-05-05부터 eCTD**다. 비eCTD DMF면 참조가 막히니 계약으로 확인한다.
- A: 2017-05-05는 NDA·ANDA·BLA 날짜다.
- B: Type III도 의무다. 다른 DMF보다 한 해 늦었을 뿐이다.
- D: 교과서는 IND 단계에서 DMF 참조를 계약으로 확인하라고 한다.

---

### Q63 [A][Domain IV] — Module 1 region: environment
A team adapting a US dossier for an EU centralised MAA must move the environmental document while reusing Modules 2 to 5. Where does it sit in each region's Module 1?

A. US 1.6; EU 1.12.14.
B. US 1.12.14; EU 1.6.
C. US 1.13; EU 1.6.
D. US 1.12.14; EU 1.8.

**정답:** B

**해설**
- B: 환경 문서는 **미국 1.12.14**, **EU 1.6(ERA)** 이다.
- A: 번호가 뒤바뀌었다.
- C: 미국 1.13은 annual report다.
- D: EU 1.8은 PV 시스템 요약·RMP다.

---

### Q64 [R][Domain II] — EU Module 1 sections
Which EU Module 1 mapping is correct?

A. 1.2 cover letter; 1.3 eAF; 1.8 paediatric information and PIP compliance.
B. 1.2 eAF; 1.3 product information; 1.8 PV system summary and RMP.
C. 1.2 eAF; 1.3 orphan information; 1.8 expert information.
D. 1.2 product information; 1.3 ERA; 1.8 clinical trial information.

**정답:** B

**해설**
- B: EU **1.2 eAF**, **1.3 product information**(SmPC·라벨·PL), **1.8 PV 시스템 요약·RMP**다.
- A: cover letter는 1.0, 소아는 1.10이다.
- C: orphan은 1.7, 전문가 정보는 1.4다.
- D: ERA는 1.6, 임상시험 정보는 1.9다.

---
