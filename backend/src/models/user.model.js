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

// dekho ab jo bol rahe hai usko memory main store kar lena ok  admion  eploye ko add karega employe apna name  emial dega goggle ka ok or admin ke pass jayega fir user ko add akrega admin pcuhega ki kon ho thum tho naem  email dega or kon sa departemnt main ho or 