import React from "react"

import Layout from "../components/templates/Layout/layout"
import SEO from "../components/atoms/Seo/seo"
import Hero from "../components/organisms/Hero/Hero"
import Premieres from "../components/organisms/Premieres/Premieres"
import PostList from "../components/organisms/PostList/PostList";
import PageDescription from "../components/molecules/PageDescription/PageDescription";
import Banner from "../components/molecules/Banner/Banner";
import Artists from "../components/organisms/Artists/Artists";
import Newsletter from "../components/organisms/Newsletter/Newsletter";
import Contact from "../components/organisms/Contact/Contact";
import Authors from "../components/organisms/Authors/Authors";
import Repertoire from "../components/organisms/Repertoire/Repertoire";

const IndexPage = ({ location }) => (

  <Layout location={location}>
    <SEO 
      title="Metodyki CSS - Atomic Design" 
      keywords={[`css`, `metodyki css`, `atomic design`, `bem css`, `css methodologies`]} 
    />
    <Hero />
    <PostList isFeatured type="featured-posts" />
    <Repertoire />
    <Premieres />
    <Artists />
    <PostList type="posts" />
    <Banner title="O musicalu" />
    <PageDescription />
    <Newsletter />
    <Authors />
    <Contact />
  </Layout>
)

export default IndexPage
