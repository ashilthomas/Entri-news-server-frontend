import React, { useEffect, useState } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    password: "",
    email: "",
  });

  const navigate = useNavigate();

  const handileChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handileSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "ashilthomas/Entri-news-server-frontend/users/login",
        formData
      );

      sessionStorage.setItem("userToken", res.data.token);

      navigate("/"); // Navigate to home page  ;
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <div className="signup-container">
      <h2 className="title">LoginForm</h2>
      <form onSubmit={handileSubmit} className="form">
        <div className="title-text-one">Welcome</div>
        <div className="subtitle">Let's create your account</div>

        <div className="signup-from-controller">
          <label htmlFor="">Password:</label>
          <input
            type="password"
            id="name"
            name="password"
            value={formData.password}
            onChange={handileChange}
          />
        </div>

        <div className="signup-from-controller">
          <label htmlFor="">email:</label>
          <input
            type="email"
            id="name"
            name="email"
            value={formData.email}
            onChange={handileChange}
          />
        </div>

        <button className="signup-btn" type="submit">
          LoginForm
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
