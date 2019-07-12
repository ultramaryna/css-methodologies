import React from "react";

import DecoratedImage from "../../atoms/DecoratedImage/DecoratedImage";
import Subtitle from "../../atoms/Subtitle/Subtitle";
import Text from "../../atoms/Text/Text";
import LinkBtn from "../../atoms/LinkBtn/LinkBtn";

const Artist = ({ artist }) => (
    <div className="m-artist">
        <DecoratedImage src={artist.frontmatter.mainImage} alt={artist.frontmatter.title} />
        <div className="m-artist_content">
            <Subtitle level="3" color="violet" extraClass="m-artist_title">
                {artist.frontmatter.title}
            </Subtitle>
            <Text extraClass="m-artist_bio">{artist.excerpt}</Text>
            <LinkBtn extraClass="m-artist_link" link={artist.fields.slug} variant="decorative">
                Czytaj
            </LinkBtn>
        </div>
    </div>
)

export default Artist;
