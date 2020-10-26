/* Thought component that shows all the thoughts in a nice way
Should also show when the thought was posted (10 minutes ago/5 seconds ago)
Each thought displayed inside a flex-box card? 
GET https://happy-thoughts-technigo.herokuapp.com/thoughts 
THousghts are going to be an array that is displayed, Use a map() to show each thought on different card?*/
import React, { useEffect, useState } from 'react';
import moment from 'moment';

import './thoughts.css'


export const Thoughts = () => {
    const [thoughts, setThoughts] = useState([])
    const THOUGHTS__URL = 'https://wk11livesession.herokuapp.com/messages'

    /* We need to use useEffect because we don't want this to rerender on 
    each refresh, only when it's neccessary and [] is updated
    You need to use the empty array to only render on change */

    useEffect(() => {
        fetch(THOUGHTS__URL)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log(data);
                setThoughts(data);
            })
    }, []);

    /* Use map() to show things from the array of data */
    return (
        <div className="thoughts__container">{thoughts.map((thought) => {
            return (
            <div className="thoughts__card">
                <p className="thoughts__message" key={thought._id}>{thought.text}
                    <span className="thoughts__time-posted">{moment(thought.created).fromNow()}</span>
                </p>
            </div>
        )})}
        </div>
    )
}

/* const [thoughts, setThoughts] = useState ([])
    const THOUGHTS__URL = 'https://happy-thoughts-technigo.herokuapp.com/thoughts'

fetch(THOUGHTS__URL, {
    method: 'GET',
    body: JSON.stringify({message: {thoughtList}})
})
.then((response) => response.json())
.then((newThought) => {
    setThoughts((previousThoughts) =>[newThought, ...previousThoughts])
})  */