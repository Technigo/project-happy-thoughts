import React from 'react'

const Form = () => {
    return (
        <div className="form-container">
            <form>
                <label htmlFor="input-box">What's making you happy right now?</label>
                <input className="input-box" id="input-box"></input>
                <button type="submit" onClick=""><span>❤️</span> Send Happy Thought <span>❤️</span></button>
            </form>
        </div>
    )
}



export default Form;