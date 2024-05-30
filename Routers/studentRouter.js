import express from 'express';
import { createStudent, getStudents, getStudentsAssignedMentor, studentAssigned } from '../Controllers/studentController.js';

const router = express.Router();

router.post('/create', createStudent);
router.get('/students', getStudents);
router.put('/studentsassigned/:id', studentAssigned);
router.get("/students/:id",getStudentsAssignedMentor);


export default router;