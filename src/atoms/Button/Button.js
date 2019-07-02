import PropTypes from "prop-types"
import React from "react"
import styles from "./styles.scss";

const Button = ({ type, variant, onClick, children }) => (
  <button type={type} onClick={onClick} className={`button ${variant}`}>
    {children}
  </button>
)

Button.defaultProps = {
  color: `teal`,
  type: `gradient`
}

export default Button
