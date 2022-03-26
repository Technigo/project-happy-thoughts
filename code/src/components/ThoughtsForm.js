import React, { useState } from 'react';

import Button from 'components/Button';

const API_RECENT_URL='https://happy-thoughts-technigo.herokuapp.com/thoughts'

const ThoughtsForm = () => {
    const [newThought, setNewThought] = useState('');
    const onNewThoughtChange = (event) => {
        setNewThought(event.target.value)
    }

    const onFormSubmit = (event) => {
        event.preventDefault();

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'message': 'My happy thought'
            })
        }

        fetch(API_RECENT_URL, options)
            .then(res => res.json())
            .then(data => console.log(data))
    }

    return (
        <form onSubmit={onFormSubmit}>
            <p>Write your happy thought below</p>
            <textarea
                value={newThought}
                onChange={onNewThoughtChange}
            />
            <button type="submit">
                ♥️ SEND THOUGHT ♥️
            </button>
            <Button />
        </form>
    )
};

export default ThoughtsForm;
