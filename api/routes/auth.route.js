import express from 'express';  
import { run, signin, signout, signup } from '../controllers/auth.controller.js';

const router = express.Router();  

router.get('/', run);  
router.post('/signup', signup);   
router.post('/signin', signin);
router.get('/signout', signout); 

export default router; 