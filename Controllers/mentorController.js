import Mentor from "../Models/mentorSchema.js";
import Student from "../Models/studentSchema.js";


export const createMentor = async (req, res) => {
  try {
    const newMentor = new Mentor(req.body);
    await newMentor.save();
    res
      .status(200)
      .json({ message: "New Mentor created successfully", newMentor });
  } catch (error) {
    console.log(error);
  }
};
export const getMentor = async (req, res) => {
  try {
    const mentors = await Mentor.find();
    if (!mentors) {
      res.status(404).json({ message: "No mentor found" });
    } else {
      res.status(200).json({ message: "Data fetched successfully", mentors });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const mentorAssigned = async (req, res) => {
  try {
    const mentorId = req.params.id;
    const { studentId } = req.body;

    const mentor = await Mentor.findByIdAndUpdate(
      mentorId, // search by this
      { studentId: studentId }, // update
      { new: true } // return the updated user not the old one
    );
    res
      .status(200)
      .json({ message: "Students Assigned Successfully", data: mentor });
  } catch (error) {

    console.log(error);
    res.status(500).json({ message: "Error in assigning Students to the mentor" });
  }
};

// API to show the student list for the particular mentor
export const listStudents= async (req, res) => {
    // const { studentId } = req.params;
        try {
          const mentorId = req.params.id;
          const students = await Student.find({ mentorId: mentorId });
          res.status(200).json({
            message: "Students fetched successfully",
            students,
          });
        } catch (error) {
          res.status(500).json({
            error: "Error Fetching the Students",
          });
        }

};



