import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { AuthContextProvider } from './context/AuthContext.jsx'
import { GuideContextProvider } from './context/GuideContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <GuideContextProvider>

          <App />
        </GuideContextProvider>

      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
