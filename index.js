const express=require('express');
const app=express();
const cors=require('cors');
const mongoose=require('mongoose');
const path = require("path");
let corsOptions = {
    origin: 'http://localhost:5000',
    optionsSuccessStatus: 200
  }
app.use(cors(corsOptions));
app.use(express.json())

mongoose.connect("mongodb+srv://bloggy:bloggy@cluster0.djusf.mongodb.net/blogdb")

app.use("/",require("./Routes/blogRoute"))

app.use(express.static(path.resolve(__dirname, "./client/build")));
app.get("*", (request, response) => {
  response.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});
 


app.listen("5000",()=>{
    console.log("server started");
})