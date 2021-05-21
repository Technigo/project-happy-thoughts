import React, { useState } from 'react';
import moment from 'moment';

import EditInputField from './EditInputField';
import ExitButton from './ExitButton';
import SaveButton from './SaveButton';
import EditButton from './EditButton';
import DeleteButton from './DeleteButton';
import HeartButton from './HeartButton';

const MessageContent = ({ message, handleHeartClick, handleDeleteMessage, onUpdateMessage }) => {
  const [edit, setEdit] = useState(false);
  const [editContent, setEditContent] = useState(message.message);

  const handleToggleEdit = () => {
    setEdit(!edit);
  };

  const handleInputChange = (event) => {
    setEditContent(event.target.value);
  };

  const handleSaveEditedContent = () => {
    onUpdateMessage({
      ...message,
      message: editContent,
    });
    setEdit(false);
  };

  return (
    <div className="message-element-container">
      <div className="message-text-trash-bin-container">
        {edit ? (
          <> 
            <EditInputField 
              editContent={editContent}
              onInputChange={handleInputChange}
            />
            <ExitButton 
              message={message}
              onToggleEdit={handleToggleEdit}
            />
            <SaveButton
              message={message}
              onSaveEditedContent={handleSaveEditedContent}
            />
          </>
        ) : (
          <>
            <p className="message-text">{message.message}</p>
            <EditButton 
              message={message}
              onToggleEdit={handleToggleEdit}
            />
            <DeleteButton 
              message={message}
              onDeleteMessage={handleDeleteMessage}
            />
          </>
        )}
      </div>
      
      <div className="message-user-tag">
        <p className="message-user">{message.user}</p>
        <p className="message-tag">{message.tag && '#'}{message.tag}</p>
      </div>

      <div className="message-heart-date-container">
        <HeartButton 
          message={message}
          onHeartClick={handleHeartClick}
        />

        <span className="message-heart-counter">x {message.hearts}</span>
        <p className="message-date">{moment(message.createdAt).fromNow()}</p>
      </div>
    </div> 
  );
};

export default MessageContent; 