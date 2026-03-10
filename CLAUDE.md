# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

| Task | Command |
|------|---------|
| Dev server | `npm run dev` (localhost:3000) |
| Build | `npm run build` (static export to `out/`) |
| Lint | `npm run lint` |
| Test | `npm test` |
| Test (watch) | `npm run test:watch` |

## Architecture

This is a personal portfolio website styled as a read-only spreadsheet (Excel-like UI), built with Next.js 14 App Router and statically exported for GitHub Pages.

### Data-Driven Pages

Each page is defined by a `spreadsheet-data.ts` file containing a `SpreadsheetData` object:
- **columns**: array of `{ width }` using CSS grid track sizes (e.g. `"9fr"`, `"minmax(0, 4fr)"`)
- **rows**: array of `{ height }` using `minmax(Xpx, auto)` so rows grow on narrow screens
- **cells**: sparse object keyed by `cells[rowNumber][columnLetter]` (e.g. `cells["3"]["B"]`)

To add a new page: create `src/app/<name>/page.tsx` (copy existing pattern), create `spreadsheet-data.ts`, add a tab entry in `src/app/tabs.ts`.

### Column Layout Convention

All pages use 8 columns: A (left gutter), B-G (content), H (right gutter). Gutters use `minmax(0, 4fr)` to absorb extra space on wide screens and collapse on mobile. Content columns use `9fr`/`10fr`.

### Component Hierarchy

```
RootLayout (layout.tsx — Inter font, devicon CSS)
└── Page
    ├── Spreadsheet (CSS Grid from SpreadsheetData)
    │   ├── Column headers (A-H) + Row headers (1-N)
    │   ├── SpreadsheetCell (per data cell)
    │   │   ├── ReactMarkdown (content rendering)
    │   │   ├── SkillBadges (grouped icon badges via devicon)
    │   │   └── CopyButton (clipboard with feedback)
    │   └── Filler div (CSS background paints gridlines, no DOM rows)
    └── SheetTabs (fixed bottom bar, usePathname for active tab)
```

### Cell Features

`CellData` supports: `content` (markdown), `colSpan`/`rowSpan`, `className` (Tailwind), `href` (makes cell a link), `copyText` (adds copy button), `skills` (renders badge array with optional grouping).

### Styling

All spreadsheet chrome styles are in `src/app/globals.css` (not Tailwind utilities). Tailwind is used only for cell background colors via `className`. Responsive breakpoints at 768px and 480px adjust font sizes, padding, row header width (`--row-header-w` CSS variable), and tab bar sizing.

### Static Export & Deployment

`next.config.mjs` sets `output: "export"` with `images: { unoptimized: true }`. GitHub Actions (`.github/workflows/deploy.yml`) builds and deploys to GitHub Pages on push to `main`. Custom domain configured via `public/CNAME`.

### Path Alias

`@/*` maps to `./src/*` (tsconfig paths).
