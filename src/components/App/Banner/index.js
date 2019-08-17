import React from "react";
import { Title } from './styles';
import Section from '../../shared/Section';

const Banner = ({ title }) => (
    <Section type="banner">
        <Title className="title">
            {title}
        </Title>
    </Section>
)

export default Banner;