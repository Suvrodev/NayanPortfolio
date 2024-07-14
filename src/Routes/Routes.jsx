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
import AdminHome from "../AdminPages/AdminHome/AdminHome";
import AdminAbout from "../AdminPages/AdminAbout/AdminAbout";
import AdminService from "../AdminPages/AdminService/AdminService";

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
      {
        path: "/dashboard/home",
        element: (
          <PrivateRoute>
            <AdminHome />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/about",
        element: (
          <PrivateRoute>
            <AdminAbout />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/service",
        element: (
          <PrivateRoute>
            <AdminService />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/portfolio",
        element: (
          <PrivateRoute>
            <AdminHome />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/blog",
        element: (
          <PrivateRoute>
            <AdminHome />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/project",
        element: (
          <PrivateRoute>
            <AdminHome />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/gigs",
        element: (
          <PrivateRoute>
            <AdminHome />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/contact",
        element: (
          <PrivateRoute>
            <AdminHome />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
