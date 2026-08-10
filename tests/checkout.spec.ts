import { test, expect } from '../fixtures/page-fixtures';

/**
 * Checkout Page Test Suite
 * Tests for the checkout functionality
 */
test.describe('Checkout Page', () => {
  test.beforeEach(async ({ checkoutPage }) => {
    await checkoutPage.goto();
  });

  test('should load checkout page', async ({ checkoutPage }) => {
    // Arrange & Act
    const isLoaded = await checkoutPage.isCheckoutPageLoaded();

    // Assert
    expect(isLoaded).toBe(true);
    await expect(checkoutPage.page).toHaveURL(/checkout/);
  });

  test('should display empty cart message when no items', async ({ checkoutPage }) => {
    // Arrange & Act
    const isEmpty = await checkoutPage.isCartEmpty();

    // Assert
    expect(isEmpty).toBe(true);
  });

  test('should display return to cart link when cart is empty', async ({ checkoutPage }) => {
    // Arrange & Act
    const returnLinkVisible = await checkoutPage.isVisible(checkoutPage['returnToCartLink']);

    // Assert
    expect(returnLinkVisible).toBe(true);
  });

  test('should navigate to cart when return to cart is clicked', async ({ checkoutPage }) => {
    // Arrange & Act
    await checkoutPage.returnToCart();

    // Assert
    await expect(checkoutPage.page).toHaveURL(/cart/);
  });
});

/**
 * Checkout with Items Test Suite
 * Tests checkout flow with products in cart
 */
test.describe('Checkout with Items', () => {
  test.beforeEach(async ({ shopPage, checkoutPage }) => {
    // Add a product to cart and navigate to checkout
    await shopPage.goto();
    await shopPage.addProductToCart(0);
    await shopPage.waitForPageLoad();
    await checkoutPage.goto();
  });

  test('should display order review with products', async ({ checkoutPage }) => {
    // Arrange & Act
    const productNames = await checkoutPage.getOrderProductNames();

    // Assert
    expect(productNames.length).toBeGreaterThanOrEqual(1);
  });

  test('should display order total', async ({ checkoutPage }) => {
    // Arrange & Act
    const orderTotal = await checkoutPage.getOrderTotal();

    // Assert
    expect(orderTotal.length).toBeGreaterThan(0);
  });

  test('should display order subtotal', async ({ checkoutPage }) => {
    // Arrange & Act
    const orderSubtotal = await checkoutPage.getOrderSubtotal();

    // Assert
    expect(orderSubtotal.length).toBeGreaterThan(0);
  });

  test('should fill billing information successfully', async ({ checkoutPage }) => {
    // Arrange
    const billingData = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      phone: '+1234567890',
      address1: '123 Test Street',
      city: 'Test City',
      postcode: '12345',
    };

    // Act
    await checkoutPage.fillBillingInformation(billingData);

    // Assert
    const firstNameValue = await checkoutPage.page.inputValue('#billing_first_name');
    const lastNameValue = await checkoutPage.page.inputValue('#billing_last_name');
    const emailValue = await checkoutPage.page.inputValue('#billing_email');

    expect(firstNameValue).toBe(billingData.firstName);
    expect(lastNameValue).toBe(billingData.lastName);
    expect(emailValue).toBe(billingData.email);
  });

  test('should enable ship to different address', async ({ checkoutPage }) => {
    // Arrange & Act
    await checkoutPage.enableShipToDifferentAddress();

    // Assert
    const shippingFieldsVisible = await checkoutPage.isVisible(checkoutPage['shippingFirstName']);
    expect(shippingFieldsVisible).toBe(true);
  });

  test('should fill shipping information when different address enabled', async ({ checkoutPage }) => {
    // Arrange
    await checkoutPage.enableShipToDifferentAddress();
    const shippingData = {
      firstName: 'Jane',
      lastName: 'Smith',
      address1: '456 Shipping Ave',
      city: 'Shipping City',
      postcode: '54321',
    };

    // Act
    await checkoutPage.fillShippingInformation(shippingData);

    // Assert
    const firstNameValue = await checkoutPage.page.inputValue('#shipping_first_name');
    expect(firstNameValue).toBe(shippingData.firstName);
  });

  test('should add order notes', async ({ checkoutPage }) => {
    // Arrange
    const notes = 'Please deliver before 5 PM';

    // Act
    await checkoutPage.addOrderNotes(notes);

    // Assert
    const notesValue = await checkoutPage.page.inputValue('#order_comments');
    expect(notesValue).toBe(notes);
  });

  test('should enable create account option', async ({ checkoutPage }) => {
    // Arrange & Act
    const createAccountVisible = await checkoutPage.isVisible(checkoutPage['createAccountCheckbox']);
    test.skip(!createAccountVisible, 'Create account option not available');

    await checkoutPage.enableCreateAccount();

    // Assert
    const isChecked = await checkoutPage.page.isChecked('#createaccount');
    expect(isChecked).toBe(true);
  });
});
