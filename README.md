# chengyinlee.github.io

Personal academic homepage of **Chengyin Li** — Researcher in AI for Medical Imaging,
Department of Radiation Oncology, Henry Ford Health.

Live site: https://chengyinlee.github.io

## How it's built
A custom single-page design on **Jekyll** (deploys natively via GitHub Pages).
Almost all content lives in plain data files — no need to touch HTML/CSS to update it.

| To update… | Edit |
|---|---|
| Bio / intro | `_pages/about.md` |
| Name, title, links, headline metrics | `_config.yml` (`author:` and `metrics:`) |
| Selected list (order + which papers) | `_data/selected.yml` |
| Full publication list | `_data/publications.yml` |
| News feed | `_data/news.yml` |
| Awards | `_data/awards.yml` |
| Peer review / service | `_data/service.yml` |
| Talks | `_data/talks.yml` |
| Education / experience | `_data/education.yml`, `_data/experience.yml` |
| Research areas | `_data/research.yml` |
| CV PDF | replace `chengyin_cv.pdf` at the repo root |

Design lives in `assets/css/style.css`, layout in `_layouts/default.html`,
interactions in `assets/js/site.js`.

## Run locally
```bash
bundle install
bundle exec jekyll serve   # http://localhost:4000
```

## Optional: live-updating citation count
The headline **Citations** number is static (`metrics.citations` in `_config.yml`).
To make it auto-update from Google Scholar, enable the included
`google_scholar_crawler/` with a scheduled GitHub Action and a free
[SerpAPI](https://serpapi.com) key stored as the repo secret `GOOGLE_SCHOLAR_API`.
The site already reads `google-scholar-stats/gs_data.json` if present and falls
back to the static value otherwise.

## Credits
Original template based on [acad-homepage](https://github.com/RayeRen/acad-homepage); redesigned 2026.
