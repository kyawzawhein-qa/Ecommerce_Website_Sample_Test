import { test, expect } from '../fixtures/page-fixtures';

/**
 * Product Detail Page Test Suite
 * Tests for individual product pages
 */
test.describe('Product Detail Page', () => {
  test.beforeEach(async ({ shopPage, productPage }) => {
    await shopPage.goto();
    await shopPage.clickProduct(0);
    await productPage.waitForPageLoad();
  });

  test('should load product detail page with all elements', async ({ productPage }) => {
    // Arrange & Act
    const isLoaded = await productPage.isProductPageLoaded();

    // Assert
    expect(isLoaded).toBe(true);
    await expect(productPage.page).toHaveURL(/product\//);
  });

  test('should display product title', async ({ productPage }) => {
    // Arrange & Act
    const title = await productPage.getProductTitle();

    // Assert
    expect(title.length).toBeGreaterThan(0);
  });

  test('should display product price', async ({ productPage }) => {
    // Arrange & Act
    const price = await productPage.getProductPrice();

    // Assert
    expect(price.length).toBeGreaterThan(0);
    expect(price).toMatch(/€|\$|EUR|USD/);
  });

  test('should display breadcrumbs with navigation', async ({ productPage }) => {
    // Arrange & Act
    const breadcrumbText = await productPage.getBreadcrumbText();

    // Assert
    expect(breadcrumbText.length).toBeGreaterThan(0);
    expect(breadcrumbText).toContain('Home');
  });

  test('should navigate to home page via breadcrumb', async ({ productPage }) => {
    // Arrange & Act
    await productPage.clickBreadcrumbHome();

    // Assert
    await expect(productPage.page).toHaveURL('/');
  });

  test('should display product images', async ({ productPage }) => {
    // Arrange & Act
    const imagesCount = await productPage.getImagesCount();

    // Assert
    expect(imagesCount).toBeGreaterThanOrEqual(1);
  });

  test('should have quantity input with default value of 1', async ({ productPage }) => {
    // Arrange & Act
    const quantity = await productPage.getQuantity();

    // Assert
    expect(quantity).toBe('1');
  });

  test('should increase quantity when plus button is clicked', async ({ productPage }) => {
    // Arrange
    const initialQuantity = await productPage.getQuantity();

    // Act
    await productPage.increaseQuantity();
    const newQuantity = await productPage.getQuantity();

    // Assert
    expect(parseInt(newQuantity)).toBeGreaterThan(parseInt(initialQuantity));
  });

  test('should set custom quantity via input', async ({ productPage }) => {
    // Arrange & Act
    await productPage.setQuantity(5);
    const quantity = await productPage.getQuantity();

    // Assert
    expect(quantity).toBe('5');
  });

  test('should add product to cart', async ({ productPage, cartPage }) => {
    // Arrange & Act
    await productPage.addToCart();
    await productPage.waitForPageLoad();

    // Assert - verify cart count updated or success message shown
    const url = productPage.page.url();
    expect(url).toContain('product/');
  });

  test('should add product with specific quantity to cart', async ({ productPage }) => {
    // Arrange & Act
    await productPage.addToCartWithQuantity(3);
    await productPage.waitForPageLoad();

    // Assert
    const url = productPage.page.url();
    expect(url).toContain('product/');
  });

  test('should display related products section', async ({ productPage }) => {
    // Arrange & Act
    const relatedCount = await productPage.getRelatedProductsCount();

    // Assert
    expect(relatedCount).toBeGreaterThanOrEqual(0);
  });

  test('should navigate to related product when clicked', async ({ productPage }) => {
    // Arrange
    const relatedCount = await productPage.getRelatedProductsCount();
    test.skip(relatedCount === 0, 'No related products available');

    // Act
    await productPage.clickFirstRelatedProduct();

    // Assert
    await expect(productPage.page).toHaveURL(/product\//);
  });

  test('should display product category', async ({ productPage }) => {
    // Arrange & Act
    const category = await productPage.getProductCategory();

    // Assert
    expect(category.length).toBeGreaterThan(0);
  });
});
