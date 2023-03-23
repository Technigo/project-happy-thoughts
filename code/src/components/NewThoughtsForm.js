/* eslint-disable */

import React from "react";

// component handles the thoughts which add by users.
export const NewThoughtsForm = ({NewThoughts, onNewThoughtsChange, onFormSubmit}) => {
    return (
        <div className="newThoughtsWrapper">
            <form onSubmit={onFormSubmit} className="newThoughtsbox">
                <p className="newThoughtQuestion">What's making you happy right now?</p>
                <textarea 
                className="text-area"
                rows = "3"
                placeholder="Type your thoughts here..."
                value={NewThoughts}
                onChange={onNewThoughtsChange} 
                />
                <button type="submit">❤️Send Happy Thoughts❤️</button>
            </form>
        </div>

    )
}
