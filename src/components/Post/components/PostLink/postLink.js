import React from 'react';

const postLink = ({ href, children }) => (
  <a className="link post__link" href={href}>
    {children}
  </a>
)

export default postLink
