require('dotenv').config()
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')

const connectDB = require('./db/connection')
const userRouter = require('./routes/user.route')
const { checkForAuthenticationCookie } = require('./middlewares/authentication');

const app = express()

const PORT = process.env.PORT

connectDB()

app.set("view engine", "ejs")
app.set("views", path.resolve("./views"))

app.use(express.urlencoded({extended:false}))
app.use(cookieParser())
app.use(express.static(path.resolve('./public')))
app.use(checkForAuthenticationCookie("token"))

app.get("/", (req,res)=>{
    res.render('home', {
        user: req.user,
    })
})

app.use("/user", userRouter)

app.listen(PORT, ()=>{
    console.log("Server is running at PORT:", PORT);
    console.log(`http://localhost:3000/`);
})