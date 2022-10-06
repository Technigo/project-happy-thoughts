/* eslint-disable */
/*import Components from 'eslint-plugin-react/lib/util/Components';*/
import React, { useState, useEffect} from 'react';
import ThoughtGenerator from "components/ThoughtGenerator"
import PostThought from "components/PostThought"

export const App = () => {
  // const [counter, setCounter]=useState(0);
  const [thoughts, setThoughts]=useState([]);
  const [loading, setLoading] = useState(false);
  const [newThought, setNewThought] = useState('');

  useEffect ( () => {
    fetchThoughts ()
  }, []);


  const fetchThoughts = () => {
    setLoading(true);
    fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts')
      .then((data) => data.json())
      .then((transformedData)=> setThoughts(transformedData))
      .catch(error => console.error(error))    
      .finally(() => setLoading(false))
    }
  

const onNewThoughtChange = (event) => {
  setNewThought (event.target.value) 
}


const handleFormCleanup = () => {
  setNewThought ('')
  setLoading(false) 
}

const onFormSubmit = (event) => {
event.preventDefault();

const options =
{
    method: 'POST',
    body: JSON.stringify({
        message: newThought
    }),
    headers: {
      'Content-Type': 'application/json'
  }
}

fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts', options)
.then((data) => data.json())
.then(()=> fetchThoughts())
.catch(error => console.error(error))    
.finally(() => handleFormCleanup(false))
}

if (loading) {
  return (
<p>The page is loading</p>
  )
}

return (
  <div>
    <PostThought
      newThought={newThought}
      onNewThoughtChange={onNewThoughtChange}
      onFormSubmit={onFormSubmit}
      

    />
    <ThoughtGenerator
      loading={loading}
      thoughts={thoughts}
      setThoughts={setThoughts}
    />
  </div>
);
}


  
//API -> 'https://week7-backend.herokuapp.com/tasks'
 // useEffect with emply array [] call your functions on application start



// //will trogger first when app starts and every time the variable in the dependency array changes
// useEffect (() => {
// // window.alert(`the current counter is ${counter}`);
// }, [counter])


// const handleonCounterIncreaseButtonClick = () => {
// setCounter(counter+1);
// }

  // return (
  //   <div>
  //     Find me in src/app.js! test
  //     <p>{counter}</p>
  //     <button onClick={handleonCounterIncreaseButtonClick} type="button">counter increase</button>
  // <TaskList list ={taskList}/>
   
  //   </div>
  // );
