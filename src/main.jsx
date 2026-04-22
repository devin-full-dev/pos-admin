import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from "./components/layouts/Layout"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='space-y-4 bg-gray-50 min-h-screen'>
      <Layout />
    </div>
  </StrictMode>,
)
