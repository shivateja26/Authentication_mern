import { type } from "@testing-library/user-event/dist/type";
import mongoose from "mongoose";

const userSchema = new mangoose.Schema({
    email:{
    type:String,
    required:true,
    unique: true
},
password:{
    type:String,
    required: true
},
name:{
    type:String,
    required:true
},
lastLogin:{
    type:Date,
    default:Date.now
},
isVerified:{
    type:Boolean,
    default:false
},

resetPasswordToken :String,
resetPasswordExpiresAt:Date,
verificaionToken:String,
verificaionTokenExpiresAt:Date,



},{timestamps:true});
