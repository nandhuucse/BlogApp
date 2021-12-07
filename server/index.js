const express=require('express');
const app=express();
const cors=require('cors');
const mongoose=require('mongoose');
app.use(cors());
app.use(express.json())


mongoose.connect("mongodb+srv://bloggy:bloggy@cluster0.djusf.mongodb.net/blogdb")

app.use("/",require("./Routes/blogRoute"))

app.get("/",(req,res)=>{
    res.send("hello");
})



app.listen("3001",()=>{
    console.log("server started");
})