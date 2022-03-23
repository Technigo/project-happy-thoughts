import React from 'react'
import { /*formatRelative,*/ formatDistance } from 'date-fns';
import parseISO from 'date-fns/parseISO';

import Button from './Button'

const ThoughtsList = ({thoughts, heartIcon, handleLikes}) => {

    return (
        <div>
            {thoughts.map((thought) => (
                <div key={thought._id} className='thought card'>
                    <h2 className='thought-header'>{thought.message}</h2>
                    <div className='likes-container'>
                        <Button 
                            message={heartIcon}
                            className={'like-button'}
                            type={''}
                            onClick={() => handleLikes(thought._id)}
                            disabled={false}
                            thought={thought}
                        />
                        <p className='number-of-likes'> x {thought.hearts}</p>
                    </div>
                    <p className='posted-date'>{formatDistance(parseISO(thought.createdAt), new Date(), { addSuffix: true })}</p>
                </div>
            ))}
        </div>
    )
}

export default ThoughtsList
