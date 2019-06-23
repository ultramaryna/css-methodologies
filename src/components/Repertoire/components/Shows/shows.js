import PropTypes from "prop-types"
import React from "react"
import moment from 'moment'
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemPanel, AccordionItemButton } from 'react-accessible-accordion';

const Shows = ({showName, data}) => {

  const { allRepertoireJson: { edges: shows } } = data;
  const showNode = shows.find(show => show.node.name === showName);
  console.log(showNode);

  const show = showNode ? showNode.node : '';

  const renderShowDates = (dates) => {
    const list = {};
    dates.forEach(date => {
      moment.locale("pl");
      date = moment(new Date(date));
      const month = date.locale("pl").format('MMMM');
      if (!(month in list)) {
        list[month] = [];
      }
      list[month].push(date);
    });

    return (
      <ul className="shows__months-list">
        {Object.entries(list).map(item => (
          <li key={item[0]} className="shows__month-item">
            <h4 className="shows__month">{item[0]}</h4>
            <ul className="shows__list">
              {item[1].map(date => (
                <li className="shows__date">
                  <span className="shows__day">
                    {`${date.format('DD')}.`}
                  </span>
                  <span className="shows__time">
                    {date.format('HH:mm')}
                  </span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    )
  }

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
              <AccordionItemButton className="shows__theatre-expand">
                {theatre.name}
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              {renderShowDates(theatre.shows)}
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

export default Shows
