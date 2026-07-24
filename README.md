# MarkMe

MarkMe is a warm, browser-first Markdown workspace designed and developed by **Manraj Chauhan**. It pairs a focused writing area with a live preview and a lightweight writing companion.

## Features

- Responsive Next.js web application
- Warm cream-and-charcoal editorial interface
- Markdown editor with live, sanitized preview
- Browser-local automatic saving
- Markdown import and download export
- Starter notes and quick formatting actions
- Writing companion for summaries, title prompts, and revision guidance

## Run locally

```bash
npm install
npm run dev
```

Then open the local URL printed by Next.js.

## Production check

```bash
npm run build
```

## Notes on AI

The included writing companion is intentionally local and does not send your notes anywhere. To use a hosted AI provider in production, add a secure server-side route and keep provider API keys out of the browser.
