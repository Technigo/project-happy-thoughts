import React from 'react'


const FormNewThought = ({ newThought, setNewThought, onFormSubmit, error, username, setUsername }) => {

    // updating newThoughts from the form input like we did last week to have separate function for it 
    const onNewThoughtChange = (event) => {
        setNewThought(event.target.value)
    }

    const onUsernameChange = (event) => {
        setUsername(event.target.value)
    }

    return (
        <form className="input-form" onSubmit={onFormSubmit}>
            <div className="new-thought">
                <label htmlFor="newThought" className="header-form">What's making you happy right now?</label>
                <textarea type="text"
                    id="newThought"
                    value={newThought}
                    onChange={onNewThoughtChange}
                    placeholder="Type your thoughts here..."
                    className="input-message"
                    rows='5'
                />
                <p className="error-message">{error}</p>
                <div className="count">
                    <span className={newThought.length > 140 ? 'red-color-counter' : 'black-color-counter'}>
                        {newThought.length}</span>/140
                </div>
                <div className="username-container">
                    <label htmlFor="newUsername" className="header-form">Your name (optional)</label>
                    <input type="text"
                        id="newUsername"
                        value={username}
                        onChange={onUsernameChange}
                        placeholder="anonymous"
                        className="input-message"
                    />
                </div>
                <div className="button-container">
                    <button
                        type="submit"
                        className="form-button"
                    >
                        <span role="img"
                            aria-label="heart" className="heart">❤️</span><p className="send-thought-button">Send Happy Thought</p> <span role="img" aria-label="heart" className="heart">❤️</span>
                    </button >
                </div>
            </div>
        </form >
    )
}

export default FormNewThought