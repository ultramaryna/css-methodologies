import React from "react";
import moment from "moment";
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemPanel, AccordionItemButton } from 'react-accessible-accordion';

import Date from "../../atoms/Date/Date";
import ListItem from "../../atoms/ListItem/ListItem";
import Subtitle from "../../atoms/Subtitle/Subtitle";

const ShowDates = ({showName, data}) => {

  const { allRepertoireJson: { edges: shows } } = data;
  const showNode = shows.find(show => show.node.name === showName);

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
      console.log(list);
    });

    console.log(list);

    return (
      <ul className="m-showDates_monthsList">
        {Object.entries(list).map(item => (
          <ListItem key={item[0]} extraClass="m-showDates_monthItem">
            <h4 className="m-showDates_month">{item[0]}</h4>
            <ul className="m-showDates_list">
              {item[1].map(date => (
                <Date date={date} />
              ))}
            </ul>
          </ListItem>
        ))}
      </ul>
    )
  }

  if (!show) {
    return false;
  }

  return (
    <div className="m-showDates">
      <Subtitle extraClass="m-showDates_title" color="teal" level="3">
          {show.name}
      </Subtitle>
      <Accordion className="m-showDates_theatres">
        {show.theatres.map(theatre => (
          <AccordionItem key={theatre.name}>
            <AccordionItemHeading className="m-showDates_theatreName">
              <AccordionItemButton className="m-showDates_theatreExpand">
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

export default ShowDates;