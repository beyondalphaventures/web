import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
  test('should load successfully', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Beyond Alpha Ventures/i);
  });

  test('should display hero section', async ({ page }) => {
    await page.goto('/');

    // Check for main heading
    await expect(page.getByRole('heading', { name: /BEYOND ALPHA.*VENTURES/i })).toBeVisible();

    // Check for tagline
    await expect(page.getByText('PRESERVING WEALTH • CULTIVATING LEGACIES')).toBeVisible();

    // Check for award badge
    await expect(page.getByText("2025 'Hedge Fund to Watch of the Year'")).toBeVisible();
  });

  test('should display CTA buttons', async ({ page }) => {
    await page.goto('/');

    await expect(page.getByRole('button', { name: /Schedule a Consultation/i })).toBeVisible();
    await expect(page.getByRole('button', { name: /View Our Track Record/i })).toBeVisible();
  });

  test('should display investment philosophy section', async ({ page }) => {
    await page.goto('/');

    await expect(page.getByText('Our Investment Philosophy')).toBeVisible();
    await expect(page.getByText('Risk-Adjusted Excellence')).toBeVisible();
    await expect(page.getByText('Institutional-Grade Research')).toBeVisible();
    await expect(page.getByText('Long-Term Partnership')).toBeVisible();
  });

  test('should display nine investment verticals', async ({ page }) => {
    await page.goto('/');

    await expect(page.getByText('Nine Investment Verticals')).toBeVisible();
    await expect(page.getByText('Artificial Intelligence')).toBeVisible();
    await expect(page.getByText('Blockchain & Web3')).toBeVisible();
    await expect(page.getByText('Quantum Computing')).toBeVisible();
    await expect(page.getByText('Robotics & Automation')).toBeVisible();
    await expect(page.getByText('Longevity & Biotech')).toBeVisible();
    await expect(page.getByText('Clean Energy')).toBeVisible();
    await expect(page.getByText('Space Technology')).toBeVisible();
    await expect(page.getByText('Cybersecurity')).toBeVisible();
    await expect(page.getByText('Advanced Materials')).toBeVisible();
  });

  test('should display performance metrics', async ({ page }) => {
    await page.goto('/');

    await expect(page.getByText('Track Record of Excellence')).toBeVisible();
    await expect(page.getByText('$2.8B')).toBeVisible();
    await expect(page.getByText('Assets Under Management')).toBeVisible();
    await expect(page.getByText('24.7%')).toBeVisible();
    await expect(page.getByText('0.87')).toBeVisible();
    await expect(page.getByText('150+')).toBeVisible();
  });

  test('should display footer with links', async ({ page }) => {
    await page.goto('/');

    // Check footer sections - scope to footer contentinfo role
    const footer = page.getByRole('contentinfo');
    await expect(footer.getByRole('link', { name: 'About' })).toBeVisible();
    await expect(footer.getByRole('link', { name: 'Team' })).toBeVisible();
    await expect(footer.getByRole('link', { name: 'Invest' })).toBeVisible();
    await expect(footer.getByRole('link', { name: 'Trading App' })).toBeVisible();
    await expect(footer.getByRole('link', { name: 'Institutional' })).toBeVisible();
  });
});
