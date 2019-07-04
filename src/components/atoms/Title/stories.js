import React from 'react';

import { storiesOf } from '@storybook/react';
import { themes } from '@storybook/theming';

import Title from './Title';

storiesOf('Title', module)
  .addParameters({ options: { theme: themes.dark } })
  .add('main', () => <Title variant="main">Nowa scena w Krakowie</Title>)
  .add('article', () => <Title variant="article">Nowa scena w Krakowie</Title>)
  .add('artist', () => <Title variant="artist">Nowa scena w Krakowie</Title>);
