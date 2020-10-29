/* TO FIX: 
Each thought displayed inside a flex-box card?
Only show about 20 cards at a time?
Max-characters in user input */
import React from 'react';
import moment from 'moment';

import { Heart } from './Heart'

import './thoughts.css'

/* This thought-component takes care of showing all messages that has been posted to the API.
It uses a state that changes based on what the data from fetch is. */
export const Thoughts = ({ thoughts, setThoughts }) => {
    //Errormessage for nesting <p> at 27-29

    /* Use map() to show things from the array of data 
    filter through array, if thought.message isn't an 
    empty string then move it to a new array, which then the map.() iterates over*/
    return (
        <div className="thoughts__container">{thoughts.filter((thought) => thought.message !== undefined).map((thought) => {
            return (
            <div className="thoughts__card" key={thought._id}>
                <p className="thoughts__message">{thought.message}
                <span className="thoughts__info-container">
                    <img className="thoughts__heart-icon" src='./heart.png' alt='Heart icon'/>
                    {thought.hearts<10 ? <p className="thoughts__amount-of-likes">{thought.hearts>0 && thought.hearts}</p>
                    :<p className="thoughts__ten-amount-of-likes">{thought.hearts>0 && thought.hearts}</p>}
                    <p className="thoughts__time-posted"> {moment(thought.created).fromNow()}</p>
                    <Heart style={'heart__like'}text={'Like'}/>
                    </span>
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