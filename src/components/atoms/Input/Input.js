import React from "react"
import styles from "./styles.scss";

const Input = ({ type, color, placeholder, extraClass }) => (
  <input
    className={`a-input -${color} ${extraClass ? extraClass : ''}`}
    placeholder={placeholder}
  />
)

export default Input
