import React from 'react';
import { formatDistance } from 'date-fns';

const MessageCard = ({ item, sendLike }) => {
    const sendHearts = () => {
        // eslint-disable-next-line no-underscore-dangle
        sendLike(item._id)
    }
    return (
        <div className="messageCard">
            <p>{item.message}</p>
            <div className="heartRow">
                <div className="heartBtnSection">
                    <button className="heartBtn" type="button" onClick={sendHearts}> ❤️ </button>  x   {item.hearts}
                </div>
                <p className="timeStamp">
                    {formatDistance(new Date(item.createdAt), Date.now(), { addSuffix: true })}
                </p>
            </div>
        </div>
    );
}

export default MessageCard