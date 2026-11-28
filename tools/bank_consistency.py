"""해설 글머리 일관성: 첫 글머리 = 정답 글자, 네 선지 글자가 해설 글머리에 모두 등장."""
import io, re, sys, pathlib
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")
sys.path.insert(0, "D:/RAC/tools")
from build_data import parse_bank
BUL = re.compile(r"^- ([ABCD](?:·[ABCD])*):")
files = sys.argv[1:] or sorted(str(p) for p in pathlib.Path("D:/RAC/exams").glob("bank_*.md"))
for f in files:
    bad = []
    for b in parse_bank(pathlib.Path(f)):
        heads = [BUL.match(l).group(1).split("·") for l in b["expl"].splitlines() if BUL.match(l)]
        first_ok = bool(heads) and heads[0] == ["ABCD"[b["answer"]]]
        cover = sorted({x for h in heads for x in h}) == list("ABCD")
        if not (first_ok and cover):
            bad.append(f"Q{b['n']:02d}")
    print(f"{pathlib.Path(f).stem}: {'OK' if not bad else 'BAD ' + ' '.join(bad)}")
