import React from 'react';
import { graphql } from "gatsby";
import rehypeReact from "rehype-react"
import Layout from '../layout';
import SEO from "../../atoms/Seo/seo";
// import AuthorInfo from '../AuthorInfo/authorInfo';
import DecoratedImage from '../../atoms/DecoratedImage/DecoratedImage';
import "./styles.scss";

import CustomLink from '../../atoms/CustomLink/CustomLink';
// import Lead from './components/Lead/lead';
import Subtitle from "../../atoms/Subtitle/Subtitle";
import Title from "../../atoms/Title/Title";
import Image from "../../atoms/Image/Image";

export default class BlogPost extends React.Component {

  render() {
      console.log(this.props);
    const { data: { markdownRemark: post, authorsJson: author } } = this.props;
    const { title, type, mainImage } = post.frontmatter;

    const renderAst = new rehypeReact({
      createElement: React.createElement,
      components: {
        "custom-link": CustomLink,
        // "lead": Lead,
        "subheading": Subtitle,
        "custom-image": Image
      },
    }).Compiler

    return (
      <Layout location={this.props.location}>
        <SEO title={title} description={post.excerpt}/>
        <article className={`t-post post--${type}`}>
          <div
            className="t-post_banner"
            style={{backgroundImage: `url(../../${type === 'article' ? mainImage : ''})`}}
          >
            {type === 'artist' &&
              <DecoratedImage src={`../../${mainImage}`} alt={title} />
            }
            <Title extraClass="t-post_title">{post.frontmatter.title}</Title>
          </div>
          <div className="t-post_content">
            {renderAst(post.htmlAst)}
          </div>
        </article>
        {/* <AuthorInfo author={author} type={type} /> */}
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
            author
        }
    }
}`