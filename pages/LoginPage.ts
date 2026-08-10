import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

/**
 * LoginPage - Page Object for the Beeyor Shopping login page
 * Encapsulates all login-related locators and actions
 */
export class LoginPage extends BasePage {
  // Private locators - implementation details hidden from tests
  private readonly emailInput: Locator;
  private readonly passwordInput: Locator;
  private readonly loginButton: Locator;
  private readonly errorMessage: Locator;
  private readonly forgotPasswordLink: Locator;
  private readonly registerLink: Locator;
  private readonly pageHeader: Locator;

  constructor(page: Page) {
    super(page);

    // User-facing locators (prefer role-based and label-based selectors)
    this.emailInput = page.getByRole('textbox', { name: /email|e-mail/i }).or(
      page.getByLabel(/email|e-mail/i)
    );
    this.passwordInput = page.getByRole('textbox', { name: /password/i }).or(
      page.getByLabel(/password/i)
    ).or(
      page.locator('input[type="password"]')
    );
    this.loginButton = page.getByRole('button', { name: /log\s*in|sign\s*in|login|signin/i });
    this.errorMessage = page.locator('.error-message, .alert-danger, [data-testid="error-message"]').or(
      page.getByText(/invalid|incorrect|wrong|not found|failed/i)
    );
    this.forgotPasswordLink = page.getByRole('link', { name: /forgot.*password/i });
    this.registerLink = page.getByRole('link', { name: /register|sign\s*up|create\s*account/i });
    this.pageHeader = page.getByRole('heading', { name: /log\s*in|sign\s*in|welcome/i });
  }

  /**
   * Navigate to the login page
   */
  async goto(): Promise<void> {
    await this.page.goto('/account/login');
    await this.waitForPageLoad();
  }

  /**
   * Fill email and password fields
   * @param email - User email address
   * @param password - User password
   */
  async fillCredentials(email: string, password: string): Promise<void> {
    await this.safeFill(this.emailInput, email);
    await this.safeFill(this.passwordInput, password);
  }

  /**
   * Click the login button
   */
  async clickLogin(): Promise<void> {
    await this.safeClick(this.loginButton);
  }

  /**
   * Perform a complete login action
   * @param email - User email address
   * @param password - User password
   */
  async login(email: string, password: string): Promise<void> {
    await this.fillCredentials(email, password);
    await this.clickLogin();
  }

  /**
   * Get the error message text if displayed
   * @returns Error message text or empty string
   */
  async getErrorMessage(): Promise<string> {
    if (await this.isVisible(this.errorMessage)) {
      return this.getText(this.errorMessage);
    }
    return '';
  }

  /**
   * Check if error message is visible
   * @returns Boolean indicating error visibility
   */
  async isErrorVisible(): Promise<boolean> {
    return this.isVisible(this.errorMessage);
  }

  /**
   * Click forgot password link
   */
  async clickForgotPassword(): Promise<void> {
    await this.safeClick(this.forgotPasswordLink);
  }

  /**
   * Click register link
   */
  async clickRegister(): Promise<void> {
    await this.safeClick(this.registerLink);
  }

  /**
   * Verify login page is displayed
   */
  async isLoginPageDisplayed(): Promise<boolean> {
    return this.isVisible(this.pageHeader);
  }

  /**
   * Assert login page header is visible
   */
  async assertLoginPageDisplayed(): Promise<void> {
    await this.assertVisible(this.pageHeader);
  }
}
