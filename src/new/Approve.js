import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Approve = () => {
    const [reqList, setReqList] = useState([]);

    useEffect(() => {
      fetchReqList();
    }, []);
  
    const fetchReqList = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/jobreq');
        setReqList(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    const handleButtonClick = async (reqId) => {
        try {
          await axios.put(`http://localhost:8000/api/jobreq/${reqId}`, { Approve: true });
          console.log('Button clicked for req:', reqId);
          fetchReqList(); // Refresh the req list after the update
        } catch (error) {
          console.error(error);
        }
      };
    return (
    <div>
    <h1>Request List</h1>
    {reqList.map((req) => (
      <div key={req._id}>
        <p>User ID: {req.Userid}</p>
        <p>Job ID: {req.Jobid}</p>
        <button onClick={() => handleButtonClick(req._id)}>Click Me</button>
      </div>
    ))}
  </div>
  )
}

export default Approve