import { Page, Locator } from '@playwright/test';

export class ProductsPage {
    readonly page: Page;
    readonly productDetailsButtons: Locator;
    readonly sortDropdown: Locator;
    readonly addToCartButton: Locator;
    readonly cartLink: Locator;

    constructor(page: Page) {
        this.page = page;

        this.productDetailsButtons = page.getByRole('button', {
            name: 'Add to cart'
        });

        this.sortDropdown = page.getByRole('combobox', {
            name: 'Sort products'
        });

        this.addToCartButton = page.getByRole('button', {
            name: 'Add to cart'
        });

        this.cartLink = page.getByRole('button', {
            name: /Cart/
        });
    }

    async getProductCount(): Promise<number> {
        await this.productDetailsButtons.first().waitFor();
        return await this.productDetailsButtons.count();
    }

    async sortProducts(option: string) {
        await this.sortDropdown.selectOption(option);
    }

    async addFirstProductToCart() {
        await this.addToCartButton.first().click();
    }

    async openCart() {
        await this.cartLink.click();
    }
}