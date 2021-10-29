import React from 'react'

const Loader = () => {
    return (
        <div className="loader-overlay">
            <div className="loader-animation">
                <img src="heart.svg" className="loader-heart" alt="loader heart"/>
            </div>
        </div>
    )
}

export default Loader