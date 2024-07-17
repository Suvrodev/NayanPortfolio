import React from "react";
import Portfolio from "../../Pages/Portfolio/Portfolio";

const AdminPortfolio = () => {
  return (
    <div>
      <Portfolio isAdmin={true} />
    </div>
  );
};

export default AdminPortfolio;
