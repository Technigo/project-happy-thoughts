import React, { useState } from 'react'

export const App = () => {

  const [thoughts, setThoughts] = useState([]) 
  const handleFormSubmit = (event) => {
    event.preventDefault()
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
    <div>
      <h1>{}</h1>
    </div>
  )

  } 
  
