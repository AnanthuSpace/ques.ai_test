import { Router } from 'express';
import { createProject, getAllProjects } from '../controllers/user.controller.js';
import { verifyToken } from '../config/jwtConfig.js';

const router = Router();

router.post('/create-project', verifyToken, createProject);
router.get('/get-projects', verifyToken, getAllProjects);

export default router;
