import moment from "moment"
import React, { useState, useEffect } from "react"

export const MessageList = () => {
  const FETCH_URL = "https://happy-thoughts-technigo.herokuapp.com/thoughts"
  const [messages, setMessages] = useState([])

  useEffect(() => {
    fetch(FETCH_URL)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        //console.log(data)
        const filteredData = data.filter((getMessage) => getMessage.message)
        setMessages(filteredData.slice(0, 20))
      })
  }, [])

  return (
    <div>
      {messages.map((getMessages) => {
        return (
          <div className="message-card" key={getMessages._id}>
            <p className="message-text">{getMessages.message}</p>
            <div className="likes-time-container">
              <p className="likes"><span role="img" aria-label="Heart Icon">&#128151;  </span>x<span>  {getMessages.hearts}</span></p>
              <p>{moment(getMessages.createdAt).fromNow()}</p>
            </div>
          </div>
        )
      })}
    </div>
  );
}