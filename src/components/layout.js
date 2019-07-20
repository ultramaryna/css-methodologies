import React from "react"
import PropTypes from "prop-types"
import GlobalStyle from "../styles/global";

import Header from './App/Header/index';
import Footer from './App/Footer/index';

const Layout = ({ children }) => {

  return (
    <React.Fragment>
      <GlobalStyle />
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
