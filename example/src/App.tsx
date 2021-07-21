import { useState } from 'react'
import { ThemeProvider, Button, WarningPopover, InfoPopover, Checkbox } from 'ui'

const App = () => {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleClick = () => {
    setLoading(!loading)
    setTimeout(() => {
      setSuccess(true)
    }, 3000)
  }

  return (
      <ThemeProvider>
        <div style={{ padding: '2rem' }}>
          <Button onClick={handleClick} size="lg">Primary</Button>
          <Button type="secondary" loading={loading} success={success} size="lg">Secondary</Button>
          <Button type="tertiary" loading={loading} size="lg">Tertiary</Button>
        </div>
        <p>Some text here and a <Button type="link" underline>some text</Button></p>
        <WarningPopover heading="let this be a warning">
          <ul>
            <li>listing warnings...</li>
            <li>go!</li>
          </ul>
        </WarningPopover>
        <InfoPopover>Here's some info for you</InfoPopover>
        <Checkbox defaultIsChecked>Checkbox</Checkbox>
      </ThemeProvider>
    )
}

export default App
