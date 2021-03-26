import React from 'react'; 
import moment from 'moment';

const MessageElement = ({ data, onLikesIncrease }) => {
    return (

        <div className='element-container'>
            <p className='thought'>{data.message}</p>
            <div className='like-container'>
                <span>
                    <button className='like' onClick={() => onLikesIncrease(data._id)}>
                    <span role='img' aria-label='Heart'>❤️</span>
                    </button> x {data.hearts}
                </span>
                <p>- {moment(data.createdAt).fromNow()}</p>
            </div> 
        </div>    
    )
}

export default MessageElement;
