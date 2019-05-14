import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const PostBlock = ({post}) => (
  <article className="posts__item">
    <img src={post.image} className="posts__image"/>
    <h2 className="heading posts__title">{post.title}</h2>
    <Link to="/" className="btn posts__link">Czytaj</Link>
  </article>
)

PostBlock.propTypes = {
  siteTitle: PropTypes.string,
}

PostBlock.defaultProps = {
  siteTitle: ``,
}

export default PostBlock
