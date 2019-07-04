import React from 'react';

import { storiesOf } from '@storybook/react';
import { themes } from '@storybook/theming';

import Post from './Post';

storiesOf('Post', module)
  .addParameters({ options: { theme: themes.dark } })
  .add('horizontal', () =>
    <Post type="horizontal" image="/" title="Lorem ipsum">
      Content
    </Post>
  );
