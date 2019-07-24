import React from 'react';
import rehypeReact from "rehype-react";

import Subtitle from '../../../../shared/Subtitle';
import Image from '../../../../shared/Image';
import CustomLink from '../../../../shared/CustomLink';
import { PostContent } from './styles';

const Content = ({ content, postType }) => {
    const renderAst = new rehypeReact({
        createElement: React.createElement,
        components: {
          "custom-link": CustomLink,
          "subheading": Subtitle,
          "custom-image": Image
        },
    }).Compiler

    return (
        <PostContent>
            {renderAst(content)}
        </PostContent>
    )
}

export default Content;