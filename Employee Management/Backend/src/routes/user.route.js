const express = require('express')
const {handleGetAllEmoployees,handleCreateNewEmployee} = require('../controllers/user.controller')

const router = express.Router()

router.get("/get", handleGetAllEmoployees)
router.post("/create", handleCreateNewEmployee)

module.exports = router;