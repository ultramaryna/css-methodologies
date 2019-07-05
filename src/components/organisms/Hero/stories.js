import React from 'react';

import { storiesOf } from '@storybook/react';
import { themes } from '@storybook/theming';

import Hero from './Hero';

storiesOf('Hero', module)
  .addParameters({ options: { theme: themes.dark } })
  .add('default', () =>
    <Hero />
  );
