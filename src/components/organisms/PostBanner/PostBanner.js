import React from 'react';

import DecoratedImage from '../../atoms/DecoratedImage/DecoratedImage';
import Title from "../../atoms/Title/Title";

const PostBanner = ({ postType, image, title }) => {

    return (
        <div
            className={`o-postBanner -${postType}`}
            style={{backgroundImage: `url(../../${postType === 'article' ? image : ''})`}}
          >
            {postType === 'artist' &&
              <DecoratedImage src={`../../${image}`} alt={title} />
            }
            <Title extraClass="o-postBanner_title">{title}</Title>
        </div>
    )
}

export default PostBanner;