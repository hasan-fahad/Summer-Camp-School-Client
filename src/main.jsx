import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/Routes.jsx';
import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from './AuthProvider/AuthProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <React.StrictMode>
    <HelmetProvider>
   <div className='max-w-screen-xl mx-auto'>
    <RouterProvider router={router} />
    </div>
   </HelmetProvider>
  </React.StrictMode>
  </AuthProvider>,
)
