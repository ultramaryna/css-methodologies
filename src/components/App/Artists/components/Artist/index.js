import React from "react";
import DecoratedImage from '../../../DecoratedImage/index';
import LinkBtn from '../../../../shared/LinkBtn';
import { Item, Bio, Title, Content } from './styles';

const Artist = ({artist}) => (
    <Item key={artist.frontmatter.title}>
        <DecoratedImage src={artist.frontmatter.mainImage} alt={artist.frontmatter.title} />
        <Content>
            <Title color="purpleLighter">
                <span>{artist.frontmatter.title}</span>
            </Title>
            <Bio>{artist.excerpt}</Bio>
            <LinkBtn to={artist.fields.slug} title={artist.frontmatter.title} type="decorative">
                Czytaj
            </LinkBtn>
        </Content>
    </Item>
);

export default Artist;