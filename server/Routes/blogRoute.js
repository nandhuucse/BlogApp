const express=require('express');
const router=express.Router();
const Blog = require("../model/blogModel");

router.route("/create").post(async(req,res)=>{
    const title=await req.body.title;
    const content=await req.body.content;
    const category=await req.body.category;

    const newBlog=await new Blog({
        title,
        content,
        category
    })
    try{
       await newBlog.save();
        res.json({status:"ok"});
    }catch(err){
        console.log(err);
    }
})
router.route("/view").get((req,res)=>{
    Blog.find().then(foundBlog=>res.json(foundBlog));
})


module.exports=router