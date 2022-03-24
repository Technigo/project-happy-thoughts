import React from 'react'
import moment from 'moment'
import { HeartIcon } from './HeartIcon'

export const ThoughtsList = ({ thoughts, onLikes }) => {
        
    return (
        <section>
               <div>
                   <h4>{thoughts.message}</h4>
                   <div className='likes-wrapper'>
                   <button className='like-btn' onClick={() => onLikes(thoughts._id)}>
                   <HeartIcon symbol="❤️" label="heart"/> 
                   </button>
                   <p className="likes">x {thoughts.hearts}</p>
                   </div>
                   <p>{moment(thoughts.createdAt).fromNow()}</p>
                   </div>
                    
            )
            </section>
    )
}