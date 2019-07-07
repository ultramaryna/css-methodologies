import React from "react"
import { Link } from "gatsby"
import styles from "./styles.scss";

const CustomLink = ({ title, href, children, extraClass }) => (
  <Link to={href} className={`a-link ${extraClass ? extraClass : ''}`}>
    {children}
  </Link>
)

export default CustomLink
