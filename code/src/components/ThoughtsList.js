import React, {useState, useEffect} from 'react';

import moment from 'moment';

import "styles/thoughtsList.css";


export const ThoughtsList = () => {
    const thoughtsUrl = 'https://happy-thoughts-technigo.herokuapp.com/thoughts';
    const [thoughts, setThoughts] = useState ([]);

    useEffect(() => {
    fetch(thoughtsUrl)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
        console.log(data);
        // Save the data to state
        setThoughts(data)
        });
    }, []);

    return (
     <section>
        {thoughts.map((happythought) => {
            return  (
            <article className='happy-thought' key={happythought._id}> 
            {happythought.message}
            <span className='happy-thought--time'>
            {moment(happythought.createdAt).fromNow()}
            </span>
            </article>
            );
        })}
     </section>
    )
}