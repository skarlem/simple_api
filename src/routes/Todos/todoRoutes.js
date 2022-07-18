const express = require("express");
const router = express.Router();

const {
    getAllTodoController,
    getOneTodoController,
    addTodoController,
    updateTodoController
} = require('../../controllers/Todos/index')
// import {
//     getAllTodoController
// } from '../../controllers/Todos/index'
console.log(getAllTodoController)

router.get("/", getAllTodoController);
router.get("/:id", getOneTodoController);
router.post("/add/",addTodoController);
router.patch("/update/:id",updateTodoController);


module.exports = router;

