import React from 'react'
import { HeartIcon } from './HeartIcon'

export const ThoughtsForm = ({onFormSubmit, setNewMessages, newMessages }) => { 

    return (
        <form onSubmit={onFormSubmit}>
            <h1>Welcome to write a message about you thoughts below</h1>
            <textarea 
            className='textinput'
            type="text"
            id='newMessages'
            value={newMessages} 
            onChange={setNewMessages}
            placeholder="Write your thought here . . ." 
            rows="4">
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
