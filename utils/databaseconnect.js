import mongoose, { mongo } from "mongoose"

const connectToDatabase = async () =>{
    try{
        await mongoose.connect("mongodb+srv://mernstack:lunarMern123@cluster0.4ftokts.mongodb.net/");
         console.log("Database connected successfully ");
    }catch(error){

        console.log("Database connection failed ", error);
    }
}

export default connectToDatabase;