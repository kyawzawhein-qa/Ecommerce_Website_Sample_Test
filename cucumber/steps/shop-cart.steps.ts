import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { config } from '../../config/env';
import type { PlaywrightWorld } from '../support/world';

Given('the shop catalog is available', async function (this: PlaywrightWorld) {
  const response = await this.api.get(config.apiPath.products);
  expect(response.ok()).toBeTruthy();
  await this.shopPage.goto();
});

When('I add the first product to my cart from the shop page', async function (this: PlaywrightWorld) {
  await this.shopPage.addProductToCart(0);
});

Then('my cart should contain at least one item', async function (this: PlaywrightWorld) {
  await this.cartPage.goto();
  const count = await this.cartPage.getCartItemsCount();
  expect(count).toBeGreaterThanOrEqual(1);
});