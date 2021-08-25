# ui

> Payapps UI

[![NPM](https://img.shields.io/npm/v/ui.svg)](https://www.npmjs.com/package/ui) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save ui
```

## Usage
By default the UI needs the ThemeProvider wrapper. It'll take an optional `theme` prop for passing custom themes.

```tsx
import React from 'react'
import { ThemeProvider, Button } from '@payapps/ui'

class Example extends Component {
  render() {
    <ThemeProvider>
      <Button onClick={handleClick} size="lg">Primary</Button>
      <Button type="secondary" loading={loading} success={success} size="lg">Secondary</Button>
      <Button type="tertiary" loading={loading} size="lg">Tertiary</Button>
      <p>Some text here and a <Button type="link" underline>link type button here</Button>.</p>
    </ThemeProvider>
  }
}
```

## License

MIT © [3base](https://github.com/3base)
