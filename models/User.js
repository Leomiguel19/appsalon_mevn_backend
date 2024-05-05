import mongoose from "mongoose"
import { uniqueId } from "../utils"

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: Number,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    token: {
        type: String,
        required: uniqueId
    },
    verified: {
        type: Boolean,
        required: true,
    },
    admin: {
        type: Boolean,
        required: true,
    },
})

const User = mongoose.model('User', userSchema)
export default User