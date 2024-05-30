import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
    name: String,
    batch: String,
    course: String,
    email: String,
    mentorId: {
        type: mongoose.Schema.Types.ObjectId,  
         ref: "Mentor"        // referencing the Mentors collection in our database
     }
})

const Student = mongoose.model("Student", studentSchema);
export default Student;

