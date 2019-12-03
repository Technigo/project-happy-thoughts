import React, {useState, useEffect} from 'react'


export const App = () => {
  const [thoughts, setThoughts] = useState([])
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    fetch('https://technigo-thoughts.herokuapp.com/')
    .then (res => res.json())
    .then (json => setThoughts(json));

    

      

  }, []);
  return (
    <form className="background">
      <div className="inputField">
      <p>What's making you happy right now?</p>
      <input /><br />
      <button className="button" type="submit" onClick={() => setSubmitted(true)}>Send happy thought</button>
      </div>
      <ul>
        {thoughts.map(thought => (
      <li className="li" key={thought.message}>{thought.message}<br></br>x{thought.hearts}</li>
        ))}
       
      </ul>
    </form>
  )
}
