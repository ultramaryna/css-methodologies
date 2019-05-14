import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroBanner from "../components/herobanner"

const IndexPage = ({ location }) => (

  <Layout location={location}>
    <SEO title="Metodyki CSS - BEM" keywords={[`css`, `metodyki css`, `bem`, `bem css`, `css methodologies`]} />
    <HeroBanner/>
  </Layout>
)

export default IndexPage
