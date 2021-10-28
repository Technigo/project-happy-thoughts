import React from "react";
import './LoadingSpinner.css'

const LoadingSpinner = () => {
    return (
        <div className="loading-overlay">
            <span className="loading-text">Loading happy thoughts..!</span>
            <div className="circle orange"></div>
            <div className="circle blue"></div>
        </div>
    )
}

export default LoadingSpinner