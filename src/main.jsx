import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import router from './components/router/Router.jsx'
import 'aos/dist/aos.js'; // Import AOS CSS
import AOS from 'aos'; // Import AOS JavaScript
createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
