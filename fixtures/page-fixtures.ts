import { test as base, APIRequestContext } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
import { ShopPage } from '../pages/ShopPage';
import { ProductPage } from '../pages/ProductPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { config } from '../config/env';

interface PageFixtures {
  loginPage: LoginPage;
  homePage: HomePage;
  shopPage: ShopPage;
  productPage: ProductPage;
  cartPage: CartPage;
  checkoutPage: CheckoutPage;
  api: APIRequestContext;
}

export const test = base.extend<PageFixtures>({
  api: async ({ playwright }, use) => {
    const api = await playwright.request.newContext({
      baseURL: config.baseURL,
    });
    await use(api);
    await api.dispose();
  },
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  shopPage: async ({ page }, use) => {
    await use(new ShopPage(page));
  },
  productPage: async ({ page }, use) => {
    await use(new ProductPage(page));
  },
  cartPage: async ({ page }, use) => {
    await use(new CartPage(page));
  },
  checkoutPage: async ({ page }, use) => {
    await use(new CheckoutPage(page));
  },
});

export { expect } from '@playwright/test';