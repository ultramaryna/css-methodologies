import React from "react"
import { Link } from "gatsby"
import styles from "./styles.scss";

const CustomLink = ({ title, href, children }) => (
  <Link to="" className="link">
    {children}
  </Link>
)

export default CustomLink
