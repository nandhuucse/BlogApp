import React,{useState} from "react";
import axios from "axios";

function CreateNote() {
    const[blogData,setBlogData]=useState({
        title:"",
        content:"",
        category:""
    })
    const[isPosted,setIsPosted]=useState(false)

    const changeHandler=(e)=>{
        const {name,value}=e.target;
        setBlogData(prevInput=>{
            return{
                ...prevInput,[name]:value
            }
        })
    }

    const submitHandler=(e)=>{
        e.preventDefault();
        if(blogData.title!=='' && blogData.content!=='' && blogData.category!==''){
            const newNote={
                title:blogData.title,
                content:blogData.content,
                category:blogData.category
            }
            axios.post("http://localhost:3001/create",newNote)
            setIsPosted(true);
        }
        else{
            alert("fill all fields to create blog")
        }
        
    }
  return (
    <div>
      <h1 className="text-center">Create Note</h1>
      <div className="container">
        <form>
          <div className="form-group">
            <input onChange={changeHandler} name="title" autoComplete="off" placeholder="blog title" value={setBlogData.title} className="form-control"/>
          </div>
          <div className="form-group">
            <textarea onChange={changeHandler} name="content" autoComplete="off" placeholder="blog content" className="form-control" value={setBlogData.content} />
          </div>
          <div className="form-group">
            <select onChange={changeHandler}  name="category" value={setBlogData.category} className="form-control">
                <option>--Select Category--</option>
                <option>Education</option>
                <option>Health</option>
                <option>Art</option>
                <option>Music</option>
                <option>Travel</option>
                <option>Fashion</option>
                <option>Food</option>
            </select>
        
          </div>
          <button className="btn btn-lg btn-info" type="submit" onClick={submitHandler}>Save Blog</button>
        </form>
      </div>
    </div>
  );
}

export default CreateNote;
