import React, { useState } from "react";
import "./NewBlog.css";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

function NewBlog() {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [subtitle, setSubTitle] = useState("");
  const [desc, setDescription] = useState("");
 const navigate = useNavigate()
  const handileImageChange = (e) => {
    setImage(e.target.files[0]);
  };
  const handileSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image);
    formData.append("title", title);
    formData.append("subtitle", subtitle);
    formData.append("desc", desc);
    console.log(formData);

    try {
      const token = sessionStorage.getItem('userToken')// vanna token sessionstorage store cheynnu
      if(token){
        const responce = await axios.post(
          "https://entri-news-sever-backend.onrender.com/posts",
          formData,
          {
            headers: {
              "content-Type": "multipart/form-data",
              'Authorization':`Bearer ${token}`
  
            },
          }
        );
      }else{
         navigate('/login')
      }
  
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="blog-container">
      <form className="form" onSubmit={handileSubmit}>
        <div className="subtitle">Create a new New post</div>
        <div className="blog-controller">
          <label htmlFor="">Blog Image:</label>
          <input
            type="file"
            name="image"
            id="image"
            onChange={handileImageChange}
            required
          />
        </div>

        <div  className="blog-controller">
          <label htmlFor="">Title:</label>
          <input
            type="text"
            name="title"
            value={title}
            id="title"
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div  className="blog-controller">
          <label htmlFor="">subtitle:</label>
          <input
            type="text"
            name="subtitle"
            value={subtitle}
            id="subtitle"
            onChange={(e) => setSubTitle(e.target.value)}
            required
          />
        </div>
        <div  className="blog-controller">
          <label htmlFor="">description:</label>
          <input
            type="text"
            name="desc"
            value={desc}
            id="desc"
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <button>Create</button>
      </form>
    </div>
  );
}

export default NewBlog;
