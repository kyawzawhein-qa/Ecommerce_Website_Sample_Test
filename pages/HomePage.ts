import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

/**
 * HomePage - Page Object for the Beeyor Shopping home page
 */
export class HomePage extends BasePage {
  // Banner/Promo
  private readonly promoBanner: Locator;
  private readonly shopNowButton: Locator;

  // Header
  private readonly siteLogo: Locator;
  private readonly loginLink: Locator;
  private readonly cartButton: Locator;
  private readonly cartItemCount: Locator;
  private readonly emptyCartMessage: Locator;

  // Navigation
  private readonly navCartLink: Locator;
  private readonly navCheckoutLink: Locator;
  private readonly navMyAccountLink: Locator;
  private readonly navShopLink: Locator;
  private readonly searchBox: Locator;
  private readonly searchButton: Locator;

  // Hero Section
  private readonly heroHeading: Locator;
  private readonly heroDescription: Locator;
  private readonly heroShopNowButton: Locator;

  // Feature Highlights
  private readonly freeDeliverySection: Locator;
  private readonly support247Section: Locator;
  private readonly giftHamperSection: Locator;

  // Product Sections
  private readonly trendingSection: Locator;
  private readonly newArrivalsSection: Locator;
  private readonly seeAllButtons: Locator;
  private readonly productCards: Locator;

  // Promotional Banners
  private readonly promotionalBanners: Locator;

  // Footer
  private readonly footerLogo: Locator;
  private readonly footerDescription: Locator;
  private readonly footerInformationLinks: Locator;
  private readonly footerQuickLinks: Locator;
  private readonly footerContactInfo: Locator;
  private readonly footerSocialLinks: Locator;

  constructor(page: Page) {
    super(page);

    // Banner
    this.promoBanner = page.locator('.promo-banner, .top-bar').or(
      page.getByText(/Black Friday|Save up to/i)
    );
    this.shopNowButton = page.getByRole('button', { name: /shop now/i }).or(
      page.getByText('Shop Now')
    );

    // Header
    this.siteLogo = page.getByRole('link', { name: /staging shopping/i }).first();
    this.loginLink = page.getByRole('link', { name: 'Login' });
    this.cartButton = page.getByRole('button', { name: /cart/i }).or(
      page.locator('.cart-button, .site-header-cart')
    );
    this.cartItemCount = page.locator('.cart-count, .count');
    this.emptyCartMessage = page.getByText(/your cart is currently empty/i);

    // Navigation
    this.navCartLink = page.getByRole('link', { name: 'Cart', exact: true });
    this.navCheckoutLink = page.getByRole('link', { name: 'Checkout', exact: true });
    this.navMyAccountLink = page.getByRole('link', { name: 'My Account', exact: true });
    this.navShopLink = page.getByRole('link', { name: 'Shop', exact: true });
    this.searchBox = page.getByRole('searchbox', { name: /search/i }).or(
      page.locator('input[name="s"], input.search-field')
    );
    this.searchButton = page.getByRole('button', { name: 'Search' }).or(
      page.locator('button[type="submit"].search-submit')
    );

    // Hero Section
    this.heroHeading = page.getByRole('heading', { name: /what to wear|coldplay/i });
    this.heroDescription = page.locator('.hero-description, .banner-text').or(
      page.getByText(/fashion loungewear/i)
    );
    this.heroShopNowButton = page.locator('.hero-section').getByRole('button', { name: /shop now/i }).or(
      page.locator('.hero-section').getByText('Shop Now')
    );

    // Feature Highlights
    this.freeDeliverySection = page.getByRole('heading', { name: /free delivery/i });
    this.support247Section = page.getByRole('heading', { name: /support 24\/7/i });
    this.giftHamperSection = page.getByRole('heading', { name: /gift hamper/i });

    // Product Sections
    this.trendingSection = page.getByRole('heading', { name: /trending now/i });
    this.newArrivalsSection = page.getByRole('heading', { name: /new in store|new arrivals/i }).or(
      page.locator('.new-in-store')
    );
    this.seeAllButtons = page.getByRole('button', { name: /see all/i }).or(
      page.getByText('See All')
    );
    this.productCards = page.locator('.product, .product-card, li.product');

    // Promotional Banners
    this.promotionalBanners = page.locator('.promo-banner, .banner-section').or(
      page.getByText(/best deals|valentine/i)
    );

    // Footer
    this.footerLogo = page.locator('footer').getByRole('heading', { name: /staging shopping/i });
    this.footerDescription = page.locator('footer p').first();
    this.footerInformationLinks = page.locator('footer').getByRole('heading', { name: 'Information' }).locator('~ * a');
    this.footerQuickLinks = page.locator('footer').getByRole('heading', { name: 'Quick Links' }).locator('~ * a');
    this.footerContactInfo = page.locator('footer').getByRole('heading', { name: 'Contact Us' }).locator('~ *');
    this.footerSocialLinks = page.locator('footer').locator('.social-links a, .social-icons a');
  }

  /**
   * Navigate to the home page
   */
  async goto(): Promise<void> {
    await this.page.goto('/');
    await this.waitForPageLoad();
  }

  /**
   * Verify home page is loaded
   */
  async isHomePageLoaded(): Promise<boolean> {
    return this.isVisible(this.siteLogo);
  }

  /**
   * Click on site logo
   */
  async clickLogo(): Promise<void> {
    await this.safeClick(this.siteLogo);
  }

  /**
   * Click login link
   */
  async clickLogin(): Promise<void> {
    await this.safeClick(this.loginLink);
  }

  /**
   * Click cart button
   */
  async clickCart(): Promise<void> {
    await this.safeClick(this.cartButton);
  }

  /**
   * Get cart item count
   */
  async getCartItemCount(): Promise<string> {
    return this.getText(this.cartItemCount);
  }

  /**
   * Search for a product
   * @param searchTerm - The search term
   */
  async searchForProduct(searchTerm: string): Promise<void> {
    await this.safeFill(this.searchBox, searchTerm);
    await this.safeClick(this.searchButton);
  }

  /**
   * Click Shop Now button in promo banner
   */
  async clickPromoShopNow(): Promise<void> {
    await this.safeClick(this.shopNowButton);
  }

  /**
   * Click navigation cart link
   */
  async clickNavCart(): Promise<void> {
    await this.safeClick(this.navCartLink);
  }

  /**
   * Click navigation checkout link
   */
  async clickNavCheckout(): Promise<void> {
    await this.safeClick(this.navCheckoutLink);
  }

  /**
   * Click navigation My Account link
   */
  async clickNavMyAccount(): Promise<void> {
    await this.safeClick(this.navMyAccountLink);
  }

  /**
   * Click navigation Shop link
   */
  async clickNavShop(): Promise<void> {
    await this.safeClick(this.navShopLink);
  }

  /**
   * Get all product cards on the page
   */
  async getProductCards(): Promise<Locator> {
    return this.productCards;
  }

  /**
   * Get product count on home page
   */
  async getProductCount(): Promise<number> {
    return this.productCards.count();
  }

  /**
   * Click first product card
   */
  async clickFirstProduct(): Promise<void> {
    await this.safeClick(this.productCards.first());
  }

  /**
   * Click See All button
   */
  async clickSeeAll(): Promise<void> {
    await this.safeClick(this.seeAllButtons.first());
  }

  /**
   * Verify feature sections are visible
   */
  async verifyFeatureSections(): Promise<boolean> {
    const freeDelivery = await this.isVisible(this.freeDeliverySection);
    const support = await this.isVisible(this.support247Section);
    const giftHamper = await this.isVisible(this.giftHamperSection);
    return freeDelivery && support && giftHamper;
  }

  /**
   * Verify promotional banners are visible
   */
  async verifyPromotionalBanners(): Promise<boolean> {
    return this.isVisible(this.promotionalBanners);
  }

  /**
   * Get footer text content
   */
  async getFooterText(): Promise<string> {
    return this.getText(this.footerDescription);
  }
}
