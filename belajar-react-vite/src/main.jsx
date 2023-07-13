import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

// import pages
import App from './App'
import LoginPage from './pages/login'
import RegisterPage from './pages/register'

// import dan setting react router
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
