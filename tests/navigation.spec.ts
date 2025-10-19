import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
  test('should display logo', async ({ page }) => {
    await page.goto('/');

    const logo = page.locator('img[alt="BAV logo"]');
    await expect(logo).toBeVisible();
  });

  test('should navigate to About page', async ({ page }) => {
    await page.goto('/');

    await page.getByRole('link', { name: 'About' }).first().click();
    await expect(page).toHaveURL(/\/about\/?/);
    await expect(page.getByText('About Beyond Alpha Ventures')).toBeVisible();
  });

  test('should navigate to Team page', async ({ page }) => {
    await page.goto('/');

    await page.getByRole('link', { name: 'Team' }).first().click();
    await expect(page).toHaveURL(/\/team\/?/);
    await expect(page.getByText('Leadership Team')).toBeVisible();
  });

  test('should navigate to Invest page', async ({ page }) => {
    await page.goto('/');

    await page.getByRole('link', { name: 'Invest' }).first().click();
    await expect(page).toHaveURL(/\/invest\/?/);
    await expect(page.getByText('Investment Strategy')).toBeVisible();
  });

  test('should show products dropdown on desktop', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 720 });
    await page.goto('/');

    // Hover over Products button
    await page.getByRole('button', { name: 'Products' }).hover();

    // Check dropdown appears
    await expect(page.getByRole('link', { name: 'Trading Platform' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Institutional' }).first()).toBeVisible();
  });

  test('should navigate to Trading App from dropdown', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 720 });
    await page.goto('/');

    await page.getByRole('button', { name: 'Products' }).hover();
    await page.getByRole('link', { name: 'Trading Platform' }).click();
    await expect(page).toHaveURL(/\/app\/?/);
  });

  test('should navigate to Institutional from dropdown', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 720 });
    await page.goto('/');

    await page.getByRole('button', { name: 'Products' }).hover();
    await page.getByRole('link', { name: 'Institutional' }).first().click();
    await expect(page).toHaveURL(/\/institutional\/?/);
  });

  test('should show mobile menu on small screens', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');

    // Click hamburger menu
    await page.getByLabel('Toggle menu').click();

    // Check mobile menu is visible - scope to navigation
    const mobileMenu = page.getByRole('navigation');
    await expect(mobileMenu.getByRole('link', { name: 'About' })).toBeVisible();
    await expect(mobileMenu.getByRole('link', { name: 'Team' })).toBeVisible();
  });
});
