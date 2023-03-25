/* eslint-disable */

import React from "react";

// component handles the thoughts which add by users.
export const NewThoughtsForm = ({ count, newThoughts, onNewThoughtsChange, onFormSubmit }) => {
    return (
        <div className="newThoughtsWrapper">
            <form onSubmit={onFormSubmit} className="newThoughtsbox">
                <p className="newThoughtQuestion">What's making you happy right now?</p>
                <textarea
                    className="text-area"
                    rows="3"
                    placeholder="Type your thoughts here..."
                    value={newThoughts}
                    onChange={onNewThoughtsChange}
                />
                <p className="count-words"
                    // Makes the text of the character-counter red if
                    // it's less than 1 or more than 140 characters
                    style={{
                        color: count <= 0 || count > 140 ? 'red' : 'black'
                    }}>
                    {count}/140
                </p>
                <button type="submit"
                    // Makes the button un-clickable if it's
                    // less than 1 or more than 140 characters
                    disabled={newThoughts.length < 5 || newThoughts.length > 140}>

                    ❤️Send Happy Thoughts❤️
                </button>
            </form>
        </div>

    )
}
