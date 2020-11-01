import React  from 'react'
import moment from 'moment'


export const MessageList = ({
    id,
    message,
    timeCreated,
    hearts,
    likeHeart
    }) => {

    const handleLikes = () => {

        let nrOfClicks = 0;
        nrOfClicks += 1;
        fetch(`https://happy-thoughts-technigo.herokuapp.com/thoughts/${id}/like`, {
            method: "POST",
            body: "",
            headers: {
                "Content-Type": "application/json"
            },

        }).then(() => {
            likeHeart(id, nrOfClicks);
        });
    };

    return ( 
            <article className = "message-container" > 
                <p > {message} < /p> 
                <div className = "heart-container" > 
                    <p className = "heart-item" >
                    <button onClick = {handleLikes}
                        className = "heart-button"
                        //If a heart has no clicks heart color i grey else pink
                        style = {{backgroundColor: hearts > 0 ? "lightpink" : "lightgrey" }} >
                        <span role = "img" aria-label = "Heart emoji" > &#128150;
                        </span>
                    </button>
                    x {hearts} </p>
                    {/* Using the imported Moment package to calculate the timestamp */}
                    <p className= "time-created" > { moment(timeCreated).fromNow()} 
                    </p> 
                </div> 
            </article>
    );
};
export default MessageList;