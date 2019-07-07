import React from "react"
import { Link } from "gatsby"

import Layout from "../components/templates/layout"
import SEO from "../components/atoms/Seo/seo"
import Hero from "../components/organisms/Hero/Hero"
import Premieres from "../components/organisms/Premieres/Premieres"
import PostList from "../components/organisms/PostList/PostList";

const IndexPage = ({ location }) => (

  <Layout location={location}>
    <SEO 
      title="Metodyki CSS - Atomic Design" 
      keywords={[`css`, `metodyki css`, `atomic design`, `bem css`, `css methodologies`]} 
    />
    <Hero />
    <PostList isFeatured type="featured-posts" />
    <Premieres />
    <PostList type="posts" />
  </Layout>
)

export default IndexPage
