# Beeyor Shopping - E2E Test Framework

Enterprise-grade end-to-end testing framework built with **Playwright** and **TypeScript** for [http://staging.shopping.beeyor.com/](http://staging.shopping.beeyor.com/).

## 📁 Project Structure

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
│   └── page-fixtures.ts    # All Page Object fixtures
├── test-data/              # JSON test data files
│   ├── login-data.json     # Login test scenarios
│   ├── search-data.json    # Search test scenarios
│   └── shop-data.json      # Shop sorting/pagination data
├── utils/                  # Utility functions
├── playwright.config.ts    # Playwright configuration
├── tsconfig.json           # TypeScript configuration
├── .env                    # Environment variables
└── package.json            # Project dependencies
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# Install dependencies
npm install

# Install Playwright browser binaries
npx playwright install
```

### Configuration

1. Update `BASE_URL` in `.env` if testing a different environment
2. Set `TEST_USERNAME` and `TEST_PASSWORD` for positive login tests

## 🧪 Running Tests

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

## 📊 Test Reports

```bash
# Open HTML report after test run
npx playwright show-report
```

Reports are generated in `playwright-report/` folder.

## 🏗️ Architecture

### Page Object Model (POM)
- **BasePage**: Provides reusable methods (`safeClick`, `safeFill`, `MapsTo`, `getText`, `assertVisible`, etc.)
- **LoginPage**: Login form with credential handling
- **HomePage**: Hero banners, navigation, product listings, footer
- **ShopPage**: Product grid, sorting, pagination
- **ProductPage**: Product details, quantity, add to cart, breadcrumbs, related products
- **CartPage**: Cart items, totals, coupon, checkout flow
- **CheckoutPage**: Billing/shipping forms, order review, payment

### Test Coverage

| Page/Feature | Test File | Key Tests |
|-------------|-----------|-----------|
| **Login** | `login.spec.ts` | Positive login, empty fields, invalid email, wrong password, UI elements |
| **Home** | `home.spec.ts` | Page load, header, navigation, hero, features, products, promo banners, footer |
| **Shop** | `shop.spec.ts` | Product listing, 6 sort options, pagination, add to cart |
| **Product** | `product.spec.ts` | Title, price, breadcrumbs, quantity, add to cart, related products |
| **Cart** | `cart.spec.ts` | Empty cart, cart items, totals, remove items, checkout flow |
| **Checkout** | `checkout.spec.ts` | Billing form, shipping form, order review, payment methods |
| **Navigation** | `navigation.spec.ts` | Cross-page navigation, breadcrumbs, product recommendations |
| **Search** | `navigation.spec.ts` | Valid search, partial search, no results |

### Data-Driven Testing
Test data is stored in `test-data/*.json` files and loaded dynamically in test files.

### Fixtures
Custom fixtures in `fixtures/page-fixtures.ts` provide easy access to all Page Objects in tests.

## 📝 Writing New Tests

1. Create a Page Object in `pages/` extending `BasePage`
2. Add fixture in `fixtures/page-fixtures.ts`
3. Create test file in `tests/` using the fixture
4. Add test data in `test-data/` if needed

### Example Test Pattern (AAA)

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

## 🔧 CI/CD Integration

The framework is configured for parallel execution and works with:
- GitHub Actions
- Azure DevOps Pipelines
- Any CI system supporting Node.js

Traces, screenshots, and videos are automatically captured on failure.
