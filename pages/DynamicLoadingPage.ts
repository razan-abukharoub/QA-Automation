import { Page, Locator, expect } from '@playwright/test';

export class DynamicLoadingPage {
    readonly page: Page;
    readonly startButton: Locator;
    readonly result: Locator;

    constructor(page: Page) {
        this.page = page;

        this.startButton = page.getByRole('button', {
            name: 'Start'
        });

        this.result = page.locator('#finish h4');
    }

    async startLoading() {
        await this.startButton.click();
    }

    async verifyResult() {
        await this.result.waitFor({
            state: 'visible',
            timeout: 20000
        });

        await expect(this.result).toHaveText('Hello World!');
    }
}