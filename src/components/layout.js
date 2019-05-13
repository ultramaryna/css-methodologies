/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

const Layout = ({ children }) => {

  function getMenuItems(data) {
    console.log(data);
    return (
      data.dataJson.menu.map(item => {
        return (
          <li>{item}</li>
        )
      })
    );
  }

  return (
    <StaticQuery
      query={graphql`
        query menuQuery {
          dataJson {
            menu
          }
        }
      `}
      render={data => (
        <>
        <p>{getMenuItems(data)}</p>
          <main>{children}</main>
          <footer>
          </footer>
        </>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
