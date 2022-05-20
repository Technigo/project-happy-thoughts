import React, {useState, useEffect} from 'react'
import Status from './Status'
import Form from './Form'
import Footer from './Footer'

const Page = () => {
    const [recentMessages, setRecentMessages] = useState([])
    const [loading, setLoading] = useState(false)
    const [newMessage, setNewMessage] = useState('')

    const ApiFetch = 'https://project-happy-thoughts-api-app.herokuapp.com/'
    const ApiLikes = (thoughtId) => `https://project-happy-thoughts-api-app.herokuapp.com/thoughts/${thoughtId}/like`



    useEffect(
        () => { 
        fetchRecentMessages()
    },[])

    const fetchRecentMessages = () => {
        setLoading(true)
        fetch(ApiFetch)  
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
            ApiFetch, options)
            .then(res => res.json())
            .then(() => fetchRecentMessages())
            .finally(() => setNewMessage(''))


    }


    const onHeartSubmit = (thoughtId) => {

		const options = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
		}

		fetch(ApiLikes(thoughtId), options)
			.then((res) => res.json())
			.then(() => {
                fetchRecentMessages()
			})
	}



return (
    <div className="container">

        <Form newMessage={newMessage} onNewMessage={handleNewMessage} onFormSubmit={onFormSubmit}/>
        <Status loading={loading} recentMessages={recentMessages} onHeartSubmit={onHeartSubmit}/>
        <Footer /> 

      </div>
      
)


}

export default Page