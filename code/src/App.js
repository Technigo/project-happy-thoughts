import React, {useEffect, useState} from 'react';
import moment from 'moment';

export const App = () => {
  const [thoughts, setThoughts]= useState ([]); 
  const [newThought, setNewThought] = useState ('');
  
  
  useEffect(()=> {
    fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts' )
      .then(res => res.json())
      .then(data => setThoughts (data)); 

  }, [] ); 

const onFormSubmit = (event) => {
  event.preventDefault();

  const options = {
      method:'POST',
      headers: {
        'Content-Type': 'application/json', 
      },
     // converting to JSON is the same as wrapping the message
      body: JSON.stringify({message: newThought}), 
  };

  fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts', options)
  .then(res => res.json())
  .then((data) => setThoughts([data, ...thoughts]));
};


  return (
     <div>
          <form onSubmit ={onFormSubmit} >
<label htmlFor="newThought">Type your thought</label>
<input 
        id="newThought"
        type= "text"
        value={newThought}
        onChange= {(event) => setNewThought(event.target.value)} 
       />
       <button type="submit">Send thought!</button>
    
          </form>

         {thoughts.map(thought=>(

          <div key={thought._id}>
             <p>{thought.message}</p>
            <button> &hearts;{thought.hearts}</button>
            <p className="date">- Createt at: {moment (thought.createdA ).fromNow()}
            </p>
     </div>
    ))}
    
    </div>
  );
};
