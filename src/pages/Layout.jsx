import React from "react";
import { Link, Outlet } from "react-router-dom";

import logoImg from "../styles/images/logo.jpg";

export default () => {
  return (
    <div className="layout">
      <header className="header">
        <Link to="/">
          <img src={logoImg} alt="logo" />
        </Link>
        <div className="divHello">
          <span> &nbsp; &nbsp; Hello guest &nbsp;</span>
        </div>
      </header>
      <div className="heading">
        <div className="menuLine">
          <Link to="/">Back to entry</Link>
          <Link to="home">Home</Link>
        </div>
      </div>
      <section className="main">
        <div className="inner">
          <Outlet />
        </div>
      </section>
    </div>
  );
};
