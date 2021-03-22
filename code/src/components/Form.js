/* eslint-disable linebreak-style */
/* eslint-disable*/

import React, { useState, useEffect } from 'react';
import moment from 'moment'

import { API_URL } from './urls';

export const Form = () => {
    const[messageList, setMessageList] = useState([])
    const [messageNew, setMessageNew] = useState('')

    useEffect(() => {
        fetchMessageList()
    }, [])

    const fetchMessageList = () => {
        fetch(API_URL)
            .then(res => res.json())
            .then(messages => setMessageList(messages))
            .catch(err => console.error(err))
    }

    const onMessageNewChange = (event) => {
        setMessageNew(event.target.value)
    }

    const onFormSubmit = (event) => {
        event.preventDefault()

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message: messageNew })
        }

        fetch(API_URL, options)
            .then(res => res.json())
            .then(receivedMessage => setMessageList([...messageList, receivedMessage]))
            
    }



    return (
        <div>
            <form onSubmit={onFormSubmit}>
                <label htmlFor="newMessage">Write new message!</label>
                <input
                    id="newMessage"
                    type="text"
                    value={messageNew}
                    onChange={onMessageNewChange}
                />    
                <button type="submit">Send message!</button>

            </form>

            {messageList.map(message => (
                <div key={message._id}>
                    <h4>{message.message}</h4>
                    <p className="time-from-now">posted {moment(message.createdAt).fromNow()}</p>
                </div>
            ))}
        </div>
    )



}


