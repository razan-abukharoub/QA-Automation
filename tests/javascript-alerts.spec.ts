import { test, expect } from '@playwright/test';
import { JavaScriptAlertsPage } from '../pages/JavaScriptAlertsPage';

test('JavaScript Alerts - Alert, Confirm and Prompt', async ({ page }) => {

    await page.setContent(`
        <!DOCTYPE html>
        <html>
        <body>

            <h1>JavaScript Alerts</h1>

            <button onclick="alert('I am a JS Alert')">
                Click for JS Alert
            </button>

            <button onclick="confirm('I am a JS Confirm')">
                Click for JS Confirm
            </button>

            <button onclick="prompt('I am a JS Prompt')">
                Click for JS Prompt
            </button>

        </body>
        </html>
    `);

    const alertsPage = new JavaScriptAlertsPage(page);

    const alertMessage = await alertsPage.acceptAlert();
    expect(alertMessage).toBe('I am a JS Alert');

    const confirmMessage = await alertsPage.acceptConfirm();
    expect(confirmMessage).toBe('I am a JS Confirm');

    const promptMessage = await alertsPage.acceptPrompt('Razan');
    expect(promptMessage).toBe('I am a JS Prompt');
});