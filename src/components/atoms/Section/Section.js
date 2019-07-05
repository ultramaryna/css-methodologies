import React from "react"
import styles from "./styles.scss";

const Section = ({ children, type, extraClass }) => (
  <section className={`a-section -${type} ${extraClass ? extraClass : ''}`}>
    <div className="content">
      {children}
    </div>
  </section>
)

export default Section
