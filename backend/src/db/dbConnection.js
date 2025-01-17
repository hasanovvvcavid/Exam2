import mongoose from "mongoose";

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("DB connected");
}).catch(()=>{
    console.log("Db connection failed");
})