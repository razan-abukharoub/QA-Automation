import { Page } from '@playwright/test';

export class NestedFramesPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async getLeftFrameText(): Promise<string> {
        const outerFrame = this.page.frameLocator('#outer-frame');

        const leftFrame = outerFrame.frameLocator('#left-frame');

        return await leftFrame.locator('body').innerText();
    }
}