import React, { useState } from 'react'
import "./SignUp.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const SignUpForm = () => {
    const navigate = useNavigate()
    const [formData,setFormData]=useState({
        name:"",
        username:'',
        password:'',
        confirmPassword:'',
        email:''
    })

    const handileChange=(e)=>{
        const {name,value}=e.target
        setFormData({...formData,[name]:value})
    }
    const handileSubmit= async(e)=>{
        e.preventDefault();
        try {
        const res = await axios.post("https://entri-news-sever-backend.onrender.com/",formData)
      navigate("/login")
        
        } catch (error) {
            console.error(error);
        }
   
        

    }
  return (
    <div className='signup-container'>
        <h2 className="title">SignUp</h2>
        <form onSubmit={handileSubmit} className='form'>

            <div className="title-text-one">Welcome</div>
            <div className="subtitle">Let's create your account</div>
            <div className='signup-from-controller'>
                <label htmlFor="">Name:</label>
                <input 
                type="text" 
                id='name' 
                name="name"
                value={formData.name}
                onChange={handileChange} 
                />
            </div>
            <div className='signup-from-controller'>
                <label htmlFor="">Username:</label>
                <input 
                type="text" 
                id='name' 
                name="username"
                value={formData.username}
                onChange={handileChange} 
                />
            </div>
            <div className='signup-from-controller'>
                <label htmlFor="">Password:</label>
                <input 
                type="password" 
                id='name' 
                name="password"
                value={formData.password}
                onChange={handileChange} 
                />
            </div >
            <div className='signup-from-controller'>
                <label htmlFor="">confirmpassword:</label>
                <input 
                type="password" 
                id='name' 
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handileChange} 
                />
            </div>
            <div className='signup-from-controller'>
                <label htmlFor="">email:</label>
                <input 
                type="email" 
                id='name' 
                name="email"
                value={formData.email}
                onChange={handileChange} 
                />
            </div>
            <button className='signup-btn' type='submit'>Signup</button>
        </form>

    </div>
  )
}

export default SignUpForm