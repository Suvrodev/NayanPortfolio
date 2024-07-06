import React from "react";
import "./Home.css";

import nayanImage from "../../assets/Nayan.jpg";
import homeImage from "../../assets/homeImage/sarkar_nayan_home.jpg";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import HomeButton from "../../Shared/HomeButton/HomeButton";
import HomeService from "./HomeService/HomeService";
import Testimonial from "../About/Testimonial/Testimonial";
import WeeAccept from "../../Shared/WeeAccept/WeeAccept";

const Home = () => {
  const divStyle = {
    backgroundImage: `url(${homeImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div>
      <div className="flex justify-center items-center mt-60 w-full">
        <div className="flex flex-col md:flex-row gap-10 w-full md:w-[75%] bg-green-500">
          <div className="bg-red-500">
            <div
              className="abs_img  border-8 w-[350px] h-[350px]"
              style={divStyle}
            ></div>
          </div>

          <div className="flex flex-col justify-center gap-6 bg-yellow-300">
            <h1 className="text-4xl font-bold">Sarkar Nayan</h1>
            <p className="text-[20px]">
              Highly motivated and detail-oriented Web Developer with a
              Bachelor's degree in Computer Science and Engineering for 4 years.
              Proficient in PHP, with a deep understanding of the Laravel
              framework. Seeking to leverage my technical skills and passion for
              web development to provide high-quality, user-centric solutions in
              a challenging role. Committed to producing high-quality,
              innovative, and scalable code to drive the success of your team
              and projects.
            </p>
            <div className="flex gap-4 items-center">
              <HomeButton />
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="my-28 w-[75%] mx-auto flex flex-col gap-20">
          <HomeService />
          <Testimonial />
        </div>
        <div className="bg-white p-20">
          <WeeAccept />
        </div>
      </div>
    </div>
  );
};

export default Home;
