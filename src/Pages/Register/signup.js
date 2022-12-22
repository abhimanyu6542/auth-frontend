import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./signup.css";
import axios from "axios";

const initialState = {
  fname: "",
  phoneNumber: "",
  email: "",
  password: "",
};

export default function Signup(props) {
  const navigate = useNavigate();
  const [state, setState] = useState(initialState);
  const { fname, phoneNumber, email, password } = state;

  useEffect(() => {
    const authToken = localStorage.getItem("authToken");
    if (authToken) {
      navigate("/profile");
    }
  }, []);

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const handleSignUp = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      "http://localhost:3200/auth/signup",
      state
    );
    console.log(response);
    if(response.status===200){
      navigate("/login");
    }
  };

  return (
    <div className="mainContainerForsignup">
      <div className="submainContainer">
        <div style={{ flex: 1, marginLeft: 150, marginBottom: "170px" }}>
          <p className="logoText">
            My<span className="part">Site</span>
          </p>
          <p className="introtext">
            Connect with your <span className="part">love</span>
          </p>
        </div>
        <div style={{ flex: 3 }}>
          <p className="createaccountTxt">Create New Account</p>
          <form onSubmit={handleSignUp}>
            <input
              id="fname"
              name="fname"
              value={fname}
              type="text"
              placeholder="Full Name"
              onChange={handleInputChange}
              className="inputText"
            />
            <input
              id="phoneNumber"
              name="phoneNumber"
              value={phoneNumber}
              type="text"
              placeholder="Phone Number"
              onChange={handleInputChange}
              className="inputText"
            />
            <input
              id="email"
              name="email"
              value={email}
              type="email"
              placeholder="email"
              onChange={handleInputChange}
              className="inputText"
            />
            <input
              id="password"
              name="password"
              value={password}
              type="password"
              placeholder="*************"
              onChange={handleInputChange}
              className="inputText"
            />
            <input type="submit" className="btnforsignup" value="Sign Up" />
          </form>
          <Link to={"/login"}>
            <p style={{ textAlign: "start", marginLeft: "30.6%" }}>
              Already have a account
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
