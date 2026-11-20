/**
 * Deterministic local fixture storefront for Playwright E2E tests.
 * Mimics WooCommerce-style markup expected by the Page Object layer.
 */
const http = require('http');
const fs = require('fs');
const path = require('path');
const { URL } = require('url');

const PORT = parseInt(process.env.FIXTURE_PORT || '3000', 10);
const products = JSON.parse(
  fs.readFileSync(path.join(__dirname, 'data/products.json'), 'utf8')
);

const VALID_USER = {
  email: process.env.TEST_USERNAME || 'testuser@example.com',
  password: process.env.TEST_PASSWORD || 'ValidP@ssw0rd!',
};

/** @type {Map<string, { items: Array<{ id: number; qty: number }> }>} */
const sessions = new Map();

function getSessionId(req, res) {
  const cookie = (req.headers.cookie || '')
    .split(';')
    .map((c) => c.trim())
    .find((c) => c.startsWith('sid='));
  if (cookie) {
    return cookie.split('=')[1];
  }
  const sid = `s_${Math.random().toString(36).slice(2)}`;
  res.setHeader('Set-Cookie', `sid=${sid}; Path=/; HttpOnly; SameSite=Lax`);
  return sid;
}

function getCart(sid) {
  if (!sessions.has(sid)) {
    sessions.set(sid, { items: [] });
  }
  return sessions.get(sid);
}

function formatPrice(amount) {
  return `€${amount.toFixed(2)}`;
}

function sortProducts(list, orderby) {
  const sorted = [...list];
  switch (orderby) {
    case 'popularity':
      sorted.sort((a, b) => b.popularity - a.popularity);
      break;
    case 'rating':
      sorted.sort((a, b) => b.rating - a.rating);
      break;
    case 'date':
      sorted.sort((a, b) => (a.date < b.date ? 1 : -1));
      break;
    case 'price':
      sorted.sort((a, b) => a.price - b.price);
      break;
    case 'price-desc':
      sorted.sort((a, b) => b.price - a.price);
      break;
    default:
      sorted.sort((a, b) => a.id - b.id);
  }
  return sorted;
}

function layout(title, body, options = {}) {
  const { cartCount = 0 } = options;
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>${title}</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <style>
    body { font-family: system-ui, sans-serif; margin: 0; color: #222; }
    .top-bar { background: #111; color: #fff; padding: 0.5rem 1rem; text-align: center; }
    header.site-header { display: flex; flex-wrap: wrap; gap: 1rem; align-items: center; padding: 1rem; border-bottom: 1px solid #ddd; }
  </style>
</head>
<body>
  <div class="promo-banner top-bar">Black Friday — Save up to 40% on selected styles</div>
  <header class="site-header">
    <a href="/" aria-label="Staging Shopping home">Staging Shopping</a>
    <nav aria-label="Primary">
      <a href="/cart/">Cart</a>
      <a href="/checkout/">Checkout</a>
      <a href="/my-account/">My Account</a>
      <a href="/shop/">Shop</a>
    </nav>
    <a href="/my-account/">Login</a>
    <button type="button" class="cart-button site-header-cart" aria-label="Cart">Cart (${cartCount})</button>
    <form role="search" action="/" method="get">
      <input class="search-field" type="search" name="s" aria-label="Search products" />
      <button type="submit" class="search-submit">Search</button>
    </form>
  </header>
  <main id="main-content">${body}</main>
  <footer style="margin-top:2rem;padding:1.5rem;background:#f6f6f6">
    <h2>Staging Shopping</h2>
    <p>Sample storefront fixture for automated end-to-end tests. Not a production store.</p>
    <h3>Information</h3>
    <a href="/shop/">Browse catalog</a>
    <h3>Quick Links</h3>
    <a href="/cart/">View cart</a>
    <h3>Contact Us</h3>
    <p>support@example.test</p>
  </footer>
</body>
</html>`;
}

function productCard(product, options = {}) {
  const button = options.showAddToCart
    ? `<a class="add_to_cart_button button" href="/cart/?add=${product.id}">Add to cart</a>`
  : `<a href="/product/${product.slug}/"><h2 class="woocommerce-loop-product__title">${product.name}</h2></a>
       <span class="price"><span class="woocommerce-Price-amount">${formatPrice(product.price)}</span></span>
       <a class="add_to_cart_button button" href="/cart/?add=${product.id}">Add to cart</a>`;
  return `<li class="product product-card"><article>${button}</article></li>`;
}

function renderHome(cartCount) {
  const cards = products.slice(0, 6).map((p) => productCard(p)).join('');
  return layout(
    'Home — Staging Shopping',
    `
    <section class="hero-section">
      <h1>What to wear this season</h1>
      <p class="hero-description">Fashion loungewear and coldplay-inspired looks for every day.</p>
      <button type="button">Shop Now</button>
    </section>
    <section>
      <h2>Free Delivery</h2>
      <h2>Support 24/7</h2>
      <h2>Gift Hamper</h2>
    </section>
    <section>
      <h2>Trending Now</h2>
      <ul class="products">${cards}</ul>
      <a href="/shop/" role="button">See All</a>
    </section>
    <section class="new-in-store">
      <h2>New in Store</h2>
    </section>
    <div class="banner-section promo-banner"><p>Best deals — Valentine picks inside</p></div>
    `,
    { cartCount }
  );
}

function renderShop(query, cartCount) {
  const orderby = query.orderby || 'menu_order';
  const page = Math.max(1, parseInt(query.page || '1', 10));
  const perPage = 8;
  const sorted = sortProducts(products, orderby);
  const total = sorted.length;
  const start = (page - 1) * perPage;
  const pageItems = sorted.slice(start, start + perPage);
  const end = Math.min(start + perPage, total);
  const cards = pageItems
    .map(
      (p) => `<li class="product"><a href="/product/${p.slug}/"><h2 class="woocommerce-loop-product__title">${p.name}</h2></a>
      <span class="price"><span class="woocommerce-Price-amount">${formatPrice(p.price)}</span></span>
      <a class="add_to_cart_button button" href="/cart/?add=${p.id}">Add to cart</a></li>`
    )
    .join('');
  const sortOptions = [
    'Default sorting',
    'Sort by popularity',
    'Sort by average rating',
    'Sort by latest',
    'Sort by price: low to high',
    'Sort by price: high to low',
  ]
    .map(
      (label) =>
        `<option value="${label}">${label}</option>`
    )
    .join('');
  const prev = page > 1 ? `<span class="prev"><a href="/shop/?page=${page - 1}&orderby=${orderby}">Previous</a></span>` : '';
  const next =
    start + perPage < total
      ? `<span class="next"><a href="/shop/?page=${page + 1}&orderby=${orderby}">Next</a></span>`
      : '';
  const orderSelect = `
    <label for="orderby">Shop order</label>
    <select id="orderby" name="orderby" aria-label="Shop order"
      onchange="location.href='/shop/?orderby=' + encodeURIComponent(this.value.replace('Sort by ','').replace('Default sorting','menu_order').replace('popularity','popularity').replace('average rating','rating').replace('latest','date').replace('price: low to high','price').replace('price: high to low','price-desc'))">
      ${sortOptions}
    </select>`;
  // Simpler: use links for sort in tests — combobox with options is enough; tests use selectOption by label
  const selectHtml = `<select aria-label="Shop order" id="shop-order" onchange="window.location=this.options[this.selectedIndex].dataset.href">
    <option data-href="/shop/">Default sorting</option>
    <option data-href="/shop/?orderby=popularity">Sort by popularity</option>
    <option data-href="/shop/?orderby=rating">Sort by average rating</option>
    <option data-href="/shop/?orderby=date">Sort by latest</option>
    <option data-href="/shop/?orderby=price">Sort by price: low to high</option>
    <option data-href="/shop/?orderby=price-desc">Sort by price: high to low</option>
  </select>`;

  return layout(
    'Shop',
    `
    <h1>Shop</h1>
    <p>Showing ${start + 1}–${end} of ${total} results</p>
    ${selectHtml}
    <ul class="products product-grid">${cards}</ul>
    <nav class="woocommerce-pagination pagination" aria-label="Product Pagination">${prev}${next}</nav>
    `,
    { cartCount }
  );
}

function renderProduct(slug, cartCount) {
  const product = products.find((p) => p.slug === slug);
  if (!product) {
    return null;
  }
  const related = products.filter((p) => p.id !== product.id).slice(0, 3);
    const relatedHtml = related
    .map(
      (p) => `<li class="product"><a class="woocommerce-loop-product__title" href="/product/${p.slug}/">${p.name}</a></li>`
    )
    .join('');
  return layout(
    product.name,
    `
    <nav class="woocommerce-breadcrumb" aria-label="Breadcrumb">
      <a href="/">Home</a> / <a href="/product-category/${product.category.toLowerCase()}/">${product.category}</a> / ${product.name}
    </nav>
    <h1 class="product_title">${product.name}</h1>
    <p class="price">${formatPrice(product.price)}</p>
    <div class="woocommerce-product-details__short-description">${product.description}</div>
    <div class="woocommerce-product-gallery__image product-image"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="${product.name}" width="400" height="300" /></div>
    <div class="quantity">
      <button type="button" class="minus" onclick="var q=document.getElementById('qty');q.value=Math.max(1,+q.value-1)">-</button>
      <label for="qty" class="screen-reader-text">Quantity</label>
      <input class="qty" id="qty" name="quantity" value="1" aria-label="Quantity" />
      <button type="button" class="plus" onclick="var q=document.getElementById('qty');q.value=+q.value+1">+</button>
    </div>
    <form method="get" action="/cart/">
      <input type="hidden" name="add" value="${product.id}" />
      <input type="hidden" name="qty" id="qty-hidden" value="1" />
      <button type="submit" class="single_add_to_cart_button button">Add to cart</button>
    </form>
    <script>document.querySelector('form[action="/cart/"]').addEventListener('submit',function(){document.getElementById('qty-hidden').value=document.getElementById('qty').value;});</script>
    <div class="product_meta">
      <span class="posted_in">Category: <a href="/shop/">${product.category}</a></span>
    </div>
    <section class="related products">
      <h2>Related products</h2>
      <ul>${relatedHtml}</ul>
    </section>
    <section id="reviews" class="woocommerce-Reviews"><h2>Reviews</h2></section>
    `,
    { cartCount }
  );
}

function cartLines(cart) {
  return cart.items.map((item) => {
    const product = products.find((p) => p.id === item.id);
    if (!product) return '';
    return `<tr class="cart_item">
      <td class="product-remove"><a href="/cart/?remove=${product.id}" class="remove">×</a></td>
      <td class="product-name">${product.name}</td>
      <td class="product-price">${formatPrice(product.price)}</td>
      <td class="product-quantity"><input class="qty" value="${item.qty}" readonly /></td>
      <td class="product-subtotal">${formatPrice(product.price * item.qty)}</td>
    </tr>`;
  });
}

function cartTotal(cart) {
  return cart.items.reduce((sum, item) => {
    const product = products.find((p) => p.id === item.id);
    return sum + (product ? product.price * item.qty : 0);
  }, 0);
}

function renderCart(cart, cartCount, query) {
  if (query.add) {
    const id = parseInt(query.add, 10);
    const qty = parseInt(query.qty || '1', 10);
    const existing = cart.items.find((i) => i.id === id);
    if (existing) existing.qty += qty;
    else cart.items.push({ id, qty });
  }
  if (query.remove) {
    const id = parseInt(query.remove, 10);
    cart.items = cart.items.filter((i) => i.id !== id);
  }
  cartCount = cart.items.reduce((n, i) => n + i.qty, 0);
  const total = cartTotal(cart);
  const newInStore = products.slice(0, 4)
    .map(
      (p) => `<li class="product"><a class="woocommerce-loop-product__title" href="/product/${p.slug}/">${p.name}</a></li>`
    )
    .join('');
  const empty = cart.items.length === 0;
  const body = empty
    ? `<h1>Cart</h1><p>Your cart is currently empty.</p>
       <section class="new-in-store cross-sells"><h2>New in Store</h2><ul class="products">${newInStore}</ul></section>`
    : `<h1>Cart</h1>
       <form class="woocommerce-cart-form">
       <table class="shop_table cart">
         <tbody>${cartLines(cart).join('')}</tbody>
       </table>
       <button type="submit" name="update_cart" formaction="/cart/">Update cart</button>
       </form>
       <section class="cart_totals">
         <table>
           <tr class="cart-subtotal"><th>Subtotal</th><td>${formatPrice(total)}</td></tr>
           <tr class="order-total"><th>Total</th><td><span class="amount">${formatPrice(total)}</span></td></tr>
         </table>
         <div class="wc-proceed-to-checkout"><a class="checkout-button button" href="/checkout/">Proceed to checkout</a></div>
       </div>
       <input name="coupon_code" id="coupon_code" aria-label="Coupon" />
       <button type="button" name="apply_coupon">Apply coupon</button>`;
  return layout('Cart', body, { cartCount });
}

function renderCheckout(cart, cartCount) {
  const total = cartTotal(cart);
  const empty = cart.items.length === 0;
  if (empty) {
    return layout(
      'Checkout',
      `<h1>Checkout</h1><p>Your cart is currently empty.</p>
       <a href="/cart/">Return to cart</a>`,
      { cartCount }
    );
  }
  const rows = cart.items
    .map((item) => {
      const product = products.find((p) => p.id === item.id);
      return `<tr><td class="product-name">${product.name}</td><td class="product-total">${formatPrice(product.price * item.qty)}</td></tr>`;
    })
    .join('');
  return layout(
    'Checkout',
    `
    <h1>Checkout</h1>
    <form class="checkout woocommerce-checkout">
      <div id="customer_details">
        <h2>Billing details</h2>
        <p><input id="billing_first_name" name="billing_first_name" aria-label="First name" /></p>
        <p><input id="billing_last_name" name="billing_last_name" aria-label="Last name" /></p>
        <p><input id="billing_email" name="billing_email" type="email" aria-label="Email" /></p>
        <p><input id="billing_phone" name="billing_phone" aria-label="Phone" /></p>
        <p><input id="billing_address_1" name="billing_address_1" aria-label="Address" /></p>
        <p><input id="billing_city" name="billing_city" aria-label="City" /></p>
        <p><input id="billing_postcode" name="billing_postcode" aria-label="Postcode" /></p>
        <p><label><input type="checkbox" id="ship-to-different-address-checkbox" onchange="document.getElementById('shipping_fields').style.display=this.checked?'block':'none'" /> Ship to a different address</label></p>
        <div id="shipping_fields" style="display:none">
          <input id="shipping_first_name" name="shipping_first_name" aria-label="Shipping first name" />
          <input id="shipping_last_name" name="shipping_last_name" aria-label="Shipping last name" />
          <input id="shipping_address_1" name="shipping_address_1" aria-label="Shipping address" />
          <input id="shipping_city" name="shipping_city" aria-label="Shipping city" />
          <input id="shipping_postcode" name="shipping_postcode" aria-label="Shipping postcode" />
        </div>
        <textarea id="order_comments" name="order_comments" aria-label="Order notes"></textarea>
        <label><input type="checkbox" id="createaccount" /> Create an account</label>
      </div>
      <div id="order_review" class="order-review woocommerce-checkout-review-order-table">
        <table><tbody>${rows}</tbody>
        <tfoot>
          <tr class="cart-subtotal"><td>Subtotal</td><td>${formatPrice(total)}</td></tr>
          <tr class="shipping"><td>Shipping</td><td>€5.00</td></tr>
          <tr class="order-total"><td>Total</td><td>${formatPrice(total + 5)}</td></tr>
        </tfoot></table>
        <ul class="wc_payment_methods payment_methods">
          <li><label><input type="radio" name="payment_method" value="bacs" checked /> Direct bank transfer</label></li>
        </ul>
        <p><label><input type="checkbox" id="terms" /> I agree to the terms</label></p>
        <button type="submit" id="place_order" name="woocommerce_checkout_place_order">Place order</button>
      </div>
    </form>
    `,
    { cartCount }
  );
}

function renderLogin(error = '') {
  return layout(
    'Login',
    `
    <h1>Login</h1>
    ${error ? `<p class="error-message alert-danger" role="alert">${error}</p>` : ''}
    <form method="post" action="/account/login" novalidate>
      <label>Email <input type="email" name="email" aria-label="Email" /></label>
      <label>Password <input type="password" name="password" aria-label="Password" /></label>
      <button type="submit">Log in</button>
    </form>
    <a href="/forgot-password/">Forgot your password?</a>
    <a href="/register/">Create account</a>
    `,
    { cartCount: 0 }
  );
}

function renderSearch(term, cartCount) {
  const matches = products.filter((p) => p.name.toLowerCase().includes((term || '').toLowerCase()));
  const list = matches
    .map((p) => `<li class="product"><a href="/product/${p.slug}/">${p.name}</a></li>`)
    .join('');
  return layout(
    `Search: ${term}`,
    `<h1>Search results for "${term}"</h1><ul class="products">${list || '<li>No products found</li>'}</ul>`,
    { cartCount }
  );
}

function sendJson(res, status, data) {
  res.writeHead(status, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(data));
}

function parseBody(req) {
  return new Promise((resolve) => {
    let data = '';
    req.on('data', (chunk) => {
      data += chunk;
    });
    req.on('end', () => {
      const params = new URLSearchParams(data);
      const obj = {};
      for (const [k, v] of params) obj[k] = v;
      resolve(obj);
    });
  });
}

const server = http.createServer(async (req, res) => {
  const sid = getSessionId(req, res);
  const cart = getCart(sid);
  let cartCount = cart.items.reduce((n, i) => n + i.qty, 0);
  const url = new URL(req.url, `http://127.0.0.1:${PORT}`);
  const pathname = url.pathname.replace(/\/$/, '') || '/';
  const query = Object.fromEntries(url.searchParams);

  if (pathname === '/api/health') {
    sendJson(res, 200, { status: 'ok', service: 'beeyor-fixture-storefront' });
    return;
  }
  if (pathname === '/api/products') {
    sendJson(res, 200, { count: products.length, products });
    return;
  }
  const apiProduct = pathname.match(/^\/api\/products\/(\d+)$/);
  if (apiProduct) {
    const product = products.find((p) => p.id === parseInt(apiProduct[1], 10));
    if (!product) {
      sendJson(res, 404, { error: 'Not found' });
      return;
    }
    sendJson(res, 200, product);
    return;
  }

  if (pathname === '/' && query.s) {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(renderSearch(query.s, cartCount));
    return;
  }
  if (pathname === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(renderHome(cartCount));
    return;
  }
  if (pathname === '/shop') {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(renderShop(query, cartCount));
    return;
  }
  const productMatch = pathname.match(/^\/product\/([^/]+)$/);
  if (productMatch) {
    const html = renderProduct(productMatch[1], cartCount);
    if (!html) {
      res.writeHead(404);
      res.end('Not found');
      return;
    }
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(html);
    return;
  }
  if (pathname === '/cart') {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(renderCart(cart, cartCount, query));
    return;
  }
  if (pathname === '/checkout') {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(renderCheckout(cart, cartCount));
    return;
  }
  if (pathname === '/my-account' || pathname === '/account/login') {
    if (req.method === 'POST' && pathname === '/account/login') {
      const body = await parseBody(req);
      const email = (body.email || '').trim();
      const password = body.password || '';
      if (!email || !password) {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(renderLogin('Email and password are required fields.'));
        return;
      }
      if (!email.includes('@')) {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(renderLogin('Invalid email format.'));
        return;
      }
      if (email === VALID_USER.email && password === VALID_USER.password) {
        res.writeHead(302, { Location: '/my-account/dashboard/', 'Content-Type': 'text/html' });
        res.end();
        return;
      }
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(renderLogin('Incorrect password. Login failed.'));
      return;
    }
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(renderLogin());
    return;
  }
  if (pathname === '/my-account/dashboard') {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(layout('My Account', '<h1>My Account</h1><p>Welcome back.</p>', { cartCount }));
    return;
  }
  if (pathname === '/forgot-password') {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(layout('Forgot Password', '<h1>Reset your password</h1>', { cartCount }));
    return;
  }
  if (pathname === '/register') {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(layout('Register', '<h1>Create your account</h1>', { cartCount }));
    return;
  }
  if (pathname.startsWith('/product-category')) {
    res.writeHead(302, { Location: '/shop/' });
    res.end();
    return;
  }

  res.writeHead(404);
  res.end('Not found');
});

server.listen(PORT, '127.0.0.1', () => {
  // eslint-disable-next-line no-console
  console.log(`Fixture storefront listening on http://127.0.0.1:${PORT}`);
});