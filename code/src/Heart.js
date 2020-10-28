import React from "react";



export const Heart = props => {
    const {messages, hearts, thougths, createdAt, _id} = props.messages

//const HEARTURL = ;

const handleClick = () => {
    fetch(`https://happy-thoughts-technigo.herokuapp.com/thoughts/${_id}/like` , {
        method: "POST",
        headers:
        {
            "Content-Type":"application/json"
        },
        body:"",
        }).then(() => props.onLiked(_id)) 
    }

    return (

    <>
    <section>
        <h3>{message}</h3>
        <p>
            <button
            onClick={handleClick}
            style={{background: hearts > 0 ? "#ffadad" : "#f3f1f1" }}
            >
                <span role="img" aria-label="Heart">
                    {" ❤️"}
                </span>
            </button>
            x {hearts}
        </p>


    </section>
    </>
    )
}