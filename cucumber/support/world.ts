import { setWorldConstructor, World, IWorldOptions } from '@cucumber/cucumber';
import { chromium, Browser, BrowserContext, Page, APIRequestContext } from '@playwright/test';
import { config } from '../../config/env';
import { LoginPage } from '../../pages/LoginPage';
import { ShopPage } from '../../pages/ShopPage';
import { CartPage } from '../../pages/CartPage';
import { spawn, ChildProcess } from 'child_process';

let serverProcess: ChildProcess | undefined;

export async function ensureFixtureServer(): Promise<void> {
  if (process.env.CI) {
    return;
  }
  if (serverProcess) {
    return;
  }
  serverProcess = spawn('node', ['fixture-storefront/server.js'], {
    cwd: process.cwd(),
    stdio: 'ignore',
  });
  await new Promise((resolve) => setTimeout(resolve, 600));
}

export class PlaywrightWorld extends World {
  browser!: Browser;
  context!: BrowserContext;
  page!: Page;
  api!: APIRequestContext;
  loginPage!: LoginPage;
  shopPage!: ShopPage;
  cartPage!: CartPage;

  constructor(options: IWorldOptions) {
    super(options);
  }

  async init(): Promise<void> {
    if (!process.env.CI) {
      await ensureFixtureServer();
    }
    this.browser = await chromium.launch({ headless: true });
    this.context = await this.browser.newContext({ baseURL: config.baseURL });
    this.page = await this.context.newPage();
    this.api = await this.context.request;
    this.loginPage = new LoginPage(this.page);
    this.shopPage = new ShopPage(this.page);
    this.cartPage = new CartPage(this.page);
  }

  async cleanup(): Promise<void> {
    await this.page?.close();
    await this.context?.close();
    await this.browser?.close();
  }
}

setWorldConstructor(PlaywrightWorld);