import React from "react";
import { Link } from "gatsby";
import { StaticQuery, graphql } from "gatsby";

import SlickSlider from '../SlickSlider/slickSlider'
import DecoratedImage from '../DecoratedImage/decoratedImage';

const Artists = () => {

    function renderArtists(data) {
        const { allMarkdownRemark: { nodes: artists } } = data;

        return (
            artists.map((artist) => {
                return (
                    <div className="artists__item" key={artist.frontmatter.title}>
                        <DecoratedImage src={artist.frontmatter.mainImage} alt={artist.frontmatter.title} />
                        <div className="artists__content">
                          <h3 className="artists__title heading heading--violet">
                            <span className="heading__content">{artist.frontmatter.title}</span>
                          </h3>
                          <p className="artists__bio">{artist.excerpt}</p>
                          <Link to={artist.fields.slug} title={artist.frontmatter.title} className="artists__link btn btn--alter">
                              Czytaj
                          </Link>
                        </div>
                    </div>
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
          <div className="artists">
            <SlickSlider>
                {renderArtists(data)}
            </SlickSlider>
          </div>
        )}
     />
  )
}

export default Artists;
