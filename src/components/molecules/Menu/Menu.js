import React from "react";
import { StaticQuery, graphql } from "gatsby";
import MenuItem from "../../atoms/MenuItem/MenuItem";

const Menu = ({ isOpen }) => {

  function renderMenu(data) {
    return (
      data.allMenuJson.edges.map(item => {
        return (
          <MenuItem 
            title={item.node.title} 
            link={item.node.link} 
            key={item.node.title}
          />
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
        <nav className={isOpen ? 'm-menu -active' : 'm-menu'}>
          <ul className="m-menu_list">
            {renderMenu(data)}
          </ul>
        </nav>
      )}
    />
  )
}

export default Menu;