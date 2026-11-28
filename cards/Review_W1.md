# 복습 W1 — 12/01~12/05 (Ch.1 ~ Ch.8)

**달력:** 2026-12-06 (일) · 범위: Ch.1 continuum · Ch.2 harmonization · Ch.3+4 GLP/safety pharm · Ch.5+6 PK/TK·tox · Ch.7+8 local tolerance/genotox

## 검증 메모 (2026-11-21)
- 이 덱의 숫자는 전부 Ch01 / Ch02 / Ch03-04 / Ch05-06 / Ch07-08 덱의 검증 메모에 근거한다. 새로 추가된 사실:
- ○ 21 CFR 316.3(b)(3) clinical superiority(orphan 독점 예외) · FDA MRSD Km 개 20 · S7A supplemental 시험은 "to the greatest extent feasible" GLP · M7: Class 3에서 Ames 음성 → Class 5 취급, 양성 → 변이원성으로 통제 — 안정 사실

## 비교표 3개 (이번 주 가장 헷갈리는 쌍)

### A. 361 HCT/P vs 351 생물의약품

| | 361 HCT/P | 351 biologic (BLA) |
|---|---|---|
| 법적 근거 | PHS Act §361 + 21 CFR 1271 | PHS Act §351 + 21 CFR 600/601/610 (+1271 Subpart C/D) |
| 들어가는 조건 | 1271.10(a) **4개 전부** 충족: minimal manipulation · homologous use · 비결합(물·crystalloid·보존제 예외) · 비전신작용(또는 autologous/1~2촌/reproductive) | 4개 중 **하나라도** 탈락 |
| 시판 전 | **승인 없음** — 등록·donor eligibility·cGTP만 | **IND → BLA** 승인 |
| 임상시험 | IND 불요 | IND 필수 (21 CFR 312) |
| 네 제품 | 배양 증식 MSC·EV → minimal manipulation 탈락 | → **351 경로** |

### B. ICH Step 4 vs Step 5 ("조화됨" vs "시행됨")

| | Step 4 | Step 5 |
|---|---|---|
| 행위자 | ICH **Regulatory Members**가 최종 가이드라인 채택 | **각 지역 당국**이 자기 체계로 이행 |
| 미국 | — | FDA가 FR 공고 + **guidance** 발행 (법적 구속력 없음) |
| EU | — | **CHMP 채택** + 시행일 지정 (Step 5 문서) |
| 구속력 | 없음 — 합의문 | 지역 규칙에 따라 심사 기준 |
| 예 | E6(R3) Annex 2 Step 4 **2026-06-03** | EU 시행 **2027-01-15** → 2026-09-01 기준엔 Annex 1까지만 |
| 예 2 | Q1 통합 안정성 Step 4 2026-06 | 지역 시행 시점 확인 필요 |

### C. GLP vs GCP vs GMP

| | GLP | GCP | GMP |
|---|---|---|---|
| 대상 | **비임상 안전성** 시험 | **임상시험**(사람) | **제조·품질** |
| 미국 규정 | 21 CFR **58** | 21 CFR 50/54/56/312 (+ICH E6 guidance) | 21 CFR **210/211** (+600s, 4) |
| EU 근거 | OECD GLP + Dir 2004/9·2004/10 | CTR 536/2014 + E6(R3) | Dir 2017/1572 + EudraLex **Vol 4** |
| ICH | (해당 없음 — OECD) | **E6(R3)** | **Q7**(API), Q9/Q10 |
| 핵심 역할 | study director · **QAU** | sponsor · investigator · IRB/EC · monitor | **QP**(EU) · QA/QC |
| 범위 밖 | 탐색 약리·PK·효력 | 비개입 연구(일부) | 연구용 소량(Phase 1은 211 면제, guidance) |
| FDA 사찰 | BIMO 7348.808 | BIMO 7348.810/811 | CPGM 7356.002, PAI 7346.832 |

## 플래시카드 25장

**1. [A][Domain II]**
*Front:* An NME NDA submitted on 1 March 2027 is filed and granted priority review. Estimate the PDUFA goal date.
*Back:* filing date = 접수 + 60일 ≈ **2027-04-30**; priority goal = filing date + **6개월** ≈ **2027-10-30**. standard였으면 +10개월 ≈ 2028-02-28. (PDUFA VII)

**2. [A][Domain V]**
*Front:* Your EU MAA receives the Day 120 List of Questions. The team books the European Commission decision for "Day 210 + 67." Correct the plan.
*Back:* Day 120 LoQ에서 **clock-stop**이 걸려 210 active day 시계가 **멈춰**. 응답 준비 기간(EMA와 합의)은 active day에 안 들어가니 실제 경과일 = 210 + clock-stop(들) + EC 67일. Day 180 LoOI에서 또 멈출 수 있어. 계획표엔 clock-stop을 명시해. (EMA centralised procedure)

**3. [A][Domain I]**
*Front:* A company proposes to distribute minimally manipulated, unrelated-donor allogeneic MSCs for homologous use via IV infusion as a 361 HCT/P. Which 1271.10(a) criterion fails?
*Back:* **(4)** 야. IV 주입은 **systemic effect / 살아있는 세포 대사 의존**인데, 그 경우 361이 허용하는 건 **autologous, 1~2촌 혈연 allogeneic, reproductive**만이야. 비혈연 동종이라 탈락 → **351 BLA** 경로. (21 CFR 1271.10(a)(4))

**4. [An][Domain IV]**
*Front:* Orphan exclusivity was granted to Drug X for indication Y. Can FDA approve (a) Drug X for indication Z, (b) a different sponsor's Drug X for Y within 7 years? Explain the exception.
*Back:* (a) **가능** — 독점은 **same drug + same indication**에만. (b) 원칙 **불가** 7년간, 단 **clinical superiority**(더 큰 효능, 더 큰 안전성, 또는 major contribution to patient care)를 입증하면 예외로 승인 가능. 공급 부족·동의 등 다른 예외도 있어. (21 CFR 316.3(b)(3), 316.31, 316.34)

**5. [R][Domain IV]**
*Front:* Under PHS Act 351(k)(7), what does the 4-year period bar and what does the 12-year period bar?
*Back:* **4년**: reference product 첫 licensure 후 4년까지 351(k) **제출** 금지. **12년**: 첫 licensure 후 12년까지 351(k) **승인(licensure)** 금지. 둘 다 같은 시작점. (PHS 351(k)(7))

**6. [R][Domain I]**
*Front:* What happens at ICH Step 3, and who adopts the guideline at Step 4?
*Back:* **Step 3** = 각 지역 규제당국·ICH 사무국이 **공개 협의**를 하고 WG가 의견을 반영, 규제 전문가 합의로 종료. **Step 4** = ICH **Regulatory Members**가 최종 조화 가이드라인을 **채택**. (ICH Formal Procedure)

**7. [A][Domain I]**
*Front:* You see "Step 2b" next to a guideline on the ICH site. What can your company do with it right now?
*Back:* Regulatory Members가 승인한 **초안이 공개 협의(Step 3)에 나온 상태**야. 지금 할 수 있는 건 **의견 제출**(FDA는 Federal Register docket, EMA는 CHMP 협의)과 내부 영향 평가야. 준수 근거로는 못 쓰고, 최종본이 바뀔 수 있어. (ICH Step 2b/3)

**8. [A][Domain IV]**
*Front:* A Korean CDMO highlights that MFDS is a WHO-Listed Authority. For which of your plans is that fact decisive, and for which is it irrelevant?
*Back:* **결정적**: WHO PQ reliance, UN 조달 적격, LMIC CRP 등록 — WLA 평가 보고서를 신뢰하는 체계. **무관**: FDA IND/BLA, EMA MAA 심사 — 그들은 자기 법·자기 사찰로 판단해(한국 GMP 사찰 결과도 MRA가 없으면 자동 인정 아님). (WHO WLA; 21 CFR 312/601)

**9. [An][Domain II]**
*Front:* Why does the EU–US MRA batch-testing waiver reduce cost for a US-made product imported into the EU, and what obligation remains?
*Back:* Dir 2001/83 Art 51은 EU 수입 batch마다 **QP가 EU에서 전수 재시험**하게 했는데, MRA 전면 시행(2019-07-11) 후 **미국에서 수행된 시험을 인정**해 재시험이 면제돼 — 시험 비용·리드타임·검체 소모가 줄어. 남는 건 **QP certification**(문서 검토·GMP 확인) 자체와 MRA 범위 확인이야. (EU–US MRA, Dir 2001/83 Art 51)

**10. [R][Domain I]**
*Front:* Distinguish WHO GBT maturity level 3 from level 4.
*Back:* **ML3**: 안정적·잘 기능하는 규제 시스템. **ML4**: 지속적 개선·혁신을 수행하는 advanced 시스템(최고). (WHO GBT)

**11. [R][Domain I]**
*Front:* Under 21 CFR 58.195, how long are GLP records kept after (a) application approval, (b) submission to FDA?
*Back:* (a) 승인 후 **최소 2년**, (b) 제출 후 **최소 5년** — 둘 중 **가장 짧은 쪽**(58.195(b) "whichever … is shortest"). 미제출 연구는 완료 후 2년. (21 CFR 58.195)

**12. [A][Domain III]**
*Front:* A CRO organisation chart shows the QAU reporting to the study director. What is the compliance problem?
*Back:* 58.35는 QAU가 **해당 연구 수행 인력과 완전히 분리·독립**하고 **경영진에 보증**하도록 요구해. study director에게 보고하면 독립성이 없어 — QAU는 경영진 직속이어야 해. (21 CFR 58.35)

**13. [A][Domain I]**
*Front:* A sponsor plans FIH with only a hERG assay as cardiovascular safety data. What does S7A/S7B expect before first dosing?
*Back:* S7A core battery의 **심혈관 평가**는 FIH 전 GLP로 필요하고, S7B는 **hERG + in vivo QT 평가**(의식 있는 비설치류 텔레메트리: ECG·혈압·심박)를 통합 위험평가의 두 축으로 둬. hERG만으론 부족 — in vivo 심혈관 시험을 FIH 전에 넣어. (ICH S7A, S7B)

**14. [An][Domain I]**
*Front:* S7A requires the core battery to be GLP but speaks differently of supplemental and follow-up studies. What does it say and why the difference?
*Back:* core battery는 **GLP 준수**가 기본이고, supplemental·follow-up은 **"GLP를 가능한 최대한(to the greatest extent feasible)"** 이야. 이유: follow-up은 기전 탐색·특수 모델이 많아 GLP 시설에서 수행이 어려울 수 있고, 핵심 안전성 결정은 core battery가 담당하니 거기에 데이터 신뢰성 요건을 집중한 거야. (ICH S7A §2.9)

**15. [R][Domain II]**
*Front:* What does 21 CFR 312.23(a)(8)(iii) require for each nonclinical laboratory study in an IND?
*Back:* **GLP 준수 진술**, 아니면 **미준수 사유를 간략히 진술**. (21 CFR 312.23(a)(8)(iii))

**16. [A][Domain I]**
*Front:* A Phase 1 multiple-ascending-dose study will dose for 6 weeks. What is the minimum repeated-dose toxicity duration per M3(R2), and what is commonly done in practice?
*Back:* M3(R2) 원칙은 **임상 기간과 같은 기간**(≥6주)을 두 종에서야. 실무에선 표준 기간인 **13주(3개월)** 시험을 돌려 6주 MAD와 이어지는 Phase 2까지 한 번에 커버하는 게 보통이야. (ICH M3(R2) 표 1)

**17. [R][Domain I]**
*Front:* Per ICH S9, what repeat-dose toxicity duration generally supports marketing for an anticancer drug in advanced cancer?
*Back:* **3개월**. (ICH S9)

**18. [A][Domain I]**
*Front:* Dog is the most sensitive species, NOAEL 10 mg/kg/day. With FDA Km values (dog 20, human 37), compute HED and MRSD (default factor).
*Back:* HED = 10 × (20/37) ≈ **5.4 mg/kg**; MRSD = 5.4/10 ≈ **0.54 mg/kg** (60 kg ≈ 32 mg). (FDA MRSD guidance 2005)

**19. [An][Domain I]**
*Front:* When is NOAEL ÷ 10 an inadequate starting-dose rationale, and what replaces or supplements it?
*Back:* **급한 용량-반응, 비가역·모니터링 불가 독성, 비선형 PK, 신규 작용기전, 종 관련성 불확실, 면역 작용제**일 때야. FDA MRSD guidance는 **안전계수를 10보다 크게**, EMA FIH 가이드라인은 **MABEL**(최소 예상 생물학적 효과 용량)로 잡고 둘 중 낮은 쪽을 쓰라고 해. (FDA MRSD 2005, EMA FIH Rev 1 2017)

**20. [R][Domain I]**
*Front:* ICH S6(R1): how many relevant species may suffice, and what chronic duration is generally adequate for biologics?
*Back:* 약리학적으로 관련된 종이 **하나**뿐이면 한 종으로 충분할 수 있어. 만성독성은 **6개월**. (ICH S6(R1))

**21. [R][Domain I]**
*Front:* An impurity is ICH M7 Class 3. What is the next step and the two possible outcomes?
*Back:* **Ames 시험**. 음성 → **Class 5**(비변이원성, 일반 불순물로 Q3A/B 통제). 양성 → **변이원성으로 취급**(Class 2처럼 TTC/AI로 통제, 또는 in vivo 후속으로 관련성 평가). (ICH M7(R2) §6)

**22. [A][Domain I]**
*Front:* A 14-day Phase 1 study: what M7 acceptable intake applies to a mutagenic impurity during this trial?
*Back:* 투여 기간 **≤1개월 → 120 µg/day**. 임상 개발 중에도 M7 기간별 AI를 적용하고, 전체 개발 기간 누적을 고려해. (ICH M7(R2) 표 2)

**23. [A][Domain I]**
*Front:* An in vitro micronucleus test is positive. Propose an S2(R1)-consistent follow-up that avoids a stand-alone study.
*Back:* **in vivo micronucleus**(설치류 조혈세포)를 **28일 또는 13주 반복투여 독성시험에 통합**하고, 두 번째 조직으로 **간 comet**을 같은 동물에서 추가해. 노출 입증(TK)이 있어야 음성이 의미가 있어. (ICH S2(R1))

**24. [An][Domain I]**
*Front:* Why does M3(R2) not treat local tolerance as a separate study category, and how does the EMA guideline align?
*Back:* 접촉 부위 영향은 **임상 경로로 수행하는 일반 독성시험에서 관찰·조직병리로 평가**할 수 있어서, 별도 시험은 동물·비용만 늘리고 정보가 중복돼(3Rs). EMA Rev. 1도 통합 평가를 우선하고, 별도 시험은 비의도 투여·특수 경로처럼 **정당화되는 우려**가 있을 때만 둬. (ICH M3(R2) §11, EMA/CHMP/SWP/2145/2000 Rev. 1)

**25. [R][Domain I]**
*Front:* By when must the complete genotoxicity battery be finished under M3(R2)?
*Back:* **Phase 2 시작 전**. (ICH M3(R2) §8)

## 유형·도메인 분포
- [R] 9 (36%) / [A] 11 (44%) / [An] 5 (20%)
- Domain I 17 / II 3 / III 1 / IV 3 / V 1 — 비임상 주라 Domain I 편중. Ch.17 이후 II·IV·V가 올라온다.

## 오늘 읽을 1차 출처
1. 21 CFR 1271.10 — https://www.law.cornell.edu/cfr/text/21/1271.10 (비교표 A 근거)
2. ICH Formal Procedure — https://admin.ich.org/page/formal-ich-procedure (비교표 B)
3. ICH M3(R2) 표 1·§8·§11 — https://database.ich.org/sites/default/files/M3_R2__Guideline.pdf

**Anki 블록:** `anki/Review_W1.txt` (front;back;tags, 25행, 헤더 없음)
