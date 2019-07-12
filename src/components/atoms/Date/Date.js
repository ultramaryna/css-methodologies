import React from "react";

import ListItem from "../ListItem/ListItem";

const Date = ({ date, extraClass }) => {
  if (!date) {
    return null;
  } else {
    return (
      <ListItem extraClass="a-date">
        <span className="a-date_day">
            {`${date.format('DD')}.`}
        </span>
        <span className="a-date_time">
            {date.format('HH:mm')}
        </span>
      </ListItem>
    )
  }
}

export default Date
