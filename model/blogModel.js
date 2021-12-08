const mongoose=require('mongoose');

const blogSchema={
    title:String,
    content:String,
    category:String
}

const Blog=mongoose.model("Blog",blogSchema);
module.exports=Blog;