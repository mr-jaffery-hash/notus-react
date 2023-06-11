// PasswordResetForm.js

import React, { useState } from 'react';
import axios from 'axios';

function ResetPass() {
  const [email, setEmail] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Send a request to the backend API
      await axios.post('http://localhost:5000/api/reset/reset-password', { email });
      console.log('Password reset email sent');
    } catch (error) {
      console.error(error);
      // Handle error
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" placeholder="Email" value={email} onChange={handleEmailChange} />
      <button type="submit">Reset Password</button>
    </form>
  );
}

export default ResetPass;
