import React from "react"
import styles from "./styles.scss";

import Post from '../../molecules/Post/Post';
import Section from '../../atoms/Section/Section';

const PostList = ({ posts, type, extraClass }) => (
  <Section name={type}>
    <ul className="o-postList">
      {posts.map(post => (
        <Post
          type={type}
          title={post.title}
          image={post.image}
          link={post.image}
        >
          {post.excerpt}
        </Post>
      ))}
    </ul>
  </Section>
)

export default PostList
