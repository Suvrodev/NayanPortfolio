import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../Shared/Header/Header/Header";
import "./Main.css";
import Cursor from "./Cursor/Cursor";

const Main = () => {
  return (
    <div className="cursoranim">
      <div className="flex">
        <div className="w-[25%] hidden md:block ">
          <Header />
        </div>
        <div className="w-full md:w-[75%] bg-[#333333]">
          <div className="hidden md:block">
            <Cursor />
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Main;
