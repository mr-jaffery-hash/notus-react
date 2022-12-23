// routes/Volunteer.js
const express = require("express");
const router = express.Router();
const Volunteer = require("../models/Volunteer");
const {
    getAllVolunteer,
    postCreateVolunteer,
    putUpdateVolunteer,
    deleteVolunteer,
} = require("../controllers/Volunteer");

/**
 * @route GET api/Volunteer
 * @description get all Volunteer
 * @access public
 */
router.get("/", getAllVolunteer);

/**
 * @route POST api/Volunteer
 * @description add a new Volunteer
 * @access public
 */
router.post("/", postCreateVolunteer);

/**
 * @route PUT api/Volunteer/:id
 * @description update Volunteer
 * @access public
 */
router.put("/:id", putUpdateVolunteer);

/**
 * @route DELETE api/Volunteer/:id
 * @description delete Volunteer
 * @access public
 */
router.delete("/:id", deleteVolunteer);


const bcrypt = require ('bcrypt')
const jwt = require("jsonwebtoken")


//key to be used to generate json web token
ACCESS_TOKEN_SECRET = "123jbfosddn2m312301jnrsal2p3nkmsao0"
//function that generates access token based on email of incoming user
function generateAccessToken(user) {
    return jwt.sign(user, ACCESS_TOKEN_SECRET)}
//POST api for authentication
router.post('/auth', async (req, res) => {
    const body = req.body;
    const email=body.email
    const user = await Volunteer.findOne({email});
    if (user) {
      //check user password with hashed password stored in the database
      const validPassword = await bcrypt.compare(body.password, user.password);
      if (validPassword) {
       const token = generateAccessToken(email)
       //send successful http code with the generated token
       res.status(201).json({token: token})
      } else {
        //send error http code with message
        res.status(400).json({ message: "Invalid Credentials" });
      }
    } else {
    //send error http code with message
      res.status(401).json({ message: "Invalid Credentials" });
    }        
})




//POST api for signup
router.post('/signup', async (req, res) => {
    const email = req.body.email
    //Password encryption using bcrypt's hash function with 10 salt rounds
    const password = await bcrypt.hash(req.body.password, 10)
    const username = req.body.username
    const name = req.body.name
    const address = req.body.address
    const institute = req.body.institute
    const phoneNo = req.body.phoneNo
    //Validation check for empty fields
    if(!req.body.email || !req.body.password){
        res.status(401).json({message: "Email/password cannot be an empty field"})
    }
    else{
        //Search 'Volunteer' table for a particular email and throw error if user already exists
        //else insert into 'Volunteer' table
        Volunteer.findOne({email:email},function(err,user){
            if(user){
                //send http error code with message
                res.status(401).send({message: "User Already Exists!"})
            }
            else{
                //create new 'Volunteer' object
                var newVolunteer = new Volunteer({
                    email:email,
                    password:password,
                    name: name,
                    username: username,
                    address: address,
                    institute: institute,                    
                    phoneNo: phoneNo   
                });
                //insert into 'Volunteer' table
                newVolunteer.save((err,doc)=>{
                    if(err){
                        //send error code if insertion fails
                        res.status(401).send({message: "Error during insertion!"})
                    }
                    else{
                        //send successful http code if insertion successful
                        res.status(201).send({message:"Signup Successful!"})
                    }
                })
            }
        })
    }
  })





module.exports = router;