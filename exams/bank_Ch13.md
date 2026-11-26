# 문제은행 — Ch.13 생물의약품 vs 소분자: 법적 정의·biosimilar·interchangeability

> **근거:** `textbook/Ch13.md` + `cards/Ch13.md` 검증 메모(21 CFR 600.3(h) 최종규칙 2020-02-21·85 FR 10057, FCAA 2019 §605, BPCIA §7002(e) transition 2020-03-23, PHS 351(i)·351(k)(4)·351(k)(7) 4년/12년, FDA interchangeability update draft 2024-06, FDA 명명 guidance 2017, Dir 2001/83 Art 10(4)·Annex I·8+2+1, EMA/HMA 공동 성명 2022-09, WHO TRS 1043 Annex 3, ICH Q5A(R2)·Q5E·Q6B·S6(R1), 21 CFR 600/601/610). 새 숫자 없음. 날짜 계산 문항은 교과서의 4년·12년·8년·10년·11년 규칙으로만 계산했다. 2024 초안의 최종화 여부("?")는 정답 키로 쓰지 않았다.
> **형식:** 영문 시나리오 → 영문 선지 A~D → 정답 → 한국어 해설. 태그 `[R]/[A]/[An]` + Domain.
> **작성:** 2026-11-26. 64문항.

---

### Q01 [R][Domain I] — the protein threshold
Under 21 CFR 600.3(h), as finalised in 2020, when is an alpha amino acid polymer with a specific defined sequence a "protein" for the biological product definition?

A. When it contains more than 40 amino acids, however it is manufactured.
B. When it contains more than 100 amino acids and has a tertiary structure.
C. When it contains 40 or more amino acids and is made in a living system.
D. When it contains more than 40 amino acids and is made by recombinant DNA.

**정답:** A

**해설**
- A: 2020-02-21 최종규칙(85 FR 10057)은 "protein"을 특정 서열의 α-amino acid 중합체로 **40 아미노산 초과**로 정의한다. 화학합성이어도 같다.
- B: 기준 숫자는 40이다. 3차 구조는 정의 요소가 아니다.
- C: "40 이상"이 아니라 "40 초과"다. 40 aa는 peptide다. 생산 방식도 기준이 아니다.
- D: FCAA 2019 §605가 chemically synthesized polypeptide 예외를 삭제해 제조 방식은 기준이 아니다.

---

### Q02 [A][Domain I] — exactly 40 amino acids
A sponsor's lead candidate is a defined-sequence peptide of exactly 40 amino acids. Which US application route applies?

A. Either an NDA or a BLA, at the sponsor's choice after a pre-IND meeting.
B. An NDA under FD&C 505, because the product is a peptide and not a protein.
C. A BLA under PHS 351, because 40 amino acids reaches the protein threshold.
D. A BLA under PHS 351(a), because peptides of this size are handled by CBER.

**정답:** B

**해설**
- B: 경계는 **40 초과**다. 정확히 40 aa는 peptide이므로 drug이고 **NDA(FD&C 505, 21 CFR 314)** 로 간다.
- A: 경로는 법적 정의로 정해진다. 스폰서가 고르지 않는다.
- C: 40은 기준에 도달한 것이 아니다. "이상"과 "초과"를 혼동한 선지다.
- D: 이 제품은 생물의약품이 아니다. 관할 센터 문제 이전에 법적 경로가 NDA다.

---

### Q03 [A][Domain I] — chemically synthesised 45-mer
A company manufactures a 45-amino-acid peptide entirely by solid-phase chemical synthesis, with no cells involved. Which statement is correct?

A. It is a biological product and needs a BLA, since synthesis no longer exempts it.
B. It is a drug and needs an NDA, since the BLA route is limited to products from cells.
C. It is a biological product, but it may stay on an NDA because it was synthesised.
D. It is a drug and needs an NDA, since chemically synthesised polypeptides are excluded.

**정답:** A

**해설**
- A: 45 aa는 **40 초과**라 protein이다. **FCAA 2019 §605**가 PHS 351(i)의 "(except any chemically synthesized polypeptide)"를 삭제해 화학합성이어도 **BLA(PHS 351)** 다.
- B: 생물의약품 여부는 세포 사용이 아니라 아미노산 수로 정한다.
- C: 생물의약품이면 BLA다. 합성을 이유로 NDA에 남는 선택지는 없다.
- D: 화학합성 예외는 2019년에 삭제됐다. 현행 정의에 없다.

---

### Q04 [R][Domain I] — what FCAA 2019 §605 did
What change did the Further Consolidated Appropriations Act 2019, §605, make to PHS Act 351(i)?

A. It transferred therapeutic proteins from CBER to CDER for review and licensing.
B. It moved the protein threshold from 100 amino acids down to 40 amino acids.
C. It added "peptide" to the list of biological product categories in 351(i).
D. It deleted the exception for chemically synthesised polypeptides in 351(i).

**정답:** D

**해설**
- D: §605는 351(i)의 "protein"에서 **"(except any chemically synthesized polypeptide)"를 삭제**했다. 그래서 화학합성 폴리펩타이드도 40 aa를 넘으면 생물의약품이다.
- A: 치료용 단백질의 CDER 이관은 2003년 FDA 내부 조치다. FCAA 2019와 무관하다.
- B: 40 aa 정의는 2020 최종규칙(21 CFR 600.3(h))이 정했다. 다른 숫자에서 기준을 옮겼다는 내용은 교과서에 없다.
- C: 351(i) 범주에 들어간 것은 protein이다. peptide 추가는 교과서에 없다.

---

### Q05 [A][Domain II] — follow-on to a 38-mer
A 38-amino-acid peptide drug is approved in the US. A second company wants to market a follow-on version. Which pathways are available to it?

A. An Article 10(4) similar biological application through the FDA.
B. An ANDA or a 505(b)(2) application under the FD&C Act.
C. A 351(k) biosimilar application, with interchangeability as an option.
D. A 351(a) stand-alone BLA, since peptides lack a generic route.

**정답:** B

**해설**
- B: 40 aa 이하라 peptide이고 drug다. 원 제품이 NDA이므로 후속 제품은 **ANDA / 505(b)(2)** 로 간다.
- A: Art 10(4)는 EU Dir 2001/83 조항이다. FDA 경로가 아니다.
- C: 351(k)는 reference가 BLA인 생물의약품의 경로다. 38 aa 제품엔 적용되지 않는다.
- D: peptide drug에는 ANDA 경로가 있다. BLA 대상도 아니다.

---

### Q06 [R][Domain I] — the 2020 final rule
Which reference correctly identifies the final rule that defined "protein" for the US biological product definition?

A. 21 CFR 600.3(h), published 23 March 2020 at 85 FR 10057.
B. 21 CFR 610.10, published 21 February 2020 at 85 FR 10057.
C. 21 CFR 600.3(h), published 21 February 2020 at 85 FR 10057.
D. 21 CFR 601.2, published 23 March 2020 under BPCIA §7002(e).

**정답:** C

**해설**
- C: 정의 조항은 **21 CFR 600.3(h)** 이고 최종규칙은 **2020-02-21, 85 FR 10057**이다.
- A: 조항은 맞지만 날짜가 transition 날짜와 섞였다.
- B: 610.10은 역가(potency) 표준이다. 정의 조항이 아니다.
- D: 601.2는 BLA 신청 조항이다. 2020-03-23은 BPCIA transition 날짜다.

---

### Q07 [R][Domain I] — the transition date
On what date were NDAs for protein products such as insulin and human growth hormone deemed to be BLAs under the BPCIA transition provision?

A. 23 March 2020
B. 23 March 2010
C. 21 February 2020
D. 15 May 2018

**정답:** A

**해설**
- A: BPCIA §7002(e)에 따라 **2020-03-23**에 FD&C 505로 승인된 단백질 제품의 NDA가 "deemed to be a BLA"로 전환됐다.
- B: 날짜의 연도가 틀렸다. 전환은 2020년이다.
- C: 2020-02-21은 21 CFR 600.3(h) 최종규칙 공포일이다.
- D: 2018-05-15는 교과서 독점 계산 예의 reference licensure 날짜다.

---

### Q08 [R][Domain I] — products that transitioned
Which group of products moved from NDAs to deemed BLAs on 23 March 2020?

A. Synthetic peptides of 40 amino acids or fewer approved under FD&C 505.
B. Monoclonal antibodies that CBER had licensed before the 2003 transfer.
C. Vaccines, blood components and allergenic products previously approved on NDAs.
D. Insulin, human growth hormone and hyaluronidase approved under FD&C 505.

**정답:** D

**해설**
- D: 전환 대상은 FD&C 505로 승인됐던 **단백질 제품**(insulin, growth hormone, hyaluronidase 등)이다.
- A: 40 aa 이하는 peptide라 drug로 남는다.
- B: 단클론항체는 원래 BLA다. 2003 이관은 센터 간 이동이지 NDA 전환이 아니다.
- C: 백신·혈액·알레르겐은 원래 PHS 351 생물의약품이다. 전환할 NDA가 아니다.

---

### Q09 [A][Domain IV] — insulin follow-ons before 2020
Before 23 March 2020, a company developed a follow-on insulin referencing an insulin approved under FD&C 505. What was its realistic pathway and status?

A. A 351(a) stand-alone BLA, since insulin was already a biological product then.
B. A 505(b)(2) application, so it could be neither biosimilar nor interchangeable.
C. A 351(k) application, with interchangeability available after a switching study.
D. An ANDA, giving automatic pharmacy substitution as a therapeutic equivalent.

**정답:** B

**해설**
- B: NDA 체계에서 인슐린 후속 제품은 **505(b)(2)** 로 갔다. 그래서 "biosimilar"도 "interchangeable"도 될 수 없었다.
- A: 전환 전 인슐린은 NDA 제품이었다. BLA로 간주된 것은 2020-03-23부터다.
- C: 351(k)는 reference가 BLA일 때의 경로다. 전환 전 인슐린은 NDA였다.
- D: 교과서는 전환 전 인슐린 후속 제품의 경로를 505(b)(2)로 서술한다. ANDA 대체 주장은 근거가 없다.

---

### Q10 [A][Domain IV] — what the transition opened
A sponsor is now developing a follow-on to an insulin that was deemed a BLA in 2020. Which pathway reflects the commercial change the transition created?

A. A 351(k) application, with an interchangeable designation possible.
B. A 351(k) application, but interchangeability is barred for insulin.
C. A 505(b)(2) application, which remains the sole route for insulin.
D. An ANDA, because insulin has a long history as an approved drug.

**정답:** A

**해설**
- A: 전환 이후 인슐린 후속 제품은 **351(k)** 로 간다. **interchangeable 인슐린**(약국 대체 가능)이 가능해진 것이 상업적 의미다.
- B: interchangeable 인슐린이 가능해졌다는 것이 교과서의 핵심이다. 금지 근거는 없다.
- C: 505(b)(2)는 전환 전 경로다. 전환 후엔 351(k)다.
- D: deemed BLA 제품의 후속 제품은 ANDA로 가지 않는다.

---

### Q11 [An][Domain IV] — exclusivity on deemed BLAs
After the 2020 transition, why did older insulin products have no remaining 12-year reference exclusivity against 351(k) applicants?

A. Exclusivity runs from the deemed-BLA date and expired on 23 March 2020.
B. Exclusivity runs from first licensure, and their first approval was long past.
C. Deemed BLAs are excluded from 351(k)(7) protection by the transition provision itself.
D. Insulin exclusivity had been transferred to the Purple Book listing date.

**정답:** B

**해설**
- B: reference 독점 12년은 **첫 licensure 날짜 기준**이다. 오래된 인슐린은 첫 승인이 오래전이라 남은 독점이 없었다.
- A: 기준점은 전환일이 아니다. 전환일 기준이면 오히려 독점이 새로 시작됐을 것이다.
- C: 교과서는 독점이 없던 이유를 첫 licensure 기준으로 설명한다. 전환 조항의 배제 규정은 근거가 없다.
- D: Purple Book은 interchangeability 표기 목록이다. 독점 기준일이 아니다.

---

### Q12 [R][Domain I] — 351(i) categories
Which item is NOT among the categories listed in the PHS Act 351(i) definition of a biological product?

A. Polypeptide of 30 amino acids
B. Allergenic product
C. Antitoxin
D. Therapeutic serum

**정답:** A

**해설**
- A: 30 aa는 protein 정의(40 초과)에 미달한다. peptide라 drug다.
- B·C·D: 351(i) 범주는 virus, therapeutic serum, toxin, antitoxin, vaccine, blood, blood component/derivative, allergenic product, protein 등이다. 셋 다 목록에 있다.

---

### Q13 [A][Domain I] — monoclonal antibody jurisdiction
A sponsor is preparing a BLA for a humanised monoclonal antibody for rheumatoid arthritis. Which FDA center will review it?

A. CBER, because CBER reviews the products licensed under PHS 351.
B. CBER/OTP, because antibodies are made in living cell systems.
C. CDER, because therapeutic proteins were transferred there in 2003.
D. CDRH, because the antibody is supplied in a prefilled syringe.

**정답:** C

**해설**
- C: **2003년 치료용 단백질이 CDER로 이관**돼 단클론항체는 **CDER**가 관할한다.
- A: PHS 351 제품이 모두 CBER인 것은 아니다. 치료용 단백질·항체는 CDER다.
- B: CBER/OTP는 세포·유전자 치료 제품 관할이다. 세포에서 생산된다는 이유로 항체가 가지 않는다.
- D: 교과서는 항체 관할을 CDER로 정리한다. 기구 센터는 근거가 없다.

---

### Q14 [A][Domain I] — CAR-T jurisdiction
A company plans to file for an autologous CAR-T cell therapy. Which center and application type apply?

A. CBER/OTP, with a BLA under PHS 351(a).
B. CBER/OTP, with an NDA under FD&C 505.
C. CDER, with a 351(k) biosimilar application.
D. CDER, with a BLA under PHS 351(a).

**정답:** A

**해설**
- A: 세포·유전자 치료 제품은 **CBER/OTP**가 관할하고 **BLA 351(a)** 로 간다.
- B: 세포 치료 제품은 생물의약품이다. NDA가 아니다.
- C: 독자 개발 제품이고, 세포 제품에는 biosimilar 경로가 사실상 적용되지 않는다.
- D: CDER는 치료용 단백질·항체 관할이다. CAR-T는 CBER/OTP다.

---

### Q15 [A][Domain I] — plasma-derived immunoglobulin
Which FDA center regulates a plasma-derived immunoglobulin product?

A. CDER, because it was among the products deemed BLAs in 2020.
B. CDER, because immunoglobulins are therapeutic proteins.
C. CBER/OTP, because plasma is a human tissue product.
D. CBER, because blood derivatives remain with that center.

**정답:** D

**해설**
- D: 혈액·혈액 유래 제품은 **CBER** 관할이다. 백신·혈액·세포/유전자/조직·알레르겐이 CBER라는 원칙대로다.
- A: 2020 전환 대상은 NDA로 승인됐던 단백질(인슐린 등)이다. 혈장 유래 면역글로불린이 아니다.
- B: 2003 이관은 치료용 단백질 일반이다. 혈액 유래 제품은 CBER에 남는다.
- C: OTP는 세포·유전자 치료 제품을 맡는다. 혈장 제품은 CBER다.

---

### Q16 [A][Domain I] — the 2003 transfer
A colleague assumes a new therapeutic protein BLA will go to CBER, since CBER historically licensed biologics. Which event explains why CDER reviews it instead?

A. Cell and gene therapy products were moved into a new office in CDER.
B. Vaccines and allergenic products were moved from CDER to CBER.
C. Therapeutic proteins were transferred from CBER to CDER.
D. Insulin and growth hormone NDAs were converted into BLAs.

**정답:** C

**해설**
- C: **2003년 치료용 단백질이 CDER로 이관**됐다. 그래서 치료용 단백질·단클론항체는 CDER, 백신·혈액·세포/유전자/조직·알레르겐은 CBER다.
- A: 세포·유전자 치료는 CBER/OTP 관할이다.
- B: 백신·알레르겐은 CBER 관할이다. 2003 이관의 내용이 아니다.
- D: NDA의 BLA 전환은 2020-03-23 BPCIA transition이다.

---
### Q17 [A][Domain II] — MSC-EV product route
A start-up is developing a mesenchymal stromal cell-derived extracellular vesicle (MSC-EV) product as a first-in-class therapy. Which center and application route apply?

A. CDER, with a BLA under 351(a), as a therapeutic protein.
B. CDER, with an NDA, since vesicles are not living cells.
C. CBER/OTP, with a stand-alone BLA under PHS 351(a).
D. CBER/OTP, with a 351(k) application against a cell product.

**정답:** C

**해설**
- C: 교과서는 MSC-EV·대식세포 제품을 **CBER/OTP, BLA 351(a)** 로 정리한다.
- A: CDER는 치료용 단백질·항체 관할이다. MSC-EV는 CBER/OTP다.
- B: EV 제품은 생물의약품으로 다룬다. NDA가 아니다.
- D: first-in-class 제품이고, 세포·EV 제품의 biosimilar 경로는 사실상 적용되지 않는다.

---

### Q18 [R][Domain V] — what 21 CFR 600 contains
Which content belongs to 21 CFR Part 600?

A. BLA licensing in 600.2 and reporting of manufacturing changes in 600.12.
B. Accelerated approval of biologics in 600.40–46 and lot release in 600.2(c).
C. General provisions, definitions in 600.3 and postmarketing reporting in 600.80.
D. Potency in 600.10, sterility in 600.12 and the labeling requirements in Subpart G.

**정답:** C

**해설**
- C: **Part 600**은 일반 조항·정의(**600.3**)·시판후 보고(**600.80**)다.
- A: BLA는 **601.2**, 변경은 **601.12**다. Part 601 내용을 600으로 바꿨다.
- B: accelerated approval은 **601.40–46**, lot release는 601.2(c)/610.2다.
- D: 역가 610.10·무균 610.12·라벨 Subpart G는 **Part 610**이다.

---

### Q19 [A][Domain V] — reporting a change to a licensed biologic
A licensed monoclonal antibody manufacturer needs to report a post-approval manufacturing change. Under which regulation are the reporting categories found?

A. 21 CFR 601.12, using the PAS, CBE-30 and AR categories.
B. 21 CFR 610.2, using the lot release submission categories.
C. 21 CFR 600.80, using the expedited postmarketing categories.
D. 21 CFR 314.70, using the CBE-0 and CBE-30 categories.

**정답:** A

**해설**
- A: 생물의약품 변경 보고는 **21 CFR 601.12**(PAS/CBE-30/AR)다.
- B: 610.2는 lot release 근거 조항이다. 변경 보고 카테고리가 아니다.
- C: 600.80은 시판후 보고(이상사례)다. 제조 변경 조항이 아니다.
- D: 314.70은 소분자(NDA) 변경 카테고리다.

---

### Q20 [R][Domain II] — accelerated approval for biologics
Where are the accelerated approval provisions for biological products codified?

A. 21 CFR 601.40–46
B. 21 CFR 610.10–12
C. 21 CFR 600.80–82
D. 21 CFR 601.12

**정답:** A

**해설**
- A: 생물의약품 accelerated approval은 **21 CFR 601.40–46**이다.
- B: 610.10은 역가, 610.12는 무균 표준이다.
- C: 600.80은 시판후 보고다.
- D: 601.12는 제조 변경 보고 조항이다.

---

### Q21 [A][Domain II] — what Part 610 does
A quality lead asks what role 21 CFR Part 610 plays for a licensed biologic. Which answer is correct?

A. It defines "protein" and lists the categories of biological products.
B. It holds the BLA content requirements, including the filing format in 610.2.
C. It sets the PAS, CBE-30 and AR reporting categories for post-approval manufacturing changes.
D. It sets general standards, such as potency in 610.10 and sterility in 610.12.

**정답:** D

**해설**
- D: **Part 610**은 general biological products standards다. 역가 **610.10**, 무균 **610.12**, 순도, 라벨 Subpart G가 들어 있다.
- A: 정의는 **600.3**(protein은 600.3(h))이다.
- B: BLA 신청은 **601.2**다. 610.2는 lot release 근거로 언급되는 조항이다.
- C: 변경 카테고리는 **601.12**다.

---

### Q22 [A][Domain II] — lot release
A sponsor asks whether FDA can require submission of samples and protocols for each lot of its licensed biologic before distribution. Which statement is correct?

A. FDA can, but solely under 600.80 as part of postmarketing reporting.
B. FDA cannot, because lot release applies to NDA products under Part 314.
C. FDA can require lot release, under 21 CFR 601.2(c) and 610.2.
D. FDA cannot, because 610 standards replace lot-by-lot review entirely.

**정답:** C

**해설**
- C: lot release는 **601.2(c)/610.2** 하에서 FDA가 요구할 수 있다.
- A: 600.80은 시판후 보고 조항이다. lot release 근거가 아니다.
- B: lot release는 생물의약품 조항(601·610)에 있다. Part 314 사항이 아니다.
- D: 610은 제품 표준·시험 요건이고 lot release를 없애지 않는다.

---

### Q23 [A][Domain II] — BLA filing provision
A sponsor of a new therapeutic protein is assembling its original licence application. Under which provision is the BLA submitted?

A. 21 CFR 610.10, with potency data
B. 21 CFR 600.3(h)
C. 21 CFR 314.50, as for a new drug
D. 21 CFR 601.2

**정답:** D

**해설**
- D: BLA 신청은 **21 CFR 601.2**다.
- A: 610.10은 역가 표준이다. 신청 조항이 아니다.
- B: 600.3(h)는 protein 정의 조항이다.
- C: 교과서는 NDA 체계를 21 CFR 314로 정리한다. 생물의약품 licensing은 Part 601이다.

---

### Q24 [R][Domain IV] — US biosimilar definition
Which statement matches the PHS Act definition of a biosimilar?

A. Identical active ingredient to the reference, shown by full structural characterisation.
B. Therapeutically equivalent to the reference, shown by bioequivalence in healthy volunteers.
C. Highly similar to the reference, with no clinically meaningful differences in safety, purity or potency.
D. Highly similar to the reference, with the same clinical result expected in any given patient.

**정답:** C

**해설**
- C: biosimilar는 reference와 **highly similar**(임상적으로 비활성 성분의 차이는 제외)하고 안전성·순도·역가에서 **임상적으로 의미 있는 차이가 없는** 제품이다.
- A: 동일성 입증은 제네릭 개념이다. 생물의약품은 "같은 분자"를 입증할 수 없다.
- B: bioequivalence 기반 치료 동등성은 소분자 제네릭 개념이다.
- D: "any given patient에서 같은 임상 결과"는 interchangeable의 추가 기준(351(k)(4))이다.

---

### Q25 [R][Domain IV] — interchangeable standard
Beyond being biosimilar, what must be shown for a US interchangeable designation under 351(k)(4)?

A. Same clinical result in the average patient, and a single switch from the reference is shown to be safe.
B. Superior efficacy in a sensitive population, and switching risk lower than continuing the reference.
C. Identical primary structure and glycosylation, and pharmacy substitution approved by state boards of pharmacy.
D. Same result in any given patient, and repeated switching adds no more risk than staying on the reference.

**정답:** D

**해설**
- D: 351(k)(4)는 biosimilar이면서 **any given patient에서 reference와 같은 임상 결과**를 기대할 수 있고, **반복 교대 시 안전성·효능 감소 위험이 교대 없이 쓸 때보다 크지 않음**을 요구한다.
- A: 기준은 평균 환자가 아니라 어떤 환자에서도다. 교대도 반복 교대를 전제로 한다.
- B: 우월성은 요구되지 않는다. 기준은 위험이 "더 크지 않음"이다.
- C: 구조 동일성은 요구되지 않는다. 약국 대체는 주법 문제이고 지정 요건이 아니다.

---

### Q26 [A][Domain IV] — what interchangeability enables
A US pharmacist receives a prescription for a reference biologic. An FDA-designated interchangeable product is in stock. Which statement is correct?

A. The pharmacist may substitute it without prescriber involvement, subject to state law.
B. The pharmacist must contact the prescriber first, because interchangeability is a scientific opinion.
C. Substitution is decided by FDA case by case at the time of dispensing for each patient.
D. Substitution is possible for any licensed biosimilar, so the designation adds nothing.

**정답:** A

**해설**
- A: interchangeable 제품은 **처방자 개입 없이 약국 대체**가 가능하다. 대체 자체는 **주법**에 따른다.
- B: 과학 성명으로서의 interchangeability는 EU(EMA/HMA 성명)다. 미국은 법정 지정이다.
- C: FDA는 지정을 심사·부여한다. 조제 시점의 대체 결정을 하지 않는다.
- D: 처방자 개입 없는 약국 대체는 interchangeable 지정의 효과다. biosimilar만으로는 생기지 않는다.

---

### Q27 [A][Domain IV] — where designation appears
A payer analyst wants to confirm whether a US biosimilar holds an interchangeable designation. Where is that status shown?

A. In the Purple Book
B. In the product's state formulary, issued by the board of pharmacy.
C. In the EMA product register, since designation is shared with the EU.
D. In the Orange Book, alongside the therapeutic equivalence codes.

**정답:** A

**해설**
- A: 미국 interchangeability는 FDA가 부여하는 법정 지정이고 **Purple Book**에 표기된다.
- B: 주법은 약국 대체를 다룬다. 지정 표기 장소가 아니다.
- C: EU에는 interchangeability 법적 지정이 없다.
- D: 교과서는 interchangeable 표기를 Purple Book으로 정리한다. Orange Book은 근거가 없다.

---

### Q28 [R][Domain IV] — 351(k)(7) periods
What exclusivity periods does PHS 351(k)(7) give a reference product, counted from its first licensure?

A. 5 years before a 351(k) may be submitted, and 12 years before it may be approved.
B. 4 years before a 351(k) may be submitted, and 12 years before it may be approved.
C. 8 years before a 351(k) may be submitted, and 10 years before it may be approved.
D. 4 years before a 351(k) may be approved, and 12 years before it may be submitted.

**정답:** B

**해설**
- B: 351(k)(7)은 reference **첫 licensure 기준 4년 제출 금지 / 12년 승인 금지**다.
- A: 제출 금지 기간은 4년이다.
- C: 8년·10년은 EU의 데이터 보호·시장 보호 구조다.
- D: 제출과 승인이 뒤바뀌었다.

---

### Q29 [A][Domain IV] — earliest US submission
A reference biologic was first licensed in the US on 15 May 2018. What is the earliest date a 351(k) application referencing it may be submitted?

A. 15 May 2026
B. 15 May 2022
C. 15 May 2030
D. 15 May 2023

**정답:** B

**해설**
- B: 제출 금지는 첫 licensure 기준 **4년**이다. 2018-05-15에 4년을 더하면 **2022-05-15 이후** 제출할 수 있다.
- A: 8년을 더한 날짜다. EU 데이터 보호 종료일 계산이다.
- C: 12년을 더한 날짜다. 미국 승인 가능 시점이다.
- D: 5년을 더한 날짜다. 351(k)(7)의 제출 금지는 4년이다.

---

### Q30 [A][Domain IV] — earliest US licensure
For the same reference product first licensed on 15 May 2018, when is the earliest date FDA may license a 351(k) biosimilar?

A. 15 May 2022
B. 15 May 2028
C. 15 May 2029
D. 15 May 2030

**정답:** D

**해설**
- D: 승인 금지는 첫 licensure 기준 **12년**이다. 2018-05-15 + 12년 = **2030-05-15 이후** 승인할 수 있다.
- A: 4년을 더한 날짜다. 제출 가능 시점이다.
- B: 10년을 더한 날짜다. EU 시장 보호 종료 계산이다.
- C: 11년을 더한 날짜다. EU에서 새 적응증 1년이 붙은 경우의 계산이다.

---

### Q31 [A][Domain IV] — EU dates for the same reference
The same reference product was authorised in the EU on 15 May 2018, with no additional year earned. When may an Article 10(4) application be submitted, and when may the biosimilar be placed on the market?

A. Submit from 15 May 2026; market from 15 May 2029.
B. Submit from 15 May 2028; market from 15 May 2030.
C. Submit from 15 May 2022; market from 15 May 2030.
D. Submit from 15 May 2026; market from 15 May 2028.

**정답:** D

**해설**
- D: EU는 **8년 데이터 보호 + 2년 시장 보호**다. 2018-05-15 + 8년 = **2026-05-15**부터 신청, + 10년 = **2028-05-15**부터 출시다.
- A: 신청일은 맞다. 출시일은 추가 1년이 붙은 경우의 계산이라 문제 조건과 다르다.
- B: 8년과 10년을 각각 2년씩 밀었다.
- C: 미국 4년/12년 규칙을 EU에 적용했다.

---

### Q32 [An][Domain IV] — EU with the extra year
The EU reference product authorised on 15 May 2018 earns the additional year for a new indication. Which date is the earliest the biosimilar may be placed on the EU market?

A. 15 May 2029
B. 15 May 2027
C. 15 May 2028
D. 15 May 2030

**정답:** A

**해설**
- A: 8년 데이터 보호 + 2년 시장 보호 + **새 적응증 1년**이면 총 11년이다. 2018-05-15 + 11년 = **2029-05-15**다.
- B: 9년을 더한 날짜다. EU 구조에 9년 시점은 없다.
- C: 추가 1년이 없는 경우의 출시일이다.
- D: 12년을 더한 날짜다. 미국 승인 금지 기간이다.

---
### Q33 [An][Domain IV] — US versus EU protection length
Comparing the US 351(k)(7) approval bar with the EU 8+2 structure (without the extra year), which statement is correct?

A. The two are equal in practice, since both end at 10 years.
B. The EU bar is 2 years longer, because data protection runs 8 years.
C. The US bar is 2 years longer, at 12 years versus 10 years.
D. The US bar is 4 years longer, because submission opens at 4 years.

**정답:** C

**해설**
- C: 미국은 **12년 승인 금지**, EU는 **8+2 = 10년** 뒤 출시다. 미국이 **2년 길다**.
- A: 미국 승인 금지는 12년이다. 10년이 아니다.
- B: 방향이 반대다. 8년은 EU 신청 금지 기간이지 출시 금지 기간이 아니다.
- D: 4년은 미국 제출 금지 기간이다. 출시 금지 기간끼리 비교하면 차이는 2년이다.

---

### Q34 [A][Domain IV] — a different reference date
A reference biologic was first licensed in the US on 1 September 2015. A biosimilar developer asks for the earliest 351(k) submission date and the earliest licensure date.

A. Submit from 1 September 2023; license from 1 September 2025.
B. Submit from 1 September 2020; license from 1 September 2027.
C. Submit from 1 September 2019; license from 1 September 2027.
D. Submit from 1 September 2019; license from 1 September 2025.

**정답:** C

**해설**
- C: 첫 licensure 2015-09-01에 **4년**을 더하면 제출 가능일 **2019-09-01**, **12년**을 더하면 승인 가능일 **2027-09-01**이다.
- A: EU의 8년·10년 규칙을 미국에 적용했다.
- B: 승인일은 맞다. 제출일은 5년을 더한 값이다.
- D: 제출일은 맞다. 승인일은 10년을 더한 값이라 12년 규칙과 다르다.

---

### Q35 [A][Domain IV] — premature filing
A reference product was first licensed on 15 May 2018. A developer submits its 351(k) application on 1 March 2021, intending to wait for licensure until the 12-year date. Evaluate.

A. Acceptable, provided the sponsor waives any interchangeable designation.
B. Not acceptable, because submission is barred until 15 May 2022.
C. Acceptable, because 351(k)(7) restricts the licensure date alone.
D. Not acceptable, because submission is barred until 15 May 2026.

**정답:** B

**해설**
- B: 351(k)(7)은 첫 licensure 기준 **4년 제출 금지**도 둔다. 2018-05-15 + 4년 = 2022-05-15 전엔 제출할 수 없다.
- A: interchangeability 포기는 독점 기간과 무관하다.
- C: 12년 승인 금지와 별도로 4년 제출 금지가 있다.
- D: 2026-05-15는 8년을 더한 값이다. EU 데이터 보호 계산이다.

---

### Q36 [R][Domain V] — US naming convention
Under FDA's 2017 nonproprietary naming guidance, how are biological products named?

A. A core name plus a meaningless 4-letter suffix, for references and biosimilars alike.
B. A core name plus a 4-letter suffix, applied to biosimilars but not to references.
C. The INN alone, with traceability through brand name and batch number.
D. A core name plus a meaningful 3-letter suffix naming the manufacturer.

**정답:** A

**해설**
- A: FDA 2017 guidance는 핵심 이름 + **4자 무의미 접미사**(예: adalimumab-atto)이고, reference와 biosimilar **모두** 대상이다. 기존 제품 소급 적용은 보류됐다.
- B: reference도 대상이다.
- C: INN 그대로 + brand·batch 추적은 EU 방식이다.
- D: 접미사는 4자이고 의미가 없다.

---

### Q37 [A][Domain V] — EU traceability
A pharmacovigilance lead for an EU biosimilar asks how individual products are distinguished in adverse event reports. Which statement is correct?

A. The biosimilar receives a new INN distinct from the reference at authorisation.
B. The INN carries an FDA-style 4-letter suffix that differs by marketing authorisation holder.
C. The EMA assigns each biosimilar a product code under its 2022 interchangeability statement.
D. The INN is used without a suffix, and traceability relies on brand name and batch number.

**정답:** D

**해설**
- D: EU는 **INN 그대로, 접미사 없음**이다. 추적은 **brand name + batch number**로 하고, 이는 PV 의무(Dir 2010/84)다.
- A: EU는 INN을 그대로 쓴다.
- B: 4자 접미사는 미국 FDA 2017 방식이다.
- C: 2022 EMA/HMA 성명은 interchangeability에 관한 과학 성명이다. 명명과 무관하다.

---

### Q38 [R][Domain IV] — 2024 draft direction
What direction does FDA's June 2024 draft "Considerations in Demonstrating Interchangeability — Update" take?

A. Interchangeability would move from FDA designation to state pharmacy boards.
B. Interchangeability would be granted with any biosimilar licence on request.
C. Switching studies would generally not be needed to support interchangeability.
D. Switching studies would be needed for each product, including those already designated.

**정답:** C

**해설**
- C: 2024-06 초안은 누적 경험상 교대 위험이 미미해 **switching study를 일반적으로 요구하지 않는** 방향이다.
- A: 지정은 FDA가 하고, 약국 대체가 주법 사항이다.
- B: 351(k)(4) 기준 충족 논증은 여전히 필요하다. 신청만으로 부여되지 않는다.
- D: 방향이 반대다.

---

### Q39 [A][Domain IV] — relying on the draft
A US biosimilar sponsor plans to seek interchangeability with no switching study, citing the 2024 draft update. As of the exam reference date, which caveat is correct?

A. The draft is binding because FDA has approved interchangeables without switching data.
B. The draft is a draft; the 2019 final guidance remains the formal standard.
C. The draft supersedes the 2019 guidance, so the plan needs no further justification.
D. The draft applies to insulin products that were deemed BLAs in 2020.

**정답:** B

**해설**
- B: 2024 문서는 **초안**이다. **2019 최종 guidance가 공식 기준**이고, 비교 분석·임상 데이터로 351(k)(4) 기준 충족을 논증해야 한다.
- A: 승인 사례가 있어도 초안이 구속력을 갖지 않는다. 최종화 여부는 확인 대상이다.
- C: 초안은 최종 guidance를 대체하지 않는다.
- D: 초안의 적용 범위를 인슐린으로 한정하는 내용은 교과서에 없다.

---

### Q40 [R][Domain IV] — evidence behind the draft
According to the textbook, what experience did FDA cite at the time of the 2024 interchangeability draft?

A. Of 12 interchangeable products, 9 had been approved without switching data.
B. Of 9 interchangeable products, 13 switching studies had uniformly shown differences.
C. Of 13 interchangeable products, 9 had been approved without switching data.
D. Of 13 interchangeable products, 4 had been approved without switching data.

**정답:** C

**해설**
- C: 초안 시점에 **13개 interchangeable 중 9개**가 switching 데이터 없이 승인됐다.
- A: 전체 수는 13개다.
- B: 숫자를 뒤섞었다. 누적 경험은 교대 위험이 미미하다는 쪽이다.
- D: 9개를 4개로 바꿨다.

---

### Q41 [R][Domain I] — EU legal basis
What is the legal basis for a biosimilar marketing authorisation application in the EU?

A. Directive 2001/83 Article 10(2)(b), defining the generic product.
B. Directive 2001/83 Article 10(1), the generic application route.
C. Directive 2001/83 Article 10(4), the similar biological route.
D. Directive 2010/84, the pharmacovigilance amending directive.

**정답:** C

**해설**
- C: EU biosimilar는 **Dir 2001/83 Art 10(4)** 의 "similar biological" 신청이다.
- A: 10(2)(b)는 generic 정의다. biosimilar는 이 정의를 쓸 수 없어서 10(4)로 간다.
- B: Art 10(1)은 독점(데이터·시장 보호) 근거로 인용되는 조항이다. 교과서는 biosimilar 신청 근거를 10(4)로 둔다.
- D: Dir 2010/84는 PV 의무(brand·batch 추적) 근거다.

---

### Q42 [A][Domain I] — why not the generic route
An EU applicant asks why its biological follow-on product cannot be filed as a generic under Article 10(2)(b). Which explanation is correct?

A. Raw material or process differences from the reference prevent use of the generic definition.
B. Generic filings are closed to biological products whose reference holds an orphan designation.
C. Generic filings require a comparative efficacy trial that biological products cannot run.
D. The generic definition requires a centralised procedure that biological products cannot use.

**정답:** A

**해설**
- A: Art 10(4)는 reference와 **원료·공정 차이**로 generic 정의(10(2)(b))를 쓸 수 없는 생물학적 제품의 경로다.
- B: 희귀의약품 지정은 교과서에서 다루지 않는 근거다.
- C: generic 경로가 비교 효능시험을 요구한다는 근거는 없다.
- D: 절차 문제가 아니라 원료·공정 차이가 이유다.

---

### Q43 [R][Domain I] — EU definition of a biological product
Where does EU legislation define a biological medicinal product?

A. Directive 2001/83, Article 10(2)(b)
B. Directive 2010/84, Article 10(4)
C. CHMP/437/04 Rev 1 (2014)
D. Directive 2001/83, Annex I, Part I, 3.2.1.1(b)

**정답:** D

**해설**
- D: 생물학적 제품 정의는 **Dir 2001/83 Annex I Part I 3.2.1.1(b)** 다.
- A: 10(2)(b)는 generic 정의다.
- B: Dir 2010/84는 PV 개정 지침이다. 10(4)는 Dir 2001/83 조항이다.
- C: CHMP/437/04 Rev 1은 biosimilar 과학 지침이다. 법적 정의가 아니다.

---

### Q44 [A][Domain IV] — EU protection structure
An EU reference product holder asks what regulatory protection applies against Article 10(4) biosimilars. Which statement is correct?

A. 8 years of market protection, then 2 years of data protection, plus 1 year for a new indication.
B. 10 years of data protection, then 1 year of market protection for a new indication.
C. 8 years of data protection, then 2 years of market protection, plus 1 year for a new indication.
D. 4 years of data protection and 12 years before approval, counted from first authorisation.

**정답:** C

**해설**
- C: EU는 **8년 데이터 보호 + 2년 시장 보호(+1년 새 적응증)** 다.
- A: 데이터 보호와 시장 보호의 순서가 뒤바뀌었다.
- B: 데이터 보호는 8년이고 시장 보호 2년이 따로 있다.
- D: 미국 351(k)(7)의 4년/12년이다.

---

### Q45 [R][Domain I] — first EU biosimilar
Which product was the first biosimilar authorised in the EU, and when?

A. An insulin biosimilar, in 2020
B. Omnitrope, in 2006
C. An adalimumab biosimilar, in 2006
D. Omnitrope, in 2014

**정답:** B

**해설**
- B: 첫 EU biosimilar는 **2006년 Omnitrope**다.
- A: 2020은 미국 BPCIA transition 연도다.
- C: adalimumab은 교과서에서 미국 명명 예시(adalimumab-atto)로 나온다.
- D: 2014년은 CHMP/437/04 Rev 1 과학 지침 연도다.

---

### Q46 [R][Domain III] — EU scientific guideline
Which document is the EU overarching scientific guideline on similar biological medicinal products cited in the textbook?

A. CHMP/437/04 Rev 1 (2014)
B. WHO TRS 1043 Annex 3 (2022)
C. ICH Q5E
D. EMA immunogenicity guideline (2017)

**정답:** A

**해설**
- A: 교과서가 인용한 EU biosimilar 과학 지침은 **CHMP/437/04 Rev 1(2014)** 이다.
- B: WHO 지침이다. EU 지침이 아니다.
- C: Q5E는 제조 변경 comparability ICH 지침이다.
- D: 치료용 단백질 면역원성 평가 지침이다.

---

### Q47 [An][Domain IV] — EU interchangeability
A US colleague assumes the EU also grants interchangeable designations. Which statement correctly describes the EU position?

A. CHMP awards interchangeability product by product after a switching study, as FDA does.
B. Directive 2001/83 Article 10(4) grants interchangeability to each biosimilar on authorisation.
C. EMA designates interchangeable biosimilars, and member states must then allow pharmacy substitution.
D. A 2022 EMA/HMA statement calls EU biosimilars interchangeable; substitution policy stays with member states.

**정답:** D

**해설**
- D: EU엔 interchangeability **법적 지정이 없다**. **2022-09 EMA/HMA 공동 성명**(CHMP 2022-07-22 승인)이 EU 승인 biosimilar는 reference 또는 동등 biosimilar와 interchangeable이라 선언했지만, **약국 substitution 정책은 회원국 권한**이다.
- A: 제품별 지정은 미국 351(k)(4) 구조다. EU엔 없다.
- B: Art 10(4)는 biosimilar 신청 근거다. interchangeability 지정 조항이 아니다.
- C: "EMA가 interchangeable 지정했다"는 문장은 틀리다. 성명은 과학적 입장이다.

---

### Q48 [An][Domain IV] — spotting the error in a slide
A draft slide on EU biosimilars contains four statements. Which statement is INCORRECT?

A. EMA has designated certain biosimilars as interchangeable with their references.
B. Whether a pharmacy may substitute a biosimilar is decided by each member state.
C. The EMA/HMA statement on interchangeability was issued in September 2022.
D. EU biosimilars keep the INN, without a distinguishing suffix.

**정답:** A

**해설**
- A: EMA는 interchangeable **지정을 하지 않는다**. 2022 성명은 과학 성명이고 법적 지정이 아니다. 이 문장이 틀렸다.
- B: substitution은 **회원국 권한**이다. 맞는 문장이다.
- C: EMA/HMA 공동 성명은 **2022-09**다. 맞는 문장이다.
- D: EU는 **INN 그대로**, 접미사 없음이다. 맞는 문장이다.

---
### Q49 [A][Domain III] — most sensitive step
A biosimilar development team is ranking its comparative data by sensitivity for detecting product differences. Under the totality-of-evidence approach, which element is the most sensitive?

A. The comparative PK/PD study in healthy volunteers or patients.
B. The comparative efficacy trial in a sensitive patient population.
C. Extensive analytical comparison of structure and function.
D. The comparative toxicology study in a relevant animal species.

**정답:** C

**해설**
- C: totality of evidence에서 **광범위 분석적 비교가 가장 민감**하다. 그 다음이 기능 시험, (필요시) 비임상, 비교 PK/PD, 잔여 불확실성 해소용 비교 임상이다.
- A: 비교 PK/PD는 분석적 비교 뒤의 단계다.
- B: 비교 임상은 잔여 불확실성을 해소하는 단계다. 가장 민감한 단계가 아니다.
- D: 비임상은 필요할 때만 하는 단계다.

---

### Q50 [An][Domain III] — why not full Phase 1–3
A clinical colleague asks why a biosimilar program has one comparative PK study and one comparative efficacy study, not a full Phase 1–3 program. Which explanation is correct?

A. The goal is to confirm no meaningful difference from the reference, not to re-establish efficacy.
B. The reference sponsor's Phase 3 data are licensed to the biosimilar applicant through the 351(k) route.
C. FDA accepts a reduced program because the 12-year exclusivity has already expired.
D. Biosimilars are exempt from clinical data once the analytical comparison package is complete.

**정답:** A

**해설**
- A: biosimilar 개발의 목적은 효능 재입증이 아니라 **차이 없음 확인**이다. 그래서 단계적 비교로 설계하고 Phase 1–3 전체를 반복하지 않는다.
- B: reference 자료의 라이선스 이전은 교과서 논리가 아니다.
- C: 독점 만료는 제출·승인 시점 문제다. 개발 설계의 근거가 아니다.
- D: 비교 PK/PD와 잔여 불확실성 해소용 비교 임상이 단계에 포함된다. 임상 면제가 원칙이 아니다.

---

### Q51 [R][Domain I] — WHO 2022 terminology
In the 2022 WHO guidelines on evaluation of biosimilars (TRS 1043 Annex 3), what change was made to terminology and scope?

A. "Similar biotherapeutic product" was kept, but cell therapies were added to the scope.
B. "Biosimilar" was replaced by "similar biotherapeutic product", with a narrower scope.
C. "Biosimilar" was replaced by "interchangeable product" for products shown to switch safely.
D. "Similar biotherapeutic product" was replaced by "biosimilar", with a wider scope.

**정답:** D

**해설**
- D: WHO TRS 1043 Annex 3(2022)는 용어를 **SBP → biosimilar**로 통일하고 범위를 생물치료제 외 생물학적 제품까지 넓혔다.
- A: SBP 용어는 biosimilar로 바뀌었다. 세포 치료 추가는 교과서에 없다.
- B: 방향이 반대다.
- C: interchangeability 용어 변경은 WHO 지침 내용이 아니다.

---

### Q52 [A][Domain III] — WHO 2022 approach
A sponsor in a country that follows WHO guidance asks how the 2022 WHO biosimilar guideline changed the evidence expectations. Which statement is correct?

A. It requires a laboratory, nonclinical and clinical sequence for each biosimilar, without exception.
B. It recognises analytical characterisation as more sensitive and moves away from a uniform sequence.
C. It ranks comparative efficacy trials above analytical characterisation for detecting differences.
D. It drops analytical comparison and relies on post-approval surveillance to confirm similarity.

**정답:** B

**해설**
- B: WHO 2022 지침은 **분석적 특성화가 비교 효능시험보다 민감**하다는 경험을 반영하고, 실험실→비임상→임상 **일률 순차 요구에서 벗어나** 위험 기반으로 맞춘다.
- A: 일률 순차 요구가 바로 2022 지침이 벗어난 접근이다.
- C: 민감도 순서가 반대다.
- D: 분석적 비교는 오히려 비중이 커졌다.

---

### Q53 [An][Domain II] — the process is the product
Why does "the process is the product" lead to different regulatory treatment of biologics compared with small molecules?

A. Biologics are inherently more toxic, so each manufacturing step needs a separate clinical study.
B. Heterogeneity, impurities and immunogenicity depend on the process, so identity cannot be fully shown.
C. Biologic processes are protected as trade secrets, so FDA reviews the process instead of the product itself.
D. Small molecules are made in living systems too, but their impurities are removed before release.

**정답:** B

**해설**
- B: 생물의약품은 살아있는 시스템에서 만들어져 **구조 이질성(당화·변이체)·불순물·면역원성**이 공정에 의존한다. 그래서 제조 변경마다 Q5E comparability, 제네릭 대신 biosimilar, 규격 Q6B, 시설 변경 PAS 급이 따라온다.
- A: 독성 차이는 이 원칙의 근거가 아니다. 제조 변경은 분석적 비교가 1차다.
- C: 영업 비밀은 교과서의 논리가 아니다.
- D: 소분자는 구조가 완전히 규정된다. 살아있는 시스템 생산이 아니다.

---

### Q54 [A][Domain II] — scale-up and resin change
A sponsor changes the cell culture scale and the purification resin for a licensed antibody. Which ICH guideline governs the assessment, and what is the central question?

A. ICH Q6B; whether the release specifications are still met by commercial lots after the change.
B. ICH S6(R1); whether repeat toxicology in a relevant species shows the same toxicity profile as before.
C. ICH Q5A(R2); whether viral clearance claims still hold for the new purification resin.
D. ICH Q5E; whether pre- and post-change product are highly similar, with no safety or efficacy impact.

**정답:** D

**해설**
- D: 제조 변경 평가는 **ICH Q5E comparability**다. 질문은 "변경 전후 제품이 **highly similar**해서 안전성·효능에 영향이 없나"다.
- A: Q6B는 규격 지침이다. 규격 통과만으로 comparability 질문을 대신하지 않는다.
- B: S6(R1)은 비임상 지침이다. comparability는 분석적 비교가 1차다.
- C: Q5A(R2)는 바이러스 안전성 지침이다. 변경 평가의 중심 지침이 아니다.

---

### Q55 [A][Domain V] — comparability sequence and reporting
In the same scale-up change, analytical data show a small difference in a glycosylation attribute whose impact cannot be concluded from analytics alone. What is the next step, and how is the change reported?

A. Accept the result if specifications pass, and report under 314.70.
B. Repeat the full Phase 1–3 program for the changed product, and report under 600.80.
C. Treat the product as a new biologic, and file a new BLA under 601.2.
D. Extend to nonclinical or clinical bridging as needed, and report under 601.12.

**정답:** D

**해설**
- D: Q5E는 분석적 비교가 1차이고, 차이가 있거나 분석으로 결론이 안 나면 **비임상·임상 bridging**으로 확장한다. 보고는 **601.12**(PAS/CBE-30/AR)다.
- A: 314.70은 소분자 변경 조항이다. 분석으로 결론이 안 나는 차이를 규격 통과로 덮지 않는다.
- B: bridging은 필요한 범위로 한다. 600.80은 시판후 보고 조항이다.
- C: comparability 평가는 변경된 기존 제품을 다룬다. 새 BLA가 필요하다는 근거는 없다.

---

### Q56 [R][Domain II] — specifications guideline
Which ICH guideline sets specifications for biotechnological and biological products, covering process-related impurities and potency bioassays?

A. ICH Q6A
B. ICH Q6B
C. ICH Q5D
D. ICH Q5C

**정답:** B

**해설**
- B: 생물의약품 규격은 **Q6B**다. 공정 관련 불순물·역가 생물검정을 다룬다.
- A: Q6A는 소분자 규격이다.
- C: Q5D는 세포주(cell substrate) 특성이다.
- D: Q5C는 안정성이다.

---

### Q57 [R][Domain II] — viral safety guideline
Which ICH guideline addresses viral safety of biotechnology products, and what did its 2023 revision reflect?

A. Q5E; comparability of viral clearance after process changes.
B. Q5C; stability programs for new modalities and continuous manufacture.
C. Q5A(R2); new modalities and continuous manufacture.
D. Q5D; cell line characterisation for new modalities and continuous manufacture.

**정답:** C

**해설**
- C: 바이러스 안전성은 **Q5A(R2)** 이고, **2023** 개정은 신규 모달리티·연속생산을 반영했다.
- A: Q5E는 제조 변경 comparability 지침이다.
- B: Q5C는 안정성 지침이다.
- D: Q5D는 세포주 특성 지침이다.

---

### Q58 [A][Domain III] — species selection under S6(R1)
The nonclinical team proposes rat and dog toxicology for a humanised antibody that does not cross-react with rodent or canine targets. What should regulatory affairs advise under ICH S6(R1)?

A. Proceed, because a rodent and a non-rodent are required for each biologic.
B. Use one cross-reactive non-human primate species; 6 months suffices for chronic toxicity.
C. Use one cross-reactive primate species, but run 9 months as for small molecules.
D. Proceed with the rat, but replace the dog with a minipig of unknown reactivity.

**정답:** B

**해설**
- B: S6(R1)은 **약리학적으로 관련된 종**만 쓴다. 교차반응 없는 랫·개는 무의미하다. 교차반응 있는 **비인간 영장류 한 종**이면 되고 만성독성은 **6개월**이다.
- A: S6(R1)에서 두 종이 필수가 아니다. 관련 종이 기준이다.
- C: 종 선택은 맞다. 만성독성은 6개월이면 충분하다.
- D: 교차반응이 확인되지 않은 종은 약리학적 관련 종이 아니다.

---

### Q59 [A][Domain III] — when no relevant species exists
A humanised antibody binds only the human target, and no cross-reactive animal species is available. Which alternative does S6(R1) allow?

A. A small-molecule surrogate tested under the ICH M3(R2) species rules.
B. Rat and dog studies, since species relevance is assessed after dosing.
C. A waiver of nonclinical safety studies, with safety assessed in Phase 1.
D. A homologous antibody against the rodent target, or a transgenic model.

**정답:** D

**해설**
- D: S6(R1)은 관련 종이 없을 때 **homologous(설치류 대응) 항체**나 **transgenic 모델**을 대안으로 둔다.
- A: 소분자 대체물은 S6(R1)의 대안이 아니다.
- B: 교차반응 없는 랫·개 시험은 무의미하다.
- C: 교과서는 대안 모델을 제시한다. 비임상 면제는 근거가 없다.

---

### Q60 [An][Domain III] — immunogenicity consequences
Why is immunogenicity a core regulatory concern for biologics but a rare exception for small molecules?

A. Anti-drug antibodies form against biologics in transgenic animals, so the concern is limited to nonclinical work.
B. Biologics are given by injection, so injection-site reactions are the main immunogenic risk to be assessed in trials.
C. Anti-drug antibodies can alter PK, cause loss of efficacy, cross-neutralise endogenous EPO, or cause hypersensitivity.
D. Small molecules rarely circulate long enough in the body to be recognised by the immune system.

**정답:** C

**해설**
- C: 생물의약품은 **ADA**가 PK 변화·효능 상실·**교차 중화(내인성 EPO)**·과민반응을 일으켜 모든 개발 단계의 핵심 평가 대상이다. 소분자는 합텐 같은 드문 예외다.
- A: ADA는 사람에서의 핵심 평가 대상이다.
- B: 주사 부위 반응은 교과서의 면역원성 핵심이 아니다.
- D: 소분자 면역원성이 드문 이유는 교과서에서 합텐 예외로만 다룬다. 순환 시간 논리는 근거가 없다.

---

### Q61 [R][Domain III] — ADA assay tiers
What is the usual tiered sequence of anti-drug antibody assays described in the textbook?

A. Neutralising, titre, screening, confirmatory
B. Confirmatory, screening, neutralising, titre
C. Screening, neutralising, confirmatory, titre
D. Screening, confirmatory, titre, neutralising

**정답:** D

**해설**
- D: ADA 분석법은 **screening → confirmatory → titre → neutralising** 순서다.
- A·B·C: 단계 순서를 뒤섞었다. 선별(screening) 후 확인(confirmatory)이 먼저다.

---

### Q62 [A][Domain III] — immunogenicity in a biosimilar program
A biosimilar sponsor drafts its immunogenicity plan. Which approach and guidance set fit the textbook?

A. Immunogenicity data are unnecessary, since highly similar structure rules out a different antibody response.
B. Comparative immunogenicity against the reference, drawing on FDA 2014/2019 and EMA 2017 guidance.
C. A stand-alone immunogenicity program without a reference arm, drawing on ICH Q6B for assay design.
D. Immunogenicity assessed after licensure under 600.80 alone, drawing on FDA 2014 guidance.

**정답:** B

**해설**
- B: biosimilar는 reference와의 **비교 면역원성**이 요구된다. 지침은 FDA 2014(치료용 단백질 면역원성 평가)·2019(분석법 개발), EMA 2017이다.
- A: 면역원성은 모든 단계의 핵심 평가다. 구조 유사성으로 면제되지 않는다.
- C: biosimilar는 reference와 비교한다. Q6B는 규격 지침이다.
- D: 시판후로 미루는 근거는 없다. 개발 단계의 평가가 필요하다.

---

### Q63 [An][Domain IV] — a "biosimilar EV"
A partner asks whether a competitor could later file a biosimilar to your first-in-class MSC-EV product. Which assessment is correct?

A. Yes, once 12 years pass, because any BLA product can serve as a 351(k) reference.
B. Not realistic, since analytical similarity criteria for EV products are not established.
C. Yes, if the competitor uses the same donor source and runs a switching study.
D. Not realistic, because EV products are drugs under FD&C 505 and lack a follow-on route of their own.

**정답:** B

**해설**
- B: biosimilar는 reference와의 **고도 유사성 입증**이 전제인데, EV·세포 제품은 공정 의존성·이질성이 커서 **분석적 유사성의 기준 자체가 정립돼 있지 않다**. 후발 제품은 **독립 BLA/MAA**로 간다.
- A: 독점 기간이 지나도 유사성 입증 문제가 남는다. FDA·EMA 모두 세포·유전자치료엔 biosimilar 경로를 사실상 적용하지 않는다.
- C: 같은 공급원과 switching study가 분석적 유사성 기준 부재를 해결하지 않는다.
- D: MSC-EV 제품은 CBER/OTP의 BLA 351(a) 제품이다.

---

### Q64 [An][Domain V] — facility change and the real CMC issue
For the same MSC-EV product, the sponsor plans to move manufacturing to a new facility after licensure. Which view matches the textbook?

A. The move turns the product into a biosimilar of itself, to be filed as a new 351(k) application.
B. The move is a PAS-level change, and Q5E comparability of its own process is the key issue.
C. A CBE filing is enough, as for small molecules, since the product itself is unchanged.
D. The move skips comparability work, since the facility is not part of the product itself.

**정답:** B

**해설**
- B: 생물의약품의 시설 변경은 **PAS** 급이다. EV 제품의 핵심 CMC 쟁점은 경쟁 방어가 아니라 **자기 공정 변경의 comparability(Q5E)** 와 potency assay다.
- A: 자기 제품 변경은 Q5E comparability로 다룬다. 351(k)는 다른 회사 후속 제품 경로다.
- C: CBE로 갈 수 있는 것은 소분자 쪽이다.
- D: 공정이 제품이라 시설 변경도 comparability 평가 대상이다.

---
