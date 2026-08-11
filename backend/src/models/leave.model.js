import mongoose from "mongoose";

const leaveSchema = new mongoose.Schema({
    employeId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    approvedBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    leaveType:{
        type: String,
        required: true,
        enum: ["Casual", "Sick", "Earned", "Half Day"]
    },
    fromDate:{
        type: Date,
        required: true,
    },
    toDate:{
        type: Date,
        required: true
    },
    reason:{
        type: String,
        required: true,
        trim: true
    },
    status:{
        type: String,
        enum: ["Pending", "Approved", "Rejected"],
        default: "Pending"
    }
},{timestamps: true})

export const Leave = mongoose.model("Leave",leaveSchema)