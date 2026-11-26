"""문제은행 선지 순서를 다시 섞어 정답 글자를 A~D에 고르게 배분한다.

    .venv/Scripts/python.exe tools/bank_shuffle.py exams/bank_Ch01.md [--dry]

- 정답 글자는 파일 단위로 A/B/C/D가 같은 수(나머지는 앞 글자부터)가 되게 하고, 같은 글자가 4번 넘게 연속하지 않게 한다.
- 오답 순서도 함께 섞는다. 해설 글머리(- B: / - A·C:)를 새 글자로 바꾸고, 정답 글머리 → 나머지 글자순으로 정렬한다.
- 해설 본문의 선지 글자 언급은 바꾸지 않는다(이 저장소 해설은 글머리로만 글자를 가리킨다).
- 같은 파일에 다시 돌려도 결과가 같다(파일명 기반 고정 시드).
"""
import random
import re
import sys
import pathlib

Q_RE = re.compile(r"^### Q(\d+) ")
OPT_RE = re.compile(r"^([ABCD])\. ")
ANS_RE = re.compile(r"^\*\*정답:\*\*\s*([ABCD])\s*$")
BUL_RE = re.compile(r"^- ([ABCD](?:·[ABCD])*):(.*)$")
L = "ABCD"


def target_letters(n, rng):
    base = [L[i % 4] for i in range(n)]
    for _ in range(1000):
        rng.shuffle(base)
        run, ok = 1, True
        for i in range(1, n):
            run = run + 1 if base[i] == base[i - 1] else 1
            if run > 3:
                ok = False
                break
        if ok:
            return base
    return base


def main():
    path = pathlib.Path(sys.argv[1])
    dry = "--dry" in sys.argv
    lines = path.read_text(encoding="utf-8").split("\n")
    starts = [i for i, ln in enumerate(lines) if Q_RE.match(ln)]
    rng = random.Random(path.stem)
    targets = target_letters(len(starts), rng)
    out = lines[: starts[0]] if starts else lines
    for qi, s in enumerate(starts):
        e = starts[qi + 1] if qi + 1 < len(starts) else len(lines)
        block = lines[s:e]
        opt_idx = [i for i, ln in enumerate(block) if OPT_RE.match(ln)]
        ans_idx = [i for i, ln in enumerate(block) if ANS_RE.match(ln)]
        if len(opt_idx) != 4 or len(ans_idx) != 1:
            sys.exit(f"{path.name} {block[0][:12]}: need 4 options + 1 answer")
        old_ans = L.index(ANS_RE.match(block[ans_idx[0]]).group(1))
        t = L.index(targets[qi])
        others = [k for k in range(4) if k != old_ans]
        rng.shuffle(others)
        new_order = [None] * 4  # new_order[new_pos] = old_pos
        new_order[t] = old_ans
        free = [p for p in range(4) if p != t]
        for p, o in zip(free, others):
            new_order[p] = o
        old_to_new = {L[o]: L[p] for p, o in enumerate(new_order)}
        texts = [block[i][3:] for i in opt_idx]
        for p, i in enumerate(opt_idx):
            block[i] = f"{L[p]}. {texts[new_order[p]]}"
        block[ans_idx[0]] = f"**정답:** {L[t]}"
        bul_idx = [i for i, ln in enumerate(block) if BUL_RE.match(ln)]
        bullets = []
        for i in bul_idx:
            m = BUL_RE.match(block[i])
            letters = sorted(old_to_new[x] for x in m.group(1).split("·"))
            bullets.append((letters, m.group(2)))
        bullets.sort(key=lambda b: (L[t] not in b[0], b[0]))
        for i, (letters, body) in zip(bul_idx, bullets):
            block[i] = f"- {'·'.join(letters)}:{body}"
        out.extend(block)
    counts = {x: targets.count(x) for x in L}
    print(f"{path.name}: {len(starts)} questions -> {counts}")
    if not dry:
        path.write_text("\n".join(out), encoding="utf-8")


if __name__ == "__main__":
    main()
