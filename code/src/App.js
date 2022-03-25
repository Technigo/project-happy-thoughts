import React, { useEffect, useState } from 'react'

import ThoughtForm from 'components/ThoughtForm'
import ThoughtList from './components/ThoughtList'

export const App = () => {
  
  return (
    <div>
      <ThoughtForm />
      <ThoughtList />
    </div>
  )
//   const [thoughtList, setThoughtList] = useState([])
//   const [loading, setLoading] = useState(false)
//   const [newThought, setNewThought] = useState('')

//   useEffect(() => {
//     fetchThoughts()
//   }, [])

//   const fetchThoughts = () => {
//     setLoading(true);
//     fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts')
//         .then(res => res.json())
//         .then(data => setThoughtList(data))
//         .catch(error => console.error(error))
//         .finally(() => setLoading(false));
//   }

//   const handleNewThoughtChange = (whatEver) => {
//     setNewThought(whatEver.target.value)
//   }

//   const onFormSubmit = (event) => {
//     event.preventDefault()

//     const options = {
//       method: 'POST',
//       headers: {
//           'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//           message: newThought
//       })
//     }

//     fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts', options)
//       .then(res => res.json())
//       .then(() => fetchThoughts())
//       .finally(() => setNewThought(''));
//   }

//   return (
//     <div>
//       <ThoughtForm
//         newThought={newThought}
//         onNewThoughtChange={handleNewThoughtChange}
//         onFormSubmit={onFormSubmit}
//       />
//       <ThoughtList
//         loading={loading}
//         thoughtList={thoughtList}
//       />
//     </div>
//   )
}
