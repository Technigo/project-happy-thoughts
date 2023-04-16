/* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */

import React from 'react';
import { formatDistance } from 'date-fns'

export const Feed = ({ loading, feed, onLike }) => {
  if (loading) {
    return (
      <div> Loading in progress </div>
    );
  } else {
    return (
      <section>
        {feed.map((post) => {
          return (
            <div key={post._id}>
              <h4> {post.message}</h4>
              <button type="button" onClick={(event) => onLike(event, post)}> ❤️ </button>
              <p> {post.hearts}</p>
              <p>
                {formatDistance(new Date(post.createdAt), Date.now(), { addSuffix: true })}
              </p>
            </div>)
        })}
      </section>
    );
  }
}
