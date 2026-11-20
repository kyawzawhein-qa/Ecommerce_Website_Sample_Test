import AxeBuilder from '@axe-core/playwright';
import { test, expect } from '../fixtures/page-fixtures';

const pages = [
  { name: 'home', path: '/', label: 'Home' },
  { name: 'shop', path: '/shop/', label: 'Shop' },
  { name: 'product', path: '/product/classic-runner/', label: 'Product detail' },
  { name: 'cart', path: '/cart/', label: 'Cart' },
  { name: 'checkout', path: '/checkout/', label: 'Checkout' },
] as const;

test.describe('Accessibility scans', { tag: '@regression' }, () => {
  for (const pageDef of pages) {
    test(`${pageDef.label} page has no serious axe violations`, { tag: '@smoke' }, async ({ page }) => {
      await page.goto(pageDef.path);
      const results = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa'])
        .disableRules(['color-contrast'])
        .analyze();

      const serious = results.violations.filter(
        (v) => v.impact === 'serious' || v.impact === 'critical'
      );
      expect(serious, JSON.stringify(serious, null, 2)).toEqual([]);
    });
  }
});