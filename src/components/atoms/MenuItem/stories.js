import React from 'react';

import { storiesOf } from '@storybook/react';
import { themes } from '@storybook/theming';

import MenuItem from './MenuItem';

storiesOf('MenuItem', module)
  .addParameters({ options: { theme: themes.dark } })
  .add('default', () => <MenuItem link="premieres" title="Some text" />);
