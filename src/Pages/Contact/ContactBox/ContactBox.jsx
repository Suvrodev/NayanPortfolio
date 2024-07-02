import React from "react";

import flag from "../../../assets/Map/bgFlag.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PinterestIcon from "@mui/icons-material/Pinterest";
import GitHubIcon from "@mui/icons-material/GitHub";
import { FaDribbble, FaBehance } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ContactBox = () => {
  const navigate = useNavigate();
  const goLink = (link) => {
    window.open(link, "_blank");
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 shadow-md gap-4 text-white">
      <div className="border py-8 px-6">
        <h1 className="text-2xl font-bold text-white">Location</h1>
        <div className="mt-4">
          <img src={flag} alt="" className="w-[35px]" />
        </div>
        <p className="text-white mt-8">
          15/1 Bagmara Government Primary School, Khulna Sadar-9100,
          Bangladesh.​
        </p>
      </div>

      <div className="border py-8 px-6">
        <h1 className="text-2xl font-bold text-white">Contact us</h1>
        <div className="mt-8 flex flex-col gap-2 ">
          <h1 className="text-[18px] ">
            15/1 Bagmara Government Primary School, Khulna Sadar-9100,
            Bangladesh.​
          </h1>
          <h1 className="text-[18px] ">Email: me@sarkarnayan.com</h1>
        </div>
      </div>

      <div className="border py-8 px-6">
        <h1 className="text-2xl font-bold text-white">Our Hours</h1>
        <div className="mt-8 flex flex-col gap-2 ">
          <h1 className="text-[18px] ">Working Time:</h1>
          <h1 className="text-[18px] ">Monday – Friday from 10am to 10pm</h1>
        </div>
      </div>
      <div className="border py-8 px-6">
        <h1 className="text-2xl font-bold text-white">Social</h1>
        <div className="mt-8 flex gap-2 ">
          <div
            className="w-[40px] h-[40px] flex items-center justify-center rounded-md bg-[#3B5998]"
            onClick={() => goLink("https://www.facebook.com/sarkarnayans")}
          >
            <FacebookIcon />
          </div>
          <div
            className="w-[40px] h-[40px] flex items-center justify-center rounded-md bg-[#E4447A]"
            onClick={() => goLink("https://www.instagram.com/sarkarnayans/")}
          >
            <InstagramIcon />
          </div>
          <div
            className="w-[40px] h-[40px] flex items-center justify-center rounded-md bg-[#33AAF3]"
            onClick={() => goLink("https://twitter.com/sarkarnayans")}
          >
            <TwitterIcon />
          </div>
          <div
            className="w-[40px] h-[40px] flex items-center justify-center rounded-md bg-[#1984BC]"
            onClick={() => goLink("https://www.linkedin.com/in/sarkarnayans/")}
          >
            <LinkedInIcon />
          </div>
          <div
            className="w-[40px] h-[40px] flex items-center justify-center rounded-md bg-[#C31F31]"
            onClick={() => goLink("https://www.pinterest.com/sarkarnayans")}
          >
            <PinterestIcon />
          </div>
          <div
            className="w-[40px] h-[40px] flex items-center justify-center rounded-md bg-[#E04B85]"
            onClick={() => goLink("https://dribbble.com/sarkarnayans")}
          >
            <FaDribbble />
          </div>
          <div
            className="w-[40px] h-[40px] flex items-center justify-center rounded-md bg-[#EFB95F]"
            onClick={"https://www.behance.net/sarkarnayans"}
          >
            <FaBehance />
          </div>
          <div
            className="w-[40px] h-[40px] flex items-center justify-center rounded-md bg-[#222222]"
            onClick={() => goLink("https://github.com/nayansarkars")}
          >
            <GitHubIcon />
          </div>
          <div
            className="w-[40px] h-[40px] flex items-center justify-center rounded-md bg-[#3AD775]"
            onClick={() => goLink("https://wa.me/message/V3FSQYVKY6HQL1")}
          >
            <WhatsAppIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactBox;
