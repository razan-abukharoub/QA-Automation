import { test } from '@playwright/test';
import { FileUploadPage } from '../pages/FileUploadPage';
import path from 'path';

test('File Upload', async ({ page }) => {

    await page.setContent(`
        <!DOCTYPE html>
        <html>
        <body>
            <h1>File Upload</h1>

            <input type="file" id="file-upload">

            <button id="file-submit">Upload</button>

            <div id="uploaded-files"></div>

            <script>
                document.getElementById('file-submit').onclick = function () {
                    const fileInput = document.getElementById('file-upload');

                    if (fileInput.files.length > 0) {
                        document.getElementById('uploaded-files').innerText =
                            fileInput.files[0].name;
                    }
                };
            </script>
        </body>
        </html>
    `);

    const fileUploadPage = new FileUploadPage(page);

    const filePath = path.resolve('test-data/upload.txt');

    await fileUploadPage.uploadFile(filePath);

    await fileUploadPage.verifyUploadedFile('upload.txt');
});