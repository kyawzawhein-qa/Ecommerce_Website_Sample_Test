import { test, expect } from '../fixtures/page-fixtures';
import * as searchData from '../test-data/search-data.json';

/**
 * Home Page Test Suite
 * Tests for the Beeyor Shopping home page functionality
 */
test.describe('Home Page', () => {
  test.beforeEach(async ({ homePage }) => {
    await homePage.goto();
  });

  test('should load home page with all key sections', async ({ homePage }) => {
    // Arrange & Act - already navigated in beforeEach
    const isLoaded = await homePage.isHomePageLoaded();

    // Assert
    expect(isLoaded).toBe(true);
    await expect(homePage.page).toHaveURL('/');
  });

  test('should display site logo and header elements', async ({ homePage }) => {
    // Arrange & Act
    const logoVisible = await homePage.isVisible(homePage['siteLogo']);
    const loginVisible = await homePage.isVisible(homePage['loginLink']);
    const cartVisible = await homePage.isVisible(homePage['cartButton']);

    // Assert
    expect(logoVisible).toBe(true);
    expect(loginVisible).toBe(true);
    expect(cartVisible).toBe(true);
  });

  test('should display navigation links', async ({ homePage }) => {
    // Arrange & Act
    const cartLinkVisible = await homePage.isVisible(homePage['navCartLink']);
    const checkoutLinkVisible = await homePage.isVisible(homePage['navCheckoutLink']);
    const myAccountLinkVisible = await homePage.isVisible(homePage['navMyAccountLink']);
    const shopLinkVisible = await homePage.isVisible(homePage['navShopLink']);

    // Assert
    expect(cartLinkVisible).toBe(true);
    expect(checkoutLinkVisible).toBe(true);
    expect(myAccountLinkVisible).toBe(true);
    expect(shopLinkVisible).toBe(true);
  });

  test('should display hero section with promotional content', async ({ homePage }) => {
    // Arrange & Act
    const heroVisible = await homePage.isVisible(homePage['heroHeading']);
    const shopNowVisible = await homePage.isVisible(homePage['shopNowButton']);

    // Assert
    expect(heroVisible).toBe(true);
    expect(shopNowVisible).toBe(true);
  });

  test('should display feature highlights section', async ({ homePage }) => {
    // Arrange & Act
    const featuresVisible = await homePage.verifyFeatureSections();

    // Assert
    expect(featuresVisible).toBe(true);
  });

  test('should display product listings on home page', async ({ homePage }) => {
    // Arrange & Act
    const productCount = await homePage.getProductCount();

    // Assert
    expect(productCount).toBeGreaterThan(0);
  });

  test('should display promotional banners', async ({ homePage }) => {
    // Arrange & Act
    const bannersVisible = await homePage.verifyPromotionalBanners();

    // Assert
    expect(bannersVisible).toBe(true);
  });

  test('should display footer with information and links', async ({ homePage }) => {
    // Arrange & Act
    const footerLogoVisible = await homePage.isVisible(homePage['footerLogo']);
    const footerText = await homePage.getFooterText();

    // Assert
    expect(footerLogoVisible).toBe(true);
    expect(footerText.length).toBeGreaterThan(0);
  });

  test('should navigate to login page when login link is clicked', async ({ homePage }) => {
    // Arrange & Act
    await homePage.clickLogin();

    // Assert
    await expect(homePage.page).toHaveURL(/my-account/);
  });

  test('should navigate to cart page when cart link is clicked', async ({ homePage }) => {
    // Arrange & Act
    await homePage.clickNavCart();

    // Assert
    await expect(homePage.page).toHaveURL(/cart/);
  });

  test('should navigate to checkout page when checkout link is clicked', async ({ homePage }) => {
    // Arrange & Act
    await homePage.clickNavCheckout();

    // Assert
    await expect(homePage.page).toHaveURL(/checkout/);
  });

  test('should navigate to shop page when shop link is clicked', async ({ homePage }) => {
    // Arrange & Act
    await homePage.clickNavShop();

    // Assert
    await expect(homePage.page).toHaveURL(/shop/);
  });

  test('should navigate to my account page when my account link is clicked', async ({ homePage }) => {
    // Arrange & Act
    await homePage.clickNavMyAccount();

    // Assert
    await expect(homePage.page).toHaveURL(/my-account/);
  });

  test('should navigate to home page when logo is clicked', async ({ homePage }) => {
    // Arrange
    await homePage.clickNavShop();
    await homePage.waitForPageLoad();

    // Act
    await homePage.clickLogo();

    // Assert
    await expect(homePage.page).toHaveURL('/');
  });
});
