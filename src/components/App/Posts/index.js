import React from "react"
import { StaticQuery, graphql } from "gatsby"

import PostBlock from '../PostBlock/index';
import { StyledPosts } from './styles';

const Posts = ({version, isFeatured}) => {

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
          <PostBlock post={post} version={version} key={post.frontmatter.title}/>
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
          <StyledPosts isHorizontal={version === 'horizontal'}>
            {getPosts(data)}
          </StyledPosts>
      )}
    />
  )
}

export default Posts