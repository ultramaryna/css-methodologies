import React from 'react';

const PostImage = ({ src, alt }) => {
  console.log('aha');
  return (
    <img src={src} alt={alt} className="post__image" />
  );
}

export default PostImage
