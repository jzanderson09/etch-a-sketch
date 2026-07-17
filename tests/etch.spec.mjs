import { test, expect } from '@playwright/test';
import path from 'path';
import { fileURLToPath } from 'url';

// Recreate __dirname for ES Modules on Ubuntu
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Target index.html in the root directory (one folder up from /tests)
const url = `file://${path.resolve(__dirname, '../index.html')}`;

test.describe('Odin-Etch Automation Suite', () => {

  test.beforeEach(async ({ page }) => {
    // Intercept audio play to prevent errors in headless browser environments
    await page.route('**/*.mp3', route => route.fulfill({ status: 200, contentType: 'audio/mpeg' }));
    await page.goto(url);
  });

  test('should initialize with a 16x16 grid (256 squares)', async ({ page }) => {
    await expect(page.locator('text=Odin-Etch')).toBeVisible();
    const gridSquares = page.locator('.grid-div');
    await expect(gridSquares).toHaveCount(256);
  });

  test('should trigger hover effect and change background color', async ({ page }) => {
    const firstSquare = page.locator('.grid-div').first();
    await firstSquare.hover();
    await expect(firstSquare).toHaveAttribute('style', /background-color/);
  });

  test('should handle grid resizing via button option', async ({ page }) => {
    page.once('dialog', async dialog => {
      expect(dialog.message()).toContain('Wiping away your artwork');
      await dialog.accept();
    });

    await page.locator('button:has-text("32 x 32")').click();
    const gridSquares = page.locator('.grid-div');
    await expect(gridSquares).toHaveCount(1024);
  });

  test('should toggle Rainbow Mode state changes successfully', async ({ page }) => {
    const rainbowButton = page.locator('#rainbow-button');

    page.once('dialog', async dialog => {
      expect(dialog.message()).toContain('Rainbow mode activated!');
      await dialog.accept();
    });

    await rainbowButton.click();
    const randomSquare = page.locator('.grid-div').nth(50);
    await randomSquare.hover();
    await expect(randomSquare).toHaveAttribute('style', /background-color/);
  });

  test('should apply dynamic random RGB styling in Rainbow Mode', async ({ page }) => {
    const rainbowButton = page.locator('#rainbow-button');
    
    page.once('dialog', async dialog => {
      await dialog.accept();
    });
    await rainbowButton.click();

    const square = page.locator('.grid-div').first();
    await square.hover();
    const styleAttributeOne = await square.getAttribute('style');
    
    // Move the simulated mouse away and hover again to trigger a color shift
    await page.mouse.move(0, 0); 
    await square.hover();
    const styleAttributeTwo = await square.getAttribute('style');

    expect(styleAttributeOne).not.toEqual(styleAttributeTwo);
  });

  test('should strictly enforce layout constraints across all device viewports', async ({ page }) => {
    const mainContainer = page.locator('#container');
    
    // Test Desktop scaling
    await page.setViewportSize({ width: 1440, height: 900 });
    await expect(mainContainer).toBeVisible();
    
    // Test Mobile scaling
    await page.setViewportSize({ width: 375, height: 812 });
    const boundingBox = await mainContainer.boundingBox();
    
    expect(boundingBox.width).toBeLessThanOrEqual(375);
  });
});