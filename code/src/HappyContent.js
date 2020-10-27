import React, { useEffect, useState } from 'react';
import { LikeButton } from './LikeButton';
import moment from 'moment';
import './HappyContent.css';


export const HappyContent = () => {
  const CONTENTS_URL = 'https://https://happy-thoughts-technigo.herokuapp.com/thoughts.herokuapp.com/messages';
  
  const [contents, setContents] = useState([]);

  useEffect(() => {
    fetch(CONTENTS_URL)
      .then((res) => {
        // GET json response of the body
        return res.json();
      })
      .then((data) => {
        setContents(data.reverse());
        

      });
  }, []);

  return (
    <div>
      {contents.map((content) => {
        return (
          <article className='content-container' key={content._id}>
            <h2>{content.message}</h2>
            <p>{content.name}</p>
            <div className="content-info">
              <LikeButton
                key={content._id}
                id={content._id}
                //onContentLiked={onContentLiked}
                like={content.like}
              />
              <span className='content-time'>
                {moment(content.createdAt).fromNow()}
              </span>
            </div>
          </article>
        )
      })}
    </div>
  );  
};