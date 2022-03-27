import React, { useState } from 'react'

const Thought = (props) => {

    const addLikeOnHeartClick = (id) => {
        fetch(`https://happy-thoughts-technigo.herokuapp.com/thoughts/${id}/like`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }
        })
            ;

    }
    return (
        <div key={props._id}>
            <h4>{props.message}</h4>
            <span>
                <button onClick={() => addLikeOnHeartClick(props._id)}>
                    ❤️
                </button>
                x {props.hearts}</span>
            <p>{props.createdAt}</p>

        </div>
    )
}
export default Thought