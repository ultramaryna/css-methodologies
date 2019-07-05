import React from 'react';

import { storiesOf } from '@storybook/react';
import { themes } from '@storybook/theming';

import ScrollBtn from './ScrollBtn';

storiesOf('ScrollBtn', module)
  .addParameters({ options: { theme: themes.dark } })
  .add('default', () => <ScrollBtn type="default" />)
  .add('to-top', () => <ScrollBtn type="toTop" />);
