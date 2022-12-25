import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from '@renderer/routes/router'
import '@renderer/assets/index.css'

const container = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
container.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
)
