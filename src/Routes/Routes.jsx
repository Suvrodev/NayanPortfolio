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
import AdminPortfolio from "../AdminPages/AdminPortfolio/AdminPortfolio";
import AdminProject from "../AdminPages/AdminProject/AdminProject";
import AdminGigs from "../AdminPages/AdminGigs/AdminGigs";
import AdminContact from "../AdminPages/AdminContact/AdminContact";
import Blog from "../Pages/Blog/Blog";
import AdminBlog from "../AdminPages/AdminBlog/AdminBlog";

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
        path: "/blogs",
        element: <Blog />,
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
            <AdminPortfolio />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/blogs",
        element: (
          <PrivateRoute>
            <AdminBlog />
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
            <AdminProject />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/gigs",
        element: (
          <PrivateRoute>
            <AdminGigs />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/contact",
        element: (
          <PrivateRoute>
            <AdminContact />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
