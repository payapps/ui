# ui

> Payapps UI

[![NPM](https://img.shields.io/npm/v/ui.svg)](https://www.npmjs.com/package/ui) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Getting Started
Perform the obvious install

```bash
npm install
```

In the root of the project run

```bash
  npm start
```

This will build the UI to `common` and `es` using rollup with a watch flag.

You can test the package in the `example` directory which is a `create-react-app` instance that imports the UI library locally.  Run this example app with

```bash
  npm start
```

Better yet, you can develop in the Storybook. Run this using

```bash
  npm run storybook
```

To deploy the storybook to GitHub pages simply run

```bash
  npm run deploy-storybook
```

This will build a static Storybook to `/storybook-static` and deploy to GitHub pages

## Publish to NPM

You'll likely need to bump the `npm` version number.

```bash
  npm version patch
```

Then you can run

```bash
  npm publish
```

Be sure to mash refresh continuously for 30 seconds to see your changes
![Mash refresh](drilling-F5.gif)

## License

M
