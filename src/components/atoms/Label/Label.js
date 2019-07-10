import React from "react"
import "./styles.scss";

const Label = ({ input, children }) => (
  <label htmlFor={input} className="a-label">
    {children}
  </label>
)

export default Label
