import { test, expect } from '../fixtures/page-fixtures';

/**
 * Cart Page Test Suite
 * Tests for the shopping cart functionality
 */
test.describe('Cart Page', () => {
  test.beforeEach(async ({ cartPage }) => {
    await cartPage.goto();
  });

  test('should load cart page', async ({ cartPage }) => {
    // Arrange & Act
    const isLoaded = await cartPage.isCartPageLoaded();

    // Assert
    expect(isLoaded).toBe(true);
    await expect(cartPage.page).toHaveURL(/cart/);
  });

  test('should display empty cart message when cart is empty', async ({ cartPage }) => {
    // Arrange & Act
    const isEmpty = await cartPage.isCartEmpty();

    // Assert
    expect(isEmpty).toBe(true);
  });

  test('should display new in store products on empty cart', async ({ cartPage }) => {
    // Arrange & Act
    const newInStoreVisible = await cartPage.isVisible(cartPage['newInStoreSection']);
    const productsCount = await cartPage.getNewInStoreProductsCount();

    // Assert
    expect(newInStoreVisible).toBe(true);
    expect(productsCount).toBeGreaterThan(0);
  });

  test('should navigate to product from new in store section', async ({ cartPage, productPage }) => {
    // Arrange
    const productsCount = await cartPage.getNewInStoreProductsCount();
    test.skip(productsCount === 0, 'No products available');

    // Act
    await cartPage.clickFirstNewInStoreProduct();

    // Assert
    await expect(cartPage.page).toHaveURL(/product\//);
  });

  test('should navigate to checkout when proceed to checkout is clicked', async ({ cartPage }) => {
    // Arrange
    const checkoutButtonVisible = await cartPage.isVisible(cartPage['proceedToCheckoutButton']);
    test.skip(!checkoutButtonVisible, 'Checkout button not available on empty cart');

    // Act
    await cartPage.proceedToCheckout();

    // Assert
    await expect(cartPage.page).toHaveURL(/checkout/);
  });
});

/**
 * Cart with Items Test Suite
 * Tests that require adding items to cart first
 */
test.describe('Cart with Items', () => {
  test.beforeEach(async ({ shopPage, cartPage }) => {
    // Add a product to cart first
    await shopPage.goto();
    await shopPage.addProductToCart(0);
    await shopPage.waitForPageLoad();
    await cartPage.goto();
  });

  test('should display cart items after adding product', async ({ cartPage }) => {
    // Arrange & Act
    const isEmpty = await cartPage.isCartEmpty();
    const itemsCount = await cartPage.getCartItemsCount();

    // Assert
    expect(isEmpty).toBe(false);
    expect(itemsCount).toBeGreaterThanOrEqual(1);
  });

  test('should display cart item details', async ({ cartPage }) => {
    // Arrange & Act
    const itemName = await cartPage.getCartItemName(0);
    const itemPrice = await cartPage.getCartItemPrice(0);

    // Assert
    expect(itemName.length).toBeGreaterThan(0);
    expect(itemPrice.length).toBeGreaterThan(0);
  });

  test('should display cart totals', async ({ cartPage }) => {
    // Arrange & Act
    const subtotal = await cartPage.getCartSubtotal();
    const total = await cartPage.getCartTotal();

    // Assert
    expect(subtotal.length).toBeGreaterThan(0);
    expect(total.length).toBeGreaterThan(0);
  });

  test('should remove item from cart', async ({ cartPage }) => {
    // Arrange
    const initialCount = await cartPage.getCartItemsCount();

    // Act
    await cartPage.removeCartItem(0);

    // Assert
    const finalCount = await cartPage.getCartItemsCount();
    expect(finalCount).toBeLessThan(initialCount);
  });

  test('should proceed to checkout with items', async ({ cartPage }) => {
    // Arrange & Act
    await cartPage.proceedToCheckout();

    // Assert
    await expect(cartPage.page).toHaveURL(/checkout/);
  });
});
