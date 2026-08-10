# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.ts >> Login Functionality >> should login successfully with valid credentials
- Location: tests\login.spec.ts:13:7

# Error details

```
TimeoutError: locator.waitFor: Timeout 10000ms exceeded.
Call log:
  - waiting for getByRole('textbox', { name: /email|e-mail/i }).or(getByLabel(/email|e-mail/i)) to be visible

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - banner [ref=e3]:
      - generic [ref=e5]:
        - paragraph [ref=e6]:
          - text: Black Friday.
          - mark [ref=e7]: Save up to 50%
          - text: "Deal Ends: + 4 day."
        - generic [ref=e10] [cursor=pointer]: Shop Now
      - generic [ref=e12]:
        - heading "Staging shopping" [level=1] [ref=e15]:
          - link "Staging shopping" [ref=e16] [cursor=pointer]:
            - /url: http://staging.shopping.beeyor.com
        - figure [ref=e19]:
          - link [ref=e20] [cursor=pointer]:
            - /url: "#"
        - generic [ref=e22]:
          - link "Login" [ref=e24] [cursor=pointer]:
            - /url: http://staging.shopping.beeyor.com/my-account/
            - img
            - generic [ref=e26]: Login
          - figure [ref=e27]:
            - link [ref=e28] [cursor=pointer]:
              - /url: "#"
          - generic [ref=e29]:
            - button "0 items in cart" [ref=e30] [cursor=pointer]:
              - img [ref=e32]
            - generic:
              - generic:
                - generic:
                  - generic:
                    - generic:
                      - generic:
                        - paragraph:
                          - strong: Your cart is currently empty!
      - generic [ref=e39]:
        - navigation [ref=e40]:
          - list [ref=e45]:
            - listitem [ref=e46]:
              - link "Cart" [ref=e47] [cursor=pointer]:
                - /url: http://staging.shopping.beeyor.com/cart/
            - listitem [ref=e48]:
              - link "Checkout" [ref=e49] [cursor=pointer]:
                - /url: http://staging.shopping.beeyor.com/checkout/
            - listitem [ref=e50]:
              - link "My Account" [ref=e51] [cursor=pointer]:
                - /url: http://staging.shopping.beeyor.com/my-account/
            - listitem [ref=e52]:
              - link "Shop" [ref=e53] [cursor=pointer]:
                - /url: http://staging.shopping.beeyor.com/
              - button "Shop submenu" [ref=e54] [cursor=pointer]:
                - img [ref=e55]
        - search [ref=e58]:
          - generic [ref=e59]: Search
          - generic [ref=e60]:
            - searchbox "Search" [ref=e61]
            - button "Search" [ref=e62] [cursor=pointer]:
              - img [ref=e63]
    - generic [ref=e67]:
      - heading "404" [level=2] [ref=e70]:
        - text: "4"
        - mark [ref=e71]: "0"
        - text: "4"
      - generic [ref=e72]:
        - paragraph [ref=e73]: This page could not be found. Maybe try a search?
        - search [ref=e74]:
          - generic [ref=e75]: Search
          - generic [ref=e76]:
            - searchbox "Search" [ref=e77]
            - button "Search" [ref=e78] [cursor=pointer]:
              - img [ref=e79]
    - contentinfo [ref=e81]:
      - generic [ref=e83]:
        - generic [ref=e85]:
          - heading "Staging shopping" [level=1] [ref=e87]:
            - link "Staging shopping" [ref=e88] [cursor=pointer]:
              - /url: http://staging.shopping.beeyor.com
          - paragraph [ref=e89]: Lorem ipsum dolor sit amet consecte tur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua tepo the.
          - list [ref=e90]:
            - listitem [ref=e91]:
              - link "Facebook" [ref=e92] [cursor=pointer]:
                - /url: "#"
                - img [ref=e93]
                - generic [ref=e95]: Facebook
            - listitem [ref=e96]:
              - link "Twitter" [ref=e97] [cursor=pointer]:
                - /url: "#"
                - img [ref=e98]
                - generic [ref=e100]: Twitter
            - listitem [ref=e101]:
              - link "LinkedIn" [ref=e102] [cursor=pointer]:
                - /url: "#"
                - img [ref=e103]
                - generic [ref=e105]: LinkedIn
            - listitem [ref=e106]:
              - link "Instagram" [ref=e107] [cursor=pointer]:
                - /url: "#"
                - img [ref=e108]
                - generic [ref=e110]: Instagram
        - generic [ref=e111]:
          - heading "Information" [level=3] [ref=e113]
          - list [ref=e114]:
            - listitem [ref=e115]:
              - link "About Us" [ref=e116] [cursor=pointer]:
                - /url: "#"
            - listitem [ref=e117]:
              - link "Contact Us" [ref=e118] [cursor=pointer]:
                - /url: "#"
            - listitem [ref=e119]:
              - link "Terms & Conditions" [ref=e120] [cursor=pointer]:
                - /url: "#"
            - listitem [ref=e121]:
              - link "Returns & Exchanges" [ref=e122] [cursor=pointer]:
                - /url: "#"
            - listitem [ref=e123]:
              - link "Shipping & Delivery" [ref=e124] [cursor=pointer]:
                - /url: "#"
            - listitem [ref=e125]:
              - link "Privacy Policy" [ref=e126] [cursor=pointer]:
                - /url: "#"
        - generic [ref=e127]:
          - heading "Information" [level=3] [ref=e129]
          - list [ref=e130]:
            - listitem [ref=e131]:
              - link "About Us" [ref=e132] [cursor=pointer]:
                - /url: "#"
            - listitem [ref=e133]:
              - link "Contact Us" [ref=e134] [cursor=pointer]:
                - /url: "#"
            - listitem [ref=e135]:
              - link "Terms & Conditions" [ref=e136] [cursor=pointer]:
                - /url: "#"
            - listitem [ref=e137]:
              - link "Returns & Exchanges" [ref=e138] [cursor=pointer]:
                - /url: "#"
            - listitem [ref=e139]:
              - link "Shipping & Delivery" [ref=e140] [cursor=pointer]:
                - /url: "#"
            - listitem [ref=e141]:
              - link "Privacy Policy" [ref=e142] [cursor=pointer]:
                - /url: "#"
        - generic [ref=e143]:
          - heading "Quick Links" [level=3] [ref=e145]
          - list [ref=e147]:
            - listitem [ref=e148]:
              - link "Store Location" [ref=e149] [cursor=pointer]:
                - /url: "#"
            - listitem [ref=e150]:
              - link "My Account" [ref=e151] [cursor=pointer]:
                - /url: "#"
            - listitem [ref=e152]:
              - link "Accessories" [ref=e153] [cursor=pointer]:
                - /url: "#"
            - listitem [ref=e154]:
              - link "Orders Tracking" [ref=e155] [cursor=pointer]:
                - /url: "#"
            - listitem [ref=e156]:
              - link "FAQs" [ref=e157] [cursor=pointer]:
                - /url: "#"
            - listitem [ref=e158]:
              - link "Contact" [ref=e159] [cursor=pointer]:
                - /url: "#"
        - generic [ref=e160]:
          - heading "Contact Us" [level=3] [ref=e162]
          - generic [ref=e163]:
            - paragraph [ref=e164]: example@mail.com
            - paragraph [ref=e165]: +1 234 567 890
            - paragraph [ref=e166]: 457 Morningview Lane, NY
          - figure [ref=e167]
      - paragraph [ref=e170]:
        - text: Proudly powered by
        - link "Firefly Themes" [ref=e171] [cursor=pointer]:
          - /url: https://fireflythemes.com/
        - text: and
        - link "WordPress" [ref=e172] [cursor=pointer]:
          - /url: https://wordpress.org
  - status [ref=e173]
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
> 31  |     await locator.waitFor({ state: 'visible', timeout });
      |                   ^ TimeoutError: locator.waitFor: Timeout 10000ms exceeded.
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
  54  |     await locator.waitFor({ state: 'visible', timeout });
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
```