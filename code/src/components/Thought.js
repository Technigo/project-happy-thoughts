import React from 'react'
import { formatDistance } from 'date-fns'
import parseISO from 'date-fns/parseISO'

const Thought = ({thought, handleLikes}) => {
    console.log(thought)

    const timePosted = formatDistance(parseISO(thought.createdAt), new Date(), {addSuffix:true})
    return (
        <section className='post-container'>
            <div className='post-content'>
                <p key={thought._id}>{thought.message}</p>
                <div className='info-group' >
                    <div>
                        <button className='btn-heart' 
                            onClick={() => handleLikes(thought._id)}>
                            <span role='img' aria-label='heart'>❤️
                            </span>
                        </button>
                        <span className='like-counter'>x {thought.hearts}</span>
                    </div>
                    <p className='time-stamp'>{timePosted}</p>
                </div>
            </div>
        </section>
    )
}

export default Thought