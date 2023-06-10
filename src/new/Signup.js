import React,{ useState } from 'react'
import axios from 'axios';

const Signup = () => {
    const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Signup data
    const signupData = {
      name,
      password,
    };

    // Make the signup request
    axios
      .post('http://localhost:8000/api/ngo', signupData)
      .then((response) => {
        console.log(response.data); // Handle the response as needed
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div>
    <form onSubmit={handleSubmit}>
    <label for="name">Name:</label>
    <input type="text" id="name" value={name} onChange={handleNameChange} required/>
    
    <label for="password">Password:</label>
    <input  type="password"
        id="password"
        value={password}
        onChange={handlePasswordChange} required/>
    
    <button type="submit">Signup</button>
  </form>
    </div>
  )
}

export default Signup