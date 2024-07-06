import React from "react";
import "./About.css";
import LinkBox from "../../Shared/LinkBox/LinkBox";

import aboutImage from "../../assets/aboutImage/sarkar_nayan_about.jpg";
import BioData from "./BioData/BioData";
import DownloadCV from "./DownLoadCV/DownloadCV";
import SkillLoading from "./SkillLoading/SkillLoading";
import KnowladgeInterest from "./KnowladgeInterest/KnowladgeInterest";
import EducationExperience from "./EducationExperience/EducationExperience";
import Testimonial from "./Testimonial/Testimonial";
import WeeAccept from "../../Shared/WeeAccept/WeeAccept";

const About = () => {
  return (
    <div className="overflow-hidden">
      <div className="pageMargin">
        <LinkBox text1={"About"} />
        {/* <h1 className="my-10 text-3xl text-white font-bold">About Me</h1> */}
        <h1 className="my-10 pageTitle">About Me</h1>

        <img
          className="h-[200px] md:h-[650px] w-full"
          src={aboutImage}
          alt=""
        />

        <div className="my-10">
          <h1 className=" topicTitle">Sarkar Nayan</h1>
          <p className="font-bold">
            Web Designer & Developer, Graphics & UI UX designer.
          </p>
        </div>

        <div className="dag"></div>
        <div className="text-[18px] my-10">
          <p>
            Highly motivated and detail-oriented Web Developer with a Bachelor's
            degree in Computer Science and Engineering for 4 years. Proficient
            in PHP, with a deep understanding of the Laravel framework. Seeking
            to leverage my technical skills and passion for web development to
            provide high-quality, user-centric solutions in a challenging role.
            Committed to producing high-quality, innovative, and scalable code
            to drive the success of your team and projects.
          </p>
        </div>

        {/* Dag */}
        <div className="dag"></div>
        <div className="my-10">
          <BioData />
        </div>
        <div className="dag"></div>

        <div className="my-10">
          <DownloadCV />
        </div>
      </div>

      <div className="p-5 md:p-28 bg-[#222222]">
        <SkillLoading />
      </div>

      <div className="p-5 md:px-28 py-20">
        <KnowladgeInterest />
      </div>

      {/* <div className="bg-[#222222] p-36"> */}
      <div className="bg-[#222222] px-5 py-20 ">
        <EducationExperience />
      </div>

      <div className=" px-10 py-20 ">
        <Testimonial />
      </div>

      <div className=" px-10 py-20 bg-white ">
        <WeeAccept />
      </div>
    </div>
  );
};

export default About;
