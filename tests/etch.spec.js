import { test, expect } from '@playwright/test';
import path from 'path';

// Helper to point Playwright to your local HTML file on Ubuntu
const url = `file://${path.resolve('../index.html')}`;

test.describe('Odin-Etch Automation Suite', () => {

  test.beforeEach(async ({ page }) => {
    // Intercept audio play to prevent errors in headless browser environments
    await page.route('**/*.mp3', route => route.fulfill({ status: 200, contentType: 'audio/mpeg' }));
    await page.goto(url);
  });

  test('should initialize with a 16x16 grid (256 squares)', async ({ page }) => {
    // Verify the main title banner exists
    await expect(page.locator('text=Odin-Etch')).toBeVisible();

    // Since IDs are randomized, we locate the grid squares by their class name
    const gridSquares = page.locator('.grid-div');
    await expect(gridSquares).toHaveCount(256);
  });

  test('should trigger hover effect and change background color', async ({ page }) => {
    const firstSquare = page.locator('.grid-div').first();

    // Hover over the first square to trigger the 'mouseover' listener
    await firstSquare.hover();

    // Assert that the style attribute now contains a background color
    await expect(firstSquare).toHaveAttribute('style', /background-color/);
  });

  test('should handle grid resizing via button option', async ({ page }) => {
    // Playwright handles browser alerts/dialogs asynchronously 
    // We listen for the alert dismiss event before clicking the button
    page.once('dialog', async dialog => {
      expect(dialog.message()).toContain('Wiping away your artwork');
      await dialog.accept();
    });

    // Click the 32x32 size modifier button
    await page.locator('button:has-text("32 x 32")').click();

    // Verify the grid successfully cleared and resized to exactly 1024 elements
    const gridSquares = page.locator('.grid-div');
    await expect(gridSquares).toHaveCount(1024);
  });

  test('should toggle Rainbow Mode state changes successfully', async ({ page }) => {
    const rainbowButton = page.locator('#rainbow-button');

    // Handle the browser alert popup when turning Rainbow Mode ON
    page.once('dialog', async dialog => {
      expect(dialog.message()).toContain('Rainbow mode activated!');
      await dialog.accept();
    });

    await rainbowButton.click();

    // Hover over a square and verify it changes color in rainbow mode
    const randomSquare = page.locator('.grid-div').nth(50);
    await randomSquare.hover();
    await expect(randomSquare).toHaveAttribute('style', /background-color/);
  });
});
