import React from 'react';
import { graphql } from 'gatsby';

const AuthorInfo = ({author, type}) => {

    return (
      <div className={`author-info author-info--${type}`}>
        <div className="author-info__content">
          <img src={`../../${author.image}`} alt={author.name} className="author-info__img"/>
          <div className="author-info__info">
            <h2 className="author-info__name">{author.name}</h2>
            <p className="author-info__bio">{author.bio}</p>
          </div>
        </div>
      </div>
    )
}

export default AuthorInfo;
