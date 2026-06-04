import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ThemeProvider } from "./context/ThemeContext"
import LoginPage from "./pages/auth/LoginPage"
import AppRouter from "./router/AppRouters";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <AppRouter />
    </ThemeProvider>
  </StrictMode>,
)
