import mongoose from "mongoose";

const userShema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        trim: true
    },
    email: {
        type:String,
        require:true,
        trim:true
    },
    password: {
        type:String,
        require:true
    }

},{
    timestamps:true
})

export default mongoose.model("User", userShema);