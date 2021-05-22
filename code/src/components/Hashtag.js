import React from 'react'

import { CATEGORY_URL } from '../reusable/urls'

const Hashtag = ({ tag, setMessageList }) => {

  const fetchFilteredList = () => {
    fetch(CATEGORY_URL(tag))
      .then(response => response.json())
      .then(messages => setMessageList(messages))
      .catch(err => console.error(err))
  }

  return (
    <p 
      className="message-hashtag" 
      onClick={fetchFilteredList}
    >
      {tag && tag.charAt(0) === '#' && (tag)}
      {tag && tag.charAt(0) !== '#' && ('#' + tag)}
    </p>
  )
}

export default Hashtag