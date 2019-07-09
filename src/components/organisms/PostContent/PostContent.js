import React from 'react';
import rehypeReact from "rehype-react";
import "./styles.scss";

import CustomLink from '../../atoms/CustomLink/CustomLink';
import Subtitle from "../../atoms/Subtitle/Subtitle";
import Image from "../../atoms/Image/Image";

const PostContent = ({ content, postType }) => {
    const renderAst = new rehypeReact({
        createElement: React.createElement,
        components: {
          "custom-link": CustomLink,
          "subheading": Subtitle,
          "custom-image": Image
        },
    }).Compiler

    return (
        <div className={`o-postContent -${postType}`}>
            {renderAst(content)}
        </div>
    )
}

export default PostContent;