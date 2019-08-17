import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { StyledMenu, MenuLink, MenuList, MenuItem } from './styles';

const Menu = ({ isOpen }) => {

  function renderMenu(data) {
    return (
      data.allMenuJson.edges.map(item => {
        return (
          <MenuItem key={item.node.title}>
            <MenuLink to={item.node.link}>
              {item.node.title}
            </MenuLink>
          </MenuItem>
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
        <StyledMenu isOpen={isOpen}>
          <MenuList>
            {renderMenu(data)}
          </MenuList>
        </StyledMenu>
      )}
    />
  )
}

export default Menu;
