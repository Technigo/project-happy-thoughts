import React from 'react'

const Form = ({newMessage, onNewMessage, onSubmitForm}) => {
  return (

    <form onSubmit={onSubmitForm} className='form-container'>

      <label htmlFor='newMessage' className='form-label'>Add your happy thought: </label>
      <input
        id='newMessage'
        type='text'
        value={newMessage}
        onChange={onNewMessage}
        className='form-input'
      />
      <button type='submit' className='form-btn'>SEND HAPPY THOUGHT</button>
    </form>
  )
}

export default Form