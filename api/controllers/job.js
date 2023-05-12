// controllers/Job.js
const Job = require("../models/job");

exports.getAllJob = (req, res) => {
    Job.find()
        .then((job) => res.json(job))
        .catch((err) =>
            res
                .status(404)
                .json({ message: "Job not found", error: err.message })
        );
};

exports.postCreateJob = (req, res) => {
    Job.create(req.body)
        .then((data) => res.json({ message: "Job added successfully", data }))
        .catch((err) =>
            res
                .status(400)
                .json({ message: "Failed to add Job", error: err.message })
        );
};

exports.putUpdateJob = (req, res) => {
    Job.findByIdAndUpdate(req.params.id, req.body)
        .then((data) => res.json({ message: "updated successfully", data }))
        .catch((err) =>
            res
                .status(400)
                .json({ message: "Failed to update Job", error: err.message })
        );
};

exports.deleteJob = (req, res) => {
    Job.findByIdAndRemove(req.params.id, req.body)
        .then((data) =>
            res.json({ message: "Job deleted successfully", data })
        )
        .catch((err) =>
            res
                .status(404)
                .json({ message: "book not found", error: err.message })
        );
};