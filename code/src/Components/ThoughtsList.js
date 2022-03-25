import React from 'react'
import { formatDistance } from 'date-fns'

const ThoughtsList = ({ loading, thoughtsList, onLikesIncrease}) => {
   


        if (loading) {
            return <h1>Loading in progess...</h1>
        }

        return (
            <section className="message-container">
                {thoughtsList.map((singleThought) => (
                   <div className="card"
                   key = {singleThought._id}>
                   <div>
                      <h4 className="message-text">{singleThought.message}</h4>
                      <div className="heartandlikes">
                        <button className={(singleThought.hearts === 0 ? "like-button" : "red-likebutton")} onClick={() => onLikesIncrease(singleThought._id)}> 
                        <span className="emoji" role="img" aria-label="heart">❤️ </span> </button> 
                        <p>   x {singleThought.hearts}</p>
                    </div>
                      <p>{formatDistance(new Date(singleThought.createdAt), Date.now(), {addSuffix: true
                         })}
                      </p>

                    </div>
                    </div>))}
            </section>
        )
}

export default ThoughtsList

