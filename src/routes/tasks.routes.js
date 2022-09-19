import { Router } from "express";
import { createTask, deleteTask, getTask, getTasks, updateTask } from "../controllers/tasks.controllers.js";

const router = Router();

router.get('/tasks', getTasks)
    .post('/tasks', createTask)
    .put('/tasks/:id', updateTask)
    .delete('/tasks/:id', deleteTask)
    .get('/tasks/:id', getTask)



export default router;