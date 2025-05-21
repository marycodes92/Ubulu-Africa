import { test, expect } from '@playwright/test';
import { LoginPage } from '../page-objects/Login';

test.describe('@Login Login Tests', () => {
    let login;
    test.beforeEach(async ({ page }) => {
        login = new LoginPage(page);
        await page.goto('/');
    });

    test('should login with valid details', async ({ context }) => {
        await login.loginSteps('standard_user', 'secret_sauce');
        await expect(login.products).toBeVisible();
        await context.storageState({ path: 'state.json' });
    });

    test('should show error with locked out user details', async () => {
        await login.loginSteps('locked_out_user', 'secret_sauce');
        await expect(login.errorMsg).toBeVisible();
        await expect(login.errorMsg).toHaveText('Epic sadface: Sorry, this user has been locked out.');
    });
});
