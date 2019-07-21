import React from "react";
import { Item, Image, Name } from './styles';

const Author = ({author}) => (
    <Item key={author.id}>
        <Image src={author.image} alt={author.name} />
        <Name>{author.name}</Name>
    </Item>
);

export default Author;