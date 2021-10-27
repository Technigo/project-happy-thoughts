import React from "react";
import './LoadingSpinner.css'

const LoadingSpinner = () => {
    return (
        <div className="loading-overlay">
            <div className="loading-spinner">
                <h1>Loading...</h1>
            </div>
        </div>
    )
}

export default LoadingSpinner