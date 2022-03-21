import React from 'react'

const ThoughtInput = () => {
    return (
        <label>
            <h1 className='add-thought-header'>What's making you happy right now?</h1>
            <textarea 
                name="textarea"
                className='input-field'
                placeholder='Doughnuts'
            >

            </textarea>

            {/* <input
                className='input-field'
                placeholder='Doughnuts'
                type='text'>
            </input> */}
        </label>
    )
}

export default ThoughtInput;
