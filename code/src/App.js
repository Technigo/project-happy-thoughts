import React, {useState, useEffect} from 'react'
import ThoughtList from 'components/ThoughtList.js'
import ThoughtForm from 'components/ThoughtForm.js'



export const App = () => {

    const [thoughtList, setThoughtList] = useState([])
    const [loading, setLoading] =useState(false)
    const [newThought, setNewThought] = useState ('')

    useEffect(() => {
      fetchThoughts();
      }, []);
      
    const fetchThoughts = () => {
      setLoading(true)
      fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts')
      .then((res) => res.json())
      .then((data) => setThoughtList(data))
      .finally (() => setLoading(false))
    }
           console.log(thoughtList)

    const handleNewThought = (event) => {
      setNewThought(event.target.value)
    }

    const handleFormSubmit = (event) => {
      event.preventDefault()
    
        const options = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              message: newThought
          })
        }

        fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts', options)
          .then(res =>res.json())
          .then(() => fetchThoughts())
          .finally(() => setNewThought(''))
    }
    

  return (
    <div>
      <ThoughtForm newThought={newThought} handleNewThought={handleNewThought} handleFormSubmit={handleFormSubmit} />
      <ThoughtList loading={loading} thoughtList={thoughtList}/>
    </div>
  )
}
