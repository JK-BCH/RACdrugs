#!/usr/bin/env python3
"""anki/*.txt + cards/*.md -> data/decks.json

GitHub Pages 대시보드(index.html)가 읽는 단일 데이터 파일을 만든다.
덱을 고치면 이 스크립트를 다시 돌리고 data/decks.json을 함께 커밋한다.

    .venv/Scripts/python.exe tools/build_data.py
"""
import datetime
import json
import pathlib
import re
import sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
ANKI = ROOT / "anki"
CARDS = ROOT / "cards"
TEXTBOOK = ROOT / "textbook"
OUT = ROOT / "data" / "decks.json"

TYPE = {"Recall": "R", "Application": "A", "Analysis": "An"}
DOMAINS = {
    "I": {"name": "Regulatory Intelligence and Research", "weight": 27},
    "II": {"name": "Submissions", "weight": 27},
    "III": {"name": "Collaboration", "weight": 13},
    "IV": {"name": "Strategy", "weight": 22},
    "V": {"name": "Project Management", "weight": 11},
}
EXAM = {
    "cutoff": "2026-09-01",
    "apply_deadline": "2027-02-18",
    "exam_start": "2027-03-22",
    "exam_end": "2027-04-23",
    "phase1_start": "2026-12-01",
    "phase1_end": "2027-01-22",
    "phase2_end": "2027-02-18",
    "questions": 120,
    "minutes": 150,
}
PHASE1_START = datetime.date(2026, 12, 1)
DATE_RE = re.compile(r"\*\*달력:\*\*\s*(\d{4}-\d{2}-\d{2})")


def split_sections(md):
    """'## ' 헤더 기준으로 본문을 자른다. (헤더 텍스트 -> 본문)"""
    parts = re.split(r"^## +", md, flags=re.M)
    head = parts[0]
    sections = {}
    for part in parts[1:]:
        title, _, body = part.partition("\n")
        sections[title.strip()] = body.strip()
    return head, sections


def pick(sections, prefix):
    for key, body in sections.items():
        if key.startswith(prefix):
            return body
    return ""


def deck_kind(deck_id):
    if deck_id.startswith("Review_"):
        return "review"
    if deck_id.startswith("P2_"):
        return "p2"
    return "chapter"


def week_of(date):
    """Phase 1 주차: W1 = 12/01~12/06, 이후 월~일 단위."""
    if date <= datetime.date(2026, 12, 6):
        return 1
    return (date - datetime.date(2026, 12, 7)).days // 7 + 2


def textbook_id(deck_id):
    """덱 -> 교과서 장 id. ChNN_1/ChNN_2 -> ChNN, 복습 덱은 없음, P2는 그대로."""
    if deck_id.startswith("Review_"):
        return None
    return re.sub(r"_[12]$", "", deck_id)


def textbook_title(tb_id):
    path = TEXTBOOK / f"{tb_id}.md"
    if not path.exists():
        return None
    for line in path.read_text(encoding="utf-8").splitlines():
        if line.startswith("# "):
            return line[2:].strip()
    return tb_id


def parse_deck(deck_id):
    md_path = CARDS / f"{deck_id}.md"
    md = md_path.read_text(encoding="utf-8")
    head, sections = split_sections(md)
    first_line = md.splitlines()[0].lstrip("# ").strip()

    date = None
    m = DATE_RE.search(head)
    if m:
        date = m.group(1)
    if deck_id == "Ch01":  # 11/21 선행 작성, 달력상 12/01
        date = "2026-12-01"
        first_line = "Ch.1 — Drug development continuum (선행 작성)"

    kind = deck_kind(deck_id)
    phase = 2 if kind == "p2" else 1
    week = None
    if date:
        week = week_of(datetime.date.fromisoformat(date))

    summary = pick(sections, "핵심 요약") or pick(sections, "비교표")
    deck = {
        "id": deck_id,
        "title": first_line,
        "date": date,
        "phase": phase,
        "week": week,
        "kind": kind,
        "memo": pick(sections, "검증 메모"),
        "summary": summary,
        "sources": pick(sections, "오늘 읽을"),
        "md": f"cards/{deck_id}.md",
    }
    tb = textbook_id(deck_id)
    deck["textbook"] = tb if (tb and (TEXTBOOK / f"{tb}.md").exists()) else None
    return deck


def parse_cards(deck_id):
    txt = (ANKI / f"{deck_id}.txt").read_text(encoding="utf-8")
    cards = []
    for n, line in enumerate(txt.splitlines(), start=1):
        if not line.strip():
            continue
        fields = line.split(";")
        if len(fields) != 3:
            sys.exit(f"{deck_id}.txt line {n}: expected 3 fields, got {len(fields)}")
        front, back, tags = (f.strip() for f in fields)
        tag_parts = tags.split()
        domain = ""
        ctype = ""
        for t in tag_parts:
            if t.startswith("Domain"):
                domain = t[len("Domain"):]
            elif t in TYPE:
                ctype = TYPE[t]
        if domain not in DOMAINS or not ctype:
            sys.exit(f"{deck_id}.txt line {n}: bad tags '{tags}'")
        cards.append({
            "id": f"{deck_id}-{n:02d}",
            "deck": deck_id,
            "n": n,
            "front": front,
            "back": back,
            "domain": domain,
            "type": ctype,
        })
    return cards


def main():
    deck_files = sorted(p.stem for p in ANKI.glob("*.txt")
                        if p.stem.startswith(("Ch", "Review_", "P2_")))
    decks, cards = [], []
    for deck_id in deck_files:
        if not (CARDS / f"{deck_id}.md").exists():
            sys.exit(f"missing cards/{deck_id}.md")
        deck = parse_deck(deck_id)
        deck_cards = parse_cards(deck_id)
        deck["n"] = len(deck_cards)
        decks.append(deck)
        cards.extend(deck_cards)

    # 정렬: Phase 1은 날짜순, Phase 2는 이름순 뒤에
    def sort_key(d):
        return (d["phase"], d["date"] or "9999", d["id"])
    decks.sort(key=sort_key)

    schedule = [{"date": d["date"], "deck": d["id"]} for d in decks if d["date"]]

    # 교과서 목록: 덱 순서대로, 같은 장은 한 번만. Ch00 기초 장은 맨 앞.
    textbooks = []
    seen_tb = set()
    if (TEXTBOOK / "Ch00_primer.md").exists():
        textbooks.append({"id": "Ch00_primer", "title": textbook_title("Ch00_primer"),
                          "path": "textbook/Ch00_primer.md", "decks": [], "date": None})
        seen_tb.add("Ch00_primer")
    for d in decks:
        tb = d["textbook"]
        if not tb or tb in seen_tb:
            if tb:
                for t in textbooks:
                    if t["id"] == tb:
                        t["decks"].append(d["id"])
            continue
        seen_tb.add(tb)
        textbooks.append({"id": tb, "title": textbook_title(tb), "path": f"textbook/{tb}.md",
                          "decks": [d["id"]], "date": d["date"]})
    # 아직 안 쓴 장도 자리만 표시 (title None)
    for d in decks:
        tb = textbook_id(d["id"])
        if tb and tb not in seen_tb:
            seen_tb.add(tb)
            textbooks.append({"id": tb, "title": None, "path": None, "decks": [x["id"] for x in decks if textbook_id(x["id"]) == tb], "date": d["date"]})

    data = {
        "generated": datetime.datetime.now().strftime("%Y-%m-%d %H:%M"),
        "exam": EXAM,
        "domains": DOMAINS,
        "schedule": schedule,
        "textbooks": textbooks,
        "decks": decks,
        "cards": cards,
    }
    OUT.parent.mkdir(parents=True, exist_ok=True)
    OUT.write_text(json.dumps(data, ensure_ascii=False, separators=(",", ":")),
                   encoding="utf-8")
    by_domain = {}
    for c in cards:
        by_domain[c["domain"]] = by_domain.get(c["domain"], 0) + 1
    print(f"decks={len(decks)} cards={len(cards)} -> {OUT} ({OUT.stat().st_size//1024} KB)")
    print("by domain:", dict(sorted(by_domain.items())))
    print("missing summary:", [d["id"] for d in decks if not d["summary"]])
    print("missing memo:", [d["id"] for d in decks if not d["memo"]])
    print("textbooks written:", [t["id"] for t in textbooks if t["path"]],
          "/ pending:", len([t for t in textbooks if not t["path"]]))


if __name__ == "__main__":
    main()
