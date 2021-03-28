import React from 'react'

import { ThoughtElement } from './ThoughtElement'

export const ThoughtList = ({ happyThoughtsList, handleHeartsIncrease}) => {
    return(
        <div className="posted-thoughts-container">
            {happyThoughtsList.map(thought => (
                <ThoughtElement 
                    thought={thought}
                    onHeartsIncrease={handleHeartsIncrease}
                    key={thought._id}
                />
            ))}
        </div>
    )
}