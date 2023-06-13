import mongoose from "mongoose";


const ToDoSchema = new mongoose.Schema({
    data:{
        type: String,
        required: true
    },    
    done:{
        type: Boolean,
        default: false
    },
    createAt:{
        type: Date,
        default: Date.now
    }
})


const todo = mongoose.model('todo', ToDoSchema);

export default todo;