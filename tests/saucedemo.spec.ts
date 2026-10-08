import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';

test('SauceDemo complete checkout', async ({ page }) => {

    // Create Page Objects
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);

    // Open SauceDemo
    await page.goto('/');

    // Login
    await loginPage.login('standard_user', 'secret_sauce');
   
    // Verify products are loaded
    const productCount = await productsPage.getProductCount();
    expect(productCount).toBeGreaterThan(0);

    // Sort products
    await productsPage.sortProducts('lohi');

    // Add first product to cart
    await productsPage.addFirstProductToCart();

    // Open cart
    await productsPage.openCart();

    // Verify cart page
    await expect(page).toHaveURL(/cart/);

    // Checkout
    await page.getByRole('button', { name: 'Checkout' }).click();

    await page.getByPlaceholder('First Name').fill('Tasneem');
    await page.getByPlaceholder('Last Name').fill('QA');
    await page.getByPlaceholder('Zip/Postal Code').fill('11118');

    await page.getByRole('button', { name: 'Continue' }).click();

    // Finish checkout
    await page.getByRole('button', { name: 'Finish' }).click();

    // Verify success message
    await expect(page.locator('.complete-header'))
        .toHaveText('Thank you for your order!');
});