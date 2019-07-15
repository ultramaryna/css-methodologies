import React from 'react';
import moment from 'moment';

import { storiesOf } from '@storybook/react';

import Date from './Date';

const date = moment(new Date('2019-11-04T20:00:00.000+02:00'));

storiesOf('Date', module)
  .add('default', () => <Date date={date} />);
