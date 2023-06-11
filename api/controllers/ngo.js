// controllers/ngo.js
const NGO = require("../models/ngo");

exports.getAllNGO =  (req, res) => {
    NGO.find()
        .then((ngo) => res.json(ngo))
        .catch((err) =>
            res
                .status(404)
                .json({ message: "NGO not found", error: err.message })
        );
};

exports.Login=async(req,res)=>{
    const {email,password} =req.body;
    console.log(email);
    console.log(password);
   const user= await NGO.findOne({name:email});
        if(user){
           if(password === user.password){
            console.log(user.password);
               res.send({message:"login sucess",user:user})
           }else{
            console.log(user.password);
               res.send({message:"wrong credentials"})
           }
        }else{
            res.send("not register")
        }
    };



exports.postCreateNGO = (req, res) => 

{  
    console.log(req.body);
    NGO.create(req.body)
        .then((data) => res.json({ message: "NGO added successfully", data }))
        .catch((err) =>
            res
                .status(400)
                .json({ message: "Failed to add ngo", error: err.message })
        );
};

exports.putUpdateNGO = (req, res) => {
    NGO.findByIdAndUpdate(req.params.id, req.body)
        .then((data) => res.json({ message: "updated successfully", data }))
        .catch((err) =>
            res
                .status(400)
                .json({ message: "Failed to update ngo", error: err.message })
        );
};

exports.deleteNGO = (req, res) => {
    NGO.deleteMany({name:req.params.email})
        .then((data) =>
            res.json({ message: "ngo deleted successfully", data })
        )
        .catch((err) =>
            res
                .status(404)
                .json({ message: "book not found", error: err.message })
        );
};