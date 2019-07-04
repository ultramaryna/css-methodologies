import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { themes } from '@storybook/theming';

import Button from './atoms/Button/Button';
import Title from './atoms/Title/Title';
import Subtitle from './atoms/Subtitle/Subtitle';
import CustomLink from './atoms/CustomLink/CustomLink';
import Input from './atoms/Input/Input';

storiesOf('Button', module)
  .addParameters({ options: { theme: themes.dark } })
  .add('primary', () => <Button type="button" variant="primary">Some text</Button>)
  .add('secondary', () => <Button type="button" variant="secondary">Some text</Button>)
  .add('decorative', () => <Button type="button" variant="decorative">Some text</Button>);

storiesOf('Title', module)
  .addParameters({ options: { theme: themes.dark } })
  .add('main', () => <Title variant="main">Nowa scena w Krakowie</Title>)
  .add('article', () => <Title variant="article">Nowa scena w Krakowie</Title>)
  .add('artist', () => <Title variant="artist">Nowa scena w Krakowie</Title>);

storiesOf('Subtitle', module)
  .addParameters({ options: { theme: themes.dark } })
  .add('default', () => <Subtitle>Subtitle</Subtitle>)
  .add('teal', () => <Subtitle color="teal">Subtitle</Subtitle>)
  .add('violet', () => <Subtitle color="violet">Subtitle</Subtitle>)
  .add('turquoise', () => <Subtitle color="turquoise">Subtitle</Subtitle>)
  .add('blue', () => <Subtitle color="blue">Subtitle</Subtitle>);

storiesOf('CustomLink', module)
  .add('default', () => <CustomLink>Link</CustomLink>);

storiesOf('Input', module)
  .add('default', () => <Input placeholder="Name" type="text" />);
