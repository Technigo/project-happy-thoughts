import React from "react"

export const SubmitButton = ({addWords, setAddWords})=> {
    return (
        <div className="SubmitButton">
            <button type="submit" className="SubmitButton" onChange={event => setAddWords(event.target.value)} disabled={happyWords === " "}>Post</button>
        </div>  

    )
}

