import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'react-toastify/dist/ReactToastify.css';
import './index.css'
import { ToastContainer } from 'react-toastify';
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
  
  <App/>
  <ToastContainer
  position="top-left"
  autoClose={3000}
  hideProgressBar={false}
  newestOnTop={false}
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover
  theme="colored"
  bodyClassName="toastClass"
   />
  </StrictMode>,
)
