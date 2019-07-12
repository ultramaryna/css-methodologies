import React from "react"

const Textarea = ({ id, name, color, placeholder, rows, extraClass }) => (
  <textarea
    id={id}
    name={name}
    className={`a-textarea -${color} ${extraClass ? extraClass : ''}`}
    placeholder={placeholder}
    rows={rows}
  />
)

export default Textarea
