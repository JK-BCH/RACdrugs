"""문제은행 해설·정답 선지의 숫자가 해당 장 교과서+덱에 있는지 대조한다. 없는 숫자는 후보로 출력."""
import io, re, sys, pathlib
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")
sys.path.insert(0, "D:/RAC/tools")
from build_data import parse_bank
ROOT = pathlib.Path("D:/RAC")
NUM = re.compile(r"\d[\d,]*(?:\.\d+)?")
for path in sorted((ROOT / "exams").glob("bank_*.md")):
    deck = path.stem[5:]
    src = (ROOT / "textbook" / f"{deck}.md").read_text(encoding="utf-8") + (ROOT / "cards" / f"{deck}.md").read_text(encoding="utf-8")
    known = {n.replace(",", "") for n in NUM.findall(src)}
    hits = []
    for b in parse_bank(path):
        text = b["expl"] + " " + b["options"][b["answer"]]
        text = re.sub(r"\bQ\d+\b|Ch\.?\d+|Q&A \d\.\d|[A-Z]\d+(?:\(R\d\))?|Rev \d|Annex \d|Section \d+|\d\.\d(?=\s)|Step \d|Domain [IV]+", " ", text)
        unknown = sorted({n.replace(",", "") for n in NUM.findall(text)} - known)
        if unknown:
            hits.append(f"Q{b['n']:02d}:{','.join(unknown)}")
    print(f"{path.stem}: {len(hits)}문항 — " + " ".join(hits))
