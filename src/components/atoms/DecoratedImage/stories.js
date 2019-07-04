import React from 'react';

import { storiesOf } from '@storybook/react';
import { themes } from '@storybook/theming';
import { image } from '../Image/stories';

import DecoratedImage from './DecoratedImage';

storiesOf('DecoratedImage', module)
  .add('default', () => <DecoratedImage src="../../_assets/images/logo.svg"/>);
