import React from "react"
import { StaticQuery, graphql } from "gatsby"

const Premieres = () => {
  function renderPremieres(data) {
    const { allPremieresJson: { edges: premieres } } = data;

    return (
      premieres.map(premiere => {
        return (
          <li key={premiere.node.title} className="premieres__item">
            <a href={premiere.node.link} title={premiere.node.title}>
              <h3 className="premieres__title">{premiere.node.title}</h3>
              <picture className="premieres__picture">
                <source media="(min-width: 768px)" srcSet={premiere.node.images.desktop} />
                <img src={premiere.node.images.mobile} alt={premiere.node.title} className="premieres__img"/>
              </picture>
            </a>
          </li>
        );
      })
    )
  }

  return (
    <StaticQuery
      query={graphql`
          query premieresQuery {
            allPremieresJson {
              edges {
                node {
                  title,
                  link,
                  images {
                    mobile,
                    desktop
                  }
                }
              }
            }
          }
      `}
      render={data => (
        <div className="premieres">
          <h2 className="premieres__heading heading--main">Premiery</h2>
          <ul className="premieres__list">
            {renderPremieres(data)}
          </ul>
        </div>
      )}
    />
  )
}

export default Premieres
