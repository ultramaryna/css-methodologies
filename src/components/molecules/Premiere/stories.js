import React from 'react';

import { storiesOf } from '@storybook/react';

import Premiere from './Premiere';
import desktop from '../../../../static/images/premieres/1-desktop.jpg';
import mobile from '../../../../static/images/premieres/1-desktop.jpg';

storiesOf('Premiere', module)
  .add('default', () =>
    <Premiere
      imageDesktop={desktop}
      image={mobile}
      title="Lorem ipsum"
      link="/"
    />
  );
