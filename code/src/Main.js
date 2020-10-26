import React, { useState, useEffect } from "react";

import Form from "./Form";
import List from "./List";



const Main = () => {
    const THOUGTHS_URL ="https://happy-thoughts-technigo.herokuapp.com/thoughts";
    const [thoughts, setThoughts] = useState([]) 
    const [messages , setMessages] = useState ([]);
    const [happy, setHappy] = useState([]) 
    
     const handleFormSubmit = (event) => {
     event.preventDefault() }


   useEffect(() => {
    fetch(THOUGTHS_URL , { 
        method: 'POST', 
        body: JSON.stringify({ message: 'Hello world' })
      })
        .then((res) => res.json())
        .then((newThought) => {
    
          setThoughts((previousThoughts) => [newThought, ...previousThoughts])
        })
   });

    return (
      <>
        <form>
            <Form /> 
        </form> 
        <List messages={messages} setMessages ={setMessages} /> 
      </>
    );
  }
   
export default Main;