import React from 'react';

import { storiesOf } from '@storybook/react';
import { themes } from '@storybook/theming';

import Section from './Section';

storiesOf('Section', module)
  .addParameters({ options: { theme: themes.dark } })
  .add('featured-posts', () => <Section type="featured-posts">Content</Section>)
  .add('premieres', () => <Section type="premieres">Content</Section>)
  .add('repertoire', () => <Section type="repertoire">Content</Section>)
  .add('posts', () => <Section type="posts">Content</Section>)
  .add('authors', () => <Section type="authors">Content</Section>)
  .add('banner', () => <Section type="banner">Content</Section>)
  .add('artists', () => <Section type="artists">Content</Section>)
  .add('contact', () => <Section type="contact">Content</Section>)
  .add('newsletter', () => <Section type="newsletter">Content</Section>)
  .add('description', () => <Section type="description">Content</Section>);
