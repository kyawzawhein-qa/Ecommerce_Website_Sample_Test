# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: home.spec.ts >> Home Page >> should display navigation links
- Location: tests\home.spec.ts:34:7

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: true
Received: false
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
    - generic [ref=e65]:
      - generic [ref=e67]:
        - generic [ref=e74]:
          - paragraph [ref=e75]: Trending Now
          - heading "What to wear on Coldplay concert?" [level=2] [ref=e76]:
            - text: What to wear
            - text: on Coldplay
            - text: concert?
          - paragraph [ref=e77]:
            - text: Fashion Loungewear Staples Ready
            - text: For Anything
          - generic [ref=e80] [cursor=pointer]: Shop Now
        - generic [ref=e82]:
          - generic [ref=e89]:
            - paragraph [ref=e90]: Dress For Spring
            - heading "Mens Wardrobe" [level=3] [ref=e91]
            - generic [ref=e94] [cursor=pointer]: Shop Now
          - generic [ref=e101]:
            - paragraph [ref=e102]: Hot Products
            - heading "Womens Wardrobe" [level=3] [ref=e103]
            - generic [ref=e106] [cursor=pointer]: Shop Now
      - generic [ref=e109]:
        - generic [ref=e111]:
          - figure [ref=e112]
          - generic [ref=e113]:
            - heading "Free Delivery" [level=3] [ref=e114]
            - paragraph [ref=e115]: From $59.89
        - generic [ref=e117]:
          - figure [ref=e118]
          - generic [ref=e119]:
            - heading "Support 24/7" [level=3] [ref=e120]
            - paragraph [ref=e121]: Online 24 Hours
        - generic [ref=e123]:
          - figure [ref=e124]
          - generic [ref=e125]:
            - heading "Gift Hamper" [level=3] [ref=e126]
            - paragraph [ref=e127]: $999 + Shoping
        - generic [ref=e129]:
          - figure [ref=e130]
          - generic [ref=e131]:
            - heading "Free Return" [level=3] [ref=e132]
            - paragraph [ref=e133]: 365 A Day
        - generic [ref=e135]:
          - figure [ref=e136]
          - generic [ref=e137]:
            - heading "Payment" [level=3] [ref=e138]
            - paragraph [ref=e139]: Secure Payment
      - generic [ref=e140]:
        - generic [ref=e142]:
          - generic [ref=e144]:
            - heading "Trending Products" [level=2] [ref=e145]
            - separator [ref=e146]
          - generic [ref=e151] [cursor=pointer]: See All
        - list [ref=e154]:
          - listitem [ref=e155]:
            - link "API test" [ref=e156] [cursor=pointer]:
              - /url: http://staging.shopping.beeyor.com/product/api-test-33/
              - generic [ref=e158]: API test
            - generic [ref=e162]: 21.99$
            - 'link "Add to cart: “API test”" [ref=e166] [cursor=pointer]':
              - /url: "?add-to-cart=1212"
              - text: Add to cart
          - listitem [ref=e167]:
            - link "Product" [ref=e168] [cursor=pointer]:
              - /url: http://staging.shopping.beeyor.com/product/product-30/
              - generic [ref=e170]: Product
            - link "Read more about “Product”" [ref=e172] [cursor=pointer]:
              - /url: http://staging.shopping.beeyor.com/product/product-30/
              - text: Read more
          - listitem [ref=e173]:
            - link "Test Test" [ref=e174] [cursor=pointer]:
              - /url: http://staging.shopping.beeyor.com/product/api/
              - img "Test" [ref=e176]
              - generic [ref=e177]: Test
            - generic [ref=e181]: 15.00$
            - 'link "Add to cart: “Test”" [ref=e185] [cursor=pointer]':
              - /url: "?add-to-cart=1162"
              - text: Add to cart
          - listitem [ref=e186]:
            - link "QA Team T-Shirt QA Team T-Shirt" [ref=e187] [cursor=pointer]:
              - /url: http://staging.shopping.beeyor.com/product/qa/
              - img "QA Team T-Shirt" [ref=e189]
              - generic [ref=e190]: QA Team T-Shirt
            - generic [ref=e194]: 15.00$
            - 'link "Add to cart: “QA Team T-Shirt”" [ref=e198] [cursor=pointer]':
              - /url: "?add-to-cart=1115"
              - text: Add to cart
          - listitem [ref=e199]:
            - link "JC JC" [ref=e200] [cursor=pointer]:
              - /url: http://staging.shopping.beeyor.com/product/jc-4/
              - img "JC" [ref=e202]
              - generic [ref=e203]: JC
            - generic [ref=e207]: 21.99$
            - 'link "Add to cart: “JC”" [ref=e211] [cursor=pointer]':
              - /url: "?add-to-cart=1103"
              - text: Add to cart
          - listitem [ref=e212]:
            - link "JC JC" [ref=e213] [cursor=pointer]:
              - /url: http://staging.shopping.beeyor.com/product/jc-3/
              - img "JC" [ref=e215]
              - generic [ref=e216]: JC
            - generic [ref=e220]: 21.99$
            - 'link "Add to cart: “JC”" [ref=e224] [cursor=pointer]':
              - /url: "?add-to-cart=1101"
              - text: Add to cart
          - listitem [ref=e225]:
            - link "JC JC" [ref=e226] [cursor=pointer]:
              - /url: http://staging.shopping.beeyor.com/product/jc-2/
              - img "JC" [ref=e228]
              - generic [ref=e229]: JC
            - generic [ref=e233]: 21.99$
            - 'link "Add to cart: “JC”" [ref=e237] [cursor=pointer]':
              - /url: "?add-to-cart=1099"
              - text: Add to cart
          - listitem [ref=e238]:
            - link "JC JC" [ref=e239] [cursor=pointer]:
              - /url: http://staging.shopping.beeyor.com/product/jc/
              - img "JC" [ref=e241]
              - generic [ref=e242]: JC
            - generic [ref=e246]: 21.99$
            - 'link "Add to cart: “JC”" [ref=e250] [cursor=pointer]':
              - /url: "?add-to-cart=1097"
              - text: Add to cart
      - generic [ref=e252]:
        - generic [ref=e258]:
          - paragraph [ref=e259]: BEST DEALS
          - heading "Get 30% Off" [level=2] [ref=e260]
          - heading "On Sandal" [level=2] [ref=e261]
          - generic [ref=e264] [cursor=pointer]: Shop Now
        - generic [ref=e270]:
          - paragraph [ref=e271]: Valentine’s Special
          - heading "Queenly" [level=2] [ref=e272]
          - heading "shoes" [level=2] [ref=e273]
          - generic [ref=e276] [cursor=pointer]: Shop Now
      - generic [ref=e277]:
        - generic [ref=e279]:
          - generic [ref=e281]:
            - heading "New Arrivals" [level=2] [ref=e282]
            - separator [ref=e283]
          - generic [ref=e288] [cursor=pointer]: See All
        - list [ref=e291]:
          - listitem [ref=e292]:
            - link "API test" [ref=e293] [cursor=pointer]:
              - /url: http://staging.shopping.beeyor.com/product/api-test-33/
              - generic [ref=e295]: API test
            - generic [ref=e299]: 21.99$
            - 'link "Add to cart: “API test”" [ref=e303] [cursor=pointer]':
              - /url: "?add-to-cart=1212"
              - text: Add to cart
          - listitem [ref=e304]:
            - link "Product" [ref=e305] [cursor=pointer]:
              - /url: http://staging.shopping.beeyor.com/product/product-30/
              - generic [ref=e307]: Product
            - link "Read more about “Product”" [ref=e309] [cursor=pointer]:
              - /url: http://staging.shopping.beeyor.com/product/product-30/
              - text: Read more
          - listitem [ref=e310]:
            - link "Test Test" [ref=e311] [cursor=pointer]:
              - /url: http://staging.shopping.beeyor.com/product/api/
              - img "Test" [ref=e313]
              - generic [ref=e314]: Test
            - generic [ref=e318]: 15.00$
            - 'link "Add to cart: “Test”" [ref=e322] [cursor=pointer]':
              - /url: "?add-to-cart=1162"
              - text: Add to cart
          - listitem [ref=e323]:
            - link "QA Team T-Shirt QA Team T-Shirt" [ref=e324] [cursor=pointer]:
              - /url: http://staging.shopping.beeyor.com/product/qa/
              - img "QA Team T-Shirt" [ref=e326]
              - generic [ref=e327]: QA Team T-Shirt
            - generic [ref=e331]: 15.00$
            - 'link "Add to cart: “QA Team T-Shirt”" [ref=e335] [cursor=pointer]':
              - /url: "?add-to-cart=1115"
              - text: Add to cart
          - listitem [ref=e336]:
            - link "JC JC" [ref=e337] [cursor=pointer]:
              - /url: http://staging.shopping.beeyor.com/product/jc-4/
              - img "JC" [ref=e339]
              - generic [ref=e340]: JC
            - generic [ref=e344]: 21.99$
            - 'link "Add to cart: “JC”" [ref=e348] [cursor=pointer]':
              - /url: "?add-to-cart=1103"
              - text: Add to cart
          - listitem [ref=e349]:
            - link "JC JC" [ref=e350] [cursor=pointer]:
              - /url: http://staging.shopping.beeyor.com/product/jc-3/
              - img "JC" [ref=e352]
              - generic [ref=e353]: JC
            - generic [ref=e357]: 21.99$
            - 'link "Add to cart: “JC”" [ref=e361] [cursor=pointer]':
              - /url: "?add-to-cart=1101"
              - text: Add to cart
          - listitem [ref=e362]:
            - link "JC JC" [ref=e363] [cursor=pointer]:
              - /url: http://staging.shopping.beeyor.com/product/jc-2/
              - img "JC" [ref=e365]
              - generic [ref=e366]: JC
            - generic [ref=e370]: 21.99$
            - 'link "Add to cart: “JC”" [ref=e374] [cursor=pointer]':
              - /url: "?add-to-cart=1099"
              - text: Add to cart
          - listitem [ref=e375]:
            - link "JC JC" [ref=e376] [cursor=pointer]:
              - /url: http://staging.shopping.beeyor.com/product/jc/
              - img "JC" [ref=e378]
              - generic [ref=e379]: JC
            - generic [ref=e383]: 21.99$
            - 'link "Add to cart: “JC”" [ref=e387] [cursor=pointer]':
              - /url: "?add-to-cart=1097"
              - text: Add to cart
      - generic [ref=e390]:
        - figure [ref=e393]
        - figure [ref=e396]
        - figure [ref=e399]
        - figure [ref=e402]
        - figure [ref=e405]
        - figure [ref=e408]
    - contentinfo [ref=e409]:
      - generic [ref=e411]:
        - generic [ref=e413]:
          - heading "Staging shopping" [level=1] [ref=e415]:
            - link "Staging shopping" [ref=e416] [cursor=pointer]:
              - /url: http://staging.shopping.beeyor.com
          - paragraph [ref=e417]: Lorem ipsum dolor sit amet consecte tur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua tepo the.
          - list [ref=e418]:
            - listitem [ref=e419]:
              - link "Facebook" [ref=e420] [cursor=pointer]:
                - /url: "#"
                - img [ref=e421]
                - generic [ref=e423]: Facebook
            - listitem [ref=e424]:
              - link "Twitter" [ref=e425] [cursor=pointer]:
                - /url: "#"
                - img [ref=e426]
                - generic [ref=e428]: Twitter
            - listitem [ref=e429]:
              - link "LinkedIn" [ref=e430] [cursor=pointer]:
                - /url: "#"
                - img [ref=e431]
                - generic [ref=e433]: LinkedIn
            - listitem [ref=e434]:
              - link "Instagram" [ref=e435] [cursor=pointer]:
                - /url: "#"
                - img [ref=e436]
                - generic [ref=e438]: Instagram
        - generic [ref=e439]:
          - heading "Information" [level=3] [ref=e441]
          - list [ref=e442]:
            - listitem [ref=e443]:
              - link "About Us" [ref=e444] [cursor=pointer]:
                - /url: "#"
            - listitem [ref=e445]:
              - link "Contact Us" [ref=e446] [cursor=pointer]:
                - /url: "#"
            - listitem [ref=e447]:
              - link "Terms & Conditions" [ref=e448] [cursor=pointer]:
                - /url: "#"
            - listitem [ref=e449]:
              - link "Returns & Exchanges" [ref=e450] [cursor=pointer]:
                - /url: "#"
            - listitem [ref=e451]:
              - link "Shipping & Delivery" [ref=e452] [cursor=pointer]:
                - /url: "#"
            - listitem [ref=e453]:
              - link "Privacy Policy" [ref=e454] [cursor=pointer]:
                - /url: "#"
        - generic [ref=e455]:
          - heading "Information" [level=3] [ref=e457]
          - list [ref=e458]:
            - listitem [ref=e459]:
              - link "About Us" [ref=e460] [cursor=pointer]:
                - /url: "#"
            - listitem [ref=e461]:
              - link "Contact Us" [ref=e462] [cursor=pointer]:
                - /url: "#"
            - listitem [ref=e463]:
              - link "Terms & Conditions" [ref=e464] [cursor=pointer]:
                - /url: "#"
            - listitem [ref=e465]:
              - link "Returns & Exchanges" [ref=e466] [cursor=pointer]:
                - /url: "#"
            - listitem [ref=e467]:
              - link "Shipping & Delivery" [ref=e468] [cursor=pointer]:
                - /url: "#"
            - listitem [ref=e469]:
              - link "Privacy Policy" [ref=e470] [cursor=pointer]:
                - /url: "#"
        - generic [ref=e471]:
          - heading "Quick Links" [level=3] [ref=e473]
          - list [ref=e475]:
            - listitem [ref=e476]:
              - link "Store Location" [ref=e477] [cursor=pointer]:
                - /url: "#"
            - listitem [ref=e478]:
              - link "My Account" [ref=e479] [cursor=pointer]:
                - /url: "#"
            - listitem [ref=e480]:
              - link "Accessories" [ref=e481] [cursor=pointer]:
                - /url: "#"
            - listitem [ref=e482]:
              - link "Orders Tracking" [ref=e483] [cursor=pointer]:
                - /url: "#"
            - listitem [ref=e484]:
              - link "FAQs" [ref=e485] [cursor=pointer]:
                - /url: "#"
            - listitem [ref=e486]:
              - link "Contact" [ref=e487] [cursor=pointer]:
                - /url: "#"
        - generic [ref=e488]:
          - heading "Contact Us" [level=3] [ref=e490]
          - generic [ref=e491]:
            - paragraph [ref=e492]: example@mail.com
            - paragraph [ref=e493]: +1 234 567 890
            - paragraph [ref=e494]: 457 Morningview Lane, NY
          - figure [ref=e495]
      - paragraph [ref=e498]:
        - text: Proudly powered by
        - link "Firefly Themes" [ref=e499] [cursor=pointer]:
          - /url: https://fireflythemes.com/
        - text: and
        - link "WordPress" [ref=e500] [cursor=pointer]:
          - /url: https://wordpress.org
  - status [ref=e501]
```

# Test source

```ts
  1   | import { test, expect } from '../fixtures/page-fixtures';
  2   | import * as searchData from '../test-data/search-data.json';
  3   | 
  4   | /**
  5   |  * Home Page Test Suite
  6   |  * Tests for the Beeyor Shopping home page functionality
  7   |  */
  8   | test.describe('Home Page', () => {
  9   |   test.beforeEach(async ({ homePage }) => {
  10  |     await homePage.goto();
  11  |   });
  12  | 
  13  |   test('should load home page with all key sections', async ({ homePage }) => {
  14  |     // Arrange & Act - already navigated in beforeEach
  15  |     const isLoaded = await homePage.isHomePageLoaded();
  16  | 
  17  |     // Assert
  18  |     expect(isLoaded).toBe(true);
  19  |     await expect(homePage.page).toHaveURL('/');
  20  |   });
  21  | 
  22  |   test('should display site logo and header elements', async ({ homePage }) => {
  23  |     // Arrange & Act
  24  |     const logoVisible = await homePage.isVisible(homePage['siteLogo']);
  25  |     const loginVisible = await homePage.isVisible(homePage['loginLink']);
  26  |     const cartVisible = await homePage.isVisible(homePage['cartButton']);
  27  | 
  28  |     // Assert
  29  |     expect(logoVisible).toBe(true);
  30  |     expect(loginVisible).toBe(true);
  31  |     expect(cartVisible).toBe(true);
  32  |   });
  33  | 
  34  |   test('should display navigation links', async ({ homePage }) => {
  35  |     // Arrange & Act
  36  |     const cartLinkVisible = await homePage.isVisible(homePage['navCartLink']);
  37  |     const checkoutLinkVisible = await homePage.isVisible(homePage['navCheckoutLink']);
  38  |     const myAccountLinkVisible = await homePage.isVisible(homePage['navMyAccountLink']);
  39  |     const shopLinkVisible = await homePage.isVisible(homePage['navShopLink']);
  40  | 
  41  |     // Assert
  42  |     expect(cartLinkVisible).toBe(true);
  43  |     expect(checkoutLinkVisible).toBe(true);
> 44  |     expect(myAccountLinkVisible).toBe(true);
      |                                  ^ Error: expect(received).toBe(expected) // Object.is equality
  45  |     expect(shopLinkVisible).toBe(true);
  46  |   });
  47  | 
  48  |   test('should display hero section with promotional content', async ({ homePage }) => {
  49  |     // Arrange & Act
  50  |     const heroVisible = await homePage.isVisible(homePage['heroHeading']);
  51  |     const shopNowVisible = await homePage.isVisible(homePage['shopNowButton']);
  52  | 
  53  |     // Assert
  54  |     expect(heroVisible).toBe(true);
  55  |     expect(shopNowVisible).toBe(true);
  56  |   });
  57  | 
  58  |   test('should display feature highlights section', async ({ homePage }) => {
  59  |     // Arrange & Act
  60  |     const featuresVisible = await homePage.verifyFeatureSections();
  61  | 
  62  |     // Assert
  63  |     expect(featuresVisible).toBe(true);
  64  |   });
  65  | 
  66  |   test('should display product listings on home page', async ({ homePage }) => {
  67  |     // Arrange & Act
  68  |     const productCount = await homePage.getProductCount();
  69  | 
  70  |     // Assert
  71  |     expect(productCount).toBeGreaterThan(0);
  72  |   });
  73  | 
  74  |   test('should display promotional banners', async ({ homePage }) => {
  75  |     // Arrange & Act
  76  |     const bannersVisible = await homePage.verifyPromotionalBanners();
  77  | 
  78  |     // Assert
  79  |     expect(bannersVisible).toBe(true);
  80  |   });
  81  | 
  82  |   test('should display footer with information and links', async ({ homePage }) => {
  83  |     // Arrange & Act
  84  |     const footerLogoVisible = await homePage.isVisible(homePage['footerLogo']);
  85  |     const footerText = await homePage.getFooterText();
  86  | 
  87  |     // Assert
  88  |     expect(footerLogoVisible).toBe(true);
  89  |     expect(footerText.length).toBeGreaterThan(0);
  90  |   });
  91  | 
  92  |   test('should navigate to login page when login link is clicked', async ({ homePage }) => {
  93  |     // Arrange & Act
  94  |     await homePage.clickLogin();
  95  | 
  96  |     // Assert
  97  |     await expect(homePage.page).toHaveURL(/my-account/);
  98  |   });
  99  | 
  100 |   test('should navigate to cart page when cart link is clicked', async ({ homePage }) => {
  101 |     // Arrange & Act
  102 |     await homePage.clickNavCart();
  103 | 
  104 |     // Assert
  105 |     await expect(homePage.page).toHaveURL(/cart/);
  106 |   });
  107 | 
  108 |   test('should navigate to checkout page when checkout link is clicked', async ({ homePage }) => {
  109 |     // Arrange & Act
  110 |     await homePage.clickNavCheckout();
  111 | 
  112 |     // Assert
  113 |     await expect(homePage.page).toHaveURL(/checkout/);
  114 |   });
  115 | 
  116 |   test('should navigate to shop page when shop link is clicked', async ({ homePage }) => {
  117 |     // Arrange & Act
  118 |     await homePage.clickNavShop();
  119 | 
  120 |     // Assert
  121 |     await expect(homePage.page).toHaveURL(/shop/);
  122 |   });
  123 | 
  124 |   test('should navigate to my account page when my account link is clicked', async ({ homePage }) => {
  125 |     // Arrange & Act
  126 |     await homePage.clickNavMyAccount();
  127 | 
  128 |     // Assert
  129 |     await expect(homePage.page).toHaveURL(/my-account/);
  130 |   });
  131 | 
  132 |   test('should navigate to home page when logo is clicked', async ({ homePage }) => {
  133 |     // Arrange
  134 |     await homePage.clickNavShop();
  135 |     await homePage.waitForPageLoad();
  136 | 
  137 |     // Act
  138 |     await homePage.clickLogo();
  139 | 
  140 |     // Assert
  141 |     await expect(homePage.page).toHaveURL('/');
  142 |   });
  143 | });
  144 | 
```