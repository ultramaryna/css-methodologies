import React from 'react';
import rehypeReact from "rehype-react";
import { Link, graphql } from "gatsby";
import Layout from '../../layout';
import SEO from '../../seo';
import Subtitle from '../../shared/Subtitle';
import Image from '../../shared/Image';
import CustomLink from '../../shared/CustomLink';
import Banner from './components/Banner/index';

export default class BlogPost extends React.Component {

  render() {
    const { data: { markdownRemark: post } } = this.props;
    const { title, date, mainImage, type } = post.frontmatter;
    const { location } = this.props;

    const renderAst = new rehypeReact({
      createElement: React.createElement,
      components: {
        "custom-link": CustomLink,
        "subheading": Subtitle,
        "custom-image": Image
      },
    }).Compiler

    return (
      <Layout location={this.props.location}>
        <SEO title={title} description={post.excerpt}/>
        <article className="post">
          <Banner type={type} image={mainImage} title={title} />
          {renderAst(post.htmlAst)}
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
            date(formatString: "DD.MM.YYYY"),
            type,
            mainImage
        }
    }
}`
