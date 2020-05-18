import React from 'react'
import moment from 'moment'
import Tooltip from 'react-tooltip-lite'
import './postedstyle.css'

export const AlreadyPosted = props => {
    const { message, createdAt, hearts, _id } = props.thought

    const handleClick = () => {
        fetch(`https://happy-thoughts-bealun.herokuapp.com//${_id}/like`, {
            method: 'POST',
        })
            .then(() => props.onLiked(_id))
    }

    return (
        <div className='thought'>
            <h3>{message}</h3>
            <div className='footerPost'>
                <div className='postedInfo'>
                    <button tabIndex='0' aria-label='Like button'
                        style={hearts > 0 ? { backgroundColor: '#E7BBCA' } : { backgroundColor: '#fff' }}
                        onClick={handleClick}>
                        <Tooltip content='Like' direction='up'>
                            <span role='img'>
                                {' 💗 '}
                            </span>
                        </Tooltip>
                    </button>
                    <span className='howMany'>{hearts}</span>
                </div>
                <div className='moment'>{moment(createdAt).fromNow()}</div>
            </div>

        </div>
    )
}