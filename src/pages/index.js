import React from "react"

import Layout from "../components/Layout/layout"
import SEO from "../components/Seo/seo"
import Section from "../components/Section/Section"
import Hero from "../components/Hero/hero"
import Posts from "../components/Posts/posts"
import Premieres from "../components/Premieres/premieres"
import PageDescription from '../components/PageDescription/pageDescription'
import Artists from '../components/Artists/artists'
import Newsletter from '../components/Newsletter/newsletter'
import Authors from '../components/Authors/authors'
import Contact from '../components/Contact/contact'
import Repertoire from '../components/Repertoire/repertoire';

const IndexPage = ({ location }) => {

  return (
    <Layout location={location}>
      <SEO title="Metodyki CSS - BEM" keywords={[`css`, `metodyki css`, `bem`, `bem css`, `css methodologies`]}/>
      <Hero/>
      <Section sectionName="featured-posts">
        <Posts version="vertical" isFeatured />
      </Section>
      <Section sectionName="repertoire">
        <Repertoire />
      </Section>
      <Section sectionName="premieres">
        <Premieres />
      </Section>
      <Section sectionName="artists">
        <Artists />
      </Section>
      <Section sectionName="posts">
        <Posts version="horizontal" />
      </Section>
      <Section sectionName="banner">
        <h2 className="heading heading--main section__title">O musicalu</h2>
      </Section>
      <Section sectionName="description">
        <PageDescription />
      </Section>
      <Section sectionName="newsletter">
        <Newsletter />
      </Section>
      <Section sectionName="authors">
        <Authors />
      </Section>
      <Section sectionName="contact">
        <Contact />
      </Section>
    </Layout>
  );
}

export default IndexPage
