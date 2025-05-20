import { test, expect } from '@playwright/test';
import { LoginPage } from '../page-objects/Login';


test('should login with valid details', async ({ page }) => {
    const login = new LoginPage(page);
    await page.goto('/');
    await login.loginSteps('standard_user', 'secret_sauce');
    await expect(login.products).toBeVisible();

    await login.logoutStep();
    await expect(login.home).toBeVisible();
    await expect(login.hamburgerMenu).toBeHidden();
});
