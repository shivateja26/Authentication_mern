import {User} from '../models/user.model.js';
import bcryptjs from 'bcryptjs';

export const signup = async (req,res)=>{
   const {emai,password,name} = req.body;
    try{
        if(!email || !password || !name){
            throw new Error("Required fields : All");
        }
        const userAlreadyExits = await User.findOne({email});
        if(userAlreadyExits){
            return res.status(400).json({succses:false,message:"User already exists"});
        }
        const hashedPassword = await bcryptjs.hash(password,10);
        const verificationToken = Math.floor(100000 + Math.random()*900000).toString();
        const user = new User({
            email,
            password:hashedPassword,
            name,
            verificationToken,
            verificationTokenExpiresAt:Date.now()+24*60*60*1000,//24hrs


        })
        await user.save();
        //jwt
        generateTokenAndSetCookie(res,user._id);
    }
    catch(error){
        res.status(400).json({succses:false,message:error.message});
    }
}

export const login = async (req,res)=>{
    res.send("login route")
}

export const logout = async (req,res)=>{
    res.send("logout route")
}
