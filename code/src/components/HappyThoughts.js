import React, { useEffect } from 'react'
import { useState } from 'react'
import { moment } from 'moment'


export const HappyThoughts = () =>  {
    const THOUGHTS_URL ='https://happy-thoughts-technigo.herokuapp.com/thoughts';
    const [thoughts, setThoughts] = useState([]);

    useEffect(() => {
    fetch(THOUGHTS_URL)
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        console.log(data);
        setThoughts(data);
    });
    }, []);

    return (
    <div>{thoughts.map(message => {
        return (
            <p className='message' key={message._id}>
            {message.message}
            {/* {moment(message.createdAt).fromNow()} */}
            </p>
        );
        })};
        </div>
    );
    };