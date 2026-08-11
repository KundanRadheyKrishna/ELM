import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        match: [/^\S+@\S+\.\S+$/, "Please enter a valid email"]
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    department: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Department",
        required: true,
        trim: true
    },
    role: {
        type: String,
        required: true,
        enum: ["Admin", "VC", "HOD", "Employee"]
    },
    isFirstLogin: {
        type: Boolean,
        default: true
    },
    profileImage: {
        type: String,
        default: null
    }
}, { timestamps: true })

export const User = mongoose.model("User", userSchema)