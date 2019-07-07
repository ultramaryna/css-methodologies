import React from "react"
import styles from "./styles.scss";

const Input = ({ id, name,type, color, placeholder, extraClass }) => (
  <input
    type={type}
    id={id}
    name={name}
    className={`a-input -${color} ${extraClass ? extraClass : ''}`}
    placeholder={placeholder}
  />
)

export default Input
