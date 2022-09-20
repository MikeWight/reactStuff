import { Outlet } from "react-router-dom";
import React from "react";
import NavBarThing from "./NavBarThing";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {

  return (
    <>
      <NavBarThing />
      <div className="main-wrapper">
        <Outlet />
      </div>
    </>
  );
}
