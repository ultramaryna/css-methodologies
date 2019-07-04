import React from "react"
import styles from "./styles.scss";

const Image = ({ src, alt, className }) => (
  <img className="img" alt={alt} src={src} className={className} />
)

export default Image
