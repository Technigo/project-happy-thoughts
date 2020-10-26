import React, { useState, useEffect } from "react";

import Form from "./Form";
import List from "./List";



const Main = () => {
    //const [happy, setHappy] = useState ([])
    //const [thoughts, setThoughts] = useState([]) 
    const [messages , setMessages] = useState ([]);
   
   //useEffect(() => {
    //fetch('https://technigo-thoughts.herokuapp.com/', { 
      // method: 'POST', 
       // body: JSON.stringify({ message: 'Hello world' })
      //})
      //.then (res => res.json())
      //.then((json) => {
       // console.log(json);
      //then ((newThought) => {
        //setThoughts((previousThoughts) => [newThought, ...previousThoughts])
        
    //});
   //}, []);
  // const handleFormSubmit = (event) => {
  //event.preventDefault() }

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