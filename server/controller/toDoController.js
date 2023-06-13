import Todo from "../model/ToDo.js";


export const addToDo = async (req, res) => {
    try {
        const newTodo = await Todo.create({
            data: req.body.data,
            createAt: Date.now()
        })
        await newTodo.save();

        res.status(200).json(newTodo)
    } catch (error) {
        return res.status(500).json(error.message);
    }
}

export const getAllToDos = async (req, res) => {
    try {
        const todos = await Todo.find({}).sort({ 'createdAt': -1 })

        res.status(200).json(todos)
    } catch (error) {
        return res.status(500).json(error.message);
    }
}

export const toogleToDoDone = async (req, res) => {
    try {
        const toDoRef = await Todo.findById(req.params.id);
        const todo = await Todo.findByIdAndUpdate(
            { _id: req.params.id },
            { done: !toDoRef.done }
        )
        await todo.save();
        res.status(200).json(todo)
    } catch (error) {
        return res.status(500).json(error.message);
    }
}


export const updateToDo = async (req, res) => {
    try {
        await Todo.findOneAndUpdate(
            { _id: req.params.id },
            { data: req.body.data }
        )
        const todo = await Todo.findById(req.params.id);
        // await todo.save();
        return res.status(200).json(todo)
    } catch (error) {
        return res.status(500).json(error.message);
    }
}

export const deleteToDo = async (req, res) => {
    try {
        const todo = await Todo.findByIdAndDelete(req.params.id)
        // await todo.save();
        return res.status(200).json(todo)
    } catch (error) {
        return res.status(500).json(error.message);
    }
}
