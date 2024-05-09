import React from 'react'
import ReactDOM from 'react-dom/client'
import MyApp from './App.tsx'
import './index.css'

async function init() {
  const rootElement = document.getElementById('root')
  if (!rootElement) throw new Error('React root not found')
  const root = ReactDOM.createRoot(rootElement as HTMLElement)

  root.render(
    <React.StrictMode>
      <MyApp />
    </React.StrictMode>
  )
}

init()
