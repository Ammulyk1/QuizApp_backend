import mongoose from 'mongoose';

export default async function connect(){
   await mongoose.connect("mongodb+srv://admin:admin123@cluster0.nea004s.mongodb.net/?retryWrites=true&w=majority")
   console.log("Database Connected")
}