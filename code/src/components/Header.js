import React from 'react'
import './Styles/Header.css'

const Header = () => {
    return (
        <>
            <div className="header-wrapper">
                <h1 className="heading">Happy thoughts!</h1>
                <div className="wrapper-heart">
                    <div className="pulsing-heart"></div>
                </div>
            </div>
        </>
    )
}

export default Header