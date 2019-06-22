import React from 'react';

const PostImage = ({ src, alt }) => {
  return (
    <img src={src} alt={alt} className="post__image" />
  );
}

export default PostImage
