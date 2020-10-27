import React, { useState } from 'react';

import ic_like_0 from '../assets/ic_like_0.svg';
import ic_like_1 from '../assets/ic_like_1.svg';

import './card.css';

export const Card = (props) => {
  return (
    <div className="card">
      <p>{props.message}</p>
      <div className="card-bottom">
        <div className="card-bottom-likes">
          <button className="button-like">
            <img src={ic_like_0} />
          </button>
          <p className="p-subtle">{props.likes}</p>
        </div>
        <div className="card-bottom-time">
          <p className="p-subtle">{props.createdAt}</p>
        </div>

      </div>
    </div>
  )
}


