import React, { useState, useEffect } from 'react'

export const App = () => {
  const [thoughts, setThoughts] = useState([]) //should be empty array because later it will be non empty array

  useEffect (() => {
    fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts')
    .then((res) => res.json())
    .then((data) => setThoughts(data))
  }, []) //pass an empty array

  console.log(thoughts)



  return ( //component renders some js6. After js6 rendered first time then useEffect gets triggered with console log
    <div>Find me in src/app.js!</div>
  )
}
