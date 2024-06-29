import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Navigate to="/home"></Navigate>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

export default router;
