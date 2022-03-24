import React from 'react'
import { HeartIcon } from './HeartIcon'

export const ThoughtsForm = ({onFormSubmit, setNewMessages, newMessages }) => { 

    const handleChange = (event) => {
        setNewMessages(event.target.value);
    }

    return (
        <form onSubmit={onFormSubmit}>
            <h1>Welcome to write a message about you thoughts below</h1>
            <textarea 
            className='textinput'
            type="text"
            value={newMessages} 
            onChange={handleChange}
            placeholder="Write your thought here . . ." 
            >
            </textarea>
    

           <div className="countTheThoughts">
                <span className={newMessages.length > 140}>
                {newMessages.length}</span>/140
            </div>

            <button 
            className='send-btn' 
            type='submit'> 
           
                <HeartIcon symbol="❤️" label="heart"/> 
                Submit form!
                <HeartIcon symbol="❤️" label="heart"/> 
                </button>
        </form>
    )
}
