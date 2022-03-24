import React, { useState, useEffect } from 'react'
import { HappyMessages } from "Components/HappyMessages"
import { Form } from "Components/Form"

export const App = () => {
  const [twentyThoughts, setTwentyThoughts] = useState([]);
  // const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchTwentyThoughts();
   }, []); //when mounted

  const fetchTwentyThoughts = () => {
    // setLoading(true);
    fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts')
      .then(res => res.json())
      .then(data => setTwentyThoughts(data));
      // .finally(() => setLoading(false));
  }

//     if (loading) {
//         return <h1>Loading happy thoughts ...</h1>
// }

  return ( 
    <>

        <Form />


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