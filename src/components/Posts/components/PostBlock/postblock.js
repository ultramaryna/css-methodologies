import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const PostBlock = ({post, version}) => (
  <article className={`posts__item posts__item--${version}`}>
    <img src={post.image.src} className="posts__image"/>
    <div className="posts__content">
      <h2 className="heading posts__title">
        {version === 'horizontal' &&
          <span className="heading__content">{post.title}</span>
        }
        {version === 'vertical' &&
          post.title
        }
      </h2>
      {version === 'horizontal' && post.shortDesc &&
        <p className="posts__text">{post.shortDesc}</p>
      }
      <Link to="/" className="btn btn--secondary posts__link">Czytaj</Link>
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
