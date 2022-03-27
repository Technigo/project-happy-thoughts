import React from 'react'
import { formatDistance } from 'date-fns'

const Thought = (props) => {

    const addLikeOnHeartClick = (id) => {
        fetch(`https://happy-thoughts-technigo.herokuapp.com/thoughts/${id}/like`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }
        });

    }
    return (
        <div className="container thought" key={props._id}>
            <h4>{props.message}</h4>
            <div className="thoughtFooter">
                {/* Ternary operator to change ClassName when hearts are 0 */}
                <div className={"heartButton " + (props.hearts > 0 ? "heartButtonWithLikes" : "")}>
                    <button onClick={() => addLikeOnHeartClick(props._id)}><span className="heart">❤️</span></button>
                    <span className="numberOfHearts">x {props.hearts}</span>
                </div>
                <span className="thoughtRelativeDate">{formatDistance(Date.parse(props.createdAt), new Date(), { addSuffix: true })}</span>
            </div>
        </div>
    )
}
export default Thought