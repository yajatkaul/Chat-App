import express from "express";
import { configDotenv } from 'dotenv';
import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";
import messageRoutes from "./routes/message.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";
import cookieParser from "cookie-parser";

const app = express();

configDotenv();

app.use(express.json()); //from req.body in auth.controller.js --> allows us to extract the json data from there
app.use(cookieParser());


app.get("/",(req,res) => {
    res.send("Hello World");
})

app.use("/api/auth/",authRoutes);

app.use("/api/messages/",messageRoutes);

app.use("/api/users", userRoutes);



app.listen(process.env.PORT,() => {
    connectToMongoDB();
    console.log("http://localhost:5000/");
})