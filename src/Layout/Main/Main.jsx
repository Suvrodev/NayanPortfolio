import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../Shared/Header/Header/Header";
import "./Main.css";
import Cursor from "./Cursor/Cursor";

const Main = () => {
  return (
    <div className="cursoranim">
      <div className="flex">
        <div className="w-[25%] ">
          <Header />
        </div>
        <div className="w-[75%] bg-[#333333]">
          <Cursor />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Main;
