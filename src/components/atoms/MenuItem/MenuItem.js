import React from "react"
import { Link } from "gatsby"
import "./styles.scss";

const MenuItem = ({ link, title }) => (
  <li className="menu-item">
    <Link to={link} className="menu-link">
      {title}
    </Link>
  </li>
)

export default MenuItem
