import mongoose from "mongoose";

const taskschema = new mongoose.Schema({
    title:String,
    description: String,
    due_date:Date,
});

const Task = mongoose.model("Task", taskschema);
export default Task;