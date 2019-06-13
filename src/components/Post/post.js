import React from 'react';
import { Link, graphql } from "gatsby";
import Layout from '../layout';
import SEO from '../seo';

export default class BlogPost extends React.Component {

  render() {
    const { data: { markdownRemark: post } } = this.props;
    const { title, date } = post.frontmatter;
    const { location } = this.props;

    console.log(post);

    return (
      <Layout location={this.props.location}>
        <SEO title={title} description={post.excerpt}/>
        <article className="post">
          <p>Aha</p>
        </article>
      </Layout>
    )
  }
}

export const query = graphql`
query PostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
        html
        excerpt
        frontmatter {
            title
            date(formatString: "DD.MM.YYYY"),
        }
    }
}`
