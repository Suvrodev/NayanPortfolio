import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const AdminMain = () => {
  const navigate = useNavigate("");
  useEffect(() => {
    navigate("/admin/login");
  }, []);
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default AdminMain;
