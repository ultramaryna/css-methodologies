import PropTypes from "prop-types"
import React from "react"
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemPanel, AccordionItemButton } from 'react-accessible-accordion';

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
      <Accordion className="shows__theatres">
        {show.theatres.map(theatre => (
          <AccordionItem key={theatre.name}>
            <AccordionItemHeading className="shows__theatre-name">
              {theatre.name}
              <AccordionItemButton>
                Bu
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              hahahaha
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

export default Shows
