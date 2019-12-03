import React, { useState, useEffect } from 'react';
import ReactDOM from "react-dom";



export const App = () => {
  const [thouhgts, setThoughts] = useState([])


  useEffect(() => {
    fetch('https://technigo-thoughts.herokuapp.com')
      .then(res => res.json())
      .then(json => console.log(json))

  })


  return (
    <div>
      <ul>
        <li>Name</li>
      </ul>
    </div>
  )
}