# API-Testing

This project uses Playwright for API testing.

## Installation

Playwright and its dependencies have been installed.

## Running Tests

To run the API tests:

```bash
npm test
```

This will execute the Playwright tests in the `tests/` directory.

## Configuration

The `playwright.config.js` file contains the Playwright configuration, including test directory, base URL for API tests, and project settings.

You can customize the base URL by setting the `BASE_URL` environment variable:

```bash
BASE_URL=https://your-api.com npm test
```

## Adding More Tests

Add more test files in the `tests/` directory with the `.spec.js` extension.

For more information on Playwright API testing, see the [Playwright documentation](https://playwright.dev/docs/api-testing).
