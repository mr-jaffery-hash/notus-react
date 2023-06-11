// controllers/req.js
const Jobreq = require("../models/jobreq");

exports.getAllReq = (req, res) => {
    Jobreq.find()
        .then((req) => res.json(req))
        .catch((err) =>
            res
                .status(404)
                .json({ message: "REQ not found", error: err.message })
        );
};

exports.postCreateReq = (req, res) => {
    Jobreq.create(req.body)
        .then((data) => res.json({ message: "REQ added successfully", data }))
        .catch((err) =>
            res
                .status(400)
                .json({ message: "Failed to add req", error: err.message })
        );
};

exports.putUpdateReq = (req, res) => {
    console.log("I came here");

    Jobreq.findByIdAndUpdate(
    
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
    Jobreq.findByIdAndRemove(req.params.id, req.body)
        .then((data) =>
            res.json({ message: "req deleted successfully", data })
        )
        .catch((err) =>
            res
                .status(404)
                .json({ message: "book not found", error: err.message })
        );
};