import React from "react";
import "./About.css";
import LinkBox from "../../Shared/LinkBox/LinkBox";

import aboutImage from "../../assets/Nayan.jpg";
import BioData from "./BioData/BioData";
import DownloadCV from "./DownLoadCV/DownloadCV";
import SkillLoading from "./SkillLoading/SkillLoading";
import KnowladgeInterest from "./KnowladgeInterest/KnowladgeInterest";
import EducationExperience from "./EducationExperience/EducationExperience";

const About = () => {
  return (
    <div className="overflow-hidden">
      <div className="pageMargin">
        <LinkBox text1={"About"} />
        {/* <h1 className="my-10 text-3xl text-white font-bold">About Me</h1> */}
        <h1 className="my-10 pageTitle">About Me</h1>

        <img className="h-[650px] w-full" src={aboutImage} alt="" />

        <div className="my-10">
          <h1 className=" topicTitle">Sarkar Nayan</h1>
          <p className="font-bold">
            Web Designer & Developer, Graphics & UI UX designer.
          </p>
        </div>

        <div className="dag"></div>
        <div className="text-[18px] my-10">
          <p>
            Hi, my name is Adriano Smith and I began using WordPress when it
            first began. I’ve spent most of my waking hours for the last ten
            years designing, programming and operating WordPress sites.
          </p>
          <p>
            One of my specialties is taking an idea from scratch and creating a
            full-fledged platform. I go beyond to produce sites with a unique,
            outstanding, contemporary look-and-feel. With extensive knowledge of
            web mechanics, I’m able to optimize complex integrations to require
            little-to-no maintenance while running on their own for years.
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

        <div className="my-10">
          <KnowladgeInterest />
        </div>

        {/* <SkillLoading /> */}
      </div>

      {/* <div className="bg-[#222222] p-36"> */}
      <div className="bg-[#222222] p-10">
        <EducationExperience />
      </div>
    </div>
  );
};

export default About;
