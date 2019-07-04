import React from 'react';

import { storiesOf } from '@storybook/react';
import { themes } from '@storybook/theming';

import CustomLink from './CustomLink';

storiesOf('CustomLink', module)
  .add('default', () => <CustomLink>Link</CustomLink>);
