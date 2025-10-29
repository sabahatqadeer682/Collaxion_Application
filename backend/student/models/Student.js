// import mongoose from "mongoose";

// const studentSchema = new mongoose.Schema({
//     fullName: { type: String, required: true },
//     email: { type: String, required: true, unique: true },
//     password: { type: String, required: true },
//     phone: { type: String, required: true },
//     department: { type: String, required: true },
//     semester: { type: String, required: true },
//     city: { type: String, required: true },
//     address: { type: String, required: true },
//     verificationCode: { type: String },
//     verified: { type: Boolean, default: false },
// }, { timestamps: true });

// const Student = mongoose.model("Student", studentSchema);

// export default Student;
// models/Student.js
import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: String, required: true },
    department: { type: String, required: true },
    semester: { type: String, required: true },
    city: { type: String, required: true },
    address: { type: String, required: true },
    // profileImage: { type: String, default: "" }, // 👈 added
    verificationCode: { type: String },
    verified: { type: Boolean, default: false },
}, { timestamps: true });

const Student = mongoose.model("Student", studentSchema);
export default Student;
