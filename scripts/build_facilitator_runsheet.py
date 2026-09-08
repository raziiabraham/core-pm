from __future__ import annotations

import base64
import argparse
import html
import mimetypes
import re
import shutil
import subprocess
import tempfile
from pathlib import Path


SITE_ROOT = Path(__file__).resolve().parents[1]
CURRICULUM_ROOT = SITE_ROOT.parent
SESSION = 1
SOURCE = CURRICULUM_ROOT / "content/session-1/session-1-facilitator-run-sheet.md"
OUTPUT = SITE_ROOT / "private/facilitator/session-1-facilitator-run-sheet.html"


def image_data(path: Path) -> str:
    mime = mimetypes.guess_type(path.name)[0] or "image/png"
    payload = base64.b64encode(path.read_bytes()).decode("ascii")
    return f"data:{mime};base64,{payload}"


def inline(text: str) -> str:
    value = html.escape(text, quote=False)
    value = re.sub(r"`([^`]+)`", r"<code>\1</code>", value)
    value = re.sub(r"\*\*([^*]+)\*\*", r"<strong>\1</strong>", value)
    value = re.sub(r"(?<!\*)\*([^*]+)\*(?!\*)", r"<em>\1</em>", value)
    value = re.sub(r"\[\^([^]]+)\]", r'<sup><a href="#fn-\1" aria-label="Source \1">\1</a></sup>', value)
    value = re.sub(r"\[([^]]+)\]\(([^)]+)\)", r'<a href="\2">\1</a>', value)
    return value


def parse_table(lines: list[str]) -> str:
    rows = []
    for line in lines:
        cells = [cell.strip() for cell in line.strip().strip("|").split("|")]
        rows.append(cells)
    head, body = rows[0], rows[2:]
    out = ["<div class=\"table-wrap\"><table><thead><tr>"]
    out.extend(f"<th>{inline(cell)}</th>" for cell in head)
    out.append("</tr></thead><tbody>")
    for row in body:
        out.append("<tr>")
        out.extend(f"<td>{inline(cell)}</td>" for cell in row)
        out.append("</tr>")
    out.append("</tbody></table></div>")
    return "".join(out)


def render_deck_slides(session: int, destination: Path) -> dict[Path, Path]:
    """Render the canonical deck PDF as lossless, high-density slide images."""
    pdf = CURRICULUM_ROOT / f"output/pdf/session-{session}-facilitator-deck.pdf"
    renderer = shutil.which("pdftoppm")
    if not pdf.exists():
        raise FileNotFoundError(f"Deck PDF not found: {pdf}")
    if renderer is None:
        raise RuntimeError("pdftoppm is required to build crisp facilitator run sheets")

    destination.mkdir(parents=True, exist_ok=True)
    subprocess.run(
        [renderer, "-r", "192", "-png", str(pdf), str(destination / "slide")],
        check=True,
        stdout=subprocess.DEVNULL,
    )

    rendered = sorted(destination.glob("slide-*.png"))
    if len(rendered) != 19:
        raise RuntimeError(f"Expected 19 rendered slides for Session {session}, found {len(rendered)}")

    source_dir = (CURRICULUM_ROOT / f"content/session-{session}/slides").resolve()
    return {
        (source_dir / f"slide-{index:02d}.png").resolve(): slide
        for index, slide in enumerate(rendered, start=1)
    }


def parse_markdown(
    markdown: str, image_overrides: dict[Path, Path] | None = None
) -> tuple[str, list[tuple[str, str]], list[tuple[str, str]]]:
    definitions: dict[str, str] = {}
    kept = []
    for line in markdown.splitlines():
        match = re.match(r"^\[\^([^]]+)\]:\s*(.*)$", line)
        if match:
            definitions[match.group(1)] = match.group(2)
        else:
            kept.append(line)

    lines = kept
    out: list[str] = []
    toc: list[tuple[str, str]] = []
    footnote_order: list[str] = []
    section_open = False
    index = 0

    def track_footnotes(text: str) -> None:
        for ref in re.findall(r"\[\^([^]]+)\]", text):
            if ref not in footnote_order:
                footnote_order.append(ref)

    while index < len(lines):
        line = lines[index]
        stripped = line.strip()
        if not stripped:
            index += 1
            continue

        image_match = re.fullmatch(r"!\[([^]]*)\]\(([^)]+)\)", stripped)
        if image_match:
            alt, relative = image_match.groups()
            source_path = (SOURCE.parent / relative).resolve()
            embedded_path = (image_overrides or {}).get(source_path, source_path)
            out.append(
                f'<figure class="slide-frame"><img class="slide-image" src="{image_data(embedded_path)}" '
                f'alt="{html.escape(alt, quote=True)}" width="3072" height="1728" loading="lazy" decoding="async"></figure>'
            )
            index += 1
            continue

        heading = re.match(r"^(#{1,3})\s+(.+)$", stripped)
        if heading:
            level = len(heading.group(1))
            title = heading.group(2)
            if level == 2 and title.startswith("Slide "):
                if section_open:
                    out.append("</section>")
                slide_number = re.match(r"Slide (\d+)", title)
                slug = f"slide-{slide_number.group(1)}" if slide_number else f"section-{len(toc)+1}"
                out.append(f'<section class="slide-run" id="{slug}">')
                section_open = True
                toc.append((slug, title))
                out.append(f"<h2>{inline(title)}</h2>")
            else:
                if section_open and level == 1:
                    out.append("</section>")
                    section_open = False
                slug = re.sub(r"[^a-z0-9]+", "-", title.lower()).strip("-")
                if level == 2:
                    toc.append((slug, title))
                out.append(f'<h{level} id="{slug}">{inline(title)}</h{level}>')
            index += 1
            continue

        if stripped == "---":
            out.append("<hr>")
            index += 1
            continue

        if stripped.startswith("|") and index + 1 < len(lines) and re.match(r"^\s*\|?\s*:?-+", lines[index + 1]):
            table_lines = [line, lines[index + 1]]
            index += 2
            while index < len(lines) and lines[index].strip().startswith("|"):
                table_lines.append(lines[index])
                index += 1
            out.append(parse_table(table_lines))
            continue

        if stripped.startswith(">"):
            quote_lines = []
            while index < len(lines) and lines[index].strip().startswith(">"):
                text = lines[index].strip()[1:].strip()
                track_footnotes(text)
                quote_lines.append(inline(text))
                index += 1
            out.append("<blockquote>" + " ".join(quote_lines) + "</blockquote>")
            continue

        list_match = re.match(r"^(\s*)([-*]|\d+\.)\s+(.+)$", line)
        if list_match:
            ordered = list_match.group(2).endswith(".") and list_match.group(2)[0].isdigit()
            tag = "ol" if ordered else "ul"
            items = []
            while index < len(lines):
                current = re.match(r"^(\s*)([-*]|\d+\.)\s+(.+)$", lines[index])
                if not current:
                    break
                current_ordered = current.group(2).endswith(".") and current.group(2)[0].isdigit()
                if current_ordered != ordered:
                    break
                track_footnotes(current.group(3))
                items.append(f"<li>{inline(current.group(3))}</li>")
                index += 1
            out.append(f"<{tag}>" + "".join(items) + f"</{tag}>")
            continue

        paragraph = [stripped]
        track_footnotes(stripped)
        index += 1
        while index < len(lines):
            candidate = lines[index].strip()
            if not candidate:
                break
            if re.match(r"^(#{1,3})\s+", candidate) or candidate == "---" or candidate.startswith(">"):
                break
            if re.fullmatch(r"!\[([^]]*)\]\(([^)]+)\)", candidate):
                break
            if candidate.startswith("|") or re.match(r"^(\s*)([-*]|\d+\.)\s+", lines[index]):
                break
            track_footnotes(candidate)
            paragraph.append(candidate)
            index += 1
        out.append(f"<p>{inline(' '.join(paragraph))}</p>")

    if section_open:
        out.append("</section>")

    source_items = [(ref, definitions[ref]) for ref in footnote_order if ref in definitions]
    return "\n".join(out), toc, source_items


def build(session: int) -> None:
    global SESSION, SOURCE, OUTPUT
    SESSION = session
    SOURCE = CURRICULUM_ROOT / f"content/session-{session}/session-{session}-facilitator-run-sheet.md"
    OUTPUT = SITE_ROOT / f"private/facilitator/session-{session}-facilitator-run-sheet.html"
    with tempfile.TemporaryDirectory(prefix=f"core-pm-session-{session}-slides-") as temporary:
        image_overrides = render_deck_slides(session, Path(temporary))
        body, toc, sources = parse_markdown(SOURCE.read_text(), image_overrides)
    toc_html = "".join(
        f'<a href="#{slug}" class="{"slide-link" if title.startswith("Slide ") else "section-link"}">{html.escape(title)}</a>'
        for slug, title in toc
    )
    sources_html = "".join(
        f'<li id="fn-{html.escape(ref)}"><a class="source-id" href="#">{html.escape(ref)}</a><p>{inline(text)}</p></li>'
        for ref, text in sources
    )
    document = f"""<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Session {session} Facilitator Rehearsal Run Sheet</title>
  <meta name="description" content="Integrated Session {session} slides, facilitator rehearsal script, model debriefs, and source citations.">
  <style>
    :root{{--green:#123f34;--green-2:#17745a;--mint:#a9dfcf;--mint-2:#e4f3ee;--cream:#f7f6f1;--paper:#fff;--ink:#17201d;--gray:#64716d;--line:#c9d1ce;--gold:#e7b34b}}
    *{{box-sizing:border-box}} html{{scroll-behavior:smooth}} body{{margin:0;background:var(--cream);color:var(--ink);font-family:Arial,Helvetica,sans-serif;line-height:1.55}}
    .shell{{display:grid;grid-template-columns:300px minmax(0,1fr);min-height:100vh}} .rail{{position:sticky;top:0;height:100vh;background:var(--green);color:white;padding:28px 22px;overflow:auto}}
    .rail .brand{{display:block;padding-bottom:22px;border-bottom:1px solid #6b9c8b;color:var(--mint);font-size:12px;font-weight:700;letter-spacing:.12em;text-decoration:none}}
    .rail h2{{margin:22px 0 8px;color:white;font-size:20px;line-height:1.15}} .rail p{{margin:0 0 18px;color:#cfe2db;font-size:13px}}
    .rail nav{{display:grid;gap:2px}} .rail nav a{{display:block;padding:7px 9px;color:#cfe2db;font-size:12px;line-height:1.25;text-decoration:none;border-left:3px solid transparent}}
    .rail nav a:hover,.rail nav a.active{{color:white;background:#ffffff0f;border-left-color:var(--mint)}} .rail nav .section-link{{margin-top:8px;color:var(--mint);font-weight:700}}
    .toolbar{{position:sticky;top:0;z-index:10;display:flex;align-items:center;justify-content:space-between;padding:10px 24px;background:#f7f6f1ee;border-bottom:1px solid var(--line);backdrop-filter:blur(10px)}}
    .toolbar span{{font-size:12px;color:var(--gray)}} .toolbar-actions{{display:flex;gap:8px}} button,.toolbar a{{border:0;background:var(--green);color:white;padding:9px 12px;font-weight:700;font-size:12px;text-decoration:none;cursor:pointer}} button.secondary{{background:var(--mint-2);color:var(--green)}}
    .progress{{position:fixed;left:300px;right:0;top:0;height:3px;z-index:30;background:transparent}} .progress span{{display:block;height:100%;width:0;background:var(--green-2)}}
    article{{max-width:1120px;margin:0 auto;padding:55px 56px 110px}} h1{{margin:0 0 18px;color:var(--green);font-size:48px;line-height:1.02;letter-spacing:-.035em}} h1:not(:first-child){{margin-top:72px;padding-top:25px;border-top:7px solid var(--green)}}
    h2{{margin:55px 0 18px;color:var(--green);font-size:34px;line-height:1.08;letter-spacing:-.025em}} h3{{margin:30px 0 10px;color:var(--green);font-size:20px}}
    p{{margin:0 0 17px;font-size:17px}} strong{{color:var(--green)}} code{{padding:2px 5px;background:var(--mint-2);font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:.88em}}
    blockquote{{margin:18px 0;padding:18px 22px;background:var(--mint-2);border-left:5px solid var(--green-2);color:var(--green);font-size:18px;font-weight:600}} blockquote+blockquote{{margin-top:-10px}}
    ul,ol{{margin:8px 0 22px;padding-left:26px}} li{{margin:8px 0;font-size:16px}} hr{{margin:58px 0;border:0;border-top:1px solid var(--line)}}
    .slide-run{{margin-top:70px;padding-top:25px;border-top:8px solid var(--green)}} .slide-run>h2{{margin-top:0}} .slide-frame{{margin:18px 0 30px;background:white;border:1px solid var(--line);box-shadow:0 16px 40px #123f3414}}
    .slide-image{{display:block;width:100%;height:auto;image-rendering:auto}} .table-wrap{{margin:20px 0 30px;overflow:auto;border-top:6px solid var(--green)}} table{{width:100%;border-collapse:collapse;background:white;font-size:14px}} th{{background:var(--green);color:white;text-align:left;text-transform:uppercase;letter-spacing:.04em;font-size:11px}} th,td{{padding:13px 14px;border-bottom:1px solid var(--line);vertical-align:top}}
    sup a{{color:var(--green-2);font-size:10px;font-weight:700;text-decoration:none}} .sources{{margin-top:70px;padding-top:28px;border-top:8px solid var(--green)}} .sources ol{{padding:0;list-style:none}} .sources li{{display:grid;grid-template-columns:92px 1fr;gap:16px;padding:15px 0;border-bottom:1px solid var(--line)}} .sources p{{margin:0;font-size:13px;color:var(--gray);overflow-wrap:anywhere}} .source-id{{color:var(--green);font-size:12px;font-weight:700;text-decoration:none}}
    body.focus .rail{{display:none}} body.focus .shell{{grid-template-columns:1fr}} body.focus .progress{{left:0}}
    @media(max-width:900px){{.shell{{display:block}}.rail{{position:relative;height:auto}}.rail nav{{grid-template-columns:repeat(2,minmax(0,1fr))}}.progress{{left:0}}article{{padding:40px 22px 80px}}h1{{font-size:38px}}h2{{font-size:29px}}.toolbar{{top:0}}}}
    @media print{{.rail,.toolbar,.progress{{display:none!important}}.shell{{display:block}}article{{max-width:none;padding:0}}.slide-run{{break-before:page;border-top:0;margin-top:0;padding-top:0}}.slide-frame{{box-shadow:none;break-inside:avoid}}a{{color:inherit;text-decoration:none}}h1{{break-after:avoid}}}}
  </style>
</head>
<body>
  <div class="progress"><span id="progress-bar"></span></div>
  <div class="shell">
    <aside class="rail">
      <a class="brand" href="#session-{session}-facilitator-rehearsal-run-sheet">CORE / PM &nbsp;|&nbsp; FACILITATOR</a>
      <h2>Session {session} rehearsal</h2>
      <p>Slides, script, debriefs, and citations in one place.</p>
      <nav>{toc_html}</nav>
    </aside>
    <main>
      <div class="toolbar">
        <span>135-minute rehearsal run sheet</span>
        <div class="toolbar-actions"><a href="{'/deck' if session == 1 else f'/session-{session}/deck'}">Open deck</a><button class="secondary" onclick="document.body.classList.toggle('focus')">Focus mode</button><button onclick="window.print()">Print / PDF</button></div>
      </div>
      <article>{body}<section class="sources"><h1>Resolved source citations</h1><ol>{sources_html}</ol></section></article>
    </main>
  </div>
  <script>
    const bar=document.getElementById('progress-bar');
    const links=[...document.querySelectorAll('.rail nav a')];
    const update=()=>{{
      const max=document.documentElement.scrollHeight-innerHeight;
      bar.style.width=`${{max?scrollY/max*100:0}}%`;
      let current='';
      for(const section of document.querySelectorAll('[id]')){{if(section.getBoundingClientRect().top<180)current=section.id}}
      links.forEach(link=>link.classList.toggle('active',link.getAttribute('href')===`#${{current}}`));
    }};
    addEventListener('scroll',update,{{passive:true}});update();
  </script>
</body>
</html>"""
    OUTPUT.write_text(document)
    print(f"Wrote {OUTPUT} ({OUTPUT.stat().st_size} bytes)")


if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("--session", type=int, default=1)
    args = parser.parse_args()
    build(args.session)
