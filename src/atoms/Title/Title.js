import PropTypes from "prop-types"
import React from "react"
import styles from "./styles.scss";

const Title = ({ variant, children }) => (
  <h1 className={`title ${variant}`}>
    {children}
  </h1>
)

Title.defaultProps = {
  variant: `main`
}

export default Title