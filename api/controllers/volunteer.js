// controllers/Volunteer.js
const Volunteer = require("../models/Volunteer");

exports.getAllVolunteer = (req, res) => {
    Volunteer.find()
        .then((Volunteer) => res.json(Volunteer))
        .catch((err) =>
            res
                .status(404)
                .json({ message: "Volunteer not found", error: err.message })
        );
};

exports.postCreateVolunteer = (req, res) => {
    Volunteer.create(req.body)
        .then((data) => res.json({ message: "Volunteer added successfully", data }))
        .catch((err) =>
            res
                .status(400)
                .json({ message: "Failed to add Volunteer", error: err.message })
        );
};

exports.putUpdateVolunteer = (req, res) => {
    Volunteer.findByIdAndUpdate(req.params.id, req.body)
        .then((data) => res.json({ message: "updated successfully", data }))
        .catch((err) =>
            res
                .status(400)
                .json({ message: "Failed to update Volunteer", error: err.message })
        );
};

exports.deleteVolunteer = (req, res) => {
    Volunteer.findByIdAndRemove(req.params.id, req.body)
        .then((data) =>
            res.json({ message: "Volunteer deleted successfully", data })
        )
        .catch((err) =>
            res
                .status(404)
                .json({ message: "book not found", error: err.message })
        );
};
exports.authlogin = (req, res) => {
    Volunteer.findByIdAndRemove(req.params.id, req.body)
        .then((data) =>
            res.json({ message: "Volunteer deleted successfully", data })
        )
        .catch((err) =>
            res
                .status(404)
                .json({ message: "book not found", error: err.message })
        );
};