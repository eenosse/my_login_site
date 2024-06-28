import logo from "./chinese-man.png"
import React, { useState, useEffect } from "react";

const Navbar = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    // useEffect(() => {
    //     if (!isAuthenticated) {
    //         apiCall("/api/user/me").then((res) =>
    //             setIsAuthenticated(res && res["code"] === 200)
    //         );
    //     }
    // }, [isAuthenticated, setIsAuthenticated]);
    return (
      <nav className="navbar">
        <a href = "/" className="logo">
          <img src={logo} alt="ching"/>
          <h1>JuTube</h1>
        </a>
        <div className="links">
          {!isAuthenticated ? (
            <>
              <a href="/signIn">Login</a>
              <a href="/signUp" style={{ 
                color: 'white', 
                backgroundColor: '#f1356d',
                borderRadius: '8px' 
              }}>Create</a>
            </>
            ) : (
              <>
                <a href="/dashboard">Dashboard</a>
                <a href="/logout">Log out</a>
              </>
            )
          }
          
        </div>
      </nav>
    );
  }
   
  export default Navbar;