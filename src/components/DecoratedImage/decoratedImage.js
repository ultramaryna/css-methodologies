import React from 'react';

const DecoratedImage = ({ src, alt }) => (
  <div className="decorated-image">
    <img src={src} alt={alt} className="decorated-image__content" />
  </div>
)

export default DecoratedImage;
