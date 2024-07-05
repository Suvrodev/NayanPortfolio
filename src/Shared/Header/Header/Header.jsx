import React from "react";
import { Link, NavLink } from "react-router-dom";
import logoImage from "../../../assets/HeaderImage/Logo.png";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import goLink from "../../../JS/goLink";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Header = () => {
  return (
    <div className="bg-[#222222] h-[100vh] text-white pl-16 overflow-hidden sticky top-0">
      {/* <h1 className="text-4xl font-bold mt-20 mb-36 tracking-widest">
        Sarkar Nayan
      </h1> */}
      <div className="mt-20 mb-28 ">
        <Link to={"/"}>
          {/* <img src={logoImage} alt="" className="w-[70%]" /> */}
          <LazyLoadImage src={logoImage} className="w-[70%]" />
        </Link>
      </div>

      <div className="flex flex-col gap-4 font-bold">
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-blue-500 font-extrabold" : ""
          }
          to="/home"
        >
          Home
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            isActive ? "text-blue-500 font-extrabold" : ""
          }
          to="/about"
        >
          About
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            isActive ? "text-blue-500 font-extrabold" : ""
          }
          to="/service"
        >
          Service
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            isActive ? "text-blue-500 font-extrabold" : ""
          }
          to="/portfolio"
        >
          Portfolio
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            isActive ? "text-blue-500 font-extrabold" : ""
          }
          to="/blogs"
        >
          Blog
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-blue-500 font-extrabold" : ""
          }
          to="/project"
        >
          Project
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-blue-500 font-extrabold" : ""
          }
          to="/gigs"
        >
          Gigs
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            isActive ? "text-blue-500 font-extrabold" : ""
          }
          to="/contact"
        >
          Contact
        </NavLink>
      </div>
      <div className="flex gap-4 items-center mt-8">
        <Link
          to=""
          onClick={() => goLink("https://www.facebook.com/sarkarnayans")}
        >
          <FaFacebookF />
        </Link>
        <Link to="" onClick={() => goLink("https://twitter.com/sarkarnayans")}>
          <FaTwitter />
        </Link>
        <Link
          to=""
          onClick={() => goLink("https://www.instagram.com/sarkarnayans/")}
        >
          <FaInstagram />
        </Link>
        <Link
          to=""
          onClick={() => goLink("https://wa.me/message/V3FSQYVKY6HQL1")}
        >
          <FaWhatsapp />
        </Link>
      </div>

      {/* <div>
        <input
          type="text"
          name=""
          id=""
          className="border border-b-1  bg-transparent mt-10"
          placeholder="Search"
        />
      </div> */}

      <div className="mt-10">
        <p>
          Copyright ©2024 Sarkar Nayan <br /> All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Header;

/**
 * urls: https://www.npmjs.com/package/react-lazy-load-image-component
 */
