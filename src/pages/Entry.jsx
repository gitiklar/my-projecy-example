import React from "react";
import { NavLink } from "react-router-dom";
import { SmileOutlined } from "@ant-design/icons";

import logoImg from "../styles/images/logo.jpg";

export default () => {
  return (
    <div className="entry">
      <header className="header">
        <NavLink to="/">
          <img src={logoImg} alt="logo" />
        </NavLink>
        <h1>Our new website</h1>
        <NavLink to="/main" className="entry">
          <u>entry</u>
        </NavLink>
      </header>
      <div className="heading"></div>
      <div className="wrapper">
        <div className="entryPage">
          <h1> Wellcome to our new website </h1>
          <h2>
            Hope you will enjoy from our new site <SmileOutlined />
          </h2>
        </div>
      </div>
    </div>
  );
};
