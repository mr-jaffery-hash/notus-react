const express = require("express");
const router = express.Router();

const {
    getAllJob,
    postCreateJob,
    putUpdateJob,
    deleteJob,
} = require("../controllers/job");

/**
 * @route GET api/todo
 * @description get all todo
 * @access public
 */
router.get("/", getAllJob);

/**
 * @route POST api/todo
 * @description add a new todo
 * @access public
 */
router.post("/", postCreateJob);

/**
 * @route PUT api/todo/:id
 * @description update todo
 * @access public
 */
router.put("/:id", putUpdateJob);

/**
 * @route DELETE api/todo/:id
 * @description delete todo
 * @access public
 */
router.delete("/:id", deleteJob);

module.exports = router;