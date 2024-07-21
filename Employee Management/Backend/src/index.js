const express = require('express')
require('dotenv').config();
const userRouter = require("./routes/user.route")
const connectDB = require('./db/connection')
const cors = require('cors');

const app = express();

connectDB();

app.use(express.urlencoded({extended:false}))
app.use(cors());
app.use(express.json());

app.use("/", userRouter)

app.listen(process.env.PORT, ()=>{
 console.log("Server Started at PORT:", process.env.PORT);
})