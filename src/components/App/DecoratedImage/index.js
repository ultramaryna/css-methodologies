import React from 'react';
import { Container, Image } from './styles';

const DecoratedImage = ({ src, alt }) => (
  <Container>
    <Image src={src} alt={alt} />
  </Container>
)

export default DecoratedImage;