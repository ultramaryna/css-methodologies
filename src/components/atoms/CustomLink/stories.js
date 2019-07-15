import React from 'react';

import { storiesOf } from '@storybook/react';
import { themes } from '@storybook/theming';

import CustomLink from './CustomLink';

storiesOf('CustomLink', module)
  .addParameters({ options: { theme: themes.light } })
  .add('default', () => <CustomLink>Link</CustomLink>);
