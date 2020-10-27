import moment from 'moment';
import React, { useState, useEffect } from 'react'



export const MessageList = () => {
    const FETCH_URL = 'https://happy-thoughts-technigo.herokuapp.com/thoughts'
    const [messages, setMessages] = useState([])

    useEffect(() => {
        fetch(FETCH_URL)
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                console.log(data)
                const filteredData = data.filter((getMessage) => getMessage.message)
                setMessages(filteredData.slice(0, 20))
            });
    }, []);

    return (
        <div>
            {messages.map((getMessages) => {
                return (
                    <div key={getMessages._id}>
                        <div>
                            <p>{getMessages.message}</p>
                        </div>
                        <div>
                            <p><img url="../image/heart.svg" />{getMessages.hearts}</p>
                            <p>{moment(getMessages.createdAt).fromNow()}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}