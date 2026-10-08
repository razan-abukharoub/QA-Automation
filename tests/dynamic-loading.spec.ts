import { test } from '@playwright/test';
import { DynamicLoadingPage } from '../pages/DynamicLoadingPage';

test('Dynamic Loading - Hello World', async ({ page }) => {

    await page.setContent(`
        <!DOCTYPE html>
        <html>
        <body>
            <h1>Dynamic Loading</h1>

            <button id="start">Start</button>

            <div id="loading" style="display:none;">
                Loading...
            </div>

            <div id="finish" style="display:none;">
                <h4>Hello World!</h4>
            </div>

            <script>
                document.getElementById('start').onclick = function () {

                    document.getElementById('loading').style.display = 'block';

                    setTimeout(function () {
                        document.getElementById('loading').style.display = 'none';
                        document.getElementById('finish').style.display = 'block';
                    }, 3000);
                };
            </script>
        </body>
        </html>
    `);

    const dynamicLoadingPage = new DynamicLoadingPage(page);

    await dynamicLoadingPage.startLoading();

    await dynamicLoadingPage.verifyResult();
});