import React from "react"
import { Link } from "gatsby"
import { StaticQuery, graphql } from "gatsby"

import Layout from "../components/Layout/layout"
import SEO from "../components/Seo/seo"
import Section from "../components/Section/Section"
import Hero from "../components/Hero/hero"
import Posts from "../components/Posts/posts"
import Premieres from "../components/Premieres/premieres";

const IndexPage = ({ location }) => {

  function getDesc(data) {
    return (
      <>
        <h2 className="heading">{data.descriptionJson.title}</h2>
        <p>{data.descriptionJson.text}</p>
      </>
    );
  }

  return (
    <Layout location={location}>
      <SEO title="Metodyki CSS - BEM" keywords={[`css`, `metodyki css`, `bem`, `bem css`, `css methodologies`]}/>
      <Hero/>
      <Section sectionName="featured-posts">
        <Posts version="vertical"/>
      </Section>
      <Section sectionName="premieres">
        <Premieres />
      </Section>
      <Section sectionName="posts">
        <Posts version="horizontal"/>
      </Section>
      <Section sectionName="banner">
        <h2 className="heading heading--main section__title">O musicalu</h2>
      </Section>
      <StaticQuery
        query={graphql`
          query descriptionQuery {
            descriptionJson {
              title,
              text
            }
          }
        `}
        render={data => (
          <Section sectionName="description">
            {getDesc(data)}
          </Section>
        )}
      />
    </Layout>
  );
}

export default IndexPage
