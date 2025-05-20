export class LoginPage {
    constructor(page) {
        this.page = page;
        this.usernameInput = page.getByPlaceholder('Username');
        this.passwordInput = page.getByPlaceholder('Password');
        this.loginBtn = page.getByRole('button', { name: 'Login' });
        this.products = page.locator('[data-test="inventory-list"]');
        this.hamburgerMenu = page.locator('.bm-burger-button');
        this.errorMsg = page.locator('[data-test="error"]');
        this.logoutBtn = page.getByRole('link', { name: 'Logout' });
        this.home = page.locator('.login_wrapper-inner');
    }

    async loginSteps(username, password) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginBtn.click();
    }

    async logoutStep() {
        await this.hamburgerMenu.click();
        await this.logoutBtn.click()
    }
}