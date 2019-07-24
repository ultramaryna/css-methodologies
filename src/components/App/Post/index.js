import React from 'react';
import { graphql } from "gatsby";
import Layout from '../../layout';
import SEO from '../../seo';
import { Container } from './styles';

import Banner from './components/Banner/index';
import Content from './components/Content/index';

export default class BlogPost extends React.Component {

  render() {
    const { data: { markdownRemark: post } } = this.props;
    const { title, date, mainImage, type } = post.frontmatter;
    const { location } = this.props;

    return (
      <Layout location={this.props.location}>
        <SEO title={title} description={post.excerpt}/>
        <Container>
          <Banner type={type} image={mainImage} title={title} />
          <Content content={post.htmlAst} type={type} />
        </Container>
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
