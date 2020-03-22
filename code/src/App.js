import React, { useState, useEffect } from 'react';
import ReactDom from 'react-dom';
import { Form } from './components/Form';


export const App = () => {

  const [thoughts, setThoughts] = useState([]) 
  const [myPost, setMyPost] = useState('')

  useEffect(() => {
    
    fetch("https://technigo-thoughts.herokuapp.com/")
      .then(res => res.json())
      .then(json => setThoughts(json)
      )}, [myPost])
  
      const handleFormSubmit = message => {
        fetch("https://technigo-thoughts.herokuapp.com/", {
          method: 'POST',
          body: JSON.stringify({ message }),
          headers: { "Content-Type": "application/json" }
        })
        .then(() => setMyPost(message))
        .catch(err => console.log("error:", err))
      }

  const requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch("https://technigo-thoughts.herokuapp.com/", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

  return (
    <Form onFormSubmit={handleFormSubmit}/>
     
  )

  } 
  
