import React from "react"
import styles from "./styles.scss";

const Section = ({ children, type }) => (
  <section className={`section ${type}`}>
    <div className="content">
      {children}
    </div>
  </section>
)

export default Section
