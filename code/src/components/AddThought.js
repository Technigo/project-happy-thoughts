import React, { useState } from 'react'

import Button from './Button';
import Textarea from './Textarea';



const AddThought = ({heartIcon, thoughtsAPI, fetchThoughts, newThought, setNewThought, newThoughtLength, setNewThoughtLength}) => {
    

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
                setNewThought('');
            }
        });
    };

    return (
        <form onSubmit={onSubmitting} className='card'>
            <Textarea 
                newThought={newThought}
                setNewThought={setNewThought}
                newThoughtLength={newThoughtLength}
                setThoughtLength={setNewThoughtLength}
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
