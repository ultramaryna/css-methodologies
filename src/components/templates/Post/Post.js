import React from 'react';
import { graphql } from "gatsby";
import rehypeReact from "rehype-react"
import Layout from '../layout';
import SEO from "../../atoms/Seo/seo";
// import AuthorInfo from '../AuthorInfo/authorInfo';
import PostContent from "../../organisms/PostContent/PostContent";
import PostBanner from "../../organisms/PostBanner/PostBanner";
import "./styles.scss";

export default class BlogPost extends React.Component {

  render() {
    const { data: { markdownRemark: post, authorsJson: author } } = this.props;
    const { title, type, mainImage } = post.frontmatter;

    return (
      <Layout location={this.props.location}>
        <SEO title={title} description={post.excerpt}/>
        <article className={`t-post post--${type}`}>
          <PostBanner postType={type} image={mainImage} title={title} />
          <PostContent content={post.htmlAst} postType={type} />
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