import React from 'react'

const Header = () => {
    return (
        <div className='header'>
            <img className='heart-img-header' 
                    src={process.env.PUBLIC_URL + './icons/favourite.png'}
                    alt='heart image' 
            />
            <h1>Happy thoughts</h1>
            <img className='heart-img-header' 
                    src={process.env.PUBLIC_URL + './icons/favourite.png'}
                    alt='heart image' 
            />
        </div>
    )
}

export default Header