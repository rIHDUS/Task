import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import Login from './pages/login';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'))
let allRoutes = createBrowserRouter([
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/dashboard",
    element: <App />
  }
])

root.render(
  <React.StrictMode>
    <RouterProvider router={allRoutes}></RouterProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
