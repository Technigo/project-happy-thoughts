import React from 'react'

const Textarea = ({newThought, handleNewThoughtSubmit, newThoughtLength}) => {

    // useEffect(() => {
    //     console.log('mounted textarea')
    // },[])

    return (
        <label>
            <h1 className='add-thought-header'>What's making you happy right now?</h1>
            <textarea 
                name="textarea"
                className='textarea'
                placeholder='Doughnuts'
                value={newThought}
                onChange={handleNewThoughtSubmit}
            >
            </textarea>
            <p className='length-counter'>{newThoughtLength ? newThoughtLength : '0'} / 140</p>
        </label>
    )
}

export default Textarea;
