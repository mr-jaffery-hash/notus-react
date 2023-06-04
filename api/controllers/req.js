// controllers/req.js
const REQ = require("../models/req");

exports.getAllReq = (req, res) => {
    REQ.find()
        .then((req) => res.json(req))
        .catch((err) =>
            res
                .status(404)
                .json({ message: "REQ not found", error: err.message })
        );
};

exports.postCreateReq = (req, res) => {
    REQ.create(req.body)
        .then((data) => res.json({ message: "REQ added successfully", data }))
        .catch((err) =>
            res
                .status(400)
                .json({ message: "Failed to add req", error: err.message })
        );
};

exports.putUpdateReq = (req, res) => {
    

    REQ.findByIdAndUpdate(
      req.params.id,
      { Verified: true },
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
    REQ.findByIdAndRemove(req.params.id, req.body)
        .then((data) =>
            res.json({ message: "req deleted successfully", data })
        )
        .catch((err) =>
            res
                .status(404)
                .json({ message: "book not found", error: err.message })
        );
};