import React from "react"
import styles from "./styles.scss";

import Image from '../../atoms/Image/Image';
import Subtitle from '../../atoms/Subtitle/Subtitle';
import Text from '../../atoms/Text/Text';
import LinkBtn from '../../atoms/LinkBtn/LinkBtn';

const Post = ({ title, image, type, link, children }) => (
  <article className={`post ${type}`}>
    <Image src={image} alt={image} className="image"/>
    <div className="content">
      <Subtitle
        className="title"
        isLowercase={type === 'vertical'}
        color={type === 'horizontal' ? 'grey' : ''}
      >
        {title}
      </Subtitle>
      <Text className="excerpt">{children}</Text>
      <LinkBtn
        link={link}
        variant={type === 'vertical' ? 'secondary' : 'primary'}
      >
        Czytaj
      </LinkBtn>
    </div>
  </article>
)

export default Post
