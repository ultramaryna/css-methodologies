import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"
import styles from "./styles.scss";

const LinkBtn = ({ variant, children, link }) => (
  <Link to={link} className={`button ${variant}`}>
    {children}
  </Link>
)

LinkBtn.defaultProps = {
  color: `teal`,
  type: `gradient`
}

export default LinkBtn
