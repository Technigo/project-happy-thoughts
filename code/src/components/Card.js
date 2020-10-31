import React, { useState } from 'react'

import moment from "moment"

import './card.css'

export const Card = ({ message, onLikeMessage }) => {

  // This function handles the likes.
  const onLikeClick = () => {
    // This function calls the "likeMessage" function which is part of the Card component. 
    onLikeMessage(message._id)

    // Locates the heart which was clicked, by finding the ID. We need this to color the icon and text upon clicking. 
    const heartPath = document.getElementById(`icLike_${message._id}`)
    const numberOfLikes = document.getElementById(`numberOfLikes_${message._id}`)

    // Set the color of the heart to red (FF586D).
    heartPath.setAttribute("fill", "#FF586D")
    // This sets the "d" attribute of the SVG, which essentially just replaces the outlined heart icon with a solid one. 
    heartPath.setAttribute("d", "M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z")
    heartPath.setAttribute("fill-opacity", "1")
    // Add class name "red" to the text, which colors it.
    numberOfLikes.className += ' red'
  }


  return (
    <div className="card" key={message._id}>
      <p>{message.message}</p>

      <div className="card-bottom">
        <div className="card-bottom-likes">
          <button
            className="button-like"
            onClick={onLikeClick}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {/* Default icon is the empty heart. I give them unique ID's to keep track of which one to modify when clicking (see function above) */}
              <path id={`icLike_${message._id}`} d="M16.5 3C14.76 3 13.09 3.81 12 5.09C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.42 2 8.5C2 12.28 5.4 15.36 10.55 20.04L12 21.35L13.45 20.03C18.6 15.36 22 12.28 22 8.5C22 5.42 19.58 3 16.5 3ZM12.1 18.55L12 18.65L11.9 18.55C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5C9.04 5 10.54 5.99 11.07 7.36H12.94C13.46 5.99 14.96 5 16.5 5C18.5 5 20 6.5 20 8.5C20 11.39 16.86 14.24 12.1 18.55Z" fill="black" fillOpacity="0.15" />
            </svg>

          </button>
          <p
            id={`numberOfLikes_${message._id}`}
            className="p-subtle">{message.hearts}
          </p>
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


