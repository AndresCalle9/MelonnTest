import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import s from "./Layout.module.scss";

import { URL } from "../../pages/_app";

const Layout = ({ children }) => {
  return (
    <div>
      {<Header />}
      {children}
      {<Footer />}
    </div>
  );
};

export default Layout;
