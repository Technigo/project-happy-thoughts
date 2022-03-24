import React from 'react'
import moment from 'moment'

const ThoughtList = ({ loading, thoughtList, handleHeartLikes }) => {

         if (loading) {
             return <h1>Loading in progress...</h1>
         }

         return (
             <section>
                 {thoughtList.map((singleThought) => (
                     <div key={singleThought._id}>
                         <div className='message'>
                            <h3>{singleThought.message}</h3>
                         </div>
                         <div className="heart-container">
                            <button onClick={() => handleHeartLikes(singleThought._id)}>
                                <span role='img' aria-label='heart emoji'>❤️</span>
                            </button>
                            <p>x {singleThought.hearts}</p>
                         </div> 
                         <div className='timestamp'>
                            <p>{moment.utc(singleThought.createdAt).fromNow()}</p>
                         </div>
                     </div>
                 ))}
             </section>
         )
     }
 
 export default ThoughtList
 