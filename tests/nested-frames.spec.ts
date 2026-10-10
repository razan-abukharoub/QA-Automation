import { test, expect } from '@playwright/test';
import { NestedFramesPage } from '../pages/NestedFramesPage';

test('Nested Frames - Inner Input', async ({ page }) => {
    await page.setContent(`
        <!DOCTYPE html>
        <html>
        <body>
            <h1>Nested Frames</h1>

            <iframe id="outer-frame"
                srcdoc='
                    <html>
                    <body>
                        <iframe id="left-frame"
                            srcdoc="<html><body><input id=inner-input type=text></body></html>">
                        </iframe>
                    </body>
                    </html>
                '>
            </iframe>

        </body>
        </html>
    `);

    const nestedFramesPage = new NestedFramesPage(page);

    await nestedFramesPage.enterText('Playwright');

    const value = await nestedFramesPage.getInputValue();

    expect(value).toBe('Playwright');
});