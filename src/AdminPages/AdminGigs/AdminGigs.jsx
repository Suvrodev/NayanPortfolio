import React from "react";
import Gigs from "../../Pages/Gigs/Gigs";

const AdminGigs = () => {
  return (
    <div>
      <Gigs isAdmin={true} />
    </div>
  );
};

export default AdminGigs;
