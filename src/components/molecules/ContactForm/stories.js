import React from 'react';
import img from '../../../../static/images/team/annakowalska.png';

import { storiesOf } from '@storybook/react';
import { themes } from '@storybook/theming';

import ContactForm from './ContactForm';

storiesOf('ContactForm', module)
  .addParameters({ options: { theme: themes.dark } })
  .add('default', () => <ContactForm />);
