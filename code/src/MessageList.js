import React, {useState, useEffect} from 'react';
import { API_URL } from 'App';
import moment from 'moment';
import { MessageLike } from 'MessageLike';
import { Spinner } from 'Spinner';

export const MessageList =() => {
    const MESSAGES_URL = API_URL;
    const [messages, setMessages] = useState([]); 
    const [loading, setLoading] = useState();
   
    useEffect(() => {
        setLoading(true);
        fetch(MESSAGES_URL)
        .then((response) => {
            return response.json();
        })
        .then(data => {
            const filteredData = data.filter(message => {
                return message.message;
            })
            setMessages(filteredData);
            setLoading(false);
        })
    }, [MESSAGES_URL]);

    return (
        <div>
            {loading && <Spinner />}
            {!loading &&
                messages.map(message => (
                <div className='message-cards' key={message._id}>
                    <p>{message.message}</p>
                    <p className='message-sender'>{message.name === '' ? null : `/${message.name}`}</p>
                    <div className='message-card-bottom'> 
                        <div className='message-time'>
                            {moment(message.createdAt).fromNow()}
                        </div>
                        <MessageLike 
                            thoughtId={message._id}
                            likes={message.hearts}
                        />
                    </div>
                </div>
                ))
            }
        </div>
    )
}
