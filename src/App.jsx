import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout.jsx'
import Home from './Components/Home/Home.jsx'
import Cart from './Components/Cart/Cart.jsx'
import Products from './Components/Products/Products.jsx'
import Login from './Components/Login/Login.jsx'
import Register from './Components/Register/Register.jsx'
import Notfound from './Components/Notfound/Notfound.jsx'
import Brands from './Components/Brands/Brands.jsx'
import CounterContextProvider from './Context/CounterContext.jsx'
import UserContextProvider from './Context/UserContext.jsx'
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute.jsx'
import Category from './Components/Category/Category.jsx'
import ProductDetails from './Components/ProductDetails/ProductDetails.jsx'
import CartContextProvider, { CartContext } from './Context/CartContext.jsx'
import { Toaster } from 'react-hot-toast'
import Checkout from './Components/Checkout/Checkout.jsx'
import AllOrders from './Components/AllOrders/AllOrders.jsx'
import ForgotPassword from './Components/ForgetPassword/ForgetPassword.jsx'
import VerifyResetCode from './Components/VirifyResetCode/VirifyResetCode.jsx'
import Whishlist from './Components/Whishlist/Whishlist.jsx'
import WhishlistContextProvider from './Context/WhishlistContexet.jsx'



function App() {

  let router = createBrowserRouter([
    {
      path: '', element: <Layout />, children: [
        { index: true, element: <ProtectedRoute><Home /></ProtectedRoute> },
        { path: 'cart', element: <ProtectedRoute><Cart /></ProtectedRoute> },
        { path: 'products', element: <ProtectedRoute><Products /></ProtectedRoute> },
        { path: 'productdetails/:id', element: <ProtectedRoute><ProductDetails /></ProtectedRoute> },
        { path: 'brands', element: <ProtectedRoute><Brands /></ProtectedRoute> },
        { path: 'category', element: <ProtectedRoute><Category /></ProtectedRoute> },
        { path: 'checkout', element: <ProtectedRoute><Checkout /></ProtectedRoute> },
        { path: 'wishlist', element: <ProtectedRoute><Whishlist /></ProtectedRoute> },
        { path: 'allorders', element: <ProtectedRoute><AllOrders /></ProtectedRoute> },
        { path: 'login', element: <Login /> },
        { path: 'forgetpassword', element: <ForgotPassword /> },
        { path: 'verifyresetcode', element: <VerifyResetCode /> },
        { path: "register", element: <Register /> },
        { path: '*', element: <Notfound /> },

      ]
    }
  ])


  return <WhishlistContextProvider>
    <CartContextProvider>
    <CounterContextProvider>
    <UserContextProvider>
      <RouterProvider router={router}></RouterProvider>
      <Toaster />
    </UserContextProvider>
  </CounterContextProvider>
  </CartContextProvider>
  </WhishlistContextProvider>
  




}

export default App
