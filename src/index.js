import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import App from './App';
import Body from './component/Body';
import About from './component/About';
import ResturantMenu from './component/ResturantMenu';
import Error from './component/Error';
import CartItem from './component/CartItem';
import ContactUs from './component/ContactUs';
const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <About /> },
      { path: "/restaurant/:resid", element: <ResturantMenu /> },  
      { path: "/cartItem", element: <CartItem /> },
      {path:"/contactUs",element:<ContactUs/>}
    ],
  },
]);
root.render(<RouterProvider router={router} />);
