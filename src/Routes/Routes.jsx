import {
    createBrowserRouter
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Home/Home/Home";
import Instructors from "../Instructors/Instructors";
import Classes from "../Classes/Classes";
import LoginPage from "../LoginPage/LoginPage";
import Register from "../Home/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import MyCart from "../Pages/MyCart/MyCart";
import AddItem from "../Pages/AddItem/AddItem";
import AdminRoute from "./AdminRoute";
import ManageItems from "../Pages/ManageItems/ManageItems";
import AllUsers from "../Pages/AllUsers/AllUsers";
import Payment from "../Pages/Payment/Payment";
import AdminHome from "../Pages/AdminHome/AdminHome";
import UserHome from "../Pages/UserHome/UserHome";

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element:<Home></Home>
        },
        {
            path: "instructor",
            element:<Instructors></Instructors>
        },
        {
            path: "classes",
            element:<Classes></Classes>
        },
        {
          path: "classes/:category",
          element:<Classes></Classes>
      },
      {
        path: "loginpage",
        element:<LoginPage></LoginPage>
    },
    {
      path:'register',
      element:<Register></Register>
  }
      ]
    },
    {
      path: 'dashboard',
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>, 
      children: [
        {
          path: 'userhome',
          element: <UserHome></UserHome>
        },
        
        {
          path: 'mycart', 
          element: <MyCart></MyCart>
        },
        {
          path:'payment',
          element: <Payment></Payment>
        },
        // admin routes
        {
          path: 'adminhome',
          element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
        },
        {
          path: 'allusers', 
          element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
        },
        {
          path: 'addItem',
          element: <AdminRoute><AddItem></AddItem></AdminRoute>
        },
        {
          path: 'manageitems',
          element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
        }
      ]
    }
  ]);