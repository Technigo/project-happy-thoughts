import React from 'react'

import HappyThought from './HappyThought'


const MessageBoard = ({ happyThoughtsList, handleIncreaseLikes }) => { 
    return (
        <>
            {happyThoughtsList.map(thought => (
                < HappyThought 
                    key={thought._id}
                    thought={thought}
                    onIncreaseLikes = {handleIncreaseLikes}
                />
            ))}
        </>
    )
}

export default MessageBoard;