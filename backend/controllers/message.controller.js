import Conversation from "../models/conversation.model.js"
import Message from "../models/message.model.js"
import { getReciverSocketId } from "../socket/socket.js";

export const sendMessage = async (req,res) => {
    try{
        const {message} = req.body;
        const {id: reciverId} = req.params;
        const senderId = req.user._id;

        let conversion = await Conversation.findOne({
            participants:{
                $all: [senderId,reciverId]
            },
        })

        if(!conversion){
            conversion = await Conversation.create({
                participants: [senderId,reciverId],
            })
        }

        const newMessage = new Message({
            senderId,
            reciverId,
            message,
        });

        if(newMessage){
            conversion.messages.push(newMessage._id);
        }
        
        await Promise.all([conversion.save(),newMessage.save()]) //Runs in parallel

        //Websockets Here
        const reciverSocketId = getReciverSocketId(reciverId);
        if(reciverSocketId){
            //send to specific client
            io.to(reciverSocketId).emit("newMessage",newMessage)
        }


        res.status(201).json(newMessage);
    }
    catch (err){
        console.log(err.message);
        res.status(500).json({error:"Internal Error"});
    }
};

export const getMessage = async (req,res) => {
    try{
        const {id:userToChatId} = req.params;
        const senderId = req.user._id;

        const conversation = await Conversation.findOne({
            participants: {$all: [senderId, userToChatId]},  //$all means all the matches
        }).populate("messages");  //.populates gives all the elements instead of ids
        
        if(!conversation) return res.status(200).json([]); //If no msgs make it empty

        const messages = conversation.messages;

        res.status(200).json(messages);


    }
    catch (err){
        console.log(err);
        res.status(500).json({err: "Internal Error"});
    }
};



//console.log("Message sent",req.params.id); -- >From message.routes.js ("/send/:id")