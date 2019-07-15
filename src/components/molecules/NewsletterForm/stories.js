import React from 'react';

import { storiesOf } from '@storybook/react';
import { themes } from '@storybook/theming';

import NewsletterForm from './NewsletterForm';

storiesOf('NewsletterForm', module)
  .addParameters({ options: { theme: themes.dark } })
  .add('default', () => <NewsletterForm />);
