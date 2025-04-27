import { Router } from 'express';
import { createProject, getAllProjects } from '../controllers/project.controller.js';

const router = Router();

router.post('/projects', createProject);
router.get('/projects', getAllProjects);

export default router;
