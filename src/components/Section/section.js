import PropTypes from "prop-types"
import React from "react"

const Section = ({sectionName, children}) => (
  <section className={`section section--${sectionName}`} id={sectionName}>
    <div className="section__content">
      {children}
    </div>
  </section>
)

Section.propTypes = {
  sectionName: PropTypes.string,
  children: PropTypes.node.isRequired,
}

Section.defaultProps = {
  siteTitle: ``,
}

export default Section
