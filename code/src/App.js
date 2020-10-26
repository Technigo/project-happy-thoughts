import { LikeCounter } from "LikeCounter";
import { Loader } from "Loader";
import React, { useState, useEffect } from "react";
import { Thought } from "Thought";
//import { Detail } from "./Detail";
import { Form } from "./Form"
/*TO DO
  - Fixa datumformatet moment.js -> efter att föreläsningen är uppe
  - CSS -> halvklart
   klart - En counter som räknar hur många gånger man tryckt på like-knappen
 klart  - En reset som resettar formuläret och count på validinput
*/ 
export const App = () => {
  const [thoughts, setThoughts] = useState([]);
  const [newUserMessage, setNewUserMessage] = useState("");
  const [messageOK, setMessageOK] = useState(true);
  const [likeCount, increaseLikeCount] = useState(0);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    fetch("https://happy-thoughts-technigo.herokuapp.com/thoughts")
    .then((res) => res.json())
      //set the result from api-call in state variable.
     .then((data) => {
       setThoughts(data);
       setLoading(false);
      
      });
  }, []);

  const handleLikes = () => {
    console.log("In app, handle likes");
    increaseLikeCount((likeCount) => likeCount+1);
  }
  const handleSubmit = (newMessage) =>{
    setNewUserMessage(newMessage);
    postThought(newMessage);
  }

  const postThought = (message) => {

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    const messageToPost = JSON.stringify({"message": message});
    
    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: messageToPost,
      redirect: 'follow'
    };
    
    fetch("https://happy-thoughts-technigo.herokuapp.com/thoughts", requestOptions)
    .then((res) => 
      res.json()
    )
    .then((newThought) => { 
       console.log(newThought);
       if(newThought.errors !== undefined)
       {
          setMessageOK(false);
          console.log(newThought.message);

       } else {
        setMessageOK(true);
       
        setThoughts((previousThoughts) => [newThought, ...previousThoughts]) }
        }
    
    )
    
}
  
return(
<section className="app-container">
{likeCount > 0 && <LikeCounter numberOfLikes={likeCount}/>}
  <Form 
      submitForm = {handleSubmit}
  />

  {!messageOK && <p>Couldn't save message, check the length (5-140) and try again.</p>}
  {loading && <Loader />}
  {!loading &&
  <section className="thoughts-list">
      {thoughts.map((thought) => (
        <Thought 
         key= {thought._id}
          id = {thought._id}
          message = {thought.message}
          createdAt = {thought.createdAt}
          hearts = {thought.hearts}
          onLike = {handleLikes}
        />
        ))}
  </section>}
   
</section>
)
}
