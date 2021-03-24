import React from 'react'
import moment from 'moment'

export const PostingForm = (props) => {
    return (
        <div className="thought">
            <span className="prompt">What's making you happy right now?</span>
            <form>
                <textarea
                    className="post-message"
                    onChange={props.onNewMessageChange}
                >
                </textarea>
                <button 
                    className="send-button"
                    onClick={props.send}
                    value={props.newMessage}
                >
                    <div className="heart-left">
                        <label>❤️</label>
                    </div>
                    Send Happy Thought
                    <div className="heart-right">
                        <label>❤️</label>
                    </div>
                </button>
            </form>
        </div>
    )
}

//date format from API:
//"2019-11-21T11:31:28.547Z",

export default PostingForm