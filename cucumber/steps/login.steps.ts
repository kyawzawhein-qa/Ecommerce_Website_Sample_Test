import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { config } from '../../config/env';
import type { PlaywrightWorld } from '../support/world';

Given('I am on the login page', async function (this: PlaywrightWorld) {
  await this.loginPage.goto();
});

When('I sign in with valid test credentials', async function (this: PlaywrightWorld) {
  await this.loginPage.login(config.credentials.username, config.credentials.password);
});

When('I attempt to sign in with an incorrect password', async function (this: PlaywrightWorld) {
  await this.loginPage.login(config.credentials.username, 'WrongPassword123!');
});

Then('I should see the account dashboard', async function (this: PlaywrightWorld) {
  await expect(this.page).toHaveURL(/my-account|dashboard/);
});

Then('I should see a login error message', async function (this: PlaywrightWorld) {
  const message = await this.loginPage.getErrorMessage();
  expect(message.toLowerCase()).toMatch(/incorrect|password|failed/);
});