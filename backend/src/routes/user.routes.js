import { Router } from 'express';
import { createProject, getAllProjects, getProfile } from '../controllers/user.controller.js';
import { verifyToken } from '../config/jwtConfig.js';

const router = Router();

router.post('/create-project', verifyToken, createProject);
router.get('/get-projects', verifyToken, getAllProjects);
router.get('/get-profile', verifyToken, getProfile);

export default router;
