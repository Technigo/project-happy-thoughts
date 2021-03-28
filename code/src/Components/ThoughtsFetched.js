import React from 'react'
import Thought from './Thought'

export const ThoughtsFetched = (props) => {
  return (
    <>
        {
            props.latestThoughts.map(thought => {
                return (
                    <Thought
                        key={thought._id}
                        id={thought._id}
                        message={thought.message}
                        hearts={thought.hearts}
                        createdAt={thought.createdAt}
                        __v={thought.__v}
                        heart={props.heart}
                        heartedThoughts={props.heartedThoughts}
                    />
                )
            })
        }
    </>
  )
}

export default ThoughtsFetched