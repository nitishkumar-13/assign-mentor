import express from 'express';
import cors from 'cors';
import connectDB from './Database/config.js';
import studentrouter from './Routers/studentRouter.js';
import mentorrouter from './Routers/mentorRouter.js';

import dotenv from 'dotenv';
 
const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();
connectDB();
const port = process.env.PORT;

app.use('/',(req, res) => {
  res.status(200)
    .send(`<div style="text-align: center;"><h1>Mentor-Student Management API</h1></div>
    <div>
    
    <h1>Postman endpoints</h1>
    <ul>
    <li>Student Routes</li>
    <ul>
        <li><mark>POST</mark> <mark>/api/create</mark>: Create a new student</li>
        <li><mark>GET</mark> <mark>/api/students</mark>: Get all students</li>
        <li><mark>PUT</mark> <mark>/api/studentsassigned/:id</mark>: Assign a mentor to a student</li>
        <li><mark>GET</mark> <mark>/api/students/:id</mark>: Get the mentor assigned to a student by student ID</li>
    </ul>
    <li>Mentor Routes</li>
    <ul>
        <li><mark>POST</mark> <mark>/api/mentor/create</mark>: Create a new mentor</li>
        <li><mark>GET</mark> <mark>/api/mentor/getmentor</mark>: Get all mentors</li>
        <li><mark>PUT</mark> <mark>/api/mentor/mentorassigned/:id</mark>: Assign a student to a mentor</li>
        <li><mark>GET</mark> <mark>/api/mentor/previousmentor/:id</mark>: Get the previously assigned mentor for a specific student</li>
    </ul>
</ul>
    </div>`);
});

app.use('/api', studentrouter);
app.use('/api/mentor',mentorrouter );

app.listen(port, () => {
    console.log(`App is running on port ${port}`);
})