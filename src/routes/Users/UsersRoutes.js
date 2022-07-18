const express = require("express");
const router = express.Router();


const {
    addUserController
} = require('../../controllers/Users/index')

router.post("/add/",addUserController);

module.exports = router;