import mongoose from 'mongoose'
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {

    try {
      console.log("connection string", process.env.MONGODBCONNECTIONSTRING);
      const connection = await mongoose.connect(process.env.MONGODBCONNECTIONSTRING);
      console.log('MongoDB connected');
      return  connection;
    } catch (error) {
      console.log(error);
    }
    
}


export default connectDB;