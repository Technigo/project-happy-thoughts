import React from 'react'

const Thoughts = ({thoughts, setThoughts }) => {

    return (
        <div>
            <ul>
                {thoughts.map(thought => (
                <li key={thought._id}>
                {thought.message}
                </li>  
                ))}        
            </ul>  
        </div>
    )
}

export default Thoughts