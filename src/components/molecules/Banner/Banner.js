import React from "react";
import "./styles.scss";

import Section from "../../atoms/Section/Section";
import Title from "../../atoms/Title/Title";

const Banner = ({ title }) => (
    <Section name="banner" extraClass="m-banner">
        <Title extraClass="m-banner_title">
            {title}
        </Title>
    </Section>
)

export default Banner;