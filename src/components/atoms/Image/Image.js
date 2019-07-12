import React from "react"

const Image = ({ src, alt, extraClass }) => (
  <img
    className={`a-img ${extraClass ? extraClass : ''}`}
    alt={alt}
    src={src}
  />
)

export default Image
