import PropTypes from "prop-types"
import React from "react"
import styles from "./styles.scss";

const Subtitle = ({ level, isDecorative, isLowercase, children, color }) => {
  console.log(color);
  const content = !color
    ? children
    : <span className={`content ${color}`}>{children}</span>;

  if (level === 3) {
    return (
      <h3 className={`subtitle ${isLowercase ? 'lowercase' : ''}`}>
        {content}
      </h3>
    )
  }

  return (
    <h2 className={`subtitle ${isLowercase ? 'lowercase' : ''}`}>
      {content}
    </h2>
  )
}

Subtitle.defaultProps = {
  color: ``,
  level: 2
}

export default Subtitle
