import React from "react";
import { Item, Image, Name, Content, StandaloneItem } from './styles';

const Author = ({ author, isStandalone }) => (
    <Item key={author.id} as={isStandalone ? StandaloneItem : ''}>
        <Content>
            <Image 
                src={isStandalone ? `../../${author.image}` : author.image} 
                alt={author.name} 
            />
            <div>
                <Name>{author.name}</Name>
                <p>{author.bio}</p>
            </div>
        </Content>
    </Item>
);

export default Author;