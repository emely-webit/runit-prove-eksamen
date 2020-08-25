import React from "react";
import Header from "./header/Header";
import NextRun from "./NextRun";
import Newsletter from "./Newsletter";
import RandomSpons from "./RandomSpons";
import Footer from "./Footer";

import "./layout.scss";
import LayoutLogo from "../../image/logo.jpg";

const Layout = (props) => {
  return (
    <div className="row m-0 background-image">
      <section className="col-9 p-0">
        <Header />
        <img
        className="img-fluid pl-3 pt-4"
          src={LayoutLogo}
          alt="Runit logo hvidt og sort med en rød baggrund"
        />
        <main>{props.children}</main>
      </section>
      <section className="col-3 p-0">
        <NextRun />
        <Newsletter />
        <RandomSpons />
      </section>
      <Footer />
    </div>
  );
};

export default Layout;
