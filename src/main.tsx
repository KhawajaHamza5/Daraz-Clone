import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'react-toastify/dist/ReactToastify.css'; // Import react-toastify styles
import './index.css'; // Import your custom Tailwind and custom styles
import { ToastContainer } from 'react-toastify';
import App from './App.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
const queryClient = new QueryClient();
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
    <App />
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
      bodyClassName="toastClass" // Apply custom class
    />
    </QueryClientProvider>
  </StrictMode>,
);
