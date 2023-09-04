import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App'
import './index.css'
import LandingPage from './pages/LandingPage'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LandingPage />
    {/* <App /> */}
  </React.StrictMode>,
)
