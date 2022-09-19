import { Router } from 'express';
import { getProjectTasks, getProjects, createProjects, updateProject, deleteProject, getProject } from '../controllers/projects.controller.js';


const router = Router();

router.get('/projects', getProjects)
    .post('/projects', createProjects)
    .put('/projects/:id', updateProject)
    .delete('/projects/:id', deleteProject)
    .get('/projects/:id', getProject)
    .get('/projects/:id/tasks', getProjectTasks)

export default router;