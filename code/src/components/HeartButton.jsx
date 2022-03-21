import React from "react";

const HeartButton = ({likes, id, messageLiked, setMessageLiked}) => {

    const SEND_API = `https://happy-thoughts-technigo.herokuapp.com/thoughts/${id}/like`

    const sendLike = () => {

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({})
        };

        fetch(SEND_API, options)
        .then(data => {
            if (!data.ok) {
                throw Error(data.status)
            }
            return data.json();
        }).then(update => {
            setMessageLiked(true)
            // console.log(update)
        }).catch(e => {
            // console.log(e)
        })

    }

    return (
        <>
        <button className="heart-container" onClick={sendLike} >
            <p><span role="img" aria-label="heart button">💖</span></p>
        </button>
        <p className="likes-text">×{likes}</p>
    </>
    )

}

export default HeartButton