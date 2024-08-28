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

        {/* Catch-all route in case of unmatched paths */}
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </HashRouter>
  </StrictMode>,
)
