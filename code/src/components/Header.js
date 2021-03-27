import React from 'react'

const Header = () => {
    return (
        <div className='header'>
            <img className='heart-img-header' 
                    src={process.env.PUBLIC_URL + './icons/favourite.png'}
                    alt='heart' 
            /> 
            <h1>Happy thoughts</h1>
            <img className='heart-img-header' 
                    src={process.env.PUBLIC_URL + './icons/favourite.png'}
                    alt='heart' 
            /> 

        </div>
    )
}

export default Header