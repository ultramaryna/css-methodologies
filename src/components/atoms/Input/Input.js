import React from "react"
import styles from "./styles.scss";

const Input = ({ type, placeholder, extraClass }) => (
  <input
    className={`a-input ${extraClass ? extraClass : ''}`}
    placeholder={placeholder}
  />
)

export default Input
