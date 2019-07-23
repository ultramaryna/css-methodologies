import React from 'react';
import { Container, ArtistContainer, Heading } from './styles';

import DecoratedImage from '../../../DecoratedImage/index';

const Banner = ({ type, image, title }) => {

    return (
        <Container
            as={type === 'artist' ? ArtistContainer : ''}
            style={{backgroundImage: `url(../../${type === 'article' ? image : ''})`}}
          >
            {type === 'artist' &&
                <DecoratedImage src={`../../${image}`} alt={title} />
            }
            <Heading type={type}>{title}</Heading>
        </Container>
    )
}

export default Banner;