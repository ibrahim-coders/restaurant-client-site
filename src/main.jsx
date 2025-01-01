import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import router from './Router/router';
import { RouterProvider } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from './Providers/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query';
const queryClient = new QueryClient();
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <div className="max-w-screen-xl mx-auto ">
          <Toaster position="top-right" />
          <HelmetProvider>
            <RouterProvider router={router} />
          </HelmetProvider>
        </div>
      </QueryClientProvider>
    </AuthProvider>
  </StrictMode>
);
