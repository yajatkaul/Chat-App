import User from "../models/user.model.js";

export const getUsersForSideBar = async (req,res) => {
    try{
        const loggedInUserId = req.user._id;

        const allUsers = await User.find({_id: {$ne: loggedInUserId}}).select("-password") //$ne -> not equals to ----- show all users except logged in user
    
        res.status(200).json(allUsers);
    }
    catch (err){
        console.log(err);
        res.status(500).json({err: "Internal Error"});
    }
}