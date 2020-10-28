import React, { useState, useEffect } from 'react';
import { LikeButton } from './LikeButton';
import moment from 'moment';
import './HappyContents.css';


export const HappyContents = () => {
  const CONTENTS_URL = 'https://happy-thoughts-technigo.herokuapp.com/thoughts';
  const [contents, setContents] = useState([]);

  useEffect(() => {
    fetch(CONTENTS_URL)
      .then(res => res.json())
      .then(json => setContents(json.reverse()))
  }, [])

  const onLikedContent = (likedContentId) => {
    const contentsUpdated = contents.map((content) => {
      if (content._name === likedContentId) {
        content.like += 1
      }
      return content
    })
    setContents(contentsUpdated)
  }

  return (
    <div>
      {contents.map(content => (
          <div className='happy-contents' key={content._id}>
            <h2>{content.message}</h2>
            <p>/{content.name}</p>
            <div className="contents-info">
              <LikeButton
                key={content._id}
                id={content._name}
                onLikedContent={onLikedContent}
                like={content.like}
              />
              <span className='contents-time'>
                {moment(content.created).fromNow()}
              </span>
            </div>
          </div>
        ))
      }
    </div>
  )
}