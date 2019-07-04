import React from "react"
import styles from "./styles.scss";

import Image from '../../atoms/Image/Image';
import Subtitle from '../../atoms/Subtitle/Subtitle';
import Text from '../../atoms/Text/Text';

const Post = ({ title, image, type, children }) => (
  <article className="post">
    <Image src={image} alt={title} />
    <Subtitle isLowercase>{title}</Subtitle>
    <Text>{children}</Text>
  </article>
)

export default Post
