import React from 'react';

const Subheading = ({ children }) => (
  <h2 className="post__subheading heading">
    <span className="heading__content">
      {children}
    </span>
  </h2>
)

export default Subheading;
