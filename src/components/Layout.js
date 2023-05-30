import React from "react";
import Navbar from "./Navbar";
import "../styles/global.css";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Navbar />
      <div className="content">{children}</div>
      <p>Copyright 2023 Web Warrior</p>
      <footer></footer>
    </div>
  );
};

export default Layout;
