import React from 'react';

import { storiesOf } from '@storybook/react';

import Textarea from './Textarea';

storiesOf('Textarea', module)
  .add('default', () => <Textarea placeholder="Name" type="text" />)
  .add('brown', () => <Textarea placeholder="Name" type="text" color="brown"/>)
  .add('blue', () => <Textarea placeholder="Name" type="text" color="blue"/>);
