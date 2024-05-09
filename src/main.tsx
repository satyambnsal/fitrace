import React from 'react'
import ReactDOM from 'react-dom/client'
import MyApp from './App.tsx'
import './styles/index.css'
import './styles/variable.css'
import '@ionic/react/css/core.css'
import '@ionic/react/css/normalize.css'
import '@ionic/react/css/structure.css'
import '@ionic/react/css/typography.css'

import { setupIonicReact } from '@ionic/react'

async function init() {
  setupIonicReact()
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
