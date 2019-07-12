import React from "react";

const Label = ({ input, children }) => (
  <label htmlFor={input} className="a-label">
    {children}
  </label>
)

export default Label
