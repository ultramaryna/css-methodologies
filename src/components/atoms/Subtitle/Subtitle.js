import React from "react"

const Subtitle = ({ level, isDecorative, isLowercase, children, color, extraClass }) => {
  const classes = `a-subtitle ${isLowercase ? '-lowercase' : ''} ${extraClass ? extraClass : ''}`;
  const content = color === 'none'
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
  color: `grey`,
  level: 2
}

export default Subtitle
