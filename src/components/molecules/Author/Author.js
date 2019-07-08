import React from "react";
import "./styles.scss";

import Subtitle from "../../atoms/Subtitle/Subtitle";
import Image from "../../atoms/Image/Image";

const Author = ({ author }) => (
    <div className="m-author">
        <Image src={author.image} alt={author.name} extraClass="m-author_image"/>
        <Subtitle level="3" extraClass="m-author_name" isLowercase>
            {author.name}
        </Subtitle>
    </div>
)

export default Author;