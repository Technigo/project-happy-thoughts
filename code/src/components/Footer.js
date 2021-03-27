import React from 'react'

const Footer = () => {
    return (
        <div className='footer'>
            <p>Sofia Arzt Wallén 2021</p>
            <img className='heart-img' 
                    src={process.env.PUBLIC_URL + './icons/favourite.png'}
                    alt='heart' 
            /> 

        </div>
    )
}

export default Footer