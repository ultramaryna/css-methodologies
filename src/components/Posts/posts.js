import React from "react"
import { StaticQuery, graphql } from "gatsby"

import PostBlock from './components/PostBlock/postblock'

const Posts = ({version, isFeatured}) => {

  function getPosts(data) {
    let { allPostsJson: { edges: posts } } = data;

    if (isFeatured) {
      posts = data.allFeaturedJson.edges;
    }

    console.log(posts);

    return (
      posts.map(item => {
        return (
          <PostBlock post={item.node} version={version} />
        )
      })
    );
  }

  return (
    <StaticQuery
      query={graphql`
        query postsQuery {
          allFeaturedJson {
            edges {
              node {
                id,
                title,
                image {
                  name,
                  src
                }
              }
            }
          },
          allPostsJson {
            edges {
              node {
                id,
                title,
                shortDesc,
                image {
                  name,
                  src
                }
              }
            }
          }
        }
      `}
      render={data => (
        <div className={`posts posts--${version}`}>
          {getPosts(data)}
        </div>
      )}
    />
  )
}

export default Posts
