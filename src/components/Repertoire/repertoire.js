import { Link } from "gatsby"
import React from "react"
import { StaticQuery, graphql } from "gatsby"

const Repertoire = () => {

  function renderShowNames(data) {
    const { allRepertoireJson: { edges: shows } } = data;

    return (
        shows.map((item) => {
            const { node: show } = item;
            return (
              <li>{show.name}</li>
            );
        })
    )
  }

  return (
    <StaticQuery
      query={graphql`
        query repertoireQuery {
          allRepertoireJson {
            edges {
              node {
                name
              }
            }
          }
        }
      `}
      render={data => (
        <div className="repertoire">
          <ul className="shows">
            {renderShowNames(data)}
          </ul>
        </div>
      )}
    />
  )
}

export default Repertoire
