import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider
}from "react-router-dom"
import Root from './Root.jsx'
import SignUpForm from './Components/Signupform/SignUpForm.jsx'
import NewBlog from './Components/newBlog.jsx/NewBlog.jsx'
import Blogs from './Components/Blogs/Blogs.jsx'

import PrivetRoute from './Components/PrivetRoute.jsx'
import LoginForm from './Components/LoginForm/LoginForm.jsx'
import TrendingPage from './Components/TrendingPage/TrendingPage.jsx'


const router =createBrowserRouter([
  
  {
    path:"/",
    element:<Root/>,
    children:[
      {
        path:'/',
        element:<App/>
      },{
        path:'/signup',
        element:<SignUpForm/>
      },{
        path:'/new',
        element:
        (
          <PrivetRoute>
                <NewBlog/>
          </PrivetRoute>
        )
      
      },{
        path:"/blogs",
        element:<Blogs/>
      },{
        path:"/login",
        element:<LoginForm/>
      },{
        path:"/trending",
        element:<TrendingPage/>
      }
      
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
   <RouterProvider router={router}/>
</React.StrictMode>


  
 
)
