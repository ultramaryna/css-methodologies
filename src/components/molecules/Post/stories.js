import React from 'react';

import { storiesOf } from '@storybook/react';
import { themes } from '@storybook/theming';

import Post from './Post';
import image from '../../../../static/images/posts/ghost.jpg';

storiesOf('Post', module)
  .addParameters({ options: { theme: themes.dark } })
  .add('vertical', () =>
    <Post type="vertical" image={image} title="Lorem ipsum">
      Lorem ipsum
    </Post>
  )
  .add('horizontal', () =>
    <Post type="horizontal" image={image} title="Lorem ipsum">
      Lorem ipsum
    </Post>
  );
