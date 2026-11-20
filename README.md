# Beeyor Shopping — Playwright E2E (Portfolio)

[![Playwright E2E](https://github.com/kyawzawhein-qa/Ecommerce_Website_Sample_Test/actions/workflows/playwright.yml/badge.svg)](https://github.com/kyawzawhein-qa/Ecommerce_Website_Sample_Test/actions/workflows/playwright.yml)

Sample **Playwright + TypeScript** end-to-end suite for a fictional **Beeyor Shopping** storefront. The project demonstrates senior QA automation patterns: Page Object Model, typed fixtures, data-driven specs, HTTP API checks beside UI flows, accessibility scanning, Cucumber/Gherkin smoke coverage, and multi-browser CI.

This repository is a **portfolio sample**. It does not represent any employer’s production code and makes no claims about adoption, usage, or metrics.

## What it tests

| Area | Coverage |
|------|----------|
| **Home** | Layout, navigation, hero, product rails, footer |
| **Shop** | Sorting, pagination, product grid, add-to-cart |
| **Product** | PDP details, quantity, breadcrumbs, related items |
| **Cart & checkout** | Empty/filled cart, totals, billing/shipping forms |
| **Login** | Positive + data-driven negative scenarios |
| **Search & navigation** | Cross-page flows |
| **API** | `/api/health`, `/api/products` vs UI catalog |
| **Accessibility** | axe scans on home, shop, product, cart, checkout |

## Tech stack

- **Playwright Test** (TypeScript) — UI + `request` API context  
- **Page Object Model** with shared `BasePage` helpers  
- **Fixture storefront** (`fixture-storefront/`) — deterministic target for local runs and CI  
- **@axe-core/playwright** — WCAG-oriented checks (color-contrast disabled for the minimal fixture theme)  
- **Cucumber** — two BDD features (login + shop/cart)  
- **GitHub Actions** — lint/typecheck, browser matrix, Cucumber job, HTML report + failure artifacts  

Not used: Java, Cypress, Rest Assured.

## Project structure

```
├── tests/                    # Playwright specs (tagged @smoke, @regression, @api)
├── pages/                    # Page Objects
├── fixtures/page-fixtures.ts # Typed fixtures (pages + API context)
├── config/env.ts             # Centralized env config
├── test-data/                # JSON data for login, shop, search, checkout
├── fixture-storefront/       # Local HTTP fixture app + catalog JSON
├── features/                 # Cucumber Gherkin features
├── cucumber/                 # Cucumber hooks, world, step definitions
├── playwright.config.ts
└── .github/workflows/        # CI
```

## Setup

```bash
npm install
npx playwright install --with-deps   # all browsers + OS libs (CI does the same)
cp .env.example .env                 # optional; defaults work out of the box
```

By default, `playwright.config.ts` starts `fixture-storefront/server.js` and uses `BASE_URL=http://127.0.0.1:3000`. Point `BASE_URL` at another environment only if you maintain compatible markup.

## Running tests

```bash
npm test                 # all projects (chromium, firefox, webkit)
npm run test:smoke       # @smoke
npm run test:regression  # @regression
npm run test:api         # @api
npm run test:chromium    # single browser
npm run test:cucumber    # Gherkin smoke (chromium-backed)
npm run test:report      # open last HTML report
```

Debug / UI:

```bash
npm run test:headed
npm run test:ui
npm run test:debug
```

## Tags & npm scripts

| Tag | Purpose | Script |
|-----|---------|--------|
| `@smoke` | Fast critical paths | `npm run test:smoke` |
| `@regression` | Full UI suite | `npm run test:regression` |
| `@api` | HTTP + UI/API alignment | `npm run test:api` |

Tags are declared on `test.describe` / `test()` via Playwright’s native `tag` option.

## Reports & artifacts

- Local HTML report: `playwright-report/` → `npm run test:report`
- Traces/screenshots/videos: on failure (see `playwright.config.ts`)
- CI uploads per-browser HTML reports and failure artifacts

## CI

Workflow: `.github/workflows/playwright.yml`

1. **lint** — `npm run typecheck`, `npm run lint`  
2. **e2e** — matrix `chromium` \| `firefox` \| `webkit`  
3. **cucumber** — BDD smoke on Chromium with the fixture server  

## Writing new tests

1. Add or extend a Page Object under `pages/`.  
2. Register it in `fixtures/page-fixtures.ts` if needed.  
3. Add data under `test-data/` for data-driven cases.  
4. Tag with `@smoke` / `@regression` / `@api` as appropriate.

## License

See [LICENSE](LICENSE).