import React from 'react'

export const PostingForm = (props) => {
    return (
        <div className='thought'>
            <span className="prompt">What's making you happy right now?</span>
            <form>
                <textarea
                    className='user-text-input'
                    onChange={props.onNewThoughtChange}
                    value={props.newThought}
                >
                </textarea>
                <div 
                    className='character-counter'
                    style={140-props.newThought.length >= 0 ? {color: 'grey'} : {color: 'red'}}
                >
                    remaining characters: {140-props.newThought.length >= 0 ? 140-props.newThought.length : `0 (${(140-props.newThought.length)*-1} too many)`}
                </div>
                <button 
                    className='send-button'
                    onClick={props.send}
                    value={props.newThought}
                >
                    <div className='heart-left'>
                        <span role="img">❤️</span>
                    </div>
                    Send Happy Thought
                    <div className='heart-right'>
                        <span role="img">❤️</span>
                    </div>
                </button>
            </form>
        </div>
    )
}

export default PostingForm