import { useState } from 'react'
import { ThemeProvider, Button } from 'ui'

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
      </ThemeProvider>
    )
}

export default App
