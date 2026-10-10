# QA Automation - Playwright

## Overview

QA Automation project built using Playwright and TypeScript.

The project demonstrates UI test automation using the Page Object Model (POM), cross-browser testing, and CI/CD with GitHub Actions.

## Tech Stack

- TypeScript
- Playwright
- Page Object Model (POM)
- GitHub Actions
- HTML Test Reports

## Automated Tests

### SauceDemo
- Login
- Verify products
- Product sorting
- Add product to cart
- Checkout
- Verify successful order

### Dynamic Loading
- Click Start
- Wait for dynamic content
- Verify "Hello World!"

### File Upload
- Select a file
- Upload the file
- Verify uploaded file

### JavaScript Alerts
- Trigger JavaScript alert
- Accept the alert
- Verify alert message

### Nested Frames
- Access outer frame
- Access nested frame
- Verify frame content

## Browsers

Tests run on:

- Chromium
- Firefox
- WebKit

## Project Structure

```text
QA-Automation/
├── pages/
├── tests/
├── test-data/
├── .github/
│   └── workflows/
├── playwright.config.ts
├── package.json
└── README.md