import React from 'react';

import { storiesOf } from '@storybook/react';
import { themes } from '@storybook/theming';

import Input from './Input';

storiesOf('Input', module)
  .add('default', () => <Input placeholder="Name" type="text" />)
  .add('brown', () => <Input placeholder="Name" type="text" color="brown"/>)
  .add('blue', () => <Input placeholder="Name" type="text" color="blue"/>);
