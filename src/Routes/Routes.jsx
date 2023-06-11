import {
    createBrowserRouter
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Home/Home/Home";
import Instructors from "../Instructors/Instructors";
import Classes from "../Classes/Classes";

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
      }
      ]
    },
  ]);