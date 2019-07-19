import React from "react";
import { StyledPremiere, Picture, Img, Title } from './styles';

const Premiere = ({ premiere }) => (
    <StyledPremiere key={premiere.node.title}>
        <a href={premiere.node.link} title={premiere.node.title}>
            <Title>{premiere.node.title}</Title>
            <Picture>
                <source media="(min-width: 768px)" srcSet={premiere.node.images.desktop} />
                <Img src={premiere.node.images.mobile} alt={premiere.node.title} />
            </Picture>
        </a>
    </StyledPremiere>
)

export default Premiere;