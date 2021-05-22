import React from 'react'

import { USER_URL } from '../reusable/urls'

const UserName = ({ user, setMessageList }) => {

  const fetchFilteredList = () => {
    fetch(USER_URL(user))
      .then(response => response.json())
      .then(messages => setMessageList(messages))
      .catch(err => console.error(err))
  }

  return (
    <p 
      className="message-user"
      onClick={fetchFilteredList}
    >
      {user ? user: 'Anonymous'}
    </p>
  )
}

export default UserName