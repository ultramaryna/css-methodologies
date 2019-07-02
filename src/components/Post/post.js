import React from 'react';
import { graphql } from "gatsby";
import rehypeReact from "rehype-react"
import Layout from '../Layout/layout';
import SEO from '../Seo/seo';
import AuthorInfo from '../AuthorInfo/authorInfo';
import DecoratedImage from '../DecoratedImage/decoratedImage';

import PostLink from './components/PostLink/postLink';
import Lead from './components/Lead/lead';
import Subheading from './components/Subheading/subheading';
import PostImage from './components/PostImage/postImage';

export default class BlogPost extends React.Component {

  render() {
    const { data: { markdownRemark: post, authorsJson: author } } = this.props;
    const { title, type, mainImage } = post.frontmatter;

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
          <div
            className="post__banner"
            style={{backgroundImage: `url(../../${type === 'article' ? mainImage : ''})`}}
          >
            {type === 'artist' &&
              <DecoratedImage src={`../../${mainImage}`} alt={title} />
            }
            <h1 className="heading heading--main post__title">{post.frontmatter.title}</h1>
          </div>
          <div className="post__content">
            {renderAst(post.htmlAst)}
          </div>
        </article>
        <AuthorInfo author={author} type={type} />
      </Layout>
    )
  }
}

export const query = graphql`
query PostQuery($slug: String!, $author: String!) {
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
    authorsJson (name: { eq: $author }) {
      name,
      bio,
      image,
      id
    }
}`
