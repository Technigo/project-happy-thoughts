import React, {useState, useEffect} from 'react'
import moment from 'moment'

export const MessageList = () => {
  const MESSAGES_URL = "https://technigo-thoughts.herokuapp.com/"
  const [messages, setMessages] = useState([])

  useEffect (() => {
    fetch(MESSAGES_URL)
    .then((res )=> {
      return res.json()
    })
    .then(data => { 
      const filteredData = data.filter(message =>{
        return message.message
      })
      filteredData.reverse()
      setMessages(filteredData)
    })

  }, [])

    return (
    <div>
{
  messages.map (message => (
    <p>{message.message} {moment(message.createdAt).fromNow()}</p>
  ))
}

    </div>
  )
}