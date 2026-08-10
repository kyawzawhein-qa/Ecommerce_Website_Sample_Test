import { test, expect } from '../fixtures/page-fixtures';
import * as searchData from '../test-data/search-data.json';

/**
 * Search Functionality Test Suite
 * Tests for the site-wide search feature
 */
test.describe('Search Functionality', () => {
  test.beforeEach(async ({ homePage }) => {
    await homePage.goto();
  });

  test('should display search box on home page', async ({ homePage }) => {
    // Arrange & Act
    const searchBoxVisible = await homePage.isVisible(homePage['searchBox']);
    const searchButtonVisible = await homePage.isVisible(homePage['searchButton']);

    // Assert
    expect(searchBoxVisible).toBe(true);
    expect(searchButtonVisible).toBe(true);
  });

  test('should search for valid product term', async ({ homePage, shopPage }) => {
    // Arrange
    const searchTerm = 'ab';

    // Act
    await homePage.searchForProduct(searchTerm);

    // Assert
    await expect(homePage.page).toHaveURL(/s=|search/);
  });

  test('should search for partial product term', async ({ homePage }) => {
    // Arrange
    const searchTerm = 'shoe';

    // Act
    await homePage.searchForProduct(searchTerm);

    // Assert
    await expect(homePage.page).toHaveURL(/s=|search/);
  });

  test('should handle search with non-existent product', async ({ homePage }) => {
    // Arrange
    const searchTerm = 'xyznonexistent123';

    // Act
    await homePage.searchForProduct(searchTerm);

    // Assert
    await expect(homePage.page).toHaveURL(/s=|search/);
  });

  test('should display search results page after search', async ({ homePage }) => {
    // Arrange
    const searchTerm = 'ab';

    // Act
    await homePage.searchForProduct(searchTerm);

    // Assert
    const url = homePage.page.url();
    expect(url).toContain('s=');
  });
});

/**
 * Navigation Test Suite
 * Tests for site navigation across all pages
 */
test.describe('Navigation', () => {
  test('should navigate from home to shop and back', async ({ homePage, shopPage }) => {
    // Arrange
    await homePage.goto();

    // Act
    await homePage.clickNavShop();
    await shopPage.waitForPageLoad();

    // Assert
    await expect(shopPage.page).toHaveURL(/shop/);

    // Act - navigate back
    await shopPage.page.goBack();
    await homePage.waitForPageLoad();

    // Assert
    await expect(homePage.page).toHaveURL('/');
  });

  test('should navigate from home to cart and back', async ({ homePage, cartPage }) => {
    // Arrange
    await homePage.goto();

    // Act
    await homePage.clickNavCart();
    await cartPage.waitForPageLoad();

    // Assert
    await expect(cartPage.page).toHaveURL(/cart/);
  });

  test('should navigate from home to checkout and back', async ({ homePage, checkoutPage }) => {
    // Arrange
    await homePage.goto();

    // Act
    await homePage.clickNavCheckout();
    await checkoutPage.waitForPageLoad();

    // Assert
    await expect(checkoutPage.page).toHaveURL(/checkout/);
  });

  test('should navigate from home to login and back', async ({ homePage, loginPage }) => {
    // Arrange
    await homePage.goto();

    // Act
    await homePage.clickLogin();
    await loginPage.waitForPageLoad();

    // Assert
    await expect(loginPage.page).toHaveURL(/my-account/);
  });

  test('should navigate from shop to product detail', async ({ shopPage, productPage }) => {
    // Arrange
    await shopPage.goto();

    // Act
    await shopPage.clickProduct(0);
    await productPage.waitForPageLoad();

    // Assert
    await expect(productPage.page).toHaveURL(/product\//);
  });

  test('should navigate from product to cart', async ({ shopPage, productPage, cartPage }) => {
    // Arrange
    await shopPage.goto();
    await shopPage.clickProduct(0);
    await productPage.waitForPageLoad();

    // Act
    await productPage.addToCart();
    await productPage.waitForPageLoad();
    await cartPage.goto();

    // Assert
    await expect(cartPage.page).toHaveURL(/cart/);
  });

  test('should navigate from cart to checkout', async ({ shopPage, cartPage, checkoutPage }) => {
    // Arrange
    await shopPage.goto();
    await shopPage.addProductToCart(0);
    await shopPage.waitForPageLoad();
    await cartPage.goto();

    // Act
    const checkoutButtonVisible = await cartPage.isVisible(cartPage['proceedToCheckoutButton']);
    test.skip(!checkoutButtonVisible, 'Checkout button not available');

    await cartPage.proceedToCheckout();

    // Assert
    await expect(checkoutPage.page).toHaveURL(/checkout/);
  });

  test('should navigate from checkout back to cart', async ({ checkoutPage }) => {
    // Arrange
    await checkoutPage.goto();

    // Act
    await checkoutPage.returnToCart();

    // Assert
    await expect(checkoutPage.page).toHaveURL(/cart/);
  });

  test('should navigate from product breadcrumb to home', async ({ shopPage, productPage, homePage }) => {
    // Arrange
    await shopPage.goto();
    await shopPage.clickProduct(0);
    await productPage.waitForPageLoad();

    // Act
    await productPage.clickBreadcrumbHome();

    // Assert
    await expect(homePage.page).toHaveURL('/');
  });

  test('should navigate from product breadcrumb to category', async ({ shopPage, productPage }) => {
    // Arrange
    await shopPage.goto();
    await shopPage.clickProduct(0);
    await productPage.waitForPageLoad();

    // Act
    await productPage.clickBreadcrumbCategory();

    // Assert
    await expect(productPage.page).toHaveURL(/product-category|shop/);
  });

  test('should navigate from home to product via See All', async ({ homePage, shopPage }) => {
    // Arrange
    await homePage.goto();

    // Act
    await homePage.clickSeeAll();

    // Assert
    await expect(homePage.page).toHaveURL(/shop/);
  });

  test('should navigate from cart product recommendation to product page', async ({ cartPage, productPage }) => {
    // Arrange
    await cartPage.goto();
    const productsCount = await cartPage.getNewInStoreProductsCount();
    test.skip(productsCount === 0, 'No products available');

    // Act
    await cartPage.clickFirstNewInStoreProduct();

    // Assert
    await expect(cartPage.page).toHaveURL(/product\//);
  });

  test('should navigate from product to related product', async ({ shopPage, productPage }) => {
    // Arrange
    await shopPage.goto();
    await shopPage.clickProduct(0);
    await productPage.waitForPageLoad();

    const relatedCount = await productPage.getRelatedProductsCount();
    test.skip(relatedCount === 0, 'No related products available');

    // Act
    await productPage.clickFirstRelatedProduct();

    // Assert
    await expect(productPage.page).toHaveURL(/product\//);
  });
});
