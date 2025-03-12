import Task from "../models/task,models.js";

// use async and wait to touch database and create new task
const newTask = async (req, res) => {
    try {
        //extract details from request body

    const{title,description,due_date}=req.body;

        //validation on the imcoming data
    if(!title|| !description){
        return res
        .status(400)
        .json({message:"title and descrption not found"});
    }
        // create document basede on our schema
        await Task.create({title,description,due_date})
        res.status(200).json({ 
            success:true,
            message: "Task created successfully" 
        });

    } catch (error) {
        res.status(400).json({ 
            message: "Error creating a task" 
        });
    }
};

//read all task
const getTasks = async(req,res)=>{
    try {
       let options={};
    const  tasks = await Task.find({},null,options);
    res.status(200).json({
        success:true,
        tasks:tasks,
        message:"fetched all tasks",
    })
    } catch (error) {
        res.status(400).json({
            message:" error fetched all tasks",
        }); 
    }
}

// update task 
const updateTask = async(req,res)=>{
    console.log(req)
   try {
     // extract the id from parameters
     const {id}=req.params;
     const{title,description,due_date}=req.body;
     //validation
     if(!id){
        return res.status(400).json({message:"task id requied"});
     }
     //find document
     const task=await Task.findById(id);
     if(!task){
        return res.status(404).json({message:"task not  found"});
     }
     
     //update task on document

     if(title)task.title=title;
     if(description)task.description=description;
     if(due_date)task.due_date=due_date;
     if(!due_date)task.due_date=null;
     //save task
    const updatedTask = await task.save();

     //give respones
     res.status(200).json({
        success:true,
        updateTask,
        message:"update all tasks",
    })

   } catch (error) {
    res.status(200).json({
        success:false,
        message:"fetched all tasks",
    })
    
   }
}
// Delete a task
const deleteTask = async (req, res) => {
    try {
        // Extract the ID from request parameters
        const { id } = req.params;

        // Validate ID
        if (!id) {
            return res.status(400).json({ message: "Task ID is required" });
        }

        // Find and delete the task
        const task = await Task.findByIdAndDelete(id);

        if (!task) {
            return res.status(404).json({ message: "Task not found" });
        }

        res.status(200).json({
            success: true,
            message: "Task deleted successfully",
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error deleting task",
        });
    }
};

export { newTask,getTasks,updateTask,deleteTask };
