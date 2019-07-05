import React from 'react';
import Image from '../Image/Image';
import './styles.scss';

const DecoratedImage = ({ src, alt }) => (
  <div className="a-decoratedImage">
    <Image src={src} alt={alt} extraClass="a-decoratedImage_img"/>
  </div>
)

export default DecoratedImage;
