const mongoose =require('mongoose')

const connectDB = async ()=>{
    try{
   await mongoose.connect("mongodb://localhost:27017/todo");
   console.log("MongoDB Connected successfully");
    }
    catch(err)
    {
        console.log(err);
    }
}
module.exports =connectDB;