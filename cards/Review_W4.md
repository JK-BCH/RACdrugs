# 복습 W4 — 12/21~12/26 (Ch.22 ~ Ch.25(1/2))

**달력:** 2026-12-27 (일) · 범위: Ch.22 region-specific · Ch.23 core labeling(1/2·2/2) · Ch.24 benefit-risk(1/2·2/2) · Ch.25(1/2) eCTD 개념

## 검증 메모 (2026-11-22)
- 이 덱의 숫자는 Ch22 / Ch23_1 / Ch23_2 / Ch24_1 / Ch24_2 / Ch25_1 덱의 검증 메모에 근거한다. 새 사실 없음.

## 비교표 3개

### A. 미국 PLR 라벨 ↔ EU SmPC 섹션 매핑

| 내용 | US PLR (201.57) | EU SmPC (Art 11) |
|---|---|---|
| 적응증 | **1** Indications and Usage (+Limitations of Use) | **4.1** |
| 용법·용량 | **2** | **4.2** |
| 제형·강도 | **3** | 2 / 3 (정성·정량 조성, 제형) |
| 금기 | **4** | **4.3** |
| 경고·주의 | **5** Warnings and Precautions | **4.4** |
| 이상반응 | **6** (임상시험 경험·시판 후) | **4.8** (빈도 6범주) |
| 상호작용 | **7** | **4.5** |
| 임신·수유·생식 | **8.1–8.3** (PLLR) | **4.6** |
| 소아·고령 | **8.4 / 8.5** | 4.2(용량)·4.4·5.1 분산 |
| 과량 | **10** | **4.9** |
| 비임상 | **13** | **5.3** |
| 임상시험 | **14** | **5.1** |
| 보관·공급 | **16** | **6.x** |
| 환자 상담 | **17** | (SmPC 없음 → **PL**) |
| Boxed warning | Highlights 요약 + FPI 맨 앞 | 공식 제도 없음, 4.4 첫머리 |

### B. 시판 후 라벨 변경 경로

| 변경 | 미국 (314.70) | EU (Reg 1234/2008) |
|---|---|---|
| 안전성 강화(경고·금기 추가) | **CBE-0**(즉시 시행, 사후 검토) | **Type IB/II**(승인 후 시행), 긴급 시 **USR**(24h) |
| FDA 주도 안전성 변경 | **505(o)(4) SLC** — 통지 후 **30일** 내 CBE-0/PAS/rebuttal, discussion ≤30일, 불응 시 order | PRAC 신호·PSUR·**referral** → EC 결정 → variation 이행, Art 23 의무 |
| 효능 확대(새 적응증) | **PAS**(효능 보충) | **Type II**(+1년 보호 가능) |
| 편집·사소 | **Annual report** | **IA/IAIN** |
| Boxed warning | FDA 결정(201.57(c)(1)) | — |
| 계열 전체 | class SLC | Art 31 referral → CAP/NAP 이행 |

### C. eCTD v3.2.2 vs v4.0 · 의무 날짜

| | v3.2.2 | v4.0 |
|---|---|---|
| 기술 | 문서 중심 XML backbone | **HL7 RPS** 메시지, 문서 재사용, keyword, 양방향 |
| 미국 | NDA/ANDA/BLA **2017-05-05**, 상업 IND·DMF **2018-05-05**, Type III DMF **2019-05-05** 의무 | 신규 수용 **2024-09-16**, forward compat **2026-10-16** |
| EU | CP 2010, DCP 2015-07, MRP 2017-01, DCP/MRP 전체 **2018-01-01**, NP 2018-07/2019-01 | CAP 선택 **2025-12-22**, 권고 2027 Q1, 의무 **2028 Q1** |
| 2026-09-01 기준 | **표준** | 선택 |
| 데이터 표준 | CDISC: 신청 2016-12-17, IND 2017-12-17 이후 시작 시험 | 동일 |

## 플래시카드 25장

**1. [R][Domain I]**
*Front:* Under 312.120, name the two conditions for FDA to accept a foreign non-IND study.
*Back:* **GCP 준수** + **FDA가 (사찰 등으로) 데이터를 검증 가능**. (21 CFR 312.120)

**2. [A][Domain I]**
*Front:* A sponsor plans a Japanese Phase 1 before joining an MRCT, citing "PMDA always requires it." Correct this for 2026.
*Back:* 2023-12 PMDA 통지로 **원칙적으로 불요** — 기존 데이터로 일본인 안전성 설명·관리 가능하면 MRCT 직접 참여. 필요한 경우는 민족 민감성이 높거나 PMDA 상담에서 요구할 때. (PMDA 2023-12)

**3. [An][Domain I]**
*Front:* Why does E17 reduce the need for E5 bridging without making E5 obsolete?
*Back:* E17은 지역 차이를 **설계 안에서** 평가해 사후 bridging 필요를 줄이지만, 민족 민감성 평가(E5의 intrinsic/extrinsic 틀)는 **pooled region 정의·표본 배분의 근거**로 여전히 쓰여 — E5는 "무엇이 다른가", E17은 "그 차이를 어떻게 한 시험에 담나". (ICH E5(R1), E17)

**4. [R][Domain I]**
*Front:* Which bodies form the Access Consortium?
*Back:* 호주 TGA, 캐나다 HC, 싱가포르 HSA, 스위스 Swissmedic, 영국 MHRA. (Access Consortium)

**5. [A][Domain I]**
*Front:* An MAA includes trials run in countries without ethics committee oversight equivalent to the EU. Which article is engaged and what is the consequence?
*Back:* **Art 8(3)(ib)** 진술을 못 하거나 허위가 돼 — 평가자는 2012 reflection paper로 윤리·GCP 적합성을 따지고, 심각하면 데이터를 **배제·가중치 하향**해 B/R에 영향. (Dir 2001/83 Art 8(3)(ib))

**6. [R][Domain II]**
*Front:* What is the maximum length of the Highlights section and how long must Recent Major Changes be listed?
*Back:* **½페이지**; Recent Major Changes는 **1년**. (21 CFR 201.57(a))

**7. [A][Domain II]**
*Front:* A sponsor wants to add "may be used in combination with X" to Section 1 based on a small open-label study. Classify the submission and the evidence issue.
*Back:* 적응증·사용 확대는 **PAS**(효능 보충)이고, **substantial evidence**(314.126 adequate and well-controlled)가 필요해 — 소규모 open-label은 보통 부족. Limitations of Use로 오히려 "not studied in combination"이 적절할 수 있어. (21 CFR 314.70(b)(2)(v), 314.126)

**8. [R][Domain II]**
*Front:* Which SmPC section carries non-clinical safety data, and which carries frequency-categorised adverse reactions?
*Back:* **5.3** 비임상 안전성; **4.8** 이상반응(빈도 범주). (SmPC guideline Rev 2)

**9. [An][Domain II]**
*Front:* Why does the EU lack a formal "boxed warning," and how is the same function achieved?
*Back:* EU 체계는 SmPC 구조(Art 11)와 QRD 템플릿으로 **표준화된 섹션 순서**를 두고, 중요 경고는 **4.4 첫머리**(필요시 굵게·박스)에, 환자용은 PL 서두에 쓰도록 해 — 별도 법정 "박스" 없이 **위치와 문구 표준화**로 같은 주목 효과를 내고, aRMM(교육자료·DHPC)으로 보완해. (Dir 2001/83 Art 11; SmPC guideline §4.4)

**10. [A][Domain II]**
*Front:* FDA issues a 505(o)(4) letter on 1 March. By when must the MAH respond, with which options, and what if it does nothing?
*Back:* **3월 31일**(30 calendar days)까지 ① 동일 문구 **CBE-0** ② 대안 **PAS** ③ **rebuttal**. 무응답이면 discussion 포기로 보고 FDA가 **SLC order** 발령. (FD&C 505(o)(4))

**11. [R][Domain II]**
*Front:* Give the SmPC frequency band for "common."
*Back:* **≥1/100 ~ <1/10**. (SmPC guideline §4.8)

**12. [A][Domain II]**
*Front:* A new contraindication must be added to an EU centrally authorised product and a US product simultaneously. Sequence the submissions.
*Back:* ① CCDS 개정 ② **미국 CBE-0**(즉시 시행) ③ **EU Type II variation**(또는 안전성 긴급 시 **USR** 후 15일 내 variation), CHMP 후 linguistic review → EC 결정 ④ 타 지역 순차. 미국이 먼저 바뀌는 비동기를 PV 계획에 반영. (21 CFR 314.70(c)(6)(iii); Reg 1234/2008)

**13. [R][Domain IV]**
*Front:* Name the five rows of FDA's Benefit-Risk Framework.
*Back:* Analysis of Condition · Current Treatment Options · Benefit · Risk and Risk Management · Conclusions Regarding Benefit-Risk. (FDA B-R guidance 2023)

**14. [A][Domain IV]**
*Front:* Where in the CTD should a sponsor present its structured benefit-risk conclusion, and what must it include?
*Back:* **Module 2.5.6**(Clinical Overview) — 치료 맥락, 이익(크기·의미·불확실성), 위험(심각성·관리), 통합 B/R 평가, 부록 핵심 이익·위험 표. (ICH M4E(R2))

**15. [An][Domain IV]**
*Front:* Explain why an "effects table" without an uncertainty column would be rejected by a CHMP assessor.
*Back:* B/R은 **크기만이 아니라 신뢰도**로 결정돼 — 대리 종점·작은 n·결측·짧은 추적이 있으면 같은 숫자도 가중치가 달라. 불확실성 열이 없으면 표가 **과신**을 유도하고 PrOACT-URL의 "Uncertainty" 단계를 건너뛴 거라 평가 틀과 어긋나. (EMA B-R Methodology; effects table template)

**16. [R][Domain IV]**
*Front:* What are the REMS assessment timepoints under 505-1?
*Back:* **18개월, 3년, 7년** 후(FDA가 달리 정할 수 있음). (FD&C 505-1(g))

**17. [A][Domain IV]**
*Front:* A confirmatory trial for an accelerated-approval drug reads out null. What statutory process can FDA now use, and what did FDORA add?
*Back:* **506(c)(3) 신속 철회**(통지·회의·서면 소명·자문위 → 철회, 청문 없이). FDORA 2022가 이 절차를 명문화하고, 확증시험 **진행 중 요건·6개월 진행 보고**를 추가. (FD&C 506(c)(3), FDORA §3210)

**18. [A][Domain IV]**
*Front:* A PRAC signal leads to an Article 31 referral. What are the three broad outcomes for benefit-risk?
*Back:* ① B/R 유지 + **라벨·RMP 변경**(4.4/4.8, aRMM) ② **적응증 제한·조건 부과** ③ **정지 또는 철회**(Art 116). EC 결정으로 전 회원국 동시 이행. (Dir 2001/83 Arts 31, 116)

**19. [R][Domain IV]**
*Front:* What does GVP Module XVI cover?
*Back:* **위험 최소화 조치**(routine vs additional: 교육자료, 통제 접근, 임신예방, DHPC)와 그 **효과 평가**. (GVP Module XVI)

**20. [An][Domain IV]**
*Front:* Explain why regulators treat unmet medical need as a modifier of acceptable uncertainty rather than of acceptable harm.
*Back:* unmet need는 "치료 없음의 비용"을 높여 **불확실한 이익이라도 지금 제공할 가치**를 키우지만, 위험 자체의 수용 한계(치명·관리 불가 위험)는 바꾸지 않아 — 그래서 AA·conditional MA는 **확증 의무·위험관리**를 붙여 불확실성을 사고, 위험이 특성화·관리 불가능하면 unmet need가 커도 승인하지 않아. (FDA B-R guidance; Reg 507/2006)

**21. [R][Domain I]**
*Front:* List the four eCTD lifecycle operations.
*Back:* **new, replace, delete, append.** (ICH M8)

**22. [A][Domain I]**
*Front:* A company submitted its NDA on paper in April 2017 and a DMF on paper in June 2018. Which was accepted?
*Back:* **NDA(2017-04)**: 의무일 2017-05-05 **전**이라 접수. **DMF(2018-06)**: Type II/IV/V는 2018-05-05부터 eCTD 의무라 **거부**(Type III면 2019-05-05까지 허용). (FDA eCTD guidance)

**23. [R][Domain I]**
*Front:* Which EU portal is used for (a) CAP eCTD submissions and (b) national/DCP/MRP eCTD submissions?
*Back:* (a) **EMA eSubmission Gateway / Web Client**, (b) **CESP**. (EMA eSubmission)

**24. [A][Domain I]**
*Front:* It is September 2026. Operations proposes making eCTD v4.0 the default for all new EU MAAs. Assess.
*Back:* 시기상조 — EU CAP v4.0은 **2025-12-22부터 선택**, **2027 Q1 권고**, **2028 Q1 의무**이고 non-CAP은 2026 하반기 pilot 단계. 2026-09 기준 **v3.2.2가 표준**이며 v4.0 선택 제출은 CAP에만 가능. 미국도 v4.0 선택(2024-09~). (EMA eSubmission v4.0 timeline; FDA)

**25. [A][Domain I]**
*Front:* An auditor asks why your clinical database's audit trail must be "secure, computer-generated, time-stamped." Which regulation and why.
*Back:* **21 CFR 11.10(e)** — 전자기록의 생성·수정·삭제를 **독립적으로 기록하는 audit trail**이 종이 기록의 신뢰성과 동등성을 보장하는 핵심 통제라서. 2003 Scope guidance 이후에도 predicate rule(312.62 등) 기록엔 audit trail이 기대돼. (21 CFR 11.10(e))

## 유형·도메인 분포
- [R] 9 (36%) / [A] 11 (44%) / [An] 5 (20%)
- Domain I 10 / II 7 / IV 8 — US 13 / EU 9 / 글로벌 3.

## 오늘 읽을 1차 출처
1. 21 CFR 201.57 ↔ SmPC guideline 대조(비교표 A) — https://www.ecfr.gov/current/title-21/chapter-I/subchapter-C/part-201/subpart-B/section-201.57
2. FDA SLC 505(o)(4) guidance — https://www.fda.gov/media/116594/download
3. EMA eSubmission eCTD v4.0 timeline — https://esubmission.ema.europa.eu/

**Anki 블록:** `anki/Review_W4.txt` (front;back;tags, 25행, 헤더 없음)
