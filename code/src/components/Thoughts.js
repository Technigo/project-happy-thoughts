/* TO FIX: 
Each thought displayed inside a flex-box card?
Only show about 20 cards at a time?
Max-characters in user input */
import React, { useEffect, /* useState */ } from 'react';
import moment from 'moment';

import { THOUGHTS__URL } from './urls'
import { Heart } from './Heart'

import './thoughts.css'

/* This thought-component takes care of showing all messages that has been posted to the API.
It uses a state that changes based on what the data from fetch is. */
export const Thoughts = ({ thoughts, setThoughts }) => {
    /* const [thoughts, setThoughts] = useState([]) */

    /* We need to use useEffect because we don't want this to rerender on 
    each refresh, only when it's neccessary and [] is updated.
    You need to use the empty array to only render on change, 
    otherwise it will contiue to do the fetch in an infinite loop */
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

    /* Use map() to show things from the array of data 
    filter through array, if thought.message isn't an 
    empty string then move it to a new array, which then the map.() iterates over*/
    return (
        <div className="thoughts__container">{thoughts.filter((thought) => thought.message !== undefined).map((thought) => {
            return (
            <div className="thoughts__card" key={thought._id}>
                <p className="thoughts__message">{thought.message}
                    <span><img className="thoughts__heart-icon" src='./heart.png' alt='Heart icon'/></span>
                    <span className="thoughts__amount-of-likes">{thought.hearts>0 ? thought.hearts: <Heart/>}</span>
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