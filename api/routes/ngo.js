const express = require("express");
const router = express.Router();

const {
    getAllNGO,
    postCreateNGO,
    putUpdateNGO,
    deleteNGO,
    Login
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
router.post("/login", Login);
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
router.delete("/:email", deleteNGO);

module.exports = router;