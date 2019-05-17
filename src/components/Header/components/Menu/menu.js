import { Link } from "gatsby"
import React from "react"
import { StaticQuery, graphql } from "gatsby"

const Menu = ({ isOpen }) => {

  function renderMenu(data) {
    return (
      data.allMenuJson.edges.map(item => {
        return (
          <li className="menu__item" key={item.node.title}>
            <Link to={item.node.link} title={item.node.title} className="menu__link">
              {item.node.title}
            </Link>
          </li>
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
        <nav className={isOpen ? 'menu menu--active' : 'menu'}>
          <ul className="menu__list">
            {renderMenu(data)}
          </ul>
        </nav>
      )}
    />
  )
}

export default Menu
