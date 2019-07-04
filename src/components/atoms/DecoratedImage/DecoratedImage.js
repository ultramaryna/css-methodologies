import React from 'react';
import Image from '../Image/Image';
import './styles.scss';

const DecoratedImage = ({ src, alt }) => (
  <div className="decorated-image">
    <Image src={src} alt={alt} />
  </div>
)

export default DecoratedImage;
