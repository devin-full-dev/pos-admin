import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from "./components/layouts/Layout"
import { ThemeProvider } from "./context/ThemeContext"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <div className='space-y-4 bg-gray-50 min-h-screen'>
        <Layout />
      </div>
    </ThemeProvider>
  </StrictMode>,
)
