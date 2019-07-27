import React from 'react';
import rehypeReact from "rehype-react";

import Subtitle from '../../../../shared/Subtitle';
import Image from '../../../../shared/Image';
import CustomLink from '../../../../shared/CustomLink';
import { PostContent, ArtistPostContent, ArticlePostContent } from './styles';

const Content = ({ content, postType }) => {
    const renderAst = new rehypeReact({
        createElement: React.createElement,
        components: {
          "custom-link": CustomLink,
          "subheading": Subtitle,
          "custom-image": Image
        },
    }).Compiler

    console.log(postType);

    return (
        <PostContent as={postType === 'artist' ? ArtistPostContent : ArticlePostContent}>
            {renderAst(content)}
        </PostContent>
    )
}

export default Content;