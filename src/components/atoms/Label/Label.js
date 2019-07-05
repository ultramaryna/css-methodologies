import PropTypes from "prop-types"
import React from "react"
import styles from "./styles.scss";

const Label = ({ input, children }) => (
  <label htmlFor={input} className="a-label">
    {children}
  </label>
)

export default Label
