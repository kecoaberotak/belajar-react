import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

// import pages
import App from './App'
import LoginPage from './pages/login'
import RegisterPage from './pages/register'
import ProductsPage from './pages/products'
import ErrorPage from './pages/errorPage'
import ProfilePage from './pages/profile'
import DetailProductPage from './pages/detailProduct'

// import store
import { Provider } from 'react-redux'
import store from './redux/store'

// import Context
import DarkModeContextProvider from './context/DarkMode'

// import dan setting react router
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/products",
    element: <ProductsPage />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },
  {
    path: "/product/:id",
    element: <DetailProductPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <DarkModeContextProvider>
        <RouterProvider router={router} />
      </DarkModeContextProvider>
    </Provider>
  </React.StrictMode>,
)
