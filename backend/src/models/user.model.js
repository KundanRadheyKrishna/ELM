import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        trim: true
    },
    // email ka kaam karna hai ok 
},{timestamps: true})

export const User = mongoose.model("User", userSchema)
