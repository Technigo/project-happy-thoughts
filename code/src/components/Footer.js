import React from 'react'

const Footer = () => {
    return (
        <div className='footer'>
            <p>Sofia Arzt Wallén 2021</p>
            <p>
                Icons made by <a className='credits-footer' href="https://www.freepik.com" title="Freepik">Freepik </a> from 
                             <a className='credits-footer' href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
            </p>
            <img className='heart-img' 
                    src={process.env.PUBLIC_URL + './icons/favourite.png'}
                    alt='heart' 
            /> 

        </div>
    )
}

export default Footer