import PropTypes from "prop-types"
import React from "react"

const Shows = ({showName, data}) => {

  const { allRepertoireJson: { edges: shows } } = data;
  const showNode = shows.find(show => show.node.name === showName);

  const show = showNode ? showNode.node : '';

  if (!show) {
    return false;
  }

  return (
    <div className="shows">
      <h3 className="heading heading--teal shows__title">
        <span className="heading__content">{show.name}</span>
      </h3>
      <ul className="shows__theatres">
        {show.theatres.map(theatre => (
          <li key={theatre.name}>
            <h4 className="shows__theatre-name">{theatre.name}</h4>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Shows
