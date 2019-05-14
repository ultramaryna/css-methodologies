import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Section from "../components/Section"
import HeroBanner from "../components/herobanner"
import Posts from "../components/posts"

const IndexPage = ({ location }) => (

  <Layout location={location}>
    <SEO title="Metodyki CSS - BEM" keywords={[`css`, `metodyki css`, `bem`, `bem css`, `css methodologies`]} />
    <HeroBanner/>
    <Section sectionName="featured-posts">
      <Posts/>
    </Section>
  </Layout>
)

export default IndexPage
