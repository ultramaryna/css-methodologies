import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import PostBlock from './postblock'

const Posts = ({sectionName}) => {

  function getPosts(data) {
    console.log(data);
    return (
      data.allFeaturedpostsJson.edges.map(item => {
        return (
          <PostBlock post={item.node}/>
        )
      })
    );
  }

  return (
    <StaticQuery
      query={graphql`
        query postsQuery {
          allFeaturedpostsJson {
            edges {
              node {
                title,
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
        <div className="posts">
          {getPosts(data)}
        </div>
      )}
    />
  )
}

export default Posts
