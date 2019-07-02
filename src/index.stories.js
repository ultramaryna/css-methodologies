import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { themes } from '@storybook/theming';

import Button from './atoms/Button/Button';

storiesOf('Button', module)
  .addParameters({ options: { theme: themes.dark } })
  .add('primary', () => <Button type="button" variant="primary">Some text</Button>)
  .add('secondary', () => <Button type="button" variant="secondary">Some text</Button>)
  .add('decorative', () => <Button type="button" variant="decorative">Some text</Button>);

// storiesOf('Button', module)
//   .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
//   .add('with some emoji', () => (
//     <Button onClick={action('clicked')}>
//       <span role="img" aria-label="so cool">
//         😀 😎 👍 💯
//       </span>
//     </Button>
//   ));
