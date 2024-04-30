const mongoose = require("mongoose");

const connectDb = async ()=>{
    
    try{
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connection successful to db")
    }catch{
        console.log("connection failed to db")
        console.log(MONGODB_URI)
        process.exit(0)
    }
}
module.exports  = connectDb