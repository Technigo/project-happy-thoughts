import React from 'react'

import Button from './Button';
import Textarea from './Textarea';

const onSubmitting = (e) => {
    e.preventDefault();
};

const AddThought = ({heartIcon}) => {
    return (
        <form onSubmit={onSubmitting} className='card'>
            <Textarea />
            <Button 
                message={<>{heartIcon}&nbsp;Send happy thought!&nbsp;{heartIcon}</>}
                className={'submit-button'}
            />
        </form>
    )
}

export default AddThought;
