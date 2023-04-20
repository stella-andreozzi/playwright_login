# UI Web Test Automation using Playwright and Typescript

This project is an example of UI web test automation using the [Playwright](https://playwright.dev/) automation framework and [Typescript](https://www.typescriptlang.org/).

## Getting Started

### Prerequisites

To run this project, you need to have the following installed:

- [Node.js](https://nodejs.org/en/) (version 14 or higher)

### Installing

To install the dependencies, run the following command:

```sh
npm install
```

### Running Tests

To run the tests, use the following command:

```sh
npx playwright test tests/example.spec.ts
```

This command will run all the tests in the `e2e` directory.

### Generating Reports

To generate a HTML report of the test results, use the following command:

```sh
npx playwright show-report
```

This command will generate a HTML report in the `reports` directory.

## Structure

The project is structured as follows:

- `pages` directory contains the pages used in the code.
- `e2e` directory contains the test cases.

## Framework

The framework uses the following tools and libraries:

- [Playwright](https://playwright.dev/) - for browser automation.
- [Typescript](https://www.typescriptlang.org/) - for static typing.

## Contributing

Contributions are welcome! Please feel free to submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.