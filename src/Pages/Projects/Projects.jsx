import React, { useEffect, useState } from "react";
import LinkBox from "../../Shared/LinkBox/LinkBox";
import ProjectBox from "./ProjectBox/ProjectBox";
import pageTitle from "../../JS/pageTitle";

const Projects = () => {
  pageTitle("Project");
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("/project.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  // console.log("projects: ", projects);
  return (
    <div>
      <div className="m-4 md:m-16">
        <LinkBox text1={"Home"} text2={"Projects"} />
      </div>

      <div className="m-4 md:m-16">
        <h1 className="text-4xl font-bold text-white">Projects</h1>
        <div className="my-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {projects.map((project, idx) => (
              <ProjectBox key={idx} project={project}></ProjectBox>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
