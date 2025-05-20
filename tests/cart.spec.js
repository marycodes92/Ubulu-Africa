import { test, expect } from '@playwright/test';
import { Cart } from '../page-objects/Cart.js';

test.describe('Cart Tests', () => {
    test('Should add to cart and remove products from cart', async ({ browser }) => {
        const context = await browser.newContext({
            storageState: 'state.json'
        });

        const page = await context.newPage();
        await page.goto('https://www.saucedemo.com/inventory.html');

        const cart = new Cart(page);
        await cart.addItemToCart();
        await cart.goToCart();
        const cartItemCount = await cart.getCartItemCount();
        expect(cartItemCount).toBe(3);

        await cart.removeItemFromCart();
        const updatedCartItemCount = await cart.getCartItemCount();
        expect(updatedCartItemCount).toBe(2);
    });
});