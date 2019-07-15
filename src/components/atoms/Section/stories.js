import React from 'react';

import { storiesOf } from '@storybook/react';
import { themes } from '@storybook/theming';

import Section from './Section';

storiesOf('Section', module)
  .addParameters({ options: { theme: themes.dark } })
  .add('featured-posts', () => <Section name="featured-posts">Content</Section>)
  .add('premieres', () => <Section name="premieres">Content</Section>)
  .add('repertoire', () => <Section name="repertoire">Content</Section>)
  .add('posts', () => <Section name="posts">Content</Section>)
  .add('authors', () => <Section name="authors">Content</Section>)
  .add('banner', () => <Section name="banner">Content</Section>)
  .add('artists', () => <Section name="artists">Content</Section>)
  .add('contact', () => <Section name="contact">Content</Section>)
  .add('newsletter', () => <Section name="newsletter">Content</Section>)
  .add('description', () => <Section name="description">Content</Section>);
