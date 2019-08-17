import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { Container } from './styles';

import SlickSlider from '../../shared/SlickSlider';
import Section from '../../shared/Section';
import Artist from './components/Artist/index';

const Artists = () => {

    function renderArtists(data) {
        const { allMarkdownRemark: { nodes: artists } } = data;

        return (
            artists.map((artist, index) => {
                return (
                    <Artist artist={artist} key={index} />
                )
            })
        )
    }

  return (
      <StaticQuery
        query={graphql`
            query artistsQuery {
              allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/artists/.*/"} }) {
              	nodes {
                  fields {
                    slug
                  }
                	excerpt
                  frontmatter {
                    title,
                    mainImage
                  }
                }
            	}
            }
        `}
        render={data => (
            <Section color="purple">
                <Container>
                    <SlickSlider>
                        {renderArtists(data)}
                    </SlickSlider>
                </Container>
            </Section>
        )}
     />
  )
}

export default Artists;