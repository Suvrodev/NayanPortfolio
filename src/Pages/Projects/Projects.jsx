import React, { useContext, useEffect, useState } from "react";
import LinkBox from "../../Shared/LinkBox/LinkBox";
import ProjectBox from "./ProjectBox/ProjectBox";
import pageTitle from "../../JS/pageTitle";
import { Link } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../Provider/AuthProvider";

const Projects = ({ isAdmin }) => {
  const { baseUrl } = useContext(AuthContext);
  pageTitle("Project");
  const [projects, setProjects] = useState([]);

  const [getDep, setGetDep] = useState(true);
  useEffect(() => {
    axios.get(`${baseUrl}/projects`).then((res) => {
      setProjects(res.data);
    });
  }, [getDep]);

  // console.log("projects: ", projects);
  return (
    <div>
      <div className="m-4 md:m-16">
        <LinkBox text1={"Home"} text2={"Projects"} />
      </div>

      <div className="m-4 md:m-16">
        <h1 className="text-4xl font-bold text-white">Projects</h1>
        <div className={`${isAdmin ? "" : "hidden"} mt-10`}>
          <Link to={`/dashboard/project/addproject`}>
            {" "}
            <button className="btn btn-primary text-white">Add Project</button>
          </Link>
        </div>
        <div className="my-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {projects.map((project, idx) => (
              <ProjectBox
                key={idx}
                project={project}
                isAdmin={isAdmin}
                getDep={getDep}
                setGetDep={setGetDep}
              ></ProjectBox>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
