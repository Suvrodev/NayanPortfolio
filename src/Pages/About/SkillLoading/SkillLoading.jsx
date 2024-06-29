import React from "react";
import "./SkillLoading.css";

const SkillLoading = () => {
  const a = ["a", "b", "c"];
  const b = [50, 75, 90];
  return (
    <div>
      <progress
        className="progress progress-white w-56"
        value={70}
        max="100"
      ></progress>
    </div>
  );
};

export default SkillLoading;
