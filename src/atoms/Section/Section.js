import React from "react"
import styles from "./styles.scss";

const Section = ({ children, type }) => (
  <section className={`section ${type}`}>
    {children}
  </section>
)

export default Section
