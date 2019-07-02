import React from "react";
import PropTypes from "prop-types";

import Header from "../Header/header";
import Footer from "../Footer/footer";
import ScrollToTop from "../ScrollToTop/scrollToTop";

const Layout = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
    <ScrollToTop />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;
