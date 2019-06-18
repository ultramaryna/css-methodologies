import React from 'react';
import { Link, graphql } from "gatsby";
import rehypeReact from "rehype-react"
import Layout from '../Layout/layout';
import SEO from '../Seo/seo';

import PostLink from './components/PostLink/postLink';
import Lead from './components/Lead/lead';
import Subheading from './components/Subheading/subheading';
import PostImage from './components/PostImage/postImage';

export default class BlogPost extends React.Component {

  render() {
    const { data: { markdownRemark: post } } = this.props;
    const { title, date, type } = post.frontmatter;
    const { location } = this.props;

    const renderAst = new rehypeReact({
      createElement: React.createElement,
      components: {
        "custom-link": PostLink,
        "lead": Lead,
        "subheading": Subheading,
        "custom-image": PostImage
      },
    }).Compiler

    return (
      <Layout location={this.props.location}>
        <SEO title={title} description={post.excerpt}/>
        <article className={`post post--${type}`}>
          <div className="post__banner" style={{backgroundImage: `url(${post.frontmatter.mainImage})`}}>
            <h1 className="heading heading--main post__title">{post.frontmatter.title}</h1>
          </div>
          <div className="post__content">
            {renderAst(post.htmlAst)}
          </div>
        </article>
      </Layout>
    )
  }
}

export const query = graphql`
query PostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
        htmlAst
        excerpt
        frontmatter {
            title
            date(formatString: "DD.MM.YYYY")
            type
            mainImage
        }
    }
}`
