import React from "react"
import styles from "./styles.scss";

const Section = ({ children, name, extraClass }) => (
  <section
    id={name}
    className={`a-section -${name} ${extraClass ? extraClass : ''}`}
  >
    <div className="a-section_content">
      {children}
    </div>
  </section>
)

export default Section
