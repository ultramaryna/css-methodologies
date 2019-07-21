import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { Container, Title } from './styles';

import SlickSlider from '../../shared/SlickSlider';
import Section from '../../shared/Section';
import Author from "./components/Author/index";

const Authors = () => {
  const slickSettings = {
    infinite: true,
    dots: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  function renderAuthors(data) {
    const { allAuthorsJson: { edges: authors } } = data;

    return (
      authors.map((item) => {
        const {node: author} = item;
        return (
          <Author author={author} />
        )
      })
    )

  }

  return (
    <StaticQuery
      query={graphql`
        query authorsQuery {
          allAuthorsJson {
            edges {
              node {
                id,
                name,
                image,
                bio
              }
            }
          }
        }
      `}
      render={data => (
          <Section>
                <Container>
                    <Title>
                        <span>Twórcy</span>
                    </Title>
                    <SlickSlider customSettings={slickSettings}>
                        {renderAuthors(data)}
                    </SlickSlider>
                </Container>
          </Section>
      )}
    />
  )

}

export default Authors;