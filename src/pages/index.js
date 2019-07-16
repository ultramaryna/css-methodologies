import React from "react"
import { Link } from "gatsby"
import LinkBtn from '../components/shared/LinkBtn';
import Hero from "../components/App/Hero/index";

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ location }) => (

  <Layout location={location}>
    <SEO title="Metodyki CSS - CSS in JS" keywords={[`css`, `metodyki css`, `css in js`, `styled components`, `css methodologies`]} />
    <Hero />
    <LinkBtn href="#">
      Aha, jestem linkiem
    </LinkBtn>
    <LinkBtn type="decorative">
      A ja jestem bardziej kolorowym linkiem
    </LinkBtn>
  </Layout>
)

export default IndexPage
