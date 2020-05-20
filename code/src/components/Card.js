import React, { useState, useEffect } from 'react'
import moment from 'moment'
import './card.css'

const MESSAGES_URL = 'https://app-happy-thought.herokuapp.com/';

export const Card = ({ thought, onLiked }) => {
    const { hearts, _id } = thought

    const handleClick = () => {
        fetch(MESSAGES_URL`thoughts/${_id}/like`, {
            method: 'POST',
            body: '',
            headers: { 'Content-Type': 'application/json' }
        }).then(() => onLiked(_id))

    }

  return (
    <article>
        {      <p className="message card" key={thought._id}>
                        {thought.message}
                        <button
                        onClick={handleClick}
                        className={
                            hearts > 5 ? 'heart superLiked' : hearts > 0 ? ' heart liked' : 'heart send-like'
                        }
                        >
                        <span role='img' aria-label='Heart'>❤️</span>
                        </button> x {thought.hearts}

                        <span className="message-time">
                            {moment(thought.createdAt).fromNow()}
                        </span>
                    </p>
                
            
                
        }
    </article>
  )
}