import React from "react";
import moment from "moment";

const ThoughtList = ({ loading, thoughtList }) => {

    if (loading) {
        return <h1>Loading in progress...</h1>
    } 

    return (
        <section>
            {thoughtList.map(singleThought => (
                <article key={singleThought._id}>
                    <h4>{singleThought.message}</h4>
                    <button>{singleThought.hearts}</button>
                    <p>{moment(singleThought.createdAt).fromNow()}</p>
                </article>
            ))}
        </section>
    )
}

export default ThoughtList