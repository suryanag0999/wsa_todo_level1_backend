import express from "express";
import cors from "cors"; // Import CORS
import "dotenv/config";
import db from "./utils/db.js";
import router from "./routes/task.routes.js";


const app = express();
const port = process.env.PORT || 8001; // Use uppercase for env variable

app.use(cors());
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded data
app.use(express.json()); // Accept JSON data from frontend

db(); // connect to database

app.use("/api/v1",router);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
