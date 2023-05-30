/* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */

import React from 'react';
import { formatDistance } from 'date-fns';
import './Feed.css';

export const Feed = ({ loading, feed, onLike }) => {
  if (loading) {
    return (
      <div> Loading in progress </div>
    );
  } else {
    return (
      <section className="feed">
        {feed.map((post) => {
          return (
            <div className="singlePost" key={post._id}>
              <h4> {post.message}</h4>
              <div className="singlePostFooter">
                <p className="singlePostFooterLeft">
                  <button type="button" onClick={(event) => onLike(event, post)}> ❤️ </button>
                 x {post.hearts}
                </p>
                <p className="singlePostFooterRight">
                  {formatDistance(new Date(post.createdAt), Date.now(), { addSuffix: true })}
                </p>
              </div>
            </div>)
        })}
      </section>
    );
  }
}
