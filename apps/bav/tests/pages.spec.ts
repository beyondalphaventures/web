import { test, expect } from '@playwright/test';

test.describe('About Page', () => {
  test('should load and display content', async ({ page }) => {
    await page.goto('/about');

    await expect(page.getByText('About Beyond Alpha Ventures')).toBeVisible();
    await expect(page.getByText('Our Story')).toBeVisible();
    await expect(page.getByText('Investment Philosophy')).toBeVisible();
    await expect(page.getByText('Our Values')).toBeVisible();
  });

  test('should display all values', async ({ page }) => {
    await page.goto('/about');

    await expect(page.getByRole('heading', { name: 'Excellence', exact: true })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Integrity', exact: true })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Innovation', exact: true })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Discretion', exact: true })).toBeVisible();
  });
});

test.describe('Team Page', () => {
  test('should load and display team members', async ({ page }) => {
    await page.goto('/team');

    await expect(page.getByText('Leadership Team')).toBeVisible();
    await expect(page.getByText('Robert Altchiller')).toBeVisible();
    await expect(page.getByText('Jacob Frankel')).toBeVisible();
    await expect(page.getByText('Robin Rushing')).toBeVisible();
  });

  test('should display team member roles', async ({ page }) => {
    await page.goto('/team');

    await expect(page.getByText('Managing Partner & Chief Investment Officer')).toBeVisible();
    await expect(page.getByText('Partner & Head of Research')).toBeVisible();
    await expect(page.getByText('Partner & Head of Operations')).toBeVisible();
  });

  test('should display team images', async ({ page }) => {
    await page.goto('/team');

    const images = page.locator('img[alt*="Robert Altchiller"], img[alt*="Jacob Frankel"], img[alt*="Robin Rushing"]');
    await expect(images.first()).toBeVisible();
  });
});

test.describe('Invest Page', () => {
  test('should load and display investment content', async ({ page }) => {
    await page.goto('/invest');

    await expect(page.getByText('Investment Strategy')).toBeVisible();
    await expect(page.getByText('Nine Investment Verticals')).toBeVisible();
    await expect(page.getByText('Track Record of Excellence')).toBeVisible();
  });

  test('should display all nine verticals', async ({ page }) => {
    await page.goto('/invest');

    const verticals = [
      'Artificial Intelligence',
      'Blockchain & Web3',
      'Quantum Computing',
      'Robotics & Automation',
      'Longevity & Biotech',
      'Clean Energy',
      'Space Technology',
      'Cybersecurity',
      'Advanced Materials'
    ];

    for (const vertical of verticals) {
      await expect(page.getByText(vertical)).toBeVisible();
    }
  });

  test('should display investment process', async ({ page }) => {
    await page.goto('/invest');

    await expect(page.getByText('Our Investment Process')).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Research' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Due Diligence' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Portfolio Construction' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Active Management' })).toBeVisible();
  });
});

test.describe('Institutional Page', () => {
  test('should load and display services', async ({ page }) => {
    await page.goto('/institutional');

    await expect(page.getByText('Institutional Solutions').first()).toBeVisible();
    await expect(page.getByText('Our Services')).toBeVisible();
  });

  test('should display all service offerings', async ({ page }) => {
    await page.goto('/institutional');

    await expect(page.getByRole('heading', { name: 'Managed Accounts' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Co-Investment Opportunities' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Advisory Services' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Family Office Solutions' })).toBeVisible();
  });

  test('should display why choose us section', async ({ page }) => {
    await page.goto('/institutional');

    await expect(page.getByText('Why Institutional Clients Choose Us')).toBeVisible();
    await expect(page.getByText('Proven Track Record')).toBeVisible();
    await expect(page.getByText('Institutional Infrastructure')).toBeVisible();
    await expect(page.getByText('Aligned Interests')).toBeVisible();
  });
});

test.describe('Trading App Page', () => {
  test('should load and display features', async ({ page }) => {
    await page.goto('/app');

    await expect(page.getByText('Trading Platform')).toBeVisible();
    await expect(page.getByText('Advanced Analytics')).toBeVisible();
    await expect(page.getByText('Multi-Asset Trading')).toBeVisible();
  });

  test('should display all features', async ({ page }) => {
    await page.goto('/app');

    const features = [
      'Advanced Analytics',
      'Multi-Asset Trading',
      'Portfolio Management',
      'Research Tools',
      'Mobile Trading',
      'Institutional Security'
    ];

    for (const feature of features) {
      await expect(page.getByText(feature)).toBeVisible();
    }
  });

  test('should display platform access info', async ({ page }) => {
    await page.goto('/app');

    await expect(page.getByText('Access Across All Devices')).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Web Platform' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Desktop App' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Mobile Apps' })).toBeVisible();
  });
});
