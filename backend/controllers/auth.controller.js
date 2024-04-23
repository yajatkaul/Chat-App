import User from '../models/user.model.js';
import bcrypt from "bcryptjs";
import generateTokenAndSetCookie from '../utils/generateToken.js';


export const signupuser = async (req,res) => {
    try{
        const {fullName,username,password,confirmPassword,gender} = req.body;
        if(password !== confirmPassword){
            return res.status(400).json({err:"Passwords don't match"})
        }

        if(username.length < 6){
            return res.status(400).json({err:"Username should be longer than 6"})
        }

        if(fullName.length < 6){
            return res.status(400).json({err:"Name should be longer than 6"})
        }


        const user = await User.findOne({username})

        if(user){
            return res.status(400).json({err:"Username already exists"})
        }

        //Hash Password
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(password, salt);
        //

        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`
    
        const newUser = new User({
            fullName,
            username,
            password: hashedPass,
            gender,
            profilepic: gender === "male" ? boyProfilePic : girlProfilePic,
        });

        //Generate JWT token
        generateTokenAndSetCookie(newUser._id,res);

        await newUser.save(); //save the data
        res.status(201).json({
            _id: newUser._id,
            fullName: newUser.fullName,
            username: newUser.username,
            gender: newUser.gender,
            profilepic: newUser.profilepic
        }) //success status code
    }
    catch (err){
        console.log("Error in signup controller", err.message)
        res.status(500).json({err:"Internal Server Error"}) //500 -> Error Status
    }
}

export const loginUser = async (req,res) => {
    try{
        const {username, password} = req.body;
        const user = await User.findOne({username});
        const isPasswordCorrect = await bcrypt.compare(password, user?.password || ""); //if it is undefined or null compare it with empty string ("")

        if(!user || !isPasswordCorrect){
            return res.status(400).json({err: "Invalid Username or Password"});
        }

        generateTokenAndSetCookie(user._id,res);

        res.status(200).json({
            _id: user._id,
            fullName: user.fullName,
            username: user.username,
            profilepic: user.profilepic,
        });
    }
    catch (err){
        console.log("Error in signup controller", err.message)
        res.status(500).json({err:"Internal Server Error"}) //500 -> Error Status
    }
    
}

export const logout = async (req,res) => {
    try{
        res.cookie("jwt","", {maxAge: 0});
        res.status(200).json({message:"LoggedOut"});
    }
    catch (err){
        console.log("Error in signup controller", err.message)
        res.status(500).json({err:"Internal Server Error"}) //500 -> Error Status
    }
}