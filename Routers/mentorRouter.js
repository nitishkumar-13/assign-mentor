import express from "express";

import { createMentor, getMentor, listStudents, mentorAssigned } from "../Controllers/mentorController.js";

const router = express.Router();
//route to create  a new Mentor
router.post("/create", createMentor);

router.get("/getmentor", getMentor);
//route  to get a specific mentor by id
router.put("/mentorassigned/:id", mentorAssigned); 
router.get("/previousmentor/:id", listStudents);

export default router;
