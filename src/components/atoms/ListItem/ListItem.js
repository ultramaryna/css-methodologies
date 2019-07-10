import React from "react"
import "./styles.scss";

const ListItem = ({ children, extraClass, onClick, show }) => (
  <li className={`a-listItem ${extraClass ? extraClass : ''}`} onClick={() => onClick(show)}>
      {children}
  </li>
)

export default ListItem
