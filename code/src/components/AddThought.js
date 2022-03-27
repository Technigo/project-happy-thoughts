import React from 'react'

import Button from './Button';
import Textarea from './Textarea';

const AddThought = ({
    heartIcon,
    newThought,
    newThoughtLength,
    handleNewThoughtSubmit,
    currentEmotion,
    onSubmitting,
    }) => {

    return (
        <form onSubmit={onSubmitting} className='card'>
            <Textarea 
                newThought={newThought}
                handleNewThoughtSubmit={handleNewThoughtSubmit}
                newThoughtLength={newThoughtLength}
                currentEmotion={currentEmotion}
            />
            <Button 
                message={<>{heartIcon}&nbsp;Send {currentEmotion} thought!&nbsp;{heartIcon}</>}
                className={'submit-button'}
                type={"submit"}
                disabled={newThoughtLength < 5 || newThoughtLength > 140}
                onClick={onSubmitting}
            />
        </form>
    )
}

export default AddThought;
