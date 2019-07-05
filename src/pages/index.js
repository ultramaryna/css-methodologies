import React from "react"
import { Link } from "gatsby"

import Layout from "../components/templates/layout"
import SEO from "../components/atoms/Seo/seo"
import Hero from "../components/organisms/Hero/Hero"
import Premieres from "../components/organisms/Premieres/Premieres"

const IndexPage = ({ location }) => (

  <Layout location={location}>
    <SEO title="Metodyki CSS - BEM" keywords={[`css`, `metodyki css`, `bem`, `bem css`, `css methodologies`]} />
    <Hero />
    <Premieres />
  </Layout>
)

export default IndexPage
