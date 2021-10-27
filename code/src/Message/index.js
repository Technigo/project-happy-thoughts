import React from 'react'
import { Like } from 'Like'
import './message.css'
import moment from 'moment';

export const Message = ({ thougth, thougths, setThougths, fetchThougths }) => {
    const message = thougth.message;
    const date = thougth.createdAt;
    const hearts = thougth.hearts;
    const id = thougth._id;

    return (
        <div className="message-container">
            <h3 className="message">{message}</h3>
            <div className="message-botton-container">
                <Like hearts={hearts} id={id} thougths={thougths} setThougths={setThougths} fetchThougths={fetchThougths} />
                <p className="message-date">{moment(date).fromNow()}</p>
            </div>
        </div>
    )
}
