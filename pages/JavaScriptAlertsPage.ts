import { Page, Locator } from '@playwright/test';

export class JavaScriptAlertsPage {
    readonly page: Page;
    readonly alertButton: Locator;
    readonly confirmButton: Locator;
    readonly promptButton: Locator;

    constructor(page: Page) {
        this.page = page;

        this.alertButton = page.getByRole('button', {
            name: 'Click for JS Alert'
        });

        this.confirmButton = page.getByRole('button', {
            name: 'Click for JS Confirm'
        });

        this.promptButton = page.getByRole('button', {
            name: 'Click for JS Prompt'
        });
    }

    async acceptAlert(): Promise<string> {
        let message = '';

        this.page.once('dialog', dialog => {
            message = dialog.message();
            dialog.accept();
        });

        await this.alertButton.dispatchEvent('click');

        return message;
    }

    async acceptConfirm(): Promise<string> {
        let message = '';

        this.page.once('dialog', dialog => {
            message = dialog.message();
            dialog.accept();
        });

        await this.confirmButton.dispatchEvent('click');

        return message;
    }

    async acceptPrompt(text: string): Promise<string> {
        let message = '';

        this.page.once('dialog', dialog => {
            message = dialog.message();
            dialog.accept(text);
        });

        await this.promptButton.dispatchEvent('click');

        return message;
    }
}