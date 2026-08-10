import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

/**
 * ProductPage - Page Object for individual product detail page
 */
export class ProductPage extends BasePage {
  private readonly productTitle: Locator;
  private readonly productPrice: Locator;
  private readonly productDescription: Locator;
  private readonly productImage: Locator;
  private readonly productImages: Locator;
  private readonly quantityInput: Locator;
  private readonly quantityIncrease: Locator;
  private readonly quantityDecrease: Locator;
  private readonly addToCartButton: Locator;
  private readonly breadcrumbs: Locator;
  private readonly breadcrumbHome: Locator;
  private readonly breadcrumbCategory: Locator;
  private readonly productMeta: Locator;
  private readonly productCategory: Locator;
  private readonly productTags: Locator;
  private readonly relatedProducts: Locator;
  private readonly relatedProductCards: Locator;
  private readonly productTabs: Locator;
  private readonly productReviews: Locator;

  constructor(page: Page) {
    super(page);

    this.productTitle = page.getByRole('heading', { level: 1 }).or(
      page.locator('.product_title, h1.product_title')
    );
    this.productPrice = page.locator('.price, p.price, .woocommerce-Price-amount').first();
    this.productDescription = page.locator('.woocommerce-product-details__short-description, .summary .woocommerce-product-details__short-description');
    this.productImage = page.locator('.woocommerce-product-gallery__image img, .product-image img').first();
    this.productImages = page.locator('.woocommerce-product-gallery__image img, .product-image img');
    this.quantityInput = page.locator('input.qty, input[name="quantity"]');
    this.quantityIncrease = page.locator('.quantity .plus, button.plus');
    this.quantityDecrease = page.locator('.quantity .minus, button.minus');
    this.addToCartButton = page.getByRole('button', { name: /add to cart/i }).or(
      page.locator('.single_add_to_cart_button, button[type="submit"].single_add_to_cart_button')
    );
    this.breadcrumbs = page.locator('.woocommerce-breadcrumb, nav[aria-label="Breadcrumb"]');
    this.breadcrumbHome = page.locator('.woocommerce-breadcrumb a').first().or(
      page.getByRole('link', { name: 'Home' }).first()
    );
    this.breadcrumbCategory = page.locator('.woocommerce-breadcrumb a').nth(1).or(
      page.locator('.woocommerce-breadcrumb').getByRole('link').nth(1)
    );
    this.productMeta = page.locator('.product_meta, .meta');
    this.productCategory = page.locator('.posted_in a, .product_meta .category a');
    this.productTags = page.locator('.tagged_as a, .product_meta .tag a');
    this.relatedProducts = page.locator('.related.products, .related-products');
    this.relatedProductCards = page.locator('.related.products .product, .related-products .product');
    this.productTabs = page.locator('.woocommerce-tabs .wc-tabs li, .product-tabs li');
    this.productReviews = page.locator('#reviews, .woocommerce-Reviews');
  }

  /**
   * Navigate to a product page by slug
   * @param slug - Product URL slug
   */
  async goto(slug: string): Promise<void> {
    await this.page.goto(`/product/${slug}/`);
    await this.waitForPageLoad();
  }

  /**
   * Verify product page is loaded
   */
  async isProductPageLoaded(): Promise<boolean> {
    return this.isVisible(this.productTitle);
  }

  /**
   * Get product title
   */
  async getProductTitle(): Promise<string> {
    return this.getText(this.productTitle);
  }

  /**
   * Get product price
   */
  async getProductPrice(): Promise<string> {
    return this.getText(this.productPrice);
  }

  /**
   * Get product description
   */
  async getProductDescription(): Promise<string> {
    return this.getText(this.productDescription);
  }

  /**
   * Get quantity value
   */
  async getQuantity(): Promise<string> {
    return this.getText(this.quantityInput);
  }

  /**
   * Set product quantity
   * @param quantity - Desired quantity
   */
  async setQuantity(quantity: number): Promise<void> {
    await this.safeClearAndFill(this.quantityInput, quantity.toString());
  }

  /**
   * Increase quantity
   */
  async increaseQuantity(): Promise<void> {
    await this.safeClick(this.quantityIncrease);
  }

  /**
   * Decrease quantity
   */
  async decreaseQuantity(): Promise<void> {
    await this.safeClick(this.quantityDecrease);
  }

  /**
   * Add product to cart
   */
  async addToCart(): Promise<void> {
    await this.safeClick(this.addToCartButton);
  }

  /**
   * Add product to cart with specific quantity
   * @param quantity - Quantity to add
   */
  async addToCartWithQuantity(quantity: number): Promise<void> {
    await this.setQuantity(quantity);
    await this.addToCart();
  }

  /**
   * Get breadcrumb text
   */
  async getBreadcrumbText(): Promise<string> {
    return this.getText(this.breadcrumbs);
  }

  /**
   * Click breadcrumb home link
   */
  async clickBreadcrumbHome(): Promise<void> {
    await this.safeClick(this.breadcrumbHome);
  }

  /**
   * Click breadcrumb category link
   */
  async clickBreadcrumbCategory(): Promise<void> {
    await this.safeClick(this.breadcrumbCategory);
  }

  /**
   * Get product category
   */
  async getProductCategory(): Promise<string> {
    return this.getText(this.productCategory);
  }

  /**
   * Get related products count
   */
  async getRelatedProductsCount(): Promise<number> {
    return this.relatedProductCards.count();
  }

  /**
   * Click first related product
   */
  async clickFirstRelatedProduct(): Promise<void> {
    await this.safeClick(this.relatedProductCards.first());
  }

  /**
   * Check if reviews section exists
   */
  async hasReviews(): Promise<boolean> {
    return this.isVisible(this.productReviews);
  }

  /**
   * Get all product images count
   */
  async getImagesCount(): Promise<number> {
    return this.productImages.count();
  }
}
