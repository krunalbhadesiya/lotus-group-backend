import express from 'express';
import { getAllProjects, getProjectById, createProject, updateProject, deleteProject } from '../controllers/projectController.js';

const router = express.Router();

router.get('/', getAllProjects);
router.get('/:id', getProjectById); // New route to get a project by ID
router.post('/', createProject);
router.put('/:id', updateProject);
router.delete('/:id', deleteProject);

export default router;
