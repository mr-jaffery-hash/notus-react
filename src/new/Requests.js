import React,{useState} from 'react'
import axios from 'axios';

const Requests = () => {
    const [userId, setUserId] = useState('');
    const [jobId, setJobId] = useState('');
    
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const response = await axios.post('http://localhost:8000/api/jobreq', { Userid: userId, Jobid: jobId });
        console.log(response.data); // Handle the response as needed
      } catch (error) {
        console.error(error);
      }
  
      // Clear the form inputs
      setUserId('');
      setJobId('');
    };
  
  return (
    <div class="container">
    <h2>Request Form</h2>
    <form onSubmit={handleSubmit}>
        <div class="form-group">
            <label for="name">User Id</label>
            <input type="text" id="name" name="name" 
             value={userId}
             onChange={(e) => setUserId(e.target.value)}required/>
           
        </div>
        <div class="form-group">
            <label for="age">Job Id</label>
            <input type="number" id="age" name="age" 
            value={jobId}
            onChange={(e) => setJobId(e.target.value)}required/>
            
        </div>
       
        <button type="submit">Submit</button>
    </form>
</div>
  )
}

export default Requests