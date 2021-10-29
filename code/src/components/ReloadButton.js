import React from "react";
import './ReloadButton.css'

const ReloadButton = ({ onFetchThought }) => {
    return (
        <div className="reload-button-container">
            <button className="reload-button"
                onClick={() => {
                    window.scrollTo(0, 0)
                    onFetchThought()
                }}>~Update Thoughts~</button>
        </div>
    )
}

export default ReloadButton