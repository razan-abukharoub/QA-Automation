import { test, expect } from '@playwright/test';
import { NestedFramesPage } from '../pages/NestedFramesPage';

test('Nested Frames - Left Frame', async ({ page }) => {

    await page.setContent(`
        <html>
            <body>

                <iframe id="outer-frame"
                    srcdoc="
                        <html>
                            <body>
                                <iframe id='left-frame'
                                    srcdoc='<html><body><p>LEFT FRAME</p></body></html>'>
                                </iframe>
                            </body>
                        </html>
                    ">
                </iframe>

            </body>
        </html>
    `);

    const nestedFramesPage = new NestedFramesPage(page);

    const text = await nestedFramesPage.getLeftFrameText();

    expect(text).toContain('LEFT FRAME');
});