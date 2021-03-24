import React from 'react'
import moment from 'moment'
import './Styles/ThoughtCard.css'
import { API_URL_LIKE } from '../Reusables/urls';

 const ThoughtCard = (props) => {

    //Props ot be sent into ListTextField

    const _id = props.thought._id
    const message = props.thought.message
    const createdAt = props.thought.createdAt
    const hearts = props.thought.hearts

    console.log(props.thought)

   
        const onLikesIncrease = () =>{
            fetch(API_URL_LIKE(_id), {
                method: "POST",
                headers: {"Content-Type": "application/json"},
            }).then(() => props.onLiked(_id))
            }

    return (
        <div className="thought-card"> 
                <h4 className="thought-message">{message}</h4>
                <div className="thought-card-info">
                    <div className="likes-container">
                        <button className={hearts > 0 ? 'button-liked' : 'button-unliked'}
                            onClick={() => onLikesIncrease(_id)}
                        >
                            <span className="heart" role="button" aria-label="heart"> ❤️ </span>
                            
                        </button> <p className='number-of-hearts'> X {hearts}</p>
                    </div>
                    <p className="created-at">{moment(createdAt).fromNow()}</p>
                </div>
        </div>
    )
}

export default ThoughtCard
