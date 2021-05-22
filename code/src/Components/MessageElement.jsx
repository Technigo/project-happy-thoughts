import React from 'react';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 

export const MessageElement = ({ message, onHeartClick }) => {
    return (
        <div 
            className="thought-div"
            key={message._id}
        >
            <h4>{message.message}</h4>
            <h5>{message.name}</h5>
            <div className="heart-time-div">
                <div className="likes"> 
                    <button
                        onClick={() => onHeartClick(message._id)}
                        className={message.hearts > 0 ? "multiple-hearts" : "heart"}>
                        <span><FontAwesomeIcon icon={['fa', 'heart']} /></span>
                    </button>
                    <p>
                        x {message.hearts}
                    </p>
                </div>
                <p>{moment(message.createdAt).fromNow()}</p>
            </div>
        </div>
    )
}