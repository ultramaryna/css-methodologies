import React from "react"
import styles from "./styles.scss";

const Text = ({ children, extraClass }) => (
  <p className={`a-text ${extraClass ? extraClass : ''}`}>
    {children}
  </p>
)

export default Text
