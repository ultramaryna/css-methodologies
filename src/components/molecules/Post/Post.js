import React from "react"
import styles from "./styles.scss";

import Image from '../../atoms/Image/Image';
import Subtitle from '../../atoms/Subtitle/Subtitle';
import Text from '../../atoms/Text/Text';
import LinkBtn from '../../atoms/LinkBtn/LinkBtn';

const Post = ({ title, image, type, link, children }) => (
  <article className={`m-post -${type}`}>
    <Image src={image} alt={image} extraClass="m-post_img"/>
    <div className="m-post_content">
      <Subtitle
        extraClass="m-post_title"
        isLowercase={type === 'vertical'}
        color={type === 'horizontal' ? 'grey' : ''}
      >
        {title}
      </Subtitle>
      {type === 'horizontal' &&
        <Text extraClass="m-post_text">{children}</Text>
      }
      <LinkBtn
        link={link}
        variant={type === 'vertical' ? 'secondary' : 'primary'}
        extraClass="m-post_link"
      >
        Czytaj
      </LinkBtn>
    </div>
  </article>
)

export default Post
