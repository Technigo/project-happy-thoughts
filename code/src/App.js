import React, { useState, useEffect } from 'react'
import { HappyMessages } from "Components/HappyMessages"

export const App = () => {
  const [twentyThoughts, setTwentyThoughts] = useState([]);

  useEffect(() => {
    fetchTwentyThoughts();
  }, []); //when mounted

  const fetchTwentyThoughts = () => {
    fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts')
      .then(res => res.json())
      .then(
        data => setTwentyThoughts(data)
      //   json =>
      // console.log(json) 
      );
  };



  return ( 
    <>
        {twentyThoughts.map(twentyThoughts => (
        <HappyMessages
          key={twentyThoughts._id}
          twentyThoughts={twentyThoughts}
        />
         ))}
    </>
  )
  }

  export default App;