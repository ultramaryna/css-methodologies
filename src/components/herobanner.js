import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const HeroBanner = () => (
  <div className="hero">
    <div className="hero__content">
      <h1 className="heading--main hero__title">Nowa scena w Krakowie</h1>
      <Link to="/" className="btn btn-primary hero__read-more">Czytaj</Link>
    </div>
    <button type="button" className="hero__scroll" />
  </div>
)

HeroBanner.propTypes = {
  siteTitle: PropTypes.string,
}

HeroBanner.defaultProps = {
  siteTitle: ``,
}

export default HeroBanner
