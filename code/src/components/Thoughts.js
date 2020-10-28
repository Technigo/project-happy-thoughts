import React from 'react';
import moment from 'moment'

export const Thoughts = props => {
  const TEXT_URL = 'https://technigo-thoughts.herokuapp.com/'
  const [thoughts, setThoughts] = (useState)('');
  
  const handleSumbit = event => {
    event.preventDefault();

    fetch(TEXT_URL, {
      method: 'post',
      body: JSON.stringify({ thoughts }),
      headers: { 'Content-Type': 'application/json' }
    })

    .then(() => {
      setThoughts('');
      props.onSubmit(thoughts)
    })
}
}

return (
  <form onSubmit={handleSumbit}>
   <label className="input">
     <h2>WHAT MAKES YOU HAPPY?</h2>
     </label> 
  </form>
)

