import mongoose from "mongoose";

export const connectDB = async () =>{
    try {
        await mongoose.connect(process.env.MONGOODB_CONNECTIONSTRING);
        console.log("Kết nối đến MongoDB thành công");
    } catch (error) {
        console.log("Kết nối đến MongoDB thất bại", error);
        process.exit(1);
    }
}