import React from 'react'
import {RouterProvider, createBrowserRouter} from "react-router-dom" 
// import AppLayout from './layouts/appLayout'
import AppLayout from "./layouts/AppLayout"
import Home from './pages/Home'
import PostList from './pages/PostList'
import PostComments from './pages/PostComments'
import Form from './pages/Form'
import Login from './pages/Login'
import loginContent from './pages/loginContent'
import Error from './pages/Error'
import "../src/App.css"



const router=createBrowserRouter([
  {
    element : <AppLayout />, // <AppLAyout /> component will be top-level layout component, all other paths or components will be its children 
    errorElement: <Error />,
    children : [
      {
        path: "/",
        element: <Home />
      },
      {
        path:"/posts",
        element: <PostList />
      },
      {
        path:"/posts/:postId",  //Creating dynamic routes. In dynamic routes ":" is very crucial
        element:<PostComments />
      },
      {
        path:"/submit",
        element: <Form />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path:"/loginContent",
        element : <loginContent />
      }
    ]
  }
])
const App = () => {
  return (
    <div>
      {/* <RouterProvider router={router}/> The  RouterProvider component is a wrapper component that provides the router instance to the rest of the application. 
      It takes a router prop, which is the router instance created by createBrowserRouter */}

      <p>Q. Create a login form and onSubmit route it to the different page </p>

      <RouterProvider router={router}/>

      
    </div>


  )
    
}

export default App