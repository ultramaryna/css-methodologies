import React from "react";
import { StaticQuery, graphql } from "gatsby";

import SlickSlider from '../../molecules/SlickSlider/SlickSlider';
import Artist from "../../molecules/Artist/Artist";
import Section from "../../atoms/Section/Section";

const Artists = () => {

    function renderArtists(data) {
        const { allMarkdownRemark: { nodes: artists } } = data;

        return (
            artists.map((artist) => {
                return (
                    <Artist artist={artist} key={artist.frontmatter.name} />
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
            <Section name="artists">
                <div className="o-artists">
                    <SlickSlider>
                        {renderArtists(data)}
                    </SlickSlider>
                </div>
            </Section>
        )}
     />
  )
}

export default Artists;
