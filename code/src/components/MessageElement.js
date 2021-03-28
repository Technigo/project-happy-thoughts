import React from 'react';
import moment from 'moment';

import Emoji from '../reusable/Emoji';
import '../styles/MessageElement.css'

const MessageElement = ({ messagePost, onLikesIncrease }) => {
    return (
        <>
            <div className="recieved-message-container" key={messagePost._id}>
                <h4 className="message-input">{messagePost.message}</h4>
                <div className="like-button-and-date-container">
                    <button className="like-button" onClick={() => onLikesIncrease(messagePost._id)}>
                        <div className="heart-container">
                            <Emoji symbol="❤️" />
                        </div>
                        <div aria_label="number of likes" className="like-count">
                        x
                        {messagePost.hearts}
                        </div>                                                               
                    </button>
                    <p aria_label="time when posted" className="date">{moment(messagePost.created).fromNow()}</p>
                </div>
            </div>
        </>
    );
}

export default MessageElement;