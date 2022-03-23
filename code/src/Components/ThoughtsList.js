import React from 'react'
import moment from 'moment'
import { HeartIcon } from 'Components/LikedThoughts'

export const ThoughtsList = ({list}) => {
    return (
        <section>
           {list.map(thoughts => (
               < div key={thoughts._id}>
                   <h4>{thoughts.message}</h4>
                   <button>
                       <HeartIcon symbol='❤️'/>
                   </button>
                   <p> x {thoughts.hearts}</p>
                   <p>{moment(thoughts.createdAt).fromNow()}</p>
                   </div>
           ))}
        </section>
    )
}





