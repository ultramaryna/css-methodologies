import React from "react";
import moment from 'moment';
import { 
    Title, 
    Theatres, 
    TheatreName, 
    TheatreExpand, 
    ShowsList, 
    ShowsMonth, 
    ShowsDate, 
    ShowsDay, 
    MonthItem, 
    MonthsList 
} from './styles';
import { AccordionItem, AccordionItemPanel } from 'react-accessible-accordion';

const Shows = ({showName, data}) => {

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
    });

    return (
      <MonthsList>
        {Object.entries(list).map(item => (
          <MonthItem key={item[0]}>
            <ShowsMonth>{item[0]}</ShowsMonth>
            <ShowsList>
              {item[1].map(date => (
                <ShowsDate>
                  <ShowsDay>
                    {`${date.format('DD')}.`}
                  </ShowsDay>
                  <span>
                    {date.format('HH:mm')}
                  </span>
                </ShowsDate>
              ))}
            </ShowsList>
          </MonthItem>
        ))}
      </MonthsList>
    )
  }

  if (!show) {
    return false;
  }

  return (
    <div>
      <Title>
        <span>{show.name}</span>
      </Title>
      <Theatres>
        {show.theatres.map(theatre => (
          <AccordionItem key={theatre.name}>
            <TheatreName>
              <TheatreExpand>
                {theatre.name}
              </TheatreExpand>
            </TheatreName>
            <AccordionItemPanel>
              {renderShowDates(theatre.shows)}
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Theatres>
    </div>
  );
}

export default Shows;