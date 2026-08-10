import { Page, Locator, expect } from '@playwright/test';

/**
 * BasePage - Foundation class for all Page Objects
 * Provides robust wrapper methods with explicit waits and error handling
 */
export class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  /**
   * Safely clicks an element with visibility check and retry logic
   * @param locator - The Playwright Locator to click
   * @param timeout - Maximum wait time in milliseconds (default: 10000)
   */
  async safeClick(locator: Locator, timeout: number = 10000): Promise<void> {
    await locator.waitFor({ state: 'visible', timeout });
    await locator.click({ timeout });
  }

  /**
   * Safely fills an input field with visibility check
   * @param locator - The Playwright Locator for the input field
   * @param value - The text value to fill
   * @param timeout - Maximum wait time in milliseconds (default: 10000)
   */
  async safeFill(locator: Locator, value: string, timeout: number = 10000): Promise<void> {
    await locator.waitFor({ state: 'visible', timeout });
    await locator.fill(value, { timeout });
  }

  /**
   * Safely clears and fills an input field
   * @param locator - The Playwright Locator for the input field
   * @param value - The text value to fill
   * @param timeout - Maximum wait time in milliseconds (default: 10000)
   */
  async safeClearAndFill(locator: Locator, value: string, timeout: number = 10000): Promise<void> {
    await locator.waitFor({ state: 'visible', timeout });
    await locator.clear({ timeout });
    await locator.fill(value, { timeout });
  }

  /**
   * Gets the text content of an element with visibility check
   * @param locator - The Playwright Locator
   * @param timeout - Maximum wait time in milliseconds (default: 10000)
   * @returns The text content of the element
   */
  async getText(locator: Locator, timeout: number = 10000): Promise<string> {
    await locator.waitFor({ state: 'visible', timeout });
    const text = await locator.textContent({ timeout });
    return text?.trim() || '';
  }

  /**
   * Checks if an element is visible
   * @param locator - The Playwright Locator
   * @param timeout - Maximum wait time in milliseconds (default: 5000)
   * @returns Boolean indicating visibility
   */
  async isVisible(locator: Locator, timeout: number = 5000): Promise<boolean> {
    try {
      await locator.waitFor({ state: 'visible', timeout });
      return true;
    } catch {
      return false;
    }
  }

  /**
   * Waits for an element to be attached to the DOM
   * @param locator - The Playwright Locator
   * @param timeout - Maximum wait time in milliseconds (default: 10000)
   */
  async waitForElement(locator: Locator, timeout: number = 10000): Promise<void> {
    await locator.waitFor({ state: 'attached', timeout });
  }

  /**
   * Waits for an element to be detached from the DOM
   * @param locator - The Playwright Locator
   * @param timeout - Maximum wait time in milliseconds (default: 10000)
   */
  async waitForElementDetached(locator: Locator, timeout: number = 10000): Promise<void> {
    await locator.waitFor({ state: 'detached', timeout });
  }

  /**
   * Maps a locator to its expected text/value for assertion validation
   * @param locator - The Playwright Locator
   * @param expectedText - The expected text content
   * @param timeout - Maximum wait time in milliseconds (default: 10000)
   */
  async MapsTo(locator: Locator, expectedText: string, timeout: number = 10000): Promise<void> {
    await locator.waitFor({ state: 'visible', timeout });
    await expect(locator).toHaveText(expectedText, { timeout });
  }

  /**
   * Asserts that an element contains the expected text (partial match)
   * @param locator - The Playwright Locator
   * @param expectedText - The expected text content (partial match)
   * @param timeout - Maximum wait time in milliseconds (default: 10000)
   */
  async containsText(locator: Locator, expectedText: string, timeout: number = 10000): Promise<void> {
    await locator.waitFor({ state: 'visible', timeout });
    await expect(locator).toContainText(expectedText, { timeout });
  }

  /**
   * Asserts that an element is visible
   * @param locator - The Playwright Locator
   * @param timeout - Maximum wait time in milliseconds (default: 10000)
   */
  async assertVisible(locator: Locator, timeout: number = 10000): Promise<void> {
    await expect(locator).toBeVisible({ timeout });
  }

  /**
   * Asserts that an element is hidden
   * @param locator - The Playwright Locator
   * @param timeout - Maximum wait time in milliseconds (default: 10000)
   */
  async assertHidden(locator: Locator, timeout: number = 10000): Promise<void> {
    await expect(locator).toBeHidden({ timeout });
  }

  /**
   * Asserts that the current URL contains the expected path
   * @param expectedPath - The expected URL path segment
   * @param timeout - Maximum wait time in milliseconds (default: 10000)
   */
  async assertUrlContains(expectedPath: string, timeout: number = 10000): Promise<void> {
    await expect(this.page).toHaveURL(new RegExp(expectedPath), { timeout });
  }

  /**
   * Waits for the page to be fully loaded
   * @param timeout - Maximum wait time in milliseconds (default: 30000)
   */
  async waitForPageLoad(timeout: number = 30000): Promise<void> {
    await this.page.waitForLoadState('networkidle', { timeout });
  }

  /**
   * Takes a screenshot with a descriptive name
   * @param name - Descriptive name for the screenshot
   */
  async takeScreenshot(name: string): Promise<void> {
    await this.page.screenshot({ path: `screenshots/${name}-${Date.now()}.png`, fullPage: true });
  }
}
