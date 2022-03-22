import React from 'react'

const Form = () => {
  return (
    <div className="form-div">
      <form>
        <label>
        <h1>Write your message here</h1>
          Message:
          <input 
            type="text"
            name="message"
          />
        </label>
      </form>
    </div>
  )
}

export default Form