import React, {useState, useEffect} from 'react'
import { ThoughtsList } from 'Components/ThoughtsList'
import { ThoughtsForm } from 'Components/ThoughtsForm'

    
export const ThoughtPage = () => {
        const [list, setList] = useState([])
        const [loading,setLoading] = useState(false)
        const [newMessages, setNewMessages] = useState('')

        useEffect(() => {
            fetchList()
        }, [])
         const fetchList = () => {
            setLoading(true)
            fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts')
            .then(res => res.json())
            .then(data => setList(data))
            .catch(error => console.error(error))
            .finally(() => setLoading(false))
            }

            const handleNewMessagesChange = (event) => {
                setNewMessages(event.target.value)
            }

            const onFormSubmit = (event) => {
                event.preventDefault()
                 const options =  {
                        method: 'POST',
                        headers: {
                            'content-Type': 'application/json'
                        },
                        body: JSON.stringify ({
                            message : newMessages
                        })
                    }
                    fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts', options)
                    .then(res => res.json())
                    .then(data => fetchList())
            }
           
  return (
    <div>
      <ThoughtsForm 
      newMessages ={newMessages}
      onNewMessagesChange= {handleNewMessagesChange}
      onFormSubmit={onFormSubmit}
      />

      <ThoughtsList 
      loading = {loading}
      list={list}
      />
    </div>
  )
}
