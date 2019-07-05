import React from "react"
import styles from "./styles.scss";

import Section from '../../atoms/Section/Section';
import Title from '../../atoms/Title/Title';
import LinkBtn from '../../atoms/LinkBtn/LinkBtn';
import ScrollBtn from '../../atoms/ScrollBtn/ScrollBtn';

const Hero = ({ target, type }) => (
  <Section extraClass="o-hero">
    <div className="o-hero_content">
      <Title extraClass="o-hero_title">Nowa scena w Krakowie</Title>
      <LinkBtn
        link="/"
        extraClass="o-hero_link"
        variant="primary"
      >
        Czytaj
      </LinkBtn>
    </div>
    <ScrollBtn target="" />
  </Section>
)

export default Hero
