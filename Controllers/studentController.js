import Student from "../Models/studentSchema.js";

export const createStudent = async (req, res) => {
    try {
        const newStudent = new Student(req.body)
        await newStudent.save();
        res.status(200).json({ message: "New student created successfully", newStudent });
    } catch (error) {
        console.log(error);
    }
}
//Api to get all the students
export const getStudents = async (req, res) => {
    try {
        const students = await Student.find()
        if (!students) {
            res.status(404).json({ message: "No Students found" })
        }
        else {
            res.status(200).json({ message: "Data fetched successfully",students })
        }
        
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

export const studentAssigned = async (req, res) => {
    try {

        const studentId = req.params.id;
        const { mentorId } = req.body;

        const student = await Student.findByIdAndUpdate(
            studentId,       // search by this
            { mentorId: mentorId },   // update
            { new: true }     // return the updated user not the old one
        )
        res.status(200).json({message:"Mentor Assigned Successfully", data:student})
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error in assigning Mentor to a Student' });
    }
}

// export const getStudentsMentorAssigned = async (req, res) => {
//     const { id } = req.params;
//     const student = await Student.findOne({ _id: id },"mentorId");
//     if (!student) {
//         return res.status(404).json("Student Not Found")
//     } else {
//         return res.status(200).json({message:"Data fetched successfully",data:student.mentorId});
//     }
// }
// API to show all students for a particular mentor
// export const studentsMentor= async (req, res) => {
//     const { mentorId } = req.params;
//     try {
//         const students = await Student.find({ mentor: mentorId });
//         res.status(200).json(students);
//     } catch (err) {
//         res.status(400).json({ error: err.message });
//     }
// };

// API to show the previously assigned mentor for a particular student

export const getStudentsAssignedMentor = async (req, res) => {
  try {
    const { id } = req.params;
    const student = await Student.findById(id).populate("mentorId");
    res.status(200).json({
      message: "Data fetched Succesfully",
      studentId: student.mentorId,
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      error: "Error occurs in fetching the Mentors",
    });
  }
};
