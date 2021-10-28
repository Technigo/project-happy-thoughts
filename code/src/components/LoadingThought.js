import React from "react";
import './LoadingThought.css'

const LoadingThought = () => {
    return (
        <div className="loading-thought-overlay">
            <span className="loading-thought-text">Posting happy thought</span>
            <div className="loading-dots">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    )
}

export default LoadingThought