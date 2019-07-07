import React from "react"
import styles from "./styles.scss";

import Image from '../../atoms/Image/Image';
import Subtitle from '../../atoms/Subtitle/Subtitle';
import Text from '../../atoms/Text/Text';
import LinkBtn from '../../atoms/LinkBtn/LinkBtn';

const Post = ({ post, version }) => {
  const { frontmatter: { title, mainImage, link }, excerpt } = post;

  return (
    <article className={`m-post -${version}`}>
      <Image src={mainImage} alt={title} extraClass="m-post_img"/>
      <div className="m-post_content">
        <Subtitle
          extraClass="m-post_title"
          isLowercase={version === 'vertical'}
          color={version === 'horizontal' ? 'grey' : ''}
        >
          {title}
        </Subtitle>
        {version === 'horizontal' &&
          <Text extraClass="m-post_text">{excerpt}</Text>
        }
        <LinkBtn
          link={link}
          variant={version === 'vertical' ? 'secondary' : 'primary'}
          extraClass="m-post_link"
        >
          Czytaj
        </LinkBtn>
      </div>
    </article>
  );
}

export default Post
