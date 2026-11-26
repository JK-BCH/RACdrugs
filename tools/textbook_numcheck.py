"""교과서 장의 숫자·날짜가 대응 덱(cards/ChNN*.md)에 있는지 대조. 없는 것은 '덱 근거 없음' 후보."""
import io, re, sys, pathlib
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")
ROOT = pathlib.Path("D:/RAC")
DATE = re.compile(r"\b(?:19|20)\d{2}-\d{2}(?:-\d{2})?\b")
NUM = re.compile(r"(?<![0-9A-Za-z.])\d[\d,]*(?:\.\d+)?(?![0-9A-Za-z])")
SKIP = re.compile(r"https?://\S+|\b\d+\s*CFR\s*[\d.()a-z]+|\b(?:Part|§|Section|Annex|Article|Art\.?|Module|Q&A|Step|Rev\.?)\s*[\d.()]+|\b[A-Z]{1,3}\d+(?:\([A-Z]?\d\))?|Ch\.?\s*\d+|\(\d\)|^\|?\s*\d+\s*\|", re.M)
total = 0
for tb in sorted((ROOT / "textbook").glob("*.md")):
    if tb.stem == "Ch00_primer":
        continue
    decks = sorted((ROOT / "cards").glob(f"{tb.stem}.md")) + sorted((ROOT / "cards").glob(f"{tb.stem}_[12].md"))
    if not decks:
        print(f"{tb.stem}: 덱 없음"); continue
    src = "".join(d.read_text(encoding="utf-8") for d in decks)
    known_dates = set(DATE.findall(src))
    known_nums = {n.replace(",", "") for n in NUM.findall(src)}
    text = tb.read_text(encoding="utf-8")
    body = re.split(r"^## .*1차 출처", text, flags=re.M)[0]
    body = SKIP.sub(" ", body)
    dates = sorted(set(DATE.findall(body)) - known_dates)
    body2 = DATE.sub(" ", body)
    nums = sorted({n.replace(",", "") for n in NUM.findall(body2)} - known_nums,
                  key=lambda x: float(x) if x.replace(".", "", 1).isdigit() else 0)
    nums = [n for n in nums if len(n) > 1 and not re.fullmatch(r"\d\.\d", n)]  # 한 자리·절 번호(2.1) 제외
    dates = [d for d in dates if not d.startswith("2026-11-2")]  # 검증 메모 작성일
    if dates or nums:
        total += 1
        print(f"{tb.stem}: 날짜 {dates} | 숫자 {nums}")
print("장 수:", total)
