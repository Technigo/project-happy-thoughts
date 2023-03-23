import React from 'react';
import { PostContent } from './PostContent/PostContent';
import { PostFooter } from './PostFooter/PostFooter';
import './SinglePost.css';

export const SinglePost = ({ thought }) => {
  return (
    <section className="single-post-wrapper">
      <PostContent message={thought.message} />
      <PostFooter likes={thought.hearts} time={thought.createdAt} />
    </section>
  )
}