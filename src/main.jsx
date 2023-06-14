// /* eslint-disable no-unused-vars */

import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import Blog from './components/Navbar/Blog';
import Home from './components/Navbar/Home';
import Login from './components/Login/Login';
import About from './components/Navbar/About';
import AllToys from './components/Navbar/AllToys';
import MyToys from './components/Navbar/MyToys';
import AddAToy from './components/Navbar/AddAToy';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Register from './components/Login/Register';

const router = createBrowserRouter([
  {
    path:'*',
    element:<ErrorPage></ErrorPage>
  },
  {
  
    path: "/",
    element: <App></App>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:'/blog',
        element:<Blog></Blog>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/about',
        element:<About></About>
      },
      {
        path:'alltoys',
        element:<AllToys></AllToys>
      },
      {
        path:'mytoys',
        element:<MyToys></MyToys>
      },
      {
        path:'addatoy',
        element:<AddAToy></AddAToy>
      },
      {
        path:'registration',
        element:<Register></Register>
      }
     
    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)

