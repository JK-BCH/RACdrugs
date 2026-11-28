# 문제은행 — Ch.34 (2/2) 시판 후 감시·약물감시: 세부 규정·상황형

> **근거:** `textbook/Ch34.md` + `cards/Ch34_1.md`·`cards/Ch34_2.md` 검증 메모(21 CFR 312.32·312.33, 314.80/600.80, Part 4 Subpart B·4.103 5 calendar days, FD&C 505(o)(3)·505(o)(4)·505-1(a)(2) 120일, CTR Arts 41–44·52–54, Art 107(3), GVP VI·XV·XVI Rev 3, IR 520/2012 Art 12, Art 57 DB 단독 통지(2016-02-01~), E2B(R3)·AEMS 날짜, 일본 15/30·재심사 8년). 새 숫자 없음. 날짜 계산은 위 상수로만 했다.
> **형식:** 영문 시나리오 → 영문 선지 A~D → 정답 → 한국어 해설. 태그 `[R]/[A]/[An]` + Domain. 기준일 2026-09-01.
> **작성:** 2026-11-27. 64문항.

---

### Q01 [A][Domain III] — fatal stroke, background-common event
In an ongoing US Phase 3 trial, a site reports a fatal stroke in a 70-year-old subject. Stroke is not listed in the Investigator's Brochure, and strokes are common in this age group. How should the sponsor decide on IND safety reporting?

A. Report within 15 days, because the investigator's causality opinion alone determines reportability.
B. Report within 7 days, because any fatal event not listed in the IB is reportable without further assessment.
C. Do not report, because strokes in elderly subjects are excluded from IND safety reporting by regulation.
D. Judge reasonable possibility from aggregate analysis against the control arm before deciding on a report.

**정답:** D

**해설**
- D: 312.32의 suspected adverse reaction은 **reasonable possibility**가 있어야 한다. 배경 질환에서 흔한 사건(70세 뇌졸중)은 위약·대조군 대비 **집계 분석**(2012·2021 guidance)으로 판단하고, 가능성이 있으면 치명·예상 밖이므로 7일 보고다.
- A: 시험자 의견만으로 정하지 않는다. sponsor가 집계 근거로 판단하고, 치명이면 시계는 15일이 아니라 7일이다.
- B: 예상 밖·치명만으로는 부족하다. reasonable possibility 판단이 먼저다.
- C: 배제 규정은 없다. 가능성이 없다고 판단해도 DSUR·집계 모니터링에 기록한다.

---

### Q02 [A][Domain III] — single-case type, day count
A sponsor learns on June 2 of a fatal acute liver failure in a Phase 2 subject with no alternative cause. Liver injury is not in the IB. By when is the initial IND safety report due to FDA?

A. June 9, but after the data monitoring committee has first unblinded the full treatment arm.
B. June 30, at the next IND annual report, because a single case cannot establish causality.
C. June 9, as a 7-day report that may be made by telephone, fax or E2B and then completed.
D. June 17, as a 15-day report, because the 7-day clock is reserved for life-threatening events.

**정답:** C

**해설**
- C: 간 손상은 **단일 사례로도** reasonable possibility를 둘 수 있는 유형이다. 치명·예상 밖이므로 **7일** 초기 보고(전화·팩스·E2B) 후 완결한다. June 2 + 7일 = June 9.
- A: 맹검 해제는 **보고 사례만** 한다. 군 전체 해제는 요구되지 않는다.
- B: 단일 사례 유형은 연례 보고로 미루지 않는다.
- D: 7일 시계는 **치명 또는 생명위협**에 적용된다. 사망은 7일이다.

---

### Q03 [R][Domain III] — what is NOT a 15-day IND trigger
Which of the following is NOT a trigger for a 15-day IND safety report under 21 CFR 312.32?

A. A clinically important increase in the rate of serious suspected adverse reactions.
B. A serious suspected adverse reaction that is already listed in the IB at the observed severity.
C. A serious and unexpected suspected adverse reaction that is not fatal or life-threatening.
D. Findings from animal or in vitro studies that suggest a significant risk for human trial subjects.

**정답:** B

**해설**
- B: IB에 같은 중증도로 기재된 사건은 **예상된** 사건이라 15일 개별 보고 대상이 아니다. 발생률이 임상적으로 중요하게 늘면 그때 보고한다.
- A: serious SAR 발생률의 임상적으로 중요한 증가도 15일이다.
- C: serious·예상 밖 SAR은 15일 보고 대상이다.
- D: 동물·시험관 소견이 중대 위험을 시사하면 15일이다.

---

### Q04 [A][Domain III] — EU CTR fatal SUSAR
A fatal SUSAR occurs in an EU trial authorised under the Clinical Trials Regulation. Expectedness was assessed against the reference safety information in the IB. What is the sponsor's reporting obligation?

A. Report to EudraVigilance (CT module) within 7 days, with follow-up within a further 8 days.
B. Report to EudraVigilance within 15 days, because the 7-day clock is a US IND rule with no CTR equivalent.
C. Report to the national competent authority within 15 days, using the SmPC as the expectedness reference.
D. Report through CTIS in the annual safety report, because single fatal cases are aggregated.

**정답:** A

**해설**
- A: CTR **Art 42**: 치명·생명위협 SUSAR은 sponsor가 **EVCTM**으로 **7일** 내, 이후 **8일** 내 완결한다. 예상성은 **RSI** 기준이다.
- B: EU에도 7일 시계가 있다. 15일은 치명·생명위협이 아닌 SUSAR이다.
- C: 제출처는 국가별이 아니라 EudraVigilance이고, 예상성 기준은 SmPC가 아니라 RSI다.
- D: Art 43 ASR은 연 1회 집계 보고이고 개별 SUSAR을 대신하지 않는다.

---

### Q05 [R][Domain I] — CTR article mapping
Which pairing of an EU Clinical Trials Regulation provision with its timeline is correct?

A. Art 52 serious breach — 15 days; Art 54 urgent safety measure — 7 days.
B. Art 41 investigator to sponsor — 7 days; Art 42 non-fatal SUSAR — 7 days.
C. Art 53 unexpected event — 7 days; Art 43 annual safety report — twice a year.
D. Art 52 serious breach — 7 days; Art 54 urgent safety measure — 7 days.

**정답:** D

**해설**
- D: **Art 52** serious breach **7일**, **Art 54** urgent safety measure 후 **7일** 내 통지다.
- A: serious breach는 15일이 아니라 7일이다. 15일은 Art 53이다.
- B: Art 41은 시험자→sponsor **즉시**이고, 치명·생명위협이 아닌 SUSAR은 **15일**이다.
- C: Art 53은 **15일**이고, Art 43 ASR은 **연 1회**다.

---

### Q06 [A][Domain III] — reference document in a new-indication trial
A drug approved in the US for hypertension is being studied under IND for heart failure. A serious event occurs that is listed in the USPI but not in the IB reference safety information. Which document determines expectedness for IND safety reporting?

A. The IB reference safety information, so the event is assessed as unexpected for the trial.
B. The USPI, because an approved label overrides the IB for any marketed active substance.
C. The CCSI, because a single global reference is used for expectedness in both trials and practice.
D. The EU SmPC, because it is the most comprehensive label among the approved versions.

**정답:** A

**해설**
- A: 임상 SUSAR·312.32 expectedness는 승인 라벨이 아니라 **IB의 RSI**로 판단한다. IB에 없으면 예상 밖이다.
- B: USPI는 시판 후 314.80 expectedness 기준이다. IB 대신 USPI를 쓰는 것이 교과서의 대표 오류 패턴이다.
- C: CCSI는 PSUR/PBRER **listedness** 기준이다.
- D: SmPC는 미국 IND 판단 기준이 아니다.

---

### Q07 [An][Domain II] — listed in SmPC, not in USPI
A spontaneous serious hepatic event from Germany is listed in the EU SmPC but not in the USPI. The product is marketed in both regions. What reporting follows?

A. Neither is expedited, because the CCSI governs expectedness for both US and EU individual case reports.
B. US 15-day report; EU 90-day report, because SmPC-listed serious cases move to the longer clock.
C. US periodic reporting, because a listing in any approved label makes the event expected worldwide.
D. US 15-day report because the event is unexpected per the USPI; EU 15-day report because it is serious.

**정답:** D

**해설**
- D: 미국 314.80은 **USPI** 기준으로 예상성을 보므로 USPI에 없으면 serious **AND** unexpected → **15-day**(해외 사례 포함). EU Art 107(3)은 예상성과 무관하게 **모든 serious 15일**이다.
- A: CCSI는 PSUR listedness 기준이지 ICSR 시계 기준이 아니다.
- B: EU 90일은 **non-serious** 사례다. serious는 15일이다.
- C: 다른 지역 라벨은 미국 expectedness를 정하지 않는다. SmPC로 미국을 판단하는 것은 오류 패턴이다.

---

### Q08 [A][Domain II] — listed in USPI, not in SmPC
A serious event reported in France is listed in the USPI at the same severity but is not in the SmPC. Which outcome is correct for each region?

A. US: include in periodic reporting; EU: 15-day report to EudraVigilance.
B. US: include in periodic reporting; EU: 90-day report, because the event is listed elsewhere.
C. US: 15-day report; EU: 15-day report to EudraVigilance and the French competent authority.
D. US: 15-day report, because foreign cases are expedited by default; EU: periodic reporting.

**정답:** A

**해설**
- A: USPI에 같은 중증도로 있으면 미국은 예상된 사건 → **periodic**. EU는 serious면 **15일**, 2017-11-22부터 **EV에만** 제출한다.
- B: EU 시계는 예상성이 아니라 seriousness로 정해진다.
- C: 미국 15-day는 unexpected가 조건이다. EU NCA 중복 제출은 2017-11-22에 폐지됐다.
- D: 해외 사례도 같은 serious AND unexpected 기준을 쓴다. EU는 serious를 periodic으로 미루지 않는다.

---

### Q09 [R][Domain I] — PSUR listedness reference
In a PSUR/PBRER, which document is used to decide whether an adverse reaction is "listed"?

A. The USPI, because the FDA-approved label is the most detailed version.
B. The SmPC of the reference member state that holds the EURD entry.
C. The Company Core Safety Information within the company core data sheet.
D. The IB reference safety information current at the data lock point.

**정답:** C

**해설**
- C: PSUR/PBRER **listedness**는 **CCSI**(CCDS의 일부)가 기준이다. 글로벌 단일 기준이라 지역 라벨 차이에 흔들리지 않는다.
- A: USPI는 미국 314.80 expectedness 기준이다.
- B: SmPC는 국가별 예상성 참고일 뿐 listedness 기준이 아니다.
- D: IB RSI는 임상 SUSAR 기준이다.

---

### Q10 [A][Domain III] — aggregate analysis shows no imbalance
In a placebo-controlled IND trial, several myocardial infarctions occur in an elderly population. The sponsor's aggregate analysis shows no imbalance versus placebo. What is the appropriate handling?

A. Submit each case as a 15-day report, because myocardial infarction is a serious event.
B. Unblind each subject in the trial to confirm that the observed rates are truly balanced.
C. Do not submit individual reports; record the cases and keep aggregate monitoring in the DSUR.
D. Submit the cases as 7-day reports, because cardiac events are presumed to be life-threatening.

**정답:** C

**해설**
- C: reasonable possibility가 없다고 판단하면 개별 보고하지 않되 **DSUR·집계 모니터링**에 기록한다(2012·2021 guidance의 집계 분석).
- A: serious만으로는 부족하다. suspected adverse reaction이어야 한다.
- B: 맹검 해제는 **보고 사례만** 한다.
- D: 7일은 치명·생명위협이면서 suspected adverse reaction일 때다. 추정 규정은 없다.

---

### Q11 [R][Domain III] — unblinding for IND reports
When submitting IND safety reports from a blinded trial, which approach reflects the textbook rule?

A. Unblind the whole trial at each reportable event.
B. Unblind only the cases that are being reported.
C. Unblind cases later, at the IND annual report.
D. Keep each case blinded until database lock.

**정답:** B

**해설**
- B: 맹검은 **보고 사례만** 해제한다. 시험 전체의 무결성을 지키면서 FDA가 실제 투여군을 알 수 있게 한다.
- A: 시험 전체 해제는 요구되지 않고 시험 무결성을 해친다.
- C·D: 보고 사례는 해제해야 예상성·인과성 판단이 의미를 가진다.

---

### Q12 [R][Domain III] — who is notified of IND safety reports
Under 21 CFR 312.32, besides FDA, who must the sponsor notify of an IND safety report?

A. All participating investigators, who then inform their IRBs.
B. The data monitoring committee, which decides any further notice.
C. The investigator at the site where the case occurred.
D. The IRBs directly, with investigators informed at study close.

**정답:** A

**해설**
- A: sponsor는 FDA와 **모든 시험자**에게 통보하고, IRB 통보는 시험자가 한다.
- B: DMC는 통보 대상을 대신하지 않는다.
- C: 해당 사이트만이 아니라 모든 참여 시험자다.
- D: 시험자 통보를 미루는 규정은 없다. IRB 통보 주체는 시험자다.

---

### Q13 [R][Domain III] — RSI change during an EU trial
During an EU trial, the sponsor wants to update the reference safety information section of the IB to add newly characterised reactions. How is this change treated?

A. As a Type IB variation to the marketing authorisation.
B. As an urgent safety measure notified within 7 days.
C. As a non-substantial change recorded in the trial master file.
D. As a substantial modification of the trial.

**정답:** D

**해설**
- D: 시험 중 **RSI 변경은 substantial modification**이다. RSI가 SUSAR 판단 기준이라 바꾸면 보고 대상이 달라진다.
- A: 시판 허가 variation은 임상 RSI와 별개다.
- B: Art 54 USM은 피험자 보호를 위한 긴급 조치이고 RSI 갱신 절차가 아니다.
- C: 예상성 기준을 바꾸는 변경이라 비실질 변경이 아니다.

---

### Q14 [An][Domain I] — label effective date and case classification
A new warning was added to the USPI last month. A case received before the change took effect is being classified this week. A reviewer applies the new label and calls the case "expected." What is the best systemic fix?

A. Switch the US expectedness assessment to the CCSI so that one reference applies across the three regions.
B. Treat open cases as unexpected until the next PBRER, so that cases are not missed during label transitions.
C. Classify each case against the current USPI, since the newest label reflects the best knowledge.
D. Record the reference document, version and effective date for each case in the case-processing system.

**정답:** D

**해설**
- D: 교과서의 해법은 사례 시스템에 **참조 문서 4종·버전·효력일** 필드를 두는 것이다. 라벨 변경 효력일 전후 사례의 기준 혼동이 대표 오류다.
- A: 미국 314.80 expectedness 기준은 USPI다. CCSI는 PSUR listedness용이다.
- B: 교과서 근거가 없는 방식이고 과다 보고를 낳는다.
- C: 효력일 전후를 구분하지 않으면 바로 이 오류가 생긴다.

---

### Q15 [R][Domain I] — IND annual report and EU ASR
Which pairing of periodic clinical safety reports is correct?

A. US 312.33 annual report within 60 days of the IND anniversary (DSUR accepted); EU Art 43 annual safety report via CTIS.
B. US 312.33 annual report within 90 days of the anniversary; EU Art 42 annual report in PBRER format.
C. US 312.33 report quarterly for the first 3 years; EU Art 43 report annually to each national authority separately.
D. US 312.33 annual report within 30 days of the IND anniversary; EU Art 43 safety report twice a year to EudraVigilance.

**정답:** A

**해설**
- A: **312.33** IND annual report는 기념일 **60일** 내이고 **DSUR**(E2F)을 수용한다. EU **Art 43 ASR**은 연 1회 DSUR로 **CTIS**에 낸다.
- B: 90일은 근거가 없고, Art 42는 SUSAR 조항이며 형식은 DSUR이다.
- C: 3년 분기는 시판 후 periodic(314.80) 구조다.
- D: 30일은 시판 후 분기 PADER 시한이다. ASR은 연 1회다.

---

### Q16 [R][Domain III] — IND ICSR format on the reference date
On 2026-09-01, a sponsor submits an IND safety report to FDA electronically. Which statement about the format is correct?

A. IND reports are on paper; E2B applies to postmarketing ICSRs.
B. E2B(R2) remains the required IND format until 2026-10-01.
C. E2B(R3) is voluntarily accepted for IND reports on that date.
D. E2B(R3) has been mandatory for IND safety reports since 2026-04-01.

**정답:** D

**해설**
- D: FDA는 IND(premarket) ICSR의 **E2B(R3)** 를 **2026-04-01**부터 의무화했다. 기준일엔 이미 적용 중이다.
- A: 7일 초기 보고는 전화·팩스·E2B가 가능하고 전자 제출이 표준이다.
- B: 2026-10-01은 **시판 후** R3 의무일이고 기준일 시점 비적용이다.
- C: 자발 수용(2024-01-16~)은 의무화 이전 단계다.

---

### Q17 [R][Domain V] — not a REMS element
Which of the following is NOT one of the REMS elements described in FD&C 505-1?

A. A communication plan directed to healthcare providers.
B. An imposed post-authorisation safety study under Annex II.
C. A Medication Guide or patient package insert.
D. Elements to assure safe use, such as a patient registry.

**정답:** B

**해설**
- B: Annex II 조건의 **imposed PASS**는 EU 도구다. REMS 요소가 아니다.
- A: communication plan(HCP 서신·학회 통보)도 요소다.
- C: Medication Guide/PPI는 REMS 요소다.
- D: ETASU에는 처방자·약국 인증, 조제 환경, 검사, 모니터링, **환자 등록**이 들어간다.

---

### Q18 [R][Domain V] — REMS assessment timetable
What is the minimum timetable for submission of REMS assessments after approval under 505-1?

A. Annually for 5 years, then on FDA request.
B. 12 months, 3 years and 5 years after approval.
C. 18 months, 3 years and 7 years after approval.
D. 6 months, 1 year and 3 years after approval.

**정답:** C

**해설**
- C: REMS 평가 시간표는 최소 **18개월·3년·7년**이다. FDA가 더 자주 요구할 수 있고, 이후 면제될 수 있다.
- A: 연 1회 보고는 506B 연례 보고와 혼동한 것이다.
- B·D: 숫자를 바꿔치기한 오답이다.

---

### Q19 [A][Domain V] — generic of an RLD with ETASU
A generic applicant references an RLD whose REMS includes ETASU with pharmacy certification. The applicant proposes its own separate REMS with a different certification system. What does 505-1(i) provide?

A. REMS obligations end at generic entry, because ETASU bind the original NDA holder alone.
B. Generics cannot join a REMS; FDA instead imposes a separate 505(o)(3) PMR on each applicant.
C. A single shared system REMS is required, though FDA may permit a separate one in some cases.
D. Each generic must design its own REMS so that FDA can compare the effectiveness of the systems.

**정답:** C

**해설**
- C: ETASU REMS가 있는 RLD의 제네릭은 **단일 shared system REMS**(505-1(i))를 쓴다. 특허·협상 실패 등에서 FDA가 분리를 허용할 수 있다.
- A: REMS는 제네릭 진입으로 끝나지 않는다.
- B: 제네릭도 REMS를 공유한다. PMR로 대체하지 않는다.
- D: 원칙은 공유이고 비교 목적의 분리 규정은 없다.

---

### Q20 [A][Domain IV] — post-approval REMS due date
On 1 February 2026, FDA notifies the holder of an approved NDA that, based on new safety information, a REMS is necessary. FDA sets no other timeframe. By when must the proposed REMS be submitted?

A. By 1 June 2026, 120 days after notification under 505-1(a)(2).
B. By 2 March 2026, 30 days after notification, mirroring the 505(o)(4) response period.
C. By 2 April 2026, 60 days after notification, as for postmarketing safety labeling.
D. By 1 August 2026, 18 months being reserved for the first REMS assessment instead.

**정답:** A

**해설**
- A: 승인 후 REMS는 **new safety information** 근거로 요구되고, FDA 통지 후 **120일** 내(또는 FDA가 정한 다른 기한) 제안한다(505-1(a)(2)(B)). 2026-02-01 + 120일 = **2026-06-01**.
- B: 30일은 505(o)(4) SLC 응답 시한이다.
- C: 60일은 근거가 없다.
- D: 18개월은 REMS 평가 시간표이고 제안 시한이 아니다.

---

### Q21 [An][Domain IV] — negotiating ETASU scope
FDA proposes ETASU requiring liver-test certification before every dispensing of your product. Patient groups warn that rural patients will lose access. What statutory point best supports negotiating the scope?

A. ETASU are limited to products with a boxed warning, so certification cannot be imposed.
B. Under 505-1(f)(2), ETASU must not unduly burden patient access to the drug.
C. A Medication Guide satisfies 505-1 by itself, so ETASU cannot be required in addition.
D. ETASU may be imposed after the 7-year REMS assessment first shows a failure of labeling.

**정답:** B

**해설**
- B: **505-1(f)(2)**는 ETASU가 환자 접근을 과도하게 제한하지 않도록 요구한다. 부담과 접근성의 균형이 협상 근거다.
- A: boxed warning 연동 규정은 없다.
- C: REMS 요소는 필요에 따라 조합된다. Medication Guide가 ETASU를 막지 않는다.
- D: 평가 시간표는 ETASU 부과의 전제 조건이 아니다.

---

### Q22 [A][Domain IV] — EU counterpart to an ETASU programme
The same hepatotoxicity signal that led to a US ETASU is assessed for your centrally authorised product. PRAC has validated the signal and is preparing its recommendation. What EU package most closely parallels the US outcome?

A. A national REMS submitted to each member state, as the EU lacks an aRMM equivalent to ETASU.
B. A Type II variation, an RMP update with controlled-access aRMM, a DHPC and an effectiveness plan.
C. Suspension under Art 107i, because ETASU-level risks must first go through the urgent union procedure.
D. A Type IB variation adding a warning, leaving the RMP and the communication plan unchanged.

**정답:** B

**해설**
- B: EU는 PRAC 신호 절차를 거쳐 **Type II**(4.4 간기능 모니터링) + **RMP 갱신**(aRMM: HCP 교육·환자 카드·**통제 접근**) + **DHPC** + **GVP XVI Rev 3** 효과성 평가로 간다. ETASU ≈ 통제 접근이다.
- A: EU에도 aRMM(GVP XVI)이 있다.
- C: Art 107i는 정지·철회·금기 등을 검토할 때 발동한다. 위험 관리 조치로 대응 가능한 상황이다.
- D: 경고 추가만으로는 ETASU 수준의 조치와 맞지 않고 SmPC 4.4 변경은 Type II로 다룬다.

---

### Q23 [R][Domain V] — REMS modification categories
Under FDA's 2020 REMS modifications guidance, how are changes to an approved REMS classified?

A. Administrative, substantial and urgent modification.
B. Revision, minor modification and major modification.
C. Annual report, CBE-30 and prior approval supplement.
D. Type IA, Type IB and Type II modification.

**정답:** B

**해설**
- B: 2020 guidance는 **revision / minor / major modification**으로 나눈다.
- A: substantial·urgent는 임상시험 변경 용어와 섞인 것이다.
- C: AR·CBE-30·PAS는 314.70 변경 범주다.
- D: Type IA·IB·II는 EU variation 범주다.

---

### Q24 [R][Domain IV] — 505(o)(4) first response
After receiving a 505(o)(4) safety labeling change notification, what must the holder do within 30 days?

A. Submit a supplement; rebuttals are possible after an order.
B. Implement the new labeling in distributed packages.
C. Submit a labeling supplement or a rebuttal statement.
D. Request a Type A meeting to begin the discussion period.

**정답:** C

**해설**
- C: 통지 후 **30일** 내 라벨 보충(CBE-0 또는 PAS) 또는 **반박**(rebuttal)을 낸다.
- A: 반박은 명령 전 30일 응답 단계에서 낸다.
- B: 30일 시한은 제출 의무다. 유통 포장 일괄 교체 시한이 아니다.
- D: 회의 요청은 법정 응답이 아니다.

---

### Q25 [A][Domain IV] — 505(o)(4) order and date
A holder rebutted a 505(o)(4) notification. Discussions ended without agreement, and FDA issued an order on May 4. By when must the holder submit a supplement reflecting the order?

A. June 3, 30 days after the order, matching the initial response period.
B. May 19, 15 days after the order.
C. May 11, 7 days after the order, as for an urgent safety restriction.
D. The deadline lapses once a rebuttal has been filed and considered.

**정답:** B

**해설**
- B: 논의(≤30일) 실패 후 FDA **order** → **15일** 내 명령대로 보충을 낸다. May 4 + 15일 = May 19.
- A: 30일은 통지 후 첫 응답 시한이다.
- C: 7일은 505(o)(4)의 시한이 아니다.
- D: 반박은 시계를 없애지 않는다. 불이행은 misbranding(502(z))이다.

---

### Q26 [An][Domain IV] — rebuttal strategy
Your team wants to reject an FDA 505(o)(4) boxed warning outright because it "will harm sales." The safety data show a real signal, but the proposed wording overstates frequency. What is the best strategy?

A. Ignore the notification and await an order, since an order is what creates the legal obligation.
B. Rebut the wording with data and alternative text, while accepting the safety conclusion.
C. Reject the warning outright, since rebuttal postpones the obligations until FDA proves causality.
D. Withdraw the product voluntarily, since withdrawal ends 505(o)(4) without any stated reason.

**정답:** B

**해설**
- B: 반박은 **문구 조정**에 효과적이고(FDA가 과학적 근거를 반영), 전면 거부는 거의 실패한다.
- A: 통지 후 30일 응답이 법정 의무다. 불이행은 502(z) misbranding으로 이어진다.
- C: 반박은 인과성 입증 책임을 FDA에 넘기지 않는다.
- D: 교과서 근거가 없다. 철회 사유 투명성은 EU(Dir 2012/26)에서도 중시된다.

---

### Q27 [R][Domain IV] — supplement type for 505(o)(4)
Which submission types can carry the labeling change in response to a 505(o)(4) notification?

A. A Drug Safety Communication posting.
B. A Type II variation filed with FDA.
C. CBE-0 or a prior approval supplement.
D. An annual report or a CBE-30.

**정답:** C

**해설**
- C: 505(o)(4) 라벨 보충은 **CBE-0 또는 PAS**로 낸다.
- A: Drug Safety Communication은 FDA의 소통 수단이지 holder의 제출 유형이 아니다.
- B: Type II는 EU variation이다.
- D: annual report·CBE-30은 경고 강화의 경로가 아니다.

---

### Q28 [A][Domain V] — challenging a 505(o)(3) PMR
FDA's draft approval letter lists a 505(o)(3) PMR for a 5-year cardiovascular outcomes registry. The outcome is a common event captured in claims data. Which argument is strongest for removing or converting the requirement?

A. The EU will impose a PASS, and FDA must accept EU studies in place of its own requirements.
B. A PMR presupposes an approved REMS, and this product is not subject to a REMS.
C. ARIA in Sentinel can assess the risk adequately, so 505(o)(3)(D) bars imposing the PMR.
D. Registries are voluntary in the US, so FDA can request them as Phase 4 commitments at most.

**정답:** C

**해설**
- C: **505(o)(3)(D)**: ARIA(Sentinel)로 충분하면 FDA는 PMR을 부과할 수 없다. 결과·노출을 Sentinel이 잡을 수 있다는 것이 가장 강한 논증이다.
- A: EU imposed PASS와 통합을 **제안**할 수는 있으나 FDA가 수용할 의무는 없다.
- B: PMR은 REMS 유무와 무관하다.
- D: 505(o)(3)는 법정 PMR 부과 권한이다.

---

### Q29 [A][Domain V] — PMR versus PMC obligations
The registry stays, but FDA agrees to make it a PMC instead of a PMR. Which statement correctly compares the two?

A. Both are enforceable as misbranding; the difference is that PMC milestones are set by the sponsor.
B. Both carry 506B annual status reporting; an unmet PMR without good cause is misbranding under 502(z).
C. A PMR is reported under 506B; a PMC is reported in the PADER line listings each quarter instead.
D. A PMC is exempt from 506B reporting; a PMR is reported at completion in the final study report.

**정답:** B

**해설**
- B: PMR·PMC 모두 **506B 연례 보고**를 한다. PMR은 승인서 마일스톤·good cause 없는 미이행 시 **misbranding(502(z))**이고, PMC는 서면 약속이라 집행력이 낮다.
- A: 502(z) 집행은 PMR 쪽이다.
- C: PMC 현황 보고는 506B다. PADER의 PMR/PMC 현황은 별도 요소다.
- D: PMC도 506B 보고 대상이다.

---

### Q30 [An][Domain V] — known risk and 505(o)(3)(B)
A proposed PMR would study a hepatotoxicity risk that is already well characterised and labeled. The sponsor argues for a PMC. On what basis?

A. A PMR is limited to biologics under 600.80, so this NDA product cannot receive a PMR.
B. Known risks cannot be studied after approval, because 505(o)(3) covers premarket trials alone.
C. 505(o)(3)(B) purposes target serious risk assessment or new signals; a known risk fits a PMC.
D. Hepatotoxicity is handled by REMS alone, so any study of it must be a voluntary commitment.

**정답:** C

**해설**
- C: 505(o)(3)(B)의 목적은 serious risk 평가·중대 위험 신호 확인·예상 밖 위험 식별이다. 이미 알려진 위험이면 PMC 논증이 가능하다.
- A: PMR은 NDA·BLA 모두에 적용된다.
- B: 505(o)(3)는 시판 후 연구 권한이다.
- D: REMS와 연구는 별개 도구다.

---

### Q31 [R][Domain II] — MedWatch forms
Which pairing of MedWatch forms is correct?

A. 3500 — voluntary reports by HCPs and consumers; 3500A — mandatory reports by MAHs.
B. 3500A — consumer plain-language form; 3500B — mandatory reports by user facilities.
C. 3500 — mandatory reports by manufacturers; 3500A — voluntary reports by consumers.
D. 3500B — mandatory reports by MAHs; 3500 — reports by device user facilities.

**정답:** A

**해설**
- A: **3500** = 자발(HCP·소비자), **3500A** = 의무(MAH 314.80/600.80, 기기 803 제조자·user facility), **3500B** = 소비자용 평이한 언어 자발 양식이다.
- B·D: 3500B는 소비자 평이 양식이다. 의무 양식은 3500A다.
- C: 자발·의무가 뒤바뀌었다.

---

### Q32 [A][Domain II] — postmarketing E2B on the reference date
On 2026-09-01, a US MAH asks which electronic format it must use for postmarketing ICSRs. Which answer is correct for that date?

A. E2B(R3) is not yet accepted by FDA; it will start receiving R3 files when the postmarketing mandate takes effect.
B. E2B(R3) has been mandatory for postmarketing ICSRs since 2026-04-01, the same date as IND reports.
C. E2B(R2) is still accepted; the postmarketing R3 mandate of 2026-10-01 is not applicable on the reference date.
D. Paper Form 3500A remains the required route, because electronic submission is mandatory for IND reports alone.

**정답:** C

**해설**
- C: 시판 후 ICSR의 R3 의무는 **2026-10-01**(R2는 2026-09-30까지)이라 기준일 시점 비적용이다. R3는 2024-01-16부터 자발 수용된다.
- A: R3 자발 수용은 2024-01-16부터 이미 가능하다.
- B: 2026-04-01은 **IND** R3 의무일이다.
- D: 시판 후 전자 제출 의무는 2015부터다.

---

### Q33 [R][Domain II] — Part 4 Subpart B additions for a BLA holder
A BLA holder's product includes a device constituent part. Which reports does 21 CFR Part 4 Subpart B add to its 600.80 obligations?

A. 803 5-day reports, malfunction 30-day reports and 806 correction and removal reports.
B. 803 5-day reports alone, because malfunctions are handled through the BPDR system.
C. Field alert reports within 3 working days and IND safety reports within 7 days.
D. Biological product deviation reports within 45 days, replacing the 15-day reports.

**정답:** A

**해설**
- A: 4.102는 기기 체계의 **803 5-day**, **malfunction 30-day**, **806 교정·제거 보고 10 working days**를 더한다.
- B: malfunction 30-day도 추가된다. BPDR은 품질 체계다.
- C: FAR 3 working days는 기기 신청자(PMA/510(k))가 약물 구성품을 가질 때 추가되는 쪽이다. IND 보고는 무관하다.
- D: BPDR 45일은 원래 BLA 의무이고 15-day를 대체하지 않는다.

---

### Q34 [A][Domain II] — cross-labeled combination sharing
A drug and a device are cross-labeled for use together and are held by different applicants. The drug applicant receives a death report that involves the device. Besides reporting through its own system, what must it do?

A. Notify the device applicant at the next periodic report, if the case is unexpected.
B. Share the information with the device applicant within 5 business days.
C. Forward the case to FDA for routing; direct sharing between applicants is not expected.
D. Share the information with the device applicant within 5 calendar days.

**정답:** D

**해설**
- D: cross-labeled 콤비는 각 구성품 신청자가 자기 체계로 보고하고, 상대에게 **5 calendar days** 내 정보를 공유한다(21 CFR 4.103).
- A: periodic까지 미루지 않는다.
- B: business days가 아니라 calendar days다.
- C: 4.103은 신청자 간 직접 공유 의무다.

---

### Q35 [R][Domain V] — Part 4 Subpart B enforcement
From when did FDA enforce Part 4 Subpart B postmarketing safety reporting for drug and biologic applicants of combination products?

A. 2017-11-22.
B. 2020-07-31.
C. 2016-02-01.
D. 2026-03-11.

**정답:** B

**해설**
- B: 의약품·생물 신청자에 대한 Part 4 Subpart B 집행은 **2020-07-31**이다.
- A: 2017-11-22는 EU EV 단일 보고 시작일이다.
- C: 2016-02-01은 EU QPPV·PSMF 위치 변경의 Art 57 DB 단독 통지 시작일이다.
- D: 2026-03-11은 FDA AEMS 출범일이다.

---

### Q36 [A][Domain II] — device applicant with a drug constituent
A PMA holder markets a drug-eluting device. Which additional reports does Part 4 Subpart B add to its device reporting?

A. IND annual reports, because the drug constituent remains investigational.
B. Biological product deviation reports, because the drug constituent is a biologic.
C. 803 5-day and malfunction 30-day reports, which it already files as a device holder.
D. 15-day reports and field alert reports from the drug reporting system.

**정답:** D

**해설**
- D: 기기 PMA/510(k) 보유자가 약물 구성품을 가지면 **15-day**와 **FAR**이 추가된다.
- A: 승인 제품의 약물 구성품은 IND 대상이 아니다.
- B: BPDR은 생물제제 품질 체계다. 약물 구성품의 추가분은 15-day·FAR이다.
- C: 803 보고는 원래 기기 의무이고 추가분이 아니다.

---

### Q37 [An][Domain I] — why the US and EU differ on expedited reporting
Why does the US expedite only serious AND unexpected cases, while the EU expedites all serious cases?

A. The US relies on MAH signal detection; the EU relies on Sentinel-style claims analysis by the agency.
B. The US has fewer adverse events per product, so expedited reports would overwhelm FDA's database.
C. The EU lacks a product label equivalent to the USPI, so expectedness cannot be assessed there.
D. The US treats the label as the list of known risks; the EU uses EudraVigilance as a signal engine.

**정답:** D

**해설**
- D: 미국은 **USPI**를 알려진 위험의 공식 목록으로 보고 15-day를 새 정보 탐지에 쓴다. EU는 **EV**를 신호 탐지 엔진으로 쓰므로 모든 serious 사례를 15일 내 넣는다.
- A: 방향이 반대다. FDA가 Sentinel로 능동 감시를 주도하고 EU는 MAH 모니터링 의무가 있다.
- B: 교과서 근거가 없다.
- C: EU에도 SmPC가 있다. 예상성은 ICSR 제출 요건이 아니라 평가 요소다.

---

### Q38 [An][Domain I] — designing a global case-processing SOP
A company processes cases for the US, EU and Japan from one safety database. Which design best fits the different expedited rules?

A. Run three separate SOPs, so each region's clock is applied after regional review is complete.
B. Process every case to the shortest 15-day clock and tag cases destined for US periodic reporting.
C. Apply US expectedness in each region, since the USPI is usually the most comprehensive label.
D. Use the EU 90-day non-serious clock as the default, escalating cases after medical review.

**정답:** B

**해설**
- B: 가장 짧은 시계(**15일**)로 전부 처리하는 **단일 SOP**가 안전하고, 미국 periodic에 들어갈 사례(serious·expected, non-serious)는 처음부터 분류 라벨을 붙인다. 미국 15-day·EU 15/90·일본 15/30을 한 SOP로 묶는다.
- A: 지역별 검토 후 시계를 적용하면 지연 위험이 커진다.
- C: EU는 모든 serious 15일이고, USPI는 미국 기준일 뿐이다.
- D: serious 사례의 15일 시계를 놓친다.

---

### Q39 [A][Domain III] — FDA PADE inspection focus
FDA announces a postmarketing adverse drug experience inspection under CPGM 7353.001. The company also uses a contract call centre for case intake. Which preparation addresses the core of what investigators examine?

A. Prepare the QPPV for interview, since FDA requires a named QPPV under 314.80 for each NDA holder.
B. Trace 15-day timeliness from day 0, follow-up, literature, contractor agreements and record retention.
C. Prepare RMP Part V effectiveness data, since FDA inspects additional risk minimisation first.
D. Prepare the PSMF and its logbook, since FDA inspectors use the PSMF as the map of the whole PV system.

**정답:** B

**해설**
- B: PADE 사찰은 SOP·조직, 접수→평가→제출의 **15-day 시간 준수**(day 0 추적), follow-up, 문헌 검색, 계약자 PV 계약·전달 시한, periodic 완결, 제출 기록, **기록 10년**(314.80(i))을 본다.
- A: 미국엔 법정 QPPV가 없다.
- C: RMP Part V는 EU 문서다.
- D: PSMF를 지도로 쓰는 것은 EU GVP III 사찰이다.

---

### Q40 [A][Domain III] — EU GVP inspection outcome
An EU GVP inspection of a mid-size MAH finds that signal validation is repeatedly delayed and the PSMF was not updated after a vendor change. How are findings graded and handled?

A. As Type IA, IB or II findings, each requiring a matching variation within 30 days.
B. As observations on Form 483, followed by a public warning letter from the EMA.
C. As critical, major or minor; followed by CAPA, and PRAC or EC action if serious.
D. As pass or fail; a failure suspends the marketing authorisation until re-inspection.

**정답:** C

**해설**
- C: GVP III 결함은 **critical/major/minor**로 분류하고 CAPA로 이어지며, 중대하면 PRAC·EC 조치까지 간다.
- A: Type IA·IB·II는 variation 범주다.
- B: 483·WL은 FDA 체계다.
- D: 합격·불합격 이분법이 아니다.

---

### Q41 [R][Domain IV] — Dear HCP letter categories
Under FDA's 2014 Dear Health Care Provider letter guidance, which set lists the letter categories?

A. Important Safety Warning, Important Prescribing Update and Important Correction of Labeling Information.
B. Urgent Safety Letter, Important Safety Letter and Routine Safety Information Letter.
C. Safety Alert, Labeling Alert and Promotional Correction Notices.
D. Important Drug Warning, Important Prescribing Information and Important Correction of Drug Information.

**정답:** D

**해설**
- D: 2014 guidance의 분류는 **Important Drug Warning / Important Prescribing Information / Important Correction of Drug Information**이다.
- A·B·C: 교과서의 분류 이름과 다르다. 비슷한 단어를 섞은 오답이다.

---

### Q42 [A][Domain IV] — DHPC preparation in the EU
After a PRAC recommendation adds a contraindication to a centrally authorised product, the MAH prepares a DHPC for prescribers in several member states. Which step is required before sending it?

A. Submit it to the EMA for information, since its content is at the MAH's own discretion.
B. File it as a Type IAIN variation, after which national authorities translate and distribute it.
C. Send it within 24 hours of the PRAC meeting, then inform EMA afterwards with distribution records.
D. Agree text, timing, recipients and translations with EMA/PRAC, using EMA's key wording.

**정답:** D

**해설**
- D: GVP XV: DHPC는 **문구·일정·대상·번역을 NCA 또는 EMA/PRAC(CAP)와 합의한 후** 발송하고, PRAC 권고 결과면 **EMA가 핵심 문구**를 준다. 발송 후 웹 공개·PSUR 기재.
- A: 내용은 MAH 재량이 아니라 당국 합의 대상이다.
- B: DHPC는 variation 유형이 아니고 배포는 MAH가 한다.
- C: 사전 합의가 먼저다. 사후 통보가 아니다.

---

### Q43 [A][Domain IV] — aligning US and EU safety communications
A contraindication is being added in both the US and the EU. How should the Dear HCP letter and the DHPC be coordinated?

A. Same day, same key message, timed to approval of the label changes (CBE-0 and Type II).
B. Send the DHPC first, since EU letters must precede US ones under GVP XV for global products.
C. Send the US letter first, since FDA consultation is mandatory and EU agreement follows it.
D. Send each when convenient, since content differs because the US letter may include promotion.

**정답:** A

**해설**
- A: 같은 날, 같은 핵심 메시지, 라벨 변경(CBE-0 ↔ Type II) 승인 시점에 맞춘다.
- B: GVP XV에 그런 순서 규정은 없다.
- C: 미국 FDA 협의는 의무가 아니라 사실상의 관행이다. 순서 규정도 없다.
- D: Dear HCP letter에 홍보는 금지되고 2253 제출 대상이다.

---

### Q44 [A][Domain II] — literature monitoring outside MLM scope
An EU MAH's active substance is covered by EMA's medical literature monitoring (MLM). A case appears in a conference abstract and in a local-language journal that MLM does not cover. What is expected of the MAH?

A. Nothing, because MLM coverage of the substance discharges the MAH's literature duties entirely.
B. Rely on national authorities to forward local-language cases, since MLM covers English-language journals.
C. Search monthly, since weekly searching applies to substances that lack MLM coverage.
D. Search sources outside MLM scope at least weekly and document strategy, databases and terms.

**정답:** D

**해설**
- D: MLM은 **지정 물질·지정 학술지**만 대행한다. 범위 밖(비지정 학술지·학회 초록·현지 문헌)은 MAH가 **주 1회** 이상 검색하고 전략·DB·키워드를 문서화한다(GVP VI).
- A: MLM 범위 밖은 MAH 책임이다.
- B: NCA 전달에 의존하는 규정은 없다.
- C: 월 1회는 근거가 없다.

---

### Q45 [A][Domain II] — brand not specified in a literature case
A published case report describes a serious reaction to an active substance marketed by several MAHs in the EU. The article does not name the brand. Which MAHs report it?

A. None, since EMA's MLM enters published literature cases into EudraVigilance itself.
B. The MAH of the reference product, since generics rely on its dossier.
C. The MAH with the largest market share in the country of the case.
D. Every MAH of that active substance, since the brand is not identified.

**정답:** D

**해설**
- D: 활성물질 기준으로 브랜드가 특정되지 않은 사례는 **그 물질 MAH 모두** 보고한다(GVP VI). 타사 브랜드가 명시되면 제외한다.
- A: MLM은 지정 물질·지정 학술지에 한정된다. 그 밖은 MAH가 처리한다.
- B·C: 교과서 근거가 없는 기준이다.

---

### Q46 [A][Domain II] — day 0 for a literature case
On March 3, a US NDA holder's weekly literature search returns a Japanese journal article describing a fatal hepatotoxicity case with all four minimum elements. The event is not in the USPI. By when is the US report due?

A. March 18 in the EU; US literature cases go to periodic reports instead.
B. April 2, 30 days after receipt, because literature cases allow translation time.
C. March 18, as a 15-day report with a copy of the article.
D. Not reportable, because the product is not approved in Japan where the case occurred.

**정답:** C

**해설**
- C: **Day 0 = 최소 4요소를 처음 인지한 날(검색 결과 접수일)**이다. 해외·문헌 사례도 314.80 대상이고, 사망 = serious, USPI에 없으면 unexpected → **15-day**(문헌 사본 첨부). March 3 + 15일 = March 18.
- A: 미국도 문헌 사례가 15-day 대상이다. EU는 제3국 serious → 15일 EV다.
- B: 번역 유예 규정은 없다.
- D: 일본 미승인이어도 미국·EU 승인 제품의 해외 사례다.

---

### Q47 [A][Domain II] — post on the company Facebook page
A patient posts on your company-run Facebook page that she was hospitalised after taking your drug. The post identifies her account, the drug and the event. What applies in the EU?

A. Company media must be screened; this valid serious case goes to EudraVigilance within 15 days.
B. Report within 90 days, since posts on social media are classed as non-serious until confirmed.
C. Report once the patient later confirms the case by e-mail, which then sets day 0 for the clock.
D. Do nothing, since social media posts are anecdotal and are excluded from ICSR obligations.

**정답:** A

**해설**
- A: GVP VI: **회사 운영 매체는 정기 screening 의무**다. 보고자·환자·약·사건 4요소가 있으면 유효 사례이고, 입원은 serious → **15일 EV**.
- B: seriousness는 내용(입원)으로 정한다.
- C: day 0은 회사 인지일이다. 확인 메일을 기다리지 않는다.
- D: 소셜 포스트도 4요소를 갖추면 유효 사례다.

---

### Q48 [A][Domain II] — third-party forum
A similar post appears on an independent patient forum that the company does not sponsor. A safety officer happens to read it. Which statement is correct for both the US and the EU?

A. There is a duty to screen such forums at least weekly, in the same way as company-run media under GVP VI.
B. The case must be sent to the forum operator, who becomes responsible for reporting it.
C. No duty to search such forums, but once aware the company processes the case the same way.
D. Awareness changes nothing, because the company does not control the site or its content.

**정답:** C

**해설**
- C: 제3자 포럼은 적극 탐색 **의무가 없다**(EU·미국 공통). 그러나 **인지했으면** 동일하게 처리한다.
- A: screening 의무는 회사 운영 매체에 해당한다.
- B: 포럼 운영자에게 보고 책임이 넘어가는 규정은 없다.
- D: 인지 후에는 처리 의무가 생긴다.

---

### Q49 [R][Domain I] — Japan ICSR clocks
Which pairing reflects Japanese postmarketing ICSR timelines?

A. 15 days for deaths and unknown serious reactions; 30 days for known serious ones.
B. 15 days for any serious reaction; 90 days for non-serious domestic reactions in Japan.
C. 7 days for deaths; 15 days for the other serious reactions, domestic or foreign.
D. 30 days for unknown serious reactions; 60 days for known serious reactions.

**정답:** A

**해설**
- A: 일본은 **15일**(사망·미지 중대·감염증) / **30일**(기지 중대)이다. 해외 사례도 포함한다.
- B: 15/90은 EU 구조다.
- C: 7일은 임상 치명·생명위협 시계다.
- D: 숫자를 바꿔치기한 오답이다.

---

### Q50 [R][Domain I] — Japan reexamination
For a new active ingredient approved in Japan, what is the standard reexamination period?

A. 3 years, followed by annual reporting under the PMD Act.
B. 10 years, with a J-RMP required for orphan drugs alone.
C. 5 years, matching the EU additional monitoring period.
D. 8 years, with periodic safety reports during the period.

**정답:** D

**해설**
- D: 신 유효성분 재심사는 **8년**(희귀 10년, 일부 4–6년)이고 기간 중 **정기 안전성 보고**를 한다. J-RMP는 2013년 도입됐다.
- A: 3년 분기는 미국 periodic 구조다.
- B: 10년은 희귀의약품이고, J-RMP는 희귀 한정이 아니다.
- C: 5년은 EU 역삼각 기간이다.

---

### Q51 [A][Domain IV] — aligned PBRER submission date
A US product files PADERs; its EU PSUR follows an EURD data lock point of March 31 with a 12-month interval. FDA grants a 314.80(c)(2)(i) waiver to submit a PBRER aligned to the EURD. By when should the joint submission be made?

A. April 30, 30 days after the data lock point, following the quarterly PADER rule.
B. June 9, 70 days after the data lock point.
C. May 30, 60 days after the data lock point, following the annual PADER rule.
D. June 29, 90 days after the data lock point, as the US adds time for regional appendices.

**정답:** B

**해설**
- B: waiver로 **PBRER**(E2C(R2))를 내고 **DLP를 EURD 3/31**로 맞추면, 주기 ≤12개월이므로 **70일** 내 미국·EU 동시 제출한다. March 31 + 70일 = June 9.
- A·C: 30·60일은 PADER 시한이다. 정렬하면 PSUR 시계를 따른다.
- D: 90일은 주기 >12개월일 때다.

---

### Q52 [A][Domain IV] — content gap when switching to PBRER
After the waiver, the US team worries that FDA-required PADER content will be lost. How is this addressed?

A. PADER content is dropped, because the PBRER fully replaces each US periodic element under the waiver.
B. PADER elements, such as the non-15-day case line listing, go into an FDA regional appendix.
C. A separate PADER is still filed each quarter, with the PBRER submitted to the EU authorities alone.
D. The missing elements go into the next 15-day report, since FDA reads those cases individually anyway.

**정답:** B

**해설**
- B: PADER 필수 요소(15-day 미보고 사례 전수 line listing·3500A 사본, 유통량, 라벨 변경 요약, PMR/PMC 현황)는 PBRER **부록 또는 FDA 지역 부록**으로 유지한다. 전환기엔 **gap report**를 낸다.
- A: 필수 요소는 부록으로 남는다.
- C: waiver의 목적이 단일 PBRER 제출이다.
- D: 15-day 보고는 periodic 요소를 담는 수단이 아니다.

---

### Q53 [R][Domain V] — quarterly periodic report timing
An NDA was approved 18 months ago. Its current reporting quarter ends on September 30. When is the periodic report due?

A. December 29, within 90 days of the quarter's end.
B. Not due; reports are annual from approval onward.
C. October 30, within 30 days after the quarter's end.
D. November 29, within 60 days of the quarter's end.

**정답:** C

**해설**
- C: 승인 후 **3년** 동안은 **분기별**이고 분기 종료 **30일** 내 낸다. 18개월째이므로 분기 보고 기간이다. September 30 + 30일 = October 30.
- A: 90일은 PSUR(>12개월) 시한이다.
- B: 처음 3년은 분기별이다.
- D: 60일은 3년 이후 연간 보고(기념일 기준) 시한이다.

---

### Q54 [R][Domain II] — record retention
Which set of record-retention periods is correct?

A. US 314.80(i) 10 years; EU ICSR documents 10 years after MA ends; PSMF 5 years after closure.
B. US 314.80(i) 10 years; EU ICSR documents 5 years after MA ends; PSMF 10 years after closure.
C. US 314.80(i) 2 years; EU ICSR documents 5 years after MA ends; PSMF 10 years after closure.
D. US 314.80(i) 5 years; EU ICSR documents 10 years after MA ends; PSMF 7 years after closure.

**정답:** A

**해설**
- A: 미국 **314.80(i) 10년**, EU **IR 520/2012 Art 12** ICSR 문서 MA 종료 후 **10년**, PSMF 시스템 종료 후 **5년**이다.
- B: EU 두 숫자가 뒤바뀌었다.
- C: 2년은 312.57 IND 기록이다.
- D: 7일은 PSMF 요청 시 제출 시한이지 보존 기간이 아니다.

---

### Q55 [An][Domain II] — data protection versus retention
A patient asks the EU MAH to erase her personal data, which appear in an ICSR from two years ago. The case was processed by a contract call centre. How should the conflict be resolved?

A. Erase the data, since GDPR rights prevail over PV retention obligations in the EU.
B. Transfer the record to the call centre, since vendor-held records are outside the MAH's duties.
C. Keep the record under the PV legal obligation, using pseudonymisation; the MAH answers for the vendor.
D. Keep the record until the next PSUR, since retention ends once data are aggregated.

**정답:** C

**해설**
- C: 데이터 보호와 보존 의무가 충돌하면 **PV 법정 의무가 우선**하고 가명화로 처리한다. 계약자(CRO·콜센터) 기록도 **MAH 책임**이다.
- A: PV 보존 의무가 우선한다.
- B: 벤더 기록도 MAH 책임이다.
- D: ICSR 문서는 MA 종료 후 10년 보존이다.

---

### Q56 [An][Domain I] — why expedited single cases still matter
Single ICSRs rarely change a benefit-risk conclusion. Which is the best justification for still requiring expedited case reporting?

A. Expedited reports replace periodic reports, so without them aggregate assessment would not happen in practice.
B. Rare serious unexpected events may first appear as single cases, and fast entry enables disproportionality analysis.
C. Each expedited case triggers an automatic labeling change, which keeps the approved label current without any delay.
D. Expedited reports are the main input for REMS assessments at 18 months, 3 years and 7 years.

**정답:** B

**해설**
- B: 간부전·SJS·아나필락시스 같은 희귀·중대·예상 밖 사건은 단일·소수 사례가 **유일한 조기 경보**이고, DB에 빨리 들어가야 **불균형 분석**이 작동한다. 법적 투명성과 시간 가치도 근거다.
- A: periodic은 별도로 남는다.
- C: 개별 사례가 자동으로 라벨을 바꾸지 않는다.
- D: REMS 평가 입력과 연결한 근거는 없다.

---

### Q57 [An][Domain I] — the shift toward aggregate assessment
Which development illustrates the shift from single-case reporting toward aggregate or data-driven assessment, as of the reference date?

A. EudraVigilance data monitoring became an MAH obligation from 2025-08-12, which ended the pilot.
B. EU non-serious cases moved from 90 days to 15 days to feed EudraVigilance faster after 2017.
C. FDA's 2021 guidance required 7-day reports for each serious event, expected or not, in IND trials.
D. The US abolished periodic reports in favour of Sentinel queries once ARIA reached full operation.

**정답:** A

**해설**
- A: **IR 2025/1466**으로 **2025-08-12**부터 EV 데이터 모니터링이 MAH 의무가 됐다(2018-02부터의 pilot 종료). 미국 쪽 예는 IND 2012/2021 집계 분석, Sentinel/ARIA, FDAAA 921 분기 신호 공개다.
- B: non-serious는 지금도 90일이다.
- C: 방향이 반대다. 2021 guidance는 예상 사건을 집계 분석 후 보고하게 했다.
- D: periodic(PADER/PBRER)은 유지된다.

---

### Q58 [A][Domain II] — QPPV resigns, PSMF moves
The EU QPPV resigns, and the PSMF moves to another member state. What regulatory notification is needed in the EU and the US?

A. EU: update the Article 57 database only, with no variation; US: no statutory notification.
B. EU: Type IAIN variation C.8 within 14 days; US: notify FDA through a CBE-0 supplement.
C. EU: Type II variation, because the QPPV is part of the MA; US: notify FDA within 15 days.
D. EU: notify the PRAC for approval before the change; US: name a QPPV equivalent in Form 356h.

**정답:** A

**해설**
- A: 2016-02-01부터 QPPV·연락처·PSMF 위치 변경은 **Art 57 DB(xEVMPD) 갱신만**으로 통지하고 **C.8 Type IAIN variation은 내지 않는다**. PSMF logbook도 갱신한다. 미국은 법정 QPPV가 없어 **통지 의무가 없다**(연락처 갱신 권장).
- B: C.8 variation은 2016-02-01 이후 쓰지 않는다. 미국 라벨 보충과는 무관하다.
- C: Type II가 아니다. variation 자체가 불요하다.
- D: PRAC 승인 절차는 없고, 미국엔 QPPV 대응 직위가 없다.

---

### Q59 [R][Domain V] — Article 57 notification since 2016
Since 2016-02-01, how is a change of the EU QPPV or of the PSMF location notified for an authorised product?

A. By updating the Article 57 database only.
B. By a Type IB variation with the updated PSMF summary.
C. By letter to each national competent authority.
D. By a Type IAIN variation under classification C.8.

**정답:** A

**해설**
- A: **2016-02-01**부터 **Art 57 DB 갱신만**으로 통지한다. variation도 수수료도 없다.
- B: Type IB 경로는 없다.
- C: 국가별 서신이 아니라 단일 DB 갱신이다. 일부 회원국의 국가 담당자 신고는 별개다.
- D: C.8 IAIN은 2016-02-01 이전 방식이다.

---

### Q60 [R][Domain II] — new QPPV and PSMF requirements
Which statement about the incoming EU QPPV and the PSMF is correct?

A. The QPPV must reside in the member state of the PSMF; it is provided within 30 days.
B. The QPPV must be an EU national; the PSMF is filed with EMA annually for review.
C. The QPPV must reside and operate in the EU/EEA; the PSMF is provided within 7 days on request.
D. The QPPV may reside anywhere if a deputy is in the EU; the PSMF is submitted with each PSUR.

**정답:** C

**해설**
- C: QPPV는 **EU/EEA 거주·활동**(Art 104(3)(a))이고, PSMF는 요청 시 **7일** 내 제출한다.
- A: PSMF는 QPPV 활동지 또는 주 PV 활동지에 둔다. 시한은 7일이다.
- B: 국적 요건이 아니라 거주·활동 요건이다. 정기 제출 규정은 없다.
- D: QPPV 본인이 EU/EEA에 있어야 한다. PSMF는 PSUR와 함께 내는 문서가 아니다.

---

### Q61 [A][Domain IV] — first PE cases for an MSC-EV product
In the first year after approval, three pulmonary embolism cases occur in elderly recipients of your MSC-EV biologic: two in the US and one in the EU. PE is not in either label. What individual case reporting applies?

A. US: two 7-day reports under 312.32; EU: one 7-day report under CTR Art 42.
B. US: both cases in the next periodic report; EU: one 90-day report to EudraVigilance.
C. US: one BPDR within 45 days; EU: one report to the national authority in 15 days.
D. US: two 15-day reports under 600.80; EU: one 15-day report to EudraVigilance.

**정답:** D

**해설**
- D: 미국 2건은 serious·unexpected → **600.80 15-day**, EU 1건은 serious → **15일 EV**다. follow-up도 15일이다.
- A: 312.32·Art 42는 임상시험 보고다. 시판 후 사례에는 314.80/600.80·Art 107(3)이 걸린다.
- B: serious·unexpected는 periodic으로 미루지 않는다. EU 90일은 non-serious다.
- C: BPDR은 품질 결함 체계다. EU 제출처는 EV다.

---

### Q62 [An][Domain IV] — what does NOT follow from the PE signal
For the same three PE cases, the team drafts a response plan. Which proposed step is NOT supported?

A. Validate the signal using EudraVigilance monitoring and review the clinical database.
B. Propose a REMS with ETASU at once, as any validated signal makes ETASU necessary.
C. Compare the observed rate with the elderly background rate in a PSUR special section.
D. Upgrade thromboembolism to an important identified risk in the RMP with an aRMM checklist.

**정답:** B

**해설**
- B: REMS는 ETASU가 필요하지 않으면 부과하지 않는다. 신호 검증이 곧 ETASU를 뜻하지 않는다.
- A: 신호 검증(EV 모니터링 의무, 불균형 분석, 임상 DB 재검토)은 다음 단계로 맞다.
- C: 노출 대비 발생률과 고령 배경률 비교는 집계 평가의 핵심이다.
- D: RMP에서 혈전·색전을 **중요 확인 위험**으로 올리고 aRMM 체크리스트·GVP XVI 지표를 단다.

---

### Q63 [A][Domain IV] — label and study changes after the PE signal
Causality is now judged a reasonable possibility. Which combination of label and study actions is appropriate?

A. US CBE-0 or FDA 505(o)(4); EU Type II for SmPC 4.4/4.8; amend the registry protocol via 506B and Annex II.
B. US PAS, as warnings cannot use CBE-0; EU Type IB variation; start a new IND for the registry protocol.
C. US Drug Safety Communication; EU DHPC, with SmPC changes deferred until the PSUSA outcome.
D. US annual report labeling update; EU Type IA variation; close the registry, since the signal is now confirmed.

**정답:** A

**해설**
- A: 미국 **CBE-0 경고 강화**(또는 FDA **505(o)(4)**), EU **Type II**(USR이면 그 경로) SmPC 4.4/4.8, 레지스트리 PASS/PMR 프로토콜 수정(혈전 결과 추가)을 **506B·Annex II**에 반영한다.
- B: 경고 강화는 CBE-0(314.70(c)(6)(iii))가 가능하다.
- C: 소통만으로는 라벨 변경을 대신하지 못한다.
- D: 경고 강화는 annual report·Type IA 경로가 아니고, 레지스트리는 수정하지 닫지 않는다.

---

### Q64 [A][Domain II] — EU ICSR scope under the broad ADR definition
Three EU events are received: a nurse gave a double dose with no harm; an off-label use led to hospitalisation; a pharmacist developed non-serious dermatitis from occupational exposure. Which handling is correct?

A. The hospitalisation alone is reportable; occupational exposure and medication errors are outside EU ICSR rules.
B. 90-day ICSR; 15-day ICSR; not an ICSR, since occupational exposure is excluded from the ADR definition.
C. Each is an ICSR due within 15 days, since medication errors are treated as serious under Art 1(11).
D. Not an ICSR (record the error for the PSUR); 15-day ICSR; 90-day ICSR.

**정답:** D

**해설**
- D: 투약 오류지만 반응이 없으면 ICSR이 아니다(오류 기록·PSUR). 허가 외 사용 + 입원 → serious **15일**. 직업 노출 피부염 → ADR 정의(Art 1(11))에 들어가는 non-serious → **90일**.
- A: EU ADR 정의는 투약 오류·오용·남용·허가 외·직업 노출을 포함한다.
- B: 무해 투약 오류는 ICSR이 아니고, 직업 노출은 ADR 정의에 포함된다.
- C: 투약 오류가 곧 serious는 아니다. 무해 사례는 ICSR도 아니다.

---
