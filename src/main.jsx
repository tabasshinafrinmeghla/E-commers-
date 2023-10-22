import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import Shop from './components/Shops/Shop/Shop.jsx';
import Home from './components/Layout/Home';
import Shop from './components/Shops/Shop/Shop';
import Order from './components/Order/Order';
import Manage from './components/Manage/Manage';
import Login from './components/Login/Login';
import cartProductsLoader from './components/Loaders/cartProductsLoader';
import Checkout from './components/Checkout/Checkout';
import Contact from './components/Contact/Contact';
import SignIn from './components/SignIn/SignIn';
import Registration from './components/Registration/Registration';


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
        element: <Manage></Manage>,
        loader: () => fetch('products.json')

      },
      {
        path: 'checkout',
        element: <Checkout></Checkout>

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
    <RouterProvider router={router} />
  </React.StrictMode>,
)
