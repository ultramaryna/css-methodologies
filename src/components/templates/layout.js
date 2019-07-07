import React from "react";
import PropTypes from "prop-types";

import Header from "../organisms/Header/Header";
import Footer from "../organisms/Footer/Footer";

const Layout = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;
