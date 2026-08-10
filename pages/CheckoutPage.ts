import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

/**
 * CheckoutPage - Page Object for the checkout page
 */
export class CheckoutPage extends BasePage {
  private readonly checkoutHeading: Locator;
  private readonly billingFirstName: Locator;
  private readonly billingLastName: Locator;
  private readonly billingCompany: Locator;
  private readonly billingCountry: Locator;
  private readonly billingAddress1: Locator;
  private readonly billingAddress2: Locator;
  private readonly billingCity: Locator;
  private readonly billingState: Locator;
  private readonly billingPostcode: Locator;
  private readonly billingPhone: Locator;
  private readonly billingEmail: Locator;
  private readonly orderNotes: Locator;
  private readonly shippingFirstName: Locator;
  private readonly shippingLastName: Locator;
  private readonly shippingCompany: Locator;
  private readonly shippingCountry: Locator;
  private readonly shippingAddress1: Locator;
  private readonly shippingAddress2: Locator;
  private readonly shippingCity: Locator;
  private readonly shippingState: Locator;
  private readonly shippingPostcode: Locator;
  private readonly orderReviewTable: Locator;
  private readonly orderProductNames: Locator;
  private readonly orderProductPrices: Locator;
  private readonly orderSubtotal: Locator;
  private readonly orderShipping: Locator;
  private readonly orderTotal: Locator;
  private readonly paymentMethods: Locator;
  private readonly placeOrderButton: Locator;
  private readonly termsCheckbox: Locator;
  private readonly createAccountCheckbox: Locator;
  private readonly shipToDifferentAddressCheckbox: Locator;
  private readonly emptyCartMessage: Locator;
  private readonly returnToCartLink: Locator;

  constructor(page: Page) {
    super(page);

    this.checkoutHeading = page.getByRole('heading', { name: 'Checkout', level: 1 });
    this.billingFirstName = page.locator('#billing_first_name, input[name="billing_first_name"]');
    this.billingLastName = page.locator('#billing_last_name, input[name="billing_last_name"]');
    this.billingCompany = page.locator('#billing_company, input[name="billing_company"]');
    this.billingCountry = page.locator('#billing_country, select[name="billing_country"]');
    this.billingAddress1 = page.locator('#billing_address_1, input[name="billing_address_1"]');
    this.billingAddress2 = page.locator('#billing_address_2, input[name="billing_address_2"]');
    this.billingCity = page.locator('#billing_city, input[name="billing_city"]');
    this.billingState = page.locator('#billing_state, select[name="billing_state"]');
    this.billingPostcode = page.locator('#billing_postcode, input[name="billing_postcode"]');
    this.billingPhone = page.locator('#billing_phone, input[name="billing_phone"]');
    this.billingEmail = page.locator('#billing_email, input[name="billing_email"]');
    this.orderNotes = page.locator('#order_comments, textarea[name="order_comments"]');
    this.shippingFirstName = page.locator('#shipping_first_name, input[name="shipping_first_name"]');
    this.shippingLastName = page.locator('#shipping_last_name, input[name="shipping_last_name"]');
    this.shippingCompany = page.locator('#shipping_company, input[name="shipping_company"]');
    this.shippingCountry = page.locator('#shipping_country, select[name="shipping_country"]');
    this.shippingAddress1 = page.locator('#shipping_address_1, input[name="shipping_address_1"]');
    this.shippingAddress2 = page.locator('#shipping_address_2, input[name="shipping_address_2"]');
    this.shippingCity = page.locator('#shipping_city, input[name="shipping_city"]');
    this.shippingState = page.locator('#shipping_state, select[name="shipping_state"]');
    this.shippingPostcode = page.locator('#shipping_postcode, input[name="shipping_postcode"]');
    this.orderReviewTable = page.locator('#order_review, .order-review, .woocommerce-checkout-review-order-table');
    this.orderProductNames = page.locator('.order-review .product-name, .woocommerce-checkout-review-order-table .product-name');
    this.orderProductPrices = page.locator('.order-review .product-total, .woocommerce-checkout-review-order-table .product-total');
    this.orderSubtotal = page.locator('.cart-subtotal td, .order-review .cart-subtotal');
    this.orderShipping = page.locator('.shipping td, .order-review .shipping');
    this.orderTotal = page.locator('.order-total td, .order-review .order-total');
    this.paymentMethods = page.locator('.wc_payment_methods, .payment_methods');
    this.placeOrderButton = page.getByRole('button', { name: /place order/i }).or(
      page.locator('#place_order, button[name="woocommerce_checkout_place_order"]')
    );
    this.termsCheckbox = page.locator('#terms, input#terms');
    this.createAccountCheckbox = page.locator('#createaccount, input#createaccount');
    this.shipToDifferentAddressCheckbox = page.locator('#ship-to-different-address-checkbox, input#ship-to-different-address-checkbox');
    this.emptyCartMessage = page.getByText(/your cart is currently empty/i).or(
      page.getByText(/cart is empty/i)
    );
    this.returnToCartLink = page.getByRole('link', { name: /return to cart/i });
  }

  /**
   * Navigate to the checkout page
   */
  async goto(): Promise<void> {
    await this.page.goto('/checkout/');
    await this.waitForPageLoad();
  }

  /**
   * Verify checkout page is loaded
   */
  async isCheckoutPageLoaded(): Promise<boolean> {
    return this.isVisible(this.checkoutHeading);
  }

  /**
   * Check if cart is empty on checkout
   */
  async isCartEmpty(): Promise<boolean> {
    return this.isVisible(this.emptyCartMessage);
  }

  /**
   * Fill billing information
   * @param data - Billing information object
   */
  async fillBillingInformation(data: {
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
    country?: string;
    address1: string;
    city: string;
    postcode: string;
  }): Promise<void> {
    await this.safeFill(this.billingFirstName, data.firstName);
    await this.safeFill(this.billingLastName, data.lastName);
    await this.safeFill(this.billingEmail, data.email);
    if (data.phone) {
      await this.safeFill(this.billingPhone, data.phone);
    }
    await this.safeFill(this.billingAddress1, data.address1);
    await this.safeFill(this.billingCity, data.city);
    await this.safeFill(this.billingPostcode, data.postcode);
  }

  /**
   * Fill shipping information
   * @param data - Shipping information object
   */
  async fillShippingInformation(data: {
    firstName: string;
    lastName: string;
    address1: string;
    city: string;
    postcode: string;
  }): Promise<void> {
    await this.safeFill(this.shippingFirstName, data.firstName);
    await this.safeFill(this.shippingLastName, data.lastName);
    await this.safeFill(this.shippingAddress1, data.address1);
    await this.safeFill(this.shippingCity, data.city);
    await this.safeFill(this.shippingPostcode, data.postcode);
  }

  /**
   * Enable ship to different address
   */
  async enableShipToDifferentAddress(): Promise<void> {
    await this.page.check('#ship-to-different-address-checkbox');
  }

  /**
   * Add order notes
   * @param notes - Order notes text
   */
  async addOrderNotes(notes: string): Promise<void> {
    await this.safeFill(this.orderNotes, notes);
  }

  /**
   * Get order review product names
   */
  async getOrderProductNames(): Promise<string[]> {
    return this.orderProductNames.allTextContents();
  }

  /**
   * Get order total
   */
  async getOrderTotal(): Promise<string> {
    return this.getText(this.orderTotal);
  }

  /**
   * Get order subtotal
   */
  async getOrderSubtotal(): Promise<string> {
    return this.getText(this.orderSubtotal);
  }

  /**
   * Select payment method
   * @param methodName - Payment method name
   */
  async selectPaymentMethod(methodName: string): Promise<void> {
    await this.page.check(`input[name="payment_method"][value="${methodName}"]`);
  }

  /**
   * Accept terms and conditions
   */
  async acceptTerms(): Promise<void> {
    await this.page.check('#terms');
  }

  /**
   * Place order
   */
  async placeOrder(): Promise<void> {
    await this.safeClick(this.placeOrderButton);
  }

  /**
   * Return to cart
   */
  async returnToCart(): Promise<void> {
    await this.safeClick(this.returnToCartLink);
  }

  /**
   * Enable create account option
   */
  async enableCreateAccount(): Promise<void> {
    await this.page.check('#createaccount');
  }
}
