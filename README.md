# Ecommerce Sample — Playwright E2E Tests

Sample QA automation portfolio project: end-to-end tests for a generic ecommerce storefront, built with **Playwright** and **TypeScript** using the Page Object Model (POM).

The suite is written against a sample shopping site. Point tests at your own environment by setting `BASE_URL` in a local `.env` file (see setup below). This repository does not ship a hosted demo URL.

## Project structure

```
├── tests/                  # Test specifications
│   ├── login.spec.ts       # Login functionality tests
│   ├── home.spec.ts        # Home page tests
│   ├── shop.spec.ts        # Shop/product listing tests
│   ├── product.spec.ts     # Product detail page tests
│   ├── cart.spec.ts        # Cart functionality tests
│   ├── checkout.spec.ts    # Checkout flow tests
│   └── navigation.spec.ts  # Cross-page navigation tests
├── pages/                  # Page Object Models
│   ├── BasePage.ts         # Base page with reusable methods
│   ├── LoginPage.ts        # Login page object
│   ├── HomePage.ts         # Home page object
│   ├── ShopPage.ts         # Shop page object
│   ├── ProductPage.ts      # Product detail page object
│   ├── CartPage.ts         # Cart page object
│   └── CheckoutPage.ts     # Checkout page object
├── fixtures/               # Custom Playwright fixtures
│   └── page-fixtures.ts    # Page Object fixtures
├── test-data/              # JSON test data files
│   ├── login-data.json     # Login test scenarios
│   ├── search-data.json    # Search test scenarios
│   └── shop-data.json      # Shop sorting/pagination data
├── playwright.config.ts    # Playwright configuration
├── tsconfig.json           # TypeScript configuration
├── .env.example            # Environment variable template (copy to `.env`)
└── package.json            # Project dependencies
```

## Quick start

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
npx playwright install
```

### Configuration

1. Copy the environment template and edit it for your storefront:

   ```bash
   cp .env.example .env
   ```

2. Set `BASE_URL` to the site you want to test.
3. Optionally set `TEST_USERNAME` and `TEST_PASSWORD` for positive login scenarios. Do not commit real credentials.

## Running tests

```bash
# Run all tests (default: Chromium)
npm test

# Run tests in headed mode (see browser)
npm run test:headed

# Run tests on specific browser
npm run test:chromium
npm run test:firefox
npm run test:webkit

# Run a specific test file
npm run test:login        # Login tests only
npm run test:report       # View HTML report

# Run tests in debug mode
npm run test:debug

# Run tests with UI mode (interactive)
npm run test:ui
```

## Test reports

```bash
npx playwright show-report
```

Reports are generated in `playwright-report/` (ignored by git).

## Architecture

### Page Object Model (POM)

- **BasePage**: Reusable helpers (`safeClick`, `safeFill`, `MapsTo`, `getText`, `assertVisible`, etc.)
- **LoginPage**: Login form and credential handling
- **HomePage**: Hero banners, navigation, product listings, footer
- **ShopPage**: Product grid, sorting, pagination
- **ProductPage**: Product details, quantity, add to cart, breadcrumbs, related products
- **CartPage**: Cart items, totals, coupon, checkout flow
- **CheckoutPage**: Billing/shipping forms, order review, payment

### Test coverage

| Page/Feature | Test File | Key tests |
|-------------|-----------|-----------|
| **Login** | `login.spec.ts` | Positive login, empty fields, invalid email, wrong password, UI elements |
| **Home** | `home.spec.ts` | Page load, header, navigation, hero, features, products, promo banners, footer |
| **Shop** | `shop.spec.ts` | Product listing, sort options, pagination, add to cart |
| **Product** | `product.spec.ts` | Title, price, breadcrumbs, quantity, add to cart, related products |
| **Cart** | `cart.spec.ts` | Empty cart, cart items, totals, remove items, checkout flow |
| **Checkout** | `checkout.spec.ts` | Billing form, shipping form, order review, payment methods |
| **Navigation** | `navigation.spec.ts` | Cross-page navigation, breadcrumbs, product recommendations |
| **Search** | `navigation.spec.ts` | Valid search, partial search, no results |

### Data-driven testing

Test data lives in `test-data/*.json` and is loaded in specs.

### Fixtures

`fixtures/page-fixtures.ts` exposes Page Objects to tests.

## Writing new tests

1. Add a Page Object in `pages/` extending `BasePage`
2. Register a fixture in `fixtures/page-fixtures.ts`
3. Add a spec under `tests/`
4. Add JSON data under `test-data/` when useful

### Example (AAA)

```typescript
test('should do something', async ({ loginPage }) => {
  // Arrange
  await loginPage.goto();

  // Act
  await loginPage.login('user@example.com', 'password');

  // Assert
  await expect(loginPage.page).toHaveURL('/dashboard');
});
```

## CI/CD

The project supports parallel runs on common Node.js CI systems (for example GitHub Actions or Azure DevOps). Traces, screenshots, and videos are captured on failure when configured in `playwright.config.ts`.
