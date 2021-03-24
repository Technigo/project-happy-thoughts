import React from 'react'
import Thought from './Thought'

export const ThoughtsFetched = (props) => {
  return (
    <>

        <div className="thoughts-fetched"> {
                props.latestThoughts.map(thought => { //thought a forEach would work as long as I made it return for every thought, but I guess not
                    return (
                        <Thought
                            key={thought._id}
                            message={thought.message}
                            hearts={thought.hearts}
                            createdAt={thought.createdAt}
                            __v={thought.__v}
                        />
                    )
                })
            }
            
        </div>
    </>
  )
}

export default ThoughtsFetched