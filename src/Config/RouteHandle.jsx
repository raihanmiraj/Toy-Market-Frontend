import React, { createContext, useContext } from 'react';
 
import {  createBrowserRouter,
    RouterProvider,
    useParams,
  } from "react-router-dom";
import Layout from '../Layout/Layout'; 
import axios from 'axios'; 
import LoginPage from '../Pages/LoginPage/LoginPage';
import HomePage from '../Pages/HomePage/HomePage';
 
import { AuthContext } from '../Provider/AuthContextProvider';
import PrivateRoute from './PrivateRoute';
import RestictedPublicRoute from './RestictedPublicRoute';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import BlogPage from '../Pages/BlogPage/BlogPage';
import RegisterPage from '../Pages/RegisterPage/RegisterPage'; 
import AllToys from '../Pages/AllToys/AllToys';
import MyToys from '../Pages/MyToys/MyToys';
import UpdateToyPage from '../Pages/UpdateToyPage/UpdateToyPage';
import AddAToyPage from '../Pages/AddAToyPage/AddAToyPage';
import SingleToy from '../Pages/SingleToy/SingleToy';
const RouteHandle = () => {
   const  { registerUser, user, logOut, loginUser,isLogged,setIsLogged }  = useContext(AuthContext);
 const setTitle = (title)=>{
 document.title = `KidSport | ${title}` 
 }
    const router = createBrowserRouter([
        {
          path: "/",
          element: <Layout setTitle={setTitle} />,
              children: [
            {
              path: "/",
              element: <HomePage   setTitle={setTitle} />,
             },

             {
              path: "/blog",
              loader: ()=> {
                return {
                  blogDataLoad :axios.get("/blog"),
            
              }
            },
              element: <BlogPage  setTitle={setTitle} />,
             },
             {
              path: "/toys",
                element: <AllToys  setTitle={setTitle} />,
             },
             {
              path: "/toy/:id",
                element:<PrivateRoute><SingleToy  setTitle={setTitle} /></PrivateRoute> ,
             },
             {
              path: "/mytoys",
                element: <PrivateRoute><MyToys  setTitle={setTitle} /></PrivateRoute> ,
             },
              {
              path: "/addtoy",
                element: <PrivateRoute><AddAToyPage  setTitle={setTitle} /></PrivateRoute> ,
             },
             {
              path: "/updatetoy/:id",
             element:  <PrivateRoute><UpdateToyPage  setTitle={setTitle} /></PrivateRoute>   ,
         },
             {
              path: "/login",
             element:<RestictedPublicRoute> <LoginPage setTitle={setTitle}/></RestictedPublicRoute>,
         }
        ]
      } 
        , {
          path: "/register",
         element:<RestictedPublicRoute> <RegisterPage setTitle={setTitle}/></RestictedPublicRoute>,
     }
        
        ,
        {
          path: "*",
         element:<ErrorPage setTitle={setTitle} />,
     }
       
       
      ]);
      
     
    return (
        <>
              <RouterProvider router={router} />  
        </>
    );
}

export default RouteHandle;
