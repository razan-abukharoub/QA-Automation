import { Page, Locator, expect } from '@playwright/test';

export class FileUploadPage {
    readonly page: Page;
    readonly fileInput: Locator;
    readonly uploadButton: Locator;
    readonly uploadedFile: Locator;

    constructor(page: Page) {
        this.page = page;

        this.fileInput = page.locator('#file-upload');
        this.uploadButton = page.locator('#file-submit');
        this.uploadedFile = page.locator('#uploaded-files');
    }

    async uploadFile(filePath: string) {
    const fileChooserPromise = this.page.waitForEvent('filechooser');

    await this.fileInput.click();

    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles(filePath);

    await this.uploadButton.click();
    }

    async verifyUploadedFile(fileName: string) {
        await expect(this.page.locator('#uploaded-files')).toBeVisible();
        await expect(this.page.locator('#uploaded-files')).toContainText(fileName);
    }
}