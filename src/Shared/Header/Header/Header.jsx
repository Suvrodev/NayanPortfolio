import React from "react";
import { Link, NavLink } from "react-router-dom";
import logoImage from "../../../assets/HeaderImage/Logo.png";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PinterestIcon from "@mui/icons-material/Pinterest";
import GitHubIcon from "@mui/icons-material/GitHub";
import { FaDribbble, FaBehance } from "react-icons/fa";

import goLink from "../../../JS/goLink";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Header = () => {
  return (
    <div className="bg-[#222222] h-[100vh] text-white pl-16 overflow-hidden sticky top-0 shadow-blue-400 shadow-md">
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
          className={({ isActive }) => (isActive ? "acLk" : "acLk ")}
          to="/home"
        >
          Home
        </NavLink>

        <NavLink
          className={({ isActive }) => (isActive ? "acLk " : "lk ")}
          to="/service"
        >
          Service
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            isActive ? "acLk font-extrabold" : "lk"
          }
          to="/portfolio"
        >
          Portfolio
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            isActive ? "acLk font-extrabold" : "lk"
          }
          to="/about"
        >
          About
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            isActive ? "acLk font-extrabold" : "lk"
          }
          to="/gigs"
        >
          Gigs
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            isActive ? "acLk font-extrabold" : "lk"
          }
          to="/project"
        >
          Project
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            isActive ? "acLk font-extrabold" : "lk"
          }
          to="/blogs"
        >
          Blog
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            isActive ? "acLk font-extrabold" : "lk"
          }
          to="/contact"
        >
          Contact
        </NavLink>
      </div>

      {/* Icon Start */}
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
          onClick={() => goLink("https://www.linkedin.com/in/sarkarnayans/")}
        >
          <LinkedInIcon />
        </Link>
        <Link to="" onClick={() => goLink("https://github.com/nayansarkars")}>
          <GitHubIcon />
        </Link>
        <Link
          to=""
          onClick={() => goLink("https://www.behance.net/sarkarnayans")}
        >
          <FaBehance />
        </Link>
        <Link to="" onClick={() => goLink("https://dribbble.com/sarkarnayans")}>
          <FaDribbble />
        </Link>
        <Link
          to=""
          onClick={() => goLink("https://www.pinterest.com/sarkarnayans")}
        >
          <PinterestIcon />
        </Link>

        <Link
          to=""
          onClick={() => goLink("https://wa.me/message/V3FSQYVKY6HQL1")}
        >
          <FaWhatsapp />
        </Link>
      </div>
      {/* Icon end */}

      <div className="pt-10 text-[rgb(204,204,204)] text-[15px]">
        <p>
          <span className="font-bold">Email: </span>{" "}
          <span> me@sarkarnayan.com</span>
        </p>
        <p>
          <span className="font-bold">Phone: </span>{" "}
          <span> +88 01710847819</span>
        </p>
      </div>

      <div className="mt-[20px] text-[#cccccc] text-[15px]">
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
