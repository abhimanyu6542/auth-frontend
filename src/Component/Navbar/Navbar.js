import React from "react";
import "./navbar.css";
// import searchIcon from "../Images/search.png";
// import Notifications from "../Images/bell.png";
// import Message from "../Images/message.png";
// import Profileimage from "../Images/Profile.png";
import { Link } from "react-router-dom";


export default function Navbar() {
  
  return (
    <div className="mainNavbar">
      <div className="LogoContainer">
        <p>Social</p>
      </div>
      <div>
        <div className="searchInputContainer">
          {/* <img src={`${searchIcon}`} className="searchIcon" alt="" /> */}
          <input
            type="text"
            className="searchInput"
            placeholder="search your friends"
            name=""
            id=""
          />
        </div>
      </div>
      <div className="IconsContainer">
       
        <Link to="/Profile">
          <div style={{ display: "flex", alignItems: "center" }}>
            <p style={{ marginLeft: "5px" }}>{"username"}</p>
          </div>
        </Link>
        <div
          style={{ marginRight: "30px", marginLeft: "20px", cursor: "pointer" }}
          // onClick={handleLogout}
        >
          <p>Logout</p>
        </div>
      </div>
    </div>
  );
}
