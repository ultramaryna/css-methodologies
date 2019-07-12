import React from "react"

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
