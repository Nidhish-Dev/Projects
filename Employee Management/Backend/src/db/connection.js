const mongoose = require('mongoose')

const connectDB = async ()=>{
    try {
        mongoose.connect(process.env.MONGODB_CONNECTION_URI)
        console.log("DB connected");
    } catch (error) {
        console.log("Error in connecting DB", error);
    }
}

module.exports = connectDB;