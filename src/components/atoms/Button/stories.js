import React from 'react';

import { storiesOf } from '@storybook/react';

import Button from './Button';

storiesOf('Button', module)
  .add('brown', () => <Button color="brown">Click</Button>)
  .add('blue', () => <Button color="blue">Click</Button>);
