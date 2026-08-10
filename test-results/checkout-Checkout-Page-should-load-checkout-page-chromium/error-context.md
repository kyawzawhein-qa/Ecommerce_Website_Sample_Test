# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: checkout.spec.ts >> Checkout Page >> should load checkout page
- Location: tests\checkout.spec.ts:12:7

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: true
Received: false
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - link "Skip to content" [ref=e2] [cursor=pointer]:
    - /url: "#wp--skip-link--target"
  - generic [ref=e3]:
    - banner [ref=e4]:
      - generic [ref=e6]:
        - paragraph [ref=e7]:
          - text: Black Friday.
          - mark [ref=e8]: Save up to 50%
          - text: "Deal Ends: + 4 day."
        - generic [ref=e11] [cursor=pointer]: Shop Now
      - generic [ref=e13]:
        - heading "Staging shopping" [level=1] [ref=e16]:
          - link "Staging shopping" [ref=e17] [cursor=pointer]:
            - /url: http://staging.shopping.beeyor.com
        - figure [ref=e20]:
          - link [ref=e21] [cursor=pointer]:
            - /url: "#"
        - generic [ref=e23]:
          - link "Login" [ref=e25] [cursor=pointer]:
            - /url: http://staging.shopping.beeyor.com/my-account/
            - img
            - generic [ref=e27]: Login
          - figure [ref=e28]:
            - link [ref=e29] [cursor=pointer]:
              - /url: "#"
      - generic [ref=e31]:
        - navigation [ref=e32]:
          - list [ref=e37]:
            - listitem [ref=e38]:
              - link "Cart" [ref=e39] [cursor=pointer]:
                - /url: http://staging.shopping.beeyor.com/cart/
            - listitem [ref=e40]:
              - link "Checkout" [ref=e41] [cursor=pointer]:
                - /url: http://staging.shopping.beeyor.com/checkout/
            - listitem [ref=e42]:
              - link "My Account" [ref=e43] [cursor=pointer]:
                - /url: http://staging.shopping.beeyor.com/my-account/
            - listitem [ref=e44]:
              - link "Shop" [ref=e45] [cursor=pointer]:
                - /url: http://staging.shopping.beeyor.com/
              - button "Shop submenu" [ref=e46] [cursor=pointer]:
                - img [ref=e47]
        - search [ref=e50]:
          - generic [ref=e51]: Search
          - generic [ref=e52]:
            - searchbox "Search" [ref=e53]
            - button "Search" [ref=e54] [cursor=pointer]:
              - img [ref=e55]
    - main [ref=e57]:
      - heading "Cart" [level=1] [ref=e58]
      - generic [ref=e63]:
        - heading "Your cart is currently empty!" [level=2] [ref=e64]
        - separator [ref=e65]: ···
        - heading "New in store" [level=2] [ref=e66]
        - list [ref=e68]:
          - listitem [ref=e69]:
            - link "API test" [ref=e70] [cursor=pointer]:
              - /url: http://staging.shopping.beeyor.com/product/api-test-33/
              - generic [ref=e72]: API test
            - generic [ref=e76]: 21.99$
            - 'link "Add to cart: “API test”" [ref=e80] [cursor=pointer]':
              - /url: "?add-to-cart=1212"
              - text: Add to cart
          - listitem [ref=e81]:
            - link "Product" [ref=e82] [cursor=pointer]:
              - /url: http://staging.shopping.beeyor.com/product/product-30/
              - generic [ref=e84]: Product
            - link "Read more about “Product”" [ref=e86] [cursor=pointer]:
              - /url: http://staging.shopping.beeyor.com/product/product-30/
              - text: Read more
          - listitem [ref=e87]:
            - link "Test Test" [ref=e88] [cursor=pointer]:
              - /url: http://staging.shopping.beeyor.com/product/api/
              - img "Test" [ref=e90]
              - generic [ref=e91]: Test
            - generic [ref=e95]: 15.00$
            - 'link "Add to cart: “Test”" [ref=e99] [cursor=pointer]':
              - /url: "?add-to-cart=1162"
              - text: Add to cart
          - listitem [ref=e100]:
            - link "QA Team T-Shirt QA Team T-Shirt" [ref=e101] [cursor=pointer]:
              - /url: http://staging.shopping.beeyor.com/product/qa/
              - img "QA Team T-Shirt" [ref=e103]
              - generic [ref=e104]: QA Team T-Shirt
            - generic [ref=e108]: 15.00$
            - 'link "Add to cart: “QA Team T-Shirt”" [ref=e112] [cursor=pointer]':
              - /url: "?add-to-cart=1115"
              - text: Add to cart
    - contentinfo [ref=e113]:
      - generic [ref=e115]:
        - generic [ref=e117]:
          - heading "Staging shopping" [level=1] [ref=e119]:
            - link "Staging shopping" [ref=e120] [cursor=pointer]:
              - /url: http://staging.shopping.beeyor.com
          - paragraph [ref=e121]: Lorem ipsum dolor sit amet consecte tur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua tepo the.
          - list [ref=e122]:
            - listitem [ref=e123]:
              - link "Facebook" [ref=e124] [cursor=pointer]:
                - /url: "#"
                - img [ref=e125]
                - generic [ref=e127]: Facebook
            - listitem [ref=e128]:
              - link "Twitter" [ref=e129] [cursor=pointer]:
                - /url: "#"
                - img [ref=e130]
                - generic [ref=e132]: Twitter
            - listitem [ref=e133]:
              - link "LinkedIn" [ref=e134] [cursor=pointer]:
                - /url: "#"
                - img [ref=e135]
                - generic [ref=e137]: LinkedIn
            - listitem [ref=e138]:
              - link "Instagram" [ref=e139] [cursor=pointer]:
                - /url: "#"
                - img [ref=e140]
                - generic [ref=e142]: Instagram
        - generic [ref=e143]:
          - heading "Information" [level=3] [ref=e145]
          - list [ref=e146]:
            - listitem [ref=e147]:
              - link "About Us" [ref=e148] [cursor=pointer]:
                - /url: "#"
            - listitem [ref=e149]:
              - link "Contact Us" [ref=e150] [cursor=pointer]:
                - /url: "#"
            - listitem [ref=e151]:
              - link "Terms & Conditions" [ref=e152] [cursor=pointer]:
                - /url: "#"
            - listitem [ref=e153]:
              - link "Returns & Exchanges" [ref=e154] [cursor=pointer]:
                - /url: "#"
            - listitem [ref=e155]:
              - link "Shipping & Delivery" [ref=e156] [cursor=pointer]:
                - /url: "#"
            - listitem [ref=e157]:
              - link "Privacy Policy" [ref=e158] [cursor=pointer]:
                - /url: "#"
        - generic [ref=e159]:
          - heading "Information" [level=3] [ref=e161]
          - list [ref=e162]:
            - listitem [ref=e163]:
              - link "About Us" [ref=e164] [cursor=pointer]:
                - /url: "#"
            - listitem [ref=e165]:
              - link "Contact Us" [ref=e166] [cursor=pointer]:
                - /url: "#"
            - listitem [ref=e167]:
              - link "Terms & Conditions" [ref=e168] [cursor=pointer]:
                - /url: "#"
            - listitem [ref=e169]:
              - link "Returns & Exchanges" [ref=e170] [cursor=pointer]:
                - /url: "#"
            - listitem [ref=e171]:
              - link "Shipping & Delivery" [ref=e172] [cursor=pointer]:
                - /url: "#"
            - listitem [ref=e173]:
              - link "Privacy Policy" [ref=e174] [cursor=pointer]:
                - /url: "#"
        - generic [ref=e175]:
          - heading "Quick Links" [level=3] [ref=e177]
          - list [ref=e179]:
            - listitem [ref=e180]:
              - link "Store Location" [ref=e181] [cursor=pointer]:
                - /url: "#"
            - listitem [ref=e182]:
              - link "My Account" [ref=e183] [cursor=pointer]:
                - /url: "#"
            - listitem [ref=e184]:
              - link "Accessories" [ref=e185] [cursor=pointer]:
                - /url: "#"
            - listitem [ref=e186]:
              - link "Orders Tracking" [ref=e187] [cursor=pointer]:
                - /url: "#"
            - listitem [ref=e188]:
              - link "FAQs" [ref=e189] [cursor=pointer]:
                - /url: "#"
            - listitem [ref=e190]:
              - link "Contact" [ref=e191] [cursor=pointer]:
                - /url: "#"
        - generic [ref=e192]:
          - heading "Contact Us" [level=3] [ref=e194]
          - generic [ref=e195]:
            - paragraph [ref=e196]: example@mail.com
            - paragraph [ref=e197]: +1 234 567 890
            - paragraph [ref=e198]: 457 Morningview Lane, NY
          - figure [ref=e199]
      - paragraph [ref=e202]:
        - text: Proudly powered by
        - link "Firefly Themes" [ref=e203] [cursor=pointer]:
          - /url: https://fireflythemes.com/
        - text: and
        - link "WordPress" [ref=e204] [cursor=pointer]:
          - /url: https://wordpress.org
  - status [ref=e207]
```

# Test source

```ts
  1   | import { test, expect } from '../fixtures/page-fixtures';
  2   | 
  3   | /**
  4   |  * Checkout Page Test Suite
  5   |  * Tests for the checkout functionality
  6   |  */
  7   | test.describe('Checkout Page', () => {
  8   |   test.beforeEach(async ({ checkoutPage }) => {
  9   |     await checkoutPage.goto();
  10  |   });
  11  | 
  12  |   test('should load checkout page', async ({ checkoutPage }) => {
  13  |     // Arrange & Act
  14  |     const isLoaded = await checkoutPage.isCheckoutPageLoaded();
  15  | 
  16  |     // Assert
> 17  |     expect(isLoaded).toBe(true);
      |                      ^ Error: expect(received).toBe(expected) // Object.is equality
  18  |     await expect(checkoutPage.page).toHaveURL(/checkout/);
  19  |   });
  20  | 
  21  |   test('should display empty cart message when no items', async ({ checkoutPage }) => {
  22  |     // Arrange & Act
  23  |     const isEmpty = await checkoutPage.isCartEmpty();
  24  | 
  25  |     // Assert
  26  |     expect(isEmpty).toBe(true);
  27  |   });
  28  | 
  29  |   test('should display return to cart link when cart is empty', async ({ checkoutPage }) => {
  30  |     // Arrange & Act
  31  |     const returnLinkVisible = await checkoutPage.isVisible(checkoutPage['returnToCartLink']);
  32  | 
  33  |     // Assert
  34  |     expect(returnLinkVisible).toBe(true);
  35  |   });
  36  | 
  37  |   test('should navigate to cart when return to cart is clicked', async ({ checkoutPage }) => {
  38  |     // Arrange & Act
  39  |     await checkoutPage.returnToCart();
  40  | 
  41  |     // Assert
  42  |     await expect(checkoutPage.page).toHaveURL(/cart/);
  43  |   });
  44  | });
  45  | 
  46  | /**
  47  |  * Checkout with Items Test Suite
  48  |  * Tests checkout flow with products in cart
  49  |  */
  50  | test.describe('Checkout with Items', () => {
  51  |   test.beforeEach(async ({ shopPage, checkoutPage }) => {
  52  |     // Add a product to cart and navigate to checkout
  53  |     await shopPage.goto();
  54  |     await shopPage.addProductToCart(0);
  55  |     await shopPage.waitForPageLoad();
  56  |     await checkoutPage.goto();
  57  |   });
  58  | 
  59  |   test('should display order review with products', async ({ checkoutPage }) => {
  60  |     // Arrange & Act
  61  |     const productNames = await checkoutPage.getOrderProductNames();
  62  | 
  63  |     // Assert
  64  |     expect(productNames.length).toBeGreaterThanOrEqual(1);
  65  |   });
  66  | 
  67  |   test('should display order total', async ({ checkoutPage }) => {
  68  |     // Arrange & Act
  69  |     const orderTotal = await checkoutPage.getOrderTotal();
  70  | 
  71  |     // Assert
  72  |     expect(orderTotal.length).toBeGreaterThan(0);
  73  |   });
  74  | 
  75  |   test('should display order subtotal', async ({ checkoutPage }) => {
  76  |     // Arrange & Act
  77  |     const orderSubtotal = await checkoutPage.getOrderSubtotal();
  78  | 
  79  |     // Assert
  80  |     expect(orderSubtotal.length).toBeGreaterThan(0);
  81  |   });
  82  | 
  83  |   test('should fill billing information successfully', async ({ checkoutPage }) => {
  84  |     // Arrange
  85  |     const billingData = {
  86  |       firstName: 'John',
  87  |       lastName: 'Doe',
  88  |       email: 'john.doe@example.com',
  89  |       phone: '+1234567890',
  90  |       address1: '123 Test Street',
  91  |       city: 'Test City',
  92  |       postcode: '12345',
  93  |     };
  94  | 
  95  |     // Act
  96  |     await checkoutPage.fillBillingInformation(billingData);
  97  | 
  98  |     // Assert
  99  |     const firstNameValue = await checkoutPage.page.inputValue('#billing_first_name');
  100 |     const lastNameValue = await checkoutPage.page.inputValue('#billing_last_name');
  101 |     const emailValue = await checkoutPage.page.inputValue('#billing_email');
  102 | 
  103 |     expect(firstNameValue).toBe(billingData.firstName);
  104 |     expect(lastNameValue).toBe(billingData.lastName);
  105 |     expect(emailValue).toBe(billingData.email);
  106 |   });
  107 | 
  108 |   test('should enable ship to different address', async ({ checkoutPage }) => {
  109 |     // Arrange & Act
  110 |     await checkoutPage.enableShipToDifferentAddress();
  111 | 
  112 |     // Assert
  113 |     const shippingFieldsVisible = await checkoutPage.isVisible(checkoutPage['shippingFirstName']);
  114 |     expect(shippingFieldsVisible).toBe(true);
  115 |   });
  116 | 
  117 |   test('should fill shipping information when different address enabled', async ({ checkoutPage }) => {
```