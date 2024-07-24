const User = require('../models/user.model')

function signup(req,res){
    return res.render("signup")
}

function login(req,res){
    return res.render("login")
}
function logout(req,res){
    res.clearCookie('token').redirect("/")
}

async function handleSignup(req,res){
    const {fullName, email, password} = req.body;
    await User.create({
        fullName,
        email,
        password,
    })
    return res.redirect("/")
}
async function handleLogin(req,res){
    const {email, password,} = req.body;
   try {
    const token = await User.matchPasswordAndGenerateToken(email,password);
    return res.cookie('token', token).redirect("/")
    
   } catch (error) {
    return res.render("signin", {
        error: "Incorrect Email or Password"
    })
   }
}

module.exports = {signup,login,logout,handleLogin,handleSignup,}

