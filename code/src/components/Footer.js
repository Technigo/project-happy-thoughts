import React from 'react'
import './Styles/Footer.css'

const Footer = () => {
    return (
        <>
            <div className="footer-wrapper"> 
                <img className="logo"src="./assets/logo.svg" alt="technigo logo" />
                <p className="footer-paragraphs">&copy; developed 2021 by Sara Carlstein </p> 
                <p className="footer-paragraphs">Week 11: Happy thoughts project ❤️ | Technigo bootcamp</p>
                <p className="footer-paragraphs"><a href="https://www.linkedin.com/in/sara-carlstein-532b2737/"target="_blank" rel="noopener noreferrer">Linkedin</a>
                |<a href="https://github.com/Sartish" target="_blank" rel="noopener noreferrer" >GitHub</a></p>
            </div>
        </>
    )
}

export default Footer