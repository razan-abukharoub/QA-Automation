import { Page, Locator } from '@playwright/test';

export class JavaScriptAlertsPage {
    readonly page: Page;
    readonly alertButton: Locator;

    constructor(page: Page) {
        this.page = page;

        this.alertButton = page.getByRole('button', {
            name: 'Click for JS Alert'
        });
    }

    async acceptAlert() {
        this.page.once('dialog', dialog => {
            dialog.accept();
        });

        await this.alertButton.dispatchEvent('click');
    }
}