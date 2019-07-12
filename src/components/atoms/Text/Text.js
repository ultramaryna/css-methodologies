import React from "react"

const Text = ({ children, extraClass }) => (
  <p className={`a-text ${extraClass ? extraClass : ''}`}>
    {children}
  </p>
)

export default Text
