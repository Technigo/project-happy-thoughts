import React from "react";


const Header = ({ heading, backgroundColor}) => {


    return (
        <header style={{backgroundColor: backgroundColor}} className="header">
            <div className='heart-animation'></div>
            <h1>{heading}</h1>
        </header>
    )
}


export default Header
