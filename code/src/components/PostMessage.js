import React, { useState } from 'react'

import NameInput from './NameInput'
import HashtagInput from './HashtagInput'
import MessageInput from './MessageInput'
import PostBtn from './PostBtn'

const PostMessage = ({ messageNew, setMessageNew, chars, setChars, postMessage, userName, setUserName, hashtag, setHashtag }) => {
  const [showPicker, setShowPicker] = useState(false)

  const onFormSubmit = (event) => {
    event.preventDefault()
    postMessage()
  }

  return (
    <div className="message-container form-container">
      <form className={showPicker ? "post-message-form" : "post-message-form picker-hidden"} onSubmit={onFormSubmit}>
        <NameInput 
          userName={userName} 
          setUserName={setUserName}
        />
        <HashtagInput
          hashtag={hashtag}
          setHashtag={setHashtag}
        />
        <MessageInput
          messageNew={messageNew}
          setMessageNew={setMessageNew}
          chars={chars}
          setChars={setChars}
          showPicker={showPicker}
          setShowPicker={setShowPicker}
        />
        <div className="btn-container">
          <PostBtn />
          <p><span className={chars > 150 ? 'chars-overstep' : ''}>{chars}</span>/150</p>
        </div>
      </form>
    </div>
  )

}
export default PostMessage