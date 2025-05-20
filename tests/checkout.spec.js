import { test, expect } from '@playwright/test';
import { Cart } from '../page-objects/Cart.js';
import { Checkout } from '../page-objects/Checkout.js';


test.only('Should add to cart and remove products from cart', async ({ browser }) => {
    const context = await browser.newContext({
        storageState: 'state.json'
    });

    const page = await context.newPage();
    await page.goto('https://www.saucedemo.com/inventory.html');

    const cart = new Cart(page);
    const checkout = new Checkout(page);

    await cart.addItemToCart();
    await cart.goToCart();
    const cartItemCount = await cart.getCartItemCount();
    expect(cartItemCount).toBe(3);

    await checkout.checkout();
    const checkoutItemCount = await cart.getCartItemCount();
    expect(checkoutItemCount).toBe(3);

    await cart.goToCart();
    await cart.removeItemFromCart();
    const updatedCartItemCount = await cart.getCartItemCount();
    expect(updatedCartItemCount).toBe(2);

    await checkout.checkout();
    await checkout.finish();
    const successMsg = checkout.successMsg
    expect(await successMsg).toBeVisible()
    expect(await successMsg.textContent()).toBe('Thank you for your order!'); 

    await context.close();                                                                                 
});