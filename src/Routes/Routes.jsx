import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Service from "../Pages/Service/Service";
import Contact from "../Pages/Contact/Contact";
import Portfolio from "../Pages/Portfolio/Portfolio";
import Gigs from "../Pages/Gigs/Gigs";
import Projects from "../Pages/Projects/Projects";
import AdminLogin from "../AdminPages/AdminLogin/AdminLogin";
import AdminMain from "../Layout/AdminMain/AdminMain";
import PrivateRoute from "./PrivateRoute";

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
      {
        path: "/service",
        element: <Service />,
      },
      {
        path: "/portfolio",
        element: <Portfolio />,
      },
      {
        path: "/gigs",
        element: <Gigs linkTitle={"Gigs"} />,
      },
      {
        path: "/project",
        element: <Projects />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
  // Admin Work
  {
    path: "admin",
    element: <AdminLogin />,
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        {" "}
        <AdminMain />
      </PrivateRoute>
    ),
    children: [
      // {
      //   path: "admin/",
      //   element: <Navigate to="admin/login"></Navigate>,
      // },
    ],
  },
]);

export default router;
