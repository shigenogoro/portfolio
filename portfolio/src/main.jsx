import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        {/* Route for the home page */}
        <Route path="/" element={<App />} />
      </Routes>
    </HashRouter>
  </StrictMode>,
)
