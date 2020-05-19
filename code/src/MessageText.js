import React from "react"


export const MessageText = (props) => {
    return (<div>
        <p>{props.text}</p>
        <p>~ {props.user}</p>
    </div>
    )
}