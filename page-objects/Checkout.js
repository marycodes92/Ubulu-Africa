export class Checkout {
    constructor(page) {
        this.page = page;
        this.removeProduct = page.getByRole('button', { name: 'Remove' }).first();
        this.checkoutBtn = page.locator('#checkout');
        this.firstNameInput = page.getByPlaceholder('First Name');
        this.lastNameInput = page.getByPlaceholder('Last Name');
        this.zipCodeInput = page.getByPlaceholder('Zip/Postal Code'); 
        this.continueBtn = page.getByText('Continue');
        this.finishBtn = page.getByText('Finish');
        this.successMsg = page.locator('.complete-header');
    }

    async removeItemFromCart() {
        await this.removeProduct.click();
    }

    async checkout() {
        await this.checkoutBtn.click();
        await this.firstNameInput.fill('John');
        await this.lastNameInput.fill('Isua');
        await this.zipCodeInput.fill('12345');
        await this.continueBtn.click();
    }

    async finish() {
        await this.finishBtn.click();
    }
}