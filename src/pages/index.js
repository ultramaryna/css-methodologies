import React from "react"
import Hero from "../components/App/Hero/index";
import Posts from "../components/App/Posts/index";
import Premieres from '../components/App/Premieres/index';
import Banner from '../components/App/Banner/index';
import SectionText from '../components/App/SectionText/index';
import Newsletter from '../components/App/Newsletter/index';
import Contact from '../components/App/Contact/index';

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ location }) => (

  <Layout location={location}>
    <SEO title="Metodyki CSS - CSS in JS" keywords={[`css`, `metodyki css`, `css in js`, `styled components`, `css methodologies`]} />
    <Hero />
    <Posts isFeatured />
    <Premieres />
    <Posts version="horizontal" />
    <Banner title="O musicalu" />
    <SectionText />
    <Newsletter />
    <Contact />
  </Layout>
)

export default IndexPage
