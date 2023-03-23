const express = require("express");
const router = express.Router();
const Enrolled = require("../models/Enrolled");



router.post('/enrollPerson', async (req, res) => {
    const email = req.body.email
    const job = req.body.jobDesc
    const roll = req.body.rollNo
    const desc = req.body.desc
        Enrolled.findOne(
            {
                $and:
                    [
                        {email:email},
                        {jobDesc:job}
                    ]
            }
                ,function(err,user){
            if(user){
                res.status(401).send({message: "Already Enrolled!"})
            }
            else{
                //create new 'Volunteer' object
                var newEnrolled = new Enrolled({
                    email:email,
                    jobDesc:job,
                    rollNo:roll,
                    desc:desc
                });
                newEnrolled.save((err,doc)=>{
                    if(err){
                        res.status(401).send({message: "Error during insertion!"})
                    }
                    else{
                        res.status(201).send({message:"Enrollment Successful!"})
                    }
                })
            }
        })
    
  })
  router.get('/display/:email',async (req,res)=>{
    const email = req.params.email
    console.log(email)
    const job = await Enrolled.findOne({email:email}, 'jobDesc')
    if(job){
        res.send(job.jobDesc)
    }
    else{
        res.status(401).send({message:"Not enrolled"})
    }
  })
  module.exports = router;
