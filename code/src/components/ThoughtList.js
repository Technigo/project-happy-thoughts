import React from "react";
import moment from "moment";

const ThoughtList = ({ loading, thoughtList, onIncreaseLikes }) => {

    if (loading) {
        return <h1>Loading in progress... <span role="img" aria-label="coffee emoji">☕</span></h1>
    } 

    return (
        <section>
            {thoughtList.map(singleThought => (
                <article className="thought-cards">
                    <h4>{singleThought.message}</h4>
                    <button 
                    className={singleThought.hearts > 0 ? "heart-button-liked" : "heart-button"}
                    onClick={() => onIncreaseLikes(singleThought._id)}>
                    <span className="heart-emoji" role="img" aria-label="heart emoji">💕</span>
                    </button>
                    {" x "}{singleThought.hearts}
                    <p>{moment(singleThought.createdAt).fromNow()}</p>
                </article>
            ))}
        </section>
    )
}

export default ThoughtList