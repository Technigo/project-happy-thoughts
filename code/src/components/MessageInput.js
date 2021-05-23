import React, { useRef } from 'react'


import { Picker } from "emoji-mart"

import PostBtn from './PostBtn'

const MessageInput = ({ messageNew, setMessageNew, setChars, showPicker, setShowPicker }) => {
  const ref = useRef(null)
  

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
        <div className="textarea-wrapper">
          <textarea 
            className="post-message-textarea" 
            id="newMessage"
            placeholder="Write your happy thought.."
            value={messageNew}
            ref={ref}
            onChange={handleNewMessage}
          />
          {window.innerWidth >= 768 && (
            <button 
              className="emoji-btn" 
              onClick={handlePickerToggle}
            >
              {!showPicker ? '🤩' : '😎'} 
            </button>
          )}
        </div>
        {showPicker && window.innerWidth >= 768 && (
          <div className="picker-wrapper">
            <Picker 
              title='pick emoji!'
              emoji='point_up'
              native={true}
              perLine={7}
              style={{}}
              onSelect={emoji => setMessageNew(messageNew + emoji.native)}
            />
          </div>
        )}
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