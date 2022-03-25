import React from 'react'
import { formatDistance } from 'date-fns'

const ThoughtList = ({ loading, thoughtList, handleLikesIncrease }) => {

    if (loading) {
        return <h1>Loading in progress...</h1>
    }


    return (

        <section>
            {thoughtList.map(singleThought => (
                <article className="card" key={singleThought._id}>
                    <p className="thought-message">{singleThought.message}</p>
                    <div className="likes">
                        <div className="button-card">
                            <button
                                onClick={() => handleLikesIncrease(singleThought._id)}
                                className="like-button"
                            >
                                <span className="heart" aria-label="heart-icon" role="img">
                                    &#10084;&#65039;
                                </span>
                            </button>
                            <span className="like-amount"> x {singleThought.hearts}</span>
                        </div>
                    </div> 
                    <p className="date">{formatDistance(new Date(singleThought.createdAt), Date.now(), {
                        addSuffix: true,
                    })}
                    </p>

                </article>
            ))}
        </section>
    )

}

export default ThoughtList