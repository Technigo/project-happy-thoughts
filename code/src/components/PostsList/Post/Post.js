import React from 'react';
import { PostContent } from './PostContent/PostContent';
import { PostFooter } from './PostFooter/PostFooter';
import './Post.css';

export const Post = () => {
  return (
    <form className="single-post-wrapper">
      <PostContent />
      <PostFooter />
    </form>
  )
}