import React from 'react';
import NewThought from './NewThought';


const Header = ({ handleFormSubmit }) => {
    return (
        <header>
            <NewThought onThoughtSend={handleFormSubmit} />
        </header>
    )
}

export default Header

