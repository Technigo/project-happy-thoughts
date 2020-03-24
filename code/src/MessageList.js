import React, {useState, useEffect} from 'react'
import moment from 'moment';
import { MessageLike } from 'MessageLike';
import { Spinner } from 'Spinner'

export const MessageList =() => {
    const MESSAGES_URL = 'https://technigo-thoughts.herokuapp.com/';
    const [messages, setMessages] = useState([]); 
    const [loading, setLoading] = useState();
   
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {

           fetch(MESSAGES_URL)
            .then((response) => {
                return response.json();
            })
            .then(data => {
                console.log(data)
                const filteredData = data.filter(message => {
                    return message.message;
                })
                setMessages(filteredData);
                setLoading(false)
            })
        }, 2000)
    }, []);

    return (
        <div>
            {loading && <Spinner />}
            {!loading &&
                messages.map(message => (
                <div className='message-cards' key={message._id}>
                    <p>{message.message}</p>
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