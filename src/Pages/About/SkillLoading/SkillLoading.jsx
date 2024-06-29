// import React, { useEffect } from "react";
// import "./SkillLoading.css"; // Ensure you have this line if you're planning to use external CSS

// const skills = {
//   html: "100%",
//   css: "90%",
//   javascript: "70%",
//   php: "55%",
//   angular: "65%",
// };

// const SkillBar = ({ skill, percentage, delay }) => {
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       document.getElementById(`${skill}-percent`).innerHTML = percentage;
//       document.getElementById(`progress-${skill}`).style.width = percentage;
//     }, delay);

//     return () => clearTimeout(timer);
//   }, [skill, percentage, delay]);

//   const progressBarClass = `progressBar progress${
//     skill.charAt(0).toUpperCase() + skill.slice(1)
//   }`;

//   return (
//     <li className="skillBar">
//       <div className="progressBarTitle">
//         <h3>{skill.toUpperCase()}</h3>
//         <span className="percent" id={`${skill}-percent`}></span>
//       </div>
//       <div className="barContainer">
//         <span className={progressBarClass} id={`progress-${skill}`}></span>
//       </div>
//     </li>
//   );
// };

// const App = () => {
//   let delay = 700;
//   let multiplier = 4;

//   return (
//     <ul className="skillsBarContainer">
//       {Object.entries(skills).map(([skill, percentage]) => (
//         <SkillBar
//           key={skill}
//           skill={skill}
//           percentage={percentage}
//           delay={delay * multiplier++}
//         />
//       ))}
//     </ul>
//   );
// };

// export default App;
