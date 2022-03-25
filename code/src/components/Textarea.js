import React from 'react'




const Textarea = ({newThought, handleNewThoughtSubmit, newThoughtLength, currentEmotion}) => {

    return (
        <label>
            <h1 className='add-thought-header'>What's making you {currentEmotion} right now?</h1>
            <textarea 
                name="textarea"
                className='textarea'
                placeholder='...'
                value={newThought}
                onChange={handleNewThoughtSubmit}
            >
            </textarea>
            <p className='length-counter'>{newThoughtLength ? newThoughtLength : '0'} / 140</p>
        </label>
    )
}

export default Textarea;
