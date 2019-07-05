import React from 'react';

import { storiesOf } from '@storybook/react';
import { themes } from '@storybook/theming';

import Premiere from './Premiere';
import desktop from '../../../../static/images/premieres/1-desktop.jpg';
import mobile from '../../../../static/images/premieres/1-desktop.jpg';

storiesOf('Premiere', module)
  .addParameters({ options: { theme: themes.light } })
  .add('default', () =>
    <Premiere
      imageDesktop={desktop}
      image={mobile}
      title="Lorem ipsum"
      link="/"
    />
  );
