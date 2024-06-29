import React, { useEffect } from "react";
import "./SkillLoading.css"; // Ensure you have this line if you're planning to use external CSS

const skills = {
  Wordpress: "100%",
  Webdesign: "90%",
  Webdevelopmen: "70%",
  GraphicsDesign: "55%",
  Uiuxdesign: "65%",
  seo: "70%",
};

const SkillBar = ({ skill, percentage, delay }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      document.getElementById(`${skill}-percent`).innerHTML = percentage;
      document.getElementById(`progress-${skill}`).style.width = percentage;
    }, delay);

    return () => clearTimeout(timer);
  }, [skill, percentage, delay]);

  return (
    <li className="skillBar">
      <div className="progressBarTitle">
        <h3>{skill.toUpperCase()}</h3>
        <span className="percent" id={`${skill}-percent`}></span>
      </div>
      <div className="barContainer">
        <span className="progressBar" id={`progress-${skill}`}></span>
      </div>
    </li>
  );
};

const App = () => {
  let delay = 700;
  let multiplier = 4;

  return (
    <ul className="skillsBarContainer">
      {Object.entries(skills).map(([skill, percentage]) => (
        <SkillBar
          key={skill}
          skill={skill}
          percentage={percentage}
          delay={delay * multiplier++}
        />
      ))}
    </ul>
  );
};

export default App;
