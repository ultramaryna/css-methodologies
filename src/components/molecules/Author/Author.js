import React from "react";

import Subtitle from "../../atoms/Subtitle/Subtitle";
import Image from "../../atoms/Image/Image";
import Text from "../../atoms/Text/Text";

const Author = ({ author, isStandalone, type }) => {
    const typeClass = type ? `-${type}` : '';

    return (
        <div className={`m-author ${isStandalone ? '-standalone' : ''} ${typeClass}`}>
            <div className="m-author_content">
                <Image src={author.image} alt={author.name} extraClass="m-author_image"/>
                <div>
                    <Subtitle level="3" extraClass="m-author_name" isLowercase color="none">
                        {author.name}
                    </Subtitle>
                    {isStandalone && 
                        <Text extraClass="m-author_bio">
                            {author.bio}
                        </Text>
                    }
                </div>
            </div>
        </div>
    )
}

export default Author;