import mongoose from "mongoose";

// Connection URL
const url = 'mongodb+srv://adarsh:adarsh123@idonate.dtkikxl.mongodb.net/test?retryWrites=true&w=majority&appName=iDonate'; // Replace with your MongoDB URL

// Connect to MongoDB
export const dbConnect = async()=>{
    await mongoose.connect(url);
    console.log('Connected successfully to MongoDB with Mongoose');
} 
