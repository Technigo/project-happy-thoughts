import React from "react";
import './LoadingSpinner.css'

const LoadingSpinner = () => {
    return (
        <div className="loading-overlay">
            <div className="circle orange"></div>
            <div className="circle blue"></div>
        </div>

    )
}

export default LoadingSpinner