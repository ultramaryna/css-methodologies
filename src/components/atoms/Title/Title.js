import PropTypes from "prop-types"
import React from "react"
import styles from "./styles.scss";

const Title = ({ variant, children, level, extraClass }) => {
  const classes = `a-title -${variant} ${extraClass ? extraClass : ''}`;
  if (level === "2") {
    return (
      <h2 className={classes}>
        {children}
      </h2>
    )
  } else {
    return (
      <h1 className={classes}>
        {children}
      </h1>
    )
  }
}

Title.defaultProps = {
  variant: `main`
}

export default Title
