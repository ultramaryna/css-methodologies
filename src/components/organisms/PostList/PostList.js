import React from "react";
import { StaticQuery } from "gatsby";
import "./styles.scss";

import Post from '../../molecules/Post/Post';
import Section from '../../atoms/Section/Section';

const PostList = ({ posts, type, isFeatured, extraClass }) => {
  function getPosts(data) {
    let { allMarkdownRemark: { nodes: posts } } = data;

    if (isFeatured) {
      posts = posts.filter(post => post.frontmatter.featured);
    } else {
      posts = posts.filter(post => !post.frontmatter.featured);
    }

    return (
      posts.map(post => {
        return (
          <Post 
            post={post} 
            version={post.frontmatter.featured ? 'vertical' : 'horizontal'} 
            key={post.frontmatter.title}
          />
        )
      })
    );
  }

  return (
    <StaticQuery
      query={graphql`
        query postsQuery {
          allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/articles/.*/"} }) {
            nodes {
              fields {
                slug
              }
              excerpt(pruneLength: 400)
              frontmatter {
                title,
                mainImage
                featured
              }
            }
          }
        }
      `}
      render={data => (
        <Section name={type}>
          <ul className={`o-postList -${isFeatured ? 'vertical' : 'horizontal'}`}>
            {getPosts(data)}
          </ul>
        </Section>
      )}
    />
  );
}

export default PostList
