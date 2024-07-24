const express = require('express')

const {signup,login,logout,handleLogin,handleSignup,} = require('../controllers/user.controller')

const router = express.Router()

router.get("/signup", signup)
router.get("/login", login)
router.get("/logout", logout)
router.post("/signup", handleSignup)
router.post("/login", handleLogin)

module.exports = router;