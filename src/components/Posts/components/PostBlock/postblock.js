import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const PostBlock = ({post, version}) => (
  <article className={`posts__item posts__item--${version}`}>
    <img src={post.frontmatter.mainImage} className="posts__image"/>
    <div className="posts__content">
      <h2 className="heading posts__title">
        {version === 'horizontal' &&
          <span className="heading__content">{post.frontmatter.title}</span>
        }
        {version === 'vertical' &&
          post.frontmatter.title
        }
      </h2>
      {version === 'horizontal' && post.excerpt &&
        <p className="posts__text">{post.excerpt}</p>
      }
      <Link to={post.fields.slug} className="btn btn--secondary posts__link">Czytaj</Link>
    </div>
  </article>
)

PostBlock.propTypes = {
  version: PropTypes.string,
}

PostBlock.defaultProps = {
  version: ``,
}

export default PostBlock
