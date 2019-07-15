import React from 'react';

import { storiesOf } from '@storybook/react';
import { themes } from '@storybook/theming';

import Title from './Title';

storiesOf('Title', module)
  .addParameters({ options: { theme: themes.dark } })
  .add('main', () => <Title variant="main" extraClass="o-hero_title">Nowa scena w Krakowie</Title>)
  .add('article', () => <Title variant="article" extraClass="m-banner_title">Nowa scena w Krakowie</Title>);
