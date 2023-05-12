const express = require("express");
const router = express.Router();

const {
    getAllNGO,
    postCreateNGO,
    putUpdateNGO,
    deleteNGO,
} = require("../controllers/ngo");

/**
 * @route GET api/todo
 * @description get all todo
 * @access public
 */
router.get("/", getAllNGO);

/**
 * @route POST api/todo
 * @description add a new todo
 * @access public
 */
router.post("/", postCreateNGO);

/**
 * @route PUT api/todo/:id
 * @description update todo
 * @access public
 */
router.put("/:id", putUpdateNGO);

/**
 * @route DELETE api/todo/:id
 * @description delete todo
 * @access public
 */
router.delete("/:id", deleteNGO);

module.exports = router;