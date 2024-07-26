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
import AddProject from "../Pages/Projects/AddProject/AddProject";
import UpdateProject from "../Pages/Projects/UpdateProject/UpdateProject";
import AddGigs from "../Pages/Gigs/AddGigs/AddGigs";
import UpdateGigs from "../Pages/Gigs/UpdateGigs/UpdateGigs";
import AddPortfolio from "../Pages/Portfolio/AddPortfolio/AddPortfolio";
import UpdatePortfolio from "../Pages/Portfolio/UpdatePortfolio/UpdatePortfolio";
import AddService from "../Pages/Service/WhatIDo/AddService/AddService";
import UpdateService from "../Pages/Service/WhatIDo/UpdateService/UpdateService";
import AdminUser from "../AdminPages/AdminUser/AdminUser";

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
        path: "/dashboard",
        element: <Navigate to="/dashboard/home"></Navigate>,
      },
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
        path: "/dashboard/service/addservice",
        element: (
          <PrivateRoute>
            <AddService />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/service/updateservice/:id",
        element: (
          <PrivateRoute>
            <UpdateService />
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
        path: "/dashboard/portfolio/addportfolio",
        element: (
          <PrivateRoute>
            <AddPortfolio />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/portfolio/updateportfolio/:id",
        element: (
          <PrivateRoute>
            <UpdatePortfolio />
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
        path: "/dashboard/project/addproject",
        element: (
          <PrivateRoute>
            <AddProject />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/project/updateproject/:id",
        element: (
          <PrivateRoute>
            <UpdateProject />
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
        path: "/dashboard/gigs/addgigs",
        element: (
          <PrivateRoute>
            <AddGigs />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/gigs/updategigs/:id",
        element: (
          <PrivateRoute>
            <UpdateGigs />
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
      {
        path: "/dashboard/adminuser",
        element: (
          <PrivateRoute>
            <AdminUser />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
