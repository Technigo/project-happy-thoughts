import React, { useState, useRef } from 'react'

import "emoji-mart/css/emoji-mart.css";
import { Picker } from "emoji-mart"

const MessageInput = ({ messageNew, setMessageNew, setChars }) => {
  const ref = useRef(null)
  const [showPicker, setShowPicker] = useState(false)

  const handleNewMessage = (event) => {
    setMessageNew(event.target.value)
    setChars(event.target.value.length)
  }

  const handlePickerToggle = (event) => {
    event.preventDefault()
    setShowPicker(!showPicker)
  }

  return (
    <>
      <label 
        className="post-message-label" 
        htmlFor="newMessage"
      >
        What's making you happy right now?
      </label>
      <div className="message-wrapper">
        <div className="textarea-wrapper">
          <textarea 
            className="post-message-textarea" 
            id="newMessage"
            placeholder="Write your happy thought.."
            value={messageNew}
            ref={ref}
            onChange={handleNewMessage}
          />
          <button 
            className="emoji-btn" 
            onClick={handlePickerToggle}
          >
            {!showPicker ? '🤩' : '😎'} 
          </button>
        </div>
        {showPicker && (
          <Picker 
            title=''
            emoji=''
            perLine={6}
            style={{ marginTop: 10,  }}
            onSelect={emoji => setMessageNew(messageNew + emoji.native)}
          />
        )}
      </div> 
    </>
  )
}

export default MessageInput

/*pickerStyle={
            { 
            marginTop: 10, 
            borderColor: 'black', 
            width: '30%' 
            }
          }
          onEmojiClick={handleEmojiClick}
        disableSearchBar*/