import React, { useEffect, useState } from 'react'
import moment from 'moment'

const MessageList = () =>{
const THOUGHT_URL='https://happy-thoughts-technigo.herokuapp.com/thoughts';
const LIKE_URL='https://happy-thoughts-technigo.herokuapp.com/thoughts/{thought._id}/like'
const [thoughts, setThoughts]= useState([]);



    useEffect(() =>{
        fetch(THOUGHT_URL)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log(data);
                setThoughts(data);
            }); 
        }, []);
    return (
        <div>
            {thoughts.map((thought) =>{
                return <article> 
                        <p className="thought" key={thought._id}>
                        {thought.message} </p> 
                        <div className="hearts-container">
                        <button className ="hearts-button" onClick="">&#10084;</button>
                        <p className="hearts"> x {thought.hearts}</p>
                            <p>{moment(thought.createdAt).fromNow()}</p>
                        </div>
                    </article>
              
            })}
        </div>
    );
};
export default MessageList; 