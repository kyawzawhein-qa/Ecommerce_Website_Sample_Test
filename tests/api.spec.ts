import { test, expect } from '../fixtures/page-fixtures';
import { config } from '../config/env';
import products from '../test-data/products-export.json';

test.describe('Store API', { tag: '@api' }, () => {
  test('health endpoint returns ok', { tag: ['@api', '@smoke'] }, async ({ api }) => {
    const response = await api.get(config.apiPath.health);
    expect(response.ok()).toBeTruthy();
    const body = await response.json();
    expect(body).toMatchObject({ status: 'ok' });
  });

  test('products list matches catalog length', { tag: '@api' }, async ({ api }) => {
    const response = await api.get(config.apiPath.products);
    expect(response.ok()).toBeTruthy();
    const body = await response.json();
    expect(body.count).toBe(products.expectedCount);
    expect(body.products.length).toBe(products.expectedCount);
  });

  test('product by id returns shoe fixture', { tag: '@api' }, async ({ api }) => {
    const response = await api.get('/api/products/1');
    expect(response.ok()).toBeTruthy();
    const product = await response.json();
    expect(product.slug).toBe('classic-runner');
    expect(product.name).toMatch(/runner/i);
  });

  test('UI shop grid aligns with API catalog', { tag: ['@api', '@regression'] }, async ({ api, shopPage }) => {
    const response = await api.get(config.apiPath.products);
    const { count } = await response.json();
    await shopPage.goto();
    const uiCount = await shopPage.getProductCount();
    expect(uiCount).toBeGreaterThan(0);
    expect(count).toBeGreaterThanOrEqual(uiCount);
  });
});