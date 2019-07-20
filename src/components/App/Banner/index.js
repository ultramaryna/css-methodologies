import React from "react";
import { StyledBanner, Title } from './styles';
import Section, { BannerSection } from '../../shared/Section';

const Banner = ({ title }) => (
    <Section type="banner">
        <Title className="title">
            {title}
        </Title>
    </Section>
)

export default Banner;