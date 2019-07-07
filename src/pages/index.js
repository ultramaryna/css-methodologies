import React from "react"
import { Link } from "gatsby"

import Layout from "../components/templates/layout"
import SEO from "../components/atoms/Seo/seo"
import Hero from "../components/organisms/Hero/Hero"
import Premieres from "../components/organisms/Premieres/Premieres"
import PostList from "../components/organisms/PostList/PostList";
import PageDescription from "../components/molecules/PageDescription/PageDescription";
import Banner from "../components/molecules/Banner/Banner";
import Artists from "../components/organisms/Artists/Artists";
import Newsletter from "../components/organisms/Newsletter/Newsletter";
import Contact from "../components/organisms/Contact/Contact";

const IndexPage = ({ location }) => (

  <Layout location={location}>
    <SEO 
      title="Metodyki CSS - Atomic Design" 
      keywords={[`css`, `metodyki css`, `atomic design`, `bem css`, `css methodologies`]} 
    />
    <Hero />
    <PostList isFeatured type="featured-posts" />
    <Premieres />
    <Artists />
    <PostList type="posts" />
    <Banner title="O musicalu" />
    <PageDescription />
    <Newsletter />
    <Contact />
  </Layout>
)

export default IndexPage
