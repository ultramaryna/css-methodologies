import React from "react"
import moment from 'moment';
import styles from "./styles.scss";

import ListItem from "../ListItem/ListItem";

const Date = ({ date, extraClass }) => (
  <ListItem extraClass="a-date">
        <span className="a-date_day">
            {`${date.format('DD')}.`}
        </span>
        <span className="a-date_time">
            {date.format('HH:mm')}
        </span>
  </ListItem>
)

export default Date
