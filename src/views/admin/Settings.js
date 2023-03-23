import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
// components

import CardSettings from "components/Cards/CardSettings.js";
import CardProfile from "components/Cards/CardProfile.js";

export default function Settings() {
  const [email,setEmail] = useState();
  const [username,setUsername] = useState();
  const [name,setName] = useState();
  const [address,setAdd] = useState();
  const [ins,setIns] =useState();
  useEffect( async()=>{
    const thisemail=localStorage.getItem('email')
    console.log(thisemail)
    const volunteer =  await axios.get(`http://localhost:5000/api/volunteer/${thisemail}`)
    setName(volunteer.data.name)
    setAdd(volunteer.data.address)
    setUsername(volunteer.data.username)
    setIns(volunteer.data.institute)
    setEmail(thisemail)
  },[])



  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-8/12 px-4">
          <CardSettings email = {email} setEmail = {setEmail} name = {name} setName={setName} address = {address} setAdd={setAdd} username= {username} setUsername={setUsername}  />
        </div>
        <div className="w-full lg:w-4/12 px-4">
          <CardProfile name = {name}/>
        </div>
      </div>
    </>
  );
}
