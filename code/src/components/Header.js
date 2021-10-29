import React from "react";


const Header = ({ heading, backgroundColor}) => {


    return (
        <header style={{backgroundColor: backgroundColor}} className="header">
            <div className='heart-animation'></div>
            <h1>{heading}</h1>
            <p className='preamble'>Happiness is an emotional state characterized by feelings of joy, satisfaction, contentment, and fulfillment.</p>
        </header>
    )
}


export default Header
