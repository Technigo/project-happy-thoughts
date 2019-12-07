import React, { useState, useEffect } from "react"
import "./thoughtList.css"



export const PostHappyThought = ({ onFormSubmit }) => {

    const [sendThought, setSendThought] = useState('')





    const submitHandler = (e) => {
        e.preventDefault()

        //we get the function(post metod)from the parent (App)
        onFormSubmit(sendThought)


    }

    return (
        <div className="thought-card">
            <form>
                <h3>What makes you happy right now?</h3>
                <textarea id="" rows="3" value={sendThought} minLength="5" maxLength="140"
                    onChange={(e) => { setSendThought(e.target.value) }} />
                <p>{sendThought.length}/140</p>
                <div className="card-bottom">
                    <div>
                        <button className="send-btn" type="submit" onClick={submitHandler} disabled={sendThought.length < 5 || sendThought.lenght > 140 ? true : false}><span role="img" aria-label="Heart"> ❤️ </span>Send a happy thought <span role="img" aria-label="Heart"> ❤️ </span></button>
                    </div>
                </div>
            </form >
        </div >

    )
}

