import { test, expect } from '@playwright/test';


test('has title', async ({ page }) => {
  await page.goto('/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/TSender/);
});

test("should dsiplay the input form when wallet connected, otherwise, not", async ({ page }) => {
  // check for "please connect a wallet..."
  await page.goto('/');
  await expect(page.getByText('Please connect a wallet')).toBeVisible();
})