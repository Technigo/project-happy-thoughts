import React from 'react'

import Button from './Button';
import Textarea from './Textarea';



const AddThought = ({heartIcon, thoughtsAPI, fetchThoughts, newThought, handleNewThought, handleNewThoughtSubmit}) => {
    

    const onSubmitting = (event) => {
        event.preventDefault();
        console.log("submitted")
        fetch(thoughtsAPI, {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify({ message: newThought }),
        }).then((results) => {
            if (!results.ok) {
                console.log("no success"); 
            } else {
                fetchThoughts();
                handleNewThought('');
            }
        });
    };

    return (
        <form onSubmit={onSubmitting} className='card'>
            <Textarea 
                newThought={newThought}
                handleNewThoughtSubmit={handleNewThoughtSubmit}
            />
            <Button 
                message={<>{heartIcon}&nbsp;Send happy thought!&nbsp;{heartIcon}</>}
                className={'submit-button'}
                type={"submit"}
            />
        </form>
    )
}

export default AddThought;
