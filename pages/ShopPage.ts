import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

/**
 * ShopPage - Page Object for the Shop/Products listing page
 */
export class ShopPage extends BasePage {
  private readonly shopHeading: Locator;
  private readonly resultsCount: Locator;
  private readonly orderDropdown: Locator;
  private readonly productGrid: Locator;
  private readonly productCards: Locator;
  private readonly paginationLinks: Locator;
  private readonly paginationNext: Locator;
  private readonly paginationPrevious: Locator;
  private readonly addToCartButtons: Locator;
  private readonly productTitles: Locator;
  private readonly productPrices: Locator;

  constructor(page: Page) {
    super(page);

    this.shopHeading = page.getByRole('heading', { name: 'Shop', level: 1 });
    this.resultsCount = page.getByText(/showing \d+–\d+ of \d+ results/i);
    this.orderDropdown = page.getByRole('combobox', { name: /shop order|sort by/i });
    this.productGrid = page.locator('.products, .product-grid, ul.products');
    this.productCards = page.locator('.product, li.product, .product-card');
    this.paginationLinks = page.locator('.pagination a, .woocommerce-pagination a, nav[aria-label="Product Pagination"] a');
    this.paginationNext = page.locator('.pagination .next a, nav[aria-label="Product Pagination"] .next a').or(
      page.getByRole('link', { name: /next|→/i })
    );
    this.paginationPrevious = page.locator('.pagination .prev a, nav[aria-label="Product Pagination"] .prev a').or(
      page.getByRole('link', { name: /previous|←/i })
    );
    this.addToCartButtons = page.locator('.add_to_cart_button, button[type="submit"].add_to_cart_button');
    this.productTitles = page.locator('.woocommerce-loop-product__title, .product-title, h2 a');
    this.productPrices = page.locator('.price, .woocommerce-Price-amount');
  }

  /**
   * Navigate to the shop page
   */
  async goto(): Promise<void> {
    await this.page.goto('/shop/');
    await this.waitForPageLoad();
  }

  /**
   * Verify shop page is loaded
   */
  async isShopPageLoaded(): Promise<boolean> {
    return this.isVisible(this.shopHeading);
  }

  /**
   * Get total results count text
   */
  async getResultsCountText(): Promise<string> {
    return this.getText(this.resultsCount);
  }

  /**
   * Sort products by option
   * @param option - Sort option text
   */
  async sortProducts(option: string): Promise<void> {
    await this.orderDropdown.selectOption({ label: option });
    await this.waitForPageLoad();
  }

  /**
   * Get all sort options
   */
  async getSortOptions(): Promise<string[]> {
    return this.orderDropdown.locator('option').allTextContents();
  }

  /**
   * Get product count on current page
   */
  async getProductCount(): Promise<number> {
    return this.productCards.count();
  }

  /**
   * Get product title by index
   * @param index - Product index (0-based)
   */
  async getProductTitle(index: number = 0): Promise<string> {
    return this.getText(this.productTitles.nth(index));
  }

  /**
   * Get product price by index
   * @param index - Product index (0-based)
   */
  async getProductPrice(index: number = 0): Promise<string> {
    return this.getText(this.productPrices.nth(index));
  }

  /**
   * Click on product by index
   * @param index - Product index (0-based)
   */
  async clickProduct(index: number = 0): Promise<void> {
    await this.safeClick(this.productCards.nth(index));
  }

  /**
   * Click on product by name
   * @param productName - Product title to click
   */
  async clickProductByName(productName: string): Promise<void> {
    await this.safeClick(this.page.getByRole('link', { name: productName }).or(
      this.productTitles.filter({ hasText: productName })
    ));
  }

  /**
   * Add product to cart by index
   * @param index - Product index (0-based)
   */
  async addProductToCart(index: number = 0): Promise<void> {
    await this.safeClick(this.addToCartButtons.nth(index));
  }

  /**
   * Navigate to next page
   */
  async goToNextPage(): Promise<void> {
    await this.safeClick(this.paginationNext);
    await this.waitForPageLoad();
  }

  /**
   * Navigate to previous page
   */
  async goToPreviousPage(): Promise<void> {
    await this.safeClick(this.paginationPrevious);
    await this.waitForPageLoad();
  }

  /**
   * Check if pagination next button is enabled
   */
  async hasNextPage(): Promise<boolean> {
    return this.isVisible(this.paginationNext);
  }

  /**
   * Check if pagination previous button is enabled
   */
  async hasPreviousPage(): Promise<boolean> {
    return this.isVisible(this.paginationPrevious);
  }
}
