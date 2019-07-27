import React from 'react';
import { graphql } from "gatsby";
import Layout from '../../layout';
import SEO from '../../seo';
import { Container } from './styles';

import Banner from './components/Banner/index';
import Content from './components/Content/index';
import Author from '../Author/index';
import Section from '../../shared/Section';
import Wrapper from '../../shared/Wrapper';

export default class BlogPost extends React.Component {

  render() {
    const { data: { markdownRemark: post, authorsJson: author } } = this.props;
    const { title, date, mainImage, type } = post.frontmatter;
    const { location } = this.props;

    return (
      <Layout location={this.props.location}>
        <SEO title={title} description={post.excerpt}/>
        <Banner type={type} image={mainImage} title={title} />
        <Container>
          <Content content={post.htmlAst} postType={type} />
          <Section color={type === 'article' ? 'teal' : 'greyLight'}>
            <Author author={author} isStandalone />
          </Section>
        </Container>
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
            date(formatString: "DD.MM.YYYY"),
            type,
            mainImage,
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
