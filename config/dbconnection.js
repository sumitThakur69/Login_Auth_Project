import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI);
        console.log(
            `Database connected successfully: Host=${connect.connection.host}, Name=${connect.connection.name}`
        );
    } catch (error) {
        console.error("Database connection failed:", error.message);
        process.exit(1); // Exit the process with failure
    }
}

export default connectDB;