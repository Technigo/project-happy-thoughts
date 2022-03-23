import React, {useState, useEffect} from 'react'
import Status from './Status'
import Form from './Form'

const Page = () => {
    const [recentMessages, setRecentMessages] = useState([])
    const [loading, setLoading] = useState(false)
    const [newMessage, setNewMessage] = useState('')

    useEffect(
        () => { 
    fetchRecentMessages() },
    [])

    const fetchRecentMessages = () => {
        setLoading(true)
        fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts')  
          .then((res) => res.json())
          .then((data) => setRecentMessages(data))
          .finally(() => setLoading(false))
          
        
        }   

    const handleNewMessage = (event) => {
         setNewMessage(event.target.value)
    }


    const onFormSubmit = (event) => {
        event.preventDefault()
    
        const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                    },
                body: JSON.stringify({
                    message: newMessage
                    })
                }
    
        fetch(
            'https://happy-thoughts-technigo.herokuapp.com/thoughts', options)
            .then(res => res.json())
            .then(() => fetchRecentMessages())
            .finally(() => setNewMessage(''))
    }

return (
    <div className="container">
        <Form newMessage={newMessage} onNewMessage={handleNewMessage} onFormSubmit={onFormSubmit}/>
        <Status loading={loading} recentMessages={recentMessages}/>
      </div>
)


}

export default Page