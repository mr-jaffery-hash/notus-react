// controllers/req.js
const Approvereq = require("../models/ApprovedReq");
const Jobreq = require("../models/jobreq")
exports.getAllReq = (req, res) => {
    Approvereq.find()
        .then((req) => res.json(req))
        .catch((err) =>
            res
                .status(404)
                .json({ message: "REQ not found", error: err.message })
        );
};
exports.getSpecReq = (req, res) => {
    Approvereq.find({Approved:true})
        .then((req) => res.json(req))
        .catch((err) =>
            res
                .status(404)
                .json({ message: "REQ not found", error: err.message })
        );
};
exports.postCreateReq = (req, res) => {
    const params={
        Userid:req.body.param1,
        Jobid:req.body.param2
    }
     Approvereq.create(params)
        .then(            
            (data) =>
                res.json({ message: "req deleted successfully", data })
            )
        .catch((err) =>
            res
                .status(400)
                .json({ message: "Failed to add req", error: err.message })
        );
    
        
};

exports.putUpdateReq = (req, res) => {
    console.log("I came here");

    Approvereq.findByIdAndUpdate(
    
      req.params.id,
      { Approved: true },
      { new: true }
    )
      .then((data) => res.json({ message: "Updated successfully", data }))
      .catch((err) =>
        res
          .status(400)
          .json({ message: "Failed to update req", error: err.message })
      );
  };

exports.deleteReq = (req, res) => {
    const userid = req.body.params.param1
    const jobid = req.body.params.param2
    Approvereq.deleteOne({Userid:userid, Jobid:jobid})
        .then((data) =>
            res.json({ message: "req deleted successfully", data })
        )
        .catch((err) =>
            res
                .status(404)
                .json({ message: "book not found", error: err.message })
        );
};