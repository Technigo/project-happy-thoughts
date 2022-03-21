import React from 'react'

const Textarea = () => {
    return (
        <label>
            <h1 className='add-thought-header'>What's making you happy right now?</h1>
            <textarea 
                name="textarea"
                className='textarea'
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

export default Textarea;
