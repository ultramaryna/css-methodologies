import React from 'react';
import img from '../../../../static/images/team/annakowalska.png';

import { storiesOf } from '@storybook/react';
import { themes } from '@storybook/theming';

import Author from './Author';

const author = {
  "name": "Jane Doe",
  "image": img,
  "bio": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
};

storiesOf('Author', module)
  .addParameters({ options: { theme: themes.dark } })
  .add('list', () => <Author author={author} />)
  .add('standalone', () => <Author author={author} isStandalone/>)
  .add('standalone-artist', () => <Author author={author} isStandalone type="artist" />);
