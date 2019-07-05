import PropTypes from "prop-types"
import React from "react"
import styles from "./styles.scss";

const Title = ({ variant, children, extraClass }) => (
  <h1
    className={`a-title -${variant} ${extraClass ? extraClass : ''}`}
  >
    {children}
  </h1>
)

Title.defaultProps = {
  variant: `main`
}

export default Title
