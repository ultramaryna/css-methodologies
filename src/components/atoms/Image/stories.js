import React from 'react';

import { storiesOf } from '@storybook/react';
import { themes } from '@storybook/theming';

import Image from './Image';

export const image = {
  alt: 'Logo',
  src: '../../_assets/images/logo.svg',
  class: 'image'
};

storiesOf('Image', module)
  .add('default', () => <Image src="../../_assets/images/logo.svg" alt="Logo" />);
