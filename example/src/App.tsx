import React, { useState } from 'react'
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
          <Button onClick={handleClick}>Primary</Button>
          <Button type="secondary" loading={loading} success={success}>Secondary</Button>
          <Button type="tertiary">Tertiary</Button>
        </div>
      </ThemeProvider>
    )
}

export default App
