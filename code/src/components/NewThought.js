/* eslint-disable */
import React from 'react';

export const NewThought =({ newTodo, onNewTodoChange, onFormSubmit }) => {

    return (
        <form onSubmit={onFormSubmit}>
            <h2>❤️ Share your happy thoughts ❤️</h2>
            <textarea value={newTodo} onChange={onNewTodoChange} />
            <button type='submit'>❤️ Send Happy Thought ❤️</button>
        </form>
    )
}