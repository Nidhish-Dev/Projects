const express = require('express')
const {handleGetAllEmoployees,handleCreateNewEmployee,handleDeleteEmployee} = require('../controllers/user.controller')

const router = express.Router()

router.get("/get", handleGetAllEmoployees)
router.post("/create", handleCreateNewEmployee)
router.delete("/:id",handleDeleteEmployee)

module.exports = router;