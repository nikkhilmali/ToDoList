import express from "express";

import {addToDo, getAllToDos, toogleToDoDone, updateToDo, deleteToDo} from '../controller/toDoController.js';



const route = express.Router();


route.post('/todos',addToDo);
route.get('/todos',getAllToDos);
route.get('/todos/:id',toogleToDoDone);
route.put('/todos/:id',updateToDo);
route.delete('/todos/:id',deleteToDo);


export default route;