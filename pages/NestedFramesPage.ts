import { Page, Locator } from '@playwright/test';

export class NestedFramesPage {
    readonly page: Page;
    readonly input: Locator;

    constructor(page: Page) {
        this.page = page;
        this.input = page
            .frameLocator('#outer-frame')
            .frameLocator('#left-frame')
            .locator('#inner-input');
    }

    async enterText(text: string) {
        await this.input.fill(text);
    }

    async getInputValue(): Promise<string> {
        return await this.input.inputValue();
    }
}