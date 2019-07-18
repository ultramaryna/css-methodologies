import PropTypes from "prop-types"
import React from "react"

import { StyledPostBlock, Content, Img, Title, Text, HorizontalPostBlock, Link } from './styles';

const PostBlock = ({post, version}) => (
  <StyledPostBlock 
    as={version === 'horizontal' ? HorizontalPostBlock : ''}
  >
    <Img
      src={post.frontmatter.mainImage}
      className="posts__image"
      alt={post.frontmatter.title}
    />
    <Content>
      <Title isLowercase={version === 'vertical'}>
          <span>{post.frontmatter.title}</span>
      </Title>
      {version === 'horizontal' && post.excerpt &&
        <Text>{post.excerpt}</Text>
      }
      <Link to={post.fields.slug} type='secondary'>Czytaj</Link>
    </Content>
  </StyledPostBlock>
)

PostBlock.propTypes = {
  version: PropTypes.string,
}

PostBlock.defaultProps = {
  version: ``,
}

export default PostBlock