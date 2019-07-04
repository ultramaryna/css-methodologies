import React from 'react';

import { storiesOf } from '@storybook/react';
import { themes } from '@storybook/theming';

import LinkBtn from './LinkBtn';

storiesOf('LinkBtn', module)
  .addParameters({ options: { theme: themes.dark } })
  .add('primary', () => <LinkBtn type="button" variant="primary">Some text</LinkBtn>)
  .add('secondary', () => <LinkBtn type="button" variant="secondary">Some text</LinkBtn>)
  .add('decorative', () => <LinkBtn type="button" variant="decorative">Some text</LinkBtn>);
