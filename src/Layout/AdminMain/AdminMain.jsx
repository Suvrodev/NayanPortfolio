import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "../../Shared/Header/Header/Header";
import MobileHeader from "../../Shared/Header/Header/MobileHeader/MobileHeader";
import AdminHeader from "../../AdminPages/Shared/AdminHeader/AdminHeader/AdminHeader";

const AdminMain = () => {
  const navigate = useNavigate("");
  // useEffect(() => {
  //   navigate("/admin/login");
  // }, []);
  return (
    <div className="cursoranim">
      <div className="flex">
        <div className="w-full md:w-[75%] bg-[#333333]">
          <div className="md:hidden">
            <MobileHeader />
          </div>
          <Outlet />
        </div>
        <div className="w-[25%] hidden md:block ">
          <AdminHeader />
        </div>
      </div>
    </div>
  );
};

export default AdminMain;
