import React, { useEffect, useState } from 'react'
import axios from 'axios';
//import StudentRequestTable from '../new/StudentRequestTable';

const Jobsel = () => {
    const [reqList, setReqList] = useState([]);
    const [user,setUser] = useState();
    const [title,setTitle] = useState();
    const [category,setCategory] = useState();
    const [organisation,setOrganisation] = useState();

    useEffect(() => {
      fetchReqList();
    }, []);
  
    const fetchReqList = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/job');
        console.log(response.data);
        setReqList(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    const handleClick = (param1, param2, param3, param4) => {
        const formData = {
          user: param1,
          title: param2,
          category: param3,
          organisation: param4
        };
        console.log(formData);
    
        axios
          .post('http://localhost:5000/api/jobreq', formData)
          .then((response) => {
            console.log(response.data);
            // Handle successful response
          })
          .catch((error) => {
            console.error(error);
            // Handle error
          });
      };
    return (
        <div>

    <h1>Request List</h1>
    {reqList.map((req) => (
      <div key={req._id}>
        <p>Title: {req.title}</p>
        <p>Category: {req.category}</p>
        <p>Organisation:{req.organisation}</p>
        <button onClick={() => handleClick(localStorage.getItem('email'), req.title, req.category, req.organisation)}>Click Me</button>
      </div>
    ))}
  </div>
  )
}

export default Jobsel