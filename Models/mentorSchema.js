
import mongoose from 'mongoose';

const mentorSchema = new mongoose.Schema({
  name: String,
  specialization: String,
  course: String,
  email: String,
  studentId: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student',
  }]
});

const Mentor = mongoose.model("Mentor", mentorSchema);
export default Mentor;
