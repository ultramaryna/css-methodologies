import React from "react"
import Subtitle from "../components/shared/Subtitle";
import Hero from "../components/App/Hero/index";
import Posts from "../components/App/Posts/index";

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ location }) => (

  <Layout location={location}>
    <SEO title="Metodyki CSS - CSS in JS" keywords={[`css`, `metodyki css`, `css in js`, `styled components`, `css methodologies`]} />
    <Hero />
    <Posts isFeatured />
    <Posts version="horizontal" />
    <Subtitle color="teal">
      <span>Jestem podtytułem!</span>
    </Subtitle>
  </Layout>
)

export default IndexPage
