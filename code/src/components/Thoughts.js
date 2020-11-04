import React from 'react'
import moment from 'moment'

import { Heart } from './Heart'

import './thoughts.css'

/* This thought-component takes care of showing all messages that has been posted to the API.
It uses a state that changes based on what the data from fetch is. */
export const Thoughts = ({ thoughts, likeMessage }) => {

    return (
        <div className="thoughts__container">{thoughts.filter((thought) => thought.message !== undefined).map((thought) => {
            return (
                <div className="thoughts__card" key={thought._id}>
                    <div>
                        <p className="thoughts__message">{thought.message}</p>
                    </div>
                    <div className="thoughts__info-container">
                        <div className="thoughts__like-container">
                            <Heart styled={'heart__like'} text={'Like'} onClick={() => likeMessage(thought._id)} />
                            {thought.hearts > 0 && <p className="thoughts__amount-of-likes">x{thought.hearts}
                            </p>
                            }</div>
                        <p className="thoughts__time-posted"> {moment(thought.created).fromNow()}</p>
                    </div>
                </div>
            )
        })}
        </div>
    )
}