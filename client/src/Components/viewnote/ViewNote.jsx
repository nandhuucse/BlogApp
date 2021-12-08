import React, { useState, useEffect } from "react";
import "./ViewNote.css";

function ViewNote() {
  const [blogs, setBlogs] = useState([]);
  const [categories, setCategories] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  useEffect(() => {
    fetch("/view")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => {
        setBlogs(jsonRes);
        setFilteredData(jsonRes);
      });
  }, []);
  useEffect(() => {
    const data = blogs.filter((blog) => blog.category === categories);
    if(categories === "-- Select Categories --") setFilteredData(blogs);
    else setFilteredData(data);
  }, [blogs, categories]);

  return (
    <div>
      <h1 className="text-center">Blogs</h1>
      <select
        className="category-form form-control d-block m-auto"
        onChange={(e)=>setCategories(e.target.value)}
      >
        <option>-- Select Categories --</option>
        <option>Education</option>
        <option>Health</option>
        <option>Art</option>
        <option>Music</option>
        <option>Travel</option>
        <option>Fashion</option>
        <option>Food</option>
      </select>
      <div className="bloggy-view">
        {filteredData.length!==0?
        filteredData.map((blog,key) => {
          // console.log(blog)
          return (
            <div className="card blog-card" key={blog.index}>
              <div className="card-body">
                <h5 className="card-title">{blog.title}</h5>
                <p className="card-text">{blog.content}</p>
                <span className="badge badge-info">{blog.category}</span>
              </div>
            </div>
          );
        }):
        <h3 className="no-data d=block m-auto pt-5">No blogs on this Category</h3>
        
        }
      </div>
    </div>
  );
}

export default ViewNote;
