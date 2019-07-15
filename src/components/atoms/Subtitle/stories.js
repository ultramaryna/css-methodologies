import React from 'react';

import { storiesOf } from '@storybook/react';
import { themes } from '@storybook/theming';

import Subtitle from './Subtitle';

storiesOf('Subtitle', module)
  .addParameters({ options: { theme: themes.dark } })
  .add('default', () => <Subtitle color="grey">Subtitle</Subtitle>)
  .add('teal', () => <Subtitle color="teal">Subtitle</Subtitle>)
  .add('violet', () => <Subtitle color="violet">Subtitle</Subtitle>)
  .add('turquoise', () => <Subtitle color="turquoise">Subtitle</Subtitle>)
  .add('blue', () => <Subtitle color="blue">Subtitle</Subtitle>)
  .add('lowercase', () => <Subtitle isLowercase color="none">Subtitle</Subtitle>);
