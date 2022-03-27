import React from 'react'
import moment from 'moment'

const ThoughtList = ({ loading, thoughtList, handleHeartLikes }) => {

         if (loading) {
             return <h1>Loading in progress...</h1>
         }

         return (
             <section>
                 {thoughtList.map((singleThought) => (
                     <div key={singleThought._id} className='card'>
                         <div>
                            <h2>{singleThought.message}</h2>
                         </div>
                         <div className ="bottom-card-container">
                            <div className="heart-container">
                                <button
                                    className={singleThought.hearts > 0 ? 'likes-button clicked' : 'likes-button'}
                                    onClick={() => handleHeartLikes(singleThought._id)}
                                >
                                    <span className='heart-icon' role='img' aria-label='heart emoji'>❤️</span>
                                </button>
                                <p>x {singleThought.hearts}</p>
                            </div>
                            <div className='time-stamp'> 
                                <p>{moment.utc(singleThought.createdAt).fromNow()}</p>
                            </div>
                         </div>
                     </div>
                 ))}
             </section>
         )
     }
 
 export default ThoughtList
 