import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/images/logo.svg";


function Header() {

    // const [tokens, setToken] = useState("");
    // useEffect(()=>{
    // if (sessionStorage.getItem("userToken")) {
    //       setToken(sessionStorage.getItem("userToken"));
    //     }
    // },[])

  // console.log(tokens);

  const tokenRelease = () => {
    sessionStorage.removeItem("userToken");
  };

  return (
    <div>
      <header className="navbar">
        <img src={logo} alt="Entri newa logo" className="logo" />
        <nav className="links">
          <ul>
            <li className="link">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="link">
              <Link to={"/new"}>new</Link>
            </li>
            <li className="link">
              <Link to={"/blogs"}>Blogs</Link>
            </li>
            <li className="link">
              <Link to={"/trending"}>Trending</Link>
            </li>
            <li className="link">
              <Link to={"/signup"}>Signup</Link>
            </li>
            <li className="link">
              <Link to={"/login"}>login</Link>
            </li>{" "}
            <li className="link">
              <Link to={"/"} onClick={tokenRelease}>
                logout
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
