import mongoose, { connect } from "mongoose";
import dotenv from "dotenv";
import connectDB from "./config/dbconnection.js";
import app from "../Backend/app.js";
const PORT = process.env.PORT || 5000;


dotenv.config({
    path: "../Backend/.env"
});
connectDB()

.then(()=> {
    app.on("Error" , (error)=>{
        console.log("Error", error);
        throw error;
    })
    app.listen(process.env.PORT || 5000 , ()=>{
        console.log(`Server is running on port: ${process.env.PORT || 5000}`);
    })
})
.catch(error => {
    console.log("MongoDB connection failed:", error);
    process.exit(1); // Exit the process with failure
})
