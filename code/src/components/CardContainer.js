import React from 'react'
import moment from 'moment'

import { LikeButton } from './LikeButton'

export const CardContainer = (props) => {



return (
  <div>
      {console.log(props.thoughtsList)}
      {props.thoughtsList.map(thoughts => (
        <div className="card-container" key={thoughts._id}>
            <p className="thought-text">{thoughts.message}</p>

            <div className="container-bottom-card">
            <LikeButton 
            thoughts={thoughts}
            OnLikesIncrease={props.HandleLikesIncrease}
            />
            <p className="like-counter">x {thoughts.hearts}</p>
            <p className="thought-post-time">{moment(thoughts.createdAt).fromNow()}</p>
            </div>
          </div>
        ))}
        
    </div>
  )
}