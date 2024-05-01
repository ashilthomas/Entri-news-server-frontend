import axios from 'axios'
import React,{useEffect,useState} from 'react'
import "./Blog.css"


    function Blogs() {
    const[posts,setPosts]=useState([])
    
    useEffect(()=>{
       const fetchData =async ()=>{
        try {
         const posts =  await axios.get('ashilthomas/Entri-news-server-frontend/posts') 
         setPosts(posts.data)

        } catch (error) {
            console.log(error);
        }
      
       }
       fetchData()
    },[])
    console.log(posts);
  return (
    <div className='gridContainer'>
      
        {
            posts.map((post,index)=>(
               
                <div> 
                    <img key={index} className='blogImage' src={`ashilthomas/Entri-news-server-frontend/${post.image}`} alt="" />
                    <p>{post.title}</p>
                    <p>{post.subtitle}</p>
                    <p>{post.desc}</p>
                </div>
            ))
        }
        
    </div>
  )
}

export default Blogs