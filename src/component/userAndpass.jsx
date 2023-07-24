import React, { useState } from 'react';
import './userAndpass.css';
import { BiUser } from "react-icons/bi";
import { BsKeyFill } from "react-icons/bs";
import img from "./pic.jpg"

const AdminSettingsPage = () => {
  const [oldUsername, setOldUsername] = useState('');
  const [newUsername, setNewUsername] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleUsernameChange = (event) => {
    setNewUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setNewPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (oldUsername.trim() === '' || newUsername.trim() === '' || oldPassword.trim() === '' || newPassword.trim() === '') 
    {
      setShowPopup(true);
      return;
    }

    console.log('Old Username:', oldUsername);
    console.log('New Username:', newUsername);
    console.log('Old Password:', oldPassword);
    console.log('New Password:', newPassword);

    alert("Username and Password has been changed.")

    setOldUsername('');
    setNewUsername('');
    setOldPassword('');
    setNewPassword('');
  };

  return (
    <div className="App">
      <img src={img} alt=""/>
        <h1>Hello!</h1>
      <h3>Change Your Username & Password</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <h4><BiUser/> Username</h4>
          <label>Old Username </label>
          <input
            type="text"
            value={oldUsername}
            onChange={(e) => setOldUsername(e.target.value)}
          />
        </div>
        <div>
          <label>New Username </label>
          <input
            type="text"
            value={newUsername}
            onChange={handleUsernameChange}
          />
        </div>
        <div>
          <h4><BsKeyFill/> Password</h4>
          <label>Old Password </label>
          <input
            type="password"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
          />
        </div>
        <div>
          <label>New Password </label>
          <input
            type="password"
            value={newPassword}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit">Update</button>
      </form>

      {showPopup && (
        <div className="popup">
          <p>Please fill in all the fields.</p>
          <button onClick={() => setShowPopup(false)}>Okay</button>
        </div>
      )}
    </div>
  );
};

export default AdminSettingsPage;
