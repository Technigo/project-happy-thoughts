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
  //const [likeCount, increaseLikeCount] = useState(0);
  const [loading, setLoading] = useState(true);
  //use the value in localstorage, if it exists. otherwise use 0
  //arrow function, only runs once on first render
  const initialLikeCount = () => Number(window.localStorage.getItem("count")) || 0
  const [likeCount, increaseLikeCount] = useState(initialLikeCount);

  useEffect(() => {
    getThoughts();
  }, []);

  //useEffect for saving the likeCount in local storage
 useEffect(()=>{
   window.localStorage.setItem("count",likeCount);
 },[likeCount])

  const getThoughts = () =>{
    fetch("https://happy-thoughts-technigo.herokuapp.com/thoughts")
    .then((res) => res.json())
      //set the result from api-call in state variable.
     .then((data) => {
       setThoughts(data);
       setLoading(false);
      
      });
  }

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
       getThoughts();
        //setThoughts((previousThoughts) => [newThought, ...previousThoughts]) }
        }
      }
    ).catch((error) => console.log(error))
  }

  
 
return(
<section className="app-container">
  <header className="header">
{likeCount > 0 && <LikeCounter numberOfLikes={likeCount}/>}
</header>
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
