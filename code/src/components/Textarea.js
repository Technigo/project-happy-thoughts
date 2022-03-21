import React from 'react'

const Textarea = ({newThought, setNewThought}) => {

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
                onChange={setNewThought}
            >
            </textarea>
        </label>
    )
}

export default Textarea;
