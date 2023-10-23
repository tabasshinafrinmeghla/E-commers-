import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './components/Layout/Home';
import Shop from './components/Shops/Shop/Shop';
import Order from './components/Order/Order';
import Manage from './components/Manage/Manage';
import Login from './components/Login/Login';
import cartProductsLoader from './components/Loaders/cartProductsLoader';
import Checkout from './components/Checkout/Checkout';
import Contact from './components/Contact/Contact';
import Registration from './components/Registration/Registration';
import AuthProvider from './components/Providers/AuthProvider';
import PrivateRoutes from './components/routes/PrivateRoutes';




const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element: <Shop></Shop>
      },
      {
        path: 'orderReview',
        element: <Order></Order>,
        // loader: () => fetch('products.json')
        loader: cartProductsLoader

      },
      {
        path: 'Inventory',
        element: <PrivateRoutes><Manage></Manage></PrivateRoutes>,
        loader: () => fetch('products.json')

      },
      {
        path: 'checkout',
        /**
         * checkout ekti private rout ei jonno age log in korte hobe */
        element: <PrivateRoutes><Checkout></Checkout></PrivateRoutes>

      },
      {
        path: 'Contact',
        element: <Contact></Contact>
      }
      ,
      {
        path: 'Login',
        element: <Login></Login>

      },
      {
        path: 'Registration',
        element: <Registration></Registration>

      },


    ]
  }
])





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* এই খানে AuthProvide.jsx বসাবো  কারন এখান থেকে সব ডেটা  এক্সস করবে*/}

    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>

  </React.StrictMode>,
)
