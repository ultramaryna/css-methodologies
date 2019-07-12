import React from "react"
import { Link } from "gatsby"

const MenuItem = ({ link, title }) => (
  <li className="a-menuItem">
    <Link to={link} className="a-menuItem_link">
      {title}
    </Link>
  </li>
)

export default MenuItem
