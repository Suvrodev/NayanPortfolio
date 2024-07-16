import React, { useState } from "react";
import logoImage from "../../../../assets/HeaderImage/Logo.png";
import { Link, NavLink } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const MobileHeader = () => {
  const [open, setOpen] = useState(false);

  const handlePressMenu = () => {
    setOpen(!open);
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
            to="/home"
          >
            Home
          </NavLink>

          <NavLink
            onClick={handlePressMenu}
            className={({ isActive }) =>
              isActive ? "text-blue-500 font-extrabold" : ""
            }
            to="/service"
          >
            Service
          </NavLink>

          <NavLink
            onClick={handlePressMenu}
            className={({ isActive }) =>
              isActive ? "text-blue-500 font-extrabold" : ""
            }
            to="/portfolio"
          >
            Portfolio
          </NavLink>

          <NavLink
            onClick={handlePressMenu}
            className={({ isActive }) =>
              isActive ? "text-blue-500 font-extrabold" : ""
            }
            to="/about"
          >
            About
          </NavLink>

          <NavLink
            onClick={handlePressMenu}
            className={({ isActive }) =>
              isActive ? "text-blue-500 font-extrabold" : ""
            }
            to="/gigs"
          >
            Gigs
          </NavLink>

          <NavLink
            onClick={handlePressMenu}
            className={({ isActive }) =>
              isActive ? "text-blue-500 font-extrabold" : ""
            }
            to="/project"
          >
            Project
          </NavLink>

          <NavLink
            onClick={handlePressMenu}
            className={({ isActive }) =>
              isActive ? "text-blue-500 font-extrabold" : ""
            }
            to="/blogs"
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
        </div>
      </div>
    </div>
  );
};

export default MobileHeader;
