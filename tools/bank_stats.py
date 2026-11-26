"""문제은행 품질 지표: 정답 글자 분포, 정답이 최장 선지인 비율, 절대어 단서, 해설 길이."""
import io, json, re, sys, collections
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")
sys.path.insert(0, "D:/RAC/tools")
from build_data import parse_bank
import pathlib
ABS = re.compile(r"\b(always|never|only|automatically|all|every|regardless|guarantees?|no )\b", re.I)
files = sys.argv[1:] or sorted(str(p) for p in pathlib.Path("D:/RAC/exams").glob("bank_*.md"))
for f in files:
    items = parse_bank(pathlib.Path(f))
    for label, sub in (("all", items), ("Q01-17", [b for b in items if b["n"] <= 17]), ("Q18+", [b for b in items if b["n"] > 17])):
        if not sub: continue
        letters = collections.Counter("ABCD"[b["answer"]] for b in sub)
        longest = sum(1 for b in sub if max(range(4), key=lambda i: len(b["options"][i])) == b["answer"])
        shortest = sum(1 for b in sub if min(range(4), key=lambda i: len(b["options"][i])) == b["answer"])
        ratio = sum(len(b["options"][b["answer"]]) / (sum(len(o) for i, o in enumerate(b["options"]) if i != b["answer"]) / 3) for b in sub) / len(sub)
        abs_wrong = sum(1 for b in sub for i, o in enumerate(b["options"]) if i != b["answer"] and ABS.search(o))
        abs_right = sum(1 for b in sub if ABS.search(b["options"][b["answer"]]))
        stem = sum(len(b["stem"]) for b in sub) / len(sub)
        scen = sum(1 for b in sub if len(b["stem"]) > 160) / len(sub)
        print(f"{pathlib.Path(f).stem:16s} {label:6s} n={len(sub):3d} 정답 A/B/C/D={letters['A']}/{letters['B']}/{letters['C']}/{letters['D']} "
              f"정답=최장 {100*longest//len(sub)}% 정답=최단 {100*shortest//len(sub)}% 길이비 {ratio:.2f} 절대어(오답 {abs_wrong}/정답 {abs_right}) 지문평균 {stem:.0f}자 시나리오형 {100*scen:.0f}%")
