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
    return (
      data.allMenuJson.edges.map(item => {
        return (
          <li>{item.node.title}</li>
        )
      })
    );
  }

  return (
    <StaticQuery
      query={graphql`
        query menuQuery {
          allMenuJson {
            edges {
              node {
                title,
                link
              }
            }
          }
        }
      `}
      render={data => (
        <>
        <ul>{getMenuItems(data)}</ul>
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
