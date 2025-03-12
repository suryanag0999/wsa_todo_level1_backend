import mongoose from "mongoose";
import "dotenv/config";

const db=()=>{
    mongoose.connect(process.env.MONGODB_URL).then(()=>console.log("Mangodb connected..")).catch((err)=>console.log("error while conneting...",err))
};
export default db;