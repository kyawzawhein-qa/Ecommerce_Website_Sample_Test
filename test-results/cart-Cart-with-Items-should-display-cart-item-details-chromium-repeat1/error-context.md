# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: cart.spec.ts >> Cart with Items >> should display cart item details
- Location: tests\cart.spec.ts:87:7

# Error details

```
TimeoutError: locator.waitFor: Timeout 10000ms exceeded.
Call log:
  - waiting for locator('.product-name, td.product-name').first() to be visible

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
  1   | import { Page, Locator, expect } from '@playwright/test';
  2   | 
  3   | /**
  4   |  * BasePage - Foundation class for all Page Objects
  5   |  * Provides robust wrapper methods with explicit waits and error handling
  6   |  */
  7   | export class BasePage {
  8   |   readonly page: Page;
  9   | 
  10  |   constructor(page: Page) {
  11  |     this.page = page;
  12  |   }
  13  | 
  14  |   /**
  15  |    * Safely clicks an element with visibility check and retry logic
  16  |    * @param locator - The Playwright Locator to click
  17  |    * @param timeout - Maximum wait time in milliseconds (default: 10000)
  18  |    */
  19  |   async safeClick(locator: Locator, timeout: number = 10000): Promise<void> {
  20  |     await locator.waitFor({ state: 'visible', timeout });
  21  |     await locator.click({ timeout });
  22  |   }
  23  | 
  24  |   /**
  25  |    * Safely fills an input field with visibility check
  26  |    * @param locator - The Playwright Locator for the input field
  27  |    * @param value - The text value to fill
  28  |    * @param timeout - Maximum wait time in milliseconds (default: 10000)
  29  |    */
  30  |   async safeFill(locator: Locator, value: string, timeout: number = 10000): Promise<void> {
  31  |     await locator.waitFor({ state: 'visible', timeout });
  32  |     await locator.fill(value, { timeout });
  33  |   }
  34  | 
  35  |   /**
  36  |    * Safely clears and fills an input field
  37  |    * @param locator - The Playwright Locator for the input field
  38  |    * @param value - The text value to fill
  39  |    * @param timeout - Maximum wait time in milliseconds (default: 10000)
  40  |    */
  41  |   async safeClearAndFill(locator: Locator, value: string, timeout: number = 10000): Promise<void> {
  42  |     await locator.waitFor({ state: 'visible', timeout });
  43  |     await locator.clear({ timeout });
  44  |     await locator.fill(value, { timeout });
  45  |   }
  46  | 
  47  |   /**
  48  |    * Gets the text content of an element with visibility check
  49  |    * @param locator - The Playwright Locator
  50  |    * @param timeout - Maximum wait time in milliseconds (default: 10000)
  51  |    * @returns The text content of the element
  52  |    */
  53  |   async getText(locator: Locator, timeout: number = 10000): Promise<string> {
> 54  |     await locator.waitFor({ state: 'visible', timeout });
      |                   ^ TimeoutError: locator.waitFor: Timeout 10000ms exceeded.
  55  |     const text = await locator.textContent({ timeout });
  56  |     return text?.trim() || '';
  57  |   }
  58  | 
  59  |   /**
  60  |    * Checks if an element is visible
  61  |    * @param locator - The Playwright Locator
  62  |    * @param timeout - Maximum wait time in milliseconds (default: 5000)
  63  |    * @returns Boolean indicating visibility
  64  |    */
  65  |   async isVisible(locator: Locator, timeout: number = 5000): Promise<boolean> {
  66  |     try {
  67  |       await locator.waitFor({ state: 'visible', timeout });
  68  |       return true;
  69  |     } catch {
  70  |       return false;
  71  |     }
  72  |   }
  73  | 
  74  |   /**
  75  |    * Waits for an element to be attached to the DOM
  76  |    * @param locator - The Playwright Locator
  77  |    * @param timeout - Maximum wait time in milliseconds (default: 10000)
  78  |    */
  79  |   async waitForElement(locator: Locator, timeout: number = 10000): Promise<void> {
  80  |     await locator.waitFor({ state: 'attached', timeout });
  81  |   }
  82  | 
  83  |   /**
  84  |    * Waits for an element to be detached from the DOM
  85  |    * @param locator - The Playwright Locator
  86  |    * @param timeout - Maximum wait time in milliseconds (default: 10000)
  87  |    */
  88  |   async waitForElementDetached(locator: Locator, timeout: number = 10000): Promise<void> {
  89  |     await locator.waitFor({ state: 'detached', timeout });
  90  |   }
  91  | 
  92  |   /**
  93  |    * Maps a locator to its expected text/value for assertion validation
  94  |    * @param locator - The Playwright Locator
  95  |    * @param expectedText - The expected text content
  96  |    * @param timeout - Maximum wait time in milliseconds (default: 10000)
  97  |    */
  98  |   async MapsTo(locator: Locator, expectedText: string, timeout: number = 10000): Promise<void> {
  99  |     await locator.waitFor({ state: 'visible', timeout });
  100 |     await expect(locator).toHaveText(expectedText, { timeout });
  101 |   }
  102 | 
  103 |   /**
  104 |    * Asserts that an element contains the expected text (partial match)
  105 |    * @param locator - The Playwright Locator
  106 |    * @param expectedText - The expected text content (partial match)
  107 |    * @param timeout - Maximum wait time in milliseconds (default: 10000)
  108 |    */
  109 |   async containsText(locator: Locator, expectedText: string, timeout: number = 10000): Promise<void> {
  110 |     await locator.waitFor({ state: 'visible', timeout });
  111 |     await expect(locator).toContainText(expectedText, { timeout });
  112 |   }
  113 | 
  114 |   /**
  115 |    * Asserts that an element is visible
  116 |    * @param locator - The Playwright Locator
  117 |    * @param timeout - Maximum wait time in milliseconds (default: 10000)
  118 |    */
  119 |   async assertVisible(locator: Locator, timeout: number = 10000): Promise<void> {
  120 |     await expect(locator).toBeVisible({ timeout });
  121 |   }
  122 | 
  123 |   /**
  124 |    * Asserts that an element is hidden
  125 |    * @param locator - The Playwright Locator
  126 |    * @param timeout - Maximum wait time in milliseconds (default: 10000)
  127 |    */
  128 |   async assertHidden(locator: Locator, timeout: number = 10000): Promise<void> {
  129 |     await expect(locator).toBeHidden({ timeout });
  130 |   }
  131 | 
  132 |   /**
  133 |    * Asserts that the current URL contains the expected path
  134 |    * @param expectedPath - The expected URL path segment
  135 |    * @param timeout - Maximum wait time in milliseconds (default: 10000)
  136 |    */
  137 |   async assertUrlContains(expectedPath: string, timeout: number = 10000): Promise<void> {
  138 |     await expect(this.page).toHaveURL(new RegExp(expectedPath), { timeout });
  139 |   }
  140 | 
  141 |   /**
  142 |    * Waits for the page to be fully loaded
  143 |    * @param timeout - Maximum wait time in milliseconds (default: 30000)
  144 |    */
  145 |   async waitForPageLoad(timeout: number = 30000): Promise<void> {
  146 |     await this.page.waitForLoadState('networkidle', { timeout });
  147 |   }
  148 | 
  149 |   /**
  150 |    * Takes a screenshot with a descriptive name
  151 |    * @param name - Descriptive name for the screenshot
  152 |    */
  153 |   async takeScreenshot(name: string): Promise<void> {
  154 |     await this.page.screenshot({ path: `screenshots/${name}-${Date.now()}.png`, fullPage: true });
```