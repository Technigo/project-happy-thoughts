import React from "react";

const Header = () => {
    return (
        <h1 className='header'>
            Share your happy thoughts
            <div className="wrapper">
                <div className="container">
                    <div className="heart-pulse">
                    </div>
                </div>
            </div>
            {/* <div className="animation-box">
                <span className='heart-animation' role='img' aria-label='heart'> ❤️ { }❤️ { } ❤️ </span>
            </div> */}
        </h1>
    );
}

export default Header