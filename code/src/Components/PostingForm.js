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
                    value={props.newMessage}
                >
                </textarea>
                <div 
                    className="character-counter"
                    style={140-props.newMessage.length >= 0 ? {color: "grey"} : {color: "red"}}
                >
                    remaining characters: {140-props.newMessage.length >= 0 ? 140-props.newMessage.length : `0`}
                    <br></br>{140-props.newMessage.length >= 0 ? "" : `(${(140-props.newMessage.length)*-1} too many)`}
                </div>
                <button 
                    className="send-button"
                    onClick={props.send}
                    value={props.newMessage}
                >
                    <div className="heart-left">
                        ❤️
                    </div>
                    Send Happy Thought
                    <div className="heart-right">
                        ❤️
                    </div>
                </button>
            </form>
        </div>
    )
}

//date format from API:
//"2019-11-21T11:31:28.547Z",

export default PostingForm