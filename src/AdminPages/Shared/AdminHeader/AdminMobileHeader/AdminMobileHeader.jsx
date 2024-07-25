import logoImage from "../../../../assets/HeaderImage/Logo.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useContext, useState } from "react";
import { AuthContext } from "../../../../Provider/AuthProvider";

const AdminMobileHeader = () => {
  const { handleLogOut } = useContext(AuthContext);
  const [open, setOpen] = useState(false);

  const handlePressMenu = () => {
    setOpen(!open);
  };

  const navigate = useNavigate();
  const handleLogout_ = () => {
    localStorage.removeItem("email");
    handleLogOut;
    navigate("/");
  };

  return (
    <div className="">
      <div className="px-5 py-5 flex items-center justify-between bg-black opacity-80">
        <div>
          <Link to={"/"}>
            <LazyLoadImage
              src={logoImage}
              // onClick={handlePressMenu}
              className="w-[120px]"
            />
          </Link>
        </div>
        <div onClick={handlePressMenu}>
          <div className={` ${open ? "hidden" : "block"}`}>
            <MenuIcon />
          </div>
          <div className={` ${open ? "" : "hidden"}`}>
            <CloseIcon />
          </div>
        </div>
      </div>
      <div
        className={`bg-black p-2 h-auto transition-all duration-700 ease-in-out ${
          open ? "opacity-100 max-h-screen" : "opacity-0 max-h-0 hidden"
        }`}
      >
        <div className="flex flex-col gap-4 font-bold ">
          <NavLink
            onClick={handlePressMenu}
            className={({ isActive }) =>
              isActive ? "text-blue-500 font-extrabold" : ""
            }
            to="/dashboard/home"
          >
            Home
          </NavLink>

          <NavLink
            onClick={handlePressMenu}
            className={({ isActive }) =>
              isActive ? "text-blue-500 font-extrabold" : ""
            }
            to="/dashboard/service"
          >
            Service
          </NavLink>

          <NavLink
            onClick={handlePressMenu}
            className={({ isActive }) =>
              isActive ? "text-blue-500 font-extrabold" : ""
            }
            to="/dashboard/portfolio"
          >
            Portfolio
          </NavLink>

          <NavLink
            onClick={handlePressMenu}
            className={({ isActive }) =>
              isActive ? "text-blue-500 font-extrabold" : ""
            }
            to="/dashboard/about"
          >
            About
          </NavLink>

          <NavLink
            onClick={handlePressMenu}
            className={({ isActive }) =>
              isActive ? "text-blue-500 font-extrabold" : ""
            }
            to="/dashboard/gigs"
          >
            Gigs
          </NavLink>

          <NavLink
            onClick={handlePressMenu}
            className={({ isActive }) =>
              isActive ? "text-blue-500 font-extrabold" : ""
            }
            to="/dashboard/project"
          >
            Project
          </NavLink>

          <NavLink
            onClick={handlePressMenu}
            className={({ isActive }) =>
              isActive ? "text-blue-500 font-extrabold" : ""
            }
            to="/dashboard/blogs"
          >
            Blog
          </NavLink>

          <NavLink
            onClick={handlePressMenu}
            className={({ isActive }) =>
              isActive ? "text-blue-500 font-extrabold" : ""
            }
            to="/contact"
          >
            Contact
          </NavLink>

          <h1 onClick={handleLogout_} className="cursor-pointer">
            Logout
          </h1>
        </div>
      </div>
    </div>
  );
};

export default AdminMobileHeader;
