import React from "react";
import Projects from "../../Pages/Projects/Projects";

const AdminProject = () => {
  return (
    <div>
      <Projects isAdmin={true} />
    </div>
  );
};

export default AdminProject;
