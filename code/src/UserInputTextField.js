import React from 'react';

const UserInputTextField = ({ newUser, onNewUser }) => {
  return (
    <div className="new-user-container">
      <label 
        className="new-user-label"
        htmlFor="newUser"
      >
        User
      </label>
      <input
        className="new-user-text-field"
        id="newUser"
        type="text"
        value={newUser}
        onChange={onNewUser}
      ></input>
    </div>
  );
};

export default UserInputTextField;