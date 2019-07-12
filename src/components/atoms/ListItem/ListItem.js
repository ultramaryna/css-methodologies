import React from "react"

const ListItem = ({ children, extraClass, onClick, show }) => (
  <li className={`a-listItem ${extraClass ? extraClass : ''}`} onClick={() => onClick(show)}>
      {children}
  </li>
)

export default ListItem
