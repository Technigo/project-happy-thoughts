import React from 'react';

export const Feed = ({ loading, feed, setFeed }) => {

  const onPostHeartChange = (singlePost) => {
    setFeed(feed.map(post => {
      if(post._id === singlePost._id) {
        return { ...post, isChecked: !post.isChecked
      };
      }
      return post;
    })

    )
  }
  if (loading) {
    return (
      <div> Loading in progress </div>
    );
  } else {
    return (
      <section>
        {feed.map(post => {
          return(
          <div key={post._id}>
            <h4> {post.message}</h4>
            <input type="checkbox" onChange={() => onPostHeartChange(post)} checked={post.isChecked}/>
            <p> {post.hearts}</p>
            <p> {post.createdAt} </p>
          </div>)
        }
        )
        }
      </section>
    );
  }
}
