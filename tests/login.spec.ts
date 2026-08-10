import { test, expect } from '../fixtures/page-fixtures';
import * as loginData from '../test-data/login-data.json';

/**
 * Login Test Suite
 * Data-driven tests for the Beeyor Shopping login functionality
 * Uses Arrange-Act-Assert (AAA) pattern
 */
test.describe('Login Functionality', () => {
  /**
   * Positive Test: Successful login with valid credentials
   */
  test('should login successfully with valid credentials', async ({ loginPage }) => {
    // Arrange
    const validEmail = process.env.TEST_USERNAME || 'testuser@example.com';
    const validPassword = process.env.TEST_PASSWORD || 'ValidP@ssw0rd!';

    // Act
    await loginPage.goto();
    await loginPage.login(validEmail, validPassword);

    // Assert
    await expect(loginPage.page).toHaveURL(/\/account|\/dashboard|\/my-account/);
  });

  /**
   * Negative Tests: Data-driven from login-data.json
   * Iterates through all negative test scenarios
   */
  test.describe('Negative Login Scenarios', () => {
    const negativeScenarios = loginData.loginScenarios.filter(
      (scenario: { expectedResult: string }) => scenario.expectedResult === 'error'
    );

    for (const scenario of negativeScenarios) {
      test(scenario.description, async ({ loginPage }) => {
        // Arrange
        const { email, password, expectedError } = scenario;

        // Act
        await loginPage.goto();
        await loginPage.login(email, password);

        // Assert
        const errorMessage = await loginPage.getErrorMessage();
        expect(errorMessage.toLowerCase()).toMatch(new RegExp(expectedError || 'error', 'i'));
      });
    }
  });

  /**
   * UI Validation Tests
   */
  test('should display login page with required elements', async ({ loginPage }) => {
    // Arrange & Act
    await loginPage.goto();

    // Assert
    await loginPage.assertLoginPageDisplayed();
  });

  test('should navigate to forgot password page when link is clicked', async ({ loginPage }) => {
    // Arrange
    await loginPage.goto();

    // Act
    await loginPage.clickForgotPassword();

    // Assert
    await expect(loginPage.page).toHaveURL(/forgot.*password|reset.*password/i);
  });

  test('should navigate to registration page when register link is clicked', async ({ loginPage }) => {
    // Arrange
    await loginPage.goto();

    // Act
    await loginPage.clickRegister();

    // Assert
    await expect(loginPage.page).toHaveURL(/register|sign.*up|create.*account/i);
  });
});
