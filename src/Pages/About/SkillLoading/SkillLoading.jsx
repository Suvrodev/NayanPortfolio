import React, { useEffect, useRef } from "react";
import "./SkillLoading.css";
import Progressbar from "./Progressbar/Progressbar";

const SkillLoading = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-white my-10">Skill</h1>
      <div className="flex gap-14">
        <div className="flex flex-col gap-5">
          <Progressbar title={"Wordpress"} percentage={90} />
          <Progressbar title={"Web design"} percentage={85} />
          <Progressbar title={"Web development"} percentage={78} />
        </div>
        <div className="flex flex-col gap-5">
          <Progressbar title={"Graphics Design"} percentage={97} />
          <Progressbar title={"Ui ux design"} percentage={89} />
          <Progressbar title={"Seo "} percentage={70} />
        </div>
      </div>
    </div>
  );
};

export default SkillLoading;
