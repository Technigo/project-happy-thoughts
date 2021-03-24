import React from 'react'

import { API_URL }  from './reuseable/api_endpoints.js'

export const App = () => {
  const fetchMessageList = () => {
    fetch (API_URL)
      .then(res => res.json())
      .then(messages => console.log(messages))
      .catch(err => console.error(err))
  }
 
  fetchMessageList()
  
  return (
    <main>
      Find me in src/app.js!
    </main>
  )
}
