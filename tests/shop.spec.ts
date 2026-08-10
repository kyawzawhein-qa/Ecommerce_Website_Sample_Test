import { test, expect } from '../fixtures/page-fixtures';
import * as shopData from '../test-data/shop-data.json';

/**
 * Shop Page Test Suite
 * Tests for the Beeyor Shopping shop/product listing page
 */
test.describe('Shop Page', () => {
  test.beforeEach(async ({ shopPage }) => {
    await shopPage.goto();
  });

  test('should load shop page with products', async ({ shopPage }) => {
    // Arrange & Act
    const isLoaded = await shopPage.isShopPageLoaded();

    // Assert
    expect(isLoaded).toBe(true);
    await expect(shopPage.page).toHaveURL(/shop/);
  });

  test('should display results count', async ({ shopPage }) => {
    // Arrange & Act
    const resultsText = await shopPage.getResultsCountText();

    // Assert
    expect(resultsText).toMatch(/showing \d+–\d+ of \d+ results/i);
  });

  test('should display product grid with products', async ({ shopPage }) => {
    // Arrange & Act
    const productCount = await shopPage.getProductCount();

    // Assert
    expect(productCount).toBeGreaterThan(0);
  });

  test('should display product titles and prices', async ({ shopPage }) => {
    // Arrange & Act
    const firstProductTitle = await shopPage.getProductTitle(0);
    const firstProductPrice = await shopPage.getProductPrice(0);

    // Assert
    expect(firstProductTitle.length).toBeGreaterThan(0);
    expect(firstProductPrice.length).toBeGreaterThan(0);
  });

  test('should have all sort options available', async ({ shopPage }) => {
    // Arrange & Act
    const sortOptions = await shopPage.getSortOptions();

    // Assert
    expect(sortOptions.length).toBeGreaterThanOrEqual(6);
    for (const option of shopData.sortOptions) {
      expect(sortOptions).toContain(option);
    }
  });

  test('should sort products by popularity', async ({ shopPage }) => {
    // Arrange & Act
    await shopPage.sortProducts('Sort by popularity');

    // Assert
    await expect(shopPage.page).toHaveURL(/orderby=popularity/);
  });

  test('should sort products by latest', async ({ shopPage }) => {
    // Arrange & Act
    await shopPage.sortProducts('Sort by latest');

    // Assert
    await expect(shopPage.page).toHaveURL(/orderby=date/);
  });

  test('should sort products by price low to high', async ({ shopPage }) => {
    // Arrange & Act
    await shopPage.sortProducts('Sort by price: low to high');

    // Assert
    await expect(shopPage.page).toHaveURL(/orderby=price/);
  });

  test('should sort products by price high to low', async ({ shopPage }) => {
    // Arrange & Act
    await shopPage.sortProducts('Sort by price: high to low');

    // Assert
    await expect(shopPage.page).toHaveURL(/orderby=price-desc/);
  });

  test('should sort products by average rating', async ({ shopPage }) => {
    // Arrange & Act
    await shopPage.sortProducts('Sort by average rating');

    // Assert
    await expect(shopPage.page).toHaveURL(/orderby=rating/);
  });

  test('should navigate to product detail page when product is clicked', async ({ shopPage, productPage }) => {
    // Arrange
    const firstProductTitle = await shopPage.getProductTitle(0);

    // Act
    await shopPage.clickProduct(0);

    // Assert
    await expect(shopPage.page).toHaveURL(/product\//);
    const productTitle = await productPage.getProductTitle();
    expect(productTitle.length).toBeGreaterThan(0);
  });

  test('should have pagination if more than one page of products', async ({ shopPage }) => {
    // Arrange & Act
    const hasNextPage = await shopPage.hasNextPage();

    // Assert - pagination may or may not exist depending on product count
    if (hasNextPage) {
      expect(await shopPage.isVisible(shopPage['paginationNext'])).toBe(true);
    }
  });

  test('should navigate to next page if available', async ({ shopPage }) => {
    // Arrange
    const hasNextPage = await shopPage.hasNextPage();
    test.skip(!hasNextPage, 'No next page available');

    // Act
    await shopPage.goToNextPage();

    // Assert
    const hasPreviousPage = await shopPage.hasPreviousPage();
    expect(hasPreviousPage).toBe(true);
  });

  test('should display add to cart buttons for products', async ({ shopPage }) => {
    // Arrange & Act
    const addToCartButtons = await shopPage['addToCartButtons'].count();

    // Assert
    expect(addToCartButtons).toBeGreaterThan(0);
  });
});
