import React from "react";
import { Link } from "react-router-dom";
import { SmileOutlined } from "@ant-design/icons";

import logoImg from "../styles/images/logo.jpg";

export default () => {
  return (
    <div className="entry">
      <header className="header">
        <Link to="/">
          <img src={logoImg} alt="logo" />
        </Link>
        <h1>Our new website</h1>
        <Link to="/main" className="entry">
          <u>entry</u>
        </Link>
      </header>
      <div className="heading"></div>
      <section className="wrapper">
        <div className="entryPage">
          <h1> Wellcome to our new website </h1>
          <h2>
            Hope you will enjoy from our new site <SmileOutlined />
          </h2>
        </div>
      </section>
    </div>
  );
};
