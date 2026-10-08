import { test, expect } from '@playwright/test';

test('JavaScript Alert', async ({ page }) => {

    await page.setContent(`
        <html>
            <body>
                <button id="alertBtn" onclick="alert('I am a JS Alert')">
                    Click for JS Alert
                </button>
            </body>
        </html>
    `);

    let alertMessage = '';

    page.on('dialog', dialog => {
        alertMessage = dialog.message();
        dialog.accept();
    });

    await page.locator('#alertBtn').click();

    expect(alertMessage).toBe('I am a JS Alert');

});