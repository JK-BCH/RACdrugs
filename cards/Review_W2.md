# 복습 W2 — 12/07~12/12 (Ch.9 ~ Ch.15)

**달력:** 2026-12-13 (일) · 범위: Ch.9+10 carcinogenicity/DART · Ch.11 ERA · Ch.12 API 등록 · Ch.13 biologics · Ch.14 supply · Ch.15 development/manufacturing

## 검증 메모 (2026-11-22)
- 이 덱의 숫자는 Ch09-10 / Ch11 / Ch12 / Ch13 / Ch14 / Ch15 덱의 검증 메모에 근거한다. 새 사실 없음.

## 비교표 3개

### A. DMF vs ASMF vs CEP

| | US DMF (Type II) | EU ASMF | EU CEP |
|---|---|---|---|
| 발급·평가 주체 | FDA (참조 신청과 함께 심사) | 회원국/EMA (MAA와 함께 평가) | **EDQM** (독립 평가·인증) |
| 독립 결론 | 없음 (승인 아님) | 없음 (EU-ASMF worksharing으로 평가 공유) | **있음** — 인증서 자체가 효력 |
| 비밀 보호 구조 | 전체 비공개, LOA로 참조 | **AP(공개) + RP(비공개)**, Letter of Access | 인증서만 신청자에게, dossier는 EDQM |
| 전제 조건 | — (GDUFA: Type II API는 CA 통과 + 수수료) | — | **Ph. Eur. 모노그래프** 존재 |
| 갱신 | 없음 (annual report) | 없음 | **5년 후 1회 갱신 → 무기한** (CEP 2.0, 2023-09-01~) |
| GMP 보증 | 별도 (FDA 사찰) | 별도 (QP declaration) | **아님** — QP declaration 필요 |
| 상호 인정 | FDA는 CEP 불인정 | — | 미국 불인정 |

### B. 미국 생물의약품 vs EU 생물학적 제품

| | 미국 (PHS 351) | EU (Dir 2001/83) |
|---|---|---|
| 정의 | 351(i) + **600.3(h)**: protein = **>40 aa** (화학합성 포함, 2020) | Annex I Part I 3.2.1.1(b): 생물학적 원료·공정으로 정의 |
| 후속 제품 경로 | **351(k)** biosimilar / interchangeable | **Art 10(4)** biosimilar |
| 참조 제품 독점 | **4년 제출 금지 / 12년 승인 금지** | **8년 데이터 + 2년 시장 (+1)** |
| Interchangeability | **법정 지정**(351(k)(4)), FDA 심사, Purple Book | 법적 지정 **없음**, 2022 EMA/HMA 과학 성명; substitution은 회원국 |
| 명명 | INN + **4자 접미사** | INN 그대로 |
| 관할 | CDER(치료 단백질) / CBER(백신·혈액·세포·유전자) | EMA 중앙집중(biotech 의무) |

### C. 미국 환경 평가 vs EU ERA

| | 미국 21 CFR 25 (NEPA) | EU ERA (Dir 2001/83 Art 8(3)(ca), EMA Rev. 1) |
|---|---|---|
| 핵심 문턱 | **EIC < 1 ppb (=1 µg/L)** → categorical exclusion | **PEC_sw < 0.01 µg/L** → Phase II 불요 |
| 엄격도 | — | **100배 엄격** |
| 문턱 초과 시 | EA → FONSI (드물게 EIS) | Phase II Tier A → Tier B (운명·생태독성 시험) |
| 추가 플래그 | extraordinary circumstances (호르몬 활성 등) | **log Kow > 4.5 → PBT 스크리닝** (결론엔 영향 없음) |
| 승인 영향 | 절차 요건 | **거절 사유 아님**, B/R 밖 |
| 제출 위치 | Module 1.12.14 | Module 1.6 |
| ICH | 없음 | 없음 |

## 플래시카드 25장

**1. [R][Domain I]**
*Front:* What minimum expected clinical duration triggers carcinogenicity studies under ICH S1A?
*Back:* **6개월 이상 연속 사용**(또는 그에 준하는 잦은 간헐 사용). (ICH S1A)

**2. [A][Domain I]**
*Front:* A toxicologist proposes a 50-fold exposure margin as the top dose for a 2-year rat carcinogenicity study, "as in M3(R2)." Correct this.
*Back:* 발암성 시험은 **S1C(R2)** 를 따라 — 노출 기준 상한은 **25배 AUC 비**이고, 한계용량은 **1,500 mg/kg/day**(MRHD ≤500 mg/day). 50배·1,000 mg/kg은 일반 독성(M3(R2)) 숫자야. (ICH S1C(R2), M3(R2))

**3. [An][Domain I]**
*Front:* S1B(R1) allows omitting the 2-year rat study by weight of evidence. Why does it still retain the 6-month transgenic mouse study?
*Back:* WoE는 **랫 2년 시험의 추가 가치**를 묻는 것이고, 마우스 모델은 **다른 종·다른 기전**(유전자 변형으로 민감도↑, 6개월)으로 보완 정보를 줘 비용·동물 대비 효율이 높아. 두 종 접근 원칙(S1B)을 유지하면서 가장 부담 큰 시험만 WoE로 대체 가능하게 한 설계야. (ICH S1B, S1B(R1))

**4. [A][Domain II]**
*Front:* Under PLLR, what content goes into subsection 8.3 "Females and Males of Reproductive Potential"?
*Back:* 해당 시 **임신 검사** 권고, **피임** 권고(기간 포함), **불임(infertility)** 정보 — 동물·사람 데이터 기반. 8.1은 임신(위험 요약·임상 고려·데이터), 8.2는 수유. (21 CFR 201.57(c)(9)(iii))

**5. [R][Domain I]**
*Front:* Which species are used for embryo-fetal development studies under ICH S5(R3)?
*Back:* **설치류 한 종 + 토끼**(두 종). (ICH S5(R3))

**6. [R][Domain I]**
*Front:* State the US categorical exclusion threshold for drug applications and the regulation.
*Back:* 수생환경 진입 추정 농도 **1 ppb 미만** — 21 CFR **25.31(b)**. (21 CFR 25.31(b))

**7. [A][Domain I]**
*Front:* An EU MAA's Phase I ERA gives PEC_sw = 0.02 µg/L. What follows?
*Back:* action limit **0.01 µg/L 이상**이라 **Phase II** 평가(Tier A: 물리화학·운명·생태독성, PEC/PNEC) 필요. log Kow > 4.5면 PBT 스크리닝도 병행. (EMA ERA Rev. 1)

**8. [An][Domain IV]**
*Front:* Why is an EU ERA never a reason to refuse a marketing authorisation, yet still mandatory?
*Back:* 입법자가 **환경 위험을 환자 이익-위험 판단과 분리**해 환자 접근을 환경 평가가 막지 않도록 했어(Art 8(3)(ca)는 제출 의무, Reg 726/2004는 B/R 밖). 대신 ERA 결과는 **폐기·보관 안내, 위험 완화 조치, 라벨**로 흘러가 환경 보호 목적을 달성해. (Dir 2001/83 Art 8(3)(ca))

**9. [R][Domain II]**
*Front:* Which FDA DMF type covers (a) an API, (b) a container closure, (c) a novel excipient?
*Back:* (a) **Type II**, (b) **Type III**, (c) **Type IV**. Type V는 FDA 승인 참조정보, Type I은 폐지. (FDA DMF)

**10. [A][Domain I]**
*Front:* A Korean API site ships to an EU manufacturer. Customs asks for a document under Directive 2001/83. Which, since when, and who issues it?
*Back:* **Art 46b written confirmation**(2013-07-02~) — **수출국 당국(식약처)** 이 제조소·물질별로 EU 동등 GMP·사찰·정보 통보를 확인하는 문서. EU listed 국가면 면제. (Dir 2001/83 Art 46b)

**11. [A][Domain V]**
*Front:* A CEP was issued in 2021. What must happen in 2026, and what happens after?
*Back:* **5년 시점 1회 갱신**(2026, 약 4.5년에 신청) → CEP 2.0 요건으로 dossier 갱신 → 이후 **무기한 유효**(dossier 최신 유지 조건). (EDQM CEP 2.0 FAQ)

**12. [An][Domain I]**
*Front:* Relate the ICH Q11 "starting material" decision to where ICH Q7 GMP begins, and explain why regulators scrutinise it.
*Back:* Q7 GMP는 **starting material 도입 이후** 공정에 적용되므로, starting material을 **늦게** 잡을수록 GMP·규제 통제 밖 단계가 늘어. 그래서 Q11은 충분한 합성 단계·불순물 제거·구조적 의미를 요구하고 당국이 엄격히 봐 — "상업 입수 가능"만으론 부족해. (ICH Q7 §1.3, Q11 §5)

**13. [R][Domain I]**
*Front:* What size threshold makes an amino-acid polymer a "protein" under 21 CFR 600.3(h)?
*Back:* **40 아미노산 초과**(특정 서열). 화학합성 폴리펩타이드도 포함(2020). (21 CFR 600.3(h))

**14. [A][Domain I]**
*Front:* A company wants to file a 505(b)(2) for a new insulin formulation in 2026. Correct the pathway.
*Back:* 인슐린은 **2020-03-23 deemed BLA** 전환 이후 **PHS 351** 체계야 — 505(b)(2)는 불가. 선택지: **351(a)** 독자 BLA, 또는 reference 대비 **351(k)** biosimilar/interchangeable. (BPCIA transition, PHS 351)

**15. [R][Domain IV]**
*Front:* What two conditions define an interchangeable biosimilar under PHS 351(k)(4)?
*Back:* ① **어떤 환자에서도** reference와 **같은 임상 결과**를 기대할 수 있음 ② 반복 교대 시 **안전성·효능 감소 위험이 교대 없이 쓸 때보다 크지 않음**. (PHS 351(k)(4))

**16. [A][Domain I]**
*Front:* A German pharmacist asks whether the 2022 EMA/HMA statement means they may substitute a biosimilar at the counter. Answer.
*Back:* 아니야. 성명은 **과학적 interchangeability**(처방자 결정 하 교대 가능)를 말한 것이고, **약국 자동 대체(substitution)** 는 **회원국 법·정책**이 정해 — 독일 규정(G-BA 대체 목록 등)을 봐야 해. EU 차원의 법적 지정은 없어. (EMA/HMA statement 2022)

**17. [An][Domain I]**
*Front:* Why do biologics have a separate ICH specification guideline (Q6B) from small molecules (Q6A)?
*Back:* 생물의약품은 **구조 이질성·공정 유래 불순물·생물활성(역가)** 때문에 규격이 물리화학 시험만으로 안 돼 — **생물검정, 면역화학 시험, 공정 관련 불순물(HCP·DNA), 변이체 프로파일**이 들어가고, 규격 설정이 임상 배치 경험과 comparability에 묶여. Q6A의 결정수(decision tree) 논리는 그대로 못 써. (ICH Q6A, Q6B)

**18. [R][Domain II]**
*Front:* Quote the required caution statement on US investigational drug labels.
*Back:* "**Caution: New Drug—Limited by Federal (or United States) law to investigational use.**" (21 CFR 312.6(a))

**19. [A][Domain II]**
*Front:* IMP manufactured in Korea will be used in an EU CTR trial. Who certifies each batch and under what article?
*Back:* EU 내 **제조·수입 허가 보유자(CTR Art 61)의 QP**가 각 batch를 **Art 62**에 따라 인증해 — EU GMP 동등 제조 + CTA 적합. 한국 QC 결과는 재시험·면제 여부를 QP가 판단(MRA 없음). (CTR 536/2014 Arts 61–62)

**20. [A][Domain I]**
*Front:* A Phase 1 batch was made under the Part 211 exemption. The same batch will now be used in Phase 2. Problem?
*Back:* **있어** — 210.2(c) 면제는 **Phase 1 전용** 물질에만 적용돼. Phase 2에 쓰려면 그 batch가 **Part 211 요건**(또는 그에 준하는 소급 평가)을 만족해야 하고, 실무적으로 Phase 2용은 211 하에서 새로 제조하거나 211 적합성을 문서로 입증해야 해. (21 CFR 210.2(c))

**21. [R][Domain II]**
*Front:* Which EU regulation sets GMP for IMPs under the CTR, and from what date did it apply?
*Back:* **Delegated Regulation (EU) 2017/1569**, **2022-01-31**(CTR 적용일)부터. (Reg 2017/1569)

**22. [R][Domain I]**
*Front:* List the four elements of ICH Q10 PQS.
*Back:* 공정성능·제품품질 **모니터링**, **CAPA**, **변경관리**, **경영검토**. (ICH Q10)

**23. [A][Domain I]**
*Front:* An inspector asks for your site's "CCS." What is it and which GMP text requires it?
*Back:* **Contamination Control Strategy** — 시설·장비·인력·공정·모니터링 전반의 오염 통제를 QRM으로 묶은 문서화된 전략. **EU GMP Annex 1(2022, 2023-08-25 시행)** 이 요구해. (EudraLex Annex 1 §2)

**24. [A][Domain III]**
*Front:* After PPQ, manufacturing stops collecting process data except for batch release tests. What stage of FDA's 2011 framework is being neglected and what should be done?
*Back:* **Stage 3 Continued Process Verification**. 상업 생산 중 CPP·CQA·수율 등 데이터를 **지속 수집하고 통계적으로 추세 분석**해 통제 상태를 입증·개선해야 해. 배치 출하 시험만으론 부족해. (FDA Process Validation 2011)

**25. [An][Domain II]**
*Front:* Explain why operating within an approved design space is not a "change," while moving a tablet line to a new site is — and which ICH concept unifies the logic.
*Back:* design space는 **승인 당시 품질 보증이 입증된 범위**라 그 안의 이동은 약속을 깨지 않아(Q8(R2)). 사이트 이전은 승인된 **established conditions**(설비·공정 조건)를 바꾸는 것이라 보고 의무가 생겨. **Q12의 ECs** 개념이 "무엇이 규제 약속이고 무엇이 아닌가"로 둘을 통일해 — EC를 바꾸면 변경, EC 밖은 PQS 관리. (ICH Q8(R2), Q12)

## 유형·도메인 분포
- [R] 9 (36%) / [A] 11 (44%) / [An] 5 (20%)
- Domain I 15 / II 6 / III 1 / IV 3 — US 9 / EU 9 / 글로벌 7.

## 오늘 읽을 1차 출처
1. ICH S1C(R2) — https://database.ich.org/sites/default/files/S1C_R2__Guideline.pdf (비교 숫자 근거)
2. EDQM CEP 2.0 — https://www.edqm.eu/en/what-is-the-cep-2.0 (브라우저로)
3. EMA/HMA statement on interchangeability — https://www.ema.europa.eu/en/news/biosimilar-medicines-can-be-interchanged

**Anki 블록:** `anki/Review_W2.txt` (front;back;tags, 25행, 헤더 없음)
