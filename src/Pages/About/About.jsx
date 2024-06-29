import React from "react";
import "./About.css";
import LinkBox from "../../Shared/LinkBox/LinkBox";

import aboutImage from "../../assets/Nayan.jpg";

const About = () => {
  return (
    <div className="overflow-hidden">
      <div className="m-28">
        <LinkBox text1={"About"} />
        {/* <h1 className="my-10 text-3xl text-white font-bold">About Me</h1> */}
        <h1 className="my-10 pageTitle">About Me</h1>

        <img className="h-[650px] w-full" src={aboutImage} alt="" />
        <h1 className="my-10 topicTitle">Sarkar Nayan</h1>
        {/* <p></p> */}
        {/* <hr /> */}
        <p className="dag"></p>
      </div>
    </div>
  );
};

export default About;
