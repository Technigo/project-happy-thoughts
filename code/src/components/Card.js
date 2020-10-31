import React, { useState } from 'react';
import moment from "moment";

import ic_like_0 from '../assets/ic_like_0.svg';
import ic_like_1 from '../assets/ic_like_1.svg';

import './card.css';

export const Card = ({ message, onLikeMessage }) => {

  const onLikeClick = () => {
    onLikeMessage(message._id)
    console.log(`Clicking ${message._id}`)

    const heartPath = document.getElementById(`icLike_${message._id}`)
    heartPath.setAttribute("fill", "#FF586D")
    heartPath.setAttribute("d", "M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z")
    heartPath.setAttribute("fill-opacity", "1")
  }

  const onHover = (id) => {
    console.log(`Mouse entering. id is: ${id}`)
    const heartPath = document.getElementById(`icLike_${id}`)
    // heartPath.setAttribute("fill", "#FF586D")
    // heartPath.setAttribute("fill-opacity", "0.8")
  }


  const onLeave = (id) => {
    console.log(`Mouse leaving. id is: ${id}`)
    const heartPath = document.getElementById(`icLike_${id}`)
    // heartPath.setAttribute("fill", "black")
    // heartPath.setAttribute("fill-opacity", "0.15")
  }

  
  return (
    <div className="card" key={message._id}>
      <p>{message.message}</p>

      <div className="card-bottom">
        <div className="card-bottom-likes">
          <button
            className="button-like"
            onClick={onLikeClick}
            onMouseEnter={() => onHover(message._id)}
            onMouseLeave={() => onLeave(message._id)}
          >
            {/* <img src={ic_like_0} /> */}
            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path id={`icLike_${message._id}`} d="M16.5 3C14.76 3 13.09 3.81 12 5.09C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.42 2 8.5C2 12.28 5.4 15.36 10.55 20.04L12 21.35L13.45 20.03C18.6 15.36 22 12.28 22 8.5C22 5.42 19.58 3 16.5 3ZM12.1 18.55L12 18.65L11.9 18.55C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5C9.04 5 10.54 5.99 11.07 7.36H12.94C13.46 5.99 14.96 5 16.5 5C18.5 5 20 6.5 20 8.5C20 11.39 16.86 14.24 12.1 18.55Z" fill="black" fillOpacity="0.15"/>
            </svg>

          </button>
          <p className="p-subtle">{message.hearts}</p>
        </div>
        <div className="card-bottom-time">
          <p className="p-subtle">
            {moment(message.createdAt).fromNow()}
          </p>
        </div>
      </div>

    </div>
  )
}


