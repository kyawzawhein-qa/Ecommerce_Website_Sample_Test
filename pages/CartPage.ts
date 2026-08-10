import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

/**
 * CartPage - Page Object for the shopping cart page
 */
export class CartPage extends BasePage {
  private readonly cartHeading: Locator;
  private readonly emptyCartMessage: Locator;
  private readonly cartTable: Locator;
  private readonly cartItems: Locator;
  private readonly cartItemNames: Locator;
  private readonly cartItemPrices: Locator;
  private readonly cartItemQuantities: Locator;
  private readonly cartItemRemoveButtons: Locator;
  private readonly cartSubtotal: Locator;
  private readonly cartTotal: Locator;
  private readonly updateCartButton: Locator;
  private readonly proceedToCheckoutButton: Locator;
  private readonly couponInput: Locator;
  private readonly applyCouponButton: Locator;
  private readonly newInStoreSection: Locator;
  private readonly newInStoreProducts: Locator;

  constructor(page: Page) {
    super(page);

    this.cartHeading = page.getByRole('heading', { name: 'Cart', level: 1 });
    this.emptyCartMessage = page.getByText(/your cart is currently empty/i);
    this.cartTable = page.locator('.cart, table.cart, .woocommerce-cart-form');
    this.cartItems = page.locator('.cart_item, tr.cart_item');
    this.cartItemNames = page.locator('.product-name, td.product-name');
    this.cartItemPrices = page.locator('.product-price, td.product-price, .product-subtotal, td.product-subtotal');
    this.cartItemQuantities = page.locator('.product-quantity, td.product-quantity input.qty');
    this.cartItemRemoveButtons = page.locator('.product-remove a.remove, td.product-remove a.remove');
    this.cartSubtotal = page.locator('.cart-subtotal td, .cart-subtotal .amount');
    this.cartTotal = page.locator('.order-total td, .cart_totals .order-total .amount');
    this.updateCartButton = page.getByRole('button', { name: /update cart/i }).or(
      page.locator('button[name="update_cart"], input[name="update_cart"]')
    );
    this.proceedToCheckoutButton = page.getByRole('button', { name: /proceed to checkout/i }).or(
      page.locator('.wc-proceed-to-checkout a.checkout-button')
    );
    this.couponInput = page.locator('input[name="coupon_code"], input#coupon_code');
    this.applyCouponButton = page.getByRole('button', { name: /apply coupon/i }).or(
      page.locator('button[name="apply_coupon"], input[name="apply_coupon"]')
    );
    this.newInStoreSection = page.getByRole('heading', { name: /new in store/i });
    this.newInStoreProducts = page.locator('.new-in-store .product, .cross-sells .product');
  }

  /**
   * Navigate to the cart page
   */
  async goto(): Promise<void> {
    await this.page.goto('/cart/');
    await this.waitForPageLoad();
  }

  /**
   * Verify cart page is loaded
   */
  async isCartPageLoaded(): Promise<boolean> {
    return this.isVisible(this.cartHeading);
  }

  /**
   * Check if cart is empty
   */
  async isCartEmpty(): Promise<boolean> {
    return this.isVisible(this.emptyCartMessage);
  }

  /**
   * Get cart items count
   */
  async getCartItemsCount(): Promise<number> {
    return this.cartItems.count();
  }

  /**
   * Get cart item name by index
   * @param index - Item index (0-based)
   */
  async getCartItemName(index: number = 0): Promise<string> {
    return this.getText(this.cartItemNames.nth(index));
  }

  /**
   * Get cart item price by index
   * @param index - Item index (0-based)
   */
  async getCartItemPrice(index: number = 0): Promise<string> {
    return this.getText(this.cartItemPrices.nth(index));
  }

  /**
   * Get cart item quantity by index
   * @param index - Item index (0-based)
   */
  async getCartItemQuantity(index: number = 0): Promise<string> {
    return this.getText(this.cartItemQuantities.nth(index));
  }

  /**
   * Remove item from cart by index
   * @param index - Item index (0-based)
   */
  async removeCartItem(index: number = 0): Promise<void> {
    await this.safeClick(this.cartItemRemoveButtons.nth(index));
    await this.waitForPageLoad();
  }

  /**
   * Update cart quantity for an item
   * @param index - Item index (0-based)
   * @param quantity - New quantity
   */
  async updateCartItemQuantity(index: number = 0, quantity: number): Promise<void> {
    await this.safeClearAndFill(this.cartItemQuantities.nth(index), quantity.toString());
    await this.safeClick(this.updateCartButton);
    await this.waitForPageLoad();
  }

  /**
   * Get cart subtotal
   */
  async getCartSubtotal(): Promise<string> {
    return this.getText(this.cartSubtotal);
  }

  /**
   * Get cart total
   */
  async getCartTotal(): Promise<string> {
    return this.getText(this.cartTotal);
  }

  /**
   * Proceed to checkout
   */
  async proceedToCheckout(): Promise<void> {
    await this.safeClick(this.proceedToCheckoutButton);
  }

  /**
   * Apply coupon code
   * @param couponCode - Coupon code to apply
   */
  async applyCoupon(couponCode: string): Promise<void> {
    await this.safeFill(this.couponInput, couponCode);
    await this.safeClick(this.applyCouponButton);
    await this.waitForPageLoad();
  }

  /**
   * Get new in store products count
   */
  async getNewInStoreProductsCount(): Promise<number> {
    return this.newInStoreProducts.count();
  }

  /**
   * Click first new in store product
   */
  async clickFirstNewInStoreProduct(): Promise<void> {
    await this.safeClick(this.newInStoreProducts.first());
  }
}
