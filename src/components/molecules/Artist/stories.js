import React from 'react';
import img from '../../../../static/images/team/annakowalska.png';

import { storiesOf } from '@storybook/react';
import { themes } from '@storybook/theming';

import Artist from './Artist';

const author = {
  "name": "Jane Doe",
  "image": img,
  "bio": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
};

storiesOf('Artist', module)
  .addParameters({ options: { theme: themes.dark } })
  .add('default', () => <Artist artist={artist} />);
