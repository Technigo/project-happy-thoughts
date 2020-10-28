import React, { useEffect, useState } from 'react';

export const MessageList = () => {
    const Messages_URL = 'https://happy-thoughts-technigo.herokuapp.com/thoughts';
    const [messages, setMessages] = useState([]);

    useEffect(() => {
    fetch(Messages_URL)
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        console.log(data);
        setMessages(data);
    });
},[]);
// Leaving empty squarebrackets to stop it updating constantly 
return <div>{messages.length}</div>;
};


// use state and effect when you want to do a fetch, if you are only sending data you might not have tu use state at all. 