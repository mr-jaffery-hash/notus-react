import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [formData, setFormData] = useState({
    title: '',
    duration: '',
    volunteers :'',
    category: '',
    address: '',
    city: '',
    country:'',
    postalcode: '',
    details: '',
    organisation: '',
    vacancy: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('http://localhost:5000/api/job', formData);
      console.log(response.data); // Handle the response as needed
      // Reset the form after successful submission
      setFormData({
        name: '',
        email: ''
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>NGO Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="duration">Duration:</label>
          <input type="text" id="duration" name="duration" value={formData.duration} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="category">Category:</label>
          <input type="text" id="category" name="category" value={formData.category} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="city">City:</label>
          <input type="text" id="city" name="city" value={formData.city} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="organisation">Organisation:</label>
          <input type="text" id="organisation" name="organisation" value={formData.organisation} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="vacancy">Vacancy:</label>
          <input type="text" id="vacancy" name="vacancy" value={formData.vacancy} onChange={handleChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
