import React from 'react';
import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from '../components/Home/Home';
import Root from '../Root/Root';
// import Register from '../components/Register/Register';
// import Login from '../components/Login/Login';
// import ErrorPage from '../components/ErrorPage/ErrorPage';

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    // errorElement: <ErrorPage></ErrorPage>,
    children: [
       {
        path: '/',
        element: <Home />
       },
    //    {
    //     path:'/register',
    //     element: <Register></Register>
    //    },
    //    {
    //     path: '/login',
    //     element: <Login></Login>
    //    }

    ]
  },
]);

export default Router;