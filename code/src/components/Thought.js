import React from 'react'
import { formatRelative } from 'date-fns'

const Thought = (props) => {

    const addLikeOnHeartClick = (id) => {
        fetch(`https://happy-thoughts-technigo.herokuapp.com/thoughts/${id}/like`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }
        })
            ;

    }
    return (
        <div className="container thought" key={props._id}>
            <h4>{props.message}</h4>
            <span>
                <button onClick={() => addLikeOnHeartClick(props._id)}>
                    ❤️
                </button>
                x {props.hearts}</span>
            <p>{formatRelative(Date.parse(props.createdAt), new Date())}</p>

        </div>
    )
}
export default Thought