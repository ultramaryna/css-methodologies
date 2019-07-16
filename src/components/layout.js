import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { Normalize } from "styled-normalize";
import GlobalStyle from "../styles/global";

const Layout = ({ children }) => {

  return (
    <React.Fragment>
      <Normalize />
      <GlobalStyle />
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
