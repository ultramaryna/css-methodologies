import React from 'react';

import { storiesOf } from '@storybook/react';

import Date from './Date';

storiesOf('Date', module)
  .add('default', () => <Date date={new Date()} />);
