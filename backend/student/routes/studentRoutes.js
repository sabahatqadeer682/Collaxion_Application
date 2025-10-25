
// routes/studentRoutes.ts
import express from "express";
import dotenv from "dotenv";
import nodemailer from "nodemailer";
import Student from "../models/Student.js";

dotenv.config();
const router = express.Router();

// Nodemailer transporter
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

// Helper: generate 6-digit code
const generateCode = () => Math.floor(100000 + Math.random() * 900000).toString();

// REGISTER
router.post("/register", async (req, res) => {
    const { fullName, email, password, phone, department, semester, city, address } = req.body;

    try {
        const existingStudent = await Student.findOne({ email });
        if (existingStudent) return res.json({ success: false, message: "Email already registered" });

        const verificationCode = generateCode();

        const newStudent = new Student({
            fullName,
            email,
            password,
            phone,
            department,
            semester,
            city,
            address,
            verificationCode,
            verified: false,
        });

        await newStudent.save();

        // Send email
        await transporter.sendMail({
            from: `"CollaXion" <${process.env.EMAIL_USER}>`,
            to: email,
            subject: "Your Verification Code",
            text: `Your verification code is: ${verificationCode}`,
        });

        res.json({ success: true, message: "Verification code sent to your email" });
    } catch (err) {
        console.log(err);
        res.json({ success: false, message: "Server error" });
    }
});

// VERIFY CODE
router.post("/verify", async (req, res) => {
    const { email, code } = req.body;

    try {
        const student = await Student.findOne({ email });

        if (!student) return res.json({ success: false, message: "Student not found" });
        if (student.verificationCode !== code) return res.json({ success: false, message: "Invalid code" });

        student.verified = true;
        student.verificationCode = null;
        await student.save();

        res.json({ success: true, message: "Account verified" });
    } catch (err) {
        console.log(err);
        res.json({ success: false, message: "Server error" });
    }
});



// LOGIN
router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        const student = await Student.findOne({ email });
        if (!student) return res.json({ success: false, message: "Email not registered" });
        if (student.password !== password)
            return res.json({ success: false, message: "Incorrect password" });
        if (!student.verified)
            return res.json({ success: false, message: "Account not verified yet" });

        res.json({ success: true, message: "Login successful", student });
    } catch (err) {
        console.log(err);
        res.json({ success: false, message: "Server error" });
    }
});

export default router;
