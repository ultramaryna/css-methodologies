import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import GlobalStyle from "../styles/global";

import Header from './App/Header/index';

const Layout = ({ children }) => {

  return (
    <React.Fragment>
      <GlobalStyle />
      <Header />
      <main>
        {children}
      </main>
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
