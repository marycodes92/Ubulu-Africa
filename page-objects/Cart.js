export class Cart {
    constructor(page) {
        this.page = page;
        this.addProductOne = page.getByRole('button', { name: 'Add to cart' }).first();
        this.addProductTwo = page.getByRole('button', { name: 'Add to cart' }).nth(1);
        this.addProductThree = page.getByRole('button', { name: 'Add to cart' }).nth(2);
        this.cartBtn = page.locator('[data-test="shopping-cart-link"]');
        this.cartItems = page.locator('.cart_item');
        this.removeProduct = page.getByRole('button', { name: 'Remove' }).first();
    }

    async addItemToCart() {
        await this.addProductOne.click();
        await this.addProductTwo.click();
        await this.addProductThree.click();
    }

    async goToCart() {
        await this.cartBtn.click();
    }

    async getCartItemCount() {
        return await this.cartItems.count();
    }

    async removeItemFromCart() {
        await this.removeProduct.click();
    }
}