import React from 'react'
import { Like } from 'Like'
import './message.css'
const moment = require('moment')

export const Message = ({ thougth, setThougths }) => {
    const message = thougth.message;
    const date = thougth.createdAt;
    const hearts = thougth.hearts;
    const id = thougth._id;

    return (
        <div className="message-container">
            <h3 className="message">{message}</h3>
            <div className="message-botton-container">
                <Like hearts={hearts} id={id} thougth={thougth} setThougths={setThougths} />
                <p className="message-date">{moment(date).startOf('minute').fromNow()}</p>
            </div>
        </div>
    )
}
