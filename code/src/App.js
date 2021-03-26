import React, { useState, useEffect } from 'react'

import Form from './components/Form'
import Map from './components/Map'
import Hero from './components/Hero'

import { API_URL, LIKES_URL } from './reusable/urls'

export const App = () => {
  const [messageList, setMessageList] = useState([]) 
  const [messageNew, setMessageNew] = useState("") // The state that takes the input from our submit button

  /*const WordCount =  () => {

    if ( messageNew.length   > 140) {
      const overLimit = messageNew.length - 140
        return (
            alert(`you have passed 140 characters, you are ${overLimit} over the limit`)
        )
    }
}

WordCount()*/

  useEffect(() => {
    fecthMessageList()
    //WordCount()
  }, [])



  const fecthMessageList = () => {
    fetch(API_URL)
    .then(res => res.json())
    .then(message => setMessageList(message))
    .catch(err => console.error(err))
  }

  const OnInputMessage = (event) => { // This one updates the data inside our fetched data with the text we are writing in the input box 
    setMessageNew(event.target.value)
  }

  const onFormSubmit = (event) => { // handleFormSubmit
    event.preventDefault() // When we are going to post and argument and not only fetch, we need to add one argument next to our API 
    
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json' //This means that our fetch will understand that we will send him a message and it will be in a json format
      },
      body: JSON.stringify({ message: messageNew }) // Anything that we write in the input box will be visible here. In other word, what do we want to send
    } // Det som är i strigify; eftersom messageNew updateras med vår input, vill vi att message delen i vår API ersätter värdet inuti med vår input i MessageNEw. Väldigt enkelt och logisk
    
    fetch(API_URL, options)
    .then(res => res.json())
    .then(() => fecthMessageList()) // Vår fetchMessageList är kodad så att ska posta vår input som vi skriver, därför så är denna kod på följande där vår input postas per automatik till vår API och därefter får vi den uppdaterade
    .catch(err => console.error(err)) 
  }

  const onLikesIncrease = (id) => {

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json' 
      },
    }
    
    fetch(LIKES_URL(id), options)
    .then(res => res.json())
    .then(() => fecthMessageList()) // The reason why its enough with this one is due to that our backend data is programmed so that everytime we click to it, it will increase
    .catch(err => console.error(err))
  }

  

  return (

    <> 
      <Hero />
      <div className="container">
        <div className="container-body">
          < Form 
          messageNew={messageNew} 
          OnInputMessage={OnInputMessage}
          onFormSubmit={onFormSubmit}
          />
          < Map 
            messageList={messageList}
            onLikesIncrease={onLikesIncrease}
          />
      

        </div>
      </div>
    </>
  )
}
