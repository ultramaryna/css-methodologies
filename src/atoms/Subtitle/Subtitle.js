import PropTypes from "prop-types"
import React from "react"
import styles from "./styles.scss";

const Subtitle = ({ level, isDecorative, children, color }) => {
  const content = <span className={`content ${color}`}>{children}</span>

  if (level === 3) {
    return (
      <h3 className="subtitle">
        {content}
      </h3>
    )
  }

  return (
    <h2 className="subtitle">
      {content}
    </h2>
  )
}

Subtitle.defaultProps = {
  color: `grey`,
  level: 2
}

export default Subtitle
