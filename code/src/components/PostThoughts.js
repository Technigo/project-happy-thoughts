import React, { useState, useEffect } from "react"

const SubmitThoughts = () => {

    return (
        <div className="post">
            <label>What's making you happy right now?</label>
            <textarea placeholder="Type something here..."></textarea>
            <button className="button" onClick={''}>❤️Send Happy Thought❤️</button>
        </div>
    )
}


export default SubmitThoughts