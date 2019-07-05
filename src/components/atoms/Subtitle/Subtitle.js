import PropTypes from "prop-types"
import React from "react"
import styles from "./styles.scss";

const Subtitle = ({ level, isDecorative, isLowercase, children, color, extraClass }) => {
  const classes = `a-subtitle ${isLowercase ? '-lowercase' : ''} ${extraClass ? extraClass : ''}`;
  const content = !color
    ? children
    : <span className={`a-subtitle_content -${color}`}>{children}</span>;

  if (level === 3) {
    return (
      <h3 className={classes}>
        {content}
      </h3>
    )
  }

  return (
    <h2 className={classes}>
      {content}
    </h2>
  )
}

Subtitle.defaultProps = {
  color: ``,
  level: 2
}

export default Subtitle
